/**
 * SIMBA - LIGHTWEIGHT VOLCANIC PARTICLE ERUPTION ENGINE
 * HTML5 Canvas 2D Physics Simulator (< 12 KB, 60 FPS)
 * Menampilkan BENTUK GUNUNG UTUH (Stratovolcano) dari puncak kawah,
 * lereng jurang, relief batuan, hingga ke KAKI GUNUNG & DATARAN di bawahnya.
 */

class VolcanicEruptionEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.animId = null;
    this.isRunning = false;

    // Particle pools
    this.sparks = [];
    this.smoke = [];
    this.stars = [];
    this.maxSparks = 85;
    this.maxSmoke = 40;

    this.vent = { x: 0, y: 0 };
    this.glowPulse = 0;

    this.init();
  }

  init() {
    this.resize();
    this.createStars();
    window.addEventListener('resize', () => {
      this.resize();
      this.createStars();
    });
  }

  resize() {
    if (!this.canvas) return;
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    
    // Titik kawah puncak gunung diposisikan di tengah vertikal (~42% - 46% tinggi layar)
    // sehingga puncak, lereng kerucut, dan KAKI GUNUNG terlihat megah membentang utuh sampai ke dasar layar
    this.vent.x = this.width * 0.5;
    this.vent.y = Math.max(Math.min(this.height * 0.44, 340), 240);
  }

  createStars() {
    this.stars = [];
    const count = Math.floor((this.width * this.height) / 7500);
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.width,
        y: Math.random() * (this.height * 0.55),
        radius: Math.random() * 1.3 + 0.3,
        alpha: Math.random() * 0.7 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005
      });
    }
  }

  createSpark() {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.85;
    const speed = 7 + Math.random() * 13;
    return {
      x: this.vent.x + (Math.random() - 0.5) * 50,
      y: this.vent.y - 4,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      gravity: 0.18 + Math.random() * 0.08,
      size: 2.2 + Math.random() * 3.5,
      life: 0,
      maxLife: 50 + Math.random() * 50,
      color: Math.random() > 0.4 ? '#FF5722' : (Math.random() > 0.5 ? '#FF9800' : '#FFF7ED')
    };
  }

  createSmoke() {
    return {
      x: this.vent.x + (Math.random() - 0.5) * 55,
      y: this.vent.y - 10,
      vx: (Math.random() - 0.5) * 1.6,
      vy: -1.2 - Math.random() * 2.0,
      radius: 16 + Math.random() * 18,
      maxRadius: 90 + Math.random() * 70,
      alpha: 0.30 + Math.random() * 0.15,
      decay: 0.0016 + Math.random() * 0.0018
    };
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.loop();
  }

  stop() {
    this.isRunning = false;
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  loop() {
    if (!this.isRunning) return;
    this.render();
    this.animId = requestAnimationFrame(() => this.loop());
  }

  render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    this.glowPulse += 0.035;
    const pulseFactor = 0.88 + Math.sin(this.glowPulse) * 0.12;

    // 1. Langit Senja Vulkanik (Twilight Sky) & Bintang-Bintang
    this.drawSkyAndStars(ctx);

    // 2. Siluet Pegunungan Jauh di Latar Belakang
    this.drawDistantMountainRanges(ctx);

    // 3. Render Kepulan Abu Vulkanik (Ash Plume) dari Kawah
    this.renderAshPlume(ctx);

    // 4. BENTUK GUNUNG UTUH: Dari Puncak Kawah, Lereng Megah, hingga Kaki Gunung Melandai
    this.drawFullMountain(ctx, pulseFactor);

    // 5. Render Percikan Magma & Lava Sparks yang Melesat ke Langit
    this.renderLavaSparks(ctx);

    // 6. Danau Magma & Pendaran Cahaya Kawah Puncak
    this.drawCraterSummit(ctx, pulseFactor);
  }

  drawSkyAndStars(ctx) {
    const w = this.width;
    const h = this.height;
    const vy = this.vent.y;

    ctx.save();
    // Gradasi langit malam dengan pendaran senja vulkanik di balik gunung
    const skyGrad = ctx.createLinearGradient(0, 0, 0, vy + 120);
    skyGrad.addColorStop(0, '#07080B');
    skyGrad.addColorStop(0.55, '#0E111A');
    skyGrad.addColorStop(0.85, '#241217'); // Siluet merah temaram di horizon
    skyGrad.addColorStop(1, '#3B171A');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, w, h);

    // Bintang-bintang malam
    for (const star of this.stars) {
      star.alpha += Math.sin(this.glowPulse * 40 * star.twinkleSpeed) * 0.01;
      const currentAlpha = Math.max(0.15, Math.min(0.9, star.alpha));
      ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  drawDistantMountainRanges(ctx) {
    const w = this.width;
    const h = this.height;
    const vy = this.vent.y;

    ctx.save();
    // Layer 1: Siluet Pegunungan Paling Jauh (Warna Kabut Abu-abu Kebiruan)
    ctx.fillStyle = '#141824';
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(0, vy + 70);
    ctx.lineTo(w * 0.16, vy + 20);
    ctx.lineTo(w * 0.28, vy + 65);
    ctx.lineTo(w * 0.42, vy + 35);
    ctx.lineTo(w * 0.58, vy + 50);
    ctx.lineTo(w * 0.74, vy + 15);
    ctx.lineTo(w * 0.88, vy + 60);
    ctx.lineTo(w, vy + 30);
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    // Layer 2: Siluet Perbukitan Tengah
    ctx.fillStyle = '#181E2E';
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(0, vy + 110);
    ctx.lineTo(w * 0.22, vy + 80);
    ctx.lineTo(w * 0.38, vy + 120);
    ctx.lineTo(w * 0.65, vy + 105);
    ctx.lineTo(w * 0.82, vy + 75);
    ctx.lineTo(w, vy + 100);
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  renderAshPlume(ctx) {
    while (this.smoke.length < this.maxSmoke) {
      this.smoke.push(this.createSmoke());
    }

    ctx.save();
    for (let i = this.smoke.length - 1; i >= 0; i--) {
      const s = this.smoke[i];
      s.x += s.vx;
      s.y += s.vy;
      s.radius += 0.32;
      s.alpha -= s.decay;

      if (s.alpha <= 0 || s.y < -120) {
        this.smoke.splice(i, 1);
        continue;
      }

      const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius);
      grad.addColorStop(0, `rgba(60, 64, 75, ${s.alpha * 0.90})`);
      grad.addColorStop(0.5, `rgba(35, 38, 48, ${s.alpha * 0.50})`);
      grad.addColorStop(1, 'rgba(11, 12, 16, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  drawFullMountain(ctx, pulseFactor) {
    const vx = this.vent.x;
    const vy = this.vent.y;
    const w = this.width;
    const h = this.height;

    // Lebar kaki gunung membentang proporsional dengan lebar layar
    const footSpread = Math.max(w * 0.52, 540);
    const midSpread = Math.max(w * 0.28, 280);

    ctx.save();

    // 1. Gradasi Batuan Tubuh Gunung dari Puncak Basalt ke Kaki Gunung
    // Diberi tone abu-abu gelap kebiruan bertekstur batuan vulkanik agar kontras jelas terlihat
    const mountainGrad = ctx.createLinearGradient(vx, vy, vx, h);
    mountainGrad.addColorStop(0, '#2D3344');    // Batuan puncak basalt
    mountainGrad.addColorStop(0.35, '#202534'); // Lereng tengah
    mountainGrad.addColorStop(0.70, '#161922'); // Kaki gunung
    mountainGrad.addColorStop(1, '#0C0E14');    // Dataran rendah kaki gunung
    ctx.fillStyle = mountainGrad;

    // GAMBAR BENTUK GUNUNG UTUH (CONICAL STRATOVOLCANO)
    ctx.beginPath();
    ctx.moveTo(0, h);
    
    // Dataran Kiri ke Kaki Gunung Kiri
    ctx.lineTo(0, h * 0.88);
    ctx.quadraticCurveTo(vx - footSpread * 1.25, h * 0.86, vx - footSpread, h * 0.82);
    // Lereng Bawah Menanjak Halus (Kaki Gunung Kiri)
    ctx.quadraticCurveTo(vx - midSpread * 1.35, vy + (h - vy) * 0.60, vx - midSpread, vy + (h - vy) * 0.40);
    // Lereng Atas Curam Menuju Kawah Puncak
    ctx.quadraticCurveTo(vx - 110, vy + 38, vx - 50, vy);
    
    // Bibir Kawah Puncak
    ctx.lineTo(vx + 50, vy);
    
    // Lereng Atas Kanan Curam
    ctx.quadraticCurveTo(vx + 110, vy + 38, vx + midSpread, vy + (h - vy) * 0.40);
    // Lereng Bawah Menurun (Kaki Gunung Kanan)
    ctx.quadraticCurveTo(vx + midSpread * 1.35, vy + (h - vy) * 0.60, vx + footSpread, h * 0.82);
    // Kaki Gunung Kanan Melandai ke Dataran
    ctx.quadraticCurveTo(vx + footSpread * 1.25, h * 0.86, w, h * 0.88);
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    // 2. GARIS KONTUR & HIGHLIGHT RIM LIGHTING (Cahaya Emas Magma di Punggung Gunung)
    // Membuat bentuk gunung terlihat jelas dan terdefinisi tajam
    ctx.strokeStyle = 'rgba(255, 120, 50, 0.40)';
    ctx.lineWidth = 2.5;

    // Garis lereng kiri atas
    ctx.beginPath();
    ctx.moveTo(vx - 50, vy);
    ctx.quadraticCurveTo(vx - 110, vy + 38, vx - midSpread, vy + (h - vy) * 0.40);
    ctx.quadraticCurveTo(vx - midSpread * 1.35, vy + (h - vy) * 0.60, vx - footSpread, h * 0.82);
    ctx.stroke();

    // Garis lereng kanan atas
    ctx.beginPath();
    ctx.moveTo(vx + 50, vy);
    ctx.quadraticCurveTo(vx + 110, vy + 38, vx + midSpread, vy + (h - vy) * 0.40);
    ctx.quadraticCurveTo(vx + midSpread * 1.35, vy + (h - vy) * 0.60, vx + footSpread, h * 0.82);
    ctx.stroke();

    // Relief Garis Lembah & Punggung Bukit Vulkanik (Mountain Ridges)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 2.0;

    // Tulang punggung kiri
    ctx.beginPath();
    ctx.moveTo(vx - 30, vy + 6);
    ctx.quadraticCurveTo(vx - midSpread * 0.7, vy + 120, vx - footSpread * 0.75, h * 0.88);
    ctx.stroke();

    // Tulang punggung kanan
    ctx.beginPath();
    ctx.moveTo(vx + 30, vy + 6);
    ctx.quadraticCurveTo(vx + midSpread * 0.7, vy + 120, vx + footSpread * 0.75, h * 0.88);
    ctx.stroke();

    // Rusuk tengah
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.beginPath();
    ctx.moveTo(vx - 8, vy + 10);
    ctx.quadraticCurveTo(vx - 20, vy + 180, vx - 50, h * 0.86);
    ctx.stroke();

    // 3. Aliran Lahar / Fissure Lava Pijar di Lereng Tubuh Gunung
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.shadowColor = '#FF5722';
    ctx.shadowBlur = 16;

    // Jalur Lava 1 (Kiri)
    ctx.strokeStyle = `rgba(255, 87, 34, ${0.75 * pulseFactor})`;
    ctx.lineWidth = 4.0;
    ctx.beginPath();
    ctx.moveTo(vx - 20, vy + 4);
    ctx.quadraticCurveTo(vx - 50, vy + 65, vx - 35, vy + 120);
    ctx.quadraticCurveTo(vx - 18, vy + 170, vx - 70, vy + 240);
    ctx.stroke();

    // Inti Kuning Panas Jalur Lava 1
    ctx.strokeStyle = `rgba(255, 235, 59, ${0.85 * pulseFactor})`;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(vx - 20, vy + 4);
    ctx.quadraticCurveTo(vx - 50, vy + 65, vx - 35, vy + 120);
    ctx.quadraticCurveTo(vx - 18, vy + 170, vx - 70, vy + 240);
    ctx.stroke();

    // Jalur Lava 2 (Kanan)
    ctx.strokeStyle = `rgba(255, 61, 0, ${0.70 * pulseFactor})`;
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(vx + 22, vy + 4);
    ctx.quadraticCurveTo(vx + 45, vy + 55, vx + 28, vy + 105);
    ctx.quadraticCurveTo(vx + 60, vy + 155, vx + 45, vy + 220);
    ctx.stroke();

    // Inti Kuning Panas Jalur Lava 2
    ctx.strokeStyle = `rgba(255, 215, 64, ${0.80 * pulseFactor})`;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(vx + 22, vy + 4);
    ctx.quadraticCurveTo(vx + 45, vy + 55, vx + 28, vy + 105);
    ctx.quadraticCurveTo(vx + 60, vy + 155, vx + 45, vy + 220);
    ctx.stroke();

    ctx.restore();

    // 4. Siluet Dataran Kaki Gunung & Lembah di Lapisan Paling Bawah
    ctx.fillStyle = '#090B10';
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(0, h * 0.90);
    ctx.quadraticCurveTo(w * 0.25, h * 0.88, w * 0.5, h * 0.91);
    ctx.quadraticCurveTo(w * 0.75, h * 0.88, w, h * 0.90);
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    // Garis kontur lembut di kaki bukit
    ctx.strokeStyle = 'rgba(255, 87, 34, 0.16)';
    ctx.lineWidth = 2.0;
    ctx.beginPath();
    ctx.moveTo(0, h * 0.90);
    ctx.quadraticCurveTo(w * 0.25, h * 0.88, w * 0.5, h * 0.91);
    ctx.quadraticCurveTo(w * 0.75, h * 0.88, w, h * 0.90);
    ctx.stroke();

    ctx.restore();
  }

  renderLavaSparks(ctx) {
    while (this.sparks.length < this.maxSparks) {
      this.sparks.push(this.createSpark());
    }

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (let i = this.sparks.length - 1; i >= 0; i--) {
      const p = this.sparks[i];
      p.x += p.vx;
      p.vy += p.gravity;
      p.y += p.vy;
      p.life++;

      const progress = p.life / p.maxLife;
      if (progress >= 1 || p.y > this.height) {
        this.sparks.splice(i, 1);
        continue;
      }

      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 14;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * (1 - progress * 0.35), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  drawCraterSummit(ctx, pulseFactor) {
    const vx = this.vent.x;
    const vy = this.vent.y;

    // Ambient Magma Glow Radial di Puncak Kawah
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const glowGrad = ctx.createRadialGradient(vx, vy, 10, vx, vy, 300 * pulseFactor);
    glowGrad.addColorStop(0, 'rgba(255, 87, 34, 0.70)');
    glowGrad.addColorStop(0.35, 'rgba(220, 38, 38, 0.35)');
    glowGrad.addColorStop(1, 'rgba(11, 12, 16, 0)');
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(vx, vy, 300 * pulseFactor, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Danau Kawah Berpijar (Molten Lava Lake)
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const craterGrad = ctx.createRadialGradient(vx, vy, 4, vx, vy, 52);
    craterGrad.addColorStop(0, '#FFFFFF');
    craterGrad.addColorStop(0.25, '#FFF7ED');
    craterGrad.addColorStop(0.55, '#FF9800');
    craterGrad.addColorStop(0.85, '#FF5722');
    craterGrad.addColorStop(1, 'rgba(220, 38, 38, 0.5)');

    ctx.fillStyle = craterGrad;
    ctx.shadowColor = '#FF5722';
    ctx.shadowBlur = 24;
    ctx.beginPath();
    ctx.ellipse(vx, vy, 52, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    // Garis Bibir Kawah Berpijar Emas
    ctx.strokeStyle = `rgba(255, 243, 224, ${0.95 * pulseFactor})`;
    ctx.lineWidth = 2.8;
    ctx.beginPath();
    ctx.ellipse(vx, vy, 52, 10, 0, 0, Math.PI);
    ctx.stroke();
    ctx.restore();
  }
}

window.VolcanicEruptionEngine = VolcanicEruptionEngine;
