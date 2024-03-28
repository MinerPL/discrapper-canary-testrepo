"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  n = s("442837"),
  l = s("481060"),
  o = s("100527"),
  u = s("906732"),
  d = s("535322"),
  c = s("326151"),
  _ = s("357355"),
  E = s("140465"),
  T = s("775412"),
  I = s("846363"),
  R = s("248042"),
  S = s("422034"),
  f = s("206127"),
  m = s("318747"),
  N = s("409100"),
  A = s("689938"),
  p = s("374861");
let C = e => {
    let {
      inOfferExperience: t,
      inTrial: s,
      subscriptionTier: i
    } = e, r = null;
    !t && (r = (0, a.jsxs)("div", {
      className: p.buttonContainer,
      children: [(0, a.jsx)(N.default, {
        forceInverted: !0,
        className: p.button,
        subscriptionTier: i
      }), (0, a.jsx)(m.default, {
        className: p.button,
        forceWhite: !0
      })]
    }));
    let n = null;
    return s && (n = (0, a.jsx)("div", {
      className: p.buttonContainer,
      children: (0, a.jsx)(m.default, {
        className: p.button,
        forceWhite: !0
      })
    })), (0, a.jsxs)(a.Fragment, {
      children: [r, " ", n]
    })
  },
  g = e => {
    let {
      isFullscreen: t
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? p.fullscreenSparkleStar1 : p.settingsSparkleStar1
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? p.fullscreenSparkleStar2 : p.settingsSparkleStar2
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? p.fullscreenSparkleStar3 : p.settingsSparkleStar3
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? p.fullscreenSparkleStar4 : p.settingsSparkleStar4
      })]
    })
  };

function O(e) {
  let {
    variant: t = "text-lg/normal"
  } = e, s = (0, f.useCheapestMonthlyPrice)();
  return (0, a.jsx)(l.Text, {
    variant: t,
    color: "always-white",
    className: p.description,
    children: A.default.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
      cheapestMonthlyPrice: s
    })
  })
}
t.default = e => {
  let {
    isFullscreen: t,
    className: s,
    subscriptionTier: i,
    hideSparkles: d,
    hideSubscribeAndGiftButton: f
  } = e, N = (0, I.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  }), {
    analyticsLocations: P
  } = (0, u.default)(o.default.PREMIUM_MARKETING_HERO_CTA), M = (0, T.useHasActiveTrial)(), h = (0, E.useIsInPremiumOfferExperience)(), L = (0, R.useIsEligibleForBogoPromotion)(), {
    marketingEnabled: x
  } = c.default.useExperiment({
    location: "HeroHeading"
  }, {
    autoTrackExposure: !1
  }), v = (0, n.useStateFromStores)([_.default], () => _.default.affinities);
  v.length > 0 && c.default.trackExposure({
    location: "HeroHeading"
  });
  let D = x && v.length > 0;
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: P,
    children: (0, a.jsxs)("div", {
      className: r()(p.container, s, {
        [p.settingsContainer]: !t && !N,
        [p.affinityHeight]: !t && D && !N
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, a.jsxs)("div", {
        className: t ? p.fullscreenTextContainer : p.settingsTextContainer,
        children: [(0, a.jsx)(l.Heading, {
          className: N ? p.header : void 0,
          variant: t ? "display-lg" : "display-md",
          color: N ? void 0 : "always-white",
          children: A.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), D ? (0, a.jsx)("div", {
          className: r()({
            [p.affinityDescription]: !N,
            [p.affinityDescriptionNoMargin]: N
          }),
          children: (0, a.jsx)(S.default, {
            className: N ? p.backgroundColor : void 0,
            textColor: N ? "text-primary" : "always-white",
            smallerText: !t || N
          })
        }) : !N && (0, a.jsx)(O, {}), L ? (0, a.jsx)("div", {
          className: p.buttonContainer,
          children: (0, a.jsx)(m.default, {
            className: p.button,
            forceWhite: !0
          })
        }) : f ? null : (0, a.jsx)(C, {
          subscriptionTier: i,
          inOfferExperience: h,
          inTrial: M
        }), D && !N && (0, a.jsx)(O, {
          variant: "text-md/normal"
        })]
      }), !(h || d) && (0, a.jsx)(g, {
        isFullscreen: t
      })]
    })
  })
}