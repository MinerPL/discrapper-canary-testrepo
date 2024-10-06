n.r(t),
    n.d(t, {
        PaymentModal: function () {
            return W;
        },
        PaymentPredicateStep: function () {
            return F;
        }
    }),
    n(47120);
var l = n(735250),
    i = n(470079),
    u = n(120356),
    o = n.n(u),
    a = n(792986),
    r = n(399606),
    s = n(481060),
    d = n(496929),
    c = n(975608),
    _ = n(89057),
    f = n(232127),
    E = n(382577),
    m = n(522489),
    T = n(439017),
    p = n(857039),
    g = n(104494),
    A = n(176919),
    P = n(711007),
    S = n(459965),
    M = n(509545),
    h = n(580130),
    v = n(626135),
    I = n(669079),
    y = n(74538),
    N = n(987209),
    R = n(598),
    C = n(409813),
    L = n(45572),
    k = n(784707),
    Z = n(614223),
    O = n(48175),
    b = n(928886),
    w = n(456251),
    D = n(614277),
    x = n(981631),
    U = n(474936),
    G = n(689938),
    Y = n(677825);
function W(e) {
    let { analyticsLocations: t, analyticsLocation: n, analyticsObject: u, analyticsSourceLocation: r, analyticsSubscriptionType: d = x.NYc.PREMIUM, onComplete: c, transitionState: _, initialPlanId: m, subscriptionTier: T, onClose: h, trialId: Z, trialFooterMessageOverride: O, reviewWarningMessage: w, planGroup: W = U.Y1, openInvoiceId: F, onSubscriptionConfirmation: H, renderPurchaseConfirmation: j, postSuccessGuild: K, followupSKUInfo: B, renderHeader: V, applicationId: X, guildId: $, referralTrialOfferId: z, skuId: q, onStepChange: J, shakeWhilePurchasing: Q = !1, isLargeModal: ee = !1, hideShadow: et = !1, returnRef: en, skipConfirm: el = !1, continueSession: ei = !1 } = e,
        { activitySessionId: eu, purchaseState: eo, setPurchaseState: ea, selectedSkuId: er, setSelectedSkuId: es, selectedPlan: ed, setSelectedPlanId: ec, setStep: e_, setPurchaseError: ef, paymentAuthenticationState: eE, step: em, contextMetadata: eT, purchaseTokenAuthState: ep, activeSubscription: eg, priceOptions: eA, hasPaymentSources: eP, paymentSourceId: eS, paymentSources: eM, purchaseType: eh, defaultPlanId: ev } = (0, R.usePaymentContext)(),
        eI = (0, k.Z)(),
        ey = ee || (null == eI ? void 0 : eI.isLargeModal) ? s.ModalSize.LARGE : s.ModalSize.SMALL,
        { isGift: eN, giftRecipient: eR, customGiftMessage: eC, emojiConfetti: eL, soundEffect: ek } = (0, N.wD)(),
        eZ = (0, p.Z)({ location: 'Payment Modal' }),
        eO = (0, g.Ng)(),
        eb = null != T && !eN && (0, g.Wp)(eO, T),
        [ew, eD] = i.useState({
            load_id: eT.loadId,
            payment_type: x.Zuq[eh],
            location: null != n ? n : u,
            source: r,
            subscription_type: d,
            subscription_plan_id: null == ed ? void 0 : ed.id,
            is_gift: eN,
            eligible_for_trial: null != Z,
            location_stack: t,
            sku_id: q,
            application_id: X,
            guild_id: $,
            payment_modal_version: 'v1',
            activity_session_id: eu,
            eligible_for_discount: eb
        }),
        ex = null != eS ? eM[eS] : null;
    i.useEffect(() => {
        eD((e) => {
            let t = null != ed ? (0, y.aS)(ed.id, !1, eN, eA) : void 0;
            return {
                ...e,
                subscription_plan_id: null == ed ? void 0 : ed.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == ed ? void 0 : ed.price,
                currency: eA.currency,
                sku_id: er
            };
        });
    }, [ed, er, eN, eA]),
        i.useEffect(() => {
            (0, f.U)({
                ...ew,
                has_saved_payment_source: eP
            });
        }, []),
        i.useEffect(() => {
            if ((null != ev && ei ? ec(ev) : ec(m), null != q)) es(q);
            else if (null != m) {
                var e;
                es(null === (e = M.Z.get(m)) || void 0 === e ? void 0 : e.skuId);
            }
        }, [ec, es, m, q, ev, ei]);
    let eU = i.useCallback(() => {
            let e = (0, I.MY)(eR) === I.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            v.default.track(x.rMx.PAYMENT_FLOW_SUCCEEDED, {
                ...ew,
                is_custom_message_edited: eN && e && null != eC ? eC !== G.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0,
                is_custom_emoji_sound_available: eN && e,
                emoji_name: eN && e && (null == eL ? void 0 : eL.id) == null ? (null == eL ? void 0 : eL.surrogates) : void 0,
                sound_id: eN && e ? (null == ek ? void 0 : ek.soundId) : void 0,
                duration_ms: t - eT.startTime,
                payment_source_type: null == ex ? void 0 : ex.type
            });
        }, [ew, eL, eC, eR, eN, ek, eT.startTime, ex]),
        eG = i.useMemo(() => () => (null == h ? void 0 : h(eo === L.A.COMPLETED, er)), [h, eo, er]),
        eY = (0, a.Z)(() => Date.now(), [em]),
        eW = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: i } = t,
                    u = Date.now();
                if (e === C.h8.CONFIRM && (eU(), null == c || c(i), el)) {
                    eG();
                    return;
                }
                e_(e), null == J || J(e), ef(null);
                let o = null != n ? n : em;
                if (null === o) {
                    v.default.track(x.rMx.PAYMENT_FLOW_LOADED, {
                        ...ew,
                        initial_step: e,
                        has_saved_payment_source: eP
                    });
                    return;
                }
                v.default.track(x.rMx.PAYMENT_FLOW_STEP, {
                    ...ew,
                    ...l,
                    from_step: o,
                    to_step: e === C.h8.ADD_PAYMENT_STEPS ? C.h8.PAYMENT_TYPE : e,
                    step_duration_ms: u - eY,
                    flow_duration_ms: u - eT.startTime
                });
            },
            [e_, J, ef, em, ew, eY, eT.startTime, eU, c, el, eG, eP]
        );
    (0, A.bp)(em, eE, eW, ea), (0, C.dZ)(em, eo, ea), (0, P.p)(em, ep, eW), (0, E.Z)(eG), (0, S.w)(eg, () => h(!1), eN), (0, A.D6)(eE);
    let eF = (0, b.U)({
        renderHeader: V,
        referralTrialOfferId: z,
        handleClose: eG
    });
    return (0, l.jsx)(s.Shaker, {
        className: o()(Y.shaker, { [Y.halloweenModalHeight]: eZ }),
        isShaking: Q && eo === L.A.PURCHASING,
        intensity: 2,
        children: (0, l.jsx)(s.ModalRoot, {
            className: o()(Y.root, {
                [Y.withHeader]: null != eF,
                [Y.halloweenModalHeight]: eZ
            }),
            transitionState: _,
            hideShadow: et,
            returnRef: en,
            size: ey,
            children: (0, l.jsx)(D.ZP, {
                header: eF,
                isLargeModal: ee || (null == eI ? void 0 : eI.isLargeModal),
                initialPlanId: m,
                subscriptionTier: T,
                handleStepChange: eW,
                handleClose: eG,
                analyticsData: ew,
                setAnalyticsData: eD,
                trialId: Z,
                trialFooterMessageOverride: O,
                reviewWarningMessage: w,
                planGroup: W,
                openInvoiceId: F,
                analyticsLocation: n,
                onSubscriptionConfirmation: H,
                renderPurchaseConfirmation: j,
                postSuccessGuild: K,
                followupSKUInfo: B,
                referralTrialOfferId: z,
                skipConfirm: el,
                continueSession: ei
            })
        })
    });
}
function F(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: u, referralTrialOfferId: o, handleClose: a, continueSession: s } = e,
        { activeSubscription: f, blockedPayments: E, hasFetchedSubscriptions: p, hasFetchedSubscriptionPlans: g, currencyLoading: A, selectedSkuId: P, setSelectedPlanId: S, defaultPlanId: M, startedPaymentFlowWithPaymentSourcesRef: v, repeatPurchase: I } = (0, R.usePaymentContext)(),
        { isGift: y } = (0, N.wD)(),
        L = v.current,
        k = (0, O.Z)({
            isGift: y,
            skuId: P,
            referralTrialOfferId: o
        }),
        { defaultToMonthlyPlan: b } = T.k.getCurrentConfig({ location: '055ec5_1' }, { autoTrackExposure: !1 }),
        { redirectToPlanSelectStep: D } = m.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [x, G] = i.useState(!0),
        Y = (0, r.e7)([h.Z], () => h.Z.applicationIdsFetched.has(U.CL));
    return (i.useEffect(() => {
        G(!p || !g || A);
    }, [A, g, p]),
    (0, c.Z)(
        'Payment Modal',
        x,
        5,
        {
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: g,
            currencyLoading: A
        },
        { tags: { app_context: 'billing' } }
    ),
    i.useEffect(() => {
        if ((!Y && (0, d.yD)(U.CL), x || E)) return;
        let e = (0, Z.Kp)({
            isTrial: k,
            isGift: y,
            selectedSkuId: P,
            startedPaymentFlowWithPaymentSources: L
        });
        s ? u(C.h8.ADD_PAYMENT_STEPS) : null != n ? u(I && D ? C.h8.PLAN_SELECT : C.h8.REVIEW) : e ? (S((0, Z.nA)(P, f, M)), u(C.h8.REVIEW)) : null != t ? u(C.h8.PLAN_SELECT) : u(C.h8.SKU_SELECT);
    }, [f, E, Y, n, x, u, t, P, S, b, k, M, y, L, s, I, D]),
    x)
        ? (0, l.jsx)(w.Z, {})
        : E
          ? (0, l.jsx)(_.Vq, { onClose: a })
          : null;
}
