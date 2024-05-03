"use strict";
t.r(n), t.d(n, {
  default: function() {
    return s
  }
});
var l = t("735250");
t("470079");
var a = t("114484"),
  r = t("970184"),
  u = t("221791");

function s(e) {
  let {
    components: n,
    renderComponents: t
  } = e, {
    message: s
  } = (0, r.useComponentStateContext)();
  return null == n || 0 === n.length ? null : (0, l.jsxs)("div", {
    className: u.container,
    children: [(0, l.jsx)("div", {
      className: u.children,
      children: t(n)
    }), null != s ? (0, l.jsx)(a.default, {
      className: u.error,
      message: s,
      component: e
    }) : null]
  })
}