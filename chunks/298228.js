"use strict";
t.d(s, {
  O: function() {
    return l
  }
}), t(47120), t(653041);
var n = t(470079),
  a = t(399606),
  i = t(1870);
let l = e => {
  let s = (0, a.e7)([i.Z], () => i.Z.purchases);
  return (0, n.useMemo)(() => {
    let t = [],
      n = [];
    for (let a of e.values()) a.products.every(e => !!s.get(e.skuId)) ? t.push(a) : n.push(a);
    return n.concat(t)
  }, [e, s])
}