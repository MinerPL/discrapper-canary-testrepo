"use strict";
s.r(t), s("47120");
var a = s("748780");

function l(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class n {
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
    l(this, "animation", void 0), this.animation = e
  }
}
class i {
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
    l(this, "animations", void 0), this.animations = e
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
    l(this, "animations", void 0), l(this, "stopped", !1), this.animations = e
  }
}

function o(e, t, s) {
  return new n(s(e, {
    ...t
  }))
}
t.default = {
  ...a.default,
  timing: function(e, t) {
    return o(e, t, a.default.timing)
  },
  spring: function(e, t) {
    return o(e, t, a.default.spring)
  },
  parallel: function(e) {
    return new i(e)
  },
  sequence: function(e) {
    return new r(e)
  }
}