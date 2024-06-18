"use strict";
n.d(t, {
  Z: function() {
    return T
  }
});
var i = n(735250);
n(470079);
var r = n(399606),
  s = n(481060),
  o = n(275759),
  a = n(706454),
  l = n(271383),
  u = n(430824),
  _ = n(346656),
  d = n(68972),
  c = n(709054),
  E = n(689938),
  I = n(60963);

function T(e) {
  let {
    userId: t,
    guildId: n,
    textClassName: T,
    tooltipDelay: h
  } = e, S = (0, r.e7)([a.default], () => a.default.locale), f = (0, r.e7)([u.Z], () => null != n ? u.Z.getGuild(n) : null), N = (0, r.e7)([l.ZP], () => null != n ? l.ZP.getMember(n, t) : null), A = (0, o.FI)(c.default.extractTimestamp(t), S), m = (0, o.FI)(null == N ? void 0 : N.joinedAt, S);
  return null == f || null == N ? (0, i.jsx)(s.Text, {
    variant: "text-sm/normal",
    className: T,
    children: A
  }) : (0, i.jsxs)("div", {
    className: I.memberSinceWrapper,
    children: [(0, i.jsxs)("div", {
      className: I.memberSince,
      children: [(0, i.jsx)(s.Tooltip, {
        text: E.Z.Messages.DISCORD_NAME,
        delay: h,
        children: e => (0, i.jsx)(d.Z, {
          ...e,
          className: I.discordIcon
        })
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        className: T,
        children: A
      })]
    }), (0, i.jsx)("div", {
      className: I.divider
    }), (0, i.jsxs)("div", {
      className: I.memberSince,
      children: [(0, i.jsx)(s.Tooltip, {
        text: f.name,
        delay: h,
        children: e => (0, i.jsx)(_.Z, {
          ...e,
          guild: f,
          size: _.Z.Sizes.SMOL
        })
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        className: T,
        children: m
      })]
    })]
  })
}