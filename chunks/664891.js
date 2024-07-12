s.d(n, {
  Z: function() {
return D;
  }
}), s(47120);
var l = s(735250),
  t = s(470079),
  i = s(512722),
  r = s.n(i),
  a = s(742280),
  c = s(442837),
  o = s(481060),
  u = s(190947),
  d = s(224550),
  _ = s(275850),
  m = s(672971),
  E = s(100527),
  I = s(906732),
  p = s(987209),
  N = s(598),
  T = s(45572),
  x = s(614223),
  S = s(246946),
  h = s(351402),
  P = s(509545),
  f = s(74538),
  A = s(296848),
  v = s(374649),
  M = s(642530),
  g = s(653798),
  C = s(585602),
  O = s(314182),
  R = s(314404),
  j = s(42818),
  L = s(981631),
  y = s(689938),
  Z = s(598891),
  b = s(711978);

function D(e) {
  var n;
  let s, {
  premiumSubscription: i,
  paymentSources: E,
  priceOptions: I,
  onPaymentSourceChange: v,
  onPaymentSourceAdd: C,
  planId: j,
  setHasAcceptedTerms: Z,
  legalTermsNodeRef: D,
  hasLegalTermsFlash: H,
  onInvoiceError: k,
  planGroup: W,
  currencies: Y,
  onCurrencyChange: K,
  hasOpenInvoice: V,
  purchaseState: z,
  handleClose: X
} = e,
{
  selectedSkuId: J,
  defaultPlanId: q,
  isPremium: Q,
  startedPaymentFlowWithPaymentSourcesRef: $
} = (0, N.usePaymentContext)(),
{
  isGift: ee
} = (0, p.wD)(),
en = I.paymentSourceId,
es = (0, c.e7)([P.Z], () => P.Z.get(j));
  r()(null != es, 'Missing newPlan');
  let el = (0, c.e7)([S.Z], () => S.Z.hidePersonalInformation),
et = a.M.EEA_COUNTRIES.has(h.Z.ipCountryCodeWithFallback),
ei = z === T.A.PURCHASING || z === T.A.COMPLETED,
er = (0, x.Kp)({
  isTrial: !1,
  isGift: ee,
  selectedSkuId: J,
  startedPaymentFlowWithPaymentSources: $.current
}),
ea = (null == i ? void 0 : i.status) === L.O0b.PAUSED,
ec = t.useMemo(() => (0, f.V7)({
  skuId: J,
  isPremium: Q,
  multiMonthPlans: [],
  currentSubscription: i,
  isGift: ee,
  isEligibleForTrial: !1,
  defaultPlanId: q,
  defaultToMonthlyPlan: !1
}), [
  J,
  i,
  q,
  Q,
  ee
]);
  s = V || ea ? y.Z.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, f.PV)(j) ? (0, f.W_)(i, es) : y.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
planName: es.name
  });
  let eo = null;
  return null != i && (eo = V ? (0, l.jsx)(G, {
premiumSubscription: i,
onInvoiceError: k,
priceOptions: I,
preventFetch: !1
  }) : ea ? (0, l.jsx)(B, {
premiumSubscription: i,
onInvoiceError: k,
priceOptions: I,
preventFetch: ei
  }) : (0, A.R4)(i, j, W) ? (0, l.jsx)(U, {
premiumSubscription: i,
newPlan: es,
onInvoiceError: k,
planGroup: W,
priceOptions: I,
preventFetch: ei
  }) : (0, l.jsx)(w, {
premiumSubscription: i,
newPlan: es,
planGroup: W,
priceOptions: I,
preventFetch: ei
  })), (0, l.jsxs)('div', {
className: b.stepBody,
children: [
  !ea && er && (0, l.jsxs)('div', {
    children: [
      (0, l.jsx)(g.KU, {
        negativeMarginBottom: !0,
        negativeMarginTop: !0
      }),
      (0, l.jsx)(M.Z, {}),
      (0, l.jsx)(R.O, {
        planOptions: ec,
        eligibleForMultiMonthPlans: !1,
        selectedPlanId: j,
        showTotal: !1,
        handleClose: X
      }),
      (0, l.jsx)(g.KU, {})
    ]
  }),
  (0, l.jsx)(o.FormTitle, {
    tag: o.FormTitleTags.H5,
    children: s
  }),
  eo,
  (0, l.jsxs)('div', {
    className: b.paymentSourceWrapper,
    children: [
      (0, l.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: y.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }),
      (0, l.jsx)(_.Z, {
        paymentSources: Object.values(E),
        selectedPaymentSourceId: en,
        onChange: v,
        onPaymentSourceAdd: C,
        hidePersonalInformation: el,
        disabled: ei
      })
    ]
  }),
  (0, l.jsxs)(u.b, {
    currencies: Y,
    className: b.currencyWrapper,
    children: [
      (0, l.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: y.Z.Messages.PAYMENT_CURRENCY
      }),
      (0, l.jsx)(u.Z, {
        selectedCurrency: I.currency,
        currencies: Y,
        onChange: K,
        disabled: ei
      })
    ]
  }),
  (0, l.jsx)(O.Z, {
    isActive: H,
    ref: D,
    children: null != i && (0, A.R4)(i, j, W) ? (0, l.jsx)(F, {
      premiumSubscription: i,
      newPlan: es,
      onInvoiceError: k,
      planGroup: W,
      priceOptions: I,
      preventFetch: ei,
      disabled: ei,
      isEEA: et,
      paymentSources: E,
      setHasAcceptedTerms: Z
    }) : (0, l.jsx)(m.Z, {
      onChange: Z,
      finePrint: (0, l.jsx)(d.Z, {
        subscriptionPlan: es,
        paymentSourceType: null === (n = E[null != en ? en : '']) || void 0 === n ? void 0 : n.type,
        basePrice: (0, f.aS)(es.id, !1, ee, I),
        currentSubscription: i,
        planGroup: W
      }),
      forceShow: !0,
      showPricingLink: es.currency !== L.pKx.USD,
      showWithdrawalWaiver: et,
      disabled: ei,
      subscriptionPlan: es,
      currentSubscription: i,
      planGroup: W
    })
  })
]
  });
}

function G(e) {
  let {
premiumSubscription: n,
onInvoiceError: s,
priceOptions: i,
preventFetch: r
  } = e, [a, c] = (0, v.Ox)({
subscriptionId: n.id,
preventFetch: r
  });
  t.useEffect(() => {
s(c);
  }, [
s,
c
  ]);
  let u = (0, f.Ap)(i.paymentSourceId);
  return null != a ? (0, l.jsxs)(g.PO, {
className: Z.__invalid_invoice,
children: [
  (0, l.jsx)(j.By, {
    invoice: a,
    isPrepaidPaymentSource: u
  }),
  (0, l.jsx)(j.nd, {
    premiumSubscription: n,
    renewalInvoice: a,
    isUpdate: !0,
    isPrepaidPaymentSource: u
  })
]
  }) : (0, l.jsx)(o.Spinner, {});
}

function U(e) {
  let {
premiumSubscription: n,
newPlan: s,
onInvoiceError: i,
planGroup: r,
priceOptions: a,
preventFetch: c
  } = e, {
selectedSkuId: u,
startedPaymentFlowWithPaymentSourcesRef: d
  } = (0, N.usePaymentContext)(), {
isGift: _
  } = (0, p.wD)(), {
analyticsLocations: m
  } = (0, I.ZP)(), T = (0, f.al)(n, s.id, 1, new Set(r)), [S, h] = (0, v.ED)({
subscriptionId: n.id,
items: T,
renewal: !1,
applyEntitlements: !0,
paymentSourceId: a.paymentSourceId,
currency: a.currency,
preventFetch: c,
analyticsLocations: m,
analyticsLocation: E.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
  }), [P, A] = (0, v.ED)({
subscriptionId: n.id,
items: T,
renewal: !0,
paymentSourceId: a.paymentSourceId,
currency: a.currency,
preventFetch: c,
analyticsLocations: m,
analyticsLocation: E.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
  }), M = null != h ? h : A;
  if (t.useEffect(() => {
  i(M);
}, [
  i,
  M
]), null != M)
return (0, l.jsx)(o.FormErrorBlock, {
  children: M.message
});
  let C = (0, x.Kp)({
  isTrial: !1,
  isGift: _,
  selectedSkuId: u,
  startedPaymentFlowWithPaymentSources: d.current
}),
O = (0, x.$g)(C, S, s);
  if (null == S || null == P || O)
return (0, l.jsx)(o.Spinner, {
  className: b.__invalid_spinner
});
  let R = (0, f.Ap)(a.paymentSourceId);
  return (0, l.jsxs)(l.Fragment, {
children: [
  (0, l.jsx)(j.hG, {
    proratedInvoice: S,
    renewalInvoice: P
  }),
  (0, l.jsxs)(g.PO, {
    className: b.invoice,
    children: [
      (0, l.jsx)(g.q9, {
        children: y.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }),
      (0, l.jsx)(j.Lu, {
        invoice: S,
        newPlan: s,
        isPrepaidPaymentSource: R
      }),
      (0, l.jsx)(j.nd, {
        premiumSubscription: n,
        proratedInvoice: S,
        renewalInvoice: P,
        isUpdate: !0,
        isPrepaidPaymentSource: R
      })
    ]
  })
]
  });
}

function F(e) {
  var n, s;
  let i, {
  premiumSubscription: r,
  newPlan: a,
  onInvoiceError: c,
  planGroup: u,
  priceOptions: _,
  preventFetch: p,
  disabled: N,
  isEEA: T,
  paymentSources: x,
  setHasAcceptedTerms: S
} = e,
{
  analyticsLocations: h
} = (0, I.ZP)(),
P = (0, f.al)(r, a.id, 1, new Set(u)),
[A, M] = (0, v.ED)({
  subscriptionId: r.id,
  items: P,
  renewal: !0,
  paymentSourceId: _.paymentSourceId,
  currency: _.currency,
  preventFetch: p,
  analyticsLocations: h,
  analyticsLocation: E.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
});
  return (t.useEffect(() => {
c(M);
  }, [
c,
M
  ]), null != M) ? (0, l.jsx)(o.FormErrorBlock, {
children: M.message
  }) : (null != A && (i = {
amount: A.total,
currency: A.currency,
tax: A.tax,
taxInclusive: A.taxInclusive
  }), null == i) ? null : (0, l.jsx)(m.Z, {
onChange: S,
finePrint: (0, l.jsx)(d.Z, {
  subscriptionPlan: a,
  paymentSourceType: null === (n = x[null !== (s = _.paymentSourceId) && void 0 !== s ? s : '']) || void 0 === n ? void 0 : n.type,
  basePrice: i,
  currentSubscription: r,
  planGroup: u
}),
forceShow: !0,
showPricingLink: a.currency !== L.pKx.USD,
showWithdrawalWaiver: T,
disabled: N,
subscriptionPlan: a,
currentSubscription: r,
planGroup: u
  });
}

function B(e) {
  let {
premiumSubscription: n,
priceOptions: s,
preventFetch: i,
onInvoiceError: r
  } = e, {
analyticsLocations: a
  } = (0, I.ZP)(), [c, u] = (0, v.ED)({
subscriptionId: n.id,
renewal: !0,
applyEntitlements: !0,
paymentSourceId: s.paymentSourceId,
currency: s.currency,
preventFetch: i,
analyticsLocations: a,
analyticsLocation: E.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
  }), [d, _] = (0, v.ED)({
subscriptionId: n.id,
renewal: !0,
paymentSourceId: s.paymentSourceId,
currency: s.currency,
preventFetch: i,
analyticsLocations: a,
analyticsLocation: E.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
  }), m = null != u ? u : _;
  if (t.useEffect(() => {
  r(m);
}, [
  r,
  m
]), null != m)
return (0, l.jsx)(o.FormErrorBlock, {
  children: m.message
});
  if (null == c || null == d)
return (0, l.jsx)(o.Spinner, {
  className: b.__invalid_spinner
});
  let p = (0, f.Ap)(s.paymentSourceId);
  return (0, l.jsxs)(l.Fragment, {
children: [
  (0, l.jsx)('div', {
    className: Z.renewalInvoiceDate,
    children: y.Z.Messages.BILLING_RESUME_PAUSED_SUBSCRIPTION_IMMEDIATELY
  }),
  (0, l.jsxs)(g.PO, {
    className: b.invoice,
    children: [
      (0, l.jsx)(g.q9, {
        children: y.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }),
      (0, l.jsx)(j.By, {
        invoice: c,
        isPrepaidPaymentSource: p
      }),
      (0, l.jsx)(j.nd, {
        premiumSubscription: n,
        renewalInvoice: d,
        isUpdate: !0,
        isPrepaidPaymentSource: p
      })
    ]
  })
]
  });
}

function w(e) {
  let n, {
  premiumSubscription: s,
  newPlan: t,
  planGroup: i,
  priceOptions: r,
  preventFetch: a
} = e,
{
  analyticsLocations: c
} = (0, I.ZP)(),
[u, d] = (0, v.ED)({
  subscriptionId: s.id,
  items: (0, f.al)(s, t.id, 1, new Set(i)),
  renewal: !0,
  applyEntitlements: !1,
  paymentSourceId: r.paymentSourceId,
  currency: r.currency,
  preventFetch: a,
  analyticsLocations: c,
  analyticsLocation: 'billing_switch_plan_renewal_mutation_renewal_invoice_preview'
});
  if (null != d)
return (0, l.jsx)(o.FormErrorBlock, {
  children: d.message
});
  if (null == u)
return (0, l.jsx)('div', {
  children: (0, l.jsx)(o.Spinner, {})
});
  n = s.type === L.NYc.PREMIUM ? (0, f.Gf)(t.id) : t.name;
  let _ = (0, f.Ap)(r.paymentSourceId);
  return (0, l.jsxs)('div', {
className: b.bodyText,
children: [
  (0, l.jsx)('div', {
    className: Z.renewalInvoiceDate,
    children: y.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
      renewalDate: u.subscriptionPeriodStart
    })
  }),
  (0, l.jsxs)(g.PO, {
    className: b.invoice,
    children: [
      (0, l.jsx)(g.q9, {
        children: y.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }),
      (0, l.jsx)(g.R$, {
        label: n,
        value: (0, f.PK)(t, r, !0)
      }),
      (0, l.jsx)(C.Z, {
        invoice: u
      }),
      (0, l.jsx)(g.KU, {}),
      (0, l.jsx)(j.nd, {
        premiumSubscription: s,
        renewalInvoice: u,
        isUpdate: !0,
        isPrepaidPaymentSource: _
      })
    ]
  })
]
  });
}