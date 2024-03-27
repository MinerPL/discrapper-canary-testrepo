"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var n = s("37983");
s("884691");
var l = s("414456"),
  o = s.n(l),
  a = s("77078"),
  r = s("694187");

function i(e) {
  let {
    buttonCTA: t,
    onChange: s,
    "aria-label": l,
    multiple: i = !1,
    disabled: u = !1,
    submitting: c = !1,
    ...d
  } = e;
  return (0, n.jsx)(a.FocusRing, {
    within: !0,
    children: (0, n.jsxs)("div", {
      className: o((0, a.getButtonStyle)({
        ...d,
        submitting: c,
        disabled: u
      })),
      style: {
        width: "max-content"
      },
      "aria-disabled": u,
      children: [(0, n.jsx)("span", {
        "aria-hidden": !0,
        children: t
      }), (0, n.jsx)(r.default, {
        tabIndex: 0,
        onChange: s,
        multiple: i,
        "aria-label": null != l ? l : t,
        disabled: u
      })]
    })
  })
}