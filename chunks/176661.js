"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("106435"),
  i = n("50885"),
  r = n("25132"),
  o = n("884706"),
  u = n("615111");
let d = i.default.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;

function c(e) {
  let {
    otherUser: t,
    status: n
  } = e, i = (0, r.useLinkTimestampText)(t.id, n), {
    avatarSrc: c,
    avatarDecorationSrc: f,
    eventHandlers: E
  } = (0, l.default)({
    user: t,
    size: s.AvatarSizes.SIZE_40,
    animateOnHover: !0
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      ...E,
      children: (0, a.jsx)(d, {
        className: u.avatar,
        src: c,
        avatarDecoration: f,
        size: s.AvatarSizes.SIZE_40,
        "aria-label": t.username
      })
    }), (0, a.jsxs)("div", {
      className: u.userPreview,
      children: [(0, a.jsx)("div", {
        className: u.userContainerWithTimestamp,
        children: (0, a.jsx)(o.default, {
          user: t
        })
      }), (0, a.jsx)(s.Text, {
        className: u.timestamp,
        color: "text-muted",
        variant: "text-xs/normal",
        children: i
      })]
    })]
  })
}