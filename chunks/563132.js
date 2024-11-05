n.r(e),
    n.d(e, {
        PaymentContext: function () {
            return m;
        },
        PaymentContextProvider: function () {
            return w;
        },
        useForwardedPaymentContext: function () {
            return Y;
        },
        usePaymentContext: function () {
            return h;
        }
    }),
    n(47120),
    n(789020);
var r = n(200651),
    E = n(192379),
    i = n(734530),
    u = n(75124),
    S = n(772848),
    o = n(442837),
    l = n(115130),
    _ = n(566620),
    A = n(317381),
    a = n(728345),
    T = n(211242),
    I = n(695346),
    c = n(882712),
    R = n(855775),
    C = n(551428),
    N = n(975104),
    s = n(630388),
    M = n(74538),
    P = n(960048),
    U = n(735521),
    d = n(583046),
    f = n(897829),
    O = n(74179),
    L = n(896246),
    p = n(320317),
    D = n(994427),
    G = n(814076),
    Z = n(712297),
    B = n(585686),
    F = n(771206),
    K = n(362755),
    H = n(981631),
    y = n(474936);
let [m, h, Y] = (0, N.Z)();
function w(t) {
    var e, n, N;
    let { loadId: h, activeSubscription: Y, stepConfigs: w, breadcrumbs: W = [], skuIDs: g, isGift: V = !1, children: v, defaultPlanId: b, purchaseType: k = H.GZQ.SUBSCRIPTION, applicationId: Q, referralCode: X, repeatPurchase: J = !1 } = t,
        x = (0, F.Z)(),
        j = (0, T.Q)(),
        q = (0, f.Z)(),
        {
            paymentSources: z,
            hasPaymentSources: $,
            paymentSourceId: tt,
            setPaymentSourceId: te,
            hasFetchedPaymentSources: tn
        } = (0, O.Z)({
            isGift: V,
            activeSubscription: Y
        }),
        tr = E.useRef($),
        {
            hasFetchedSubscriptionPlans: tE,
            priceOptions: ti,
            setCurrency: tu,
            currencyLoading: tS,
            currencies: to
        } = (0, d.Z)({
            activeSubscription: Y,
            skuIDs: g,
            paymentSourceId: tt,
            isGift: V
        }),
        tl = (0, G.Z)(),
        [t_, tA] = E.useState(!1),
        {
            step: ta,
            setStep: tT,
            steps: tI,
            breadcrumbsData: tc,
            previousStepRef: tR
        } = (0, B.Z)({
            stepConfigs: w,
            breadcrumbs: W
        }),
        [tC, tN] = (0, D.Z)(ta),
        { paymentError: ts, paymentAuthenticationState: tM } = (0, L.Z)(),
        { purchaseError: tP, purchaseErrorBlockRef: tU, setPurchaseError: td } = (0, p.Z)(),
        tf = (0, u.Z)(() => {
            let t = null != h ? h : (0, S.Z)();
            return (
                P.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(t) }),
                {
                    loadId: t,
                    startTime: Date.now()
                }
            );
        }),
        { selectedSkuId: tO, selectedPlan: tL, setSelectedSkuId: tp, setSelectedPlanId: tD } = (0, U.Z)(),
        [tG, tZ] = (0, o.Wu)([c.Z], () => [c.Z.purchaseTokenAuthState, c.Z.purchaseTokenHash]),
        [tB, tF] = (0, o.Wu)([K.Z], () => [K.Z.browserCheckoutState, K.Z.loadId]),
        [tK, tH] = E.useState(null),
        [ty, tm] = E.useState(null),
        [th, tY] = E.useState(null),
        [tw, tW] = E.useState(null),
        [tg, tV] = E.useState(null),
        [tv, tb] = E.useState(void 0),
        [tk, tQ] = E.useState([]),
        tX = E.useMemo(() => null == tL || (0, M.PV)(tL.id), [tL]),
        tJ = E.useRef(null != Y ? Y.planId : null);
    E.useEffect(() => {
        null == tJ.current && null != Y && (tJ.current = Y.planId);
    }, [Y]);
    let {
            skusById: tx,
            hasFetchedSkus: tj,
            skuPricePreviewsById: tq,
            previewErrorsById: tz
        } = (0, Z.Z)({
            applicationId: null != Q ? Q : y.CL,
            skuIDs: g,
            currentPaymentSourceId: tt,
            isGift: V
        }),
        t$ = null != tO ? tz[tO] : null,
        t0 = E.useMemo(() => {
            if (null == tO) return null;
            let t = tq[tO];
            return null == t ? null : t[null != tt ? tt : R.c];
        }, [tO, tq, tt]),
        { data: t1 } = (0, a.IX)(Q),
        t2 = I.Sb.useSetting(),
        t7 = (0, o.e7)([l.Z], () => l.Z.getFetchState());
    E.useEffect(() => {
        null != t1 && (0, s.yE)(t1.flags, H.udG.EMBEDDED) && t2 && null == t7 && (0, _.$h)();
    }, [t1, t2, t7]);
    let t4 = (0, s.yE)(null !== (e = null == t1 ? void 0 : t1.flags) && void 0 !== e ? e : 0, H.udG.EMBEDDED) && (0, s.yE)(null !== (n = null == t1 ? void 0 : t1.flags) && void 0 !== n ? n : 0, H.udG.EMBEDDED_IAP),
        t5 = (0, o.e7)([A.ZP], () =>
            Array.from(A.ZP.getSelfEmbeddedActivities().values()).find((t) => {
                let { applicationId: e } = t;
                return e === Q;
            })
        ),
        t9 = null == t5 ? void 0 : t5.compositeInstanceId,
        t8 = (0, o.e7)([C.Z], () => (null != tO ? C.Z.getForSKU(tO) : null), [tO]),
        t3 = tx[null != tO ? tO : ''],
        [t6, et] = E.useState(null),
        ee = null !== (N = null == Y ? void 0 : Y.inReverseTrial) && void 0 !== N && N && !V;
    return (0, r.jsx)(m.Provider, {
        value: {
            stripe: x,
            contextMetadata: tf,
            blockedPayments: j,
            activeSubscription: Y,
            hasFetchedSubscriptions: q,
            hasFetchedSubscriptionPlans: tE,
            updatedSubscription: tw,
            setUpdatedSubscription: tW,
            subscriptionMetadataRequest: tg,
            setSubscriptionMetadataRequest: tV,
            hasFetchedPaymentSources: tn,
            paymentSources: z,
            hasPaymentSources: $,
            paymentSourceId: tt,
            setPaymentSourceId: te,
            priceOptions: ti,
            setCurrency: tu,
            currencyLoading: tS,
            currencies: to,
            ...tl,
            hasAcceptedTerms: t_,
            setHasAcceptedTerms: tA,
            step: ta,
            setStep: tT,
            steps: tI,
            stepConfigs: w,
            breadcrumbs: tc,
            previousStepRef: tR,
            purchaseState: tC,
            setPurchaseState: tN,
            paymentAuthenticationState: tM,
            paymentError: ts,
            purchaseError: tP,
            setPurchaseError: td,
            purchasePreviewError: t$,
            purchaseErrorBlockRef: tU,
            purchaseTokenAuthState: tG,
            purchaseTokenHash: tZ,
            browserCheckoutState: tB,
            browserCheckoutStateLoadId: tF,
            bodyNode: tK,
            setBodyNode: tH,
            footerNode: ty,
            setFooterNode: tm,
            modalOverlayNode: th,
            setModalOverlayNode: tY,
            selectedSkuId: tO,
            selectedSku: t3,
            selectedStoreListing: t8,
            selectedPlan: tL,
            setSelectedSkuId: tp,
            setSelectedPlanId: tD,
            readySlideId: tv,
            setReadySlideId: tb,
            defaultPlanId: b,
            isPremium: tX,
            startedPaymentFlowWithPaymentSourcesRef: tr,
            startingPremiumSubscriptionPlanIdRef: tJ,
            hasFetchedSkus: tj,
            skusById: tx,
            skuPricePreviewsById: tq,
            selectedSkuPricePreview: t0,
            application: t1,
            purchaseType: k,
            isEmbeddedIAP: t4,
            activitySessionId: t9,
            devShelfFetchState: t7,
            entitlementsGranted: tk,
            setEntitlementsGranted: tQ,
            referralCode: X,
            invoicePreview: t6,
            setInvoicePreview: et,
            repeatPurchase: J,
            inReverseTrial: ee
        },
        children: (0, r.jsx)(i.Elements, {
            options: H.OBo,
            stripe: x,
            children: v
        })
    });
}
