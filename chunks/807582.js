var a = n(735250);
n(470079);
var t = n(120356),
  o = n.n(t),
  s = n(481060),
  l = n(709586),
  c = n(267642),
  r = n(689938),
  d = n(425201);
i.Z = e => {
  let i, n, t, {
  guildFeature: f,
  guild: u,
  className: p,
  hideTooltip: x = !1,
  tooltipPosition: g = 'left',
  onClick: m
} = e,
_ = u.hasFeature(f),
C = (0, c._p)(f);
  return (_ ? (null != C && (t = r.Z.Messages.PREMIUM_GUILD_INCLUDED), i = (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsx)(l.Z, {
    className: d.unlockedIcon
  }),
  (0, a.jsx)(s.Heading, {
    variant: 'eyebrow',
    className: d.description,
    children: r.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED
  })
]
  })) : (null != C && (t = r.Z.Messages.CLICK_TO_LEARN_MORE), i = (0, a.jsxs)(a.Fragment, {
children: [
  (0, a.jsx)(l.Z, {
    className: d.icon
  }),
  (0, a.jsx)(s.Heading, {
    variant: 'eyebrow',
    className: d.description,
    children: null != C && (0, c.e9)(C)
  })
]
  })), n = x || null == t ? (0, a.jsx)('div', {
className: o()(d.availabilityIndicator, p),
children: i
  }) : (0, a.jsx)(s.Tooltip, {
position: g,
text: t,
children: e => (0, a.jsx)('div', {
  ...e,
  className: o()(d.availabilityIndicator, p),
  children: i
})
  }), null == m || _) ? n : (0, a.jsx)(s.Clickable, {
onClick: m,
className: d.clickable,
children: n
  });
};