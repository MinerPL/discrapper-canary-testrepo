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
  P = s("419854"),
  O = s("568126"),
  M = s("605289"),
  h = s("248042"),
  L = s("823188"),
  x = s("65536"),
  v = s("135785"),
  b = s("498765"),
  D = s("635921"),
  U = s("803687"),
  j = s("177839"),
  G = s("794484"),
  y = s("392521"),
  B = s("349803"),
  k = s("179984"),
  H = s("409100"),
  F = s("391110"),
  w = s("71363"),
  W = s("781800"),
  K = s("474936"),
  V = s("981631"),
  Y = s("990504"),
  z = s("865215"),
  X = s("781922"),
  Q = s("735035"),
  J = s("786362");
let Z = e => {
    let {
      isVisible: t,
      isMarketingPageOptimizationEnabled: s,
      children: r
    } = e, i = (0, l.useStateFromStores)([E.default], () => E.default.useReducedMotion);
    return !s || i ? (0, a.jsx)(a.Fragment, {
      children: r
    }) : (0, a.jsx)(x.AnimatedWrapper, {
      isVisible: t,
      children: r
    })
  },
  q = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s
    } = e;
    return t && null == s || s === K.PremiumTypes.TIER_2 && t ? null : (0, a.jsx)(j.default, {
      selectedPremiumType: s,
      className: t ? Y.perkCardsContainerSpacingFullscreen : Y.perkCardsContainerSpacingSettings
    })
  },
  $ = e => {
    let {
      isFullscreen: t,
      inOfferExperience: s,
      isMarketingPageOptimizationEnabled: r
    } = e;
    return t || s || r ? r ? (0, a.jsx)("img", {
      alt: "starry sky background header splash",
      className: Y.dynamicImage,
      src: X
    }) : (0, a.jsx)(b.default, {
      lifted: !t && s
    }) : null
  },
  ee = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s,
      isMarketingPageOptimizationEnabled: r,
      inOfferExperience: i,
      setIsAllPerksVisible: l
    } = e;
    return (t || r) && (!r || s !== K.PremiumTypes.TIER_0) ? (0, a.jsxs)("div", {
      className: n()({
        [Y.whatsNewSectionBackground]: !r,
        [Y.whatsNewSection]: r
      }),
      children: [(0, a.jsx)(G.default, {
        headerClassname: r ? Y.stackedHeader : void 0,
        variant: F.PerksDiscoverabilityCardSection.WHATS_NEW,
        isFullScreen: t
      }), (0, a.jsx)(G.default, {
        headerClassname: r ? Y.stackedHeader : void 0,
        isFullScreen: t,
        showAllPerksButton: t ? (0, a.jsx)(W.default, {
          setIsAllPerksVisible: l,
          previousComponent: F.NitroLandingPages.MARKETING
        }) : void 0
      }), i && !r ? (0, a.jsx)(y.default, {
        className: Y.pdSparklesTop,
        variant: y.SparkleVariants.TOP
      }) : null, i && !r ? (0, a.jsx)(y.default, {
        className: Y.pdSparklesBottom,
        variant: y.SparkleVariants.BOTTOM
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
  }), x = r.useRef(null), [b, j] = r.useState(!1), [G, y] = r.useState(!1), [W, X] = r.useState(!1), et = !b && !G || E, [es, ea] = r.useState(!1), er = (0, l.useStateFromStores)([R.default], () => R.default.getPremiumTypeSubscription()), [ei, en] = r.useState(E ? K.PremiumTypes.TIER_2 : void 0), el = null != er ? (0, m.getPremiumPlanItem)(er) : null, eo = null != el ? m.default.getSkuIdForPlan(el.planId) : null, eu = null !== eo && eo !== K.PremiumSubscriptionSKUs.TIER_2 ? K.PremiumSubscriptionSKUs.TIER_2 : null, ed = (0, p.useLocalizedPromoQuery)(), ec = (0, u.isThemeLight)((0, _.default)()), e_ = null != ed, [eE, eT] = r.useState(!1), eI = (0, g.usePremiumDiscountOffer)(), eR = (0, C.usePremiumTrialOffer)(), ef = null == eR ? void 0 : null === (t = eR.subscription_trial) || void 0 === t ? void 0 : t.sku_id, eS = (0, A.useIsInPremiumOfferExperience)(), em = (0, h.useIsEligibleForBogoPromotion)(), {
    analyticsLocations: eA
  } = (0, I.default)(T.default.PREMIUM_MARKETING), eN = "PremiumMarketingHome";
  (0, c.useTriggerDebuggingAA)({
    location: eN + " auto on",
    autoTrackExposure: !0
  }), (0, c.useTriggerDebuggingAA)({
    location: eN + " auto off",
    autoTrackExposure: !1
  }), r.useEffect(() => {
    ea(!0)
  }, []), r.useEffect(() => {
    en(E ? K.PremiumTypes.TIER_2 : void 0)
  }, [E]);
  let ep = E ? {
      borderRadius: "24px"
    } : void 0,
    eg = (0, a.jsxs)("div", {
      className: n()(Y.container, {
        [Y.settingsContainer]: !s && !E
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(v.default, {
        premiumSubscription: er,
        className: n()(s ? Y.fullscreenExistingSubscriberSpacing : Y.existingSubscriberSpacing, {
          [Y.zIndex1]: eS
        }),
        isFullscreen: s,
        textColor: E && ec ? "text-normal" : void 0
      }), (0, a.jsx)($, {
        isFullscreen: s,
        inOfferExperience: eS,
        isMarketingPageOptimizationEnabled: E
      }), !s && e_ ? (0, a.jsx)(M.default, {
        localizedPricingPromo: ed,
        smallGap: !0
      }) : (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => j(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(D.default, {
          subscriptionTier: eu,
          isFullscreen: s || eS,
          className: n()({
            [Y.fullscreenHero]: s && !E,
            [Y.fullscreenHeroMarketingOptimization]: E,
            [Y.settingsHeroNoBackground]: !s && eS,
            [Y.trialMarketingMargin]: eS && !E,
            [Y.settingsHeroBogoHeight]: !s && em,
            [Y.settingsHeroBogoMarginFullscreen]: s && em,
            [Y.noTopPaddingOverride]: null != er
          }),
          hideSparkles: E,
          hideSubscribeAndGiftButton: E,
          entrypoint: i
        })
      }), E && null != ei && (0, a.jsx)(U.default, {
        setSelectedPremiumType: en,
        selectedPremiumType: ei
      }), (0, a.jsxs)("div", {
        className: n()({
          [Y.premiumStackedTierCardsContainerFullscreen]: s && E,
          [Y.premiumTierCardsContainerSettings]: !s && !E,
          [Y.premiumStackedTierCardsContainerSettings]: !s && E,
          [Y.premiumTierCardsContainerFullscreen]: s && !E
        }),
        children: [(0, a.jsx)(P.default, {
          isFullscreen: s
        }), s && e_ && (0, a.jsx)(O.default, {
          localizedPricingPromo: ed
        }), (0, a.jsx)(o.VisibilitySensor, {
          onChange: e => y(e),
          threshold: .1,
          active: !0,
          children: (0, a.jsx)(L.default, {
            showWumpus: !E,
            variant: E ? L.PremiumTierCardsVariant.STACKED : L.PremiumTierCardsVariant.DEFAULT,
            isFullScreen: s,
            selectedPremiumType: E ? ei : void 0,
            tier0CTAButton: ef === K.PremiumSubscriptionSKUs.TIER_2 || em || null != eI ? (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_0,
              className: n()({
                [Y.marginTopForButtons]: !E,
                [Y.roundedSubscribeButton]: E
              }),
              style: ep,
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: E ? Y.buttonShine : void 0
            }) : (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_0,
              style: ep,
              className: n()({
                [Y.marginTopForButtons]: !E,
                [Y.roundedSubscribeButton]: E
              }),
              buttonShineClassName: E ? Y.buttonShine : void 0
            }),
            tier2CTAButton: ef === K.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
              style: ep,
              className: n()({
                [Y.marginTopForButtons]: !E,
                [Y.roundedSubscribeButton]: E
              }),
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: E ? Y.buttonShine : void 0
            }) : (0, a.jsx)(H.default, {
              forceInverted: !0,
              style: ep,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
              className: n()({
                [Y.marginTopForButtons]: !E,
                [Y.roundedSubscribeButton]: E
              }),
              isEligibleForBogoPromotion: em,
              buttonShineClassName: E ? Y.buttonShine : void 0
            })
          })
        })]
      }), (0, a.jsx)(Z, {
        isVisible: ei === K.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: E,
        children: (0, a.jsx)(ee, {
          isFullscreen: s,
          inOfferExperience: eS,
          selectedPremiumType: ei,
          isMarketingPageOptimizationEnabled: E,
          setIsAllPerksVisible: eT
        })
      }), (0, a.jsx)(Z, {
        isVisible: ei === K.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: E,
        children: (ei === K.PremiumTypes.TIER_2 || null == ei) && (0, a.jsx)(q, {
          isFullscreen: s,
          selectedPremiumType: ei
        })
      }), E && (0, a.jsx)(Z, {
        isVisible: ei === K.PremiumTypes.TIER_0,
        isMarketingPageOptimizationEnabled: E,
        children: ei === K.PremiumTypes.TIER_0 && (0, a.jsx)(q, {
          isFullscreen: s,
          selectedPremiumType: ei
        })
      }), (0, a.jsxs)("div", {
        className: Y.planComparisonTableContainer,
        children: [(0, a.jsx)(k.default, {
          className: Y.planComparisonTable,
          hideCTAs: !0,
          selectedPlanTier: ei
        }), s ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(f.default, {
            src: Q,
            className: Y.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(f.default, {
            src: J,
            className: Y.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, a.jsx)("div", {
        className: s ? Y.footerSpacingFullscreen : Y.footerSpacing
      }), (0, a.jsx)(B.default, {
        isVisible: et && es,
        isFullscreen: s,
        subscriptionTier: null != eu ? eu : m.default.getSkuIdForPremiumType(ei)
      }), (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => {
          e && !W && (S.default.track(V.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eA
          }), X(!0))
        },
        children: (0, a.jsx)("div", {
          className: Y.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(f.default, {
        src: z,
        className: Y.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
  return s ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(d.AdvancedScrollerAuto, {
      className: Y.scroller,
      ref: x,
      children: eg
    }), (ei === K.PremiumTypes.TIER_2 || null == ei) && (0, a.jsx)(w.default, {
      previousComponent: F.NitroLandingPages.MARKETING,
      isAllPerksVisible: eE,
      setIsAllPerksVisible: eT,
      isFullScreen: s
    })]
  }) : eg
}