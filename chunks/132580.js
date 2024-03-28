"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var E = s("735250");
s("470079");
var _ = s("44315"),
  a = s("26290"),
  n = s("981631"),
  T = s("689938");

function i(e) {
  let {
    className: t,
    color: s = (0, _.getColor)(n.Color.BRAND_500),
    ...i
  } = e;
  return (0, E.jsx)(a.TextBadge, {
    ...i,
    text: T.default.Messages.ALPHA,
    color: s,
    className: t
  })
}