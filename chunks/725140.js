"use strict";
n(47120);
var i = n(147913),
  r = n(579806),
  s = n(246946);
let o = !1;

function a() {
  var e;
  let t = null === r.Z || void 0 === r.Z ? void 0 : null === (e = r.Z.window) || void 0 === e ? void 0 : e.setContentProtection;
  if (null == t) return;
  let n = s.Z.enableContentProtection;
  n !== o && (t(n), o = n)
}
class l extends i.Z {
  constructor() {
    var e, t, n;
    a(), super(), e = this, t = "stores", n = new Map().set(s.Z, a), t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n
  }
}
t.Z = new l