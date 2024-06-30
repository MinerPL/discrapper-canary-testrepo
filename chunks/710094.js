s.d(n, {
    l: function () {
        return j;
    }
}), s(47120), s(411104);
var l = s(735250), i = s(470079), t = s(512722), r = s.n(t), a = s(330726), c = s(711459), o = s(424082), u = s(104494), d = s(639119), _ = s(716534), m = s(664891), I = s(230927), E = s(911367), p = s(669079), N = s(987209), T = s(598), S = s(409813), x = s(45572), h = s(809144), P = s(698708), A = s(614223), v = s(481595), f = s(51499), M = s(678334), g = s(614277), C = s(981631), R = s(474936), O = s(231338), L = s(689938);
function j(e) {
    var n, s;
    let t, {
            handleStepChange: j,
            trialId: y,
            trialFooterMessageOverride: Z,
            reviewWarningMessage: b,
            planGroup: D,
            openInvoiceId: G,
            analyticsData: U,
            analyticsLocation: F,
            referralTrialOfferId: w,
            initialPlanId: B,
            subscriptionTier: H,
            handleClose: k
        } = e, {
            activeSubscription: W,
            setUpdatedSubscription: Y,
            contextMetadata: K,
            currencies: V,
            paymentSourceId: z,
            paymentSources: X,
            priceOptions: J,
            purchaseError: q,
            purchaseTokenAuthState: Q,
            selectedPlan: $,
            selectedSkuId: ee,
            setCurrency: en,
            setPaymentSourceId: es,
            setPurchaseState: el,
            setPurchaseError: ei,
            step: et,
            purchaseState: er,
            isPremium: ea,
            setHasAcceptedTerms: ec,
            purchaseType: eo,
            setEntitlementsGranted: eu,
            startedPaymentFlowWithPaymentSourcesRef: ed,
            invoicePreview: e_,
            setAnnualDiscountInvoicePreview: em
        } = (0, T.usePaymentContext)(), {
            isGift: eI,
            giftMessage: eE,
            giftRecipient: ep
        } = (0, N.wD)();
    r()(null != et, 'Step should be set');
    let eN = i.useRef(null), [eT, eS] = (0, a.Z)(!1, 500);
    (0, E.t)();
    let ex = null !== (s = null != y ? y : w) && void 0 !== s ? s : null, eh = null != ex && (!ea || R.nG[ex].skus.includes(ee)) ? ex : null, eP = (0, d.N)(w);
    (0, o.Uh)('PaymentModalReviewStep', null == eP);
    let eA = (0, u.Ng)(), ev = { user_trial_offer_id: null == eP ? void 0 : eP.id };
    i.useEffect(() => {
        null != q && null != eN.current && eN.current.scrollIntoView({ behavior: 'smooth' });
    }, [q]);
    let ef = i.useCallback((e, n) => {
            Y(e), null != n && eu(n), j(S.h8.CONFIRM, {
                fulfillment: {
                    subscription: e,
                    entitlements: n
                }
            });
        }, [
            j,
            Y,
            eu
        ]), eM = null != z ? X[z] : null, eg = null != $ && R.o4.has($.id) && null != eM && !(0, c.aQ)(eM) ? Error(L.Z.Messages.BILLING_ERROR_INVALID_PLAN_FOR_PAYMENT_SOURCE) : null, eC = i.useRef(null), [eR, eO] = i.useState(null), eL = !eI && null != eP && null != ee && R.nG[eP.trial_id].skus.includes(ee), ej = null == eA ? void 0 : null === (n = eA.discount) || void 0 === n ? void 0 : n.plan_ids, ey = !eI && null != eA && null != ej && null != $ && ej.includes($.id), eZ = er === x.A.PURCHASING || er === x.A.COMPLETED || (null == W ? void 0 : W.status) === C.O0b.PAUSED || null != G, {annualInvoicePreview: eb} = (0, I.g)({
            priceOptions: J,
            preventFetch: eZ,
            selectedSkuId: ee,
            isGift: eI,
            planGroup: D,
            activeSubscription: W
        });
    null != eb && em(eb);
    let eD = eI && (0, p.pO)(ep), eG = null == B && null == H && eo === O.GZ.SUBSCRIPTION, eU = (0, A.Kp)({
            isTrial: eL,
            isGift: eI,
            selectedSkuId: ee,
            startedPaymentFlowWithPaymentSources: ed.current
        }), eF = eI && eo === O.GZ.ONE_TIME, ew = eF || (eU ? eG && ea : ea), eB = i.useCallback(() => {
            if (eU) {
                j(S.h8.SKU_SELECT);
                return;
            }
            return eF ? j(S.h8.GIFT_CUSTOMIZATION) : j(S.h8.PLAN_SELECT);
        }, [
            j,
            eU,
            eF
        ]), eH = !1;
    return eo === O.GZ.ONE_TIME ? t = (0, l.jsx)(v.Z, {
        hasLegalTermsFlash: eT,
        legalTermsNodeRef: eC,
        onPaymentSourceChange: e => es(null != e ? e.id : null),
        handlePaymentSourceAdd: () => j(S.h8.ADD_PAYMENT_STEPS)
    }) : (eH = eI ? null == e_ : null != eM && eo === O.GZ.SUBSCRIPTION && eL && !eM.canRedeemTrial(), null == W || eI ? (r()(null != $, 'Expected plan to be selected'), t = (0, l.jsx)(_.Z, {
        selectedPlanId: $.id,
        paymentSources: X,
        onPaymentSourceChange: e => es(null != e ? e.id : null),
        priceOptions: J,
        currencies: V,
        onCurrencyChange: e => en(e),
        handlePaymentSourceAdd: () => j(S.h8.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: ec,
        legalTermsNodeRef: eC,
        hasLegalTermsFlash: eT,
        trialId: eh,
        trialFooterMessageOverride: Z,
        reviewWarningMessage: b,
        purchaseState: er,
        referralTrialOfferId: w,
        isTrial: eL || null != y && null != Z,
        isDiscount: ey,
        handleClose: k
    })) : (r()(null != $, 'Expected plan to be selected'), t = (0, l.jsx)(m.Z, {
        premiumSubscription: W,
        paymentSources: X,
        priceOptions: J,
        onPaymentSourceChange: e => {
            es(null != e ? e.id : null);
        },
        onPaymentSourceAdd: () => {
            j(S.h8.ADD_PAYMENT_STEPS);
        },
        planId: $.id,
        setHasAcceptedTerms: ec,
        legalTermsNodeRef: eC,
        hasLegalTermsFlash: eT,
        onInvoiceError: e => eO(e),
        planGroup: D,
        currencies: V,
        onCurrencyChange: e => en(e),
        hasOpenInvoice: null != G,
        purchaseState: er,
        handleClose: k
    }))), (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(h.P, { giftMessage: eE }),
            !eD && (0, l.jsx)(f.Z, { isEligibleForTrial: eL }),
            (0, l.jsxs)(g.C3, {
                children: [
                    (0, l.jsx)(P.Z, {}),
                    t
                ]
            }),
            (0, l.jsx)(g.O3, {
                children: (0, l.jsx)(M.Z, {
                    premiumSubscription: null != W ? W : null,
                    setPurchaseState: el,
                    onBack: eB,
                    onNext: ef,
                    onPurchaseError: e => ei(e),
                    legalTermsNodeRef: eC,
                    flashLegalTerms: () => eS(!0),
                    invoiceError: eR,
                    planError: eg,
                    analyticsLocation: F,
                    baseAnalyticsData: U,
                    flowStartTime: K.startTime,
                    trialId: eh,
                    planGroup: D,
                    purchaseTokenAuthState: Q,
                    openInvoiceId: G,
                    backButtonEligible: ew,
                    metadata: ev,
                    isTrial: eL,
                    disablePurchase: eH
                })
            })
        ]
    });
}
