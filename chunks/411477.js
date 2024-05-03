"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var n = a("735250");
a("470079");
var s = a("120356"),
  l = a.n(s),
  r = a("672752"),
  i = a("466111"),
  u = a("154921"),
  o = a("74989");

function c(e) {
  let {
    text: t,
    textSize: a = u.default.Sizes.SIZE_12,
    textColor: s = u.default.Colors.STANDARD,
    className: c,
    button: d,
    reducedRightPadding: A = !1
  } = e;
  return (0, n.jsxs)("div", {
    className: l()(A ? o.noticeWithoutRightPadding : o.noticeWithRightPadding, c),
    children: [(0, n.jsxs)("div", {
      className: o.noticeLeft,
      children: [(0, n.jsx)(i.default, {
        className: o.icon,
        color: r.GradientCssUrls.PREMIUM_TIER_2
      }), (0, n.jsx)(u.default, {
        className: o.text,
        size: a,
        color: s,
        children: t
      })]
    }), d]
  })
}