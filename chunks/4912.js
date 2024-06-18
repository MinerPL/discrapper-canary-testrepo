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
    width: s = 14,
    height: t = 14,
    color: l = "currentColor",
    foreground: a,
    ...r
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, i.Z)(r),
    width: s,
    height: t,
    viewBox: "0 0 14 14",
    children: (0, n.jsx)("path", {
      className: a,
      fill: l,
      d: "M12,0 C12.8284271,0 14,1.17157288 14,2 L14,12 C14,12.8284271 12.8284271,14 12,14 L2,14 C1.17157288,14 0,12.8284271 0,12 L0,2 C0,1.17157288 1.17157288,0 2,0 L12,0 Z M8,3 L6,3 L6,8 L8,8 L8,3 Z M8,11 L8,9 L6,9 L6,11 L8,11 Z"
    })
  })
}