/**
 * SIMBA - CINEMATIC VOLCANIC ERUPTION & HERO INTRO ENGINE
 * HTML5 Canvas 2D Physics Simulator & Stage Controller (< 25 KB, 60 FPS)
 * 
 * Alur Animasi Sinematik:
 * 1. FASE 1: DIAM (Tenang, siluet gunung megah di bawah langit malam berbintang)
 * 2. FASE 2: BERASAP (Kepulan abu solfatara mulai mengepul dari kawah puncak)
 * 3. FASE 3: MEMERAH (Kawah berpijar merah/oranye membara, celah lereng retak menyala, getaran tremor)
 * 4. FASE 4: MELEDAK / DUARRRR! (Flash ledakan dahsyat, shockwave, guncangan layar, kilat vulkanik, lontaran batu pijar)
 * 5. FASE 5: TRANSISI HERO (Teks "WELCOME TO SIMBA" muncul megah & erupsi berlanjut aktif di background)
 */

class VolcanicEruptionEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.animId = null;
    this.isRunning = false;

    // Phase Configuration
    this.PHASES = {
      CALM: { key: 'calm', duration: 1800, label: 'FASE 1: NORMAL • GUNUNG TENANG', color: '#10B981', badgeClass: 'border-emerald-500/60 text-emerald-400' },
      SMOKE: { key: 'smoke', duration: 2200, label: 'FASE 2: WASPADA • KEPULAN ASAP SOLFATARA', color: '#FACC15', badgeClass: 'border-yellow-500/60 text-yellow-400' },
      HEATING: { key: 'heating', duration: 2200, label: 'FASE 3: SIAGA • INTRUSI MAGMA & PEMANASAN KAWAH', color: '#FB923C', badgeClass: 'border-orange-500/60 text-orange-400' },
      ERUPTING: { key: 'erupting', duration: 2500, label: 'FASE 4: AWAS • ERUPSI PAROKSISMAL (DUARRRR!)', color: '#EF4444', badgeClass: 'border-red-500/60 text-red-400' },
      ACTIVE: { key: 'active', duration: Infinity, label: 'ERUPSI PAROKSISMAL AKTIF (LEVEL IV)', color: '#EF4444', badgeClass: 'border-red-500/60 text-red-400' }
    };

    this.currentPhase = 'calm';
    this.phaseTimer = 0;
    this.heroRevealed = false;

    // Callbacks
    this.onStateChange = null;
    this.onHeroReveal = null;

    // Particle pools
    this.sparks = [];      // Lava sparks & ballistic bombs
    this.smoke = [];       // Volcanic ash & steam clouds
    this.stars = [];       // Night sky stars
    this.lightning = [];   // Volcanic lightning bolts
    this.shockwaves = [];  // Blast shockwave rings

    // Visual states
    this.vent = { x: 0, y: 0 };
    this.glowPulse = 0;
    this.craterGlow = 0;       // 0 (dark) -> 1 (incandescent white-orange)
    this.lavaProgress = 0;     // 0 (no lava) -> 1 (flowing down flanks)
    this.flashAlpha = 0;       // Screen explosion flash
    this.shakeMagnitude = 0;   // Screen tremor/shake
    this.lastLightningTime = 0;

    // Audio synthesizer context & sound preference
    this.soundEnabled = localStorage.getItem('simba_sound_enabled') !== 'false';
    this.audioCtx = null;
    this.hasPlayedExplosionSound = false;

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
    
    // Titik kawah puncak gunung diposisikan di tengah vertikal (~44% - 47% tinggi layar)
    this.vent.x = this.width * 0.5;
    this.vent.y = Math.min(Math.max(this.height * 0.46, 220), 380);
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

  // --- AUDIO SYNTHESIZER & SOUND CONTROLLER ---
  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    localStorage.setItem('simba_sound_enabled', this.soundEnabled ? 'true' : 'false');

    if (this.soundEnabled) {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          if (!this.audioCtx) this.audioCtx = new AudioCtx();
          if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
        }
      } catch (e) {}
    }
    return this.soundEnabled;
  }

  playExplosionAudio() {
    if (!this.soundEnabled || this.hasPlayedExplosionSound) return;
    this.hasPlayedExplosionSound = true;

    // 1. Coba putar file MP3 jika ada di assets/audio/eruption.mp3
    try {
      const audio = new Audio('assets/audio/eruption.mp3');
      audio.volume = 0.85;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          return;
        }).catch(() => {
          this.synthesizeVolcanicBoom();
        });
      } else {
        this.synthesizeVolcanicBoom();
      }
    } catch (e) {
      this.synthesizeVolcanicBoom();
    }
  }

  synthesizeVolcanicBoom() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!this.audioCtx) this.audioCtx = new AudioCtx();
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const ctx = this.audioCtx;
      const now = ctx.currentTime;
      const duration = 3.2;
      const bufferSize = ctx.sampleRate * duration;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);

      // Generate brown/pink volcanic noise
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + (0.025 * white)) / 1.025;
        lastOut = output[i];
        output[i] *= 3.8;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuffer;

      // Resonant Lowpass Filter for Deep Volcanic Rumble
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(420, now);
      filter.frequency.exponentialRampToValueAtTime(50, now + 2.8);

      // Gain Envelope (Sharp Attack "BOOM/DUARRR" -> Slow Deep Rumble)
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.95, now + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(now);
      noise.stop(now + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  // --- CONTROLS: RESET & REPLAY ---
  restartSequence() {
    this.currentPhase = 'calm';
    this.phaseTimer = 0;
    this.heroRevealed = false;
    this.hasPlayedExplosionSound = false;

    this.sparks = [];
    this.smoke = [];
    this.lightning = [];
    this.shockwaves = [];
    this.craterGlow = 0;
    this.lavaProgress = 0;
    this.flashAlpha = 0;
    this.shakeMagnitude = 0;

    if (this.onStateChange) {
      this.onStateChange(this.PHASES.CALM);
    }
    this.start();
  }

  skipToActive() {
    this.currentPhase = 'active';
    this.phaseTimer = 0;
    this.craterGlow = 1;
    this.lavaProgress = 1;
    this.flashAlpha = 0;
    this.shakeMagnitude = 0;

    if (!this.heroRevealed) {
      this.heroRevealed = true;
      if (this.onHeroReveal) this.onHeroReveal();
    }
    if (this.onStateChange) {
      this.onStateChange(this.PHASES.ACTIVE);
    }
  }

  // --- PARTICLE EMITTERS ---
  createSmoke(isExplosive = false) {
    const vx = this.vent.x;
    const vy = this.vent.y;

    if (isExplosive) {
      // Gumpalan abu tebal letusan eksplosif
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.9;
      const speed = 2.5 + Math.random() * 4.5;
      return {
        x: vx + (Math.random() - 0.5) * 60,
        y: vy - 10,
        vx: Math.cos(angle) * speed + (Math.random() - 0.5) * 1.5,
        vy: Math.sin(angle) * speed,
        radius: 20 + Math.random() * 25,
        maxRadius: 130 + Math.random() * 90,
        alpha: 0.85,
        decay: 0.0025 + Math.random() * 0.002,
        colorType: Math.random() > 0.4 ? 'ash' : (Math.random() > 0.5 ? 'pyroclast' : 'dark')
      };
    } else {
      // Kepulan asap solfatara tenang
      return {
        x: vx + (Math.random() - 0.5) * 45,
        y: vy - 8,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -1.0 - Math.random() * 1.8,
        radius: 14 + Math.random() * 16,
        maxRadius: 80 + Math.random() * 60,
        alpha: 0.45,
        decay: 0.0018 + Math.random() * 0.0015,
        colorType: 'soft'
      };
    }
  }

  createLavaBomb(burst = false) {
    const vx = this.vent.x;
    const vy = this.vent.y;

    const angle = -Math.PI / 2 + (Math.random() - 0.5) * (burst ? 1.2 : 0.85);
    const speed = burst ? (11 + Math.random() * 17) : (6 + Math.random() * 10);
    const size = burst ? (3.5 + Math.random() * 5.5) : (2.0 + Math.random() * 3.5);

    return {
      x: vx + (Math.random() - 0.5) * 40,
      y: vy - 8,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      gravity: 0.22 + Math.random() * 0.08,
      size: size,
      life: 0,
      maxLife: 60 + Math.random() * 70,
      color: Math.random() > 0.35 ? '#FFEB3B' : (Math.random() > 0.5 ? '#FF5722' : '#FFF'),
      trail: []
    };
  }

  triggerExplosion() {
    this.flashAlpha = 0.95;
    this.shakeMagnitude = 18;
    this.playExplosionAudio();

    // Spawn Shockwave Ring
    this.shockwaves.push({
      x: this.vent.x,
      y: this.vent.y,
      radius: 12,
      maxRadius: Math.max(this.width, this.height) * 0.85,
      alpha: 0.95,
      speed: 22,
      lineWidth: 5
    });

    // Massive burst of 45 Ballistic Lava Bombs
    for (let i = 0; i < 45; i++) {
      this.sparks.push(this.createLavaBomb(true));
    }

    // Massive burst of explosive ash clouds
    for (let i = 0; i < 30; i++) {
      this.smoke.push(this.createSmoke(true));
    }

    // Trigger instant Volcanic Lightning
    this.triggerLightning();
  }

  triggerLightning() {
    const vx = this.vent.x;
    const vy = this.vent.y;

    // Buat sambaran kilat zig-zag di dalam kolom asap
    const branches = [];
    const mainBranch = [];
    let startX = vx + (Math.random() - 0.5) * 90;
    let startY = vy - 40 - Math.random() * 60;
    mainBranch.push({ x: startX, y: startY });

    const steps = 4 + Math.floor(Math.random() * 4);
    for (let i = 0; i < steps; i++) {
      startX += (Math.random() - 0.5) * 45;
      startY += 25 + Math.random() * 35;
      mainBranch.push({ x: startX, y: startY });

      // Cabang kecil
      if (Math.random() > 0.5) {
        branches.push([
          { x: startX, y: startY },
          { x: startX + (Math.random() - 0.5) * 35, y: startY + 20 + Math.random() * 20 }
        ]);
      }
    }

    this.lightning.push({
      main: mainBranch,
      branches: branches,
      life: 4,
      color: Math.random() > 0.4 ? '#FFF7C2' : '#FFE082'
    });
  }

  // --- ENGINE LIFECYCLE ---
  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.lastTime = performance.now();
    this.loop();
  }

  stop() {
    this.isRunning = false;
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }

  loop() {
    if (!this.isRunning) return;
    const now = performance.now();
    const dt = Math.min((now - this.lastTime), 100);
    this.lastTime = now;

    this.update(dt);
    this.render();

    this.animId = requestAnimationFrame(() => this.loop());
  }

  // --- TIMELINE STATE MACHINE ---
  update(dt) {
    this.glowPulse += 0.04;
    this.phaseTimer += dt;

    // Decay Screen Shake & Flash
    if (this.shakeMagnitude > 0.1) {
      this.shakeMagnitude *= 0.94;
    } else {
      this.shakeMagnitude = 0;
    }

    if (this.flashAlpha > 0.01) {
      this.flashAlpha *= 0.90;
    } else {
      this.flashAlpha = 0;
    }

    // Update Shockwaves
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      const sw = this.shockwaves[i];
      sw.radius += sw.speed;
      sw.alpha *= 0.94;
      if (sw.alpha <= 0.02 || sw.radius >= sw.maxRadius) {
        this.shockwaves.splice(i, 1);
      }
    }

    // STATE TRANSITIONS
    if (this.currentPhase === 'calm') {
      this.craterGlow = 0;
      this.lavaProgress = 0;

      if (this.phaseTimer >= this.PHASES.CALM.duration) {
        this.currentPhase = 'smoke';
        this.phaseTimer = 0;
        if (this.onStateChange) this.onStateChange(this.PHASES.SMOKE);
      }
    } else if (this.currentPhase === 'smoke') {
      // Asap mulai mengepul, kawah menghangat tipis
      this.craterGlow = Math.min(0.25, this.phaseTimer / this.PHASES.SMOKE.duration * 0.25);
      
      // Emit soft smoke
      if (Math.random() < 0.35) {
        this.smoke.push(this.createSmoke(false));
      }

      if (this.phaseTimer >= this.PHASES.SMOKE.duration) {
        this.currentPhase = 'heating';
        this.phaseTimer = 0;
        if (this.onStateChange) this.onStateChange(this.PHASES.HEATING);
      }
    } else if (this.currentPhase === 'heating') {
      // Kawah memerah membara, lava mulai merekah, tremor mikro
      const progress = Math.min(1.0, this.phaseTimer / this.PHASES.HEATING.duration);
      this.craterGlow = 0.25 + progress * 0.65;
      this.lavaProgress = progress;

      // Micro tremors
      this.shakeMagnitude = Math.sin(this.glowPulse * 30) * 1.8;

      // Emit more smoke & a few warning sparks
      if (Math.random() < 0.65) {
        this.smoke.push(this.createSmoke(false));
      }
      if (Math.random() < 0.15) {
        this.sparks.push(this.createLavaBomb(false));
      }

      if (this.phaseTimer >= this.PHASES.HEATING.duration) {
        this.currentPhase = 'erupting';
        this.phaseTimer = 0;
        if (this.onStateChange) this.onStateChange(this.PHASES.ERUPTING);
        this.triggerExplosion();
      }
    } else if (this.currentPhase === 'erupting') {
      this.craterGlow = 1.0;
      this.lavaProgress = 1.0;

      // Continuous emission during explosion
      if (Math.random() < 0.90) {
        this.smoke.push(this.createSmoke(true));
      }
      if (Math.random() < 0.45) {
        this.sparks.push(this.createLavaBomb(true));
      }

      // Volcanic Lightning periodic strike
      const now = performance.now();
      if (now - this.lastLightningTime > 700 + Math.random() * 800) {
        this.triggerLightning();
        this.lastLightningTime = now;
      }

      // Trigger Hero Reveal at explosion peak (~1.5s after explosion start)
      if (this.phaseTimer >= 1500 && !this.heroRevealed) {
        this.heroRevealed = true;
        if (this.onHeroReveal) this.onHeroReveal();
      }

      if (this.phaseTimer >= this.PHASES.ERUPTING.duration) {
        this.currentPhase = 'active';
        this.phaseTimer = 0;
        if (this.onStateChange) this.onStateChange(this.PHASES.ACTIVE);
      }
    } else if (this.currentPhase === 'active') {
      // Sustainable continuous eruption in background
      this.craterGlow = 0.95 + Math.sin(this.glowPulse * 2) * 0.05;
      this.lavaProgress = 1.0;

      // Steady smoke column
      if (this.smoke.length < 50 && Math.random() < 0.70) {
        this.smoke.push(this.createSmoke(true));
      }
      // Steady sparks
      if (this.sparks.length < 40 && Math.random() < 0.35) {
        this.sparks.push(this.createLavaBomb(false));
      }

      // Lightning strike every 2.5 - 4.5 seconds
      const now = performance.now();
      if (now - this.lastLightningTime > 2500 + Math.random() * 2000) {
        this.triggerLightning();
        this.lastLightningTime = now;
      }
    }

    // Update Smoke Particles
    for (let i = this.smoke.length - 1; i >= 0; i--) {
      const s = this.smoke[i];
      s.x += s.vx;
      s.y += s.vy;
      s.radius += 0.38;
      s.alpha -= s.decay;

      if (s.alpha <= 0 || s.y < -150) {
        this.smoke.splice(i, 1);
      }
    }

    // Update Sparks & Lava Bombs
    for (let i = this.sparks.length - 1; i >= 0; i--) {
      const p = this.sparks[i];
      // Save trail position
      p.trail.unshift({ x: p.x, y: p.y });
      if (p.trail.length > 5) p.trail.pop();

      p.x += p.vx;
      p.vy += p.gravity;
      p.y += p.vy;
      p.life++;

      if (p.life > p.maxLife || p.y > this.height) {
        this.sparks.splice(i, 1);
      }
    }

    // Update Lightning
    for (let i = this.lightning.length - 1; i >= 0; i--) {
      const l = this.lightning[i];
      l.life--;
      if (l.life <= 0) {
        this.lightning.splice(i, 1);
      }
    }
  }

  // --- RENDERING PIPELINE ---
  render() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;

    ctx.save();

    // 1. Apply Screen Shake / Tremor Displacement
    if (this.shakeMagnitude > 0) {
      const sx = (Math.random() - 0.5) * this.shakeMagnitude * 2;
      const sy = (Math.random() - 0.5) * this.shakeMagnitude * 2;
      ctx.translate(sx, sy);
    }

    ctx.clearRect(0, 0, w, h);

    // 2. Draw Night Sky & Twinkling Stars
    this.drawSkyAndStars(ctx);

    // 3. Draw Distant Mountain Silhouettes
    this.drawDistantMountainRanges(ctx);

    // 4. Draw Rising Ash Plume (Smoke Column)
    this.renderAshPlume(ctx);

    // 5. Draw Volcanic Lightning Bolts
    this.renderVolcanicLightning(ctx);

    // 6. DRAW FULL VOLCANO: Cone, Rock Flanks, Foothills, Glowing Lava Rivers
    this.drawFullMountain(ctx);

    // 7. Draw Lava Sparks & Ballistic Bombs
    this.renderLavaBombs(ctx);

    // 8. Draw Molten Crater Summit Lake & Magma Glow
    this.drawCraterSummit(ctx);

    // 9. Draw Expanding Shockwave Rings
    this.renderShockwaves(ctx);

    // 10. Draw Screen Explosion Flash
    if (this.flashAlpha > 0.01) {
      ctx.fillStyle = `rgba(255, 240, 220, ${this.flashAlpha})`;
      ctx.fillRect(-50, -50, w + 100, h + 100);
    }

    ctx.restore();
  }

  drawSkyAndStars(ctx) {
    const w = this.width;
    const h = this.height;
    const vy = this.vent.y;

    // Atmospheric volcanic night sky gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
    skyGrad.addColorStop(0, '#05070B');
    skyGrad.addColorStop(0.50, '#12090D');
    skyGrad.addColorStop(0.85, '#260E13');
    skyGrad.addColorStop(1, '#381014');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, w, h);

    // Stars
    for (const star of this.stars) {
      star.alpha += Math.sin(this.glowPulse * 30 * star.twinkleSpeed) * 0.01;
      const a = Math.max(0.12, Math.min(0.85, star.alpha));
      ctx.fillStyle = `rgba(255, 255, 255, ${a})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  drawDistantMountainRanges(ctx) {
    const w = this.width;
    const h = this.height;
    const vy = this.vent.y;

    ctx.save();
    // Distant mountain silhouette 1 (Dusk indigo)
    ctx.fillStyle = '#10121A';
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(0, vy + 70);
    ctx.lineTo(w * 0.18, vy + 25);
    ctx.lineTo(w * 0.32, vy + 70);
    ctx.lineTo(w * 0.46, vy + 35);
    ctx.lineTo(w * 0.60, vy + 55);
    ctx.lineTo(w * 0.76, vy + 15);
    ctx.lineTo(w * 0.90, vy + 65);
    ctx.lineTo(w, vy + 30);
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    // Distant ridge 2
    ctx.fillStyle = '#151722';
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(0, vy + 120);
    ctx.lineTo(w * 0.25, vy + 90);
    ctx.lineTo(w * 0.40, vy + 130);
    ctx.lineTo(w * 0.68, vy + 105);
    ctx.lineTo(w * 0.85, vy + 80);
    ctx.lineTo(w, vy + 110);
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  renderAshPlume(ctx) {
    ctx.save();
    for (const s of this.smoke) {
      const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius);
      
      if (s.colorType === 'pyroclast') {
        // Awan debu panas berona kemerahan/magma
        grad.addColorStop(0, `rgba(74, 38, 38, ${s.alpha * 0.85})`);
        grad.addColorStop(0.5, `rgba(45, 28, 32, ${s.alpha * 0.60})`);
        grad.addColorStop(1, 'rgba(11, 12, 16, 0)');
      } else if (s.colorType === 'ash') {
        // Abu vulkanik gelap pekat
        grad.addColorStop(0, `rgba(55, 58, 68, ${s.alpha * 0.90})`);
        grad.addColorStop(0.6, `rgba(32, 34, 42, ${s.alpha * 0.65})`);
        grad.addColorStop(1, 'rgba(11, 12, 16, 0)');
      } else {
        // Kepulan solfatara halus
        grad.addColorStop(0, `rgba(100, 105, 118, ${s.alpha * 0.70})`);
        grad.addColorStop(0.6, `rgba(45, 48, 56, ${s.alpha * 0.40})`);
        grad.addColorStop(1, 'rgba(11, 12, 16, 0)');
      }

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  renderVolcanicLightning(ctx) {
    if (this.lightning.length === 0) return;

    ctx.save();
    ctx.shadowBlur = 18;

    for (const l of this.lightning) {
      ctx.strokeStyle = l.color;
      ctx.shadowColor = l.color;
      ctx.lineWidth = 2.5;

      // Draw Main Bolt
      ctx.beginPath();
      for (let i = 0; i < l.main.length; i++) {
        const pt = l.main[i];
        if (i === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      }
      ctx.stroke();

      // Draw Branches
      ctx.lineWidth = 1.5;
      for (const branch of l.branches) {
        ctx.beginPath();
        ctx.moveTo(branch[0].x, branch[0].y);
        ctx.lineTo(branch[1].x, branch[1].y);
        ctx.stroke();
      }
    }
    ctx.restore();
  }

  drawFullMountain(ctx) {
    const vx = this.vent.x;
    const vy = this.vent.y;
    const w = this.width;
    const h = this.height;

    // Lebar kaki gunung membentang proporsional
    const footSpread = Math.max(w * 0.52, 540);
    const midSpread = Math.max(w * 0.28, 280);

    ctx.save();

    // 1. Gradasi Tubuh Gunung (Conical Stratovolcano Basalt Gradient)
    const mountainGrad = ctx.createLinearGradient(vx, vy, vx, h);
    mountainGrad.addColorStop(0, '#2D191D');    // Puncak basalt kemerahan
    mountainGrad.addColorStop(0.40, '#1B1C24'); // Lereng tengah abu-abu batuan
    mountainGrad.addColorStop(1, '#0C0D12');    // Kaki gunung gelap
    ctx.fillStyle = mountainGrad;

    // GAMBAR BENTUK GUNUNG UTUH DARI PUNCAK SAMPAI KE KAKI GUNUNG
    ctx.beginPath();
    ctx.moveTo(0, h);
    // Kaki Kiri Melandai
    ctx.lineTo(0, h * 0.88);
    ctx.quadraticCurveTo(vx - footSpread * 1.25, h * 0.86, vx - footSpread, h * 0.82);
    // Lereng Tengah Menanjak
    ctx.quadraticCurveTo(vx - midSpread * 1.35, vy + (h - vy) * 0.60, vx - midSpread, vy + (h - vy) * 0.40);
    // Lereng Curam Puncak Kiri
    ctx.quadraticCurveTo(vx - 110, vy + 38, vx - 48, vy);
    
    // Bibir Kawah Puncak
    ctx.lineTo(vx + 48, vy);
    
    // Lereng Curam Puncak Kanan
    ctx.quadraticCurveTo(vx + 110, vy + 38, vx + midSpread, vy + (h - vy) * 0.40);
    // Lereng Tengah Menurun
    ctx.quadraticCurveTo(vx + midSpread * 1.35, vy + (h - vy) * 0.60, vx + footSpread, h * 0.82);
    // Kaki Kanan Melandai ke Dataran
    ctx.quadraticCurveTo(vx + footSpread * 1.25, h * 0.86, w, h * 0.88);
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    // 2. Garis Kontur Rim Lighting di Punggung Gunung
    const rimAlpha = Math.max(0.15, this.craterGlow * 0.65);
    ctx.strokeStyle = `rgba(255, 112, 67, ${rimAlpha})`;
    ctx.lineWidth = 2.5;

    // Garis lereng kiri
    ctx.beginPath();
    ctx.moveTo(vx - 48, vy);
    ctx.quadraticCurveTo(vx - 110, vy + 38, vx - midSpread, vy + (h - vy) * 0.40);
    ctx.quadraticCurveTo(vx - midSpread * 1.35, vy + (h - vy) * 0.60, vx - footSpread, h * 0.82);
    ctx.stroke();

    // Garis lereng kanan
    ctx.beginPath();
    ctx.moveTo(vx + 48, vy);
    ctx.quadraticCurveTo(vx + 110, vy + 38, vx + midSpread, vy + (h - vy) * 0.40);
    ctx.quadraticCurveTo(vx + midSpread * 1.35, vy + (h - vy) * 0.60, vx + footSpread, h * 0.82);
    ctx.stroke();

    // 3. ALIRAN LAHAR & CELAH LAVA PIJAR (FISSURES)
    if (this.lavaProgress > 0.05) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      ctx.shadowColor = '#FF5722';
      ctx.shadowBlur = 18;

      const p = this.lavaProgress;
      const pulse = 0.88 + Math.sin(this.glowPulse * 3) * 0.12;

      // Jalur Lava 1 (Kiri)
      ctx.strokeStyle = `rgba(255, 87, 34, ${p * 0.85 * pulse})`;
      ctx.lineWidth = 4.8;
      ctx.beginPath();
      ctx.moveTo(vx - 20, vy + 4);
      ctx.quadraticCurveTo(vx - 45, vy + 55, vx - 30, vy + 110);
      ctx.quadraticCurveTo(vx - 15, vy + 160, vx - 65, vy + 230);
      ctx.stroke();

      // Inti Kuning Panas Jalur Lava 1
      ctx.strokeStyle = `rgba(255, 238, 88, ${p * 0.95 * pulse})`;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(vx - 20, vy + 4);
      ctx.quadraticCurveTo(vx - 45, vy + 55, vx - 30, vy + 110);
      ctx.quadraticCurveTo(vx - 15, vy + 160, vx - 65, vy + 230);
      ctx.stroke();

      // Jalur Lava 2 (Kanan)
      ctx.strokeStyle = `rgba(255, 61, 0, ${p * 0.80 * pulse})`;
      ctx.lineWidth = 4.0;
      ctx.beginPath();
      ctx.moveTo(vx + 20, vy + 4);
      ctx.quadraticCurveTo(vx + 42, vy + 50, vx + 26, vy + 100);
      ctx.quadraticCurveTo(vx + 55, vy + 150, vx + 40, vy + 210);
      ctx.stroke();

      // Inti Kuning Panas Jalur Lava 2
      ctx.strokeStyle = `rgba(255, 202, 40, ${p * 0.90 * pulse})`;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(vx + 20, vy + 4);
      ctx.quadraticCurveTo(vx + 42, vy + 50, vx + 26, vy + 100);
      ctx.quadraticCurveTo(vx + 55, vy + 150, vx + 40, vy + 210);
      ctx.stroke();

      ctx.restore();
    }

    // 4. Siluet Dataran Kaki Gunung di Lapisan Paling Bawah
    ctx.fillStyle = '#08090D';
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(0, h * 0.90);
    ctx.quadraticCurveTo(w * 0.25, h * 0.88, w * 0.5, h * 0.91);
    ctx.quadraticCurveTo(w * 0.75, h * 0.88, w, h * 0.90);
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  renderLavaBombs(ctx) {
    if (this.sparks.length === 0) return;

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';

    for (const p of this.sparks) {
      // Draw glowing trajectory trail
      if (p.trail.length > 1) {
        ctx.strokeStyle = `rgba(255, 87, 34, 0.45)`;
        ctx.lineWidth = p.size * 0.5;
        ctx.beginPath();
        for (let i = 0; i < p.trail.length; i++) {
          const pt = p.trail[i];
          if (i === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();
      }

      // Draw Ballistic Bomb
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  drawCraterSummit(ctx) {
    const vx = this.vent.x;
    const vy = this.vent.y;
    const cg = this.craterGlow;

    if (cg <= 0.02) {
      // Kawah Diam (Tenang): Siluet gelap dengan bibir kawah tipis
      ctx.save();
      ctx.fillStyle = '#181A24';
      ctx.beginPath();
      ctx.ellipse(vx, vy, 48, 12, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.ellipse(vx, vy, 48, 12, 0, 0, Math.PI);
      ctx.stroke();
      ctx.restore();
      return;
    }

    // Pendaran Magma Radial di Puncak Kawah (Ambient Heat Halo)
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const haloRadius = 260 * cg;
    const glowGrad = ctx.createRadialGradient(vx, vy, 10, vx, vy, haloRadius);
    glowGrad.addColorStop(0, `rgba(255, 87, 34, ${0.75 * cg})`);
    glowGrad.addColorStop(0.35, `rgba(220, 38, 38, ${0.40 * cg})`);
    glowGrad.addColorStop(1, 'rgba(11, 12, 16, 0)');

    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(vx, vy, haloRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Danau Kawah Berpijar (Molten Lava Lake)
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const craterGrad = ctx.createRadialGradient(vx, vy, 4, vx, vy, 48);
    craterGrad.addColorStop(0, '#FFFFFF');
    craterGrad.addColorStop(0.25, '#FFF7ED');
    craterGrad.addColorStop(0.55, '#FF9800');
    craterGrad.addColorStop(0.85, '#FF5722');
    craterGrad.addColorStop(1, 'rgba(220, 38, 38, 0.4)');

    ctx.fillStyle = craterGrad;
    ctx.shadowColor = '#FF5722';
    ctx.shadowBlur = 24 * cg;
    ctx.beginPath();
    ctx.ellipse(vx, vy, 48, 12, 0, 0, Math.PI * 2);
    ctx.fill();

    // Bibir Kawah Emas Menyala
    ctx.strokeStyle = `rgba(255, 243, 224, ${0.95 * cg})`;
    ctx.lineWidth = 2.8;
    ctx.beginPath();
    ctx.ellipse(vx, vy, 48, 12, 0, 0, Math.PI);
    ctx.stroke();
    ctx.restore();
  }

  renderShockwaves(ctx) {
    if (this.shockwaves.length === 0) return;

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (const sw of this.shockwaves) {
      ctx.strokeStyle = `rgba(255, 215, 64, ${sw.alpha})`;
      ctx.lineWidth = sw.lineWidth;
      ctx.shadowColor = '#FF5722';
      ctx.shadowBlur = 16;
      ctx.beginPath();
      ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();
  }
}

window.VolcanicEruptionEngine = VolcanicEruptionEngine;
