"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("512722"),
  l = n.n(a),
  r = n("742280"),
  u = n("442837"),
  o = n("481060"),
  c = n("190947"),
  d = n("224550"),
  m = n("275850"),
  f = n("672971"),
  p = n("100527"),
  S = n("906732"),
  _ = n("987209"),
  I = n("598"),
  E = n("45572"),
  P = n("614223"),
  T = n("246946"),
  N = n("351402"),
  h = n("509545"),
  x = n("74538"),
  v = n("296848"),
  A = n("374649"),
  C = n("653798"),
  g = n("585602"),
  y = n("314182"),
  M = n("314404"),
  b = n("42818"),
  O = n("981631"),
  R = n("689938"),
  L = n("867765"),
  j = n("422449");

function G(e) {
  var t;
  let n, {
      premiumSubscription: a,
      paymentSources: p,
      priceOptions: S,
      onPaymentSourceChange: A,
      onPaymentSourceAdd: g,
      planId: b,
      setHasAcceptedTerms: L,
      legalTermsNodeRef: G,
      hasLegalTermsFlash: B,
      onInvoiceError: k,
      planGroup: H,
      currencies: W,
      onCurrencyChange: Y,
      hasOpenInvoice: K,
      purchaseState: V,
      handleClose: Z
    } = e,
    {
      selectedSkuId: z,
      defaultPlanId: J,
      isPremium: X,
      startedPaymentFlowWithPaymentSourcesRef: q
    } = (0, I.usePaymentContext)(),
    {
      isGift: Q
    } = (0, _.useGiftContext)(),
    $ = S.paymentSourceId,
    ee = (0, u.useStateFromStores)([h.default], () => h.default.get(b));
  l()(null != ee, "Missing newPlan");
  let et = (0, u.useStateFromStores)([T.default], () => T.default.hidePersonalInformation);
  n = K ? R.default.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, x.isPremiumSubscriptionPlan)(b) ? (0, x.getBillingReviewSubheader)(a, ee) : R.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
    planName: ee.name
  });
  let en = r.CountryCodesSets.EEA_COUNTRIES.has(N.default.ipCountryCodeWithFallback),
    ei = V === E.PurchaseState.PURCHASING || V === E.PurchaseState.COMPLETED,
    es = (0, P.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: Q,
      selectedSkuId: z,
      startedPaymentFlowWithPaymentSources: q.current
    }),
    ea = (null == a ? void 0 : a.status) === O.SubscriptionStatusTypes.PAUSED,
    el = s.useMemo(() => (0, x.getPremiumPlanOptions)({
      skuId: z,
      isPremium: X,
      multiMonthPlans: [],
      currentSubscription: a,
      isGift: Q,
      isEligibleForTrial: !1,
      defaultPlanId: J,
      defaultToMonthlyPlan: !1
    }), [z, a, J, X, Q]);
  return (0, i.jsxs)("div", {
    className: j.stepBody,
    children: [!ea && es && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(C.PremiumInvoiceTableDivider, {
        negativeMarginBottom: !0,
        negativeMarginTop: !0
      }), (0, i.jsx)(M.PremiumSwitchPlanSelectBody, {
        planOptions: el,
        eligibleForMultiMonthPlans: !1,
        selectedPlanId: b,
        showTotal: !1,
        handleClose: Z
      }), (0, i.jsx)(C.PremiumInvoiceTableDivider, {})]
    }), (0, i.jsx)(o.FormTitle, {
      tag: o.FormTitleTags.H5,
      children: n
    }), null != a ? K ? (0, i.jsx)(D, {
      premiumSubscription: a,
      onInvoiceError: k,
      priceOptions: S,
      preventFetch: !1
    }) : (0, v.subscriptionCanSwitchImmediately)(a, b, H) ? (0, i.jsx)(F, {
      premiumSubscription: a,
      newPlan: ee,
      onInvoiceError: k,
      planGroup: H,
      priceOptions: S,
      preventFetch: ei
    }) : (0, i.jsx)(w, {
      premiumSubscription: a,
      newPlan: ee,
      planGroup: H,
      priceOptions: S,
      preventFetch: ei
    }) : null, (0, i.jsxs)("div", {
      className: j.paymentSourceWrapper,
      children: [(0, i.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: R.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, i.jsx)(m.default, {
        paymentSources: Object.values(p),
        selectedPaymentSourceId: $,
        onChange: A,
        onPaymentSourceAdd: g,
        hidePersonalInformation: et,
        disabled: ei
      })]
    }), (0, i.jsxs)(c.CurrencyWrapper, {
      currencies: W,
      className: j.currencyWrapper,
      children: [(0, i.jsx)(o.FormTitle, {
        tag: o.FormTitleTags.H5,
        children: R.default.Messages.PAYMENT_CURRENCY
      }), (0, i.jsx)(c.default, {
        selectedCurrency: S.currency,
        currencies: W,
        onChange: Y,
        disabled: ei
      })]
    }), (0, i.jsx)(y.default, {
      isActive: B,
      ref: G,
      children: null != a && (0, v.subscriptionCanSwitchImmediately)(a, b, H) ? (0, i.jsx)(U, {
        premiumSubscription: a,
        newPlan: ee,
        onInvoiceError: k,
        planGroup: H,
        priceOptions: S,
        preventFetch: ei,
        disabled: ei,
        isEEA: en,
        paymentSources: p,
        setHasAcceptedTerms: L
      }) : (0, i.jsx)(f.default, {
        onChange: L,
        finePrint: (0, i.jsx)(d.default, {
          subscriptionPlan: ee,
          paymentSourceType: null === (t = p[null != $ ? $ : ""]) || void 0 === t ? void 0 : t.type,
          basePrice: (0, x.getPrice)(ee.id, !1, Q, S),
          currentSubscription: a,
          planGroup: H
        }),
        forceShow: !0,
        showPricingLink: ee.currency !== O.CurrencyCodes.USD,
        showWithdrawalWaiver: en,
        disabled: ei,
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
    preventFetch: l
  } = e, [r, u] = (0, A.useGetSubscriptionInvoice)({
    subscriptionId: t.id,
    preventFetch: l
  });
  s.useEffect(() => {
    n(u)
  }, [n, u]);
  let c = (0, x.isPrepaidPaymentSource)(a.paymentSourceId);
  return null != r ? (0, i.jsxs)(C.PremiumInvoiceTable, {
    className: L.__invalid_invoice,
    children: [(0, i.jsx)(b.PremiumSubscriptionCurrentInvoiceRows, {
      invoice: r,
      isPrepaidPaymentSource: c
    }), (0, i.jsx)(b.SubscriptionInvoiceFooter, {
      premiumSubscription: t,
      renewalInvoice: r,
      isUpdate: !0,
      isPrepaidPaymentSource: c
    })]
  }) : (0, i.jsx)(o.Spinner, {})
}

function F(e) {
  let {
    premiumSubscription: t,
    newPlan: n,
    onInvoiceError: a,
    planGroup: l,
    priceOptions: r,
    preventFetch: u
  } = e, {
    selectedSkuId: c,
    startedPaymentFlowWithPaymentSourcesRef: d
  } = (0, I.usePaymentContext)(), {
    isGift: m
  } = (0, _.useGiftContext)(), {
    analyticsLocations: f
  } = (0, S.default)(), E = (0, x.getItemsWithUpsertedPlanIdForGroup)(t, n.id, 1, new Set(l)), [T, N] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: E,
    renewal: !1,
    applyEntitlements: !0,
    paymentSourceId: r.paymentSourceId,
    currency: r.currency,
    preventFetch: u,
    analyticsLocations: f,
    analyticsLocation: p.default.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
  }), [h, v] = (0, A.useSubscriptionInvoicePreview)({
    subscriptionId: t.id,
    items: E,
    renewal: !0,
    paymentSourceId: r.paymentSourceId,
    currency: r.currency,
    preventFetch: u,
    analyticsLocations: f,
    analyticsLocation: p.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
  }), g = null != N ? N : v;
  if (s.useEffect(() => {
      a(g)
    }, [a, g]), null != g) return (0, i.jsx)(o.FormErrorBlock, {
    children: g.message
  });
  let y = (0, P.inOneStepSubscriptionCheckout)({
      isTrial: !1,
      isGift: m,
      selectedSkuId: c,
      startedPaymentFlowWithPaymentSources: d.current
    }),
    M = (0, P.planSwitchLoadingShowSpinner)(y, T, n);
  if (null == T || null == h || M) return (0, i.jsx)(o.Spinner, {
    className: j.__invalid_spinner
  });
  let O = (0, x.isPrepaidPaymentSource)(r.paymentSourceId);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(b.SubscriptionPeriodResetNotice, {
      proratedInvoice: T,
      renewalInvoice: h
    }), (0, i.jsxs)(C.PremiumInvoiceTable, {
      className: j.invoice,
      children: [(0, i.jsx)(C.PremiumInvoiceTableHeader, {
        children: R.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, i.jsx)(b.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: T,
        newPlan: n,
        isPrepaidPaymentSource: O
      }), (0, i.jsx)(b.SubscriptionInvoiceFooter, {
        premiumSubscription: t,
        proratedInvoice: T,
        renewalInvoice: h,
        isUpdate: !0,
        isPrepaidPaymentSource: O
      })]
    })]
  })
}

function U(e) {
  var t, n;
  let a, {
      premiumSubscription: l,
      newPlan: r,
      onInvoiceError: u,
      planGroup: c,
      priceOptions: m,
      preventFetch: _,
      disabled: I,
      isEEA: E,
      paymentSources: P,
      setHasAcceptedTerms: T
    } = e,
    {
      analyticsLocations: N
    } = (0, S.default)(),
    h = (0, x.getItemsWithUpsertedPlanIdForGroup)(l, r.id, 1, new Set(c)),
    [v, C] = (0, A.useSubscriptionInvoicePreview)({
      subscriptionId: l.id,
      items: h,
      renewal: !0,
      paymentSourceId: m.paymentSourceId,
      currency: m.currency,
      preventFetch: _,
      analyticsLocations: N,
      analyticsLocation: p.default.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
    });
  return (s.useEffect(() => {
    u(C)
  }, [u, C]), null != C) ? (0, i.jsx)(o.FormErrorBlock, {
    children: C.message
  }) : (null != v && (a = {
    amount: v.total,
    currency: v.currency,
    tax: v.tax,
    taxInclusive: v.taxInclusive
  }), null == a) ? null : (0, i.jsx)(f.default, {
    onChange: T,
    finePrint: (0, i.jsx)(d.default, {
      subscriptionPlan: r,
      paymentSourceType: null === (t = P[null !== (n = m.paymentSourceId) && void 0 !== n ? n : ""]) || void 0 === t ? void 0 : t.type,
      basePrice: a,
      currentSubscription: l,
      planGroup: c
    }),
    forceShow: !0,
    showPricingLink: r.currency !== O.CurrencyCodes.USD,
    showWithdrawalWaiver: E,
    disabled: I,
    subscriptionPlan: r,
    currentSubscription: l,
    planGroup: c
  })
}

function w(e) {
  let t, {
      premiumSubscription: n,
      newPlan: s,
      planGroup: a,
      priceOptions: l,
      preventFetch: r
    } = e,
    {
      analyticsLocations: u
    } = (0, S.default)(),
    [c, d] = (0, A.useSubscriptionInvoicePreview)({
      subscriptionId: n.id,
      items: (0, x.getItemsWithUpsertedPlanIdForGroup)(n, s.id, 1, new Set(a)),
      renewal: !0,
      applyEntitlements: !1,
      paymentSourceId: l.paymentSourceId,
      currency: l.currency,
      preventFetch: r,
      analyticsLocations: u,
      analyticsLocation: "billing_switch_plan_renewal_mutation_renewal_invoice_preview"
    });
  if (null != d) return (0, i.jsx)(o.FormErrorBlock, {
    children: d.message
  });
  if (null == c) return (0, i.jsx)("div", {
    children: (0, i.jsx)(o.Spinner, {})
  });
  t = n.type === O.SubscriptionTypes.PREMIUM ? (0, x.getDisplayName)(s.id) : s.name;
  let m = (0, x.isPrepaidPaymentSource)(l.paymentSourceId);
  return (0, i.jsxs)("div", {
    className: j.bodyText,
    children: [(0, i.jsx)("div", {
      className: L.renewalInvoiceDate,
      children: R.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: c.subscriptionPeriodStart
      })
    }), (0, i.jsxs)(C.PremiumInvoiceTable, {
      className: j.invoice,
      children: [(0, i.jsx)(C.PremiumInvoiceTableHeader, {
        children: R.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, i.jsx)(C.PremiumInvoiceTableRow, {
        label: t,
        value: (0, x.getFormattedRateForPlan)(s, l, !0)
      }), (0, i.jsx)(g.default, {
        invoice: c
      }), (0, i.jsx)(C.PremiumInvoiceTableDivider, {}), (0, i.jsx)(b.SubscriptionInvoiceFooter, {
        premiumSubscription: n,
        renewalInvoice: c,
        isUpdate: !0,
        isPrepaidPaymentSource: m
      })]
    })]
  })
}