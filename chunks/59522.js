"use strict";
n.d(t, {
  _: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var s = n(692547),
  l = n(331595);
let a = e => {
  let {
    width: t = 24,
    height: n = 24,
    color: a = s.Z.colors.INTERACTIVE_NORMAL,
    colorClass: o = "",
    ...r
  } = e;
  return (0, i.jsxs)("svg", {
    ...(0, l.Z)(r),
    xmlns: "http://www.w3.org/2000/svg",
    width: t,
    height: n,
    fill: "none",
    viewBox: "0 0 24 24",
    children: [(0, i.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      fillRule: "evenodd",
      d: "M4 3a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3H4Zm1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z",
      clipRule: "evenodd",
      className: o
    }), (0, i.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      d: "M9 15h2v2H9v-2ZM13 15v2h2v-2h-2Z",
      className: o
    }), (0, i.jsx)("path", {
      fill: "string" == typeof a ? a : a.css,
      fillRule: "evenodd",
      d: "M2 11a1 1 0 0 0-1 1v6a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1H2Zm5 4v-2H5v2h2Zm2 0H7v2H5v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h-2v-2h2v-2h-2v2h-2v-2h-2v2h-2v-2H9v2Z",
      clipRule: "evenodd",
      className: o
    })]
  })
}