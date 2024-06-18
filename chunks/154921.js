"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(674298),
  a = n(928217);
let l = Object.freeze({
    STANDARD: o.colorStandard,
    MUTED: o.colorMuted,
    ERROR: o.colorError,
    BRAND: o.colorBrand,
    LINK: o.colorLink,
    HEADER_PRIMARY: o.colorHeaderPrimary,
    HEADER_SECONDARY: o.colorHeaderSecondary,
    STATUS_YELLOW: o.colorStatusYellow,
    STATUS_GREEN: o.colorStatusGreen,
    STATUS_RED: o.colorStatusRed,
    INTERACTIVE_ACTIVE: o.colorInteractiveActive,
    INTERACTIVE_NORMAL: o.colorInteractiveNormal,
    ALWAYS_WHITE: o.colorWhite,
    CUSTOM: null
  }),
  u = Object.freeze({
    SIZE_10: a.size10,
    SIZE_12: a.size12,
    SIZE_14: a.size14,
    SIZE_16: a.size16,
    SIZE_20: a.size20,
    SIZE_24: a.size24,
    SIZE_32: a.size32
  }),
  _ = e => {
    let {
      className: t,
      color: n = l.STANDARD,
      size: r = u.SIZE_14,
      tag: a = "div",
      selectable: _ = !1,
      strong: d = !1,
      children: c,
      style: E,
      "aria-label": I,
      ...T
    } = e;
    return (0, i.jsx)(a, {
      "aria-label": I,
      className: s()(n, r, t, {
        [o.selectable]: _,
        [o.strong]: d
      }),
      style: E,
      ...T,
      children: c
    })
  };
_.Colors = l, _.Sizes = u, t.Z = _