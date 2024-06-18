"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(323626),
  l = n(928217);
let u = Object.freeze({
    SIZE_10: l.size10,
    SIZE_12: l.size12,
    SIZE_14: l.size14,
    SIZE_16: l.size16,
    SIZE_20: l.size20,
    SIZE_24: l.size24,
    SIZE_32: l.size32
  }),
  _ = e => {
    let {
      id: t,
      muted: n = !1,
      className: r = a.wrapper,
      size: l = u.SIZE_14,
      selectable: _ = !1,
      children: d,
      color: c,
      onClick: E,
      onContextMenu: I,
      style: T,
      title: h,
      uppercase: S
    } = e;
    return (0, i.jsx)(o.H, {
      role: null != E ? "button" : void 0,
      onClick: E,
      onContextMenu: I,
      id: t,
      className: s()(r, {
        [a.base]: !0,
        [l]: !0,
        [a.selectable]: _,
        [a.muted]: n,
        [a.uppercase]: S
      }),
      title: h,
      style: null != c ? {
        ...T,
        color: c
      } : T,
      children: d
    })
  };
_.Sizes = u, t.Z = _