n.d(t, {
  Z: function() {
return N;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(481060),
  u = n(100527),
  c = n(906732),
  d = n(436774),
  _ = n(104494),
  E = n(639119),
  f = n(165583),
  h = n(592125),
  p = n(944486),
  m = n(626135),
  I = n(981631),
  T = n(474936),
  g = n(689938),
  S = n(540451);

function A() {
  (0, l.openModalLazy)(async () => {
let {
  default: e
} = await n.e('3289').then(n.bind(n, 682609));
return t => (0, r.jsx)(e, {
  channel: null,
  ...t
});
  });
}

function N(e) {
  var t;
  let {
className: n,
iconOnly: a,
remaining: N
  } = e, v = (0, o.e7)([
p.Z,
h.Z
  ], () => {
let e = h.Z.getChannel(p.Z.getChannelId());
return (null == e ? void 0 : e.isPrivate()) ? I.ZY5.DM_CHANNEL : I.ZY5.GUILD_CHANNEL;
  }), {
analyticsLocations: O
  } = (0, c.ZP)(u.Z.PREMIUM_UPSELL), R = (0, _.Ng)(), C = (0, E.N)(), y = (0, _.Wp)(R, T.Si.TIER_2), D = (null == C ? void 0 : null === (t = C.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === T.Si.TIER_2;
  return (i.useEffect(() => {
m.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
  type: 'longer messages inline',
  location: {
    location_page: v,
    location_section: I.jXE.CHANNEL_TEXT_AREA
  },
  location_stack: O
});
  }, [
v,
O
  ]), (D || y) && N < 0) ? (0, r.jsx)(f.ZP, {
type: T.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL,
subscriptionTier: T.Si.TIER_2,
context: N,
discountOffer: R,
trialOffer: C,
children: g.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
  onLearnMore: A
})
  }) : a ? (0, r.jsx)(l.Clickable, {
className: S.iconOnly,
onClick: () => A(),
children: (0, r.jsx)(l.Tooltip, {
  text: g.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP_WITHOUT_LINK,
  position: 'top',
  children: e => (0, r.jsx)(l.NitroWheelIcon, {
    size: 'md',
    color: 'currentColor',
    className: S.premium,
    ...e
  })
})
  }) : (0, r.jsxs)('div', {
className: s()(S.root, n),
children: [
  (0, r.jsx)(l.NitroWheelIcon, {
    size: 'md',
    className: S.premium,
    color: d.JX.PREMIUM_TIER_2
  }),
  (0, r.jsx)(l.Text, {
    className: S.text,
    variant: 'text-sm/normal',
    children: g.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
      onLearnMore: A
    })
  })
]
  });
}