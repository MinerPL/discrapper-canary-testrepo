"use strict";
n.r(t), n.d(t, {
  FamilyCenterAvatar: function() {
    return d
  },
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("106435"),
  i = n("50885"),
  r = n("782340"),
  o = n("468540");
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
        className: o.avatar,
        src: i,
        avatarDecoration: d,
        size: n,
        "aria-label": r.default.Messages.FAMILY_CENTER_AVATAR_ARIA.format({
          name: t.username
        })
      })
    })
  };
var c = e => {
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