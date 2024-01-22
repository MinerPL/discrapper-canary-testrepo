"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
});
var n = r("37983");
r("884691");
var a = r("77078"),
  i = r("106435"),
  s = r("50885"),
  u = r("782340");
let o = s.default.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;
var l = e => {
  let {
    user: t,
    avatarDecorationOverride: r,
    status: s,
    avatarSize: l = a.AvatarSizes.SIZE_120,
    "aria-hidden": c = !1
  } = e, {
    avatarDecorationSrc: d,
    avatarSrc: f,
    eventHandlers: E
  } = (0, i.default)({
    user: t,
    size: l,
    showPending: !0,
    avatarDecorationOverride: r
  });
  return (0, n.jsx)(o, {
    avatarDecoration: d,
    src: f,
    size: l,
    status: s,
    "aria-label": c ? void 0 : u.default.Messages.USER_SETTINGS_AVATAR,
    "aria-hidden": c,
    ...E
  })
}