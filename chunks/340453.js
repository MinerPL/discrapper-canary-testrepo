"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("204197"),
  i = n("998502"),
  r = n("631885"),
  o = n("329242"),
  u = n("995302");
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
        className: u.__invalid_timestamp,
        color: "text-muted",
        variant: "text-xs/normal",
        children: i
      })]
    })]
  })
}