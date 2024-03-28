"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("481060"),
  i = n("129861"),
  r = n("607070"),
  o = n("1585"),
  u = n("125988"),
  d = n("43267"),
  c = n("699516"),
  f = n("51144"),
  E = n("998502"),
  h = n("620924"),
  _ = n("81471"),
  C = n("689938"),
  m = n("548847");
let S = E.default.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;

function I(e) {
  var t;
  let {
    channel: n,
    otherUser: E,
    active: I
  } = e, p = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), T = (0, s.useStateFromStores)([c.default], () => null == E ? null : c.default.getNickname(E.id)), g = (0, h.useMessageRequestRelativeTimestampText)(n), {
    avatarDecorationSrc: A
  } = (0, u.default)({
    user: E,
    size: (0, o.getDecorationSizeForAvatarSize)(l.AvatarSizes.SIZE_40),
    animateOnHover: !0
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(S, {
      className: m.avatar,
      src: (0, d.getChannelIconURL)(n, 40, !p && I),
      avatarDecoration: A,
      size: l.AvatarSizes.SIZE_40,
      "aria-label": null !== (t = null == E ? void 0 : E.username) && void 0 !== t ? t : C.default.Messages.UNKNOWN_USER
    }), (0, a.jsxs)("div", {
      className: m.userPreview,
      children: [(0, a.jsxs)("div", {
        className: m.userContainerWithPreview,
        children: [(0, a.jsx)(i.default, {
          nick: T,
          user: E,
          showAccountIdentifier: !0,
          className: m.tagContainer,
          usernameClass: m.username,
          discriminatorClass: null != f.default.getGlobalName(E) ? m.globalName : m.discriminator
        }), (0, a.jsx)(l.Text, {
          className: m.timestampWithPreview,
          color: "text-muted",
          variant: "text-xs/normal",
          children: g
        })]
      }), (0, a.jsx)("div", {
        className: m.messagePreview,
        children: (0, a.jsx)(_.default, {
          channel: n
        })
      })]
    })]
  })
}