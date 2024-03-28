"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("735250");
n("470079");
var a = n("831209"),
  s = n("26290"),
  i = n("465442");

function r(e) {
  let {
    mentionsCount: t
  } = e;
  return (0, l.jsx)("div", {
    className: i.mentionsBadge,
    "aria-hidden": !0,
    children: (0, l.jsx)(s.NumberBadge, {
      count: t,
      color: a.default.STATUS_DANGER
    })
  })
}