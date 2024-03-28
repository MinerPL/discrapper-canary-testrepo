"use strict";
t.r(r), t.d(r, {
  HamburgerButton: function() {
    return l
  }
});
var a = t("735250");
t("470079");
var n = t("557533"),
  i = t.n(n),
  o = t("50459");
let l = e => {
  let {
    open: r = !1,
    className: t,
    ...n
  } = e;
  return (0, a.jsxs)("button", {
    type: "button",
    className: i()(o.btnHamburger, {
      [o.btnHamburgerOpen]: r
    }, t),
    ...n,
    children: [(0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {}), (0, a.jsx)("span", {})]
  })
}