"use strict";
l.r(r), l.d(r, {
  default: function() {
    return i
  }
});
var t = l("735250");
l("470079");
var s = l("803997"),
  n = l.n(s),
  a = l("392198");

function i(e) {
  let {
    icon: r,
    iconClassName: l,
    description: s,
    color: i
  } = e;
  return (0, t.jsxs)("div", {
    className: a.perkRow,
    children: [(0, t.jsx)("div", {
      className: a.perkIconContainer,
      children: (0, t.jsx)(r, {
        color: i,
        className: n()(a.perkIcon, l)
      })
    }), (0, t.jsx)("div", {
      className: a.perkDescription,
      children: s
    })]
  })
}