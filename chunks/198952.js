"use strict";
n.r(t), n.d(t, {
  FamilyCenterAvatar: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("204197"),
  i = n("998502"),
  r = n("689938"),
  o = n("585078");
let u = i.default.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar,
  d = e => {
    let {
      user: t,
      avatarSize: n = s.AvatarSizes.SIZE_48
    } = e, {
      avatarSrc: i,
      avatarDecorationSrc: d,
      eventHandlers: c
    } = (0, l.default)({
      user: t,
      size: n
    });
    return (0, a.jsx)("div", {
      ...c,
      children: (0, a.jsx)(u, {
        className: o.__invalid_avatar,
        src: i,
        avatarDecoration: d,
        size: n,
        "aria-label": r.default.Messages.FAMILY_CENTER_AVATAR_ARIA.format({
          name: t.username
        })
      })
    })
  };
t.default = e => {
  let {
    currentUser: t,
    otherUser: n,
    children: s
  } = e;
  return (0, a.jsx)("div", {
    className: o.avatarPairContainer,
    children: (0, a.jsxs)("div", {
      className: o.avatarPair,
      children: [(0, a.jsx)(d, {
        user: t
      }), s, (0, a.jsx)(d, {
        user: n
      })]
    })
  })
}