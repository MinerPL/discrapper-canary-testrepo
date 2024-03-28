"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var n = s("735250");
s("470079");
var l = s("803997"),
  a = s.n(l),
  o = s("481060"),
  i = s("813197");

function r(e) {
  let {
    buttonCTA: t,
    onChange: s,
    "aria-label": l,
    multiple: r = !1,
    disabled: u = !1,
    submitting: c = !1,
    ...d
  } = e;
  return (0, n.jsx)(o.FocusRing, {
    within: !0,
    children: (0, n.jsxs)("div", {
      className: a()((0, o.getButtonStyle)({
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
      }), (0, n.jsx)(i.default, {
        tabIndex: 0,
        onChange: s,
        multiple: r,
        "aria-label": null != l ? l : t,
        disabled: u
      })]
    })
  })
}