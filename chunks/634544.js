"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  i = n("77078"),
  s = n("118503"),
  u = n("427459"),
  o = n("782340"),
  c = n("355635"),
  d = e => {
    let t, n, r, {
        guildFeature: d,
        guild: f,
        className: p,
        hideTooltip: h = !1,
        tooltipPosition: m = "left",
        onClick: E
      } = e,
      S = f.hasFeature(d),
      T = (0, u.minimumRequiredTierForGuildFeature)(d);
    return (S ? (null != T && (r = o.default.Messages.PREMIUM_GUILD_INCLUDED), t = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(s.default, {
        className: c.unlockedIcon
      }), (0, a.jsx)(i.Heading, {
        variant: "eyebrow",
        className: c.description,
        children: o.default.Messages.PREMIUM_GUILD_TIER_UNLOCKED
      })]
    })) : (null != T && (r = o.default.Messages.CLICK_TO_LEARN_MORE), t = (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(s.default, {
        className: c.icon
      }), (0, a.jsx)(i.Heading, {
        variant: "eyebrow",
        className: c.description,
        children: null != T && (0, u.getShortenedTierName)(T)
      })]
    })), n = h || null == r ? (0, a.jsx)("div", {
      className: l(c.availabilityIndicator, p),
      children: t
    }) : (0, a.jsx)(i.Tooltip, {
      position: m,
      text: r,
      children: e => (0, a.jsx)("div", {
        ...e,
        className: l(c.availabilityIndicator, p),
        children: t
      })
    }), null == E || S) ? n : (0, a.jsx)(i.Clickable, {
      onClick: E,
      className: c.clickable,
      children: n
    })
  }