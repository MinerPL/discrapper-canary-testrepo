var i, a, s, r, l = n(442837),
  o = n(570140);
let c = !1;
class d extends(r = l.ZP.Store) {
  get blockedByProxy() {
return c;
  }
}
s = 'ProxyBlockStore', (a = 'displayName') in(i = d) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new d(o.Z, {
  PROXY_BLOCKED_REQUEST: function(e) {
c = !0;
  }
});