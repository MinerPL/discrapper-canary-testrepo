"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("245187"),
  r = s("677591"),
  o = s("904519"),
  d = s("695561"),
  u = s("555826"),
  c = s("677099"),
  S = s("697218"),
  E = s("625634"),
  T = s("719923"),
  f = s("619383"),
  _ = s("358189"),
  m = s("313577"),
  g = s("236972"),
  h = s("995956"),
  N = s("664671"),
  I = s("646718"),
  p = s("949193");

function C(e) {
  let {
    premiumSubscription: t
  } = e, s = (0, l.useStateFromStores)([E.default], () => E.default.boostSlots), C = n.useMemo(() => Object.values(s), [s]), A = (0, l.useStateFromStores)([S.default], () => S.default.getCurrentUser()), O = T.default.isPremium(A, I.PremiumTypes.TIER_2), x = (0, l.useStateFromStores)([u.default], () => u.default.affinities), R = (0, l.useStateFromStores)([c.default], () => c.default.getFlattenedGuildIds()), M = x.length > 0 || R.length > 0, D = C.length > 0, v = n.useMemo(() => C.some(e => null != e.premiumGuildSubscription), [C]);
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(i.BlockedPaymentsWarning, {
      className: p.blockedPaymentsWarning
    }), (0, a.jsx)(_.default, {
      hasGuildBoostSlots: D,
      hasAppliedGuildBoosts: v,
      isUserPremiumTier2: O
    }), (0, a.jsx)(h.default, {
      hasAppliedGuildBoosts: v,
      isUserPremiumTier2: O,
      hasGuildAffinitiesOrInGuild: M
    }), !M && (0, a.jsx)(m.default, {}), (0, a.jsx)(f.default, {
      guildBoostSlots: s,
      premiumSubscription: t
    }), (0, a.jsx)(N.default, {
      guildBoostSlots: C
    }), (0, a.jsx)(g.default, {
      hasAppliedGuildBoosts: v
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