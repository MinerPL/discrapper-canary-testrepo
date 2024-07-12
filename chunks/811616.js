s.d(n, {
  Z: function() {
return P;
  }
});
var l = s(735250);
s(470079);
var t = s(120356),
  i = s.n(t),
  r = s(512722),
  a = s.n(r),
  c = s(442837),
  o = s(692547),
  u = s(481060),
  d = s(987209),
  _ = s(706454),
  m = s(509545),
  E = s(669079),
  I = s(930153),
  p = s(74538),
  N = s(937615),
  T = s(104494),
  x = s(474936),
  S = s(689938),
  h = s(901770);

function P(e) {
  let {
premiumSubscription: n,
planId: s,
selectPlan: t,
selected: r,
priceOptions: P,
shouldShowUpdatedPaymentModal: f,
isEligibleForDiscount: A,
discountAmountOff: v,
isEligibleForTrial: M
  } = e, g = (0, c.e7)([_.default], () => _.default.locale), C = (0, c.e7)([m.Z], () => m.Z.get(s)), {
isGift: O,
giftRecipient: R
  } = (0, d.wD)(), j = O && (0, E.pO)(R);
  a()(null != C, 'Missing subscriptionPlan');
  let L = null != n && n.planId === s,
y = L || s === x.Xh.PREMIUM_MONTH_TIER_2 && null != n && [
  x.Xh.PREMIUM_YEAR_TIER_0,
  x.Xh.PREMIUM_YEAR_TIER_1
].includes(n.planId),
Z = x.nH[s],
b = (0, p.aS)(s, !1, O, P),
D = (0, p.Ap)(P.paymentSourceId),
G = null != Z && !f,
U = (0, T.Ng)(),
F = C.interval === x.rV.YEAR ? S.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : S.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
B = () => null != Z && (0, l.jsx)(u.Text, {
  tag: 'span',
  variant: 'eyebrow',
  color: 'always-white',
  className: h.planOptionDiscount,
  children: S.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
    discount: (0, I.T3)(g, Z / 100)
  })
}),
w = () => C.interval === x.rV.YEAR && null != n || G && !L ? C.interval === x.rV.YEAR && null != n ? (0, l.jsxs)('span', {
  className: h.planOptionMonthsFree,
  children: [
    '(',
    S.Z.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS,
    ')'
  ]
}) : G && !L ? B() : void 0 : null;
  return (0, l.jsxs)(u.Clickable, {
role: j ? 'menuitem' : 'radio',
'aria-checked': r,
tabIndex: r ? 0 : -1,
focusProps: {
  offset: {
    left: -4,
    right: -4,
    top: 0,
    bottom: 0
  }
},
onClick: y ? void 0 : () => t(s),
className: i()(h.planOptionClickableContainer, {
  [h.selectedPlan]: j && r,
  [h.selectionBox]: j
}),
children: [
  (0, l.jsxs)('div', {
    className: i()(h.planOption, {
      [h.planOptionDisabled]: y
    }),
    children: [
      (0, l.jsxs)('div', {
        className: h.planOptionClickable,
        children: [
          !j && (0, l.jsx)(u.Checkbox, {
            readOnly: !0,
            displayOnly: !0,
            value: r,
            shape: u.Checkbox.Shapes.ROUND,
            color: o.Z.unsafe_rawColors.BRAND_500.css,
            type: u.Checkbox.Types.INVERTED,
            className: h.planOptionCheckbox
          }),
          (0, l.jsxs)('div', {
            children: [
              (0, l.jsxs)('div', {
                className: i()(h.planOptionInterval, {
                  [h.optionSelected]: r || j,
                  [h.updatedOptionSelected]: f && (r || j)
                }),
                children: [
                  (0, p.L7)(C.interval, O, D, C.intervalCount, j, (0, p.Rd)(C.id)),
                  j && w()
                ]
              }),
              j && (0, l.jsx)('div', {
                className: h.planOneTimeCost,
                children: S.Z.Messages.ONE_TIME_CHARGE.format({
                  currencyAmount: (0, N.T4)(b.amount, b.currency)
                })
              })
            ]
          }),
          L && (0, l.jsxs)('span', {
            className: h.planOptionCurrentPlan,
            children: [
              '(',
              S.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN,
              ')'
            ]
          }),
          !j && w()
        ]
      }),
      f ? (0, l.jsx)('div', {
        className: i()({
          [h.optionPriceSelected]: r
        }),
        children: S.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
          price: A && null != v && C.interval === x.rV.MONTH ? (0, N.T4)(b.amount - v, b.currency) : M ? (0, N.T4)(0, b.currency, {
            maximumFractionDigits: 0
          }) : (0, N.T4)(b.amount, b.currency)
        })
      }) : (0, l.jsx)('div', {
        className: i()({
          [h.optionSelected]: r || j
        }),
        children: (0, N.T4)(b.amount, b.currency)
      })
    ]
  }),
  f && (0, l.jsx)('div', {
    className: h.planOptionSubtextContainer,
    children: (0, l.jsx)(u.Text, {
      variant: 'text-md/normal',
      color: r ? 'text-normal' : 'interactive-normal',
      className: i()(h.planOptionSubtext, {
        [h.discountPlanOptionSubtext]: A
      }),
      children: (() => {
        if (A && null != v && C.interval === x.rV.MONTH) {
          var e;
          return S.Z.Messages.BILLING_DISCOUNT_MONTHLY_PRICE_GENERIC.format({
            numMonths: null !== (e = null == U ? void 0 : U.discount.user_usage_limit) && void 0 !== e ? e : x.rt,
            discountedPrice: (0, N.T4)(b.amount - v, b.currency),
            regularPrice: (0, N.T4)(b.amount, b.currency)
          });
        }
        return M ? F.format({
          price: (0, N.T4)(b.amount, b.currency)
        }) : (C.interval === x.rV.YEAR && S.Z.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
          percent: Z
        }), null);
      })()
    })
  })
]
  });
}