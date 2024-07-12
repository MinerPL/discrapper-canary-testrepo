n.d(t, {
  l: function() {
return u;
  }
}), n(47120), n(653041);
var r, s, a = n(470079),
  o = n(952639),
  i = n.n(o),
  l = n(399606),
  c = n(1870),
  d = n(724994);
(s = r || (r = {}))[s.NOT_PURCHASED = 0] = 'NOT_PURCHASED', s[s.PARTIAL_PURCHASED = 1] = 'PARTIAL_PURCHASED', s[s.PURCHASED = 2] = 'PURCHASED';
let u = e => {
  let t = (0, l.e7)([c.Z], () => c.Z.purchases);
  return (0, a.useMemo)(() => {
let t = [
  [],
  [],
  []
];
for (let n of e.values()) {
  let {
    isPurchased: e,
    isPartiallyPurchased: r
  } = (0, d.U)(c.Z, n);
  t[r ? 1 : e ? 2 : 0].push(n);
}
return i()(t);
  }, [
t,
e
  ]);
};