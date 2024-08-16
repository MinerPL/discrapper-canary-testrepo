t.d(n, {
    Z: function () {
        return D;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    r = t(512722),
    s = t.n(r),
    l = t(742280),
    o = t(442837),
    c = t(481060),
    u = t(190947),
    d = t(224550),
    _ = t(275850),
    p = t(672971),
    m = t(100527),
    I = t(906732),
    f = t(987209),
    E = t(598),
    x = t(45572),
    N = t(614223),
    S = t(246946),
    T = t(351402),
    h = t(509545),
    b = t(74538),
    g = t(296848),
    P = t(374649),
    v = t(642530),
    A = t(653798),
    y = t(585602),
    M = t(314182),
    C = t(314404),
    O = t(42818),
    R = t(981631),
    L = t(689938),
    j = t(121622),
    Z = t(56035);
function D(e) {
    var n;
    let t,
        { premiumSubscription: r, paymentSources: m, priceOptions: I, onPaymentSourceChange: P, onPaymentSourceAdd: y, planId: O, setHasAcceptedTerms: j, legalTermsNodeRef: D, hasLegalTermsFlash: F, onInvoiceError: H, planGroup: W, currencies: Y, onCurrencyChange: K, hasOpenInvoice: V, purchaseState: z, handleClose: X } = e,
        { selectedSkuId: q, defaultPlanId: J, isPremium: Q, startedPaymentFlowWithPaymentSourcesRef: $ } = (0, E.usePaymentContext)(),
        { isGift: ee } = (0, f.wD)(),
        en = I.paymentSourceId,
        et = (0, o.e7)([h.Z], () => h.Z.get(O));
    s()(null != et, 'Missing newPlan');
    let ei = (0, o.e7)([S.Z], () => S.Z.hidePersonalInformation),
        ea = l.M.EEA_COUNTRIES.has(T.Z.ipCountryCodeWithFallback),
        er = z === x.A.PURCHASING || z === x.A.COMPLETED,
        es = (0, N.Kp)({
            isTrial: !1,
            isGift: ee,
            selectedSkuId: q,
            startedPaymentFlowWithPaymentSources: $.current
        }),
        el = (null == r ? void 0 : r.status) === R.O0b.PAUSED,
        eo = a.useMemo(
            () =>
                (0, b.V7)({
                    skuId: q,
                    isPremium: Q,
                    multiMonthPlans: [],
                    currentSubscription: r,
                    isGift: ee,
                    isEligibleForTrial: !1,
                    defaultPlanId: J,
                    defaultToMonthlyPlan: !1
                }),
            [q, r, J, Q, ee]
        );
    t = V || el ? L.Z.Messages.BILLING_PURCHASE_DETAILS_HEADER : (0, b.PV)(O) ? (0, b.W_)(r, et) : L.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({ planName: et.name });
    let ec = null;
    return (
        null != r &&
            (ec = V
                ? (0, i.jsx)(w, {
                      premiumSubscription: r,
                      onInvoiceError: H,
                      priceOptions: I,
                      preventFetch: !1
                  })
                : el
                  ? (0, i.jsx)(U, {
                        premiumSubscription: r,
                        onInvoiceError: H,
                        priceOptions: I,
                        preventFetch: er
                    })
                  : (0, g.R4)(r, O, W)
                    ? (0, i.jsx)(G, {
                          premiumSubscription: r,
                          newPlan: et,
                          onInvoiceError: H,
                          planGroup: W,
                          priceOptions: I,
                          preventFetch: er
                      })
                    : (0, i.jsx)(k, {
                          premiumSubscription: r,
                          newPlan: et,
                          planGroup: W,
                          priceOptions: I,
                          preventFetch: er
                      })),
        (0, i.jsxs)('div', {
            className: Z.stepBody,
            children: [
                !el &&
                    es &&
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(A.KU, {
                                negativeMarginBottom: !0,
                                negativeMarginTop: !0
                            }),
                            (0, i.jsx)(v.Z, {}),
                            (0, i.jsx)(C.O, {
                                planOptions: eo,
                                eligibleForMultiMonthPlans: !1,
                                selectedPlanId: O,
                                showTotal: !1,
                                handleClose: X
                            }),
                            (0, i.jsx)(A.KU, {})
                        ]
                    }),
                (0, i.jsx)(c.FormTitle, {
                    tag: c.FormTitleTags.H5,
                    children: t
                }),
                ec,
                (0, i.jsxs)('div', {
                    className: Z.paymentSourceWrapper,
                    children: [
                        (0, i.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: L.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                        }),
                        (0, i.jsx)(_.Z, {
                            paymentSources: Object.values(m),
                            selectedPaymentSourceId: en,
                            onChange: P,
                            onPaymentSourceAdd: y,
                            hidePersonalInformation: ei,
                            disabled: er
                        })
                    ]
                }),
                (0, i.jsxs)(u.b, {
                    currencies: Y,
                    className: Z.currencyWrapper,
                    children: [
                        (0, i.jsx)(c.FormTitle, {
                            tag: c.FormTitleTags.H5,
                            children: L.Z.Messages.PAYMENT_CURRENCY
                        }),
                        (0, i.jsx)(u.Z, {
                            selectedCurrency: I.currency,
                            currencies: Y,
                            onChange: K,
                            disabled: er
                        })
                    ]
                }),
                (0, i.jsx)(M.Z, {
                    isActive: F,
                    ref: D,
                    children:
                        null != r && (0, g.R4)(r, O, W)
                            ? (0, i.jsx)(B, {
                                  premiumSubscription: r,
                                  newPlan: et,
                                  onInvoiceError: H,
                                  planGroup: W,
                                  priceOptions: I,
                                  preventFetch: er,
                                  disabled: er,
                                  isEEA: ea,
                                  paymentSources: m,
                                  setHasAcceptedTerms: j
                              })
                            : (0, i.jsx)(p.Z, {
                                  onChange: j,
                                  finePrint: (0, i.jsx)(d.Z, {
                                      subscriptionPlan: et,
                                      paymentSourceType: null === (n = m[null != en ? en : '']) || void 0 === n ? void 0 : n.type,
                                      basePrice: (0, b.aS)(et.id, !1, ee, I),
                                      currentSubscription: r,
                                      planGroup: W
                                  }),
                                  forceShow: !0,
                                  showPricingLink: et.currency !== R.pKx.USD,
                                  showWithdrawalWaiver: ea,
                                  disabled: er,
                                  subscriptionPlan: et,
                                  currentSubscription: r,
                                  planGroup: W
                              })
                })
            ]
        })
    );
}
function w(e) {
    let { premiumSubscription: n, onInvoiceError: t, priceOptions: r, preventFetch: s } = e,
        [l, o] = (0, P.Ox)({
            subscriptionId: n.id,
            preventFetch: s
        });
    a.useEffect(() => {
        t(o);
    }, [t, o]);
    let u = (0, b.Ap)(r.paymentSourceId);
    return null != l
        ? (0, i.jsxs)(A.PO, {
              className: j.__invalid_invoice,
              children: [
                  (0, i.jsx)(O.By, {
                      invoice: l,
                      isPrepaidPaymentSource: u
                  }),
                  (0, i.jsx)(O.nd, {
                      premiumSubscription: n,
                      renewalInvoice: l,
                      isUpdate: !0,
                      isPrepaidPaymentSource: u
                  })
              ]
          })
        : (0, i.jsx)(c.Spinner, {});
}
function G(e) {
    let { premiumSubscription: n, newPlan: t, onInvoiceError: r, planGroup: s, priceOptions: l, preventFetch: o } = e,
        { selectedSkuId: u, startedPaymentFlowWithPaymentSourcesRef: d } = (0, E.usePaymentContext)(),
        { isGift: _ } = (0, f.wD)(),
        { analyticsLocations: p } = (0, I.ZP)(),
        x = (0, b.al)(n, t.id, 1, new Set(s)),
        [S, T] = (0, P.ED)({
            subscriptionId: n.id,
            items: x,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: l.paymentSourceId,
            currency: l.currency,
            preventFetch: o,
            analyticsLocations: p,
            analyticsLocation: m.Z.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW
        }),
        [h, g] = (0, P.ED)({
            subscriptionId: n.id,
            items: x,
            renewal: !0,
            paymentSourceId: l.paymentSourceId,
            currency: l.currency,
            preventFetch: o,
            analyticsLocations: p,
            analyticsLocation: m.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        }),
        v = null != T ? T : g;
    if (
        (a.useEffect(() => {
            r(v);
        }, [r, v]),
        null != v)
    )
        return (0, i.jsx)(c.FormErrorBlock, { children: v.message });
    let y = (0, N.Kp)({
            isTrial: !1,
            isGift: _,
            selectedSkuId: u,
            startedPaymentFlowWithPaymentSources: d.current
        }),
        M = (0, N.$g)(y, S, t);
    if (null == S || null == h || M) return (0, i.jsx)(c.Spinner, { className: Z.__invalid_spinner });
    let C = (0, b.Ap)(l.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(O.hG, {
                proratedInvoice: S,
                renewalInvoice: h
            }),
            (0, i.jsxs)(A.PO, {
                className: Z.invoice,
                children: [
                    (0, i.jsx)(A.q9, { children: L.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS }),
                    (0, i.jsx)(O.Lu, {
                        invoice: S,
                        newPlan: t,
                        isPrepaidPaymentSource: C
                    }),
                    (0, i.jsx)(O.nd, {
                        premiumSubscription: n,
                        proratedInvoice: S,
                        renewalInvoice: h,
                        isUpdate: !0,
                        isPrepaidPaymentSource: C
                    })
                ]
            })
        ]
    });
}
function B(e) {
    var n, t;
    let r,
        { premiumSubscription: s, newPlan: l, onInvoiceError: o, planGroup: u, priceOptions: _, preventFetch: f, disabled: E, isEEA: x, paymentSources: N, setHasAcceptedTerms: S } = e,
        { analyticsLocations: T } = (0, I.ZP)(),
        h = (0, b.al)(s, l.id, 1, new Set(u)),
        [g, v] = (0, P.ED)({
            subscriptionId: s.id,
            items: h,
            renewal: !0,
            paymentSourceId: _.paymentSourceId,
            currency: _.currency,
            preventFetch: f,
            analyticsLocations: T,
            analyticsLocation: m.Z.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW
        });
    return (a.useEffect(() => {
        o(v);
    }, [o, v]),
    null != v)
        ? (0, i.jsx)(c.FormErrorBlock, { children: v.message })
        : (null != g &&
                (r = {
                    amount: g.total,
                    currency: g.currency,
                    tax: g.tax,
                    taxInclusive: g.taxInclusive
                }),
            null == r)
          ? null
          : (0, i.jsx)(p.Z, {
                onChange: S,
                finePrint: (0, i.jsx)(d.Z, {
                    subscriptionPlan: l,
                    paymentSourceType: null === (n = N[null !== (t = _.paymentSourceId) && void 0 !== t ? t : '']) || void 0 === n ? void 0 : n.type,
                    basePrice: r,
                    currentSubscription: s,
                    planGroup: u
                }),
                forceShow: !0,
                showPricingLink: l.currency !== R.pKx.USD,
                showWithdrawalWaiver: x,
                disabled: E,
                subscriptionPlan: l,
                currentSubscription: s,
                planGroup: u
            });
}
function U(e) {
    let { premiumSubscription: n, priceOptions: t, preventFetch: r, onInvoiceError: s } = e,
        { analyticsLocations: l } = (0, I.ZP)(),
        [o, u] = (0, P.ED)({
            subscriptionId: n.id,
            renewal: !0,
            applyEntitlements: !0,
            paymentSourceId: t.paymentSourceId,
            currency: t.currency,
            preventFetch: r,
            analyticsLocations: l,
            analyticsLocation: m.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RESUME_PREVIEW
        }),
        [d, _] = (0, P.ED)({
            subscriptionId: n.id,
            renewal: !0,
            paymentSourceId: t.paymentSourceId,
            currency: t.currency,
            preventFetch: r,
            analyticsLocations: l,
            analyticsLocation: m.Z.BILLING_PAUSED_SUBSCRIPTION_INVOICE_RENEWAL_PREVIEW
        }),
        p = null != u ? u : _;
    if (
        (a.useEffect(() => {
            s(p);
        }, [s, p]),
        null != p)
    )
        return (0, i.jsx)(c.FormErrorBlock, { children: p.message });
    if (null == o || null == d) return (0, i.jsx)(c.Spinner, { className: Z.__invalid_spinner });
    let f = (0, b.Ap)(t.paymentSourceId);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: j.renewalInvoiceDate,
                children: L.Z.Messages.BILLING_RESUME_PAUSED_SUBSCRIPTION_IMMEDIATELY
            }),
            (0, i.jsxs)(A.PO, {
                className: Z.invoice,
                children: [
                    (0, i.jsx)(A.q9, { children: L.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS }),
                    (0, i.jsx)(O.By, {
                        invoice: o,
                        isPrepaidPaymentSource: f
                    }),
                    (0, i.jsx)(O.nd, {
                        premiumSubscription: n,
                        renewalInvoice: d,
                        isUpdate: !0,
                        isPrepaidPaymentSource: f
                    })
                ]
            })
        ]
    });
}
function k(e) {
    let n,
        { premiumSubscription: t, newPlan: a, planGroup: r, priceOptions: s, preventFetch: l } = e,
        { analyticsLocations: o } = (0, I.ZP)(),
        [u, d] = (0, P.ED)({
            subscriptionId: t.id,
            items: (0, b.al)(t, a.id, 1, new Set(r)),
            renewal: !0,
            applyEntitlements: !1,
            paymentSourceId: s.paymentSourceId,
            currency: s.currency,
            preventFetch: l,
            analyticsLocations: o,
            analyticsLocation: 'billing_switch_plan_renewal_mutation_renewal_invoice_preview'
        });
    if (null != d) return (0, i.jsx)(c.FormErrorBlock, { children: d.message });
    if (null == u) return (0, i.jsx)('div', { children: (0, i.jsx)(c.Spinner, {}) });
    n = t.type === R.NYc.PREMIUM ? (0, b.Gf)(a.id) : a.name;
    let _ = (0, b.Ap)(s.paymentSourceId);
    return (0, i.jsxs)('div', {
        className: Z.bodyText,
        children: [
            (0, i.jsx)('div', {
                className: j.renewalInvoiceDate,
                children: L.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({ renewalDate: u.subscriptionPeriodStart })
            }),
            (0, i.jsxs)(A.PO, {
                className: Z.invoice,
                children: [
                    (0, i.jsx)(A.q9, { children: L.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES }),
                    (0, i.jsx)(A.R$, {
                        label: n,
                        value: (0, b.PK)(a, s, !0)
                    }),
                    (0, i.jsx)(y.Z, { invoice: u }),
                    (0, i.jsx)(A.KU, {}),
                    (0, i.jsx)(O.nd, {
                        premiumSubscription: t,
                        renewalInvoice: u,
                        isUpdate: !0,
                        isPrepaidPaymentSource: _
                    })
                ]
            })
        ]
    });
}
