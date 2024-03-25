"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a, l, n = s("37983");
s("884691");
var i = s("695197"),
  r = s("945330"),
  o = s("993321");
(a = l || (l = {})).ARROW_DOWN = "arrow_down", a.CROSS = "cross";

function d(e) {
  let {
    type: t
  } = e;
  return (0, n.jsx)("div", {
    className: o.dividerContainer,
    children: (0, n.jsx)("div", {
      className: o.dividerIconContainer,
      children: function(e) {
        switch (e) {
          case "arrow_down":
            return (0, n.jsx)(i.default, {
              width: 24,
              height: 24,
              className: o.dividierIcon
            });
          case "cross":
            return (0, n.jsx)(r.default, {
              width: 24,
              height: 24,
              className: o.dividierIcon
            });
          default:
            return null
        }
      }(t)
    })
  })
}
d.Type = l