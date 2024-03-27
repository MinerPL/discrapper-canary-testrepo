"use strict";
s.r(t), s.d(t, {
  default: function() {
    return et
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  i = s("414456"),
  n = s.n(i),
  l = s("446674"),
  o = s("290381"),
  u = s("819855"),
  d = s("77078"),
  c = s("875212"),
  _ = s("841098"),
  E = s("206230"),
  T = s("812204"),
  I = s("685665"),
  f = s("521012"),
  R = s("594098"),
  S = s("599110"),
  m = s("719923"),
  N = s("182650"),
  A = s("527715"),
  p = s("959905"),
  C = s("154889"),
  g = s("917247"),
  O = s("460680"),
  P = s("411205"),
  M = s("934570"),
  h = s("641078"),
  L = s("400307"),
  x = s("521322"),
  v = s("159646"),
  D = s("379521"),
  U = s("958966"),
  b = s("149102"),
  j = s("830648"),
  B = s("627474"),
  G = s("904871"),
  y = s("360776"),
  k = s("525505"),
  H = s("881155"),
  F = s("907648"),
  w = s("326881"),
  W = s("228967"),
  K = s("646718"),
  V = s("49111"),
  Y = s("660261"),
  z = s("679324"),
  X = s("575066"),
  Q = s("905498"),
  Z = s("452637");
let J = e => {
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
    } = e, r = t && null == s || s === K.PremiumTypes.TIER_2 && t;
    return r ? null : (0, a.jsx)(j.default, {
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
    }) : (0, a.jsx)(D.default, {
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
      className: n({
        [Y.whatsNewSectionBackground]: !r,
        [Y.whatsNewSection]: r
      }),
      children: [(0, a.jsx)(B.default, {
        headerClassname: r ? Y.stackedHeader : void 0,
        variant: F.PerksDiscoverabilityCardSection.WHATS_NEW,
        isFullScreen: t
      }), (0, a.jsx)(B.default, {
        headerClassname: r ? Y.stackedHeader : void 0,
        isFullScreen: t,
        showAllPerksButton: t ? (0, a.jsx)(W.default, {
          setIsAllPerksVisible: l,
          previousComponent: F.NitroLandingPages.MARKETING
        }) : void 0
      }), i && !r ? (0, a.jsx)(G.default, {
        className: Y.pdSparklesTop,
        variant: G.SparkleVariants.TOP
      }) : null, i && !r ? (0, a.jsx)(G.default, {
        className: Y.pdSparklesBottom,
        variant: G.SparkleVariants.BOTTOM
      }) : null]
    }) : null
  };
var et = e => {
  var t;
  let {
    isFullscreen: s
  } = e, i = (0, A.useMarketingOptimizationExperiment)({
    autoTrackExposure: !0
  }), E = r.useRef(null), [x, D] = r.useState(!1), [j, B] = r.useState(!1), [G, W] = r.useState(!1), X = !x && !j || i, [et, es] = r.useState(!1), ea = (0, l.useStateFromStores)([f.default], () => f.default.getPremiumTypeSubscription()), [er, ei] = r.useState(i ? K.PremiumTypes.TIER_2 : void 0), en = null != ea ? (0, m.getPremiumPlanItem)(ea) : null, el = null != en ? m.default.getSkuIdForPlan(en.planId) : null, eo = null !== el && el !== K.PremiumSubscriptionSKUs.TIER_2 ? K.PremiumSubscriptionSKUs.TIER_2 : null, eu = (0, p.useLocalizedPromoQuery)(), ed = (0, u.isThemeLight)((0, _.default)()), ec = null != eu, [e_, eE] = r.useState(!1), eT = (0, C.usePremiumDiscountOffer)(), eI = (0, g.usePremiumTrialOffer)(), ef = null == eI ? void 0 : null === (t = eI.subscription_trial) || void 0 === t ? void 0 : t.sku_id, eR = (0, N.useIsInPremiumOfferExperience)(), eS = (0, h.useIsEligibleForBogoPromotion)(), {
    analyticsLocations: em
  } = (0, I.default)(T.default.PREMIUM_MARKETING), eN = "PremiumMarketingHome";
  (0, c.useTriggerDebuggingAA)({
    location: eN + " auto on",
    autoTrackExposure: !0
  }), (0, c.useTriggerDebuggingAA)({
    location: eN + " auto off",
    autoTrackExposure: !1
  }), r.useEffect(() => {
    es(!0)
  }, []), r.useEffect(() => {
    ei(i ? K.PremiumTypes.TIER_2 : void 0)
  }, [i]);
  let eA = i ? {
      borderRadius: "24px"
    } : void 0,
    ep = (0, a.jsxs)("div", {
      className: n(Y.container, {
        [Y.settingsContainer]: !s && !i
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(v.default, {
        premiumSubscription: ea,
        className: n(s ? Y.fullscreenExistingSubscriberSpacing : Y.existingSubscriberSpacing, {
          [Y.zIndex1]: eR
        }),
        isFullscreen: s,
        textColor: i && ed ? "text-normal" : void 0
      }), (0, a.jsx)($, {
        isFullscreen: s,
        inOfferExperience: eR,
        isMarketingPageOptimizationEnabled: i
      }), !s && ec ? (0, a.jsx)(M.default, {
        localizedPricingPromo: eu,
        smallGap: !0
      }) : (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => D(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(U.default, {
          subscriptionTier: eo,
          isFullscreen: s || eR,
          className: n({
            [Y.fullscreenHero]: s && !i,
            [Y.fullscreenHeroMarketingOptimization]: i,
            [Y.settingsHeroNoBackground]: !s && eR,
            [Y.trialMarketingMargin]: eR && !i,
            [Y.settingsHeroBogoHeight]: !s && eS,
            [Y.settingsHeroBogoMarginFullscreen]: s && eS,
            [Y.noTopPaddingOverride]: null != ea
          }),
          hideSparkles: i,
          hideSubscribeAndGiftButton: i
        })
      }), i && null != er && (0, a.jsx)(b.default, {
        setSelectedPremiumType: ei,
        selectedPremiumType: er
      }), (0, a.jsxs)("div", {
        className: n({
          [Y.premiumStackedTierCardsContainerFullscreen]: s && i,
          [Y.premiumTierCardsContainerSettings]: !s && !i,
          [Y.premiumStackedTierCardsContainerSettings]: !s && i,
          [Y.premiumTierCardsContainerFullscreen]: s && !i
        }),
        children: [(0, a.jsx)(O.default, {
          isFullscreen: s
        }), s && ec && (0, a.jsx)(P.default, {
          localizedPricingPromo: eu
        }), (0, a.jsx)(o.VisibilitySensor, {
          onChange: e => B(e),
          threshold: .1,
          active: !0,
          children: (0, a.jsx)(L.default, {
            showWumpus: !i,
            variant: i ? L.PremiumTierCardsVariant.STACKED : L.PremiumTierCardsVariant.DEFAULT,
            isFullScreen: s,
            selectedPremiumType: i ? er : void 0,
            tier0CTAButton: ef === K.PremiumSubscriptionSKUs.TIER_2 || eS || null != eT ? (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_0,
              className: n({
                [Y.marginTopForButtons]: !i,
                [Y.roundedSubscribeButton]: i
              }),
              style: eA,
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: i ? Y.buttonShine : void 0
            }) : (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_0,
              style: eA,
              className: n({
                [Y.marginTopForButtons]: !i,
                [Y.roundedSubscribeButton]: i
              }),
              buttonShineClassName: i ? Y.buttonShine : void 0
            }),
            tier2CTAButton: ef === K.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(H.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
              style: eA,
              className: n({
                [Y.marginTopForButtons]: !i,
                [Y.roundedSubscribeButton]: i
              }),
              look: d.ButtonLooks.OUTLINED,
              color: d.ButtonColors.WHITE,
              buttonShineClassName: i ? Y.buttonShine : void 0
            }) : (0, a.jsx)(H.default, {
              forceInverted: !0,
              style: eA,
              showIcon: !1,
              subscriptionTier: K.PremiumSubscriptionSKUs.TIER_2,
              className: n({
                [Y.marginTopForButtons]: !i,
                [Y.roundedSubscribeButton]: i
              }),
              isEligibleForBogoPromotion: eS,
              buttonShineClassName: i ? Y.buttonShine : void 0
            })
          })
        })]
      }), (0, a.jsx)(J, {
        isVisible: er === K.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: i,
        children: (0, a.jsx)(ee, {
          isFullscreen: s,
          inOfferExperience: eR,
          selectedPremiumType: er,
          isMarketingPageOptimizationEnabled: i,
          setIsAllPerksVisible: eE
        })
      }), (0, a.jsx)(J, {
        isVisible: er === K.PremiumTypes.TIER_2,
        isMarketingPageOptimizationEnabled: i,
        children: (er === K.PremiumTypes.TIER_2 || null == er) && (0, a.jsx)(q, {
          isFullscreen: s,
          selectedPremiumType: er
        })
      }), i && (0, a.jsx)(J, {
        isVisible: er === K.PremiumTypes.TIER_0,
        isMarketingPageOptimizationEnabled: i,
        children: er === K.PremiumTypes.TIER_0 && (0, a.jsx)(q, {
          isFullscreen: s,
          selectedPremiumType: er
        })
      }), (0, a.jsxs)("div", {
        className: Y.planComparisonTableContainer,
        children: [(0, a.jsx)(k.default, {
          className: Y.planComparisonTable,
          hideCTAs: !0,
          selectedPlanTier: er
        }), s ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(R.default, {
            src: Q,
            className: Y.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(R.default, {
            src: Z,
            className: Y.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, a.jsx)("div", {
        className: s ? Y.footerSpacingFullscreen : Y.footerSpacing
      }), (0, a.jsx)(y.default, {
        isVisible: X && et,
        isFullscreen: s,
        subscriptionTier: null != eo ? eo : m.default.getSkuIdForPremiumType(er)
      }), (0, a.jsx)(o.VisibilitySensor, {
        onChange: e => {
          e && !G && (S.default.track(V.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: em
          }), W(!0))
        },
        children: (0, a.jsx)("div", {
          className: Y.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(R.default, {
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
    }), (er === K.PremiumTypes.TIER_2 || null == er) && (0, a.jsx)(w.default, {
      previousComponent: F.NitroLandingPages.MARKETING,
      isAllPerksVisible: e_,
      setIsAllPerksVisible: eE
    })]
  }) : ep
}