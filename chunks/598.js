n.r(t), n.d(t, {
    PaymentContext: function () {
        return F;
    },
    PaymentContextProvider: function () {
        return g;
    },
    useForwardedPaymentContext: function () {
        return y;
    },
    usePaymentContext: function () {
        return K;
    }
}), n(47120), n(789020);
var r = n(735250), i = n(470079), u = n(160612), l = n(77866), o = n(772848), E = n(442837), a = n(317381), _ = n(964517), S = n(211242), s = n(270144), A = n(882712), c = n(855775), T = n(551428), I = n(975104), d = n(630388), C = n(74538), R = n(960048), N = n(735521), M = n(583046), P = n(897829), f = n(74179), U = n(896246), L = n(320317), O = n(994427), h = n(814076), p = n(712297), m = n(585686), Z = n(771206), G = n(362755), D = n(981631), B = n(474936);
let [F, K, y] = (0, I.Z)();
function g(e) {
    var t, n;
    let {
            loadId: I,
            activeSubscription: K,
            stepConfigs: y,
            breadcrumbs: g = [],
            skuIDs: H,
            isGift: v = !1,
            children: w,
            defaultPlanId: Y,
            purchaseType: b = D.GZQ.SUBSCRIPTION,
            applicationId: W,
            referralCode: V
        } = e, k = (0, Z.Z)(), x = (0, S.Q)(), X = (0, P.Z)(), {
            paymentSources: J,
            hasPaymentSources: Q,
            paymentSourceId: j,
            setPaymentSourceId: q,
            hasFetchedPaymentSources: z
        } = (0, f.Z)({
            isGift: v,
            activeSubscription: K
        }), $ = i.useRef(Q), {
            hasFetchedSubscriptionPlans: ee,
            priceOptions: et,
            setCurrency: en,
            currencyLoading: er,
            currencies: ei
        } = (0, M.Z)({
            activeSubscription: K,
            skuIDs: H,
            paymentSourceId: j,
            isGift: v
        }), eu = (0, h.Z)(), [el, eo] = i.useState(!1), {
            step: eE,
            setStep: ea,
            steps: e_,
            breadcrumbsData: eS,
            previousStepRef: es
        } = (0, m.Z)({
            stepConfigs: y,
            breadcrumbs: g
        }), [eA, ec] = (0, O.Z)(eE), {
            paymentError: eT,
            paymentAuthenticationState: eI
        } = (0, U.Z)(), {
            purchaseError: ed,
            purchaseErrorBlockRef: eC,
            setPurchaseError: eR
        } = (0, L.Z)(), eN = (0, l.Z)(() => {
            let e = null != I ? I : (0, o.Z)();
            return R.Z.addBreadcrumb({ message: 'Checkout session ID: '.concat(e) }), {
                loadId: e,
                startTime: Date.now()
            };
        }), {
            selectedSkuId: eM,
            selectedPlan: eP,
            setSelectedSkuId: ef,
            setSelectedPlanId: eU
        } = (0, N.Z)(), [eL, eO] = (0, E.Wu)([A.Z], () => [
            A.Z.purchaseTokenAuthState,
            A.Z.purchaseTokenHash
        ]), [eh, ep] = (0, E.Wu)([G.Z], () => [
            G.Z.browserCheckoutState,
            G.Z.loadId
        ]), [em, eZ] = i.useState(null), [eG, eD] = i.useState(null), [eB, eF] = i.useState(null), [eK, ey] = i.useState(null), [eg, eH] = i.useState(null), [ev, ew] = i.useState(void 0), [eY, eb] = i.useState([]), eW = i.useMemo(() => null == eP || (0, C.PV)(eP.id), [eP]), eV = i.useRef(null != K ? K.planId : null);
    i.useEffect(() => {
        null == eV.current && null != K && (eV.current = K.planId);
    }, [K]);
    let {
            skusById: ek,
            hasFetchedSkus: ex,
            skuPricePreviewsById: eX,
            previewErrorsById: eJ
        } = (0, p.Z)({
            applicationId: null != W ? W : B.RQ,
            skuIDs: H,
            currentPaymentSourceId: j,
            isGift: v
        }), eQ = null != eM ? eJ[eM] : null, ej = i.useMemo(() => {
            if (null == eM)
                return null;
            let e = eX[eM];
            return null == e ? null : e[null != j ? j : c.c];
        }, [
            eM,
            eX,
            j
        ]), eq = (0, s.IX)(W), ez = (0, d.yE)(null !== (t = null == eq ? void 0 : eq.flags) && void 0 !== t ? t : 0, D.udG.EMBEDDED) && (0, d.yE)(null !== (n = null == eq ? void 0 : eq.flags) && void 0 !== n ? n : 0, D.udG.EMBEDDED_IAP), e$ = (0, E.e7)([a.ZP], () => Array.from(a.ZP.getSelfEmbeddedActivities().values()).find(e => {
            let {applicationId: t} = e;
            return t === W;
        })), e0 = (0, _.Z)(e$), e1 = (0, E.e7)([T.Z], () => null != eM ? T.Z.getForSKU(eM) : null, [eM]), e7 = ek[null != eM ? eM : ''], [e4, e2] = i.useState(null), [e8, e5] = i.useState(null);
    return (0, r.jsx)(F.Provider, {
        value: {
            stripe: k,
            contextMetadata: eN,
            blockedPayments: x,
            activeSubscription: K,
            hasFetchedSubscriptions: X,
            hasFetchedSubscriptionPlans: ee,
            updatedSubscription: eK,
            setUpdatedSubscription: ey,
            subscriptionMetadataRequest: eg,
            setSubscriptionMetadataRequest: eH,
            hasFetchedPaymentSources: z,
            paymentSources: J,
            hasPaymentSources: Q,
            paymentSourceId: j,
            setPaymentSourceId: q,
            priceOptions: et,
            setCurrency: en,
            currencyLoading: er,
            currencies: ei,
            ...eu,
            hasAcceptedTerms: el,
            setHasAcceptedTerms: eo,
            step: eE,
            setStep: ea,
            steps: e_,
            stepConfigs: y,
            breadcrumbs: eS,
            previousStepRef: es,
            purchaseState: eA,
            setPurchaseState: ec,
            paymentAuthenticationState: eI,
            paymentError: eT,
            purchaseError: ed,
            setPurchaseError: eR,
            purchasePreviewError: eQ,
            purchaseErrorBlockRef: eC,
            purchaseTokenAuthState: eL,
            purchaseTokenHash: eO,
            browserCheckoutState: eh,
            browserCheckoutStateLoadId: ep,
            bodyNode: em,
            setBodyNode: eZ,
            footerNode: eG,
            setFooterNode: eD,
            modalOverlayNode: eB,
            setModalOverlayNode: eF,
            selectedSkuId: eM,
            selectedSku: e7,
            selectedStoreListing: e1,
            selectedPlan: eP,
            setSelectedSkuId: ef,
            setSelectedPlanId: eU,
            readySlideId: ev,
            setReadySlideId: ew,
            defaultPlanId: Y,
            isPremium: eW,
            startedPaymentFlowWithPaymentSourcesRef: $,
            startingPremiumSubscriptionPlanIdRef: eV,
            hasFetchedSkus: ex,
            skusById: ek,
            skuPricePreviewsById: eX,
            selectedSkuPricePreview: ej,
            application: eq,
            purchaseType: b,
            isEmbeddedIAP: ez,
            activitySessionId: e0,
            entitlementsGranted: eY,
            setEntitlementsGranted: eb,
            referralCode: V,
            invoicePreview: e4,
            setInvoicePreview: e2,
            setAnnualDiscountInvoicePreview: e5,
            annualDiscountInvoicePreview: e8
        },
        children: (0, r.jsx)(u.Elements, {
            options: D.OBo,
            stripe: k,
            children: w
        })
    });
}
