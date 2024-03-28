"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var n = s("735250");
s("470079");
var l = s("759231"),
  a = s("696936");

function o(e) {
  let {
    children: t,
    className: s,
    color: o = a.MessageBlockColors.YELLOW
  } = e;
  return (0, n.jsx)(a.default, {
    className: s,
    color: o,
    icon: l.default,
    children: t
  })
}