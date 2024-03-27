"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var r = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  a = n("870984");

function i(e) {
  let {
    icon: t,
    iconClassName: n,
    description: l,
    color: i
  } = e;
  return (0, r.jsxs)("div", {
    className: a.perkRow,
    children: [(0, r.jsx)("div", {
      className: a.perkIconContainer,
      children: (0, r.jsx)(t, {
        color: i,
        className: s(a.perkIcon, n)
      })
    }), (0, r.jsx)("div", {
      className: a.perkDescription,
      children: l
    })]
  })
}