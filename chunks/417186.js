"use strict";
s.r(t), s.d(t, {
  default: function() {
    return a
  }
});
var n = s("37983");
s("884691");
var l = s("423487"),
  o = s("223984");

function a(e) {
  let {
    children: t,
    className: s,
    color: a = o.MessageBlockColors.YELLOW
  } = e;
  return (0, n.jsx)(o.default, {
    className: s,
    color: a,
    icon: l.default,
    children: t
  })
}