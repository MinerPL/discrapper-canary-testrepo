"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  n = s("481060"),
  l = s("100527"),
  o = s("906732"),
  u = s("775412"),
  d = s("197115"),
  c = s("823188"),
  _ = s("689938"),
  E = s("672827"),
  T = s("872905");
t.default = e => {
  let {
    className: t
  } = e, {
    analyticsLocations: s
  } = (0, o.default)(l.default.PREMIUM_MARKETING_HERO_CTA), i = (0, u.useHasActiveTrial)();
  return (0, a.jsx)(o.AnalyticsLocationProvider, {
    value: s,
    children: (0, a.jsxs)("div", {
      className: r()(E.container, t),
      "data-testid": "subscriber-nitro-home-hero-header",
      children: [(0, a.jsx)("img", {
        src: T,
        alt: "",
        className: E.headerArt
      }), (0, a.jsxs)("div", {
        className: E.content,
        children: [(0, a.jsx)(c.PremiumPillWithSparkles, {
          text: _.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
          className: r()(E.trialPill, {
            [E.hidden]: !i
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