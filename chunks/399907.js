"use strict";
n(47120);
var i = n(956067),
  r = n(147913),
  s = n(70956),
  o = n(640795),
  a = n(139674);
let l = 4 * s.Z.Millis.HOUR;
class u extends r.Z {
  _initialize() {
    setTimeout(() => i.Z.timeAsync("\uD83D\uDCBE", "getBlockedDomainList", () => a.Z.getBlockedDomainList()), 1e3), setTimeout(() => (0, o.q)(), 10 * s.Z.Millis.SECOND), this.intervalID = setInterval(o.q, l)
  }
  _terminate() {
    clearInterval(this.intervalID)
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, i = void 0, (n = "intervalID") in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new u