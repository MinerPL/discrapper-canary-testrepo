"use strict";
var i = n(888618),
  r = n(756286);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let o = -2.15;
t.Z = class e {
  updateStatic() {
    this.targetX = this.targetX + 30 * Math.cos(this.angle) * Math.sin(this.count), this.targetY = this.targetY + 30 * Math.sin(this.angle) * Math.sin(this.count), this.x = this.targetX, this.y = this.targetY
  }
  update(e) {
    let t, n;
    if (this.speedUp > 0 ? (this.speedUp = Math.max(0, this.speedUp - e), this.count += e * (10 * Math.min(this.speedUp, 1) + .4)) : this.count += .4 * e, t = (0, i.B)(this.targetX, this.x, this.velX, this.spring), n = (0, i.B)(this.targetY, this.y, this.velY, this.spring), this.velX += t * e, this.velY += n * e, this.oscillate) {
      let r = this.targetX + this.waveRange * Math.cos(this.angle) * Math.sin(this.count),
        s = this.targetY + this.waveRange * Math.sin(this.angle) * Math.sin(this.count);
      t = (0, i.B)(r, this.x, this.velX, this.spring), n = (0, i.B)(s, this.y, this.velY, this.spring), this.velX += t * e, this.velY += n * e
    }
    this.x += this.velX * e, this.y += this.velY * e
  }
  render(e) {
    e.fillStyle = "#fff", e.fillRect(this.x, this.y, 4, 4)
  }
  constructor(e) {
    s(this, "x", -40), s(this, "y", -40), s(this, "targetX", 0), s(this, "targetY", 0), s(this, "oscillate", !0), s(this, "velX", 0), s(this, "velY", 0), s(this, "angle", 0), s(this, "speedUp", 1.5), s(this, "waveRange", 60), s(this, "count", void 0), s(this, "index", void 0), s(this, "spring", {
      friction: 15,
      tension: r.O1
    }), this.index = e, this.spring.tension = r.O1 * Math.max(.1, e / 7) + r.O1, this.count = o * e
  }
}