"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var s = n("37983");
n("884691");
var r = n("414456"),
  a = n.n(r),
  i = n("627445"),
  l = n.n(i),
  u = n("446674"),
  o = n("669491"),
  c = n("77078"),
  d = n("635357"),
  m = n("915639"),
  f = n("10514"),
  p = n("659632"),
  _ = n("240481"),
  S = n("719923"),
  I = n("153160"),
  E = n("154889"),
  P = n("646718"),
  T = n("782340"),
  N = n("902839");

function C(e) {
  var t;
  let {
    premiumSubscription: n,
    planId: r,
    selectPlan: i,
    selected: C,
    priceOptions: A,
    shouldShowUpdatedPaymentModal: h,
    isEligibleForDiscount: v,
    discountAmountOff: g
  } = e, x = (0, u.useStateFromStores)([m.default], () => m.default.locale), y = (0, u.useStateFromStores)([f.default], () => f.default.get(r)), {
    isGift: O,
    giftRecipient: M
  } = (0, d.useGiftContext)(), R = O && (0, p.shouldShowCustomGiftExperience)(M);
  l(null != y, "Missing subscriptionPlan");
  let L = null != n && n.planId === r,
    b = L || r === P.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != n && [P.SubscriptionPlans.PREMIUM_YEAR_TIER_0, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(n.planId),
    j = P.DISCOUNTS[r],
    G = (0, S.getPrice)(r, !1, O, A),
    D = (0, S.isPrepaidPaymentSource)(A.paymentSourceId),
    U = null != j && !h,
    F = (0, E.usePremiumDiscountOffer)(),
    B = y.interval === P.SubscriptionIntervalTypes.YEAR ? T.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : T.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
    w = () => null != j && (0, s.jsx)(c.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: N.planOptionDiscount,
      children: T.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
        discount: (0, _.formatPercent)(x, j / 100)
      })
    }),
    k = () => y.interval === P.SubscriptionIntervalTypes.YEAR && null != n || U && !L ? y.interval === P.SubscriptionIntervalTypes.YEAR && null != n ? (0, s.jsxs)("span", {
      className: N.planOptionMonthsFree,
      children: ["(", T.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
    }) : U && !L ? w() : void 0 : null;
  return (0, s.jsxs)(c.Clickable, {
    role: R ? "menuitem" : "radio",
    "aria-checked": C,
    tabIndex: C ? 0 : -1,
    focusProps: {
      offset: {
        left: -4,
        right: -4,
        top: 0,
        bottom: 0
      }
    },
    onClick: b ? void 0 : () => i(r),
    className: a(N.planOptionClickableContainer, {
      [N.selectedPlan]: R && C,
      [N.selectionBox]: R
    }),
    children: [(0, s.jsxs)("div", {
      className: a(N.planOption, {
        [N.planOptionDisabled]: b
      }),
      children: [(0, s.jsxs)("div", {
        className: N.planOptionClickable,
        children: [!R && (0, s.jsx)(c.Checkbox, {
          readOnly: !0,
          displayOnly: !0,
          value: C,
          shape: c.Checkbox.Shapes.ROUND,
          color: o.default.unsafe_rawColors.BRAND_500.css,
          type: c.Checkbox.Types.INVERTED,
          className: N.planOptionCheckbox
        }), (0, s.jsxs)("div", {
          children: [(0, s.jsxs)("div", {
            className: a(N.planOptionInterval, {
              [N.optionSelected]: C || R,
              [N.updatedOptionSelected]: h && (C || R)
            }),
            children: [(0, S.getIntervalString)(y.interval, O, D, y.intervalCount, R, (0, S.getPremiumType)(y.id)), R && k()]
          }), R && (0, s.jsx)("div", {
            className: N.planOneTimeCost,
            children: T.default.Messages.ONE_TIME_CHARGE.format({
              currencyAmount: (0, I.formatPrice)(G.amount, G.currency)
            })
          })]
        }), L && (0, s.jsxs)("span", {
          className: N.planOptionCurrentPlan,
          children: ["(", T.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
        }), !R && k()]
      }), h ? (0, s.jsx)("div", {
        className: a({
          [N.optionPriceSelected]: C
        }),
        children: T.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
          price: (() => {
            if (v && null != g) return y.interval === P.SubscriptionIntervalTypes.MONTH ? (0, I.formatPrice)(G.amount - g, G.currency) : (0, I.formatPrice)(G.amount, G.currency);
            return (0, I.formatPrice)(0, G.currency, {
              maximumFractionDigits: 0
            })
          })()
        })
      }) : (0, s.jsx)("div", {
        className: a({
          [N.optionSelected]: C || R
        }),
        children: (0, I.formatPrice)(G.amount, G.currency)
      })]
    }), h && (0, s.jsx)("div", {
      className: N.planOptionSubtextContainer,
      children: (0, s.jsx)(c.Text, {
        variant: "text-md/normal",
        color: C ? "text-normal" : "interactive-normal",
        className: a(N.planOptionSubtext, {
          [N.discountPlanOptionSubtext]: v
        }),
        children: v && null != g ? y.interval === P.SubscriptionIntervalTypes.MONTH ? T.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE_GENERIC.format({
          numMonths: null !== (t = null == F ? void 0 : F.discount.user_usage_limit) && void 0 !== t ? t : P.DISCOUNT_DURATION_FALLBACK,
          discountedPrice: (0, I.formatPrice)(G.amount - g, G.currency),
          regularPrice: (0, I.formatPrice)(G.amount, G.currency)
        }) : T.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
          percent: j
        }) : B.format({
          price: (0, I.formatPrice)(G.amount, G.currency)
        })
      })
    })]
  })
}