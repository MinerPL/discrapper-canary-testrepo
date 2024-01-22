"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  r = s("77078"),
  i = s("446674"),
  u = s("812204"),
  o = s("685665"),
  d = s("441413"),
  c = s("309318"),
  _ = s("446488"),
  E = s("182650"),
  I = s("324878"),
  f = s("641078"),
  T = s("871948"),
  S = s("401135"),
  R = s("218435"),
  m = s("881155"),
  p = s("782340"),
  N = s("30126");

function g(e) {
  let {
    variant: t = "text-lg/normal"
  } = e, s = (0, S.useCheapestMonthlyPrice)();
  return (0, a.jsx)(r.Text, {
    variant: t,
    color: "always-white",
    className: N.description,
    children: p.default.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({
      cheapestMonthlyPrice: s
    })
  })
}
var A = e => {
  let {
    isFullscreen: t,
    className: s,
    subscriptionTier: n
  } = e, {
    AnalyticsLocationProvider: S
  } = (0, o.default)(u.default.PREMIUM_MARKETING_HERO_CTA), A = (0, I.useHasActiveTrial)(), P = (0, E.useIsInPremiumOfferExperience)(), C = (0, f.useIsEligibleForBogoPromotion)(), {
    marketingEnabled: O
  } = c.default.useExperiment({
    location: "HeroHeading"
  }, {
    autoTrackExposure: !1
  }), M = (0, i.useStateFromStores)([_.default], () => _.default.affinities);
  M.length > 0 && c.default.trackExposure({
    location: "HeroHeading"
  });
  let h = O && M.length > 0;
  return (0, a.jsx)(S, {
    children: (0, a.jsxs)("div", {
      className: l(N.container, s, {
        [N.settingsContainer]: !t,
        [N.affinityHeight]: !t && h
      }),
      "data-testid": "v2-marketing-page-hero-header",
      children: [(0, a.jsxs)("div", {
        className: t ? N.fullscreenTextContainer : N.settingsTextContainer,
        children: [(0, a.jsx)(r.Heading, {
          variant: t ? "display-lg" : "display-md",
          color: "always-white",
          children: p.default.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE
        }), h ? (0, a.jsx)("div", {
          className: N.affinityDescription,
          children: (0, a.jsx)(T.default, {
            smallerText: !t
          })
        }) : (0, a.jsx)(g, {}), C ? (0, a.jsx)("div", {
          className: N.buttonContainer,
          children: (0, a.jsx)(R.default, {
            className: N.button,
            forceWhite: !0
          })
        }) : (0, a.jsxs)(a.Fragment, {
          children: [P ? null : (0, a.jsxs)("div", {
            className: N.buttonContainer,
            children: [(0, a.jsx)(m.default, {
              forceInverted: !0,
              className: N.button,
              subscriptionTier: n
            }), (0, a.jsx)(R.default, {
              className: N.button,
              forceWhite: !0
            })]
          }), A ? (0, a.jsx)("div", {
            className: N.buttonContainer,
            children: (0, a.jsx)(R.default, {
              className: N.button,
              forceWhite: !0
            })
          }) : null]
        }), h && (0, a.jsx)(g, {
          variant: "text-md/normal"
        })]
      }), P ? null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(d.StretchedSparkleStar, {
          className: t ? N.fullscreenSparkleStar1 : N.settingsSparkleStar1
        }), (0, a.jsx)(d.StretchedSparkleStar, {
          className: t ? N.fullscreenSparkleStar2 : N.settingsSparkleStar2
        }), (0, a.jsx)(d.StretchedSparkleStar, {
          className: t ? N.fullscreenSparkleStar3 : N.settingsSparkleStar3
        }), (0, a.jsx)(d.StretchedSparkleStar, {
          className: t ? N.fullscreenSparkleStar4 : N.settingsSparkleStar4
        })]
      })]
    })
  })
}