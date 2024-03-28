"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("803997"),
  n = s.n(l),
  i = s("442837"),
  r = s("481060"),
  o = s("706454"),
  d = s("594174"),
  u = s("509545"),
  c = s("78839"),
  E = s("930153"),
  _ = s("74538"),
  I = s("937615"),
  T = s("474936"),
  S = s("689938"),
  f = s("257625");
t.default = e => {
  var t;
  let {
    className: s
  } = e, l = (0, i.useStateFromStores)([d.default], () => d.default.getCurrentUser()), m = (0, i.useStateFromStores)([o.default], () => o.default.locale), N = (0, i.useStateFromStores)([c.default], () => c.default.getPremiumTypeSubscription()), g = (0, i.useStateFromStores)([u.default], () => null != N ? u.default.get(N.planId) : void 0), h = null !== (t = (0, i.useStateFromStores)([u.default], () => null != g ? u.default.getForSkuAndInterval((0, _.castPremiumSubscriptionAsSkuId)(T.PremiumSubscriptionSKUs.GUILD), g.interval, g.intervalCount) : void 0)) && void 0 !== t ? t : T.SubscriptionPlanInfo[T.SubscriptionPlans.PREMIUM_MONTH_GUILD];
  return (0, a.jsxs)("div", {
    className: n()(f.wrapper, s),
    children: [(0, a.jsx)(r.Heading, {
      className: f.heading,
      variant: "heading-xl/semibold",
      children: S.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_HEADING_PRIMARY
    }), (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      children: function(e) {
        let {
          currentUser: t,
          locale: s,
          guildBoostingPlanId: l,
          interval: n,
          intervalCount: i
        } = e, r = _.default.getDefaultPrice(l, _.default.isPremium(t)), o = _.default.getDefaultPrice(l, !1), d = (0, I.formatRate)((0, I.formatPrice)(r.amount, r.currency), n, i), u = (0, I.formatRate)((0, I.formatPrice)(o.amount, o.currency), n, i);
        return _.default.isPremium(t, T.PremiumTypes.TIER_2) ? S.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING_TIER_2.format({
          price: d,
          originalPrice: u,
          originalPriceHook: (e, t) => (0, a.jsx)("span", {
            className: f.originalPrice,
            children: e
          }, t),
          freeSubscriptionCount: T.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
          discountPercent: (0, E.formatPercent)(s, T.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
        }) : _.default.isPremium(t, T.PremiumTypes.TIER_1) ? S.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING_TIER_1.format({
          price: d,
          originalPrice: u,
          originalPriceHook: (e, t) => (0, a.jsx)("span", {
            className: f.originalPrice,
            children: e
          }, t),
          discountPercent: (0, E.formatPercent)(s, T.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
        }) : S.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING.format({
          price: d
        })
      }({
        currentUser: l,
        locale: m,
        guildBoostingPlanId: h.id,
        interval: h.interval,
        intervalCount: h.intervalCount
      })
    })]
  })
}