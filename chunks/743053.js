"use strict";
s.r(t), s.d(t, {
  default: function() {
    return X
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
  y = s("635956"),
  B = s("400307"),
  F = s("992118"),
  G = s("525505"),
  k = s("646718"),
  H = s("49111"),
  w = s("782340"),
  V = s("828339"),
  Y = s("12483"),
  K = s("391590"),
  W = s("435021");

function z() {
  var e, t;
  let s = (0, d.useStateFromStores)([M.default], () => M.default.getPremiumTypeSubscription()),
    n = (0, j.useHasDiscountApplied)(),
    l = (0, j.useActiveDiscountInfo)(),
    r = (0, N.default)();
  if (null == s || null == s.planIdFromItems) return null;
  let u = null != s.trialId,
    E = n || u,
    T = null != s.trialEndsAt ? o(s.trialEndsAt).diff(o(), "d") : 0,
    _ = k.SubscriptionPlanInfo[s.planIdFromItems],
    g = P.default.formatPriceString(P.default.getDefaultPrice(_.id), _.interval);
  return (0, a.jsxs)("div", {
    className: i(V.tierCard, {
      [V.withTier2Rim]: E
    }),
    children: [(0, a.jsxs)("div", {
      className: V.tierInfo,
      children: [(0, a.jsx)(v.default, {
        className: i(V.tierTitle)
      }), E ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(B.PremiumPillWithSparkles, {
          text: u ? w.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : w.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
          className: V.topRimPill,
          colorOptions: (0, c.isThemeDark)(r) ? B.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : B.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL
        }), (0, a.jsx)("div", {
          className: V.rimGlowTier2
        }), (0, a.jsx)(S.Heading, {
          variant: "heading-md/normal",
          color: "always-white",
          className: V.trialHeader,
          children: u ? w.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
            remainingTime: T,
            price: g
          }) : w.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (e = null == l ? void 0 : l.percentage) && void 0 !== e ? e : k.DISCOUNT_PERCENTAGE_FALLBACK,
            regularPrice: g,
            numMonths: null !== (t = null == l ? void 0 : l.duration) && void 0 !== t ? t : k.DISCOUNT_DURATION_FALLBACK
          })
        })]
      }) : (0, a.jsx)(F.default, {
        subscriptionTier: k.PremiumSubscriptionSKUs.TIER_2,
        interval: _.interval
      }), (0, a.jsx)(B.Tier2FeatureItems, {}), (0, a.jsx)(S.Button, {
        className: V.tierCardButton,
        color: S.Button.Colors.WHITE,
        onClick: () => {
          L.default.track(H.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "to_premium_home_button",
            target: "premium home page"
          }), (0, f.popLayer)(), (0, x.transitionTo)(H.Routes.APPLICATION_STORE)
        },
        children: (0, a.jsx)(S.Text, {
          className: V.tierCardButtonCTA,
          variant: "text-sm/medium",
          children: w.default.Messages.PREMIUM_SETTINGS_NAVIGATE_TO_HOME_CTA_V2
        })
      }), (0, a.jsx)(S.Button, {
        className: V.managePlanButton,
        look: S.Button.Looks.OUTLINED,
        color: S.Button.Colors.WHITE,
        onClick: () => {
          L.default.track(H.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "to_subscriptions_button",
            target: "subscriptions settings"
          }), m.default.open(H.UserSettingsSections.SUBSCRIPTIONS)
        },
        children: (0, a.jsx)(S.Text, {
          className: V.managePlanButtonCTA,
          variant: "text-sm/medium",
          color: "always-white",
          children: w.default.Messages.PREMIUM_SETTINGS_NATIGATE_TO_SUBSCRIPTIONS_CTA
        })
      })]
    }), (0, a.jsx)("div", {
      className: V.tierImage,
      children: (0, a.jsx)("img", {
        className: V.tierImage,
        alt: "",
        src: Y
      })
    })]
  })
}

function Q() {
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
    className: i(V.giftCard, {
      [V.giftCardSeasonal]: s
    }),
    children: [s && (0, a.jsx)("img", {
      className: V.seasonalGiftImage,
      alt: "",
      src: K
    }), (0, a.jsx)("img", {
      className: V.giftImage,
      style: {
        visibility: s ? "hidden" : "visible"
      },
      alt: "",
      src: W
    }), (0, a.jsxs)("div", {
      className: V.giftInfo,
      children: [(0, a.jsx)(S.Heading, {
        className: i(V.giftTitle, {
          [V.seasonalColor]: s
        }),
        variant: "heading-xl/extrabold",
        children: s ? w.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : w.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING
      }), (0, a.jsx)(S.Text, {
        className: i(V.giftText, {
          [V.seasonalColor]: s
        }),
        variant: "text-sm/normal",
        children: s ? w.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : w.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
      }), (0, a.jsx)(y.default, {
        isGift: !0,
        className: i(V.giftCardButton, s ? V.seasonalColor : V.giftCardButtonColor),
        look: S.Button.Looks.OUTLINED,
        buttonText: w.default.Messages.GIFT_NITRO,
        buttonTextClassName: V.giftButtonCTA,
        color: S.Button.Colors.CUSTOM,
        onClick: () => {
          L.default.track(H.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "gifting_button",
            target: "payment modal"
          })
        }
      })]
    })]
  })
}
var X = function() {
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
  }), n.useEffect(() => {
    E.default.wait(async () => {
      !m && !e && await Promise.all([T.fetchSubscriptions(), T.fetchPaymentSources(), (0, _.fetchPremiumSubscriptionPlans)(f, null, H.RevenueSurfaces.DISCOVERY)]), o(!1)
    })
  }, [f, m, e]);
  let [x, v] = n.useState(!1);
  if (m) return (0, a.jsx)(g.default, {});
  if (e) return (0, a.jsx)(O.BlockedPaymentsContentSettings, {});
  if ((!l || null == s || !i) && !r) return (0, a.jsx)(D.default, {
    title: w.default.Messages.REDIRECTED_CALLBACK_ERROR,
    note: null
  });
  if (!l || null == s || !i || r) return (0, a.jsx)(S.Spinner, {});
  let P = null != s.trialId;
  return (0, a.jsx)(p.AnalyticsLocationProvider, {
    value: t,
    children: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: V.container,
        children: [(0, a.jsx)(z, {}), (0, a.jsx)(Q, {}), (0, a.jsx)(G.default, {
          className: V.planComparisonTable,
          hideCTAs: !0,
          headingOverride: w.default.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
          hidePill: !P,
          selectedPlanColumnClassName: V.tier2PlanComparisonTableBackground,
          selectedPlanTier: k.PremiumTypes.TIER_2
        })]
      }), (0, a.jsx)(u.VisibilitySensor, {
        onChange: e => {
          e && !x && (L.default.track(H.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: t
          }), v(!0))
        },
        children: (0, a.jsx)("div", {
          className: V.bottomOfPageVisibilitySensor
        })
      })]
    })
  })
}