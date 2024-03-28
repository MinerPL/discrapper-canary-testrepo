"use strict";
n.r(t), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("965288"),
  i = n("911790");
t.default = l.memo(function(e) {
  let {
    channel: t,
    participants: n,
    maxTiles: l
  } = e;
  if (0 === n.length) return null;
  let r = [];
  for (let e = 0; e < l; e++)
    if (e < n.length) {
      let l = n[e];
      r.push((0, a.jsx)(s.default, {
        channel: t,
        participant: l
      }, l.id))
    } else r.push((0, a.jsx)(s.AudienceEmptyTile, {}, e));
  return (0, a.jsx)("div", {
    className: i.participants,
    children: r
  })
})