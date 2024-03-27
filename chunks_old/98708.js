"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  l = n("77078"),
  i = n("145079"),
  r = n("206230"),
  o = n("606292"),
  u = n("688318"),
  d = n("843962"),
  c = n("27618"),
  f = n("158998"),
  E = n("50885"),
  h = n("91830"),
  _ = n("214621"),
  C = n("782340"),
  S = n("159036");
let I = E.default.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;

function m(e) {
  var t;
  let {
    channel: n,
    otherUser: E,
    active: m
  } = e, p = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), T = (0, s.useStateFromStores)([c.default], () => null == E ? null : c.default.getNickname(E.id)), g = (0, h.useMessageRequestRelativeTimestampText)(n), {
    avatarDecorationSrc: A
  } = (0, u.default)({
    user: E,
    size: (0, o.getDecorationSizeForAvatarSize)(l.AvatarSizes.SIZE_40),
    animateOnHover: !0
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(I, {
      className: S.avatar,
      src: (0, d.getChannelIconURL)(n, 40, !p && m),
      avatarDecoration: A,
      size: l.AvatarSizes.SIZE_40,
      "aria-label": null !== (t = null == E ? void 0 : E.username) && void 0 !== t ? t : C.default.Messages.UNKNOWN_USER
    }), (0, a.jsxs)("div", {
      className: S.userPreview,
      children: [(0, a.jsxs)("div", {
        className: S.userContainerWithPreview,
        children: [(0, a.jsx)(i.default, {
          nick: T,
          user: E,
          showAccountIdentifier: !0,
          className: S.tagContainer,
          usernameClass: S.username,
          discriminatorClass: null != f.default.getGlobalName(E) ? S.globalName : S.discriminator
        }), (0, a.jsx)(l.Text, {
          className: S.timestampWithPreview,
          color: "text-muted",
          variant: "text-xs/normal",
          children: g
        })]
      }), (0, a.jsx)("div", {
        className: S.messagePreview,
        children: (0, a.jsx)(_.default, {
          channel: n
        })
      })]
    })]
  })
}