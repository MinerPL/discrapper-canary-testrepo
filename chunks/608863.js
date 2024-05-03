"use strict";
n.r(t), n.d(t, {
  HamburgerButton: function() {
    return o
  }
});
var r = n("735250");
n("470079");
var i = n("557533"),
  l = n.n(i),
  s = n("188364");
let o = e => {
  let {
    open: t = !1,
    className: n,
    ...i
  } = e;
  return (0, r.jsxs)("button", {
    type: "button",
    className: l()(s.btnHamburger, {
      [s.btnHamburgerOpen]: t
    }, n),
    ...i,
    children: [(0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {})]
  })
}