"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var i = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  a = n("512722"),
  r = n.n(a),
  u = n("442837"),
  o = n("692547"),
  c = n("481060"),
  d = n("987209"),
  m = n("706454"),
  f = n("509545"),
  p = n("669079"),
  _ = n("930153"),
  S = n("74538"),
  I = n("937615"),
  P = n("104494"),
  E = n("474936"),
  T = n("689938"),
  N = n("289996");

function v(e) {
  let {
    premiumSubscription: t,
    planId: n,
    selectPlan: s,
    selected: a,
    priceOptions: v,
    shouldShowUpdatedPaymentModal: h,
    isEligibleForDiscount: x,
    discountAmountOff: A,
    isEligibleForAnnualDiscount: C,
    annualDiscountAmountOff: y,
    isEligibleForTrial: g
  } = e, M = (0, u.useStateFromStores)([m.default], () => m.default.locale), R = (0, u.useStateFromStores)([f.default], () => f.default.get(n)), {
    isGift: b,
    giftRecipient: L
  } = (0, d.useGiftContext)(), O = b && (0, p.shouldShowCustomGiftExperience)(L);
  r()(null != R, "Missing subscriptionPlan");
  let j = null != t && t.planId === n,
    G = j || n === E.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != t && [E.SubscriptionPlans.PREMIUM_YEAR_TIER_0, E.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(t.planId),
    D = E.DISCOUNTS[n],
    U = (0, S.getPrice)(n, !1, b, v),
    F = (0, S.isPrepaidPaymentSource)(v.paymentSourceId),
    w = null != D && !h,
    B = (0, P.usePremiumDiscountOffer)(),
    k = (0, P.usePremiumAnnualDiscountOffer)(),
    H = C && null != y && R.interval === E.SubscriptionIntervalTypes.YEAR,
    W = R.interval === E.SubscriptionIntervalTypes.YEAR ? T.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : T.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
    Y = () => null != D && (0, i.jsx)(c.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: N.planOptionDiscount,
      children: T.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
        discount: (0, _.formatPercent)(M, D / 100)
      })
    }),
    K = () => R.interval === E.SubscriptionIntervalTypes.YEAR && null != t || w && !j ? R.interval !== E.SubscriptionIntervalTypes.YEAR || null == t || H ? w && !j ? Y() : void 0 : (0, i.jsxs)("span", {
      className: N.planOptionMonthsFree,
      children: ["(", T.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
    }) : null;
  return (0, i.jsxs)(c.Clickable, {
    role: O ? "menuitem" : "radio",
    "aria-checked": a,
    tabIndex: a ? 0 : -1,
    focusProps: {
      offset: {
        left: -4,
        right: -4,
        top: 0,
        bottom: 0
      }
    },
    onClick: G ? void 0 : () => s(n),
    className: l()(N.planOptionClickableContainer, {
      [N.selectedPlan]: O && a,
      [N.selectionBox]: O
    }),
    children: [(0, i.jsxs)("div", {
      className: l()(N.planOption, {
        [N.planOptionDisabled]: G
      }),
      children: [(0, i.jsxs)("div", {
        className: N.planOptionClickable,
        children: [!O && (0, i.jsx)(c.Checkbox, {
          readOnly: !0,
          displayOnly: !0,
          value: a,
          shape: c.Checkbox.Shapes.ROUND,
          color: o.default.unsafe_rawColors.BRAND_500.css,
          type: c.Checkbox.Types.INVERTED,
          className: N.planOptionCheckbox
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsxs)("div", {
            className: l()(N.planOptionInterval, {
              [N.optionSelected]: a || O,
              [N.updatedOptionSelected]: h && (a || O)
            }),
            children: [(0, S.getIntervalString)(R.interval, b, F, R.intervalCount, O, (0, S.getPremiumType)(R.id)), O && K()]
          }), O && (0, i.jsx)("div", {
            className: N.planOneTimeCost,
            children: T.default.Messages.ONE_TIME_CHARGE.format({
              currencyAmount: (0, I.formatPrice)(U.amount, U.currency)
            })
          })]
        }), j && (0, i.jsxs)("span", {
          className: N.planOptionCurrentPlan,
          children: ["(", T.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
        }), !O && K()]
      }), h ? (0, i.jsx)("div", {
        className: l()({
          [N.optionPriceSelected]: a
        }),
        children: H ? (() => {
          if (H) {
            var e;
            let t = (0, _.formatPercent)(M, E.ANNUAL_DISCOUNT_IDS_TO_PERCENTAGES[null !== (e = null == k ? void 0 : k.discount_id) && void 0 !== e ? e : "DEFAULT"]);
            return (0, i.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end"
              },
              children: [(0, i.jsx)(c.Text, {
                variant: "eyebrow",
                color: "always-white",
                className: N.annualPlanOptionDiscount,
                children: T.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
                  discount: t
                })
              }), T.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
                price: (0, I.formatPrice)(U.amount - y, U.currency)
              })]
            })
          }
          return null
        })() : T.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
          price: x && null != A && R.interval === E.SubscriptionIntervalTypes.MONTH ? (0, I.formatPrice)(U.amount - A, U.currency) : g ? (0, I.formatPrice)(0, U.currency, {
            maximumFractionDigits: 0
          }) : (0, I.formatPrice)(U.amount, U.currency)
        })
      }) : (0, i.jsx)("div", {
        className: l()({
          [N.optionSelected]: a || O
        }),
        children: (0, I.formatPrice)(U.amount, U.currency)
      })]
    }), h && (0, i.jsx)("div", {
      className: N.planOptionSubtextContainer,
      children: (0, i.jsx)(c.Text, {
        variant: "text-md/normal",
        color: a ? "text-normal" : "interactive-normal",
        className: l()(N.planOptionSubtext, {
          [N.discountPlanOptionSubtext]: x || C
        }),
        children: (() => {
          if (x && null != A && R.interval === E.SubscriptionIntervalTypes.MONTH) {
            var e;
            return T.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE_GENERIC.format({
              numMonths: null !== (e = null == B ? void 0 : B.discount.user_usage_limit) && void 0 !== e ? e : E.DISCOUNT_DURATION_FALLBACK,
              discountedPrice: (0, I.formatPrice)(U.amount - A, U.currency),
              regularPrice: (0, I.formatPrice)(U.amount, U.currency)
            })
          }
          if (C && null != y && R.interval === E.SubscriptionIntervalTypes.YEAR) return T.default.Messages.BILLING_ANNUAL_DISCOUNT_YEARLY_PRICE_SUBTEXT.format({
            regularPrice: (0, I.formatPrice)(U.amount, U.currency)
          });
          if (g) return W.format({
            price: (0, I.formatPrice)(U.amount, U.currency)
          });
          else R.interval === E.SubscriptionIntervalTypes.YEAR && T.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
            percent: D
          });
          return null
        })()
      })
    })]
  })
}