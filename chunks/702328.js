"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("442837"),
  o = s("622535"),
  u = s("780384"),
  d = s("481060"),
  c = s("634894"),
  _ = s("410030"),
  E = s("607070"),
  T = s("100527"),
  I = s("906732"),
  R = s("78839"),
  f = s("332475"),
  S = s("626135"),
  m = s("74538"),
  A = s("140465"),
  N = s("846363"),
  p = s("91802"),
  g = s("104494"),
  C = s("639119"),
  P = s("764081"),
  O = s("419854"),
  M = s("568126"),
  h = s("605289"),
  L = s("248042"),
  x = s("823188"),
  v = s("65536"),
  b = s("639336"),
  D = s("498765"),
  U = s("635921"),
  j = s("803687"),
  y = s("177839"),
  B = s("794484"),
  G = s("392521"),
  k = s("349803"),
  H = s("179984"),
  F = s("409100"),
  w = s("391110"),
  K = s("71363"),
  W = s("781800"),
  V = s("474936"),
  Y = s("981631"),
  z = s("594209"),
  X = s("865215"),
  Q = s("781922"),
  Z = s("735035"),
  J = s("786362");
let q = e => {
    let {
      isVisible: t,
      isMarketingPageOptimizationEnabled: s,
      children: r
    } = e, i = (0, l.useStateFromStores)([E.default], () => E.default.useReducedMotion);
    return !s || i ? (0, a.jsx)(a.Fragment, {
      children: r
    }) : (0, a.jsx)(v.AnimatedWrapper, {
      isVisible: t,
      children: r
    })
  },
  $ = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s
    } = e;
    return t && null == s || s === V.PremiumTypes.TIER_2 && t ? null : (0, a.jsx)(y.default, {
      selectedPremiumType: s,
      className: t ? z.perkCardsContainerSpacingFullscreen : z.perkCardsContainerSpacingSettings
    })
  },
  ee = e => {
    let {
      isFullscreen: t,
      inOfferExperience: s,
      isMarketingPageOptimizationEnabled: r
    } = e;
    return t || s || r ? r ? (0, a.jsx)("img", {
      alt: "starry sky background header splash",
      className: z.dynamicImage,
      src: Q
    }) : (0, a.jsx)(D.default, {
      lifted: !t && s
    }) : null
  },
  et = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s,
      isMarketingPageOptimizationEnabled: r,
      inOfferExperience: i,
      setIsAllPerksVisible: l
    } = e;
    return (t || r) && (!r || s !== V.PremiumTypes.TIER_0) ? (0, a.jsxs)("div", {
      className: n()({
        [z.whatsNewSectionBackground]: !r,
        [z.whatsNewSection]: r
      }),
      children: [(0, a.jsx)(B.default, {
        headerClassname: r ? z.stackedHeader : void 0,
        variant: w.PerksDiscoverabilityCardSection.WHATS_NEW,
        isFullScreen: t
      }), (0, a.jsx)(B.default, {
        headerClassname: r ? z.stackedHeader : void 0,
        isFullScreen: t,
        showAllPerksButton: t ? (0, a.jsx)(W.default, {
          setIsAllPerksVisible: l,
          previousComponent: w.NitroLandingPages.MARKETING
        }) : void 0
      }), i && !r ? (0, a.jsx)(G.default, {
        className: z.pdSparklesTop,
        variant: G.SparkleVariants.TOP
      }) : null, i && !r ? (0, a.jsx)(G.default, {
        className: z.pdSparklesBottom,
        variant: G.SparkleVariants.BOTTOM
      }) : null]
    }) : null
  };
t.default = e => {
  var t;
  let {
    isFullscreen: s,
    entrypoint: i
  } = e, E = (0, N.useMarketingOptimizationExperiment)({
    autoTrackExposure: !0
  }), v = r.useRef(null), [D, y] = r.useState(!1), [B, G] = r.useState(!1), [W, Q] = r.useState(!1), es = !D && !B || E, [ea, er] = r.useState(!1), ei = (0, l.useStateFromStores)([R.default], () => R.default.getPremiumTypeSubscription()), [en, el] = r.useState(E ? V.PremiumTypes.TIER_2 : void 0), eo = null != ei ? (0, m.getPremiumPlanItem)(ei) : null, eu = null != eo ? m.default.getSkuIdForPlan(eo.planId) : null, ed = null !== eu && eu !== V.PremiumSubscriptionSKUs.TIER_2 ? V.PremiumSubscriptionSKUs.TIER_2 : null, ec = (0, p.useLocalizedPromoQuery)(), e_ = (0, u.isThemeLight)((0, _.default)()), eE = null != ec, [eT, eI] = r.useState(!1), eR = (0, g.usePremiumDiscountOffer)(), ef = (0, C.usePremiumTrialOffer)(), eS = null == ef ? void 0 : null === (t = ef.subscription_trial) || void 0 === t ? void 0 : t.sku_id, em = (0, A.useIsInPremiumOfferExperience)(), eA = (0, L.useIsEligibleForBogoPromotion)(), {
    analyticsLocations: eN
  } = (0, I.default)(T.default.PREMIUM_MARKETING), ep = "PremiumMarketingHome";
  (0, c.useTriggerDebuggingAA)({
    location: ep + " auto on",
    autoTrackExposure: !0
  }), (0, c.useTriggerDebuggingAA)({
    location: ep + " auto off",
    autoTrackExposure: !1
  }), r.useEffect(() => {
    er(!0)
  }, []), r.useEffect(() => {
    el(E ? V.PremiumTypes.TIER_2 : void 0)
  }, [E]);
  let eg = E ? {
      borderRadius: "24px"
    } : void 0,
    eC = (0, a.jsxs)("div", {
      className: n()(z.container, {
        [z.settingsContainer]: !s && !E
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(b.default, {
        premiumSubscription: ei,
        className: n()(s ? z.fullscreenExistingSubscriberSpacing : z.existingSubscriberSpacing, {
          [z.zIndex1]: em
        }),
        isFullscreen: s,
        textColor: E && e_ ? "text-normal" : void 0
      }), (0, a.jsx)(ee, {
        isFullscreen: s,
        inOfferExperience: em,
        isMarketingPageOptimizationEnabled: E
      }), !s && eE ? (0, a.jsx)(h.default, {
        localizedPricingPromo: ec,
        smallGap: !0
      }) : (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => y(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(U.default, {
          subscriptionTier: ed,
          isFullscreen: s || em,
          className: n()({
            [z.fullscreenHero]: s && !E,
            [z.fullscreenHeroMarketingOptimization]: E,
            [z.settingsHeroNoBackground]: !s && em,
            [z.trialMarketingMargin]: em && !E,
            [z.settingsHeroBogoHeight]: !s && eA,
            [z.settingsHeroBogoMarginFullscreen]: s && eA,
            [z.noTopPaddingOverride]: null != ei
          }),
          hideSparkles: E,
          hideSubscribeAndGiftButton: E,
          entrypoint: i
        })
      }), E && null != en && (0, a.jsx)(j.default, {
        setSelectedPremiumType: el,
        selectedPremiumType: en
      }), (0, a.jsxs)("div", {
        className: n()({
          [z.premiumStackedTierCardsContainerFullscreen]: s && E,
          [z.premiumTierCardsContainerSettings]: !s && !E,
          [z.premiumStackedTierCardsContainerSettings]: !s && E,
          [z.premiumTierCardsContainerFullscreen]: s && !E
        }),
        children: [(0, a.jsx)(O.default, {
          isFullscreen: s
        }), (0, a.jsx)(P.default, {
          isFullscreen: s
        }), s && eE && (0, a.jsx)(M.default, {
          localizedPricingPromo: ec
        }), (0, a.jsx)(o.VisibilitySensor, {
          onChange: e => G(e),
          threshold: .1,
          active: !0,
          children: (0, a.jsx)(x.default, {
            showWumpus: !E,
            variant: E ? x.PremiumTierCardsVariant.STACKED : x.PremiumTierCardsVariant.DEFAULT,
            isFullScreen: s,
            selectedPremiumType: E ? en : void 0,
            tier0CTAButton: eS === V.PremiumSubscriptionSKUs.TIER_2 || eA || null != eR ? (0, a.jsx)(F.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: V.PremiumSubscriptionSKUs.TIER_0,
              className: n()({
                [z.marginTopForButtons]: !E,
                [z.roundedSubscribeButton]: E
              }),
              style: eg,
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: E ? z.buttonShine : void 0
            }) : (0, a.jsx)(F.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: V.PremiumSubscriptionSKUs.TIER_0,
              style: eg,
              className: n()({
                [z.marginTopForButtons]: !E,
                [z.roundedSubscribeButton]: E
              }),
              buttonShineClassName: E ? z.buttonShine : void 0
            }),
            tier2CTAButton: eS === V.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(F.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: V.PremiumSubscriptionSKUs.TIER_2,
              style: eg,
              className: n()({
                [z.marginTopForButtons]: !E,
                [z.roundedSubscribeButton]: E
              }),
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: E ? z.buttonShine : void 0
            }) : (0, a.jsx)(F.default, {
              forceInverted: !0,
              style: eg,
              showIcon: !1,
              subscriptionTier: V.PremiumSubscriptionSKUs.TIER_2,
              className: n()({
                [z.marginTopForButtons]: !E,
                [z.roundedSubscribeButton]: E
              }),
              isEligibleForBogoPromotion: eA,
              buttonShineClassName: E ? z.buttonShine : void 0
            })
          })
        })]
      }), (0, a.jsx)(q, {
        isVisible: en === V.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: E,
        children: (0, a.jsx)(et, {
          isFullscreen: s,
          inOfferExperience: em,
          selectedPremiumType: en,
          isMarketingPageOptimizationEnabled: E,
          setIsAllPerksVisible: eI
        })
      }), (0, a.jsx)(q, {
        isVisible: en === V.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: E,
        children: (en === V.PremiumTypes.TIER_2 || null == en) && (0, a.jsx)($, {
          isFullscreen: s,
          selectedPremiumType: en
        })
      }), E && (0, a.jsx)(q, {
        isVisible: en === V.PremiumTypes.TIER_0,
        isMarketingPageOptimizationEnabled: E,
        children: en === V.PremiumTypes.TIER_0 && (0, a.jsx)($, {
          isFullscreen: s,
          selectedPremiumType: en
        })
      }), (0, a.jsxs)("div", {
        className: z.planComparisonTableContainer,
        children: [(0, a.jsx)(H.default, {
          className: z.planComparisonTable,
          hideCTAs: !0,
          selectedPlanTier: en
        }), s ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(f.default, {
            src: Z,
            className: z.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(f.default, {
            src: J,
            className: z.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, a.jsx)("div", {
        className: s ? z.footerSpacingFullscreen : z.footerSpacing
      }), (0, a.jsx)(k.default, {
        isVisible: es && ea,
        isFullscreen: s,
        subscriptionTier: null != ed ? ed : m.default.getSkuIdForPremiumType(en)
      }), (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => {
          e && !W && (S.default.track(Y.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eN
          }), Q(!0))
        },
        children: (0, a.jsx)("div", {
          className: z.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(f.default, {
        src: X,
        className: z.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
  return s ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.AdvancedScrollerAuto, {
      className: z.scroller,
      ref: v,
      children: eC
    }), (en === V.PremiumTypes.TIER_2 || null == en) && (0, a.jsx)(K.default, {
      previousComponent: w.NitroLandingPages.MARKETING,
      isAllPerksVisible: eT,
      setIsAllPerksVisible: eI,
      isFullScreen: s
    })]
  }) : eC
}