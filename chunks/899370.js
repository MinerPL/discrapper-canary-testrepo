"use strict";
var s, r, i, a, l = n(973361),
  o = n(442837),
  u = n(570140),
  c = n(358085),
  d = n(723359);
let h = null,
  E = "underage";
class _ extends(a = o.ZP.Store) {
  isUnderageAnonymous() {
    if (c.isPlatformEmbedded) {
      if (null != h && h + d.k0 > Date.now()) return !0
    } else return null != l.parse(document.cookie)[E];
    return !1
  }
}
i = "AgeGateStore", (r = "displayName") in(s = _) ? Object.defineProperty(s, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[r] = i, t.Z = new _(u.Z, {
  AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function() {
    h = Date.now();
    document.cookie = "".concat(E, "=1;path=/")
  },
  LOGIN_SUCCESS: function() {
    h = null;
    document.cookie = "".concat(E, "=1;path=/;max-age=0")
  }
})