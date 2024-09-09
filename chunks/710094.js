t.d(n, {
    l: function () {
        return y;
    }
}),
    t(47120),
    t(411104);
var i = t(735250),
    a = t(470079),
    r = t(512722),
    s = t.n(r),
    l = t(330726),
    o = t(711459),
    c = t(104494),
    u = t(639119),
    d = t(716534),
    _ = t(664891),
    p = t(911367),
    m = t(669079),
    I = t(987209),
    f = t(598),
    E = t(409813),
    x = t(809144),
    N = t(698708),
    S = t(614223),
    T = t(481595),
    h = t(51499),
    b = t(678334),
    g = t(614277),
    P = t(474936),
    v = t(231338),
    A = t(689938);
function y(e) {
    var n, t;
    let r,
        { handleStepChange: y, trialId: M, trialFooterMessageOverride: C, reviewWarningMessage: O, planGroup: R, openInvoiceId: L, analyticsData: j, analyticsLocation: Z, referralTrialOfferId: D, initialPlanId: w, subscriptionTier: G, handleClose: B } = e,
        { activeSubscription: U, setUpdatedSubscription: k, contextMetadata: F, currencies: H, paymentSourceId: W, paymentSources: Y, priceOptions: K, purchaseError: V, purchaseTokenAuthState: z, selectedPlan: X, selectedSkuId: q, setCurrency: J, setPaymentSourceId: Q, setPurchaseState: $, setPurchaseError: ee, step: en, purchaseState: et, isPremium: ei, setHasAcceptedTerms: ea, purchaseType: er, setEntitlementsGranted: es, startedPaymentFlowWithPaymentSourcesRef: el, invoicePreview: eo, inReverseTrial: ec } = (0, f.usePaymentContext)(),
        { isGift: eu, giftMessage: ed, giftRecipient: e_ } = (0, I.wD)();
    s()(null != en, 'Step should be set');
    let ep = a.useRef(null),
        [em, eI] = (0, l.Z)(!1, 500);
    (0, p.t)();
    let ef = null !== (t = null != M ? M : D) && void 0 !== t ? t : null,
        eE = null != ef && (!ei || P.nG[ef].skus.includes(q)) ? ef : null,
        ex = (0, u.N)(D),
        eN = (0, c.Ng)(),
        eS = { user_trial_offer_id: null == ex ? void 0 : ex.id };
    a.useEffect(() => {
        null != V && null != ep.current && ep.current.scrollIntoView({ behavior: 'smooth' });
    }, [V]);
    let eT = a.useCallback(
            (e, n) => {
                k(e),
                    null != n && es(n),
                    y(E.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: n
                        }
                    });
            },
            [y, k, es]
        ),
        eh = null != W ? Y[W] : null,
        eb = null != X && P.o4.has(X.id) && null != eh && !(0, o.aQ)(eh) ? Error(A.Z.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null,
        eg = a.useRef(null),
        [eP, ev] = a.useState(null),
        eA = !eu && null != ex && null != q && P.nG[ex.trial_id].skus.includes(q),
        ey = null == eN ? void 0 : null === (n = eN.discount) || void 0 === n ? void 0 : n.plan_ids,
        eM = !eu && null != eN && null != ey && null != X && ey.includes(X.id),
        eC = eu && (0, m.pO)(e_),
        eO = null == w && null == G && er === v.GZ.SUBSCRIPTION,
        eR = (0, S.Kp)({
            isTrial: eA,
            isGift: eu,
            selectedSkuId: q,
            startedPaymentFlowWithPaymentSources: el.current
        }),
        eL = eu && er === v.GZ.ONE_TIME,
        ej = eL || (eR ? eO && ei : ei),
        eZ = a.useCallback(() => {
            if (eR) {
                y(E.h8.SKU_SELECT);
                return;
            }
            return eL ? y(E.h8.GIFT_CUSTOMIZATION) : y(E.h8.PLAN_SELECT);
        }, [y, eR, eL]),
        eD = !1;
    return (
        er === v.GZ.ONE_TIME
            ? (r = (0, i.jsx)(T.Z, {
                  hasLegalTermsFlash: em,
                  legalTermsNodeRef: eg,
                  onPaymentSourceChange: (e) => Q(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => y(E.h8.ADD_PAYMENT_STEPS)
              }))
            : ((eD = eu ? null == eo : null != eh && er === v.GZ.SUBSCRIPTION && eA && !eh.canRedeemTrial()),
              null == U || ec || eu
                  ? (s()(null != X, 'Expected plan to be selected'),
                    (r = (0, i.jsx)(d.Z, {
                        selectedPlanId: X.id,
                        paymentSources: Y,
                        onPaymentSourceChange: (e) => Q(null != e ? e.id : null),
                        priceOptions: K,
                        currencies: H,
                        onCurrencyChange: (e) => J(e),
                        handlePaymentSourceAdd: () => y(E.h8.ADD_PAYMENT_STEPS),
                        setHasAcceptedTerms: ea,
                        legalTermsNodeRef: eg,
                        hasLegalTermsFlash: em,
                        trialId: eE,
                        trialFooterMessageOverride: C,
                        reviewWarningMessage: O,
                        purchaseState: et,
                        referralTrialOfferId: D,
                        isTrial: eA || (null != M && null != C),
                        isDiscount: eM,
                        handleClose: B
                    })))
                  : (s()(null != X, 'Expected plan to be selected'),
                    (r = (0, i.jsx)(_.Z, {
                        premiumSubscription: U,
                        paymentSources: Y,
                        priceOptions: K,
                        onPaymentSourceChange: (e) => {
                            Q(null != e ? e.id : null);
                        },
                        onPaymentSourceAdd: () => {
                            y(E.h8.ADD_PAYMENT_STEPS);
                        },
                        planId: X.id,
                        setHasAcceptedTerms: ea,
                        legalTermsNodeRef: eg,
                        hasLegalTermsFlash: em,
                        onInvoiceError: (e) => ev(e),
                        planGroup: R,
                        currencies: H,
                        onCurrencyChange: (e) => J(e),
                        hasOpenInvoice: null != L,
                        purchaseState: et,
                        handleClose: B
                    })))),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(x.P, { giftMessage: ed }),
                !eC && (0, i.jsx)(h.Z, { isEligibleForTrial: eA }),
                (0, i.jsxs)(g.C3, {
                    children: [(0, i.jsx)(N.Z, {}), r]
                }),
                (0, i.jsx)(g.O3, {
                    children: (0, i.jsx)(b.Z, {
                        premiumSubscription: null != U ? U : null,
                        setPurchaseState: $,
                        onBack: eZ,
                        onNext: eT,
                        onPurchaseError: (e) => ee(e),
                        legalTermsNodeRef: eg,
                        flashLegalTerms: () => eI(!0),
                        invoiceError: eP,
                        planError: eb,
                        analyticsLocation: Z,
                        baseAnalyticsData: j,
                        flowStartTime: F.startTime,
                        trialId: eE,
                        planGroup: R,
                        purchaseTokenAuthState: z,
                        openInvoiceId: L,
                        backButtonEligible: ej,
                        metadata: eS,
                        isTrial: eA,
                        disablePurchase: eD
                    })
                })
            ]
        })
    );
}
