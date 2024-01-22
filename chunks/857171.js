"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  o = n("77078"),
  s = n("371642");

function a(e) {
  let {
    children: t,
    className: n,
    innerClassName: i,
    onChange: a,
    "aria-label": u,
    "aria-describedby": d,
    filters: c,
    multiple: f = !1,
    disabled: p = !1,
    submitting: m = !1,
    ...h
  } = e;
  return (0, l.jsx)(o.FocusRing, {
    within: !0,
    children: (0, l.jsxs)("div", {
      className: r(n, (0, o.getButtonStyle)({
        ...h,
        submitting: m,
        disabled: p
      })),
      "aria-disabled": p,
      children: [(0, l.jsx)("span", {
        "aria-hidden": !0,
        className: i,
        children: t
      }), (0, l.jsx)(s.default, {
        tabIndex: 0,
        onChange: a,
        filters: c,
        multiple: f,
        "aria-label": u,
        "aria-describedby": d,
        disabled: p
      })]
    })
  })
}