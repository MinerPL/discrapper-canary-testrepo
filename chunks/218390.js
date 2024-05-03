"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("913527"),
  o = s.n(r),
  d = s("442837"),
  u = s("622535"),
  c = s("780384"),
  S = s("481060"),
  E = s("570140"),
  T = s("355467"),
  f = s("37234"),
  m = s("821849"),
  _ = s("230711"),
  g = s("497321"),
  h = s("634894"),
  I = s("410030"),
  N = s("100527"),
  p = s("906732"),
  C = s("211242"),
  A = s("15640"),
  O = s("89057"),
  x = s("703656"),
  R = s("246946"),
  M = s("78839"),
  v = s("586576"),
  D = s("483444"),
  L = s("626135"),
  P = s("74538"),
  j = s("140465"),
  b = s("646476"),
  U = s("424082"),
  y = s("91802"),
  B = s("898997"),
  F = s("197115"),
  G = s("823188"),
  k = s("504865"),
  w = s("179984"),
  H = s("386733"),
  V = s("487980"),
  Y = s("474936"),
  W = s("981631"),
  K = s("689938"),
  z = s("232399"),
  Q = s("881188"),
  q = s("520314"),
  Z = s("434691");

function X() {
  var e, t, s;
  let n = (0, d.useStateFromStores)([M.default], () => M.default.getPremiumTypeSubscription()),
    l = (0, j.useHasDiscountApplied)(),
    r = (0, j.useActiveDiscountInfo)(),
    {
      annualDiscountPercentage: u
    } = (0, U.getAnnualDiscountsExperimentConfig)("PremiumManagementSettings"),
    E = (0, I.default)();
  if (null == n || null == n.planIdFromItems) return null;
  let T = null != n.trialId,
    m = n.planIdFromItems === Y.SubscriptionPlans.PREMIUM_YEAR_TIER_2,
    g = l || T,
    h = null != n.trialEndsAt ? o()(n.trialEndsAt).diff(o()(), "d") : 0,
    N = Y.SubscriptionPlanInfo[n.planIdFromItems],
    p = P.default.formatPriceString(P.default.getDefaultPrice(N.id), N.interval);
  return (0, a.jsxs)("div", {
    className: i()(z.tierCard, {
      [z.withTier2Rim]: g
    }),
    children: [(0, a.jsxs)("div", {
      className: z.tierInfo,
      children: [(0, a.jsx)(D.default, {
        className: i()(z.tierTitle)
      }), g ? (0, a.jsxs)(a.Fragment, {
        children: [(T || !m) && (0, a.jsx)(G.PremiumPillWithSparkles, {
          text: T ? K.default.Messages.PREMIUM_TIER_CARD_TRIAL_ACTIVATED : K.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED,
          className: z.topRimPill,
          colorOptions: (0, c.isThemeDark)(E) ? G.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : G.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL
        }), (T || !m) && (0, a.jsx)("div", {
          className: z.rimGlowTier2
        }), (0, a.jsx)(S.Heading, {
          variant: "heading-md/normal",
          color: "always-white",
          className: z.trialHeader,
          children: T ? K.default.Messages.PREMIUM_TIER_CARD_TRIAL_HEADER_AFTER_REDEMPTION.format({
            remainingTime: h,
            price: p
          }) : m ? K.default.Messages.PREMIUM_TIER_CARD_ANNUAL_DISCOUNT_HEADER.format({
            percent: null !== (e = null == r ? void 0 : r.percentage) && void 0 !== e ? e : u,
            regularPrice: p
          }) : K.default.Messages.PREMIUM_TIER_CARD_DISCOUNT_HEADER_AFTER_REDEMPTION_GENERIC.format({
            percent: null !== (t = null == r ? void 0 : r.percentage) && void 0 !== t ? t : Y.DISCOUNT_PERCENTAGE_FALLBACK,
            regularPrice: p,
            numMonths: null !== (s = null == r ? void 0 : r.duration) && void 0 !== s ? s : Y.DISCOUNT_DURATION_FALLBACK
          })
        })]
      }) : (0, a.jsx)(k.default, {
        subscriptionTier: Y.PremiumSubscriptionSKUs.TIER_2,
        interval: N.interval
      }), (0, a.jsx)(G.Tier2FeatureItems, {}), (0, a.jsx)(S.Button, {
        className: z.tierCardButton,
        color: S.Button.Colors.WHITE,
        onClick: () => {
          L.default.track(W.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "to_premium_home_button",
            target: "premium home page"
          }), (0, f.popLayer)(), (0, x.transitionTo)(W.Routes.APPLICATION_STORE)
        },
        children: (0, a.jsx)(S.Text, {
          className: z.tierCardButtonCTA,
          variant: "text-sm/medium",
          children: K.default.Messages.PREMIUM_SETTINGS_NAVIGATE_TO_HOME_CTA_V2
        })
      }), (0, a.jsx)(S.Button, {
        className: z.managePlanButton,
        look: S.Button.Looks.OUTLINED,
        color: S.Button.Colors.WHITE,
        onClick: () => {
          L.default.track(W.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "to_subscriptions_button",
            target: "subscriptions settings"
          }), _.default.open(W.UserSettingsSections.SUBSCRIPTIONS)
        },
        children: (0, a.jsx)(S.Text, {
          className: z.__invalid_managePlanButtonCTA,
          variant: "text-sm/medium",
          color: "always-white",
          children: K.default.Messages.PREMIUM_SETTINGS_NATIGATE_TO_SUBSCRIPTIONS_CTA
        })
      })]
    }), (0, a.jsx)("div", {
      className: z.tierImage,
      children: (0, a.jsx)("img", {
        className: z.tierImage,
        alt: "",
        src: Q
      })
    })]
  })
}

function J() {
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
    className: i()(z.giftCard, {
      [z.giftCardSeasonal]: s
    }),
    children: [s && (0, a.jsx)("img", {
      className: z.seasonalGiftImage,
      alt: "",
      src: q
    }), (0, a.jsx)("img", {
      className: z.giftImage,
      style: {
        visibility: s ? "hidden" : "visible"
      },
      alt: "",
      src: Z
    }), (0, a.jsxs)("div", {
      className: z.giftInfo,
      children: [(0, a.jsx)(S.Heading, {
        className: i()(z.giftTitle, {
          [z.seasonalColor]: s
        }),
        variant: "heading-xl/extrabold",
        children: s ? K.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_HEADING : K.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_HEADING
      }), (0, a.jsx)(S.Text, {
        className: i()(z.giftText, {
          [z.seasonalColor]: s
        }),
        variant: "text-sm/normal",
        children: s ? K.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_SEASONAL_GIFT_BODY : K.default.Messages.PREMIUM_TRIAL_MARKETING_EXPERIMENT_GIFT_BODY
      }), (0, a.jsx)(F.default, {
        isGift: !0,
        className: i()(z.giftCardButton, s ? z.seasonalColor : z.giftCardButtonColor),
        look: S.Button.Looks.OUTLINED,
        buttonText: K.default.Messages.GIFT_NITRO,
        buttonTextClassName: z.giftButtonCTA,
        color: S.Button.Colors.CUSTOM,
        onClick: () => {
          L.default.track(W.AnalyticEvents.PREMIUM_SETTINGS_INTERACTED, {
            cta_type: "gifting_button",
            target: "payment modal"
          })
        }
      })]
    })]
  })
}
t.default = function() {
  let e = (0, C.useBlockedPaymentsConfig)(),
    {
      analyticsLocations: t
    } = (0, p.default)(N.default.PREMIUM_SETTINGS),
    s = (0, d.useStateFromStores)([M.default], () => M.default.getPremiumTypeSubscription()),
    l = (0, d.useStateFromStores)([M.default], () => M.default.hasFetchedSubscriptions()),
    i = (0, A.useSubscriptionPlansLoaded)(),
    [r, o] = n.useState(!0),
    c = (0, y.useLocalizedPromoQuery)(),
    f = null == c ? void 0 : c.countryCode,
    _ = (0, d.useStateFromStores)([R.default], () => R.default.enabled),
    I = "PremiumManagementSettings";
  (0, h.useTriggerDebuggingAA)({
    location: I + " auto on",
    autoTrackExposure: !0
  }), (0, h.useTriggerDebuggingAA)({
    location: I + " auto off",
    autoTrackExposure: !1
  }), (0, B.useMaybeFetchReferralsRemaining)("PremiumManagementSettings");
  let x = (0, V.useIsEligibleSenderForReferralProgram)("PremiumManagementSettings");
  n.useEffect(() => {
    E.default.wait(async () => {
      !_ && !e && await Promise.all([T.fetchSubscriptions(), T.fetchPaymentSources(), (0, m.fetchPremiumSubscriptionPlans)(f, null, W.RevenueSurfaces.DISCOVERY)]), o(!1)
    })
  }, [f, _, e]);
  let [D, P] = n.useState(!1);
  if (_) return (0, a.jsx)(g.default, {});
  if (e) return (0, a.jsx)(O.BlockedPaymentsContentSettings, {});
  if ((!l || null == s || !i) && !r) return (0, a.jsx)(v.default, {
    title: K.default.Messages.REDIRECTED_CALLBACK_ERROR,
    note: null
  });
  if (!l || null == s || !i || r) return (0, a.jsx)(S.Spinner, {});
  let j = null != s.trialId;
  return (0, a.jsx)(p.AnalyticsLocationProvider, {
    value: t,
    children: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("div", {
        className: z.__invalid_container,
        children: [(0, a.jsx)(X, {}), x && (0, a.jsx)(H.default, {
          isInSettings: !0
        }), (0, a.jsx)(J, {}), (0, a.jsx)(w.default, {
          className: z.__invalid_planComparisonTable,
          hideCTAs: !0,
          headingOverride: K.default.Messages.PREMIUM_COMPARISON_TABLE_WHAT_YOU_HAVE_GOT_TITLE,
          hidePill: !j,
          selectedPlanColumnClassName: z.tier2PlanComparisonTableBackground,
          selectedPlanTier: Y.PremiumTypes.TIER_2
        })]
      }), (0, a.jsx)(u.VisibilitySensor, {
        onChange: e => {
          e && !D && (L.default.track(W.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: t
          }), P(!0))
        },
        children: (0, a.jsx)("div", {
          className: z.bottomOfPageVisibilitySensor
        })
      })]
    })
  })
}