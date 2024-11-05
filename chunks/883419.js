n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120),
    n(789020);
var i = n(200651),
    r = n(192379),
    o = n(512722),
    a = n.n(o),
    l = n(442837),
    c = n(481060),
    s = n(330726),
    d = n(716534),
    u = n(664891),
    p = n(171246),
    f = n(430824),
    m = n(563132),
    b = n(409813),
    h = n(45572),
    g = n(51499),
    x = n(678334),
    _ = n(456251),
    v = n(614277),
    C = n(698708),
    S = n(388032),
    k = n(748605);
function y(e) {
    var t, n;
    let { backButtonEligible: o, prevStep: y, handleStepChange: T, trialFooterMessageOverride: j, reviewWarningMessage: E, planGroup: P, openInvoiceId: A, analyticsData: O, analyticsLocation: N, handleClose: I } = e,
        { activeSubscription: B, application: w, setUpdatedSubscription: M, contextMetadata: R, currencies: Z, paymentSources: H, priceOptions: L, purchaseError: F, purchaseTokenAuthState: D, selectedPlan: W, selectedSku: G, setCurrency: K, setPaymentSourceId: V, setPurchaseState: U, setPurchaseError: Y, purchaseState: z, subscriptionMetadataRequest: Q, setHasAcceptedTerms: q } = (0, m.usePaymentContext)();
    a()(null != W, 'Expected plan to be selected'), a()(null != w, 'Expected application');
    let X = r.useRef(null),
        [J, $] = (0, s.Z)(!1, 500),
        ee = null == Q ? void 0 : Q.guild_id,
        et = (0, l.e7)([f.Z], () => f.Z.getGuild(ee), [ee]),
        [en, ei] = r.useState(null),
        er = (0, p.KW)(null !== (t = null == G ? void 0 : G.flags) && void 0 !== t ? t : 0);
    r.useEffect(() => {
        null != F && null != X.current && X.current.scrollIntoView({ behavior: 'smooth' });
    }, [F]);
    let eo = r.useCallback(
            (e) => {
                M(e), T(b.h8.CONFIRM);
            },
            [T, M]
        ),
        ea = r.useRef(null);
    return z === h.A.PURCHASING
        ? (0, i.jsx)(_.Z, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(g.Z, { className: k.breadcrumbs }),
                  (0, i.jsxs)(v.C3, {
                      children: [
                          (0, i.jsx)(C.Z, {}),
                          er &&
                              (0, i.jsxs)('div', {
                                  className: k.userSubscriptionDetailsContainer,
                                  children: [
                                      (0, i.jsx)(c.Text, {
                                          variant: 'eyebrow',
                                          color: 'header-secondary',
                                          children: S.intl.string(S.t.nf5LOT)
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'interactive-normal',
                                          children: S.intl.format(S.t.y4n0GR, { applicationName: w.name })
                                      })
                                  ]
                              }),
                          !er &&
                              (0, i.jsxs)('div', {
                                  className: k.guildPickerContainer,
                                  children: [
                                      (0, i.jsx)(c.FormTitle, {
                                          tag: c.FormTitleTags.H5,
                                          children: S.intl.string(S.t['5qyruL'])
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: k.guildNameContainer,
                                          children: [
                                              (0, i.jsx)(c.Text, {
                                                  variant: 'text-md/normal',
                                                  children: S.intl.string(S.t.dBih7e)
                                              }),
                                              (0, i.jsx)(c.Text, {
                                                  variant: 'text-md/normal',
                                                  lineClamp: 1,
                                                  children: null !== (n = null == et ? void 0 : et.name) && void 0 !== n ? n : S.intl.string(S.t.dtwqPT)
                                              })
                                          ]
                                      })
                                  ]
                              }),
                          null == B
                              ? (0, i.jsx)(d.Z, {
                                    selectedPlanId: W.id,
                                    paymentSources: H,
                                    onPaymentSourceChange: (e) => V(null != e ? e.id : null),
                                    priceOptions: L,
                                    currencies: Z,
                                    onCurrencyChange: (e) => K(e),
                                    handlePaymentSourceAdd: () => T(b.h8.ADD_PAYMENT_STEPS),
                                    setHasAcceptedTerms: q,
                                    legalTermsNodeRef: ea,
                                    hasLegalTermsFlash: J,
                                    trialFooterMessageOverride: j,
                                    reviewWarningMessage: E,
                                    metadata: er ? void 0 : Q,
                                    purchaseState: z,
                                    hideSubscriptionDetails: !0,
                                    handleClose: I
                                })
                              : (0, i.jsx)(u.Z, {
                                    premiumSubscription: B,
                                    paymentSources: H,
                                    priceOptions: L,
                                    onPaymentSourceChange: (e) => V(null != e ? e.id : null),
                                    onPaymentSourceAdd: () => {
                                        T(b.h8.ADD_PAYMENT_STEPS);
                                    },
                                    planId: W.id,
                                    setHasAcceptedTerms: q,
                                    legalTermsNodeRef: ea,
                                    hasLegalTermsFlash: J,
                                    onInvoiceError: (e) => {
                                        ei(e);
                                    },
                                    planGroup: P,
                                    currencies: Z,
                                    onCurrencyChange: (e) => K(e),
                                    hasOpenInvoice: null != A,
                                    purchaseState: z,
                                    handleClose: I
                                })
                      ]
                  }),
                  (0, i.jsx)(v.O3, {
                      children: (0, i.jsx)(x.Z, {
                          premiumSubscription: null != B ? B : null,
                          setPurchaseState: U,
                          onBack: () => null != y && T(y),
                          onNext: eo,
                          onPurchaseError: (e) => Y(e),
                          legalTermsNodeRef: ea,
                          flashLegalTerms: () => $(!0),
                          analyticsLocation: N,
                          baseAnalyticsData: O,
                          flowStartTime: R.startTime,
                          planGroup: P,
                          purchaseTokenAuthState: D,
                          openInvoiceId: A,
                          metadata: er ? void 0 : Q,
                          backButtonEligible: o,
                          invoiceError: en,
                          disablePurchase: (null == Q ? void 0 : Q.guild_id) == null && !er
                      })
                  })
              ]
          });
}
