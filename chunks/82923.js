"use strict";
t(47120);
var n = t(748780);

function i(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class l {
  start() {
    return new Promise(e => {
      this.animation.start(() => {
        e()
      })
    })
  }
  stop() {
    this.animation.stop()
  }
  constructor(e) {
    i(this, "animation", void 0), this.animation = e
  }
}
class a {
  _map(e) {
    return this.animations.map(e)
  }
  start() {
    return new Promise(e => Promise.all(this._map(e => e.start())).then(() => e()))
  }
  stop() {
    this._map(e => e.stop())
  }
  constructor(e) {
    i(this, "animations", void 0), this.animations = e
  }
}
class r {
  async start() {
    for (let e of (this.stopped = !1, this.animations)) {
      if (this.stopped) return;
      await e.start()
    }
  }
  stop() {
    this.stopped = !0, this.animations.map(e => e.stop())
  }
  constructor(e) {
    i(this, "animations", void 0), i(this, "stopped", !1), this.animations = e
  }
}

function o(e, s, t) {
  return new l(t(e, {
    ...s
  }))
}
s.ZP = {
  ...n.Z,
  timing: function(e, s) {
    return o(e, s, n.Z.timing)
  },
  spring: function(e, s) {
    return o(e, s, n.Z.spring)
  },
  parallel: function(e) {
    return new a(e)
  },
  sequence: function(e) {
    return new r(e)
  }
}