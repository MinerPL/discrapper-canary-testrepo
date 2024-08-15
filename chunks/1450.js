var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(481060),
  u = n(2052),
  c = n(367907),
  d = n(906732),
  _ = n(28546),
  E = n(26323),
  f = n(434404),
  h = n(889161),
  p = n(430824),
  m = n(267642),
  I = n(981631),
  T = n(30513),
  g = n(689938),
  S = n(685440);
t.Z = e => {
  let {
className: t,
guildId: n,
channel: a,
shouldTrackUpsellViewed: A,
setTrackedUpsellViewed: N
  } = e, {
location: v
  } = (0, u.O)(), {
analyticsLocations: O
  } = (0, d.ZP)(), R = (0, o.e7)([p.Z], () => p.Z.getGuild(n)), {
canManageAllExpressions: C
  } = (0, h.XJ)(R), y = null != R && 0 === (0, m.A3)(R.premiumTier) && !R.hasFeature(I.oNc.MORE_STICKERS);
  return (i.useEffect(() => {
C && y && A && ((0, c.yw)(I.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
  location: v,
  guild_id: null == R ? void 0 : R.id,
  channel_id: null == a ? void 0 : a.id,
  type: 'Expression Picker Inline Sticker Upsell',
  location_stack: O
}), N(!0));
  }, [
y,
R,
a,
v,
A,
N,
O,
C
  ]), null != R && C) ? y ? (0, r.jsxs)('div', {
className: s()(S.upsell, t),
children: [
  (0, r.jsx)(l.BoostTier2SimpleIcon, {
    size: 'md',
    color: 'currentColor',
    className: S.icon
  }),
  (0, r.jsx)(l.Text, {
    color: 'interactive-normal',
    className: S.body,
    variant: 'text-sm/normal',
    children: g.Z.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_DESCRIPTION.format({
      count: (0, m.A3)(I.Eu4.TIER_1)
    })
  }),
  (0, r.jsx)(l.Button, {
    look: l.Button.Looks.LINK,
    color: l.Button.Colors.LINK,
    onClick: () => {
      (0, E.Z)({
        analyticsLocations: O,
        analyticsSourceLocation: v,
        guild: R,
        perks: (0, T.hC)()
      });
    },
    children: g.Z.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_CTA
  })
]
  }) : (0, r.jsxs)('div', {
className: s()(S.upsell, t),
children: [
  (0, r.jsx)(l.StickerIcon, {
    size: 'custom',
    color: 'currentColor',
    className: S.icon,
    width: 20,
    height: 20
  }),
  (0, r.jsx)(l.Text, {
    color: 'interactive-normal',
    className: S.body,
    variant: 'text-sm/normal',
    children: g.Z.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_DESCRIPTION
  }),
  (0, r.jsx)(l.Button, {
    look: l.Button.Looks.LINK,
    color: l.Button.Colors.LINK,
    onClick: () => {
      (0, _._Q)(), f.Z.open(n, I.pNK.STICKERS, v);
    },
    children: g.Z.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_CTA
  })
]
  }) : null;
};