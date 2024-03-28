"use strict";
l.r(t), l.d(t, {
  filterPermissionSearchItems: function() {
    return s
  }
}), l("653041"), l("47120");
var n = l("658722"),
  a = l.n(n);

function s(e, t, l) {
  if ("" === l) return e;
  let n = l.toLowerCase(),
    s = [];
  for (let i of e) {
    let {
      id: e,
      names: r
    } = t(i);
    if (e === l) return [i];
    r.some(e => a()(n, e.toLowerCase())) && s.push(i)
  }
  return s
}