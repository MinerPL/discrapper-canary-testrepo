"use strict";
s.r(t), s.d(t, {
  default: function() {
    return q
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("866227"),
  o = s.n(r),
  d = s("446674"),
  u = s("290381"),
  c = s("819855"),
  S = s("77078"),
  E = s("913144"),
  T = s("850068"),
  f = s("54239"),
  _ = s("775433"),
  m = s("79112"),
  g = s("642950"),
  h = s("875212"),
  N = s("841098"),
  I = s("812204"),
  p = s("685665"),
  C = s("619935"),
  A = s("308592"),
  O = s("245187"),
  x = s("393414"),
  R = s("102985"),
  M = s("521012"),
  D = s("90404"),
  v = s("41250"),
  L = s("599110"),
  P = s("719923"),
  j = s("182650"),
  b = s("53253"),
  U = s("959905"),
  y = s("134132"),
  B = s("635956"),
  F = s("400307"),
  G = s("992118"),
  k = s("525505"),
  H = s("646718"),
  w = s("49111"),
  V = s("782340"),
  Y = s("828339"),
  K = s("12483"),
  W = s("391590"),
  z = s("435021");

function Q() {
  var e, t;
  let s = (0, d.useStateFromStores)([M.default], () => M.default.getPremiumTypeSubscription()),
    n = (0, j.useHasDiscountApplied)(),
    l = (0, j.useActiveDiscountInfo)(),
    r = (0, N.default)();
  if (null == s || null == s.planIdFromItems) return null;
  let u = null != s.trialId,
    E = n || u,
    T = null != s.trialEndsAt ? o(s.trialEndsAt).diff(o(), "d") : 0,
    _ = H.SubscriptionPlanInfo[s.planIdFromItems],
    g = P.default.formatPriceString(P.default.getDefaultPrice(_.id), _.interval);
  return (0, a.jsxs)("div", {
    className: i(Y.tierCard, {
      [Y.withTier2Rim]: E
    }),
    children: [(0, a.jsxs)("div", {
      className: Y.tierInfo,
      children: [(0, a.jsx)(v.default, {
        className: i(Y.tierTitle)
      }), E ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(F.PremiumPillWithSparkles, {
          text: u ? V.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : V.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
          className: Y.topRimPill,
          colorOptions: (0, c.isThemeDark)(r) ? F.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : F.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL
        }), (0, a.jsx)("div", {
          className: Y.rimGlowTier2
        }), (0, a.jsx)(S.Heading, {
          variant: "heading-md/normal",
          color: "always-white",
          className: Y.trialHeader,
          children: u ? V.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
            remainingTime: T,
            price: g
          }) : V.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (e = null == l ? void 0 : l.percentage) && void 0 !== e ? e : H.DISCOUNT_PERCENTAGE_FALLBACK,
            regularPrice: g,
            numMonths: null !== (t = null == l ? void 0 : l.duration) && void 0 !== t ? t : H.DISCOUNT_DURATION_FALLBACK
          })
        })]
      }) : (0, a.jsx)(G.default, {
        subscriptionTier: H.PremiumSubscriptionSKUs.TIER_2,
        interval: _.interval
      }), (0, a.jsx)(F.Tier2FeatureItems, {}), (0, a.jsx)(S.Button, {
        className: Y.tierCardButton,
        color: S.Button.Colors.WHITE,
        onClick: () => {
          L.default.track(w.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "to_premium_home_button",
            target: "premium home page"
          }), (0, f.popLayer)(), (0, x.transitionTo)(w.Routes.APPLICATION_STORE)
        },
        children: (0, a.jsx)(S.Text, {
          className: Y.tierCardButtonCTA,
          variant: "text-sm/medium",
          children: V.default.Messages.PREMIUM_SETTINGS_NAVIGATE_TO_HOME_CTA_V2
        })
      }), (0, a.jsx)(S.Button, {
        className: Y.managePlanButton,
        look: S.Button.Looks.OUTLINED,
        color: S.Button.Colors.WHITE,
        onClick: () => {
          L.default.track(w.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "to_subscriptions_button",
            target: "subscriptions settings"
          }), m.default.open(w.UserSettingsSections.SUBSCRIPTIONS)
        },
        children: (0, a.jsx)(S.Text, {
          className: Y.managePlanButtonCTA,
          variant: "text-sm/medium",
          color: "always-white",
          children: V.default.Messages.PREMIUM_SETTINGS_NATIGATE_TO_SUBSCRIPTIONS_CTA
        })
      })]
    }), (0, a.jsx)("div", {
      className: Y.tierImage,
      children: (0, a.jsx)("img", {
        className: Y.tierImage,
        alt: "",
        src: K
      })
    })]
  })
}

function X() {
  let e = (0, b.useIsSeasonalGiftingActive)(),
    {
      enabled: t
    } = b.SeasonalGiftingMarketingExperiment.useExperiment({
      location: "GiftNitro"
    }, {
      autoTrackExposure: e
    }),
    s = t && e;
  return (0, a.jsxs)("div", {
    className: i(Y.giftCard, {
      [Y.giftCardSeasonal]: s
    }),
    children: [s && (0, a.jsx)("img", {
      className: Y.seasonalGiftImage,
      alt: "",
      src: W
    }), (0, a.jsx)("img", {
      className: Y.giftImage,
      style: {
        visibility: s ? "hidden" : "visible"
      },
      alt: "",
      src: z
    }), (0, a.jsxs)("div", {
      className: Y.giftInfo,
      children: [(0, a.jsx)(S.Heading, {
        className: i(Y.giftTitle, {
          [Y.seasonalColor]: s
        }),
        variant: "heading-xl/extrabold",
        children: s ? V.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : V.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING
      }), (0, a.jsx)(S.Text, {
        className: i(Y.giftText, {
          [Y.seasonalColor]: s
        }),
        variant: "text-sm/normal",
        children: s ? V.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : V.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
      }), (0, a.jsx)(B.default, {
        isGift: !0,
        className: i(Y.giftCardButton, s ? Y.seasonalColor : Y.giftCardButtonColor),
        look: S.Button.Looks.OUTLINED,
        buttonText: V.default.Messages.GIFT_NITRO,
        buttonTextClassName: Y.giftButtonCTA,
        color: S.Button.Colors.CUSTOM,
        onClick: () => {
          L.default.track(w.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "gifting_button",
            target: "payment modal"
          })
        }
      })]
    })]
  })
}
var q = function() {
  let e = (0, C.useBlockedPaymentsConfig)(),
    {
      analyticsLocations: t
    } = (0, p.default)(I.default.PREMIUM_SETTINGS),
    s = (0, d.useStateFromStores)([M.default], () => M.default.getPremiumTypeSubscription()),
    l = (0, d.useStateFromStores)([M.default], () => M.default.hasFetchedSubscriptions()),
    i = (0, A.useSubscriptionPlansLoaded)(),
    [r, o] = n.useState(!0),
    c = (0, U.useLocalizedPromoQuery)(),
    f = null == c ? void 0 : c.countryCode,
    m = (0, d.useStateFromStores)([R.default], () => R.default.enabled),
    N = "PremiumManagementSettings";
  (0, h.useTriggerDebuggingAA)({
    location: N + " auto on",
    autoTrackExposure: !0
  }), (0, h.useTriggerDebuggingAA)({
    location: N + " auto off",
    autoTrackExposure: !1
  }), (0, y.useMaybeFetchReferralsRemaining)("PremiumManagementSettings"), n.useEffect(() => {
    E.default.wait(async () => {
      !m && !e && await Promise.all([T.fetchSubscriptions(), T.fetchPaymentSources(), (0, _.fetchPremiumSubscriptionPlans)(f, null, w.RevenueSurfaces.DISCOVERY)]), o(!1)
    })
  }, [f, m, e]);
  let [x, v] = n.useState(!1);
  if (m) return (0, a.jsx)(g.default, {});
  if (e) return (0, a.jsx)(O.BlockedPaymentsContentSettings, {});
  if ((!l || null == s || !i) && !r) return (0, a.jsx)(D.default, {
    title: V.default.Messages.REDIRECTED_CALLBACK_ERROR,
    note: null
  });
  if (!l || null == s || !i || r) return (0, a.jsx)(S.Spinner, {});
  let P = null != s.trialId;
  return (0, a.jsx)(p.AnalyticsLocationProvider, {
    value: t,
    children: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: Y.container,
        children: [(0, a.jsx)(Q, {}), (0, a.jsx)(X, {}), (0, a.jsx)(k.default, {
          className: Y.planComparisonTable,
          hideCTAs: !0,
          headingOverride: V.default.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
          hidePill: !P,
          selectedPlanColumnClassName: Y.tier2PlanComparisonTableBackground,
          selectedPlanTier: H.PremiumTypes.TIER_2
        })]
      }), (0, a.jsx)(u.VisibilitySensor, {
        onChange: e => {
          e && !x && (L.default.track(w.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: t
          }), v(!0))
        },
        children: (0, a.jsx)("div", {
          className: Y.bottomOfPageVisibilitySensor
        })
      })]
    })
  })
}