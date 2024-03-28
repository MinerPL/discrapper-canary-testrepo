"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("607070"),
  r = n("43267"),
  o = n("933557"),
  u = n("204197"),
  d = n("967128");

function c(e) {
  var t;
  let {
    channel: n,
    children: c,
    user: f
  } = e, h = (0, l.useStateFromStores)([i.default], () => i.default.useReducedMotion), m = null !== (t = (0, o.default)(n)) && void 0 !== t ? t : "", {
    avatarDecorationSrc: p,
    eventHandlers: E,
    isAnimating: C
  } = (0, u.default)({
    user: f,
    size: s.AvatarSizes.SIZE_80,
    animateOnHover: !0
  });
  return (0, a.jsxs)(d.default, {
    channelId: n.id,
    ...E,
    children: [(0, a.jsx)(s.Avatar, {
      "aria-label": m,
      size: s.AvatarSizes.SIZE_80,
      src: (0, r.getChannelIconURL)(n, 80, !h && C),
      avatarDecoration: p
    }), (0, a.jsx)(d.EmptyMessageHeader, {
      children: m
    }), (0, a.jsx)(d.EmptyMessageBody, {
      children: c
    })]
  })
}