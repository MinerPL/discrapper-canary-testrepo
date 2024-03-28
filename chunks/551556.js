"use strict";
a.r(t), a.d(t, {
  default: function() {
    return l
  }
});
var s = a("735250");
a("470079");
var i = a("692547"),
  n = a("325767");

function l(e) {
  let {
    width: t = 24,
    height: a = 24,
    color: l = i.default.unsafe_rawColors.WHITE_500.css,
    backgroundColor: o = i.default.unsafe_rawColors.BRAND_500.css,
    ...r
  } = e;
  return (0, s.jsxs)("svg", {
    ...(0, n.default)(r),
    width: t,
    height: a,
    viewBox: "0 0 14 14",
    children: [(0, s.jsx)("path", {
      fill: o,
      d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166"
    }), (0, s.jsx)("path", {
      d: "M6.5,10.3L3.4,8l0.9-1.2l1.8,1.4l3.3-4.3l1.2,0.9L6.5,10.3z",
      fill: l
    })]
  })
}