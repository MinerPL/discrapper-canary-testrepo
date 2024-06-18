"use strict";
t.d(s, {
  Z: function() {
    return l
  }
});
var n = t(735250);
t(470079);
var i = t(325767);

function l(e) {
  let {
    width: s = 24,
    height: t = 24,
    color: l = "currentColor",
    ...a
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, i.Z)(a),
    width: s,
    height: t,
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("path", {
      d: "M22 9H10V7H22V9ZM22 12H2V14H22V12ZM22 17H2V19H22V17ZM9 5.41L7.59 4L4 7.59L2.41 6L1 7.41L4 10.41L9 5.41Z",
      fill: l
    })
  })
}