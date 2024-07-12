n.d(t, {
  O: function() {
return o;
  }
}), n(47120), n(653041);
var r = n(470079),
  s = n(399606),
  a = n(1870);
let o = e => {
  let t = (0, s.e7)([a.Z], () => a.Z.purchases);
  return (0, r.useMemo)(() => {
let n = [],
  r = [];
for (let s of e.values())
  s.products.every(e => !!t.get(e.skuId)) ? n.push(s) : r.push(s);
return r.concat(n);
  }, [
e,
t
  ]);
};