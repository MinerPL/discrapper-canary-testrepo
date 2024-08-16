n.d(t, {
    Z: function () {
        return N;
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
    c = n(171246),
    d = n(598),
    I = n(409813),
    _ = n(45572),
    f = n(51499),
    h = n(678334),
    E = n(456251),
    S = n(614277),
    m = n(698708),
    p = n(43542),
    T = n(689938),
    C = n(600962);
function N(e) {
    var t;
    let { backButtonEligible: n, prevStep: i, showGuildPicker: N, handleStepChange: A, trialFooterMessageOverride: O, reviewWarningMessage: P, planGroup: b, openInvoiceId: g, analyticsData: v, analyticsLocation: L, eligibleApplicationSubscriptionGuilds: x, handleClose: R } = e,
        { activeSubscription: M, application: k, setUpdatedSubscription: B, contextMetadata: j, currencies: U, paymentSources: Z, priceOptions: y, purchaseError: D, purchaseTokenAuthState: w, selectedPlan: F, selectedSku: H, setCurrency: V, setPaymentSourceId: G, setPurchaseState: W, setPurchaseError: K, purchaseState: Y, subscriptionMetadataRequest: X, setSubscriptionMetadataRequest: z, setHasAcceptedTerms: J } = (0, d.usePaymentContext)();
    l()(null != F, 'Expected plan to be selected'), l()(null != k, 'Expected application');
    let q = a.useRef(null),
        [Q, $] = (0, o.Z)(!1, 500),
        [ee, et] = a.useState(null == X ? void 0 : X.guild_id),
        en = (0, c.KW)(null !== (t = null == H ? void 0 : H.flags) && void 0 !== t ? t : 0);
    a.useEffect(() => {
        null != D && null != q.current && q.current.scrollIntoView({ behavior: 'smooth' });
    }, [D]);
    let er = a.useCallback(
            (e) => {
                B(e), A(I.h8.CONFIRM);
            },
            [A, B]
        ),
        ea = a.useCallback(
            (e) => {
                et(e),
                    z({
                        ...X,
                        guild_id: e
                    });
            },
            [et, z, X]
        ),
        ei = a.useRef(null);
    return Y === _.A.PURCHASING
        ? (0, r.jsx)(E.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(f.Z, { className: C.breadcrumbs }),
                  (0, r.jsxs)(S.C3, {
                      children: [
                          (0, r.jsx)(m.Z, {}),
                          en &&
                              (0, r.jsxs)('div', {
                                  className: C.userSubscriptionDetailsContainer,
                                  children: [
                                      (0, r.jsx)(s.Text, {
                                          variant: 'eyebrow',
                                          color: 'header-secondary',
                                          children: T.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
                                      }),
                                      (0, r.jsx)(s.Text, {
                                          variant: 'text-xs/medium',
                                          color: 'interactive-normal',
                                          children: T.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({ applicationName: k.name })
                                      })
                                  ]
                              }),
                          N &&
                              !en &&
                              (0, r.jsxs)('div', {
                                  className: C.guildPickerContainer,
                                  children: [
                                      (0, r.jsx)(s.FormTitle, {
                                          tag: s.FormTitleTags.H5,
                                          children: T.Z.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
                                      }),
                                      (0, r.jsx)(s.FormText, {
                                          type: s.FormText.Types.DESCRIPTION,
                                          className: C.guildPickerDescription,
                                          children: T.Z.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
                                      }),
                                      (0, r.jsx)(p.y, {
                                          selectedGuildId: ee,
                                          onGuildChange: ea,
                                          eligibleApplicationSubscriptionGuilds: x
                                      })
                                  ]
                              }),
                          (0, r.jsx)(u.Z, {
                              selectedPlanId: F.id,
                              paymentSources: Z,
                              onPaymentSourceChange: (e) => G(null != e ? e.id : null),
                              priceOptions: y,
                              currencies: U,
                              onCurrencyChange: (e) => V(e),
                              handlePaymentSourceAdd: () => A(I.h8.ADD_PAYMENT_STEPS),
                              setHasAcceptedTerms: J,
                              legalTermsNodeRef: ei,
                              hasLegalTermsFlash: Q,
                              trialFooterMessageOverride: O,
                              reviewWarningMessage: P,
                              metadata: N || en ? void 0 : X,
                              purchaseState: Y,
                              hideSubscriptionDetails: !0,
                              handleClose: R
                          })
                      ]
                  }),
                  (0, r.jsx)(S.O3, {
                      children: (0, r.jsx)(h.Z, {
                          premiumSubscription: null != M ? M : null,
                          setPurchaseState: W,
                          onBack: () => null != i && A(i),
                          onNext: er,
                          onPurchaseError: (e) => K(e),
                          legalTermsNodeRef: ei,
                          flashLegalTerms: () => $(!0),
                          analyticsLocation: L,
                          baseAnalyticsData: v,
                          flowStartTime: j.startTime,
                          planGroup: b,
                          purchaseTokenAuthState: w,
                          openInvoiceId: g,
                          metadata: en ? void 0 : X,
                          backButtonEligible: n,
                          invoiceError: null,
                          disablePurchase: (null == X ? void 0 : X.guild_id) == null && !en
                      })
                  })
              ]
          });
}
