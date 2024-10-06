n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120),
    n(789020);
var r = n(735250),
    a = n(470079),
    i = n(512722),
    l = n.n(i),
    s = n(481060),
    o = n(330726),
    u = n(716534),
    c = n(664891),
    d = n(171246),
    I = n(598),
    _ = n(409813),
    h = n(45572),
    f = n(51499),
    S = n(678334),
    E = n(456251),
    m = n(614277),
    p = n(698708),
    T = n(43542),
    C = n(689938),
    N = n(748605);
function A(e) {
    var t;
    let { backButtonEligible: n, prevStep: i, handleStepChange: A, trialFooterMessageOverride: O, reviewWarningMessage: P, planGroup: b, openInvoiceId: g, analyticsData: R, analyticsLocation: v, eligibleApplicationSubscriptionGuilds: L, handleClose: x } = e,
        { activeSubscription: M, application: k, setUpdatedSubscription: B, contextMetadata: j, currencies: U, paymentSources: Z, priceOptions: y, purchaseError: D, purchaseTokenAuthState: w, selectedPlan: F, selectedSku: H, setCurrency: V, setPaymentSourceId: G, setPurchaseState: W, setPurchaseError: K, purchaseState: Y, subscriptionMetadataRequest: X, setSubscriptionMetadataRequest: z, setHasAcceptedTerms: J } = (0, I.usePaymentContext)();
    l()(null != F, 'Expected plan to be selected'), l()(null != k, 'Expected application');
    let q = a.useRef(null),
        [Q, $] = (0, o.Z)(!1, 500),
        [ee, et] = a.useState(null == X ? void 0 : X.guild_id),
        [en, er] = a.useState(null),
        ea = (0, d.KW)(null !== (t = null == H ? void 0 : H.flags) && void 0 !== t ? t : 0);
    a.useEffect(() => {
        null != D && null != q.current && q.current.scrollIntoView({ behavior: 'smooth' });
    }, [D]);
    let ei = a.useCallback(
            (e) => {
                B(e), A(_.h8.CONFIRM);
            },
            [A, B]
        ),
        el = a.useCallback(
            (e) => {
                et(e),
                    z({
                        ...X,
                        guild_id: e
                    });
            },
            [et, z, X]
        ),
        es = a.useRef(null);
    return Y === h.A.PURCHASING
        ? (0, r.jsx)(E.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(f.Z, { className: N.breadcrumbs }),
                  (0, r.jsxs)(m.C3, {
                      children: [
                          (0, r.jsx)(p.Z, {}),
                          ea &&
                              (0, r.jsxs)('div', {
                                  className: N.userSubscriptionDetailsContainer,
                                  children: [
                                      (0, r.jsx)(s.Text, {
                                          variant: 'eyebrow',
                                          color: 'header-secondary',
                                          children: C.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
                                      }),
                                      (0, r.jsx)(s.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'interactive-normal',
                                          children: C.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({ applicationName: k.name })
                                      })
                                  ]
                              }),
                          !ea &&
                              (0, r.jsxs)('div', {
                                  className: N.guildPickerContainer,
                                  children: [
                                      (0, r.jsx)(s.FormTitle, {
                                          tag: s.FormTitleTags.H5,
                                          children: C.Z.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
                                      }),
                                      (0, r.jsx)(s.FormText, {
                                          type: s.FormText.Types.DESCRIPTION,
                                          className: N.guildPickerDescription,
                                          children: C.Z.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
                                      }),
                                      (0, r.jsx)(T.y, {
                                          selectedGuildId: ee,
                                          onGuildChange: el,
                                          eligibleApplicationSubscriptionGuilds: L
                                      })
                                  ]
                              }),
                          null == M
                              ? (0, r.jsx)(u.Z, {
                                    selectedPlanId: F.id,
                                    paymentSources: Z,
                                    onPaymentSourceChange: (e) => G(null != e ? e.id : null),
                                    priceOptions: y,
                                    currencies: U,
                                    onCurrencyChange: (e) => V(e),
                                    handlePaymentSourceAdd: () => A(_.h8.ADD_PAYMENT_STEPS),
                                    setHasAcceptedTerms: J,
                                    legalTermsNodeRef: es,
                                    hasLegalTermsFlash: Q,
                                    trialFooterMessageOverride: O,
                                    reviewWarningMessage: P,
                                    metadata: ea ? void 0 : X,
                                    purchaseState: Y,
                                    hideSubscriptionDetails: !0,
                                    handleClose: x
                                })
                              : (0, r.jsx)(c.Z, {
                                    premiumSubscription: M,
                                    paymentSources: Z,
                                    priceOptions: y,
                                    onPaymentSourceChange: (e) => G(null != e ? e.id : null),
                                    onPaymentSourceAdd: () => {
                                        A(_.h8.ADD_PAYMENT_STEPS);
                                    },
                                    planId: F.id,
                                    setHasAcceptedTerms: J,
                                    legalTermsNodeRef: es,
                                    hasLegalTermsFlash: Q,
                                    onInvoiceError: (e) => {
                                        er(e);
                                    },
                                    planGroup: b,
                                    currencies: U,
                                    onCurrencyChange: (e) => V(e),
                                    hasOpenInvoice: null != g,
                                    purchaseState: Y,
                                    handleClose: x
                                })
                      ]
                  }),
                  (0, r.jsx)(m.O3, {
                      children: (0, r.jsx)(S.Z, {
                          premiumSubscription: null != M ? M : null,
                          setPurchaseState: W,
                          onBack: () => null != i && A(i),
                          onNext: ei,
                          onPurchaseError: (e) => K(e),
                          legalTermsNodeRef: es,
                          flashLegalTerms: () => $(!0),
                          analyticsLocation: v,
                          baseAnalyticsData: R,
                          flowStartTime: j.startTime,
                          planGroup: b,
                          purchaseTokenAuthState: w,
                          openInvoiceId: g,
                          metadata: ea ? void 0 : X,
                          backButtonEligible: n,
                          invoiceError: en,
                          disablePurchase: (null == X ? void 0 : X.guild_id) == null && !ea
                      })
                  })
              ]
          });
}
