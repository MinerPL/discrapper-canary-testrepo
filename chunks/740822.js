"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var n = l("37983");
l("884691");
var r = l("449918"),
  s = l("956089"),
  a = l("49111"),
  i = l("782340");

function o(e) {
  let {
    className: t,
    color: l = (0, r.getColor)(a.Color.BRAND_500),
    ...o
  } = e;
  return (0, n.jsx)(s.TextBadge, {
    ...o,
    text: i.default.Messages.ALPHA,
    color: l,
    className: t
  })
}