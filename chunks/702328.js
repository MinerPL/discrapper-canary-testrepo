n(47120);
var s = n(735250),
  a = n(470079),
  r = n(120356),
  i = n.n(r),
  l = n(442837),
  o = n(622535),
  c = n(481060),
  d = n(634894),
  _ = n(100527),
  u = n(906732),
  E = n(433811),
  T = n(78839),
  I = n(626135),
  R = n(74538),
  C = n(140465),
  g = n(91802),
  p = n(104494),
  A = n(639119),
  m = n(8647),
  N = n(568126),
  f = n(605289),
  h = n(248042),
  S = n(823188),
  M = n(135785),
  x = n(498765),
  b = n(635921),
  O = n(177839),
  P = n(794484),
  v = n(392521),
  L = n(349803),
  Z = n(179984),
  D = n(409100),
  B = n(391110),
  j = n(71363),
  U = n(781800),
  G = n(474936),
  y = n(981631),
  k = n(374292),
  H = n(865215),
  w = n(735035),
  F = n(786362);
let V = e => {
let {
  isFullscreen: t,
  selectedPremiumType: n
} = e;
return t && null == n || n === G.p9.TIER_2 && t ? null : (0, s.jsx)(O.Z, {
  className: t ? k.perkCardsContainerSpacingFullscreen : k.perkCardsContainerSpacingSettings
});
  },
  W = e => {
let {
  isFullscreen: t,
  inOfferExperience: n
} = e;
return t || n ? (0, s.jsx)(x.Z, {
  lifted: !t && n
}) : null;
  },
  K = e => {
let {
  isFullscreen: t,
  inOfferExperience: n,
  setIsAllPerksVisible: a
} = e;
return t ? (0, s.jsxs)('div', {
  className: i()(k.whatsNewSectionBackground),
  children: [
    (0, s.jsx)(P.Z, {
      variant: B.R0.WHATS_NEW,
      isFullScreen: t
    }),
    (0, s.jsx)(P.Z, {
      isFullScreen: t,
      showAllPerksButton: t ? (0, s.jsx)(U.Z, {
        setIsAllPerksVisible: a,
        previousComponent: B.MQ.MARKETING
      }) : void 0
    }),
    n ? (0, s.jsx)(v.ZP, {
      className: k.pdSparklesTop,
      variant: v.u0.TOP
    }) : null,
    n ? (0, s.jsx)(v.ZP, {
      className: k.pdSparklesBottom,
      variant: v.u0.BOTTOM
    }) : null
  ]
}) : null;
  };
t.Z = e => {
  var t;
  let {
isFullscreen: n,
entrypoint: r
  } = e;
  a.useEffect(() => {
E.X.trigger();
  }, []);
  let x = a.useRef(null),
[O, P] = a.useState(!1),
[v, U] = a.useState(!1),
[Y, z] = a.useState(!1),
[Q, q] = a.useState(!1),
J = (0, l.e7)([T.ZP], () => T.ZP.getPremiumTypeSubscription()),
X = null != J ? (0, R.Af)(J) : null,
$ = null != X ? R.ZP.getSkuIdForPlan(X.planId) : null,
ee = null !== $ && $ !== G.Si.TIER_2 ? G.Si.TIER_2 : null,
et = (0, g.n)(),
en = null != et,
[es, ea] = a.useState(!1),
er = (0, p.Ng)(),
ei = (0, A.N)(),
el = null == ei ? void 0 : null === (t = ei.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
eo = (0, C.Nx)(),
ec = (0, h.Vi)(),
{
  analyticsLocations: ed
} = (0, u.ZP)(_.Z.PREMIUM_MARKETING),
e_ = 'PremiumMarketingHome';
  (0, d.j)({
location: e_ + ' auto on',
autoTrackExposure: !0
  }), (0, d.j)({
location: e_ + ' auto off',
autoTrackExposure: !1
  }), a.useEffect(() => {
q(!0);
  }, []);
  let eu = (0, s.jsx)('div', {
  className: i()({
    [k.premiumTierCardsContainerSettings]: !n,
    [k.premiumTierCardsContainerFullscreen]: n
  }),
  children: (0, s.jsx)(o.$, {
    onChange: e => U(e),
    threshold: 0.1,
    active: !0,
    children: (0, s.jsx)(S.ZP, {
      showWumpus: !0,
      tier0CTAButton: el === G.Si.TIER_2 || ec || null != er ? (0, s.jsx)(D.Z, {
        forceInverted: !0,
        showIcon: !1,
        subscriptionTier: G.Si.TIER_0,
        className: k.marginTopForButtons,
        look: c.ButtonLooks.OUTLINED,
        color: c.ButtonColors.WHITE,
        buttonShineClassName: k.buttonShine
      }) : (0, s.jsx)(D.Z, {
        forceInverted: !0,
        showIcon: !1,
        subscriptionTier: G.Si.TIER_0,
        className: k.marginTopForButtons,
        buttonShineClassName: k.buttonShine
      }),
      tier2CTAButton: el === G.Si.TIER_0 ? (0, s.jsx)(D.Z, {
        forceInverted: !0,
        showIcon: !1,
        subscriptionTier: G.Si.TIER_2,
        className: k.marginTopForButtons,
        look: c.ButtonLooks.OUTLINED,
        color: c.ButtonColors.WHITE,
        buttonShineClassName: k.buttonShine
      }) : (0, s.jsx)(D.Z, {
        forceInverted: !0,
        showIcon: !1,
        subscriptionTier: G.Si.TIER_2,
        className: k.marginTopForButtons,
        isEligibleForBogoPromotion: ec,
        buttonShineClassName: k.buttonShine
      })
    })
  })
}),
eE = (0, s.jsxs)('div', {
  className: i()(k.container, {
    [k.settingsContainer]: !n
  }),
  'data-cy': 'tier-0-marketing-page',
  children: [
    (0, s.jsx)(M.Z, {
      premiumSubscription: J,
      className: i()(n ? k.fullscreenExistingSubscriberSpacing : k.existingSubscriberSpacing, {
        [k.zIndex1]: eo
      }),
      isFullscreen: n
    }),
    (0, s.jsx)(W, {
      isFullscreen: n,
      inOfferExperience: eo
    }),
    !n && en ? (0, s.jsx)(f.Z, {
      localizedPricingPromo: et,
      smallGap: !0
    }) : (0, s.jsx)(o.$, {
      onChange: e => P(e),
      threshold: 0,
      active: !0,
      children: (0, s.jsx)(b.Z, {
        subscriptionTier: ee,
        isFullscreen: n || eo,
        className: i()({
          [k.fullscreenHero]: n,
          [k.settingsHeroNoBackground]: !n && eo,
          [k.trialMarketingMargin]: eo,
          [k.settingsHeroBogoHeight]: !n && ec,
          [k.settingsHeroBogoMarginFullscreen]: n && ec,
          [k.noTopPaddingOverride]: null != J
        }),
        entrypoint: r
      })
    }),
    (0, s.jsxs)('div', {
      className: k.promoBannerContainer,
      children: [
        (0, s.jsx)(m.Z, {
          isFullScreen: n
        }),
        n && en && (0, s.jsx)(N.Z, {
          localizedPricingPromo: et
        })
      ]
    }),
    eu,
    (0, s.jsx)(K, {
      isFullscreen: n,
      inOfferExperience: eo,
      setIsAllPerksVisible: ea
    }),
    (0, s.jsx)(V, {
      isFullscreen: n
    }),
    (0, s.jsxs)('div', {
      className: k.planComparisonTableContainer,
      children: [
        (0, s.jsx)(Z.Z, {
          className: k.planComparisonTable,
          hideCTAs: !0
        }),
        n ? (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(c.Image, {
              src: w,
              className: k.tableLeftSideDecoration,
              width: 197,
              height: 486,
              zoomable: !1
            }),
            (0, s.jsx)(c.Image, {
              src: F,
              className: k.tableRightSideDecoration,
              width: 241,
              height: 552,
              zoomable: !1
            })
          ]
        }) : null
      ]
    }),
    (0, s.jsx)('div', {
      className: n ? k.footerSpacingFullscreen : k.footerSpacing
    }),
    (0, s.jsx)(L.Z, {
      isVisible: !O && !v && Q,
      isFullscreen: n,
      subscriptionTier: ee
    }),
    (0, s.jsx)(o.$, {
      onChange: e => {
        e && !Y && (I.default.track(y.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
          location_stack: ed
        }), z(!0));
      },
      children: (0, s.jsx)('div', {
        className: k.bottomOfPageVisibilitySensor
      })
    }),
    (0, s.jsx)(c.Image, {
      src: H,
      className: k.bottomIllustration,
      width: 112,
      height: 85,
      zoomable: !1
    })
  ]
});
  return n ? (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(c.AdvancedScrollerAuto, {
    className: k.scroller,
    ref: x,
    children: eE
  }),
  (0, s.jsx)(j.Z, {
    previousComponent: B.MQ.MARKETING,
    isAllPerksVisible: es,
    setIsAllPerksVisible: ea,
    isFullScreen: n
  })
]
  }) : eE;
};