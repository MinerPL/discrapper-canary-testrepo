t.d(n, {
  Z: function() {
return h;
  }
});
var i = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  s = t(512722),
  l = t.n(s),
  o = t(442837),
  c = t(692547),
  u = t(481060),
  d = t(987209),
  _ = t(706454),
  p = t(509545),
  m = t(669079),
  I = t(930153),
  f = t(74538),
  E = t(937615),
  x = t(104494),
  N = t(474936),
  S = t(689938),
  T = t(901770);

function h(e) {
  let {
premiumSubscription: n,
planId: t,
selectPlan: a,
selected: s,
priceOptions: h,
shouldShowUpdatedPaymentModal: b,
isEligibleForDiscount: g,
discountAmountOff: P,
isEligibleForTrial: v
  } = e, A = (0, o.e7)([_.default], () => _.default.locale), C = (0, o.e7)([p.Z], () => p.Z.get(t)), {
isGift: M,
giftRecipient: y
  } = (0, d.wD)(), O = M && (0, m.pO)(y);
  l()(null != C, 'Missing subscriptionPlan');
  let R = null != n && n.planId === t,
L = R || t === N.Xh.PREMIUM_MONTH_TIER_2 && null != n && [
  N.Xh.PREMIUM_YEAR_TIER_0,
  N.Xh.PREMIUM_YEAR_TIER_1
].includes(n.planId),
j = N.nH[t],
Z = (0, f.aS)(t, !1, M, h),
D = (0, f.Ap)(h.paymentSourceId),
w = null != j && !b,
G = (0, x.Ng)(),
B = C.interval === N.rV.YEAR ? S.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : S.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL,
U = () => null != j && (0, i.jsx)(u.Text, {
  tag: 'span',
  variant: 'eyebrow',
  color: 'always-white',
  className: T.planOptionDiscount,
  children: S.Z.Messages.BILLING_PLAN_SELECTION_DISCOUNT.format({
    discount: (0, I.T3)(A, j / 100)
  })
}),
k = () => C.interval === N.rV.YEAR && null != n || w && !R ? C.interval === N.rV.YEAR && null != n ? (0, i.jsxs)('span', {
  className: T.planOptionMonthsFree,
  children: [
    '(',
    S.Z.Messages.BILLING_SWITCH_PLAN_YEARLY_FREE_MONTHS,
    ')'
  ]
}) : w && !R ? U() : void 0 : null;
  return (0, i.jsxs)(u.Clickable, {
role: O ? 'menuitem' : 'radio',
'aria-checked': s,
tabIndex: s ? 0 : -1,
focusProps: {
  offset: {
    left: -4,
    right: -4,
    top: 0,
    bottom: 0
  }
},
onClick: L ? void 0 : () => a(t),
className: r()(T.planOptionClickableContainer, {
  [T.selectedPlan]: O && s,
  [T.selectionBox]: O
}),
children: [
  (0, i.jsxs)('div', {
    className: r()(T.planOption, {
      [T.planOptionDisabled]: L
    }),
    children: [
      (0, i.jsxs)('div', {
        className: T.planOptionClickable,
        children: [
          !O && (0, i.jsx)(u.Checkbox, {
            readOnly: !0,
            displayOnly: !0,
            value: s,
            shape: u.Checkbox.Shapes.ROUND,
            color: c.Z.unsafe_rawColors.BRAND_500.css,
            type: u.Checkbox.Types.INVERTED,
            className: T.planOptionCheckbox
          }),
          (0, i.jsxs)('div', {
            children: [
              (0, i.jsxs)('div', {
                className: r()(T.planOptionInterval, {
                  [T.optionSelected]: s || O,
                  [T.updatedOptionSelected]: b && (s || O)
                }),
                children: [
                  (0, f.L7)(C.interval, M, D, C.intervalCount, O, (0, f.Rd)(C.id)),
                  O && k()
                ]
              }),
              O && (0, i.jsx)('div', {
                className: T.planOneTimeCost,
                children: S.Z.Messages.ONE_TIME_CHARGE.format({
                  currencyAmount: (0, E.T4)(Z.amount, Z.currency)
                })
              })
            ]
          }),
          R && (0, i.jsxs)('span', {
            className: T.planOptionCurrentPlan,
            children: [
              '(',
              S.Z.Messages.BILLING_SWITCH_PLAN_CURRENT_PLAN,
              ')'
            ]
          }),
          !O && k()
        ]
      }),
      b ? (0, i.jsx)('div', {
        className: r()({
          [T.optionPriceSelected]: s
        }),
        children: S.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
          price: g && null != P && C.interval === N.rV.MONTH ? (0, E.T4)(Z.amount - P, Z.currency) : v ? (0, E.T4)(0, Z.currency, {
            maximumFractionDigits: 0
          }) : (0, E.T4)(Z.amount, Z.currency)
        })
      }) : (0, i.jsx)('div', {
        className: r()({
          [T.optionSelected]: s || O
        }),
        children: (0, E.T4)(Z.amount, Z.currency)
      })
    ]
  }),
  b && (0, i.jsx)('div', {
    className: T.planOptionSubtextContainer,
    children: (0, i.jsx)(u.Text, {
      variant: 'text-md/normal',
      color: s ? 'text-normal' : 'interactive-normal',
      className: r()(T.planOptionSubtext, {
        [T.discountPlanOptionSubtext]: g
      }),
      children: (() => {
        if (g && null != P && C.interval === N.rV.MONTH) {
          var e;
          return S.Z.Messages.BILLING_DISCOUNT_MONTHLY_PRICE_GENERIC.format({
            numMonths: null !== (e = null == G ? void 0 : G.discount.user_usage_limit) && void 0 !== e ? e : N.rt,
            discountedPrice: (0, E.T4)(Z.amount - P, Z.currency),
            regularPrice: (0, E.T4)(Z.amount, Z.currency)
          });
        }
        return v ? B.format({
          price: (0, E.T4)(Z.amount, Z.currency)
        }) : (C.interval === N.rV.YEAR && S.Z.Messages.BILLING_YEARLY_PLAN_SAVINGS.format({
          percent: j
        }), null);
      })()
    })
  })
]
  });
}