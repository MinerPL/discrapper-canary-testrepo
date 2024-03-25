"use strict";
E.r(t), E.d(t, {
  default: function() {
    return A
  }
});
var _ = E("37983");
E("884691");
var s = E("449918"),
  T = E("956089"),
  a = E("49111"),
  n = E("782340");

function A(e) {
  let {
    className: t,
    color: E = (0, s.getColor)(a.Color.BRAND_500),
    ...A
  } = e;
  return (0, _.jsx)(T.TextBadge, {
    ...A,
    text: n.default.Messages.ALPHA,
    color: E,
    className: t
  })
}