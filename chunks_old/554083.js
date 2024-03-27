"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  i = s.n(r),
  n = s("77078"),
  l = s("812204"),
  o = s("685665"),
  u = s("324878"),
  d = s("635956"),
  c = s("400307"),
  _ = s("782340"),
  E = s("372685"),
  T = s("230724"),
  I = e => {
    let {
      className: t
    } = e, {
      analyticsLocations: s
    } = (0, o.default)(l.default.PREMIUM_MARKETING_HERO_CTA), r = (0, u.useHasActiveTrial)();
    return (0, a.jsx)(o.AnalyticsLocationProvider, {
      value: s,
      children: (0, a.jsxs)("div", {
        className: i(E.container, t),
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, a.jsx)("img", {
          src: T,
          alt: "",
          className: E.headerArt
        }), (0, a.jsxs)("div", {
          className: E.content,
          children: [(0, a.jsx)(c.PremiumPillWithSparkles, {
            text: _.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: i(E.trialPill, {
              [E.hidden]: !r
            }),
            colorOptions: c.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
          }), (0, a.jsx)(n.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: _.default.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }), (0, a.jsx)("div", {
            className: E.buttonContainer,
            children: (0, a.jsx)(d.default, {
              color: n.ButtonColors.BRAND,
              buttonText: _.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: E.button,
              isGift: !0
            })
          })]
        })]
      })
    })
  }