"use strict";
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(442837),
  r = t(481060),
  o = t(706454),
  c = t(594174),
  d = t(509545),
  u = t(78839),
  E = t(930153),
  _ = t(74538),
  I = t(937615),
  T = t(474936),
  N = t(689938),
  m = t(157811);
s.Z = e => {
  var s;
  let {
    className: t
  } = e, i = (0, a.e7)([c.default], () => c.default.getCurrentUser()), S = (0, a.e7)([o.default], () => o.default.locale), h = (0, a.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()), g = (0, a.e7)([d.Z], () => null != h ? d.Z.get(h.planId) : void 0), x = null !== (s = (0, a.e7)([d.Z], () => null != g ? d.Z.getForSkuAndInterval((0, _.Wz)(T.Si.GUILD), g.interval, g.intervalCount) : void 0)) && void 0 !== s ? s : T.GP[T.Xh.PREMIUM_MONTH_GUILD];
  return (0, n.jsxs)("div", {
    className: l()(m.wrapper, t),
    children: [(0, n.jsx)(r.Heading, {
      className: m.heading,
      variant: "heading-xl/semibold",
      children: N.Z.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_HEADING_PRIMARY
    }), (0, n.jsx)(r.Text, {
      variant: "text-md/normal",
      children: function(e) {
        let {
          currentUser: s,
          locale: t,
          guildBoostingPlanId: i,
          interval: l,
          intervalCount: a
        } = e, r = _.ZP.getDefaultPrice(i, _.ZP.isPremium(s)), o = _.ZP.getDefaultPrice(i, !1), c = (0, I.og)((0, I.T4)(r.amount, r.currency), l, a), d = (0, I.og)((0, I.T4)(o.amount, o.currency), l, a);
        return _.ZP.isPremium(s, T.p9.TIER_2) ? N.Z.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING_TIER_2.format({
          price: c,
          originalPrice: d,
          originalPriceHook: (e, s) => (0, n.jsx)("span", {
            className: m.originalPrice,
            children: e
          }, s),
          freeSubscriptionCount: T.cb,
          discountPercent: (0, E.T3)(t, T.Rr / 100)
        }) : _.ZP.isPremium(s, T.p9.TIER_1) ? N.Z.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING_TIER_1.format({
          price: c,
          originalPrice: d,
          originalPriceHook: (e, s) => (0, n.jsx)("span", {
            className: m.originalPrice,
            children: e
          }, s),
          discountPercent: (0, E.T3)(t, T.Rr / 100)
        }) : N.Z.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING.format({
          price: c
        })
      }({
        currentUser: i,
        locale: S,
        guildBoostingPlanId: x.id,
        interval: x.interval,
        intervalCount: x.intervalCount
      })
    })]
  })
}