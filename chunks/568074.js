"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
}), s("47120"), s("390547");
var a = s("944537");

function l(e) {
  let t = (0, a.useEditStateStore)(t => t.editStateIdsForGroup[e]),
    s = (0, a.useEditStateStore)(e => e.listings);
  if (null == t) return !1;
  let l = Object.keys(s),
    n = t.every(e => l.includes(e)),
    i = Object.entries(s).filter(e => {
      let [s] = e;
      return null == t ? void 0 : t.includes(s)
    }).flatMap(e => null == e[1] || Object.values(e[1]).every(e => null == e || "" === e));
  return !n || i.includes(!0)
}