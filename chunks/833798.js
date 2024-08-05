n.d(t, {
  s: function() {
return s;
  }
}), n(47120), n(627341);
var r = n(278074),
  i = n(264181),
  a = n(806185);
class s {
  static fromServer(e) {
var t;
return new s(Object.fromEntries(Object.entries(null !== (t = e.marketings) && void 0 !== t ? t : {}).map(e => {
  let [t, n] = e;
  return [
    t,
    (0, r.EQ)(n).with({
      type: i.Z.COACHTIP
    }, e => a.Z.fromServer(e)).otherwise(() => n)
  ];
})));
  }
  constructor(e) {
var t, n, r;
t = this, r = void 0, (n = 'marketingsBySurfaces') in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r, this.marketingsBySurfaces = e;
  }
}