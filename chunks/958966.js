"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
});
var a = s("37983");
s("884691");
var r = s("414456"),
  i = s.n(r),
  n = s("446674"),
  l = s("77078"),
  o = s("812204"),
  u = s("685665"),
  d = s("441413"),
  c = s("309318"),
  _ = s("446488"),
  E = s("182650"),
  T = s("324878"),
  I = s("527715"),
  f = s("641078"),
  S = s("871948"),
  R = s("401135"),
  m = s("218435"),
  A = s("881155"),
  N = s("782340"),
  p = s("23596");
let C = e => {
    let {
      inOfferExperience: t,
      inTrial: s,
      subscriptionTier: r
    } = e, i = null;
    !t && (i = (0, a.jsxs)("div", {
      className: p.buttonContainer,
      children: [(0, a.jsx)(A.default, {
        forceInverted: !0,
        className: p.button,
        subscriptionTier: r
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
      children: [i, " ", n]
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
  } = e, s = (0, R.useCheapestMonthlyPrice)();
  return (0, a.jsx)(l.Text, {
    variant: t,
    color: "always-white",
    className: p.description,
    children: N.default.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
      cheapestMonthlyPrice: s
    })
  })
}
var P = e => {
  let {
    isFullscreen: t,
    className: s,
    subscriptionTier: r,
    hideSparkles: d,
    hideSubscribeAndGiftButton: R
  } = e, A = (0, I.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  }), {
    analyticsLocations: P
  } = (0, u.default)(o.default.PREMIUM_MARKETING_HERO_CTA), M = (0, T.useHasActiveTrial)(), h = (0, E.useIsInPremiumOfferExperience)(), L = (0, f.useIsEligibleForBogoPromotion)(), {
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
      className: i(p.container, s, {
        [p.settingsContainer]: !t && !A,
        [p.affinityHeight]: !t && D && !A
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, a.jsxs)("div", {
        className: t ? p.fullscreenTextContainer : p.settingsTextContainer,
        children: [(0, a.jsx)(l.Heading, {
          className: A ? p.header : void 0,
          variant: t ? "display-lg" : "display-md",
          color: A ? void 0 : "always-white",
          children: N.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), D ? (0, a.jsx)("div", {
          className: i({
            [p.affinityDescription]: !A,
            [p.affinityDescriptionNoMargin]: A
          }),
          children: (0, a.jsx)(S.default, {
            className: A ? p.backgroundColor : void 0,
            textColor: A ? "text-primary" : "always-white",
            smallerText: !t || A
          })
        }) : !A && (0, a.jsx)(O, {}), L ? (0, a.jsx)("div", {
          className: p.buttonContainer,
          children: (0, a.jsx)(m.default, {
            className: p.button,
            forceWhite: !0
          })
        }) : R ? null : (0, a.jsx)(C, {
          subscriptionTier: r,
          inOfferExperience: h,
          inTrial: M
        }), D && !A && (0, a.jsx)(O, {
          variant: "text-md/normal"
        })]
      }), !(h || d) && (0, a.jsx)(g, {
        isFullscreen: t
      })]
    })
  })
}