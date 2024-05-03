"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("481060"),
  l = s("100527"),
  o = s("906732"),
  u = s("775412"),
  d = s("520540"),
  c = s("197115"),
  _ = s("823188"),
  E = s("386733"),
  T = s("487980"),
  I = s("689938"),
  R = s("368022"),
  f = s("872905"),
  S = s("578478");
let m = e => {
    let {
      className: t,
      inTrial: s
    } = e;
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)("div", {
        className: i()(R.container, t),
        "data-testid": "subscriber-nitro-home-hero-header",
        children: [(0, a.jsx)("img", {
          src: f,
          alt: "",
          className: R.headerArt
        }), (0, a.jsxs)("div", {
          className: R.content,
          children: [(0, a.jsx)(_.PremiumPillWithSparkles, {
            text: I.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: i()(R.trialPill, {
              [R.hidden]: !s
            }),
            colorOptions: _.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
          }), (0, a.jsx)(n.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: I.default.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }), (0, a.jsx)("div", {
            className: R.buttonContainer,
            children: (0, a.jsx)(c.default, {
              color: n.ButtonColors.BRAND,
              buttonText: I.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: R.button,
              isGift: !0
            })
          })]
        })]
      })
    })
  },
  A = e => {
    let {
      inTrial: t,
      location: s
    } = e, {
      subscriberHomeVariant: r
    } = d.ReferralProgramSender.useExperiment({
      location: s
    }, {
      autoTrackExposure: !1
    }), l = r === d.SubscriberHomeVariant.VARIANT_2;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("img", {
        src: S,
        alt: "",
        className: R.headerArtV2
      }), (0, a.jsx)("div", {
        className: R.containerV2,
        "data-testid": "subscriber-nitro-home-hero-header",
        children: (0, a.jsxs)("div", {
          className: R.contentV2,
          children: [(0, a.jsx)(_.PremiumPillWithSparkles, {
            text: I.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED,
            className: i()(R.trialPill, {
              [R.hidden]: !t
            }),
            colorOptions: _.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
          }), (0, a.jsx)(n.Heading, {
            variant: "display-lg",
            color: "always-white",
            children: I.default.Messages.SUBSCRIBER_NITRO_HOME_TITLE_ONE_LINE
          }), l && (0, a.jsx)("div", {
            className: R.buttonContainer,
            children: (0, a.jsx)(c.default, {
              color: n.ButtonColors.BRAND,
              buttonText: I.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING,
              className: R.button,
              isGift: !0
            })
          }), (0, a.jsx)(E.default, {})]
        })
      })]
    })
  };
t.default = e => {
  let {
    className: t,
    location: s
  } = e, {
    analyticsLocations: r
  } = (0, o.default)(l.default.PREMIUM_MARKETING_HERO_CTA), i = (0, u.useHasActiveTrial)(), n = (0, T.useIsEligibleSenderForReferralProgram)(s) ? (0, a.jsx)(A, {
    inTrial: i,
    location: s
  }) : (0, a.jsx)(m, {
    className: t,
    inTrial: i
  });
  return (0, a.jsx)(o.AnalyticsLocationProvider, {
    value: r,
    children: n
  })
}