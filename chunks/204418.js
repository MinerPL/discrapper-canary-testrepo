"use strict";
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(204197),
  o = n(998502),
  a = n(689938);
let l = o.ZP.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;
t.Z = e => {
  let {
    user: t,
    guildId: n,
    avatarDecorationOverride: o,
    status: u,
    avatarSize: _ = r.AvatarSizes.SIZE_120,
    "aria-hidden": d = !1,
    className: c,
    animateOnHover: E = !1
  } = e, {
    avatarDecorationSrc: I,
    avatarSrc: T,
    eventHandlers: h
  } = (0, s.Z)({
    user: t,
    guildId: n,
    size: _,
    showPending: !0,
    avatarDecorationOverride: o,
    animateOnHover: E
  });
  return (0, i.jsx)(l, {
    avatarDecoration: I,
    src: T,
    size: _,
    status: u,
    "aria-label": d ? void 0 : a.Z.Messages.USER_SETTINGS_AVATAR,
    "aria-hidden": d,
    className: c,
    ...h
  })
}