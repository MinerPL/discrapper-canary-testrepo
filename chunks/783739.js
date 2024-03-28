"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("89057"),
  r = s("724884"),
  o = s("290799"),
  d = s("362948"),
  u = s("165630"),
  c = s("771845"),
  S = s("594174"),
  E = s("314884"),
  T = s("74538"),
  _ = s("296533"),
  f = s("901750"),
  m = s("112863"),
  g = s("701157"),
  h = s("912152"),
  N = s("615603"),
  I = s("474936"),
  p = s("233754");

function C(e) {
  let {
    premiumSubscription: t
  } = e, s = (0, l.useStateFromStores)([E.default], () => E.default.boostSlots), C = n.useMemo(() => Object.values(s), [s]), A = (0, l.useStateFromStores)([S.default], () => S.default.getCurrentUser()), O = T.default.isPremium(A, I.PremiumTypes.TIER_2), x = (0, l.useStateFromStores)([u.default], () => u.default.affinities), R = (0, l.useStateFromStores)([c.default], () => c.default.getFlattenedGuildIds()), M = x.length > 0 || R.length > 0, v = C.length > 0, D = n.useMemo(() => C.some(e => null != e.premiumGuildSubscription), [C]);
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.BlockedPaymentsWarning, {
      className: p.blockedPaymentsWarning
    }), (0, a.jsx)(f.default, {
      hasGuildBoostSlots: v,
      hasAppliedGuildBoosts: D,
      isUserPremiumTier2: O
    }), (0, a.jsx)(h.default, {
      hasAppliedGuildBoosts: D,
      isUserPremiumTier2: O,
      hasGuildAffinitiesOrInGuild: M
    }), !M && (0, a.jsx)(m.default, {}), (0, a.jsx)(_.default, {
      guildBoostSlots: s,
      premiumSubscription: t
    }), (0, a.jsx)(N.default, {
      guildBoostSlots: C
    }), (0, a.jsx)(g.default, {
      hasAppliedGuildBoosts: D
    }), (0, a.jsx)(d.default, {
      className: p.tierComparisonTable,
      hideHeading: !0,
      hideTier0: !0
    }), (0, a.jsx)(r.default, {
      cardClassName: p.boosterRecognitionCard
    }), (0, a.jsx)(o.default, {
      className: p.faq
    })]
  })
}