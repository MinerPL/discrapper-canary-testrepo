"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("450369"),
  i = n("16163");
t.default = l.memo(function(e) {
  let {
    channel: t,
    participants: n,
    tileWidth: l,
    selectedParticipant: r
  } = e;
  return (0, a.jsx)("div", {
    className: i.rowContainer,
    children: n.map(e => e.id === (null == r ? void 0 : r.id) ? null : (0, a.jsx)(s.default, {
      channel: t,
      participant: e,
      width: l
    }, e.id))
  })
})