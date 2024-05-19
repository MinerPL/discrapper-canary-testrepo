"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("442837"),
  l = s("481060"),
  o = s("100527"),
  u = s("906732"),
  d = s("535322"),
  c = s("357355"),
  _ = s("140465"),
  E = s("775412"),
  T = s("926501"),
  I = s("846363"),
  R = s("650032"),
  f = s("105759"),
  S = s("248042"),
  m = s("422034"),
  A = s("206127"),
  N = s("710220"),
  p = s("318747"),
  g = s("409100"),
  C = s("474936"),
  P = s("689938"),
  O = s("982436");
let M = "HeroHeading",
  h = e => {
    let {
      inOfferExperience: t,
      inTrial: s,
      subscriptionTier: r
    } = e, i = null;
    !t && (i = (0, a.jsxs)("div", {
      className: O.buttonContainer,
      children: [(0, a.jsx)(g.default, {
        forceInverted: !0,
        className: O.button,
        subscriptionTier: r
      }), (0, a.jsx)(p.default, {
        className: O.button,
        forceWhite: !0
      })]
    }));
    let n = null;
    return s && (n = (0, a.jsx)("div", {
      className: O.buttonContainer,
      children: (0, a.jsx)(p.default, {
        className: O.button,
        forceWhite: !0
      })
    })), (0, a.jsxs)(a.Fragment, {
      children: [i, " ", n]
    })
  },
  L = e => {
    let {
      isFullscreen: t
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? O.fullscreenSparkleStar1 : O.settingsSparkleStar1
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? O.fullscreenSparkleStar2 : O.settingsSparkleStar2
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? O.fullscreenSparkleStar3 : O.settingsSparkleStar3
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? O.fullscreenSparkleStar4 : O.settingsSparkleStar4
      })]
    })
  };

function x(e) {
  let {
    variant: t = "text-lg/normal"
  } = e, s = (0, A.useCheapestMonthlyPrice)();
  return (0, a.jsx)(l.Text, {
    variant: t,
    color: "always-white",
    className: O.description,
    children: P.default.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
      cheapestMonthlyPrice: s
    })
  })
}
t.default = e => {
  let {
    isFullscreen: t,
    className: s,
    subscriptionTier: r,
    hideSparkles: d,
    hideSubscribeAndGiftButton: A,
    entrypoint: g
  } = e, v = (0, I.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  }), {
    analyticsLocations: b
  } = (0, u.default)(o.default.PREMIUM_MARKETING_HERO_CTA), D = (0, E.useHasActiveTrial)(), U = (0, _.useIsInPremiumOfferExperience)(), j = (0, S.useIsEligibleForBogoPromotion)(), G = (0, n.useStateFromStores)([c.default], () => c.default.affinities), y = (0, f.default)(), {
    enabled: B
  } = R.ReferralProgramRecipient.useExperiment({
    location: M
  }, {
    autoTrackExposure: !1
  }), k = g === C.PremiumMarketingEntrypoints.ApplicationStoreHome && null != y && B, H = G.length > 0, F = (0, T.useIsMarketingPageHeroHeaderV2Enabled)({
    location: M
  });
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: b,
    children: (0, a.jsxs)("div", {
      className: i()(O.container, s, {
        [O.settingsContainer]: !t && !v,
        [O.affinityHeight]: !t && H && !v
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, a.jsxs)("div", {
        className: t ? O.fullscreenTextContainer : O.settingsTextContainer,
        children: [(0, a.jsx)(l.Heading, {
          className: v ? O.header : void 0,
          variant: t ? "display-lg" : "display-md",
          color: v ? void 0 : "always-white",
          children: F ? P.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE_V2 : P.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), k ? (0, a.jsx)(N.default, {
          referrer: y
        }) : H ? (0, a.jsx)("div", {
          className: i()({
            [O.affinityDescription]: !v,
            [O.affinityDescriptionNoMargin]: v
          }),
          children: (0, a.jsx)(m.default, {
            className: v ? O.backgroundColor : void 0,
            textColor: v ? "text-primary" : "always-white",
            smallerText: !t || v
          })
        }) : !v && (0, a.jsx)(x, {}), j ? (0, a.jsx)("div", {
          className: O.buttonContainer,
          children: (0, a.jsx)(p.default, {
            className: O.button,
            forceWhite: !0
          })
        }) : A ? null : (0, a.jsx)(h, {
          subscriptionTier: r,
          inOfferExperience: U,
          inTrial: D
        }), H && !v && !k && (0, a.jsx)(x, {
          variant: "text-md/normal"
        })]
      }), !(U || d) && (0, a.jsx)(L, {
        isFullscreen: t
      })]
    })
  })
}