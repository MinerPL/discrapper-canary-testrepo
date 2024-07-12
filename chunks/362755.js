n.d(t, {
  Y: function() {
return o;
  }
});
var r, i, u, l, o, E, a = n(442837),
  _ = n(570140);
(r = o || (o = {}))[r.UNKNOWN = 0] = 'UNKNOWN', r[r.PENDING = 1] = 'PENDING', r[r.DONE = 2] = 'DONE';
let S = 0,
  s = null;
class A extends(E = a.ZP.Store) {
  get browserCheckoutState() {
return S;
  }
  get loadId() {
return s;
  }
}
l = 'BrowserCheckoutStateStore', (u = 'displayName') in(i = A) ? Object.defineProperty(i, u, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[u] = l, t.Z = new A(_.Z, {
  USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function(e) {
S = 1, s = e.loadId;
  },
  USER_PAYMENT_BROWSER_CHECKOUT_DONE: function(e) {
s === e.loadId && (S = 2);
  }
});