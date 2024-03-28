"use strict";
i.r(t);
var n = i("735250");
i("470079");
var a = i("960259"),
  s = i("137443"),
  l = i("325767");
t.default = (0, a.replaceIcon)(function(e) {
  let {
    width: t = 16,
    height: i = 16,
    color: a = "currentColor",
    foreground: s,
    ...o
  } = e;
  return (0, n.jsx)("svg", {
    ...(0, l.default)(o),
    width: t,
    height: i,
    viewBox: "0 0 24 24",
    children: (0, n.jsx)("g", {
      fill: "none",
      fillRule: "evenodd",
      children: (0, n.jsx)("path", {
        className: s,
        fill: a,
        fillRule: "nonzero",
        d: "M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
      })
    })
  })
}, s.TimerIcon, void 0, {
  size: 16
})