"use strict";
n.r(t), n("47120");
class l extends Map {
  set(e, t) {
    return this.size >= this.maxSize && this.delete(this.keys().next().value), super.set(e, t)
  }
  constructor(e) {
    var t, n, l;
    super(), t = this, l = void 0, (n = "maxSize") in t ? Object.defineProperty(t, n, {
      value: l,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = l, this.maxSize = e
  }
}
t.default = l