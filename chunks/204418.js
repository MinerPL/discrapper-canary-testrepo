var r = n(735250);
n(470079);
var i = n(481060),
  a = n(204197),
  o = n(998502),
  s = n(689938);
let l = o.ZP.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;
t.Z = e => {
  let {
user: t,
guildId: n,
avatarDecorationOverride: o,
status: u,
avatarSize: c = i.AvatarSizes.SIZE_120,
'aria-hidden': d = !1,
className: _,
animateOnHover: E = !1
  } = e, {
avatarDecorationSrc: f,
avatarSrc: h,
eventHandlers: p
  } = (0, a.Z)({
user: t,
guildId: n,
size: c,
showPending: !0,
avatarDecorationOverride: o,
animateOnHover: E
  });
  return (0, r.jsx)(l, {
avatarDecoration: f,
src: h,
size: c,
status: u,
'aria-label': d ? void 0 : s.Z.Messages.USER_SETTINGS_AVATAR,
'aria-hidden': d,
className: _,
...p
  });
};