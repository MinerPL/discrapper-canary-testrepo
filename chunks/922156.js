var i, a, s, r, l = n(442837),
  o = n(570140),
  c = n(186901);
let d = null,
  u = [
c.ff.REDISTRIBUTABLE_INSTALL_FAILED,
c.ff.POST_INSTALL_FAILED,
c.ff.POST_INSTALL_CANCELLED
  ],
  _ = [
c.ff.APPLICATION_NOT_FOUND,
c.ff.APPLICATION_LOAD_FAILED,
c.ff.INTERRUPTED,
c.ff.DESERIALIZATION_FAILED
  ];
class E extends(r = l.ZP.Store) {
  getLastError() {
return d;
  }
}
s = 'DispatchApplicationErrorStore', (a = 'displayName') in(i = E) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new E(o.Z, {
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
null != d && null != d.code && u.includes(d.code) && (d = null);
  },
  DISPATCH_APPLICATION_ERROR: function(e) {
let {
  error: t
} = e;
d = null != t.code && _.includes(t.code) ? null : t;
  }
});