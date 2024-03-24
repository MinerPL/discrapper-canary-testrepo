"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  n = s.n(r),
  i = s("77078"),
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
      AnalyticsLocationProvider: s
    } = (0, o.default)(l.default.PREMIUM_MARKETING_HERO_CTA), r = (0, u.useHasActiveTrial)();
    return (0, a.jsx)(s, {
      children: (0, a.jsxs)("div", {
        className: n(E.container, t),
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, a.jsx)("img", {
          src: T,
          alt: "",
          className: E.headerArt
        }), (0, a.jsxs)("div", {
          className: E.content,
          children: [(0, a.jsx)(c.PremiumPillWithSparkles, {
            text: _.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: n(E.trialPill, {
              [E.hidden]: !r
            }),
            colorOptions: c.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
          }), (0, a.jsx)(i.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: _.default.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }), (0, a.jsx)("div", {
            className: E.buttonContainer,
            children: (0, a.jsx)(d.default, {
              color: i.ButtonColors.BRAND,
              buttonText: _.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: E.button,
              isGift: !0
            })
          })]
        })]
      })
    })
  }