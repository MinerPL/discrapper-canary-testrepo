"use strict";
t.d(s, {
  Z: function() {
    return c
  }
});
var n, i, l = t(735250);
t(470079);
var a = t(50199),
  r = t(465670),
  o = t(229546);
(n = i || (i = {})).ARROW_DOWN = "arrow_down", n.CROSS = "cross";

function c(e) {
  let {
    type: s
  } = e;
  return (0, l.jsx)("div", {
    className: o.dividerContainer,
    children: (0, l.jsx)("div", {
      className: o.dividerIconContainer,
      children: function(e) {
        switch (e) {
          case "arrow_down":
            return (0, l.jsx)(a.Z, {
              width: 24,
              height: 24,
              className: o.dividierIcon
            });
          case "cross":
            return (0, l.jsx)(r.Z, {
              width: 24,
              height: 24,
              className: o.dividierIcon
            });
          default:
            return null
        }
      }(s)
    })
  })
}
c.Type = i