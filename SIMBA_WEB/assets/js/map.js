/**
 * SIMBA - MAP CONTROLLER (LEAFLET.JS + MARKERCLUSTER)
 * Peta Sebaran Gunung Api Seluruh Indonesia (Aktif & Dorman/Tidak Aktif)
 * Basemap 100% Bebas API Key
 */

class SimbaMap {
  constructor(containerId) {
    this.containerId = containerId;
    this.map = null;
    this.clusterGroup = null;
    this.markersMap = new Map();
    this.activeStatusFilter = 'all';
    this.activeTypeFilter = 'all'; // 'all', 'active', 'dormant'
    this.isInitialized = false;

    this.init();
  }

  init() {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    if (typeof L === 'undefined') {
      console.warn('[SIMBA Map] Pustaka Leaflet.js belum termuat. Mencoba lagi...');
      setTimeout(() => this.init(), 250);
      return;
    }

    if (this.isInitialized && this.map) {
      this.invalidateSize();
      return;
    }

    try {
      // 1. Inisialisasi Peta Leaflet Berpusat di Kepulauan Indonesia
      this.map = L.map(this.containerId, {
        center: [-2.5489, 118.0149],
        zoom: 5,
        minZoom: 4,
        maxZoom: 18,
        zoomControl: false
      });

      // Pindahkan zoom control ke pojok kanan atas
      L.control.zoom({ position: 'topright' }).addTo(this.map);

      // 2. Definisi Basemap Tiles (100% Bebas API Key)
      // a. OpenStreetMap Standar Resmi (Bebas API Key, selalu aktif)
      const osmStandard = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> kontributor',
        maxZoom: 19
      });

      // b. Esri World Imagery (Citra Satelit Bumi Bebas API Key)
      const esriSatellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; Esri, Maxar, Earthstar Geographics',
        maxZoom: 18
      });

      // c. Esri World Dark Gray Canvas (Peta Gelap Bebas API Key)
      const esriDark = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; Esri, HERE, Garmin, &copy; OpenStreetMap',
        maxZoom: 16
      });

      // Pasang OpenStreetMap sebagai default utama yang stabil
      osmStandard.addTo(this.map);

      // Basemap Switcher Layer Control
      const baseLayers = {
        "OpenStreetMap Standar": osmStandard,
        "Citra Satelit (Esri)": esriSatellite,
        "Peta Gelap (Esri Canvas)": esriDark
      };
      L.control.layers(baseLayers, null, { position: 'topright' }).addTo(this.map);

      // 3. Inisialisasi Marker Cluster Group
      if (typeof L.markerClusterGroup === 'function') {
        this.clusterGroup = L.markerClusterGroup({
          showCoverageOnHover: false,
          maxClusterRadius: 40,
          spiderfyOnMaxZoom: true,
          iconCreateFunction: (cluster) => {
            const count = cluster.getChildCount();
            let sizeClass = 'cluster-small';
            if (count >= 15) sizeClass = 'cluster-large';
            else if (count >= 6) sizeClass = 'cluster-medium';

            return L.divIcon({
              html: `<div class="custom-cluster-marker ${sizeClass}"><span>${count}</span></div>`,
              className: 'custom-cluster-wrapper',
              iconSize: L.point(40, 40)
            });
          }
        });
      } else {
        console.warn('[SIMBA Map] MarkerClusterGroup tidak ditemukan, menggunakan L.featureGroup');
        this.clusterGroup = L.featureGroup();
      }

      this.map.addLayer(this.clusterGroup);

      // 4. Muat Titik-Titik Gunung Api
      this.renderVolcanoMarkers();
      this.isInitialized = true;

      // Invalidate size untuk memastikan rendering langsung tampil
      this.invalidateSize();

    } catch (err) {
      console.error('[SIMBA Map Init Error]:', err);
    }
  }

  getPinColor(volcano) {
    // Jika tipe B atau C (Dorman / Tidak Aktif)
    if (!volcano.kategori_aktif || volcano.tipe === 'B' || volcano.tipe === 'C') {
      return { 
        bg: '#3B82F6', 
        ring: 'rgba(59, 130, 246, 0.4)', 
        pulse: false, 
        label: volcano.tipe === 'B' ? 'Dorman' : 'Tidak Aktif' 
      };
    }

    switch (volcano.status.level) {
      case 4: return { bg: '#DC2626', ring: 'rgba(220, 38, 38, 0.65)', pulse: true, label: 'Awas' };
      case 3: return { bg: '#F97316', ring: 'rgba(249, 115, 22, 0.65)', pulse: true, label: 'Siaga' };
      case 2: return { bg: '#EAB308', ring: 'rgba(234, 179, 8, 0.5)', pulse: false, label: 'Waspada' };
      case 1:
      default: return { bg: '#10B981', ring: 'rgba(16, 185, 129, 0.4)', pulse: false, label: 'Normal' };
    }
  }

  createPinIcon(volcano) {
    const colorInfo = this.getPinColor(volcano);
    const pulseClass = colorInfo.pulse ? 'animate-alert-pulse' : '';
    const isDormant = !volcano.kategori_aktif;

    const html = `
      <div class="volcano-pin relative flex items-center justify-center w-7 h-7 rounded-full border-2 border-white/95 shadow-xl transition-transform hover:scale-125" style="background-color: ${colorInfo.bg};">
        ${isDormant ? `
          <svg class="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2L2 16h16L10 2zm0 4.2L14.5 14H5.5L10 6.2z"/></svg>
        ` : `
          <span class="w-2.5 h-2.5 rounded-full bg-white"></span>
        `}
        ${colorInfo.pulse ? `<span class="absolute -inset-1.5 rounded-full ${pulseClass}" style="background-color: ${colorInfo.ring}; z-index: -1;"></span>` : ''}
      </div>
    `;

    return L.divIcon({
      html: html,
      className: 'custom-pin-container',
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -16]
    });
  }

  createPopupContent(v) {
    const isDormant = !v.kategori_aktif;
    const statusBg = isDormant ? 'bg-blue-500/20 text-blue-400 border-blue-500/40' :
                     v.status.level === 4 ? 'bg-red-500/20 text-red-400 border-red-500/40' :
                     v.status.level === 3 ? 'bg-orange-500/20 text-orange-400 border-orange-500/40' :
                     v.status.level === 2 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40' :
                                            'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';

    const statusBadgeText = isDormant ? `Tipe ${v.tipe}: ${v.tipe === 'B' ? 'Dorman' : 'Tidak Aktif'}` : `Level ${v.status.level}: ${v.status.label}`;

    return `
      <div class="p-4 w-72 sm:w-80 font-sans text-zinc-200">
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${statusBg}">
            ${statusBadgeText}
          </span>
          <span class="text-[11px] text-zinc-400 font-mono">${v.lokasi.pulau}</span>
        </div>
        
        <h3 class="text-base font-bold text-white mb-0.5 leading-snug font-heading">${v.nama}</h3>
        <p class="text-xs text-zinc-400 mb-3 flex items-center gap-1">
          <svg class="w-3.5 h-3.5 text-orange-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          ${v.lokasi.kabupaten}, ${v.lokasi.provinsi}
        </p>

        <div class="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs mb-3">
          <div>
            <span class="text-[10px] text-zinc-400 block">Ketinggian:</span>
            <span class="font-bold text-white">${v.ketinggian_mdpl.toLocaleString('id-ID')} mdpl</span>
          </div>
          <div>
            <span class="text-[10px] text-zinc-400 block">Status / Erupsi:</span>
            <span class="font-bold text-orange-400 truncate block">${v.erupsi_terakhir}</span>
          </div>
        </div>

        <button onclick="window.SIMBA_APP.openDetail('${v.id}')" class="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold text-xs transition duration-150 flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(255,87,34,0.35)]">
          <span>Lihat Detail & Panduan Mitigasi</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>
    `;
  }

  renderVolcanoMarkers() {
    if (!window.SIMBA_VOLCANOES || !this.clusterGroup) return;

    this.clusterGroup.clearLayers();
    this.markersMap.clear();

    let countShown = 0;

    window.SIMBA_VOLCANOES.forEach(v => {
      // 1. Filter Tipe Keaktifan (Semua / Aktif / Dorman)
      if (this.activeTypeFilter === 'active' && !v.kategori_aktif) return;
      if (this.activeTypeFilter === 'dormant' && v.kategori_aktif) return;

      // 2. Filter Status Level (Semua / Awas / Siaga / Waspada / Normal)
      if (this.activeStatusFilter !== 'all' && v.status.label.toLowerCase() !== this.activeStatusFilter.toLowerCase()) {
        return;
      }

      const marker = L.marker([v.koordinat.lat, v.koordinat.lng], {
        icon: this.createPinIcon(v),
        title: `${v.nama} (${v.kategori_aktif ? 'Aktif' : 'Dorman'})`
      });

      marker.bindPopup(this.createPopupContent(v), {
        maxWidth: 320,
        className: 'custom-leaflet-popup'
      });

      this.clusterGroup.addLayer(marker);
      this.markersMap.set(v.id, marker);
      countShown++;
    });

    // Update label counter jika ada
    const counterEl = document.getElementById('map-volcano-count');
    if (counterEl) {
      counterEl.textContent = `${countShown} Titik Gunung Terdeteksi`;
    }
  }

  setStatusFilter(filter) {
    this.activeStatusFilter = filter;
    this.renderVolcanoMarkers();
  }

  setFilter(filter) {
    this.setStatusFilter(filter);
  }

  setTypeFilter(filter) {
    this.activeTypeFilter = filter;
    this.renderVolcanoMarkers();
  }

  focusVolcano(id) {
    const marker = this.markersMap.get(id);
    const volcano = window.SIMBA_VOLCANOES.find(v => v.id === id);
    if (volcano && this.map) {
      this.map.flyTo([volcano.koordinat.lat, volcano.koordinat.lng], 11, {
        animate: true,
        duration: 1.2
      });

      setTimeout(() => {
        if (marker) {
          if (typeof this.clusterGroup.zoomToShowLayer === 'function') {
            this.clusterGroup.zoomToShowLayer(marker, () => {
              marker.openPopup();
            });
          } else {
            marker.openPopup();
          }
        }
      }, 1300);
    }
  }

  invalidateSize() {
    if (this.map) {
      this.map.invalidateSize(true);
      setTimeout(() => {
        if (this.map) this.map.invalidateSize(true);
      }, 150);
      setTimeout(() => {
        if (this.map) this.map.invalidateSize(true);
      }, 400);
    } else if (!this.isInitialized) {
      this.init();
    }
  }
}

window.SimbaMap = SimbaMap;
