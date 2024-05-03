"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("607070"),
  r = n("43267"),
  o = n("933557"),
  u = n("266076"),
  d = n("204197"),
  c = n("967128");

function f(e) {
  var t;
  let {
    channel: n,
    children: f,
    user: h
  } = e, m = (0, l.useStateFromStores)([i.default], () => i.default.useReducedMotion), p = null !== (t = (0, o.default)(n)) && void 0 !== t ? t : "", {
    avatarDecorationSrc: E,
    eventHandlers: C,
    isAnimating: g
  } = (0, d.default)({
    user: h,
    size: s.AvatarSizes.SIZE_80,
    animateOnHover: !0
  });
  return (0, a.jsxs)(c.default, {
    channelId: n.id,
    ...C,
    children: [(() => {
      let e = !m && g;
      return n.isMultiUserDM() ? (0, a.jsx)(u.default, {
        channel: n,
        size: s.AvatarSizes.SIZE_80,
        experimentLocation: "empty_messages",
        animated: e,
        "aria-label": p
      }) : (0, a.jsx)(s.Avatar, {
        "aria-label": p,
        size: s.AvatarSizes.SIZE_80,
        src: (0, r.getChannelIconURL)(n, 80, e),
        avatarDecoration: E
      })
    })(), (0, a.jsx)(c.EmptyMessageHeader, {
      children: p
    }), (0, a.jsx)(c.EmptyMessageBody, {
      children: f
    })]
  })
}