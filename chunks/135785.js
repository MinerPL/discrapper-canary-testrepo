"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  n = s("481060"),
  l = s("230711"),
  o = s("759231"),
  u = s("63063"),
  d = s("74538"),
  c = s("140465"),
  _ = s("474936"),
  E = s("981631"),
  T = s("689938"),
  I = s("694406");
t.default = e => {
  let t, s, {
      premiumSubscription: i,
      className: R,
      isFullscreen: S = !1,
      textColor: f
    } = e,
    m = (0, c.useIsInPremiumOfferExperience)();
  if (null == i) return null;
  let N = null != i ? d.default.getPremiumPlanItem(i) : null;
  if (d.default.isBoostOnlySubscription(i) ? t = T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION : null != N && (t = d.default.getDisplayPremiumType(N.planId)), null == t) return null;
  let A = () => l.default.open(E.UserSettingsSections.SUBSCRIPTIONS),
    p = (null != N ? d.default.getSkuIdForPlan(N.planId) : null) === _.PremiumSubscriptionSKUs.TIER_1;
  return s = null != f ? f : m || S ? "always-white" : "text-normal", (0, a.jsxs)(n.Card, {
    className: r()(I.container, R, {
      [I.lightTextLink]: S,
      [I.centerText]: m
    }),
    type: n.Card.Types.CUSTOM,
    children: [(0, a.jsx)(o.default, {
      className: r()(I.icon, {
        [I.lightThemeColorOnly]: m || S
      })
    }), (0, a.jsx)(n.Text, {
      variant: "text-sm/medium",
      color: s,
      children: p ? T.default.Messages.PREMIUM_SUBSCRIPTION_TIER_1_DEPRECATION.format({
        helpdeskArticle: u.default.getArticleURL(E.HelpdeskArticles.PREMIUM_DETAILS),
        onSubscriptionsClick: A
      }) : T.default.Messages.PREMIUM_SUBSCRIPTION_MANAGE_YOURS_LINK.format({
        subscriptionName: t,
        onSubscriptionsClick: A
      })
    })]
  })
}