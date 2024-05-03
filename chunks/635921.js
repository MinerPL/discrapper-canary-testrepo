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
  c = s("326151"),
  _ = s("357355"),
  E = s("140465"),
  T = s("775412"),
  I = s("846363"),
  R = s("958589"),
  f = s("650032"),
  S = s("105759"),
  m = s("248042"),
  A = s("422034"),
  N = s("206127"),
  p = s("710220"),
  g = s("318747"),
  C = s("409100"),
  P = s("474936"),
  O = s("689938"),
  M = s("63380");
let h = e => {
    let {
      inOfferExperience: t,
      inTrial: s,
      subscriptionTier: r
    } = e, i = null;
    !t && (i = (0, a.jsxs)("div", {
      className: M.buttonContainer,
      children: [(0, a.jsx)(C.default, {
        forceInverted: !0,
        className: M.button,
        subscriptionTier: r
      }), (0, a.jsx)(g.default, {
        className: M.button,
        forceWhite: !0
      })]
    }));
    let n = null;
    return s && (n = (0, a.jsx)("div", {
      className: M.buttonContainer,
      children: (0, a.jsx)(g.default, {
        className: M.button,
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
        className: t ? M.fullscreenSparkleStar1 : M.settingsSparkleStar1
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? M.fullscreenSparkleStar2 : M.settingsSparkleStar2
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? M.fullscreenSparkleStar3 : M.settingsSparkleStar3
      }), (0, a.jsx)(d.StretchedSparkleStar, {
        className: t ? M.fullscreenSparkleStar4 : M.settingsSparkleStar4
      })]
    })
  };

function x(e) {
  let {
    variant: t = "text-lg/normal"
  } = e, s = (0, N.useCheapestMonthlyPrice)();
  return (0, a.jsx)(l.Text, {
    variant: t,
    color: "always-white",
    className: M.description,
    children: O.default.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
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
    hideSubscribeAndGiftButton: N,
    entrypoint: C
  } = e, v = (0, I.useMarketingOptimizationExperiment)({
    autoTrackExposure: !1
  }), {
    analyticsLocations: b
  } = (0, u.default)(o.default.PREMIUM_MARKETING_HERO_CTA), D = (0, T.useHasActiveTrial)(), U = (0, E.useIsInPremiumOfferExperience)(), j = (0, m.useIsEligibleForBogoPromotion)(), y = R.default.useExperiment({
    location: "HeroHeading"
  }).enabled, {
    marketingEnabled: B
  } = c.default.useExperiment({
    location: "HeroHeading"
  }, {
    autoTrackExposure: !1
  }), G = (0, n.useStateFromStores)([_.default], () => _.default.affinities);
  G.length > 0 && c.default.trackExposure({
    location: "HeroHeading"
  });
  let k = (0, S.default)(),
    {
      enabled: H
    } = f.ReferralProgramRecipient.useExperiment({
      location: "HeroHeading"
    }, {
      autoTrackExposure: !1
    }),
    F = C === P.PremiumMarketingEntrypoints.ApplicationStoreHome && null != k && H,
    w = B && G.length > 0;
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: b,
    children: (0, a.jsxs)("div", {
      className: i()(M.container, s, {
        [M.settingsContainer]: !t && !v,
        [M.affinityHeight]: !t && w && !v
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, a.jsxs)("div", {
        className: t ? M.fullscreenTextContainer : M.settingsTextContainer,
        children: [(0, a.jsx)(l.Heading, {
          className: v ? M.header : void 0,
          variant: t ? "display-lg" : "display-md",
          color: v ? void 0 : "always-white",
          children: O.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), F ? (0, a.jsx)(p.default, {
          referrer: k
        }) : w ? (0, a.jsx)("div", {
          className: i()({
            [M.affinityDescription]: !v,
            [M.affinityDescriptionNoMargin]: v
          }),
          children: (0, a.jsx)(A.default, {
            className: v ? M.backgroundColor : void 0,
            textColor: v ? "text-primary" : "always-white",
            smallerText: !t || v
          })
        }) : !v && (0, a.jsx)(x, {}), j || y ? (0, a.jsx)("div", {
          className: M.buttonContainer,
          children: (0, a.jsx)(g.default, {
            className: M.button,
            forceWhite: !0
          })
        }) : N ? null : (0, a.jsx)(h, {
          subscriptionTier: r,
          inOfferExperience: U,
          inTrial: D
        }), w && !v && !F && (0, a.jsx)(x, {
          variant: "text-md/normal"
        })]
      }), !(U || d) && (0, a.jsx)(L, {
        isFullscreen: t
      })]
    })
  })
}