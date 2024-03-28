"use strict";
l.r(t);
var a = l("735250");
l("470079");
var i = l("803997"),
  s = l.n(i),
  n = l("481060"),
  o = l("709586"),
  r = l("267642"),
  c = l("689938"),
  d = l("743292");
t.default = e => {
  let t, l, i, {
      guildFeature: u,
      guild: f,
      className: p,
      hideTooltip: x = !1,
      tooltipPosition: h = "left",
      onClick: m
    } = e,
    g = f.hasFeature(u),
    C = (0, r.minimumRequiredTierForGuildFeature)(u);
  return (g ? (null != C && (i = c.default.Messages.PREMIUM_GUILD_INCLUDED), t = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.default, {
      className: d.unlockedIcon
    }), (0, a.jsx)(n.Heading, {
      variant: "eyebrow",
      className: d.description,
      children: c.default.Messages.PREMIUM_GUILD_TIER_UNLOCKED
    })]
  })) : (null != C && (i = c.default.Messages.CLICK_TO_LEARN_MORE), t = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.default, {
      className: d.icon
    }), (0, a.jsx)(n.Heading, {
      variant: "eyebrow",
      className: d.description,
      children: null != C && (0, r.getShortenedTierName)(C)
    })]
  })), l = x || null == i ? (0, a.jsx)("div", {
    className: s()(d.availabilityIndicator, p),
    children: t
  }) : (0, a.jsx)(n.Tooltip, {
    position: h,
    text: i,
    children: e => (0, a.jsx)("div", {
      ...e,
      className: s()(d.availabilityIndicator, p),
      children: t
    })
  }), null == m || g) ? l : (0, a.jsx)(n.Clickable, {
    onClick: m,
    className: d.clickable,
    children: l
  })
}