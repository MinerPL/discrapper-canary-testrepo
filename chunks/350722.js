"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(735250);
n(470079);
var l = n(120356),
  a = n.n(l),
  i = n(481060),
  r = n(53281);

function o(e) {
  let {
    children: t,
    className: n,
    innerClassName: l,
    onChange: o,
    "aria-label": c,
    "aria-describedby": d,
    filters: u,
    multiple: h = !1,
    disabled: m = !1,
    submitting: g = !1,
    ...x
  } = e;
  return (0, s.jsx)(i.FocusRing, {
    within: !0,
    children: (0, s.jsxs)("div", {
      className: a()(n, (0, i.getButtonStyle)({
        ...x,
        submitting: g,
        disabled: m
      })),
      "aria-disabled": m,
      children: [(0, s.jsx)("span", {
        "aria-hidden": !0,
        className: l,
        children: t
      }), (0, s.jsx)(r.Z, {
        tabIndex: 0,
        onChange: o,
        filters: u,
        multiple: h,
        "aria-label": c,
        "aria-describedby": d,
        disabled: m
      })]
    })
  })
}