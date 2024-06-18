"use strict";
n.d(t, {
  Z: function() {
    return c
  }
}), n(47120);
var i = n(735250);
n(470079);
var r = n(866442),
  s = n(442837),
  o = n(692547),
  a = n(481060),
  l = n(607070),
  u = n(797717),
  _ = n(507957),
  d = n(689938);

function c(e) {
  let t, {
      color: n,
      size: c,
      forcedIconColor: E,
      className: I,
      iconClassName: T,
      tooltipText: h
    } = e,
    [S, f] = (0, s.Wu)([l.Z], () => [l.Z.desaturateUserColors, l.Z.saturation]),
    N = (0, a.useToken)(o.Z.unsafe_rawColors.PRIMARY_300).hex(),
    A = (0, r._i)(null != n ? n : N),
    m = (0, r.ho)(A, !1, S ? f : null);
  return t = null != E ? E : .3 > (0, r.Bd)(A) ? o.Z.unsafe_rawColors.PRIMARY_630.css : o.Z.unsafe_rawColors.WHITE_500.css, (0, i.jsx)(a.Tooltip, {
    text: null != h ? h : d.Z.Messages.CONNECTIONS_ROLE_OFFICIAL_ICON_TOOLTIP,
    children: e => (0, i.jsx)(u.Z, {
      ...e,
      className: I,
      color: m,
      size: c,
      children: (0, i.jsx)(_.Z, {
        color: t,
        height: c,
        width: c,
        className: T
      })
    })
  })
}