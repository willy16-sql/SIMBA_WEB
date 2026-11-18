/**
 * SIMBA - LIGHTWEIGHT VOLCANIC PARTICLE ERUPTION ENGINE
 * HTML5 Canvas 2D Physics Simulator (< 8 KB, 60 FPS, Zero Bloat)
 * Menghasilkan simulasi letusan gunung api: Magma sparks, ash plume (asap abu), dan ambient volcanic glow.
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
    this.maxSparks = 80;
    this.maxSmoke = 45;

    this.vent = { x: 0, y: 0 };
    this.glowPulse = 0;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    // Titik kawah emisi berada di sepertiga bawah tengah layar
    this.vent.x = this.width * 0.5;
    this.vent.y = this.height * 0.88;
  }

  createSpark() {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.65; // Melesat vertikal sedikit menyebar
    const speed = 7 + Math.random() * 10;
    return {
      x: this.vent.x + (Math.random() - 0.5) * 40,
      y: this.vent.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      gravity: 0.16 + Math.random() * 0.08,
      size: 2 + Math.random() * 3.5,
      life: 0,
      maxLife: 45 + Math.random() * 45,
      color: Math.random() > 0.4 ? '#FF5722' : (Math.random() > 0.5 ? '#FF9800' : '#FFF3E0')
    };
  }

  createSmoke() {
    return {
      x: this.vent.x + (Math.random() - 0.5) * 60,
      y: this.vent.y - 10,
      vx: (Math.random() - 0.5) * 1.5,
      vy: -1.2 - Math.random() * 2.0,
      radius: 15 + Math.random() * 20,
      maxRadius: 80 + Math.random() * 60,
      alpha: 0.28 + Math.random() * 0.15,
      decay: 0.0018 + Math.random() * 0.002
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
    // Bersihkan canvas agar memori GPU bebas saat berada di peta Leaflet
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

    this.glowPulse += 0.04;
    const pulseFactor = 0.85 + Math.sin(this.glowPulse) * 0.15;

    // 1. Gambar Ambient Magma Radial Glow di Kawah
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const glowGrad = ctx.createRadialGradient(
      this.vent.x, this.vent.y, 10,
      this.vent.x, this.vent.y, 220 * pulseFactor
    );
    glowGrad.addColorStop(0, 'rgba(255, 87, 34, 0.45)');
    glowGrad.addColorStop(0.4, 'rgba(220, 38, 38, 0.25)');
    glowGrad.addColorStop(1, 'rgba(11, 12, 16, 0)');
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(this.vent.x, this.vent.y, 220 * pulseFactor, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 2. Render Kepulan Asap & Abu Vulkanik (Ash Plume)
    while (this.smoke.length < this.maxSmoke) {
      this.smoke.push(this.createSmoke());
    }

    ctx.save();
    for (let i = this.smoke.length - 1; i >= 0; i--) {
      const s = this.smoke[i];
      s.x += s.vx;
      s.y += s.vy;
      s.radius += 0.25;
      s.alpha -= s.decay;

      if (s.alpha <= 0 || s.y < -100) {
        this.smoke.splice(i, 1);
        continue;
      }

      const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius);
      grad.addColorStop(0, `rgba(45, 48, 56, ${s.alpha * 0.9})`);
      grad.addColorStop(0.6, `rgba(28, 30, 36, ${s.alpha * 0.5})`);
      grad.addColorStop(1, 'rgba(11, 12, 16, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 3. Render Percikan Magma & Lava Sparks
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

      const alpha = 1 - progress;
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 8;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * (1 - progress * 0.4), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 4. Siluet Minimalis Lereng Gunung di Lapisan Bawah
    this.drawMountainSilhouette(ctx);
  }

  drawMountainSilhouette(ctx) {
    ctx.save();
    ctx.fillStyle = '#08090C';
    ctx.beginPath();
    ctx.moveTo(0, this.height);
    ctx.lineTo(0, this.height * 0.94);
    ctx.lineTo(this.vent.x - 140, this.vent.y + 10);
    // Kawah puncak
    ctx.lineTo(this.vent.x - 45, this.vent.y);
    ctx.lineTo(this.vent.x + 45, this.vent.y);
    ctx.lineTo(this.vent.x + 140, this.vent.y + 10);
    ctx.lineTo(this.width, this.height * 0.94);
    ctx.lineTo(this.width, this.height);
    ctx.closePath();
    ctx.fill();

    // Garis rim kawah berpijar halus
    ctx.strokeStyle = 'rgba(255, 87, 34, 0.45)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(this.vent.x - 45, this.vent.y);
    ctx.lineTo(this.vent.x + 45, this.vent.y);
    ctx.stroke();

    ctx.restore();
  }
}

window.VolcanicEruptionEngine = VolcanicEruptionEngine;
