"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("627445"),
  i = n.n(a),
  l = n("976979"),
  u = n("446674"),
  o = n("77078"),
  c = n("335430"),
  d = n("703332"),
  m = n("740055"),
  f = n("545876"),
  p = n("812204"),
  _ = n("685665"),
  S = n("635357"),
  I = n("642906"),
  E = n("286350"),
  P = n("176108"),
  T = n("102985"),
  N = n("160299"),
  A = n("10514"),
  C = n("719923"),
  h = n("380186"),
  v = n("809071"),
  g = n("883662"),
  x = n("991329"),
  y = n("623003"),
  O = n("570727"),
  M = n("146163"),
  R = n("49111"),
  L = n("782340"),
  b = n("88613"),
  j = n("193692");

function G(e) {
  var t;
  let n, {
      premiumSubscription: a,
      paymentSources: p,
      priceOptions: _,
      onPaymentSourceChange: v,
      onPaymentSourceAdd: x,
      planId: M,
      setHasAcceptedTerms: b,
      legalTermsNodeRef: G,
      hasLegalTermsFlash: w,
      onInvoiceError: k,
      planGroup: H,
      currencies: Y,
      onCurrencyChange: W,
      hasOpenInvoice: Z,
      purchaseState: K,
      handleClose: V
    } = e,
    {
      selectedSkuId: z,
      defaultPlanId: J,
      isPremium: X,
      startedPaymentFlowWithPaymentSourcesRef: q
    } = (0, I.usePaymentContext)(),
    {
      isGift: Q
    } = (0, S.useGiftContext)(),
    $ = _.paymentSourceId,
    ee = (0, u.useStateFromStores)([A.default], () => A.default.get(M));
  i(null != ee, "Missing newPlan");
  let et = (0, u.useStateFromStores)([T.default], () => T.default.hidePersonalInformation);
  n = Z ? L.default.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, C.isPremiumSubscriptionPlan)(M) ? (0, C.getBillingReviewSubheader)(a, ee) : L.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
    planName: ee.name
  });
  let en = l.CountryCodesSets.EEA_COUNTRIES.has(N.default.ipCountryCodeWithFallback),
    es = K === E.PurchaseState.PURCHASING || K === E.PurchaseState.COMPLETED,
    er = (0, P.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: Q,
      selectedSkuId: z,
      startedPaymentFlowWithPaymentSources: q.current
    }),
    ea = r.useMemo(() => (0, C.getPremiumPlanOptions)({
      skuId: z,
      isPremium: X,
      multiMonthPlans: [],
      currentSubscription: a,
      isGift: Q,
      isEligibleForTrial: !1,
      defaultPlanId: J,
      defaultToMonthlyPlan: !1
    }), [z, a, J, X, Q]);
  return (0, s.jsxs)("div", {
    className: j.stepBody,
    children: [er && (0, s.jsxs)("div", {
      children: [(0, s.jsx)(g.PremiumInvoiceTableDivider, {
        negativeMarginBottom: !0,
        negativeMarginTop: !0
      }), (0, s.jsx)(O.PremiumSwitchPlanSelectBody, {
        planOptions: ea,
        eligibleForMultiMonthPlans: !1,
        selectedPlanId: M,
        showTotal: !1,
        handleClose: V
      }), (0, s.jsx)(g.PremiumInvoiceTableDivider, {})]
    }), (0, s.jsx)(o.FormTitle, {
      tag: o.FormTitleTags.H5,
      children: n
    }), null != a ? Z ? (0, s.jsx)(D, {
      premiumSubscription: a,
      onInvoiceError: k,
      priceOptions: _,
      preventFetch: !1
    }) : (0, h.subscriptionCanSwitchImmediately)(a, M, H) ? (0, s.jsx)(U, {
      premiumSubscription: a,
      newPlan: ee,
      onInvoiceError: k,
      planGroup: H,
      priceOptions: _,
      preventFetch: es
    }) : (0, s.jsx)(B, {
      premiumSubscription: a,
      newPlan: ee,
      planGroup: H,
      priceOptions: _,
      preventFetch: es
    }) : null, (0, s.jsxs)("div", {
      className: j.paymentSourceWrapper,
      children: [(0, s.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: L.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, s.jsx)(m.default, {
        paymentSources: Object.values(p),
        selectedPaymentSourceId: $,
        onChange: v,
        onPaymentSourceAdd: x,
        hidePersonalInformation: et,
        disabled: es
      })]
    }), (0, s.jsxs)(c.CurrencyWrapper, {
      currencies: Y,
      className: j.currencyWrapper,
      children: [(0, s.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: L.default.Messages.PAYMENT_CURRENCY
      }), (0, s.jsx)(c.default, {
        selectedCurrency: _.currency,
        currencies: Y,
        onChange: W,
        disabled: es
      })]
    }), (0, s.jsx)(y.default, {
      isActive: w,
      ref: G,
      children: null != a && (0, h.subscriptionCanSwitchImmediately)(a, M, H) ? (0, s.jsx)(F, {
        premiumSubscription: a,
        newPlan: ee,
        onInvoiceError: k,
        planGroup: H,
        priceOptions: _,
        preventFetch: es,
        disabled: es,
        isEEA: en,
        paymentSources: p,
        setHasAcceptedTerms: b
      }) : (0, s.jsx)(f.default, {
        onChange: b,
        finePrint: (0, s.jsx)(d.default, {
          subscriptionPlan: ee,
          paymentSourceType: null === (t = p[null != $ ? $ : ""]) || void 0 === t ? void 0 : t.type,
          basePrice: (0, C.getPrice)(ee.id, !1, Q, _),
          currentSubscription: a,
          planGroup: H
        }),
        forceShow: !0,
        showPricingLink: ee.currency !== R.CurrencyCodes.USD,
        showWithdrawalWaiver: en,
        disabled: es,
        subscriptionPlan: ee,
        currentSubscription: a,
        planGroup: H
      })
    })]
  })
}

function D(e) {
  let {
    premiumSubscription: t,
    onInvoiceError: n,
    priceOptions: a,
    preventFetch: i
  } = e, [l, u] = (0, v.useGetSubscriptionInvoice)({
    subscriptionId: t.id,
    preventFetch: i
  });
  r.useEffect(() => {
    n(u)
  }, [n, u]);
  let c = (0, C.isPrepaidPaymentSource)(a.paymentSourceId);
  return null != l ? (0, s.jsxs)(g.PremiumInvoiceTable, {
    className: b.invoice,
    children: [(0, s.jsx)(M.PremiumSubscriptionCurrentInvoiceRows, {
      invoice: l,
      isPrepaidPaymentSource: c
    }), (0, s.jsx)(M.SubscriptionInvoiceFooter, {
      premiumSubscription: t,
      renewalInvoice: l,
      isUpdate: !0,
      isPrepaidPaymentSource: c
    })]
  }) : (0, s.jsx)(o.Spinner, {})
}

function U(e) {
  let {
    premiumSubscription: t,
    newPlan: n,
    onInvoiceError: a,
    planGroup: i,
    priceOptions: l,
    preventFetch: u
  } = e, {
    selectedSkuId: c,
    startedPaymentFlowWithPaymentSourcesRef: d
  } = (0, I.usePaymentContext)(), {
    isGift: m
  } = (0, S.useGiftContext)(), {
    analyticsLocations: f
  } = (0, _.default)(), E = (0, C.getItemsWithUpsertedPlanIdForGroup)(t, n.id, 1, new Set(i)), [T, N] = (0, v.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: E,
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: l.paymentSourceId,
    currency: l.currency,
    preventFetch: u,
    analyticsLocations: f,
    analyticsLocation: p.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
  }), [A, h] = (0, v.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: E,
    renewal: !0,
    paymentSourceId: l.paymentSourceId,
    currency: l.currency,
    preventFetch: u,
    analyticsLocations: f,
    analyticsLocation: p.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
  }), x = null != N ? N : h;
  if (r.useEffect(() => {
      a(x)
    }, [a, x]), null != x) return (0, s.jsx)(o.FormErrorBlock, {
    children: x.message
  });
  let y = (0, P.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: m,
      selectedSkuId: c,
      startedPaymentFlowWithPaymentSources: d.current
    }),
    O = (0, P.planSwitchLoadingShowSpinner)(y, T, n);
  if (null == T || null == A || O) return (0, s.jsx)(o.Spinner, {
    className: j.spinner
  });
  let R = (0, C.isPrepaidPaymentSource)(l.paymentSourceId);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(M.SubscriptionPeriodResetNotice, {
      proratedInvoice: T,
      renewalInvoice: A
    }), (0, s.jsxs)(g.PremiumInvoiceTable, {
      className: j.invoice,
      children: [(0, s.jsx)(g.PremiumInvoiceTableHeader, {
        children: L.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, s.jsx)(M.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: T,
        newPlan: n,
        isPrepaidPaymentSource: R
      }), (0, s.jsx)(M.SubscriptionInvoiceFooter, {
        premiumSubscription: t,
        proratedInvoice: T,
        renewalInvoice: A,
        isUpdate: !0,
        isPrepaidPaymentSource: R
      })]
    })]
  })
}

function F(e) {
  var t, n;
  let a, {
      premiumSubscription: i,
      newPlan: l,
      onInvoiceError: u,
      planGroup: c,
      priceOptions: m,
      preventFetch: S,
      disabled: I,
      isEEA: E,
      paymentSources: P,
      setHasAcceptedTerms: T
    } = e,
    {
      analyticsLocations: N
    } = (0, _.default)(),
    A = (0, C.getItemsWithUpsertedPlanIdForGroup)(i, l.id, 1, new Set(c)),
    [h, g] = (0, v.useSubscriptionInvoicePreview)({
      subscriptionId: i.id,
      items: A,
      renewal: !0,
      paymentSourceId: m.paymentSourceId,
      currency: m.currency,
      preventFetch: S,
      analyticsLocations: N,
      analyticsLocation: p.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
    });
  return (r.useEffect(() => {
    u(g)
  }, [u, g]), null != g) ? (0, s.jsx)(o.FormErrorBlock, {
    children: g.message
  }) : (null != h && (a = {
    amount: h.total,
    currency: h.currency,
    tax: h.tax,
    taxInclusive: h.taxInclusive
  }), null == a) ? null : (0, s.jsx)(f.default, {
    onChange: T,
    finePrint: (0, s.jsx)(d.default, {
      subscriptionPlan: l,
      paymentSourceType: null === (t = P[null !== (n = m.paymentSourceId) && void 0 !== n ? n : ""]) || void 0 === t ? void 0 : t.type,
      basePrice: a,
      currentSubscription: i,
      planGroup: c
    }),
    forceShow: !0,
    showPricingLink: l.currency !== R.CurrencyCodes.USD,
    showWithdrawalWaiver: E,
    disabled: I,
    subscriptionPlan: l,
    currentSubscription: i,
    planGroup: c
  })
}

function B(e) {
  let t, {
      premiumSubscription: n,
      newPlan: r,
      planGroup: a,
      priceOptions: i,
      preventFetch: l
    } = e,
    {
      analyticsLocations: u
    } = (0, _.default)(),
    [c, d] = (0, v.useSubscriptionInvoicePreview)({
      subscriptionId: n.id,
      items: (0, C.getItemsWithUpsertedPlanIdForGroup)(n, r.id, 1, new Set(a)),
      renewal: !0,
      applyEntitlements: !1,
      paymentSourceId: i.paymentSourceId,
      currency: i.currency,
      preventFetch: l,
      analyticsLocations: u,
      analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
    });
  if (null != d) return (0, s.jsx)(o.FormErrorBlock, {
    children: d.message
  });
  if (null == c) return (0, s.jsx)("div", {
    children: (0, s.jsx)(o.Spinner, {})
  });
  t = n.type === R.SubscriptionTypes.PREMIUM ? (0, C.getDisplayName)(r.id) : r.name;
  let m = (0, C.isPrepaidPaymentSource)(i.paymentSourceId);
  return (0, s.jsxs)("div", {
    className: j.bodyText,
    children: [(0, s.jsx)("div", {
      className: b.renewalInvoiceDate,
      children: L.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: c.subscriptionPeriodStart
      })
    }), (0, s.jsxs)(g.PremiumInvoiceTable, {
      className: j.invoice,
      children: [(0, s.jsx)(g.PremiumInvoiceTableHeader, {
        children: L.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, s.jsx)(g.PremiumInvoiceTableRow, {
        label: t,
        value: (0, C.getFormattedRateForPlan)(r, i, !0)
      }), (0, s.jsx)(x.default, {
        invoice: c
      }), (0, s.jsx)(g.PremiumInvoiceTableDivider, {}), (0, s.jsx)(M.SubscriptionInvoiceFooter, {
        premiumSubscription: n,
        renewalInvoice: c,
        isUpdate: !0,
        isPrepaidPaymentSource: m
      })]
    })]
  })
}