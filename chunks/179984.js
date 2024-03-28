"use strict";
s.r(t), s("653041");
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  n = s.n(r),
  l = s("442837"),
  o = s("780384"),
  u = s("481060"),
  d = s("634894"),
  c = s("410030"),
  _ = s("100527"),
  E = s("906732"),
  T = s("15640"),
  I = s("594174"),
  R = s("78839"),
  S = s("74538"),
  f = s("775412"),
  m = s("846363"),
  N = s("104494"),
  A = s("639119"),
  p = s("230916"),
  C = s("248042"),
  g = s("823188"),
  O = s("21023"),
  P = s("318747"),
  M = s("409100"),
  h = s("474936"),
  L = s("689938"),
  x = s("116511"),
  v = s("102655"),
  D = s("768236"),
  b = s("314907"),
  U = s("826701");
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
  y = () => (0, a.jsx)("div", {
    className: x.mostPopularPill,
    children: (0, a.jsx)(u.Heading, {
      className: x.mostPopularText,
      variant: "heading-deprecated-12/extrabold",
      children: L.default.Messages.MOST_POPULAR
    })
  }),
  B = e => {
    let t, {
        premiumType: s
      } = e,
      i = (0, c.default)();
    t = s === h.PremiumTypes.TIER_0 ? (0, o.isThemeDark)(i) ? v : D : (0, o.isThemeDark)(i) ? b : U;
    let r = (0, S.getPremiumTypeDisplayName)(s);
    return (0, a.jsx)("img", {
      src: t,
      className: x.logo,
      alt: r
    })
  },
  G = e => {
    let {
      label: t,
      column1: s,
      column2: i
    } = e;
    return (0, a.jsxs)("tr", {
      className: n()(x.headerRow, x.rowBottomBorder, x.topBorderRadius),
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
        className: n()(x.headerCell, x.topBorderRadius),
        children: i
      })]
    })
  },
  k = e => {
    let {
      label: t,
      column1: s,
      column2: i,
      withBottomBorder: r = !0,
      withTopBorderRadius: l = !1,
      withBottomBorderRadius: o = !1,
      buttonsRow: u = !1,
      shortRow: d = !1
    } = e;
    return (0, a.jsxs)("tr", {
      className: n()(x.row, {
        [x.wideRow]: u,
        [x.topBorderRadius]: l,
        [x.bottomBorderRadius]: o,
        [x.rowBottomBorder]: r,
        [x.shortRow]: d
      }),
      children: [(0, a.jsx)("th", {
        scope: "row",
        className: x.labelCell,
        children: t
      }), (0, a.jsx)("td", {
        className: n()(x.cell, {
          [x.buttonsCell]: u
        }),
        children: s
      }), (0, a.jsx)("td", {
        className: n()(x.cell, {
          [x.topBorderRadius]: l,
          [x.bottomBorderRadius]: o,
          [x.buttonsCell]: u
        }),
        children: i
      })]
    })
  };
t.default = e => {
  var t;
  let s, {
      className: r,
      hideCTAs: v = !1,
      headingOverride: D,
      hidePill: b = !1,
      selectedPlanColumnClassName: U,
      selectedPlanTier: H = h.PremiumTypes.TIER_2
    } = e,
    {
      analyticsLocations: F
    } = (0, E.default)(_.default.PREMIUM_MARKETING_PLAN_COMPARISON),
    w = (0, m.useMarketingOptimizationExperiment)({
      autoTrackExposure: !1
    }),
    W = (0, l.useStateFromStores)([R.default], () => R.default.hasFetchedSubscriptions()),
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
    Q = (0, S.isPremiumExactly)(X, h.PremiumTypes.TIER_2),
    Z = (0, A.usePremiumTrialOffer)(),
    J = null == Z ? void 0 : null === (t = Z.subscription_trial) || void 0 === t ? void 0 : t.sku_id,
    q = (0, f.useCurrentPremiumTrialTier)(),
    $ = (0, N.usePremiumDiscountOffer)(),
    ee = null != $ && (0, N.discountOfferHasTier)($, h.PremiumSubscriptionSKUs.TIER_2),
    et = (0, p.useDiscountedPrice)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    es = "".concat(et, "/").concat((0, S.getIntervalStringAsNoun)(h.SubscriptionIntervalTypes.MONTH)),
    ea = (0, S.getDefaultPrice)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
    ei = (0, S.getDefaultPrice)(h.SubscriptionPlans.PREMIUM_MONTH_TIER_2),
    er = (0, O.useGetPlanComparisonTableRows)(ea, ei, ee, es),
    en = (0, C.useIsEligibleForBogoPromotion)();
  if (!W || !K) return null;
  let el = {
    label: (0, a.jsx)(u.Heading, {
      className: x.__invalid_textColor,
      variant: "heading-lg/extrabold",
      children: L.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_HEADER
    }),
    column1: (0, a.jsx)(B, {
      premiumType: h.PremiumTypes.TIER_0
    }),
    column2: (0, a.jsx)(B, {
      premiumType: h.PremiumTypes.TIER_2
    })
  };
  v ? er.push({
    label: null,
    column1: null,
    column2: null,
    withBottomBorder: !1,
    withBottomBorderRadius: !0,
    buttonsRow: !1,
    shortRow: !0
  }) : er.push({
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
  }), s = b ? null : null != J || null != q ? (0, a.jsx)(g.PremiumPillWithSparkles, {
    text: null != J ? L.default.Messages.BILLING_TRIAL_FREE_TRIAL_TEXT : L.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_PLAN_ACTIVATED_PILL,
    className: x.freeTrialPillWithSparkles,
    colorOptions: J === h.PremiumSubscriptionSKUs.TIER_0 ? z ? g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_GRADIENT_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_0_WHITE_FILL : z ? Q ? g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_OLD_GRADIENT_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_NEW_GRADIENT_FILL : g.PremiumPillAndSparklesColorOptions.PREMIUM_TIER_2_WHITE_FILL
  }) : en ? (0, a.jsx)(j, {
    isLightTheme: z
  }) : (0, a.jsx)(y, {});
  let eo = J === h.PremiumSubscriptionSKUs.TIER_0 || q === h.PremiumTypes.TIER_0 || H === h.PremiumTypes.TIER_0;
  return (0, a.jsx)(E.AnalyticsLocationProvider, {
    value: F,
    children: (0, a.jsxs)("div", {
      className: n()(x.root, r),
      "data-testid": "v2-marketing-page-comparison-table",
      children: [(0, a.jsx)(u.Heading, {
        className: n()(x.titleText, x.__invalid_textColor),
        variant: "heading-xxl/extrabold",
        children: null != D ? D : L.default.Messages.PREMIUM_TIER_0_DESKTOP_MARKETING_COMPARISON_TABLE_TITLE
      }), (0, a.jsxs)("div", {
        className: x.tableWrapper,
        children: [(0, a.jsx)("div", {
          className: n()(U, {
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
            children: (0, a.jsx)(G, {
              ...el
            })
          }), (0, a.jsx)("tbody", {
            children: er.map((e, t) => (0, i.createElement)(k, {
              ...e,
              key: t
            }))
          })]
        })]
      })]
    })
  })
}