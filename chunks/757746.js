t.d(e, {
  Z: function() {
return o;
  }
});
var i = t(442837),
  l = t(558381),
  r = t(551428);
let o = (0, i.Kb)(r.Z, {
  get: n => null != n ? r.Z.getForSKU(n) : null,
  load: (n, e) => null != e ? (0, l.km)(e) : Promise.resolve(),
  getIsLoading: n => null != n && r.Z.isFetchingForSKU(n)
});