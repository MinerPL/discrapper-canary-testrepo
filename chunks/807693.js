var r, l, a, o, c = t(442837),
  i = t(570140);
let s = {};
class u extends(o = c.ZP.Store) {
  getEULA(e) {
return s[e];
  }
}
a = 'EULAStore', (l = 'displayName') in(r = u) ? Object.defineProperty(r, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[l] = a, n.Z = new u(i.Z, {
  EULA_FETCH_SUCCESS: function(e) {
let {
  eula: n
} = e;
s[n.id] = n;
  }
});