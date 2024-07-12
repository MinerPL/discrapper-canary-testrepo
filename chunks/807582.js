var o = n(735250);
n(470079);
var a = n(120356),
  t = n.n(a),
  l = n(481060),
  s = n(709586),
  c = n(267642),
  r = n(689938),
  d = n(425201);
i.Z = e => {
  let i, n, a, {
  guildFeature: f,
  guild: u,
  className: p,
  hideTooltip: x = !1,
  tooltipPosition: g = 'left',
  onClick: m
} = e,
_ = u.hasFeature(f),
C = (0, c._p)(f);
  return (_ ? (null != C && (a = r.Z.Messages.PREMIUM_GUILD_INCLUDED), i = (0, o.jsxs)(o.Fragment, {
children: [
  (0, o.jsx)(s.Z, {
    className: d.unlockedIcon
  }),
  (0, o.jsx)(l.Heading, {
    variant: 'eyebrow',
    className: d.description,
    children: r.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED
  })
]
  })) : (null != C && (a = r.Z.Messages.CLICK_TO_LEARN_MORE), i = (0, o.jsxs)(o.Fragment, {
children: [
  (0, o.jsx)(s.Z, {
    className: d.icon
  }),
  (0, o.jsx)(l.Heading, {
    variant: 'eyebrow',
    className: d.description,
    children: null != C && (0, c.e9)(C)
  })
]
  })), n = x || null == a ? (0, o.jsx)('div', {
className: t()(d.availabilityIndicator, p),
children: i
  }) : (0, o.jsx)(l.Tooltip, {
position: g,
text: a,
children: e => (0, o.jsx)('div', {
  ...e,
  className: t()(d.availabilityIndicator, p),
  children: i
})
  }), null == m || _) ? n : (0, o.jsx)(l.Clickable, {
onClick: m,
className: d.clickable,
children: n
  });
};