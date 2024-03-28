"use strict";
s.r(t), s("47120");
var a = s("735250");
s("470079");
var n = s("803997"),
  l = s.n(n),
  i = s("392711"),
  r = s.n(i),
  o = s("442837"),
  d = s("481060"),
  u = s("594174"),
  c = s("509545"),
  S = s("78839"),
  E = s("466111"),
  T = s("74538"),
  _ = s("393411"),
  f = s("474936"),
  m = s("689938"),
  g = s("357914");

function h(e) {
  let {
    user: t,
    planId: s,
    count: n,
    userPremiumSubscription: i
  } = e, [r, u] = (0, o.useStateFromStoresArray)([c.default], () => [c.default.get(s), null != i ? c.default.get(i.planId) : null]);
  if (null == r || T.default.getInterval(s).intervalType !== f.SubscriptionIntervalTypes.MONTH) return null;
  let S = null != u ? u.skuId : null,
    _ = r.skuId === S,
    h = T.default.getDisplayName(s);
  return (0, a.jsxs)("div", {
    className: g.accountCreditRow,
    children: [(0, a.jsx)("div", {
      className: l()({
        [g.iconBackgroundTier0]: r.skuId === f.PremiumSubscriptionSKUs.TIER_0,
        [g.iconBackgroundTier1]: r.skuId === f.PremiumSubscriptionSKUs.TIER_1,
        [g.iconBackgroundTier2]: r.skuId === f.PremiumSubscriptionSKUs.TIER_2
      }),
      children: (0, a.jsx)(E.default, {
        className: g.icon
      })
    }), (0, a.jsxs)("div", {
      className: g.rowDetails,
      children: [(0, a.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        children: m.default.Messages.PREMIUM_SUBSCRIPTION_CREDIT.format({
          planName: h
        })
      }), t.hasFreePremium() ? null : (0, a.jsx)(d.Heading, {
        className: g.rowApplied,
        variant: "heading-sm/semibold",
        color: "header-secondary",
        children: _ && null != i ? m.default.Messages.PREMIUM_SUBSCRIPTION_CREDIT_APPLIED_ON.format({
          date: i.currentPeriodEnd
        }) : m.default.Messages.PREMIUM_SUBSCRIPTION_CREDIT_APPLIED_MISMATCHED_PLAN.format({
          planName: h
        })
      })]
    }), (0, a.jsx)(d.Text, {
      className: g.rowCreditCount,
      variant: "text-md/semibold",
      children: m.default.Messages.PREMIUM_SUBSCRIPTION_CREDIT_COUNT_MONTHS.format({
        count: n
      })
    })]
  })
}
t.default = function(e) {
  let {
    className: t,
    entitlements: s
  } = e, n = r()(Array.from(s)).filter(e => {
    let {
      subscriptionPlanId: t,
      parentId: s,
      consumed: a
    } = e;
    return null != t && null != s && !a
  }).groupBy(e => e.subscriptionPlanId).value(), i = (0, o.useStateFromStores)([S.default], () => S.default.getPremiumSubscription()), c = (0, o.useStateFromStores)([S.default], () => null == S.default.getPremiumTypeSubscription()), E = Object.keys(n).some(e => e === f.SubscriptionPlans.PREMIUM_MONTH_TIER_1), T = (0, o.useStateFromStores)([u.default], () => u.default.getCurrentUser());
  return null == T ? null : (0, a.jsxs)("div", {
    children: [(0, a.jsx)("div", {
      className: l()(t, g.premiumSubscriptionAccountCredit),
      children: Object.keys(n).map(e => (0, a.jsx)(h, {
        planId: e,
        count: n[e].length,
        userPremiumSubscription: i,
        user: T
      }, e))
    }), E && c && (0, a.jsxs)("div", {
      children: [(0, a.jsx)(d.Text, {
        className: g.tier1AccountCreditHeader,
        variant: "text-md/normal",
        children: m.default.Messages.PREMIUM_TIER_1_ACCOUNT_CREDIT_HEADER
      }), (0, a.jsx)(_.Tier1AccountCreditBanner, {})]
    })]
  })
}