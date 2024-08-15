var s, r, i, a, l = n(442837),
  o = n(570140),
  c = n(981631);
let u = {};
class d extends(a = l.ZP.Store) {
  getState(e) {
return u[e];
  }
}
i = 'CodedLinkNativeAppStateStore', (r = 'displayName') in(s = d) ? Object.defineProperty(s, r, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[r] = i, t.Z = new d(o.Z, {
  NATIVE_APP_MODAL_OPENING: function(e) {
let {
  code: t
} = e;
u[t] = c.kEZ.OPENING;
  },
  NATIVE_APP_MODAL_OPENED: function(e) {
let {
  code: t
} = e;
u[t] = c.kEZ.OPEN;
  },
  NATIVE_APP_MODAL_OPEN_FAILED: function(e) {
let {
  code: t
} = e;
u[t] = c.kEZ.OPEN_FAIL;
  }
});