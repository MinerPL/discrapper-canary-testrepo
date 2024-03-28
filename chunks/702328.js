"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  n = s.n(r),
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
  S = s("332475"),
  f = s("626135"),
  m = s("74538"),
  N = s("140465"),
  A = s("846363"),
  p = s("91802"),
  C = s("104494"),
  g = s("639119"),
  O = s("419854"),
  P = s("568126"),
  M = s("605289"),
  h = s("248042"),
  L = s("823188"),
  x = s("65536"),
  v = s("135785"),
  D = s("498765"),
  b = s("635921"),
  U = s("803687"),
  j = s("177839"),
  y = s("794484"),
  B = s("392521"),
  G = s("349803"),
  k = s("179984"),
  H = s("409100"),
  F = s("391110"),
  w = s("71363"),
  W = s("781800"),
  K = s("474936"),
  V = s("981631"),
  Y = s("336023"),
  z = s("865215"),
  X = s("781922"),
  Q = s("735035"),
  Z = s("786362");
let J = e => {
    let {
      isVisible: t,
      isMarketingPageOptimizationEnabled: s,
      children: i
    } = e, r = (0, l.useStateFromStores)([E.default], () => E.default.useReducedMotion);
    return !s || r ? (0, a.jsx)(a.Fragment, {
      children: i
    }) : (0, a.jsx)(x.AnimatedWrapper, {
      isVisible: t,
      children: i
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
      isMarketingPageOptimizationEnabled: i
    } = e;
    return t || s || i ? i ? (0, a.jsx)("img", {
      alt: "starry sky background header splash",
      className: Y.dynamicImage,
      src: X
    }) : (0, a.jsx)(D.default, {
      lifted: !t && s
    }) : null
  },
  ee = e => {
    let {
      isFullscreen: t,
      selectedPremiumType: s,
      isMarketingPageOptimizationEnabled: i,
      inOfferExperience: r,
      setIsAllPerksVisible: l
    } = e;
    return (t || i) && (!i || s !== K.PremiumTypes.TIER_0) ? (0, a.jsxs)("div", {
      className: n()({
        [Y.whatsNewSectionBackground]: !i,
        [Y.whatsNewSection]: i
      }),
      children: [(0, a.jsx)(y.default, {
        headerClassname: i ? Y.stackedHeader : void 0,
        variant: F.PerksDiscoverabilityCardSection.WHATS_NEW,
        isFullScreen: t
      }), (0, a.jsx)(y.default, {
        headerClassname: i ? Y.stackedHeader : void 0,
        isFullScreen: t,
        showAllPerksButton: t ? (0, a.jsx)(W.default, {
          setIsAllPerksVisible: l,
          previousComponent: F.NitroLandingPages.MARKETING
        }) : void 0
      }), r && !i ? (0, a.jsx)(B.default, {
        className: Y.pdSparklesTop,
        variant: B.SparkleVariants.TOP
      }) : null, r && !i ? (0, a.jsx)(B.default, {
        className: Y.pdSparklesBottom,
        variant: B.SparkleVariants.BOTTOM
      }) : null]
    }) : null
  };
t.default = e => {
  var t;
  let {
    isFullscreen: s
  } = e, r = (0, A.useMarketingOptimizationExperiment)({
    autoTrackExposure: !0
  }), E = i.useRef(null), [x, D] = i.useState(!1), [j, y] = i.useState(!1), [B, W] = i.useState(!1), X = !x && !j || r, [et, es] = i.useState(!1), ea = (0, l.useStateFromStores)([R.default], () => R.default.getPremiumTypeSubscription()), [ei, er] = i.useState(r ? K.PremiumTypes.TIER_2 : void 0), en = null != ea ? (0, m.getPremiumPlanItem)(ea) : null, el = null != en ? m.default.getSkuIdForPlan(en.planId) : null, eo = null !== el && el !== K.PremiumSubscriptionSKUs.TIER_2 ? K.PremiumSubscriptionSKUs.TIER_2 : null, eu = (0, p.useLocalizedPromoQuery)(), ed = (0, u.isThemeLight)((0, _.default)()), ec = null != eu, [e_, eE] = i.useState(!1), eT = (0, C.usePremiumDiscountOffer)(), eI = (0, g.usePremiumTrialOffer)(), eR = null == eI ? void 0 : null === (t = eI.subscription_trial) || void 0 === t ? void 0 : t.sku_id, eS = (0, N.useIsInPremiumOfferExperience)(), ef = (0, h.useIsEligibleForBogoPromotion)(), {
    analyticsLocations: em
  } = (0, I.default)(T.default.PREMIUM_MARKETING), eN = "PremiumMarketingHome";
  (0, c.useTriggerDebuggingAA)({
    location: eN + " auto on",
    autoTrackExposure: !0
  }), (0, c.useTriggerDebuggingAA)({
    location: eN + " auto off",
    autoTrackExposure: !1
  }), i.useEffect(() => {
    es(!0)
  }, []), i.useEffect(() => {
    er(r ? K.PremiumTypes.TIER_2 : void 0)
  }, [r]);
  let eA = r ? {
      borderRadius: "24px"
    } : void 0,
    ep = (0, a.jsxs)("div", {
      className: n()(Y.container, {
        [Y.settingsContainer]: !s && !r
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(v.default, {
        premiumSubscription: ea,
        className: n()(s ? Y.fullscreenExistingSubscriberSpacing : Y.existingSubscriberSpacing, {
          [Y.zIndex1]: eS
        }),
        isFullscreen: s,
        textColor: r && ed ? "text-normal" : void 0
      }), (0, a.jsx)($, {
        isFullscreen: s,
        inOfferExperience: eS,
        isMarketingPageOptimizationEnabled: r
      }), !s && ec ? (0, a.jsx)(M.default, {
        localizedPricingPromo: eu,
        smallGap: !0
      }) : (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => D(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(b.default, {
          subscriptionTier: eo,
          isFullscreen: s || eS,
          className: n()({
            [Y.fullscreenHero]: s && !r,
            [Y.fullscreenHeroMarketingOptimization]: r,
            [Y.settingsHeroNoBackground]: !s && eS,
            [Y.trialMarketingMargin]: eS && !r,
            [Y.settingsHeroBogoHeight]: !s && ef,
            [Y.settingsHeroBogoMarginFullscreen]: s && ef,
            [Y.noTopPaddingOverride]: null != ea
          }),
          hideSparkles: r,
          hideSubscribeAndGiftButton: r
        })
      }), r && null != ei && (0, a.jsx)(U.default, {
        setSelectedPremiumType: er,
        selectedPremiumType: ei
      }), (0, a.jsxs)("div", {
        className: n()({
          [Y.premiumStackedTierCardsContainerFullscreen]: s && r,
          [Y.premiumTierCardsContainerSettings]: !s && !r,
          [Y.premiumStackedTierCardsContainerSettings]: !s && r,
          [Y.premiumTierCardsContainerFullscreen]: s && !r
        }),
        children: [(0, a.jsx)(O.default, {
          isFullscreen: s
        }), s && ec && (0, a.jsx)(P.default, {
          localizedPricingPromo: eu
        }), (0, a.jsx)(o.VisibilitySensor, {
          onChange: e => y(e),
          threshold: .1,
          active: !0,
          children: (0, a.jsx)(L.default, {
            showWumpus: !r,
            variant: r ? L.PremiumTierCardsVariant.STACKED : L.PremiumTierCardsVariant.DEFAULT,
            isFullScreen: s,
            selectedPremiumType: r ? ei : void 0,
            tier0CTAButton: eR === K.PremiumSubscriptionSKUs.TIER_2 || ef || null != eT ? (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_0,
              className: n()({
                [Y.marginTopForButtons]: !r,
                [Y.roundedSubscribeButton]: r
              }),
              style: eA,
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: r ? Y.buttonShine : void 0
            }) : (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_0,
              style: eA,
              className: n()({
                [Y.marginTopForButtons]: !r,
                [Y.roundedSubscribeButton]: r
              }),
              buttonShineClassName: r ? Y.buttonShine : void 0
            }),
            tier2CTAButton: eR === K.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
              style: eA,
              className: n()({
                [Y.marginTopForButtons]: !r,
                [Y.roundedSubscribeButton]: r
              }),
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: r ? Y.buttonShine : void 0
            }) : (0, a.jsx)(H.default, {
              forceInverted: !0,
              style: eA,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
              className: n()({
                [Y.marginTopForButtons]: !r,
                [Y.roundedSubscribeButton]: r
              }),
              isEligibleForBogoPromotion: ef,
              buttonShineClassName: r ? Y.buttonShine : void 0
            })
          })
        })]
      }), (0, a.jsx)(J, {
        isVisible: ei === K.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: r,
        children: (0, a.jsx)(ee, {
          isFullscreen: s,
          inOfferExperience: eS,
          selectedPremiumType: ei,
          isMarketingPageOptimizationEnabled: r,
          setIsAllPerksVisible: eE
        })
      }), (0, a.jsx)(J, {
        isVisible: ei === K.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: r,
        children: (ei === K.PremiumTypes.TIER_2 || null == ei) && (0, a.jsx)(q, {
          isFullscreen: s,
          selectedPremiumType: ei
        })
      }), r && (0, a.jsx)(J, {
        isVisible: ei === K.PremiumTypes.TIER_0,
        isMarketingPageOptimizationEnabled: r,
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
          children: [(0, a.jsx)(S.default, {
            src: Q,
            className: Y.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(S.default, {
            src: Z,
            className: Y.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, a.jsx)("div", {
        className: s ? Y.footerSpacingFullscreen : Y.footerSpacing
      }), (0, a.jsx)(G.default, {
        isVisible: X && et,
        isFullscreen: s,
        subscriptionTier: null != eo ? eo : m.default.getSkuIdForPremiumType(ei)
      }), (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => {
          e && !B && (f.default.track(V.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: em
          }), W(!0))
        },
        children: (0, a.jsx)("div", {
          className: Y.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(S.default, {
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
      ref: E,
      children: ep
    }), (ei === K.PremiumTypes.TIER_2 || null == ei) && (0, a.jsx)(w.default, {
      previousComponent: F.NitroLandingPages.MARKETING,
      isAllPerksVisible: e_,
      setIsAllPerksVisible: eE
    })]
  }) : ep
}