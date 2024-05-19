"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var i = n("735250");
n("470079");
var r = n("399606"),
  a = n("481060"),
  s = n("275759"),
  o = n("706454"),
  l = n("271383"),
  u = n("430824"),
  d = n("346656"),
  _ = n("68972"),
  c = n("709054"),
  E = n("689938"),
  I = n("825568");

function T(e) {
  let {
    userId: t,
    guildId: n,
    textClassName: T,
    tooltipDelay: f
  } = e, S = (0, r.useStateFromStores)([o.default], () => o.default.locale), h = (0, r.useStateFromStores)([u.default], () => null != n ? u.default.getGuild(n) : null), A = (0, r.useStateFromStores)([l.default], () => null != n ? l.default.getMember(n, t) : null), m = (0, s.getCreatedAtDate)(c.default.extractTimestamp(t), S), N = (0, s.getCreatedAtDate)(null == A ? void 0 : A.joinedAt, S);
  return null == h || null == A ? (0, i.jsx)(a.Text, {
    variant: "text-sm/normal",
    className: T,
    children: m
  }) : (0, i.jsxs)("div", {
    className: I.memberSinceWrapper,
    children: [(0, i.jsxs)("div", {
      className: I.memberSince,
      children: [(0, i.jsx)(a.Tooltip, {
        text: E.default.Messages.DISCORD_NAME,
        delay: f,
        children: e => (0, i.jsx)(_.default, {
          ...e,
          className: I.discordIcon
        })
      }), (0, i.jsx)(a.Text, {
        variant: "text-sm/normal",
        className: T,
        children: m
      })]
    }), (0, i.jsx)("div", {
      className: I.divider
    }), (0, i.jsxs)("div", {
      className: I.memberSince,
      children: [(0, i.jsx)(a.Tooltip, {
        text: h.name,
        delay: f,
        children: e => (0, i.jsx)(d.default, {
          ...e,
          guild: h,
          size: d.default.Sizes.SMOL
        })
      }), (0, i.jsx)(a.Text, {
        variant: "text-sm/normal",
        className: T,
        children: N
      })]
    })]
  })
}