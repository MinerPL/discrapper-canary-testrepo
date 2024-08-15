var r = n(684827),
  i = n(898625);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let s = -2.15;
t.Z = class e {
  updateStatic() {
this.targetX = this.targetX + 30 * Math.cos(this.angle) * Math.sin(this.count), this.targetY = this.targetY + 30 * Math.sin(this.angle) * Math.sin(this.count), this.x = this.targetX, this.y = this.targetY;
  }
  update(e) {
let t, n;
if (this.speedUp > 0 ? (this.speedUp = Math.max(0, this.speedUp - e), this.count += e * (10 * Math.min(this.speedUp, 1) + 0.4)) : this.count += 0.4 * e, t = (0, r.B)(this.targetX, this.x, this.velX, this.spring), n = (0, r.B)(this.targetY, this.y, this.velY, this.spring), this.velX += t * e, this.velY += n * e, this.oscillate) {
  let i = this.targetX + this.waveRange * Math.cos(this.angle) * Math.sin(this.count),
    a = this.targetY + this.waveRange * Math.sin(this.angle) * Math.sin(this.count);
  t = (0, r.B)(i, this.x, this.velX, this.spring), n = (0, r.B)(a, this.y, this.velY, this.spring), this.velX += t * e, this.velY += n * e;
}
this.x += this.velX * e, this.y += this.velY * e;
  }
  render(e) {
e.fillStyle = '#fff', e.fillRect(this.x, this.y, 4, 4);
  }
  constructor(e) {
a(this, 'x', -40), a(this, 'y', -40), a(this, 'targetX', 0), a(this, 'targetY', 0), a(this, 'oscillate', !0), a(this, 'velX', 0), a(this, 'velY', 0), a(this, 'angle', 0), a(this, 'speedUp', 1.5), a(this, 'waveRange', 60), a(this, 'count', void 0), a(this, 'index', void 0), a(this, 'spring', {
  friction: 15,
  tension: i.O1
}), this.index = e, this.spring.tension = i.O1 * Math.max(0.1, e / 7) + i.O1, this.count = s * e;
  }
};