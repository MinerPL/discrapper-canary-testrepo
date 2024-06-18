"use strict";
t.d(s, {
  Z: function() {
    return i
  }
}), t(47120), t(390547);
var n = t(944537);

function i(e) {
  let s = (0, n.n)(s => s.editStateIdsForGroup[e]),
    t = (0, n.n)(e => e.listings);
  if (null == s) return !1;
  let i = Object.keys(t),
    l = s.every(e => i.includes(e)),
    a = Object.entries(t).filter(e => {
      let [t] = e;
      return null == s ? void 0 : s.includes(t)
    }).flatMap(e => null == e[1] || Object.values(e[1]).every(e => null == e || "" === e));
  return !l || a.includes(!0)
}