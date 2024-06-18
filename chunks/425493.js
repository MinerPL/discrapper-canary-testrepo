"use strict";
var i, r, s = n(735250);
n(470079);
var o = n(120356),
  a = n.n(o),
  l = n(873546),
  u = n(481060),
  _ = n(465670),
  d = n(696202),
  c = n(689938),
  E = n(966646);
(i = r || (r = {})).DEFAULT = "", i.BOLD = "Bold", i.SOLID = "Solid";
let I = e => {
  let {
    closeAction: t,
    variant: n,
    keybind: i,
    className: r
  } = e;
  return (0, s.jsxs)("div", {
    className: a()(E.container, r),
    children: [(0, s.jsx)(u.Clickable, {
      className: a()(E.closeButton, {
        [E.closeButtonBold]: "Bold" === n,
        [E.closeButtonSolid]: "Solid" === n
      }),
      onClick: t,
      "aria-label": c.Z.Messages.CLOSE,
      children: "Solid" === n ? (0, s.jsx)(d.Z, {
        width: 24,
        height: 24,
        "aria-hidden": !0
      }) : (0, s.jsx)(_.Z, {
        width: 18,
        height: 18,
        "aria-hidden": !0
      })
    }), l.tq ? null : (0, s.jsx)("div", {
      className: a()(E.keybind),
      "aria-hidden": !0,
      children: i
    })]
  })
};
I.defaultProps = {
  variant: ""
}, I.Variants = r, t.Z = I