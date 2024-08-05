s.d(n, {
  As: function() {
return g;
  },
  By: function() {
return x;
  },
  Lu: function() {
return Z;
  },
  e9: function() {
return Y;
  },
  hG: function() {
return D;
  },
  nd: function() {
return y;
  },
  yT: function() {
return H;
  }
}), s(411104), s(724458), s(47120);
var t = s(735250),
  r = s(470079),
  l = s(120356),
  a = s.n(l),
  i = s(512722),
  c = s.n(i),
  o = s(442837),
  u = s(481060),
  I = s(911969),
  _ = s(100527),
  E = s(906732),
  T = s(509545),
  d = s(259580),
  N = s(63063),
  M = s(74538),
  A = s(937615),
  P = s(374649),
  L = s(591548),
  R = s(639119),
  S = s(653798),
  m = s(585602),
  U = s(474936),
  p = s(981631),
  O = s(689938),
  C = s(29232);
let v = (e, n) => {
var s;
return !!(null === (s = e.discounts) || void 0 === s ? void 0 : s.some(e => e.type === n));
  },
  h = (e, n) => {
var s, t, r;
return e.subscriptionPlanPrice - (null !== (r = null === (t = e.discounts) || void 0 === t ? void 0 : null === (s = t.find(e => e.type === n)) || void 0 === s ? void 0 : s.amount) && void 0 !== r ? r : 0);
  };

function f(e) {
  var n;
  let {
invoiceItem: s,
overrideAmount: r,
showGuildSubscriptionAdjustmentTooltip: l,
currency: a,
className: i,
isPrepaidPaymentSource: _,
referralTrialOfferId: E
  } = e, d = (0, o.e7)([T.Z], () => T.Z.get(s.subscriptionPlanId)), N = null === (n = (0, R.N)(E)) || void 0 === n ? void 0 : n.subscription_trial;
  c()(null != d, 'Missing subscriptionPlan');
  let P = function(e, n, s, t) {
let r = v(e, I.eW.PREMIUM_TRIAL);
switch (e.subscriptionPlanId) {
  case U.Xh.PREMIUM_MONTH_LEGACY:
  case U.Xh.PREMIUM_YEAR_LEGACY:
  case U.Xh.PREMIUM_MONTH_TIER_0:
  case U.Xh.PREMIUM_YEAR_TIER_0:
  case U.Xh.PREMIUM_MONTH_TIER_1:
  case U.Xh.PREMIUM_YEAR_TIER_1:
  case U.Xh.PREMIUM_MONTH_TIER_2:
  case U.Xh.PREMIUM_YEAR_TIER_2:
  case U.Xh.PREMIUM_3_MONTH_TIER_2:
  case U.Xh.PREMIUM_6_MONTH_TIER_2:
    return (0, M.Gf)(e.subscriptionPlanId, r, s, t);
  case U.Xh.PREMIUM_3_MONTH_GUILD:
  case U.Xh.PREMIUM_6_MONTH_GUILD:
    return O.Z.Messages.PREMIUM_GUILD_NUM_MULTI_MONTHS_GUILD_SUBSCRIPTIONS.format({
      num: e.quantity,
      intervalCount: n.intervalCount
    });
  case U.Xh.PREMIUM_MONTH_GUILD:
    return O.Z.Messages.PREMIUM_GUILD_NUM_MONTH_GUILD_SUBSCRIPTIONS.format({
      num: e.quantity
    });
  case U.Xh.PREMIUM_YEAR_GUILD:
    return O.Z.Messages.PREMIUM_GUILD_NUM_YEAR_GUILD_SUBSCRIPTIONS.format({
      num: e.quantity
    });
}
switch (n.interval) {
  case U.rV.MONTH:
    if (1 === n.intervalCount)
      return O.Z.Messages.MONTHLY_GUILD_SUBSCRIPTION.format({
        planName: n.name
      });
    return O.Z.Messages.MULTI_MONTHS_GUILD_SUBSCRIPTION.format({
      planName: n.name,
      intervalCount: n.intervalCount
    });
  case U.rV.YEAR:
    return O.Z.Messages.YEARLY_GUILD_SUBSCRIPTION.format({
      planName: n.name
    });
}
throw Error('Unexpected invoice plan: '.concat(e.subscriptionPlanId));
  }(s, d, _, (0, M.if)({
intervalType: null == N ? void 0 : N.interval,
intervalCount: null == N ? void 0 : N.interval_count
  }));
  !0 === l && (P = (0, t.jsxs)('div', {
className: C.invoiceItemLabelWithIcon,
children: [
  (0, t.jsxs)('div', {
    children: [
      P,
      ' '
    ]
  }),
  (0, t.jsx)(u.Tooltip, {
    text: O.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
    'aria-label': O.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT,
    tooltipClassName: C.invoiceItemTooltip,
    children: e => (0, t.jsx)(u.CircleQuestionIcon, {
      size: 'md',
      color: 'currentColor',
      ...e,
      className: C.invoiceItemLabelIcon
    })
  })
]
  }));
  let L = (0, A.T4)(null != r ? r : s.amount, a),
m = _ ? L : (0, A.og)(L, d.interval, d.intervalCount);
  return (0, t.jsx)(S.i$, {
label: P,
value: m,
originalAmount: s.subscriptionPlanPrice * s.quantity,
discounts: s.discounts,
interval: d.interval,
intervalCount: d.intervalCount,
currency: a,
className: i
  });
}

function g(e) {
  let {
label: n,
tooltipText: s,
tooltipAriaLabel: r
  } = e;
  return (0, t.jsxs)('div', {
className: C.invoiceItemLabelWithIcon,
children: [
  n,
  (0, t.jsx)(u.Tooltip, {
    clickableOnMobile: !0,
    text: s,
    'aria-label': r,
    tooltipClassName: C.invoiceItemTooltip,
    children: e => (0, t.jsx)(u.CircleQuestionIcon, {
      size: 'md',
      color: 'currentColor',
      ...e,
      className: C.invoiceItemLabelIcon
    })
  })
]
  });
}

function x(e) {
  let {
invoice: n,
isPrepaidPaymentSource: s
  } = e, r = (0, L.j)(n.invoiceItems), l = r.find(e => !(0, M.Z8)(e.subscriptionPlanId) && e.amount >= 0), a = r.find(e => (0, M.Z8)(e.subscriptionPlanId) && e.amount >= 0), i = (0, o.e7)([T.Z], () => null != a ? T.Z.get(a.subscriptionPlanId) : null), c = null != a ? a.amount : 0, u = (0, A.T4)(c, n.currency), I = null != i ? (0, A.og)(u, i.interval, i.intervalCount) : 0;
  return (0, t.jsxs)(t.Fragment, {
children: [
  null != l ? (0, t.jsx)(f, {
    invoiceItem: l,
    currency: n.currency,
    isPrepaidPaymentSource: s
  }) : null,
  0 !== c && null != a && null != i ? (0, t.jsx)(S.R$, {
    label: O.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
      numGuildSubscriptions: a.quantity,
      planName: (0, M.Gf)(i.id, !1, s)
    }),
    value: s ? u : I
  }) : null,
  (0, t.jsx)(m.Z, {
    invoice: n
  }),
  (0, t.jsx)(S.KU, {}),
  (0, t.jsx)(S.Ji, {
    label: (n.taxInclusive ? s ? O.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : O.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : O.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
    value: n.currency === p.pKx.USD ? (0, A.T4)(n.total, n.currency) : ''.concat((0, A.T4)(n.total, n.currency), '*')
  })
]
  });
}

function Z(e) {
  let {
invoice: n,
newPlan: s,
isPrepaidPaymentSource: r,
referralTrialOfferId: l
  } = e, a = (0, L.j)(n.invoiceItems), i = a.find(e => e.subscriptionPlanId === s.id);
  c()(null != i, 'Expected newPlanInvoiceItem');
  let o = a.find(e => !(0, M.Z8)(e.subscriptionPlanId) && e.amount < 0),
u = a.find(e => null == e.subscriptionPlanId && null != e.discounts && e.discounts.find(e => e.type === I.eW.PREMIUM_LEGACY_UPGRADE_PROMOTION)),
_ = v(i, I.eW.PREMIUM_TRIAL),
E = h(i, I.eW.SUBSCRIPTION_PLAN),
T = i.quantity * E,
d = i.amount + (null != o ? o.amount : 0) - T + (null != u ? u.amount : 0),
N = a.filter(e => e.subscriptionPlanId === U.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === U.Xh.PREMIUM_YEAR_GUILD).reduce((e, n) => e + n.amount, 0);
  return (0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsx)(f, {
    invoiceItem: i,
    currency: n.currency,
    overrideAmount: T,
    isPrepaidPaymentSource: r,
    referralTrialOfferId: l
  }),
  0 === d || _ ? null : (0, t.jsx)(S.R$, {
    label: (0, t.jsx)(g, {
      label: O.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({
        planName: (0, M.PV)(s.id) ? (0, M.aq)(s.id) : s.name
      }),
      tooltipText: O.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
    }),
    value: (0, A.T4)(d, n.currency)
  }),
  0 !== N ? (0, t.jsx)(S.R$, {
    label: (0, t.jsx)(g, {
      label: O.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
      tooltipText: O.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TOOLTIP.format(),
      tooltipAriaLabel: O.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT_TEXT
    }),
    value: (0, A.T4)(N, n.currency)
  }) : null,
  (0, t.jsx)(m.Z, {
    invoice: n
  }),
  (0, t.jsx)(S.KU, {}),
  (0, t.jsx)(S.Ji, {
    label: (n.taxInclusive ? r ? O.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : O.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE : O.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
    value: n.currency === p.pKx.USD ? (0, A.T4)(n.total, n.currency) : ''.concat((0, A.T4)(n.total, n.currency), '*')
  })
]
  });
}

function b(e) {
  let n = e.slice();
  return n.sort((e, n) => {
let s = (0, M.uZ)(e.subscriptionPlanId),
  t = (0, M.uZ)(n.subscriptionPlanId);
return s && !t ? -1 : !s && t ? 1 : 0;
  }), n;
}

function B(e) {
  return e.filter(e => {
let {
  subscriptionPlanId: n
} = e;
return n !== U.Xh.NONE_MONTH && n !== U.Xh.NONE_YEAR;
  });
}

function D(e) {
  let {
proratedInvoice: n,
renewalInvoice: s
  } = e, {
intervalType: r,
intervalCount: l
  } = (0, M.dn)(n), {
intervalType: a,
intervalCount: i
  } = (0, M.dn)(s);
  return r !== a || l !== i || n.subscriptionPeriodEnd.getTime() === s.subscriptionPeriodStart.getTime() ? null : (0, t.jsx)('div', {
className: C.subscriptionPeriodResetNotice,
children: O.Z.Messages.PREMIUM_SUBSCRIPTION_PERIOD_RESET_NOTICE.format({
  renewalDate: n.subscriptionPeriodEnd
})
  });
}

function G(e) {
  let {
isUpdate: n,
currentInvoice: s,
newInvoice: r
  } = e, l = null != s ? (0, L.j)(s.invoiceItems) : null, i = null != s ? (0, M.dn)(s) : null, {
intervalType: c,
intervalCount: o
  } = (0, M.dn)(r), u = null != i && (i.intervalType !== c || i.intervalCount !== o);
  return (0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsx)(S.KU, {
    extended: !0
  }),
  null != s ? (0, t.jsxs)(t.Fragment, {
    children: [
      (0, t.jsx)(S.q9, {
        children: O.Z.Messages.PREMIUM_SUBSCRIPTION_CURRENT_LABEL
      }),
      B(b((0, L.j)(s.invoiceItems))).map(e => (0, t.jsx)(f, {
        invoiceItem: e,
        currency: s.currency
      }, e.id)),
      (0, t.jsx)(S.KU, {
        extended: !0
      })
    ]
  }) : null,
  (0, t.jsx)(S.q9, {
    children: O.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_LABEL
  }),
  B(b((0, L.j)(r.invoiceItems))).map(e => {
    let s = null != l && !l.some(n => n.subscriptionPlanId === e.subscriptionPlanId && n.quantity === e.quantity);
    return (0, t.jsx)(f, {
      invoiceItem: e,
      currency: r.currency,
      showGuildSubscriptionAdjustmentTooltip: u && (e.subscriptionPlanId === U.Xh.PREMIUM_MONTH_GUILD || e.subscriptionPlanId === U.Xh.PREMIUM_YEAR_GUILD || e.subscriptionPlanId === U.Xh.PREMIUM_3_MONTH_GUILD || e.subscriptionPlanId === U.Xh.PREMIUM_6_MONTH_GUILD),
      className: a()({
        [C.subscriptionAddedInvoiceItem]: !n || s
      })
    }, e.id);
  }),
  (0, t.jsx)(m.Z, {
    invoice: r
  }),
  (0, t.jsx)(S.KU, {}),
  (0, t.jsx)(S.R$, {
    label: O.Z.Messages.PREMIUM_SUBSCRIPTION_NEW_TOTAL,
    value: (0, A.og)((0, A.T4)(r.total, r.currency), c, o),
    className: C.subscriptionCostRow
  })
]
  });
}

function j(e) {
  var n;
  let {
proratedInvoice: s,
renewalInvoice: r,
isTrial: l,
isUpdate: a,
overrideRenewalDate: i,
trialFooterMessageOverride: c
  } = e, o = null === (n = (0, R.N)()) || void 0 === n ? void 0 : n.subscription_trial, {
intervalType: u,
intervalCount: I
  } = (0, M.dn)(r);
  if (null == s)
return null;
  if (l) {
let e = (0, M.if)({
    intervalType: null == o ? void 0 : o.interval,
    intervalCount: null == o ? void 0 : o.interval_count
  }),
  n = (null == o ? void 0 : o.interval) === U.rV.DAY && (null == o ? void 0 : o.interval_count) < 28 ? 2 : 7;
return (0, t.jsx)(t.Fragment, {
  children: null != c ? c : O.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TRIAL_DURATION.format({
    duration: e,
    days: n,
    contactLink: p.EYA.CONTACT,
    helpdeskArticle: N.Z.getArticleURL(p.BhN.PREMIUM_TRIAL)
  })
});
  }
  let _ = r.taxInclusive ? O.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER : O.Z.Messages.PREMIUM_SUBSCRIPTION_RENEWAL_FOOTER_TAX_EXCLUSIVE;
  return (0, t.jsx)(t.Fragment, {
children: _.format({
  rate: (0, A.og)((0, A.T4)(r.subtotal, r.currency), u, I),
  renewalDate: null != i ? i : a ? null != s ? s.subscriptionPeriodEnd : r.subscriptionPeriodStart : r.subscriptionPeriodEnd,
  contactLink: p.EYA.CONTACT,
  helpdeskArticle: N.Z.getArticleURL(p.BhN.BILLING)
})
  });
}

function y(e) {
  let {
premiumSubscription: n,
proratedInvoice: s,
renewalInvoice: l,
overrideRenewalDate: a,
isUpdate: i = !1,
isTrial: c = !1,
priceOptions: o,
isPrepaidPaymentSource: I = !1,
trialFooterMessageOverride: T,
hideSubscriptionDetails: N = !1
  } = e, {
analyticsLocations: M
  } = (0, E.ZP)(), A = {
subscriptionId: null == n ? void 0 : n.id,
renewal: !0,
preventFetch: !i,
analyticsLocatinons: M,
analyticsLocation: _.Z.SUBSCRIPTION_INVOICE_FOOTER,
...o
  }, [L] = (0, P.ED)(A), [R, m] = r.useState(!1);
  return (0, t.jsxs)(t.Fragment, {
children: [
  I ? null : (0, t.jsx)(S.HE, {
    children: (0, t.jsx)(j, {
      proratedInvoice: s,
      renewalInvoice: l,
      isTrial: c,
      isUpdate: i,
      overrideRenewalDate: a,
      trialFooterMessageOverride: T
    })
  }),
  !N && (0, t.jsxs)(t.Fragment, {
    children: [
      (0, t.jsxs)(u.Clickable, {
        onClick: () => m(e => !e),
        className: C.subscriptionDetailsToggle,
        children: [
          R ? O.Z.Messages.PREMIUM_SUBSCRIPTION_HIDE_DETAILS : O.Z.Messages.PREMIUM_SUBSCRIPTION_SHOW_DETAILS,
          (0, t.jsx)(d.Z, {
            direction: R ? d.Z.Directions.UP : d.Z.Directions.DOWN,
            className: C.subscriptionDetailsToggleCaret
          })
        ]
      }),
      R ? (0, t.jsx)(G, {
        isUpdate: i,
        currentInvoice: L,
        newInvoice: l
      }) : null
    ]
  })
]
  });
}

function Y(e) {
  let n, {
  plan: s,
  className: r,
  isPrepaidPaymentSource: l = !1,
  isCustomGift: a = !1,
  invoicePreview: i
} = e,
{
  tax: c,
  taxInclusive: o,
  currency: I
} = i,
_ = i.total,
E = _ - c,
T = (0, A.T4)(E, I),
d = (0, A.T4)(_, I);
  return n = a ? (0, M.L7)(s.interval, !0, void 0, void 0, !0, (0, M.Rd)(s.id)) : O.Z.Messages.BILLING_INVOICE_GIFT_PLAN.format({
planName: (0, M.Gf)(s.id, !1, l)
  }), (0, t.jsxs)('div', {
className: r,
children: [
  (0, t.jsx)(u.FormTitle, {
    children: O.Z.Messages.PREMIUM_GIFTING_BUTTON
  }),
  c >= 0 && !1 === o ? (0, t.jsxs)(t.Fragment, {
    children: [
      (0, t.jsx)(u.Text, {
        variant: 'text-md/bold',
        className: C.purchaseDetailsHeaderText,
        children: n
      }),
      (0, t.jsxs)(S.PO, {
        className: r,
        children: [
          (0, t.jsx)(S.q9, {
            children: O.Z.Messages.ONE_TIME_PURCHASE_REVIEW_STEP_PURCHASE_DETAILS_LABEL
          }),
          (0, t.jsx)(S.R$, {
            label: n,
            value: T
          }),
          (0, t.jsx)(m.Z, {
            invoice: i
          }),
          (0, t.jsx)(S.KU, {}),
          (0, t.jsx)(S.R$, {
            label: O.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
            value: d,
            className: C.subscriptionCostRow
          })
        ]
      })
    ]
  }) : (0, t.jsx)(u.Heading, {
    variant: 'text-md/normal',
    children: ''.concat(n, ' - ').concat(d)
  })
]
  });
}

function H(e) {
  let n, {
  invoice: s,
  plan: r
} = e,
l = (0, L.j)(s.invoiceItems).find(e => e.subscriptionPlanId === r.id);
  return c()(null != l, 'newPlanInvoiceItem can not be null'), r.interval === U.rV.MONTH ? n = s.taxInclusive ? O.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL : O.Z.Messages.BILLING_TRIAL_MONTHLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE : r.interval === U.rV.YEAR ? n = s.taxInclusive ? O.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL : O.Z.Messages.BILLING_TRIAL_YEARLY_PRICE_AFTER_TRIAL_TAX_EXCLUSIVE : c()(!1, 'Invalid interval type'), (0, t.jsx)(u.Text, {
variant: 'text-md/normal',
children: n.format({
  price: (0, A.T4)(l.subscriptionPlanPrice, s.currency)
})
  });
}