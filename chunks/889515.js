"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("735250");
n("470079");
var a = n("114484"),
  s = n("970184"),
  u = n("588625");

function o(e) {
  let {
    components: t,
    renderComponents: n,
    ...o
  } = e, {
    message: i
  } = (0, s.useComponentStateContext)();
  return null == t || 0 === t.length ? null : (0, l.jsxs)("div", {
    className: u.container,
    children: [(0, l.jsx)("div", {
      className: u.children,
      children: n(t)
    }), null != i ? (0, l.jsx)(a.default, {
      className: u.error,
      message: i,
      component: o
    }) : null]
  })
}