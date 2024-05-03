"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("89057"),
  r = s("724884"),
  o = s("290799"),
  d = s("362948"),
  u = s("899667"),
  c = s("165630"),
  S = s("771845"),
  E = s("594174"),
  T = s("314884"),
  f = s("74538"),
  m = s("296533"),
  _ = s("901750"),
  g = s("112863"),
  h = s("701157"),
  I = s("912152"),
  N = s("615603"),
  p = s("474936"),
  C = s("516667");

function A(e) {
  let {
    premiumSubscription: t
  } = e, s = (0, l.useStateFromStores)([T.default], () => T.default.boostSlots), A = n.useMemo(() => Object.values(s), [s]), O = (0, l.useStateFromStores)([E.default], () => E.default.getCurrentUser()), x = f.default.isPremium(O, p.PremiumTypes.TIER_2), R = (0, l.useStateFromStores)([c.default], () => c.default.affinities), M = (0, l.useStateFromStores)([S.default], () => S.default.getFlattenedGuildIds()), v = R.length > 0 || M.length > 0, D = A.length > 0, L = n.useMemo(() => A.some(e => null != e.premiumGuildSubscription), [A]), P = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUserAppliedBoosts()), j = (null == t ? void 0 : t.isPausedOrPausePending) === !0;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.BlockedPaymentsWarning, {
      className: C.blockedPaymentsWarning
    }), (0, a.jsx)(_.default, {
      hasGuildBoostSlots: D,
      hasAppliedGuildBoosts: L,
      isUserPremiumTier2: x,
      subscriptionIsPausedOrPausePending: j
    }), (0, a.jsx)(I.default, {
      hasAppliedGuildBoosts: L,
      isUserPremiumTier2: x,
      hasGuildAffinitiesOrInGuild: v,
      subscriptionIsPausedOrPausePending: j
    }), !v && (0, a.jsx)(g.default, {}), (null == t ? void 0 : t.isPaused) ? (0, a.jsx)(m.GuildBoostingSettingsPausedAppliedBoosts, {
      appliedGuildBoosts: P,
      premiumSubscription: t
    }) : (0, a.jsx)(m.default, {
      guildBoostSlots: s,
      premiumSubscription: t
    }), (0, a.jsx)(N.default, {
      guildBoostSlots: A
    }), (0, a.jsx)(h.default, {
      hasAppliedGuildBoosts: L,
      subscriptionIsPausedOrPausePending: j
    }), (0, a.jsx)(d.default, {
      className: C.tierComparisonTable,
      hideHeading: !0,
      hideTier0: !0
    }), (0, a.jsx)(r.default, {
      cardClassName: C.boosterRecognitionCard
    }), (0, a.jsx)(o.default, {
      className: C.faq
    })]
  })
}