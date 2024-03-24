"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  n = s.n(r),
  i = s("77078"),
  l = s("685665"),
  o = s("53253"),
  u = s("635956"),
  d = s("782340"),
  c = s("345870"),
  _ = s("35257"),
  E = s("871938"),
  T = e => {
    let {
      className: t,
      imageClassName: s,
      textContainerOverrideStyles: r,
      location: T,
      analyticsLocation: I
    } = e, {
      AnalyticsLocationProvider: f
    } = (0, l.default)(T), R = (0, o.useIsSeasonalGiftingActive)(), {
      enabled: S
    } = o.SeasonalGiftingMarketingExperiment.useExperiment({
      location: "GiftNitro"
    }, {
      autoTrackExposure: R
    }), m = S && R;
    return (0, a.jsx)(f, {
      children: (0, a.jsxs)("div", {
        className: n(c.container, t),
        children: [(0, a.jsxs)("div", {
          className: c.textContainer,
          style: r,
          children: [(0, a.jsx)(i.Heading, {
            variant: "heading-lg/extrabold",
            className: c.heading,
            children: m ? d.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : d.default.Messages.GIFT_NITRO
          }), (0, a.jsx)(i.Text, {
            variant: "text-sm/medium",
            children: m ? d.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : d.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
          }), (0, a.jsx)(u.default, {
            isGift: !0,
            className: c.giftCardButton,
            look: i.Button.Looks.OUTLINED,
            buttonText: d.default.Messages.GIFT_NITRO,
            buttonTextClassName: c.giftButtonCTA,
            color: i.Button.Colors.CUSTOM,
            premiumModalAnalyticsLocation: I
          })]
        }), (0, a.jsx)("img", {
          src: m ? E : _,
          className: n(c.bannerImage, s),
          alt: "gift nitro banner"
        })]
      })
    })
  }