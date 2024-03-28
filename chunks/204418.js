"use strict";
a.r(t);
var s = a("735250");
a("470079");
var r = a("481060"),
  l = a("204197"),
  i = a("998502"),
  n = a("689938");
let o = i.default.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;
t.default = e => {
  let {
    user: t,
    avatarDecorationOverride: a,
    status: i,
    avatarSize: u = r.AvatarSizes.SIZE_120,
    "aria-hidden": c = !1
  } = e, {
    avatarDecorationSrc: d,
    avatarSrc: f,
    eventHandlers: h
  } = (0, l.default)({
    user: t,
    size: u,
    showPending: !0,
    avatarDecorationOverride: a
  });
  return (0, s.jsx)(o, {
    avatarDecoration: d,
    src: f,
    size: u,
    status: i,
    "aria-label": c ? void 0 : n.default.Messages.USER_SETTINGS_AVATAR,
    "aria-hidden": c,
    ...h
  })
}