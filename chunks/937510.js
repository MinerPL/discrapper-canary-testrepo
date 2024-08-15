n.d(t, {
  l: function() {
return u;
  }
}), n(47120), n(653041);
var s, r, a = n(470079),
  i = n(952639),
  o = n.n(i),
  c = n(399606),
  l = n(1870),
  d = n(724994);
(r = s || (s = {}))[r.NOT_PURCHASED = 0] = 'NOT_PURCHASED', r[r.PARTIAL_PURCHASED = 1] = 'PARTIAL_PURCHASED', r[r.PURCHASED = 2] = 'PURCHASED';
let u = e => {
  let t = (0, c.e7)([l.Z], () => l.Z.purchases);
  return (0, a.useMemo)(() => {
let t = [
  [],
  [],
  []
];
for (let n of e.values()) {
  let {
    isPurchased: e,
    isPartiallyPurchased: s
  } = (0, d.U)(l.Z, n);
  t[s ? 1 : e ? 2 : 0].push(n);
}
return o()(t);
  }, [
t,
e
  ]);
};