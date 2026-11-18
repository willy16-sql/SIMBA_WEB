/**
 * SIMBA - LIGHTWEIGHT VOLCANIC PARTICLE ERUPTION ENGINE
 * HTML5 Canvas 2D Physics Simulator (< 10 KB, 60 FPS)
 * Menampilkan gunung api megah dengan kawah berpijar, aliran lava lereng,
 * percikan magma, dan kepulan abu vulkanik.
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
    this.maxSparks = 85;
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
    
    // Kawah puncak gunung berada di ketinggian sekitar 70% layar (tampak megah & jelas di bawah kartu)
    this.vent.x = this.width * 0.5;
    this.vent.y = Math.max(this.height * 0.70, this.height - 240);
  }

  createSpark() {
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.7; // Melesat ke atas agak menyebar
    const speed = 7 + Math.random() * 11;
    return {
      x: this.vent.x + (Math.random() - 0.5) * 60,
      y: this.vent.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      gravity: 0.16 + Math.random() * 0.08,
      size: 2.2 + Math.random() * 3.8,
      life: 0,
      maxLife: 50 + Math.random() * 50,
      color: Math.random() > 0.4 ? '#FF5722' : (Math.random() > 0.5 ? '#FF9800' : '#FFF3E0')
    };
  }

  createSmoke() {
    return {
      x: this.vent.x + (Math.random() - 0.5) * 70,
      y: this.vent.y - 12,
      vx: (Math.random() - 0.5) * 1.6,
      vy: -1.2 - Math.random() * 2.2,
      radius: 18 + Math.random() * 22,
      maxRadius: 90 + Math.random() * 70,
      alpha: 0.32 + Math.random() * 0.16,
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

    // 1. Gambar Pegunungan Latar Belakang & Tubuh Gunung Api
    this.drawMountainBody(ctx, pulseFactor);

    // 2. Render Kepulan Asap & Abu Vulkanik (Ash Plume)
    while (this.smoke.length < this.maxSmoke) {
      this.smoke.push(this.createSmoke());
    }

    ctx.save();
    for (let i = this.smoke.length - 1; i >= 0; i--) {
      const s = this.smoke[i];
      s.x += s.vx;
      s.y += s.vy;
      s.radius += 0.28;
      s.alpha -= s.decay;

      if (s.alpha <= 0 || s.y < -120) {
        this.smoke.splice(i, 1);
        continue;
      }

      const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius);
      grad.addColorStop(0, `rgba(45, 48, 56, ${s.alpha * 0.95})`);
      grad.addColorStop(0.6, `rgba(28, 30, 36, ${s.alpha * 0.5})`);
      grad.addColorStop(1, 'rgba(11, 12, 16, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 3. Render Percikan Magma & Lava Sparks yang Melesat
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
      ctx.shadowBlur = 10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * (1 - progress * 0.35), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 4. Danau Magma & Pendaran Kawah Depan (Foreground Crater Rim)
    this.drawCraterForefront(ctx, pulseFactor);
  }

  drawMountainBody(ctx, pulseFactor) {
    const vx = this.vent.x;
    const vy = this.vent.y;
    const w = this.width;
    const h = this.height;

    // A. Pegunungan Latar Belakang (Siluet Jauh Abu Gelap)
    ctx.save();
    ctx.fillStyle = '#0E1017';
    ctx.beginPath();
    ctx.moveTo(0, h);
    ctx.lineTo(0, h * 0.78);
    ctx.lineTo(w * 0.22, h * 0.72);
    ctx.lineTo(w * 0.40, h * 0.76);
    ctx.lineTo(w * 0.65, h * 0.74);
    ctx.lineTo(w * 0.82, h * 0.70);
    ctx.lineTo(w, h * 0.76);
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // B. Tubuh Gunung Api Utama (Stratovolcano Cone)
    ctx.save();
    // Gradasi gelap batuan vulkanik dari obsidian ke basalt
    const mountainGrad = ctx.createLinearGradient(vx, vy, vx, h);
    mountainGrad.addColorStop(0, '#151720');
    mountainGrad.addColorStop(0.4, '#0F1116');
    mountainGrad.addColorStop(1, '#08090C');
    ctx.fillStyle = mountainGrad;

    ctx.beginPath();
    ctx.moveTo(0, h);
    // Lereng Kiri Menjulang
    ctx.lineTo(0, h * 0.88);
    ctx.quadraticCurveTo(vx - 320, h * 0.84, vx - 180, vy + 75);
    ctx.quadraticCurveTo(vx - 110, vy + 30, vx - 55, vy);
    // Kawah Puncak
    ctx.lineTo(vx + 55, vy);
    // Lereng Kanan Melandai
    ctx.quadraticCurveTo(vx + 110, vy + 30, vx + 180, vy + 75);
    ctx.quadraticCurveTo(vx + 320, h * 0.84, w, h * 0.88);
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fill();

    // C. Tulang Punggung / Relief Lereng Gunung (Volcanic Ridges)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
    ctx.lineWidth = 2;
    // Ridge kiri
    ctx.beginPath();
    ctx.moveTo(vx - 40, vy + 5);
    ctx.quadraticCurveTo(vx - 140, vy + 80, vx - 260, h);
    ctx.stroke();

    // Ridge kanan
    ctx.beginPath();
    ctx.moveTo(vx + 40, vy + 5);
    ctx.quadraticCurveTo(vx + 140, vy + 80, vx + 260, h);
    ctx.stroke();

    // D. Aliran Lava Berpijar di Lereng (Glowing Lava Fissures)
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = `rgba(255, 87, 34, ${0.45 * pulseFactor})`;
    ctx.lineWidth = 3;
    ctx.shadowColor = '#FF5722';
    ctx.shadowBlur = 12;

    // Aliran lava 1 (tengah-kiri)
    ctx.beginPath();
    ctx.moveTo(vx - 15, vy + 2);
    ctx.quadraticCurveTo(vx - 35, vy + 50, vx - 20, vy + 90);
    ctx.quadraticCurveTo(vx - 10, vy + 120, vx - 45, vy + 160);
    ctx.stroke();

    // Aliran lava 2 (tengah-kanan)
    ctx.strokeStyle = `rgba(255, 152, 0, ${0.4 * pulseFactor})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(vx + 18, vy + 2);
    ctx.quadraticCurveTo(vx + 30, vy + 40, vx + 15, vy + 75);
    ctx.quadraticCurveTo(vx + 40, vy + 110, vx + 30, vy + 145);
    ctx.stroke();
    ctx.restore();

    ctx.restore();
  }

  drawCraterForefront(ctx, pulseFactor) {
    const vx = this.vent.x;
    const vy = this.vent.y;

    // Ambient Magma Radial Glow di Mulut Kawah
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const glowGrad = ctx.createRadialGradient(vx, vy, 15, vx, vy, 260 * pulseFactor);
    glowGrad.addColorStop(0, 'rgba(255, 87, 34, 0.55)');
    glowGrad.addColorStop(0.35, 'rgba(220, 38, 38, 0.3)');
    glowGrad.addColorStop(1, 'rgba(11, 12, 16, 0)');
    ctx.fillStyle = glowGrad;
    ctx.beginPath();
    ctx.arc(vx, vy, 260 * pulseFactor, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Danau Kawah Berpijar (Molten Lava Crater Lake)
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const craterGrad = ctx.createRadialGradient(vx, vy, 5, vx, vy, 55);
    craterGrad.addColorStop(0, '#FFF7ED');
    craterGrad.addColorStop(0.3, '#FF9800');
    craterGrad.addColorStop(0.8, '#FF5722');
    craterGrad.addColorStop(1, 'rgba(220, 38, 38, 0.4)');

    ctx.fillStyle = craterGrad;
    ctx.shadowColor = '#FF5722';
    ctx.shadowBlur = 18;
    ctx.beginPath();
    ctx.ellipse(vx, vy, 55, 10, 0, 0, Math.PI * 2);
    ctx.fill();

    // Garis Bibir Kawah Berpijar
    ctx.strokeStyle = `rgba(255, 243, 224, ${0.85 * pulseFactor})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(vx, vy, 55, 10, 0, 0, Math.PI);
    ctx.stroke();
    ctx.restore();
  }
}

window.VolcanicEruptionEngine = VolcanicEruptionEngine;
