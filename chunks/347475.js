"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  n = s("481060"),
  l = s("906732"),
  o = s("646476"),
  u = s("197115"),
  d = s("689938"),
  c = s("860831"),
  _ = s("568147"),
  E = s("332796");
t.default = e => {
  let {
    className: t,
    imageClassName: s,
    textContainerOverrideStyles: i,
    location: T,
    analyticsLocation: I
  } = e, {
    analyticsLocations: R
  } = (0, l.default)(T), S = (0, o.useIsSeasonalGiftingActive)(), {
    enabled: f
  } = o.SeasonalGiftingMarketingExperiment.useExperiment({
    location: "GiftNitro"
  }, {
    autoTrackExposure: S
  }), m = f && S;
  return (0, a.jsx)(l.AnalyticsLocationProvider, {
    value: R,
    children: (0, a.jsxs)("div", {
      className: r()(c.container, t),
      children: [(0, a.jsxs)("div", {
        className: c.textContainer,
        style: i,
        children: [(0, a.jsx)(n.Heading, {
          variant: "heading-lg/extrabold",
          className: c.heading,
          children: m ? d.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : d.default.Messages.GIFT_NITRO
        }), (0, a.jsx)(n.Text, {
          variant: "text-sm/medium",
          children: m ? d.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : d.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
        }), (0, a.jsx)(u.default, {
          isGift: !0,
          className: c.giftCardButton,
          look: n.Button.Looks.OUTLINED,
          buttonText: d.default.Messages.GIFT_NITRO,
          buttonTextClassName: c.giftButtonCTA,
          color: n.Button.Colors.CUSTOM,
          premiumModalAnalyticsLocation: I
        })]
      }), (0, a.jsx)("img", {
        src: m ? E : _,
        className: r()(c.bannerImage, s),
        alt: "gift nitro banner"
      })]
    })
  })
}