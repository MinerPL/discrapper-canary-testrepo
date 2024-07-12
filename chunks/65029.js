var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(481060),
  s = n(28531),
  l = n(819758),
  u = n(149203),
  c = n(689938),
  d = n(549220);
let _ = e => {
  let {
emojiSubCategory: t
  } = e;
  return (0, r.jsxs)('div', {
className: a()(d.badgeLabel, t === u.t0.TOP_GUILD_EMOJI ? d.topGuildEmojiBadge : d.newlyAddedBadge),
children: [
  t === u.t0.TOP_GUILD_EMOJI ? (0, r.jsx)(s.Z, {
    foreground: d.newlyAddedBadgeIcon
  }) : (0, r.jsx)(l.Z, {
    foreground: d.newlyAddedBadgeIcon
  }),
  (0, r.jsx)(o.Text, {
    variant: 'text-sm/semibold',
    color: 'always-white',
    children: t === u.t0.TOP_GUILD_EMOJI ? c.Z.Messages.TOP_GUILD_EMOJI_BADGE : c.Z.Messages.NEWLY_ADDED_GUILD_EMOJI_BADGE
  })
]
  });
};
t.Z = e => {
  let {
className: t,
graphicPrimary: n,
graphicSecondary: i,
titlePrimary: s,
titleSecondary: l,
isFavorite: E = !1,
emojiSubCategory: f = u.t0.NONE
  } = e;
  return (0, r.jsxs)('div', {
className: a()(d.inspector, t),
children: [
  (0, r.jsx)('div', {
    className: d.graphicPrimary,
    'aria-hidden': !0,
    children: n
  }),
  (0, r.jsxs)('div', {
    className: d.textWrapper,
    children: [
      (0, r.jsxs)(o.Text, {
        className: d.titlePrimary,
        variant: 'text-md/semibold',
        children: [
          E ? (0, r.jsx)(o.StarIcon, {
            size: 'custom',
            color: 'currentColor',
            'aria-label': E ? c.Z.Messages.EMOJI_IS_FAVORITE_ARIA_LABEL.format({
              names: s
            }) : void 0,
            width: 15,
            height: 15,
            className: d.favorite
          }) : null,
          s
        ]
      }),
      null != l && (0, r.jsx)(o.Text, {
        className: d.titleSecondary,
        variant: 'text-xs/normal',
        children: l
      })
    ]
  }),
  f === u.t0.NONE ? null != i && (0, r.jsx)('div', {
    className: d.graphicSecondary,
    'aria-hidden': !0,
    children: i
  }) : (0, r.jsx)(_, {
    emojiSubCategory: f
  })
]
  });
};