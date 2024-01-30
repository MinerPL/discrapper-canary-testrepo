"use strict";
s.r(t), s.d(t, {
  default: function() {
    return Y
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("414456"),
  l = s.n(n),
  i = s("446674"),
  u = s("290381"),
  o = s("77078"),
  d = s("875212"),
  c = s("812204"),
  _ = s("685665"),
  E = s("521012"),
  I = s("594098"),
  T = s("599110"),
  f = s("719923"),
  S = s("182650"),
  R = s("706922"),
  m = s("300962"),
  A = s("959905"),
  N = s("154889"),
  p = s("917247"),
  g = s("460680"),
  C = s("411205"),
  P = s("934570"),
  O = s("641078"),
  M = s("400307"),
  h = s("159646"),
  L = s("379521"),
  x = s("958966"),
  v = s("830648"),
  D = s("627474"),
  U = s("904871"),
  b = s("360776"),
  j = s("525505"),
  G = s("881155"),
  k = s("598739"),
  B = s("326881"),
  y = s("228967"),
  H = s("646718"),
  K = s("49111"),
  W = s("880552"),
  F = s("679324"),
  w = s("905498"),
  V = s("452637"),
  Y = e => {
    var t;
    let {
      isFullscreen: s
    } = e, n = r.useRef(null), [Y, z] = r.useState(!1), [Q, X] = r.useState(!1), [J, Z] = r.useState(!1), [q, $] = r.useState(!1), ee = (0, i.useStateFromStores)([E.default], () => E.default.getPremiumTypeSubscription()), {
      enabled: et
    } = (0, R.default)(), es = null != ee ? (0, f.getPremiumPlanItem)(ee) : null, ea = null != es ? f.default.getSkuIdForPlan(es.planId) : null, er = null !== ea && ea !== H.PremiumSubscriptionSKUs.TIER_2 ? H.PremiumSubscriptionSKUs.TIER_2 : null, en = (0, A.useLocalizedPromoQuery)(), el = null != en, [ei, eu] = r.useState(!1), eo = (0, N.usePremiumDiscountOffer)(), ed = (0, p.usePremiumTrialOffer)(), ec = null == ed ? void 0 : null === (t = ed.subscription_trial) || void 0 === t ? void 0 : t.sku_id, e_ = (0, S.useIsInPremiumOfferExperience)(), eE = (0, O.useIsEligibleForBogoPromotion)(), {
      enabled: eI
    } = (0, m.default)(), {
      analyticsLocations: eT
    } = (0, _.default)(c.default.PREMIUM_MARKETING), ef = "PremiumMarketingHome";
    (0, d.useTriggerDebuggingAA)({
      location: ef + " auto on",
      autoTrackExposure: !0
    }), (0, d.useTriggerDebuggingAA)({
      location: ef + " auto off",
      autoTrackExposure: !1
    }), r.useEffect(() => {
      $(!0)
    }, []);
    let eS = (0, a.jsxs)("div", {
      className: l(W.container, {
        [W.settingsContainer]: !s
      }),
      "data-cy": "tier-0-marketing-page",
      children: [(0, a.jsx)(h.default, {
        premiumSubscription: ee,
        className: l(s ? W.fullscreenExistingSubscriberSpacing : W.existingSubscriberSpacing, {
          [W.zIndex1]: e_
        }),
        isFullscreen: s
      }), s || e_ ? (0, a.jsx)(L.default, {
        lifted: !s && e_
      }) : null, !s && el ? (0, a.jsx)(P.default, {
        localizedPricingPromo: en,
        smallGap: !0
      }) : (0, a.jsx)(u.VisibilitySensor, {
        onChange: e => z(e),
        threshold: 0,
        active: !0,
        children: (0, a.jsx)(x.default, {
          subscriptionTier: er,
          isFullscreen: s || e_,
          className: l({
            [W.fullscreenHero]: s,
            [W.settingsHeroNoBackground]: !s && e_,
            [W.trialMarketingMargin]: e_,
            [W.settingsHeroBogoHeight]: !s && eE,
            [W.settingsHeroBogoMarginFullscreen]: s && eE,
            [W.noTopPaddingOverride]: null != ee
          })
        })
      }), (0, a.jsxs)("div", {
        className: s ? W.premiumTierCardsContainerFullscreen : W.premiumTierCardsContainerSettings,
        children: [(0, a.jsx)(g.default, {
          isFullscreen: s
        }), s && el && (0, a.jsx)(C.default, {
          localizedPricingPromo: en
        }), (0, a.jsx)(u.VisibilitySensor, {
          onChange: e => X(e),
          threshold: .1,
          active: !0,
          children: (0, a.jsx)(M.default, {
            showWumpus: !0,
            tier0CTAButton: ec === H.PremiumSubscriptionSKUs.TIER_2 || eE || null != eo ? (0, a.jsx)(G.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: H.PremiumSubscriptionSKUs.TIER_0,
              className: W.marginTopForButtons,
              look: o.ButtonLooks.OUTLINED,
              color: o.ButtonColors.WHITE,
              buttonShineClassName: void 0
            }) : (0, a.jsx)(G.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: H.PremiumSubscriptionSKUs.TIER_0,
              className: W.marginTopForButtons
            }),
            tier2CTAButton: ec === H.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(G.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: H.PremiumSubscriptionSKUs.TIER_2,
              className: W.marginTopForButtons,
              look: o.ButtonLooks.OUTLINED,
              color: o.ButtonColors.WHITE,
              buttonShineClassName: void 0
            }) : (0, a.jsx)(G.default, {
              forceInverted: !0,
              showIcon: !1,
              subscriptionTier: H.PremiumSubscriptionSKUs.TIER_2,
              className: W.marginTopForButtons,
              isEligibleForBogoPromotion: eE
            })
          })
        })]
      }), s && !eI ? (0, a.jsxs)("div", {
        className: W.whatsNewSection,
        children: [(0, a.jsx)(D.default, {
          variant: k.PerksDiscoverabilityVariants.WHATS_NEW
        }), (0, a.jsx)(D.default, {
          showAllPerksButton: et ? (0, a.jsx)(y.default, {
            setIsAllPerksVisible: eu
          }) : void 0
        }), e_ ? (0, a.jsx)(U.default, {
          className: W.pdSparklesTop,
          variant: U.SparkleVariants.TOP
        }) : null, e_ ? (0, a.jsx)(U.default, {
          className: W.pdSparklesBottom,
          variant: U.SparkleVariants.BOTTOM
        }) : null]
      }) : null, (0, a.jsx)(v.default, {
        className: s ? W.perkCardsContainerSpacingFullscreen : W.perkCardsContainerSpacingSettings
      }), (0, a.jsxs)("div", {
        className: W.planComparisonTableContainer,
        children: [(0, a.jsx)(j.default, {
          className: W.planComparisonTable,
          hideCTAs: !0
        }), s ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(I.default, {
            src: w,
            className: W.tableLeftSideDecoration,
            width: 197,
            height: 486,
            zoomable: !1
          }), (0, a.jsx)(I.default, {
            src: V,
            className: W.tableRightSideDecoration,
            width: 241,
            height: 552,
            zoomable: !1
          })]
        }) : null]
      }), (0, a.jsx)("div", {
        className: s ? W.footerSpacingFullscreen : W.footerSpacing
      }), (0, a.jsx)(b.default, {
        isVisible: !Y && !Q && q,
        isFullscreen: s,
        subscriptionTier: er
      }), (0, a.jsx)(u.VisibilitySensor, {
        onChange: e => {
          e && !J && (T.default.track(K.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eT
          }), Z(!0))
        },
        children: (0, a.jsx)("div", {
          className: W.bottomOfPageVisibilitySensor
        })
      }), (0, a.jsx)(I.default, {
        src: F,
        className: W.bottomIllustration,
        width: 112,
        height: 85,
        zoomable: !1
      })]
    });
    return s ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.AdvancedScrollerAuto, {
        className: W.scroller,
        ref: n,
        children: eS
      }), et ? (0, a.jsx)(B.default, {
        isAllPerksVisible: ei,
        setIsAllPerksVisible: eu
      }) : null]
    }) : eS
  }