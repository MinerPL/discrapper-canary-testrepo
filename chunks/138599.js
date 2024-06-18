"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(735250);
n(470079);
var r = n(325767);

function s(e) {
  let {
    width: t = 16,
    height: n = 16,
    color: s = "currentColor",
    foreground: o,
    ...a
  } = e;
  return (0, i.jsx)("svg", {
    ...(0, r.Z)(a),
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: (0, i.jsx)("path", {
      className: o,
      fill: s,
      transform: "translate(3.000000, 4.000000)",
      d: "M16 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H2V4h14v10h-4v2h4c1.1 0 2-.9 2-2V2a2 2 0 0 0-2-2zM9 6l-4 4h3v6h2v-6h3L9 6z"
    })
  })
}