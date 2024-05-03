"use strict";
t.r(n), t.d(n, {
  default: function() {
    return o
  }
});
var l = t("735250");
t("470079");
var a = t("120356"),
  r = t.n(a),
  u = t("911969"),
  s = t("70189");

function o(e) {
  let {
    divider: n,
    spacing: t
  } = e;
  return (0, l.jsx)("div", {
    className: r()({
      [s.spacingLarge]: t === u.SeparatorSpacingSize.LARGE,
      [s.divider]: n
    })
  })
}