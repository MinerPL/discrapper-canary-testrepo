"use strict";
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(481060),
  r = t(709586),
  o = t(267642),
  c = t(689938),
  d = t(887052);
s.Z = e => {
  let s, t, i, {
      guildFeature: u,
      guild: E,
      className: _,
      hideTooltip: I = !1,
      tooltipPosition: T = "left",
      onClick: N
    } = e,
    m = E.hasFeature(u),
    S = (0, o._p)(u);
  return (m ? (null != S && (i = c.Z.Messages.PREMIUM_GUILD_INCLUDED), s = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(r.Z, {
      className: d.unlockedIcon
    }), (0, n.jsx)(a.Heading, {
      variant: "eyebrow",
      className: d.description,
      children: c.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED
    })]
  })) : (null != S && (i = c.Z.Messages.CLICK_TO_LEARN_MORE), s = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(r.Z, {
      className: d.icon
    }), (0, n.jsx)(a.Heading, {
      variant: "eyebrow",
      className: d.description,
      children: null != S && (0, o.e9)(S)
    })]
  })), t = I || null == i ? (0, n.jsx)("div", {
    className: l()(d.availabilityIndicator, _),
    children: s
  }) : (0, n.jsx)(a.Tooltip, {
    position: T,
    text: i,
    children: e => (0, n.jsx)("div", {
      ...e,
      className: l()(d.availabilityIndicator, _),
      children: s
    })
  }), null == N || m) ? t : (0, n.jsx)(a.Clickable, {
    onClick: N,
    className: d.clickable,
    children: t
  })
}