n.d(t, {
  Z: function() {
return a;
  }
}), n(47120), n(390547);
var s = n(944537);

function a(e) {
  let t = (0, s.n)(t => t.editStateIdsForGroup[e]),
n = (0, s.n)(e => e.listings);
  if (null == t)
return !1;
  let a = Object.keys(n),
i = t.every(e => a.includes(e)),
r = Object.entries(n).filter(e => {
  let [n] = e;
  return null == t ? void 0 : t.includes(n);
}).flatMap(e => null == e[1] || Object.values(e[1]).every(e => null == e || '' === e));
  return !i || r.includes(!0);
}