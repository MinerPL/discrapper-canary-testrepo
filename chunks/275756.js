"use strict";
n.r(e);
var r = n("735250");
n("470079");
var i = n("960259"),
  c = n("552075"),
  l = n("325767");
e.default = (0, i.replaceIcon)(function(t) {
  let {
    width: e = 24,
    height: n = 24,
    color: i = "currentColor",
    className: c,
    foreground: o,
    ...a
  } = t;
  return (0, r.jsx)("svg", {
    ...(0, l.default)(a),
    className: c,
    width: e,
    height: n,
    viewBox: "0 0 24 24",
    children: (0, r.jsx)("path", {
      className: o,
      fill: i,
      d: "M6 22H2v-4h4v4Zm8-7h-4v7h4v-7Zm8-3h-4v10h4V12ZM16 2v2h2.59L14 8.59l-5-5-6.71 6.7 1.42 1.42L9 6.41l5 5 6-6V8h2V2h-6Z"
    })
  })
}, c.AnalyticsIcon, void 0, {
  size: 24
})