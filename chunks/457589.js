"use strict";
t.r(r), t.d(r, {
  ReceiptIcon: function() {
    return o
  }
});
var a = t("37983");
t("884691");
var n = t("669491"),
  i = t("82169");
let o = e => {
  let {
    width: r = 24,
    height: t = 24,
    color: o = n.default.colors.INTERACTIVE_NORMAL,
    colorClass: l = "",
    ...s
  } = e;
  return (0, a.jsx)("svg", {
    ...(0, i.default)(s),
    xmlns: "http://www.w3.org/2000/svg",
    width: r,
    height: t,
    fill: "none",
    viewBox: "0 0 24 24",
    children: (0, a.jsx)("path", {
      fill: "string" == typeof o ? o : o.css,
      fillRule: "evenodd",
      d: "M21 21.93V2.07a1 1 0 0 0-1.27-.97l-2.5.7a3 3 0 0 1-1.46.04l-3.12-.7a3 3 0 0 0-1.3 0l-3.12.7a3 3 0 0 1-1.45-.04l-2.51-.7A1 1 0 0 0 3 2.07v19.86a1 1 0 0 0 1.27.97l2.5-.7a3 3 0 0 1 1.46-.04l3.12.7a3 3 0 0 0 1.3 0l3.12-.7a3 3 0 0 1 1.45.04l2.51.7a1 1 0 0 0 1.27-.97ZM7 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm-1 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm8-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z",
      clipRule: "evenodd",
      className: l
    })
  })
}