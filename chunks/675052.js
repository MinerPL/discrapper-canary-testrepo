n.d(t, {
  a: function() {
return l;
  }
}), n(47120), n(653041);
var r = n(470079),
  s = n(399606),
  a = n(1870),
  o = n(215023);
let i = e => {
let t = new Map();
return o.N.forEach((e, n) => {
  t.set(e, n);
}), e.sort((e, n) => {
  var r, s;
  let a = null !== (r = t.get(e.skuId)) && void 0 !== r ? r : 1 / 0;
  return a - (null !== (s = t.get(n.skuId)) && void 0 !== s ? s : 1 / 0);
});
  },
  l = e => {
let t = (0, s.e7)([a.Z], () => a.Z.purchases),
  {
    sortedPopularPickProducts: n,
    popularProductToCategoryMap: l
  } = (0, r.useMemo)(() => {
    let n = [],
      r = [],
      s = new Map();
    for (let a of e.values())
      a.products.forEach(e => {
        o.N.includes(e.skuId) && !s.has(e.skuId) && (t.get(e.skuId) ? n.push(e) : r.push(e), s.set(e.skuId, a));
      });
    let a = i(n);
    return {
      sortedPopularPickProducts: i(r).concat(a).slice(0, 12),
      popularProductToCategoryMap: s
    };
  }, [
    e,
    t
  ]);
return {
  sortedPopularPickProducts: n,
  popularProductToCategoryMap: l
};
  };