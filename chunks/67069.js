"use strict";
i.r(t), i.d(t, {
  default: function() {
    return c
  }
});
var s = i("37983");
i("884691");
var n = i("414456"),
  l = i.n(n),
  r = i("791106"),
  o = i("216422"),
  a = i("258078"),
  u = i("916834");

function c(e) {
  let {
    text: t,
    textSize: i = a.default.Sizes.SIZE_12,
    textColor: n = a.default.Colors.STANDARD,
    className: c,
    button: d,
    reducedRightPadding: f = !1
  } = e;
  return (0, s.jsxs)("div", {
    className: l(f ? u.noticeWithoutRightPadding : u.noticeWithRightPadding, c),
    children: [(0, s.jsxs)("div", {
      className: u.noticeLeft,
      children: [(0, s.jsx)(o.default, {
        className: u.icon,
        color: r.GradientCssUrls.PREMIUM_TIER_2
      }), (0, s.jsx)(a.default, {
        className: u.text,
        size: i,
        color: n,
        children: t
      })]
    }), d]
  })
}