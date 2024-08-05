var i, s, a, r, l = n(442837),
  o = n(570140);
let c = !1;
class u extends(r = l.ZP.Store) {
  get blockedByProxy() {
return c;
  }
}
a = 'ProxyBlockStore', (s = 'displayName') in(i = u) ? Object.defineProperty(i, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = a, t.Z = new u(o.Z, {
  PROXY_BLOCKED_REQUEST: function(e) {
c = !0;
  }
});