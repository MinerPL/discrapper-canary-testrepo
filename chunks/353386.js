"use strict";
t.r(r), t.d(r, {
  HamburgerButton: function() {
    return l
  }
});
var a = t("37983");
t("884691");
var n = t("421898"),
  i = t.n(n),
  o = t("401921");
let l = e => {
  let {
    open: r = !1,
    className: t,
    ...n
  } = e;
  return (0, a.jsxs)("button", {
    type: "button",
    className: i(o.btnHamburger, {
      [o.btnHamburgerOpen]: r
    }, t),
    ...n,
    children: [(0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
  })
}