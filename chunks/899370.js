var s, r, i, a, l = n(973361),
  o = n(442837),
  c = n(570140),
  u = n(358085),
  d = n(723359);
let h = null,
  _ = 'underage';
class E extends(a = o.ZP.Store) {
  isUnderageAnonymous() {
if (u.isPlatformEmbedded) {
  if (null != h && h + d.k0 > Date.now())
    return !0;
} else
  return null != l.parse(document.cookie)[_];
return !1;
  }
}
i = 'AgeGateStore', (r = 'displayName') in(s = E) ? Object.defineProperty(s, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[r] = i, t.Z = new E(c.Z, {
  AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function() {
h = Date.now();
document.cookie = ''.concat(_, '=1;path=/');
  },
  LOGIN_SUCCESS: function() {
h = null;
document.cookie = ''.concat(_, '=1;path=/;max-age=0');
  }
});