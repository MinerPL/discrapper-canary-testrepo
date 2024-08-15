var i, a, s, r, l = n(442837),
  o = n(570140),
  c = n(592125),
  u = n(757266),
  d = n(375954);
let _ = null;
class E extends(r = l.ZP.Store) {
  initialize() {
this.waitFor(c.Z, u.Z, d.Z);
  }
  getApps() {
return _;
  }
}
s = 'AuthorizedAppsStore', (a = 'displayName') in(i = E) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new E(o.Z, {
  USER_AUTHORIZED_APPS_UPDATE: function(e) {
_ = e.apps;
  }
});