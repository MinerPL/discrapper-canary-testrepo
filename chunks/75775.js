"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var a = s("735250");
s("470079");
var l = s("325767");

function n(e) {
  let {
    width: t = 24,
    height: s = 24,
    color: n = "currentColor",
    ...i
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, l.default)(i),
    width: t,
    height: s,
    viewBox: "0 0 20 20",
    children: (0, a.jsx)("path", {
      d: "M12.5 3.33334V5H17.1583L11.6667 10.4917L8.33333 7.15834L0 15.4917L1.175 16.6667L8.33333 9.50834L11.6667 12.8417L18.3333 6.175V10.8333H20V3.33334H12.5Z",
      fill: n
    })
  })
}