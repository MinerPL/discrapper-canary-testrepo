"use strict";
n(47120), n(653041);
var i = n(954955),
  r = n.n(i),
  s = n(477690),
  o = n(624138),
  a = n(774643),
  l = n(888618),
  u = n(756286);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = 7.5,
  c = (0, o.Mg)(s.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
  E = 1 / 60;

function I(e, t, n, i) {
  return n / i * t + e
}

function T() {
  return Math.min(Math.max(Math.min(.8 * window.innerWidth, .8 * window.innerHeight), u.LE), u.pg)
}
t.Z = class e {
  initialize() {
    this._resizeWave()
  }
  emphasize() {
    this.points.forEach(e => e.speedUp = 1)
  }
  terminate() {
    this.points = []
  }
  update(e) {
    if (0 !== this.points.length) this.points.forEach(t => t.update(Math.min(e, E))), !this.hasEntered && this.points[0].x > c && (this.hasEntered = !0, this.updateWaveState(u.hO.ENTERED)), this.isFilling && this.points[0].x > this.points[0].targetX && (this.isFilling = !1, this.updateWaveState(u.hO.FILLED))
  }
  render(e) {
    if (0 === this.points.length) return;
    let [t, ...n] = this.points;
    e.save(), e.beginPath(), e.moveTo(t.x, t.y), n.forEach((t, i) => {
      if (null == n[i + 1]) e.quadraticCurveTo(t.x, t.y, t.x, t.y);
      else {
        let r = (t.x + n[i + 1].x) / 2,
          s = (t.y + n[i + 1].y) / 2;
        e.quadraticCurveTo(t.x, t.y, r, s)
      }
    }), e.lineTo(0, 0), e.closePath(), e.fillStyle = "#000", e.globalCompositeOperation = "destination-in", e.fill(), e.restore()
  }
  fill() {
    let e = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight) + 100,
      t = T() - 140,
      n = (e, t, n, i) => {
        e.targetX = -40 + t * Math.cos(u.uo * (n / 15 * .25 + 0)), e.targetY = -40 + t * Math.sin(u.uo * (n / 15 * .25 + 0)), i && (e.targetX += (0, l.M)(0, 30) - 15, e.targetY += (0, l.M)(0, 30) - 15, e.speedUp = 3, e.spring.tension = u.O1 * Math.random() * .5 + u.O1)
      };
    this.points.forEach((e, i) => n(e, t, i, !0)), setTimeout(() => {
      this.points.forEach((t, i) => {
        n(t, e, i, !1);
        let r = 1 - t.index / 7.5;
        t.spring.friction += t.spring.friction + t.spring.friction * r, t.spring.tension = .7 * u.O1 + 80 * Math.random(), t.waveRange = 2 * t.waveRange
      }), this.isFilling = !0, this.updateWaveState(u.hO.FILLING)
    }, 250)
  }
  constructor(e) {
    _(this, "points", []), _(this, "hasEntered", !1), _(this, "isFilling", !1), _(this, "updateWaveState", void 0), _(this, "_resizeWave", () => {
      let e = T();
      this.points.forEach((t, n) => {
        let i = -40 + e * Math.cos(u.uo * (n / 15 * .25 + 0)),
          r = -40 + e * Math.sin(u.uo * (n / 15 * .25 + 0));
        0 !== n ? r += (0, l.M)(0, 30) - 15 : i += (0, l.M)(0, 30) - 15, t.targetX = i, t.targetY = r, t.angle = Math.atan2(r, i)
      })
    }), _(this, "resizeWave", r()(this._resizeWave, 200)), this.updateWaveState = e, this.hasEntered = !1;
    for (let e = 0; e <= 15; e++) this.points.push(new a.Z(Math.floor(d - Math.floor(Math.abs(e - d)))))
  }
}