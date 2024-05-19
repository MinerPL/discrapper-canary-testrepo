"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
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
  c = n("522289"),
  f = n("699516"),
  E = n("819570"),
  h = n("51144"),
  _ = n("998502"),
  C = n("620924"),
  m = n("332712"),
  S = n("81471"),
  p = n("689938"),
  g = n("326486");
let I = e => {
    let {
      userId: t
    } = e, n = (0, m.useMutualGuilds)(t);
    return null == n || 0 === n.length ? null : (0, a.jsxs)("div", {
      className: g.mutualGuildsContainer,
      children: [(0, a.jsx)(c.default, {
        guilds: n,
        maxGuilds: 3,
        size: E.GuildIcon.Sizes.SMOL,
        hideOverflowCount: !0
      }), (0, a.jsx)(l.Text, {
        className: g.mutualGuilds,
        variant: "text-sm/normal",
        children: p.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
          count: n.length
        })
      })]
    })
  },
  T = _.default.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;

function A(e) {
  var t;
  let {
    channel: n,
    otherUser: c,
    active: E
  } = e, _ = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), m = (0, s.useStateFromStores)([f.default], () => null == c ? null : f.default.getNickname(c.id)), A = (0, C.useMessageRequestRelativeTimestampText)(n), {
    avatarDecorationSrc: N
  } = (0, u.default)({
    user: c,
    size: (0, o.getDecorationSizeForAvatarSize)(l.AvatarSizes.SIZE_40),
    animateOnHover: !0
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(T, {
      className: g.avatar,
      src: (0, d.getChannelIconURL)(n, 40, !_ && E),
      avatarDecoration: N,
      size: l.AvatarSizes.SIZE_40,
      "aria-label": null !== (t = null == c ? void 0 : c.username) && void 0 !== t ? t : p.default.Messages.UNKNOWN_USER
    }), (0, a.jsxs)("div", {
      className: g.userPreview,
      children: [(0, a.jsxs)("div", {
        className: g.userContainerWithPreview,
        children: [(0, a.jsx)(i.default, {
          nick: m,
          user: c,
          showAccountIdentifier: !0,
          className: g.tagContainer,
          usernameClass: g.username,
          discriminatorClass: null != h.default.getGlobalName(c) ? g.globalName : g.discriminator
        }), (0, a.jsx)(l.Text, {
          className: g.timestampWithPreview,
          color: "text-muted",
          variant: "text-xs/normal",
          children: A
        })]
      }), (0, a.jsx)("div", {
        className: g.mutualGuilds,
        children: (0, a.jsx)(I, {
          userId: c.id
        })
      }), (0, a.jsx)("div", {
        className: g.messagePreview,
        children: (0, a.jsx)(S.default, {
          channel: n
        })
      })]
    })]
  })
}