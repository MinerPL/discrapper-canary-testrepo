"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var s = a("735250");
a("470079");
var n = a("803997"),
  l = a.n(n),
  r = a("481060"),
  i = a("53281");

function o(e) {
  let {
    children: t,
    className: a,
    innerClassName: n,
    onChange: o,
    "aria-label": d,
    "aria-describedby": u,
    filters: c,
    multiple: m = !1,
    disabled: h = !1,
    submitting: f = !1,
    ...g
  } = e;
  return (0, s.jsx)(r.FocusRing, {
    within: !0,
    children: (0, s.jsxs)("div", {
      className: l()(a, (0, r.getButtonStyle)({
        ...g,
        submitting: f,
        disabled: h
      })),
      "aria-disabled": h,
      children: [(0, s.jsx)("span", {
        "aria-hidden": !0,
        className: n,
        children: t
      }), (0, s.jsx)(i.default, {
        tabIndex: 0,
        onChange: o,
        filters: c,
        multiple: m,
        "aria-label": d,
        "aria-describedby": u,
        disabled: h
      })]
    })
  })
}