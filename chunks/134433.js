"use strict";
n.d(t, {
  Z: function() {
    return E
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(866442),
  a = n(442837),
  l = n(692547),
  u = n(481060),
  _ = n(607070),
  d = n(757698),
  c = n(997624);

function E(e) {
  let t, {
      color: n,
      size: r,
      forcedIconColor: E,
      className: I,
      iconClassName: T
    } = e,
    [h, S] = (0, a.Wu)([_.Z], () => [_.Z.desaturateUserColors, _.Z.saturation]),
    f = (0, u.useToken)(l.Z.unsafe_rawColors.PRIMARY_300).hex(),
    N = (0, o._i)(null != n ? n : f),
    A = (0, o.ho)(N, !1, h ? S : null);
  t = null != E ? E : .3 > (0, o.Bd)(N) ? l.Z.unsafe_rawColors.PRIMARY_630.css : l.Z.unsafe_rawColors.WHITE_500.css;
  let m = r / 8;
  return (0, i.jsx)("div", {
    style: {
      background: A,
      width: r,
      height: r,
      borderRadius: r,
      lineHeight: "".concat(r, "px")
    },
    className: I,
    children: (0, i.jsx)(d.Z, {
      color: t,
      className: s()(c.linkIcon, T),
      width: r - 2 * m,
      height: r - 2 * m,
      style: {
        margin: m
      }
    })
  })
}