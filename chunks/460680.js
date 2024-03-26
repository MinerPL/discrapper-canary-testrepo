"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  i = s.n(r),
  n = s("65597"),
  l = s("77078"),
  o = s("521012"),
  u = s("701909"),
  d = s("394058"),
  c = s("641078"),
  _ = s("881155"),
  E = s("694540"),
  T = s("646718"),
  I = s("49111"),
  f = s("782340"),
  R = s("334081"),
  S = function(e) {
    let {
      isFullscreen: t
    } = e, {
      promotion: s
    } = (0, E.useBogoPromotion)(), r = (0, n.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()), S = (0, c.useIsEligibleForBogoPromotion)();
    if (!S) return null;
    let m = new Date(s.endDate);
    return (0, a.jsx)("div", {
      className: i(R.banner, {
        [R.bannerFullscreen]: t
      }),
      children: (0, a.jsxs)("div", {
        className: R.bannerContent,
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(l.Heading, {
            variant: "display-sm",
            color: "always-white",
            children: null == r ? f.default.Messages.BOGO_BUY_HEADLINE : f.default.Messages.BOGO_UPGRADE_HEADLINE
          }), (0, a.jsx)(l.Text, {
            className: R.countdown,
            variant: "text-sm/medium",
            children: (0, a.jsx)(d.default, {
              endDate: m
            })
          }), (0, a.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "always-white",
            children: null == r ? f.default.Messages.BOGO_PERKS_SUBTITLE_NON_SUB_FORMATTED.format({
              helpCenterLink: u.default.getArticleURL(I.HelpdeskArticles.SUMMER_2023_BOGO)
            }) : f.default.Messages.BOGO_PERKS_SUBTITLE_SUB_FORMATTED.format({
              helpCenterLink: u.default.getArticleURL(I.HelpdeskArticles.SUMMER_2023_BOGO)
            })
          })]
        }), (0, a.jsx)(_.default, {
          buttonText: f.default.Messages.BOGO_CLAIM_OFFER,
          buttonTextClassName: R.subscribeButtonText,
          subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
          className: R.subscribeButton,
          forceInverted: !0
        })]
      })
    })
  }