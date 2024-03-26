"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  i = s.n(r),
  n = s("77078"),
  l = s("79112"),
  o = s("423487"),
  u = s("701909"),
  d = s("719923"),
  c = s("182650"),
  _ = s("646718"),
  E = s("49111"),
  T = s("782340"),
  I = s("555875"),
  f = e => {
    let t, s, {
        premiumSubscription: r,
        className: f,
        isFullscreen: S = !1,
        textColor: R
      } = e,
      m = (0, c.useIsInPremiumOfferExperience)();
    if (null == r) return null;
    let A = null != r ? d.default.getPremiumPlanItem(r) : null,
      N = d.default.isBoostOnlySubscription(r);
    if (N ? t = T.default.Messages.PREMIUM_GUILD_SUBSCRIPTION : null != A && (t = d.default.getDisplayPremiumType(A.planId)), null == t) return null;
    let p = () => l.default.open(E.UserSettingsSections.SUBSCRIPTIONS),
      C = null != A ? d.default.getSkuIdForPlan(A.planId) : null,
      g = C === _.PremiumSubscriptionSKUs.TIER_1;
    return s = null != R ? R : m || S ? "always-white" : "text-normal", (0, a.jsxs)(n.Card, {
      className: i(I.container, f, {
        [I.lightTextLink]: S,
        [I.centerText]: m
      }),
      type: n.Card.Types.CUSTOM,
      children: [(0, a.jsx)(o.default, {
        className: i(I.icon, {
          [I.lightThemeColorOnly]: m || S
        })
      }), (0, a.jsx)(n.Text, {
        variant: "text-sm/medium",
        color: s,
        children: g ? T.default.Messages.PREMIUM_SUBSCRIPTION_TIER_1_DEPRECATION.format({
          helpdeskArticle: u.default.getArticleURL(E.HelpdeskArticles.PREMIUM_DETAILS),
          onSubscriptionsClick: p
        }) : T.default.Messages.PREMIUM_SUBSCRIPTION_MANAGE_YOURS_LINK.format({
          subscriptionName: t,
          onSubscriptionsClick: p
        })
      })]
    })
  }