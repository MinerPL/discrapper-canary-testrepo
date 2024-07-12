s.d(t, {
  Z: function() {
return p;
  }
});
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(89057),
  o = s(724884),
  l = s(290799),
  c = s(362948),
  d = s(899667),
  _ = s(165630),
  E = s(771845),
  u = s(594174),
  T = s(314884),
  I = s(74538),
  S = s(296533),
  N = s(901750),
  C = s(112863),
  m = s(701157),
  A = s(912152),
  h = s(615603),
  g = s(474936),
  O = s(733024);

function p(e) {
  let {
premiumSubscription: t
  } = e, s = (0, i.e7)([T.Z], () => T.Z.boostSlots), p = a.useMemo(() => Object.values(s), [s]), R = (0, i.e7)([u.default], () => u.default.getCurrentUser()), x = I.ZP.isPremium(R, g.p9.TIER_2), M = (0, i.e7)([_.Z], () => _.Z.affinities), D = (0, i.e7)([E.ZP], () => E.ZP.getFlattenedGuildIds()), f = M.length > 0 || D.length > 0, P = p.length > 0, L = a.useMemo(() => p.some(e => null != e.premiumGuildSubscription), [p]), Z = (0, i.e7)([d.Z], () => d.Z.getCurrentUserAppliedBoosts()), b = (null == t ? void 0 : t.isPausedOrPausePending) === !0;
  return (0, n.jsxs)('div', {
children: [
  (0, n.jsx)(r.oQ, {
    className: O.blockedPaymentsWarning
  }),
  (0, n.jsx)(N.Z, {
    hasGuildBoostSlots: P,
    hasAppliedGuildBoosts: L,
    isUserPremiumTier2: x,
    subscriptionIsPausedOrPausePending: b
  }),
  (0, n.jsx)(A.Z, {
    hasAppliedGuildBoosts: L,
    isUserPremiumTier2: x,
    hasGuildAffinitiesOrInGuild: f,
    subscriptionIsPausedOrPausePending: b
  }),
  !f && (0, n.jsx)(C.Z, {}),
  (null == t ? void 0 : t.isPaused) ? (0, n.jsx)(S.r, {
    appliedGuildBoosts: Z,
    premiumSubscription: t
  }) : (0, n.jsx)(S.Z, {
    guildBoostSlots: s,
    premiumSubscription: t
  }),
  (0, n.jsx)(h.Z, {
    guildBoostSlots: p
  }),
  (0, n.jsx)(m.Z, {
    hasAppliedGuildBoosts: L,
    subscriptionIsPausedOrPausePending: b
  }),
  (0, n.jsx)(c.Z, {
    className: O.tierComparisonTable,
    hideHeading: !0,
    hideTier0: !0
  }),
  (0, n.jsx)(o.Z, {
    cardClassName: O.boosterRecognitionCard
  }),
  (0, n.jsx)(l.Z, {
    className: O.faq
  })
]
  });
}