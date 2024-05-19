"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("481060"),
  l = s("230711"),
  o = s("759231"),
  u = s("63063"),
  d = s("74538"),
  c = s("140465"),
  _ = s("474936"),
  E = s("981631"),
  T = s("689938"),
  I = s("624855");
t.default = e => {
  let t, s, {
      premiumSubscription: r,
      className: R,
      isFullscreen: f = !1,
      textColor: S
    } = e,
    m = (0, c.useIsInPremiumOfferExperience)();
  if (null == r) return null;
  let A = null != r ? d.default.getPremiumPlanItem(r) : null;
  if (d.default.isBoostOnlySubscription(r) ? t = T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION : null != A && (t = d.default.getDisplayPremiumType(A.planId)), null == t) return null;
  let N = () => l.default.open(E.UserSettingsSections.SUBSCRIPTIONS),
    p = (null != A ? d.default.getSkuIdForPlan(A.planId) : null) === _.PremiumSubscriptionSKUs.TIER_1;
  return s = null != S ? S : m || f ? "always-white" : "text-normal", (0, a.jsxs)(n.Card, {
    className: i()(I.container, R, {
      [I.lightTextLink]: f,
      [I.centerText]: m
    }),
    type: n.Card.Types.CUSTOM,
    children: [(0, a.jsx)(o.default, {
      className: i()(I.icon, {
        [I.lightThemeColorOnly]: m || f
      })
    }), (0, a.jsx)(n.Text, {
      variant: "text-sm/medium",
      color: s,
      children: p ? T.default.Messages.PREMIUM_SUBSCRIPTION_TIER_1_DEPRECATION.format({
        helpdeskArticle: u.default.getArticleURL(E.HelpdeskArticles.PREMIUM_DETAILS),
        onSubscriptionsClick: N
      }) : T.default.Messages.PREMIUM_SUBSCRIPTION_MANAGE_YOURS_LINK.format({
        subscriptionName: t,
        onSubscriptionsClick: N
      })
    })]
  })
}