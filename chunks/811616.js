"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var i = n("735250");
n("470079");
var s = n("803997"),
  a = n.n(s),
  l = n("512722"),
  r = n.n(l),
  u = n("442837"),
  o = n("692547"),
  c = n("481060"),
  d = n("987209"),
  m = n("706454"),
  f = n("509545"),
  p = n("669079"),
  S = n("930153"),
  _ = n("74538"),
  I = n("937615"),
  E = n("104494"),
  P = n("474936"),
  T = n("689938"),
  N = n("571062");

function h(e) {
  var t;
  let {
    premiumSubscription: n,
    planId: s,
    selectPlan: l,
    selected: h,
    priceOptions: x,
    shouldShowUpdatedPaymentModal: v,
    isEligibleForDiscount: A,
    discountAmountOff: C
  } = e, g = (0, u.useStateFromStores)([m.default], () => m.default.locale), y = (0, u.useStateFromStores)([f.default], () => f.default.get(s)), {
    isGift: M,
    giftRecipient: b
  } = (0, d.useGiftContext)(), O = M && (0, p.shouldShowCustomGiftExperience)(b);
  r()(null != y, "Missing subscriptionPlan");
  let R = null != n && n.planId === s,
    L = R || s === P.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && null != n && [P.SubscriptionPlans.PREMIUM_YEAR_TIER_0, P.SubscriptionPlans.PREMIUM_YEAR_TIER_1].includes(n.planId),
    j = P.DISCOUNTS[s],
    G = (0, _.getPrice)(s, !1, M, x),
    D = (0, _.isPrepaidPaymentSource)(x.paymentSourceId),
    F = null != j && !v,
    U = (0, E.usePremiumDiscountOffer)(),
    w = y.interval === P.SubscriptionIntervalTypes.YEAR ? T.default.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : T.default.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
    B = () => null != j && (0, i.jsx)(c.Text, {
      tag: "span",
      variant: "eyebrow",
      color: "always-white",
      className: N.planOptionDiscount,
      children: T.default.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
        discount: (0, S.formatPercent)(g, j / 100)
      })
    }),
    k = () => y.interval === P.SubscriptionIntervalTypes.YEAR && null != n || F && !R ? y.interval === P.SubscriptionIntervalTypes.YEAR && null != n ? (0, i.jsxs)("span", {
      className: N.planOptionMonthsFree,
      children: ["(", T.default.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS, ")"]
    }) : F && !R ? B() : void 0 : null;
  return (0, i.jsxs)(c.Clickable, {
    role: O ? "menuitem" : "radio",
    "aria-checked": h,
    tabIndex: h ? 0 : -1,
    focusProps: {
      offset: {
        left: -4,
        right: -4,
        top: 0,
        bottom: 0
      }
    },
    onClick: L ? void 0 : () => l(s),
    className: a()(N.planOptionClickableContainer, {
      [N.selectedPlan]: O && h,
      [N.selectionBox]: O
    }),
    children: [(0, i.jsxs)("div", {
      className: a()(N.planOption, {
        [N.planOptionDisabled]: L
      }),
      children: [(0, i.jsxs)("div", {
        className: N.planOptionClickable,
        children: [!O && (0, i.jsx)(c.Checkbox, {
          readOnly: !0,
          displayOnly: !0,
          value: h,
          shape: c.Checkbox.Shapes.ROUND,
          color: o.default.unsafe_rawColors.BRAND_500.css,
          type: c.Checkbox.Types.INVERTED,
          className: N.planOptionCheckbox
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsxs)("div", {
            className: a()(N.planOptionInterval, {
              [N.optionSelected]: h || O,
              [N.updatedOptionSelected]: v && (h || O)
            }),
            children: [(0, _.getIntervalString)(y.interval, M, D, y.intervalCount, O, (0, _.getPremiumType)(y.id)), O && k()]
          }), O && (0, i.jsx)("div", {
            className: N.planOneTimeCost,
            children: T.default.Messages.ONE_TIME_CHARGE.format({
              currencyAmount: (0, I.formatPrice)(G.amount, G.currency)
            })
          })]
        }), R && (0, i.jsxs)("span", {
          className: N.planOptionCurrentPlan,
          children: ["(", T.default.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN, ")"]
        }), !O && k()]
      }), v ? (0, i.jsx)("div", {
        className: a()({
          [N.optionPriceSelected]: h
        }),
        children: T.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
          price: (() => {
            if (A && null != C) return y.interval === P.SubscriptionIntervalTypes.MONTH ? (0, I.formatPrice)(G.amount - C, G.currency) : (0, I.formatPrice)(G.amount, G.currency);
            return (0, I.formatPrice)(0, G.currency, {
              maximumFractionDigits: 0
            })
          })()
        })
      }) : (0, i.jsx)("div", {
        className: a()({
          [N.optionSelected]: h || O
        }),
        children: (0, I.formatPrice)(G.amount, G.currency)
      })]
    }), v && (0, i.jsx)("div", {
      className: N.planOptionSubtextContainer,
      children: (0, i.jsx)(c.Text, {
        variant: "text-md/normal",
        color: h ? "text-normal" : "interactive-normal",
        className: a()(N.planOptionSubtext, {
          [N.discountPlanOptionSubtext]: A
        }),
        children: A && null != C ? y.interval === P.SubscriptionIntervalTypes.MONTH ? T.default.Messages.BILLING_DISCOUNT_MONTHLY_PRICE_GENERIC.format({
          numMonths: null !== (t = null == U ? void 0 : U.discount.user_usage_limit) && void 0 !== t ? t : P.DISCOUNT_DURATION_FALLBACK,
          discountedPrice: (0, I.formatPrice)(G.amount - C, G.currency),
          regularPrice: (0, I.formatPrice)(G.amount, G.currency)
        }) : T.default.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
          percent: j
        }) : w.format({
          price: (0, I.formatPrice)(G.amount, G.currency)
        })
      })
    })]
  })
}