"use strict";
a.r(e), a.d(e, {
  ImageFileIcon: function() {
    return i
  }
});
var n = a("735250");
a("470079");
var s = a("692547"),
  l = a("331595");
let i = t => {
  let {
    width: e = 24,
    height: a = 24,
    color: i = s.default.colors.INTERACTIVE_NORMAL,
    colorClass: r = "",
    ...u
  } = t;
  return (0, n.jsxs)("svg", {
    ...(0, l.default)(u),
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: a,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, n.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      fillRule: "evenodd",
      d: "M6 22h12a4 4 0 0 0 4-4v-7.5a.5.5 0 0 0-.5-.5H19a5 5 0 0 1-5-5V2.5a.5.5 0 0 0-.5-.5H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4Zm9.35-8.87 3.5 4.67c.37.5.02 1.2-.6 1.2H5.81a.75.75 0 0 1-.59-1.22l1.86-2.32a1.5 1.5 0 0 1 2.34 0l.5.64 2.23-2.97a2 2 0 0 1 3.2 0ZM10.2 5.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z",
      clipRule: "evenodd",
      className: r
    }), (0, n.jsx)("path", {
      fill: "string" == typeof i ? i : i.css,
      d: "M21.66 8c.03 0 .05-.03.04-.06a3 3 0 0 0-.58-.82l-4.24-4.24a3 3 0 0 0-.82-.58.04.04 0 0 0-.06.04V5a3 3 0 0 0 3 3h2.66Z",
      className: r
    })]
  })
}