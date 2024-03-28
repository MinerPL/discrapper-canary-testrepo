"use strict";
i.r(t), i.d(t, {
  default: function() {
    return d
  }
});
var l = i("735250");
i("470079");
var a = i("803997"),
  s = i.n(a),
  n = i("672752"),
  o = i("466111"),
  r = i("154921"),
  u = i("443393");

function d(e) {
  let {
    text: t,
    textSize: i = r.default.Sizes.SIZE_12,
    textColor: a = r.default.Colors.STANDARD,
    className: d,
    button: c,
    reducedRightPadding: f = !1
  } = e;
  return (0, l.jsxs)("div", {
    className: s()(f ? u.noticeWithoutRightPadding : u.noticeWithRightPadding, d),
    children: [(0, l.jsxs)("div", {
      className: u.noticeLeft,
      children: [(0, l.jsx)(o.default, {
        className: u.icon,
        color: n.GradientCssUrls.PREMIUM_TIER_2
      }), (0, l.jsx)(r.default, {
        className: u.text,
        size: i,
        color: a,
        children: t
      })]
    }), c]
  })
}