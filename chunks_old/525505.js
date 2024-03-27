"use strict";
s.r(t), s.d(t, {
  default: function() {
    return H
  }
}), s("424973");
var a = s("37983"),
  r = s("884691"),
  i = s("414456"),
  n = s.n(i),
  l = s("446674"),
  o = s("819855"),
  u = s("77078"),
  d = s("875212"),
  c = s("841098"),
  _ = s("812204"),
  E = s("685665"),
  T = s("308592"),
  I = s("697218"),
  f = s("521012"),
  R = s("719923"),
  S = s("324878"),
  m = s("527715"),
  N = s("154889"),
  A = s("917247"),
  p = s("478968"),
  C = s("641078"),
  g = s("400307"),
  O = s("513516"),
  P = s("218435"),
  M = s("881155"),
  h = s("646718"),
  L = s("782340"),
  x = s("962962"),
  v = s("640754"),
  D = s("510407"),
  U = s("657890"),
  b = s("823986");
let j = e => {
    let {
      isLightTheme: t
    } = e, s = (0, C.getBOGOPillCopy)();
    return (0, a.jsx)(g.PremiumPillWithSparkles, {
      text: s,
      className: x.bogoPillWithSparkles,
      colorOptions: t ? g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL
    })
  },
  B = () => (0, a.jsx)("div", {
    className: x.mostPopularPill,
    children: (0, a.jsx)(u.Heading, {
      className: x.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: L.default.Messages.MOST_POPULAR
    })
  }),
  G = e => {
    let t, {
        premiumType: s
      } = e,
      r = (0, c.default)();
    t = s === h.PremiumTypes.TIER_0 ? (0, o.isThemeDark)(r) ? v : D : (0, o.isThemeDark)(r) ? U : b;
    let i = (0, R.getPremiumTypeDisplayName)(s);
    return (0, a.jsx)("img", {
      src: t,
      className: x.logo,
      alt: i
    })
  },
  y = e => {
    let {
      label: t,
      column1: s,
      column2: r
    } = e;
    return (0, a.jsxs)("tr", {
      className: n(x.headerRow, x.rowBottomBorder, x.topBorderRadius),
      children: [(0, a.jsx)("th", {
        scope: "col",
        className: x.headerLabelCell,
        children: t
      }), (0, a.jsx)("th", {
        scope: "col",
        className: x.headerCell,
        children: s
      }), (0, a.jsx)("th", {
        scope: "col",
        className: n(x.headerCell, x.topBorderRadius),
        children: r
      })]
    })
  },
  k = e => {
    let {
      label: t,
      column1: s,
      column2: r,
      withBottomBorder: i = !0,
      withTopBorderRadius: l = !1,
      withBottomBorderRadius: o = !1,
      buttonsRow: u = !1,
      shortRow: d = !1
    } = e;
    return (0, a.jsxs)("tr", {
      className: n(x.row, {
        [x.wideRow]: u,
        [x.topBorderRadius]: l,
        [x.bottomBorderRadius]: o,
        [x.rowBottomBorder]: i,
        [x.shortRow]: d
      }),
      children: [(0, a.jsx)("th", {
        scope: "row",
        className: x.labelCell,
        children: t
      }), (0, a.jsx)("td", {
        className: n(x.cell, {
          [x.buttonsCell]: u
        }),
        children: s
      }), (0, a.jsx)("td", {
        className: n(x.cell, {
          [x.topBorderRadius]: l,
          [x.bottomBorderRadius]: o,
          [x.buttonsCell]: u
        }),
        children: r
      })]
    })
  };
var H = e => {
  var t;
  let s, {
      className: i,
      hideCTAs: v = !1,
      headingOverride: D,
      hidePill: U = !1,
      selectedPlanColumnClassName: b,
      selectedPlanTier: H = h.PremiumTypes.TIER_2
    } = e,
    {
      analyticsLocations: F
    } = (0, E.default)(_.default.PREMIUM_MARKETING_PLAN_COMPARISON),
    w = (0, m.useMarketingOptimizationExperiment)({
      autoTrackExposure: !1
    }),
    W = (0, l.useStateFromStores)([f.default], () => f.default.hasFetchedSubscriptions()),
    K = (0, T.useSubscriptionPlansLoaded)(),
    V = "PlanComparisonTable";
  (0, d.useTriggerDebuggingAA)({
    location: V + " auto on",
    autoTrackExposure: !0
  }), (0, d.useTriggerDebuggingAA)({
    location: V + " auto off",
    autoTrackExposure: !1
  });
  let Y = (0, c.default)(),
    z = (0, o.isThemeLight)(Y),
    X = (0, l.useStateFromStores)([I.default], () => I.default.getCurrentUser()),
    Q = (0, R.isPremiumExactly)(X, h.PremiumTypes.TIER_2),
    Z = (0, A.usePremiumTrialOffer)(),
    J = null == Z ? void 0 : null === (t = Z.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
    q = (0, S.useCurrentPremiumTrialTier)(),
    $ = (0, N.usePremiumDiscountOffer)(),
    ee = null != $ && (0, N.discountOfferHasTier)($, h.PremiumSubscriptionSKUs.TIER_2),
    et = (0, p.useDiscountedPrice)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    es = "".concat(et, "/").concat((0, R.getIntervalStringAsNoun)(h.SubscriptionIntervalTypes.MONTH)),
    ea = (0, R.getDefaultPrice)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
    er = (0, R.getDefaultPrice)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    ei = (0, O.useGetPlanComparisonTableRows)(ea, er, ee, es),
    en = (0, C.useIsEligibleForBogoPromotion)();
  if (!W || !K) return null;
  let el = {
    label: (0, a.jsx)(u.Heading, {
      className: x.textColor,
      variant: "heading-lg/extrabold",
      children: L.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
    }),
    column1: (0, a.jsx)(G, {
      premiumType: h.PremiumTypes.TIER_0
    }),
    column2: (0, a.jsx)(G, {
      premiumType: h.PremiumTypes.TIER_2
    })
  };
  v ? ei.push({
    label: null,
    column1: null,
    column2: null,
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: !1,
    shortRow: !0
  }) : ei.push({
    label: null,
    column1: (0, a.jsxs)(a.Fragment, {
      children: [J === h.PremiumSubscriptionSKUs.TIER_2 || en ? (0, a.jsx)(M.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: z ? u.ButtonColors.BRAND_NEW : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(M.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0,
        showIcon: !1
      }), q === h.PremiumTypes.TIER_2 || null != J ? null : (0, a.jsx)(P.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_0
      })]
    }),
    column2: (0, a.jsxs)(a.Fragment, {
      children: [J === h.PremiumSubscriptionSKUs.TIER_0 ? (0, a.jsx)(M.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        look: u.ButtonLooks.OUTLINED,
        color: z ? u.ButtonColors.BRAND_NEW : u.ButtonColors.WHITE,
        buttonShineClassName: void 0
      }) : (0, a.jsx)(M.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
        showIcon: !1,
        isEligibleForBogoPromotion: en
      }), q === h.PremiumTypes.TIER_0 || null != J ? null : (0, a.jsx)(P.default, {
        className: x.button,
        subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2
      })]
    }),
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: null == J
  }), s = U ? null : null != J || null != q ? (0, a.jsx)(g.PremiumPillWithSparkles, {
    text: null != J ? L.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : L.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
    className: x.freeTrialPillWithSparkles,
    colorOptions: J === h.PremiumSubscriptionSKUs.TIER_0 ? z ? g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_GRADIENT_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : z ? Q ? g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
  }) : en ? (0, a.jsx)(j, {
    isLightTheme: z
  }) : (0, a.jsx)(B, {});
  let eo = J === h.PremiumSubscriptionSKUs.TIER_0 || q === h.PremiumTypes.TIER_0 || H === h.PremiumTypes.TIER_0;
  return (0, a.jsx)(E.AnalyticsLocationProvider, {
    value: F,
    children: (0, a.jsxs)("div", {
      className: n(x.root, i),
      "data-testid": "v2-marketing-page-comparison-table",
      children: [(0, a.jsx)(u.Heading, {
        className: n(x.titleText, x.textColor),
        variant: "heading-xxl/extrabold",
        children: null != D ? D : L.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
      }), (0, a.jsxs)("div", {
        className: x.tableWrapper,
        children: [(0, a.jsx)("div", {
          className: n(b, {
            [x.tier0ColumnOuter]: eo && !w,
            [x.tier2ColumnOuter]: !eo && !w,
            [x.tier0ColumnOuterBackground]: eo && w,
            [x.tier2ColumnOuterBackground]: !eo && w
          }),
          children: !eo && s
        }), w && eo && (0, a.jsx)("div", {
          className: x.tier2Pill,
          children: s
        }), (0, a.jsxs)("table", {
          className: x.table,
          children: [(0, a.jsx)("thead", {
            children: (0, a.jsx)(y, {
              ...el
            })
          }), (0, a.jsx)("tbody", {
            children: ei.map((e, t) => (0, r.createElement)(k, {
              ...e,
              key: t
            }))
          })]
        })]
      })]
    })
  })
}