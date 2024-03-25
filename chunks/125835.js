"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("37983");
n("884691");
var s = n("414456"),
  i = n.n(s),
  l = n("642032"),
  a = n("625948");

function o(e) {
  let {
    className: t,
    children: n,
    forceUseColor: s = !1,
    hideStars: o
  } = e;
  return (0, r.jsxs)("span", {
    className: i(a.container, t, {
      [a.containerColored]: s
    }),
    children: [n, o ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.default, {
        foreground: a.sparkleStarTopRight
      }), (0, r.jsx)(l.default, {
        foreground: a.sparkleStarRight
      }), (0, r.jsx)(l.default, {
        foreground: a.sparkleStarBottomLeft
      })]
    })]
  })
}