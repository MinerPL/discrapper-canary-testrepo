"use strict";

function r(a, i, x) {
  a.assets[0].p = i;
  let r = a.layers.findIndex(a => "flag" === a.nm);
  return a.layers[r].shapes[0].it.forEach((i, k) => {
    "gr" === a.layers[r].shapes[0].it[k].ty && a.layers[r].shapes[0].it[k].it.findIndex(a => "fl" === a.ty) >= 0 && (a.layers[r].shapes[0].it[k].it[1].c.k = [...x.map(a => a / 256), 1])
  }), a
}
x.r(i), x.d(i, {
  default: function() {
    return r
  }
}), x("47120")