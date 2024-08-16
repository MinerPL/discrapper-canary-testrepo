n.r(t),
    n.d(t, {
        PaymentModal: function () {
            return Y;
        },
        PaymentPredicateStep: function () {
            return W;
        }
    }),
    n(47120);
var l = n(735250),
    i = n(470079),
    u = n(120356),
    o = n.n(u),
    r = n(792986),
    a = n(399606),
    s = n(481060),
    d = n(496929),
    c = n(975608),
    _ = n(89057),
    f = n(232127),
    E = n(382577),
    m = n(522489),
    T = n(439017),
    p = n(104494),
    A = n(176919),
    g = n(711007),
    S = n(459965),
    P = n(509545),
    M = n(580130),
    h = n(626135),
    v = n(669079),
    I = n(74538),
    y = n(987209),
    N = n(598),
    R = n(409813),
    C = n(45572),
    k = n(784707),
    L = n(614223),
    Z = n(48175),
    O = n(928886),
    b = n(456251),
    w = n(614277),
    D = n(981631),
    x = n(474936),
    U = n(689938),
    G = n(166352);
function Y(e) {
    let { analyticsLocations: t, analyticsLocation: n, analyticsObject: u, analyticsSourceLocation: a, analyticsSubscriptionType: d = D.NYc.PREMIUM, onComplete: c, transitionState: _, initialPlanId: m, subscriptionTier: T, onClose: M, trialId: L, trialFooterMessageOverride: Z, reviewWarningMessage: b, planGroup: Y = x.Y1, openInvoiceId: W, onSubscriptionConfirmation: F, renderPurchaseConfirmation: H, postSuccessGuild: j, followupSKUInfo: K, renderHeader: B, applicationId: V, guildId: X, referralTrialOfferId: $, skuId: z, onStepChange: Q, shakeWhilePurchasing: q = !1, isLargeModal: J = !1, hideShadow: ee = !1, returnRef: et, skipConfirm: en = !1, continueSession: el = !1 } = e,
        { activitySessionId: ei, purchaseState: eu, setPurchaseState: eo, selectedSkuId: er, setSelectedSkuId: ea, selectedPlan: es, setSelectedPlanId: ed, setStep: ec, setPurchaseError: e_, paymentAuthenticationState: ef, step: eE, contextMetadata: em, purchaseTokenAuthState: eT, activeSubscription: ep, priceOptions: eA, hasPaymentSources: eg, paymentSourceId: eS, paymentSources: eP, purchaseType: eM, defaultPlanId: eh } = (0, N.usePaymentContext)(),
        ev = (0, k.Z)(),
        eI = J || (null == ev ? void 0 : ev.isLargeModal) ? s.ModalSize.LARGE : s.ModalSize.SMALL,
        { isGift: ey, giftRecipient: eN, customGiftMessage: eR, emojiConfetti: eC, soundEffect: ek } = (0, y.wD)(),
        eL = (0, p.Ng)(),
        eZ = null != T && !ey && (0, p.Wp)(eL, T),
        [eO, eb] = i.useState({
            load_id: em.loadId,
            payment_type: D.Zuq[eM],
            location: null != n ? n : u,
            source: a,
            subscription_type: d,
            subscription_plan_id: null == es ? void 0 : es.id,
            is_gift: ey,
            eligible_for_trial: null != L,
            location_stack: t,
            sku_id: z,
            application_id: V,
            guild_id: X,
            payment_modal_version: 'v1',
            activity_session_id: ei,
            eligible_for_discount: eZ
        }),
        ew = null != eS ? eP[eS] : null;
    i.useEffect(() => {
        eb((e) => {
            let t = null != es ? (0, I.aS)(es.id, !1, ey, eA) : void 0;
            return {
                ...e,
                subscription_plan_id: null == es ? void 0 : es.id,
                price: null == t ? void 0 : t.amount,
                regular_price: null == es ? void 0 : es.price,
                currency: eA.currency,
                sku_id: er
            };
        });
    }, [es, er, ey, eA]),
        i.useEffect(() => {
            (0, f.U)({
                ...eO,
                has_saved_payment_source: eg
            });
        }, []),
        i.useEffect(() => {
            if ((null != eh && el ? ed(eh) : ed(m), null != z)) ea(z);
            else if (null != m) {
                var e;
                ea(null === (e = P.Z.get(m)) || void 0 === e ? void 0 : e.skuId);
            }
        }, [ed, ea, m, z, eh, el]);
    let eD = i.useCallback(() => {
            let e = (0, v.MY)(eN) === v.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
                t = Date.now();
            h.default.track(D.rMx.PAYMENT_FLOW_SUCCEEDED, {
                ...eO,
                is_custom_message_edited: ey && e && null != eR ? eR !== U.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0,
                is_custom_emoji_sound_available: ey && e,
                emoji_name: ey && e && (null == eC ? void 0 : eC.id) == null ? (null == eC ? void 0 : eC.surrogates) : void 0,
                sound_id: ey && e ? (null == ek ? void 0 : ek.soundId) : void 0,
                duration_ms: t - em.startTime,
                payment_source_type: null == ew ? void 0 : ew.type
            });
        }, [eO, eC, eR, eN, ey, ek, em.startTime, ew]),
        ex = i.useMemo(() => () => (null == M ? void 0 : M(eu === C.A.COMPLETED, er)), [M, eu, er]),
        eU = (0, r.Z)(() => Date.now(), [eE]),
        eG = i.useCallback(
            function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { trackedFromStep: n, analyticsDataOverride: l, fulfillment: i } = t,
                    u = Date.now();
                if (e === R.h8.CONFIRM && (eD(), null == c || c(i), en)) {
                    ex();
                    return;
                }
                ec(e), null == Q || Q(e), e_(null);
                let o = null != n ? n : eE;
                if (null === o) {
                    h.default.track(D.rMx.PAYMENT_FLOW_LOADED, {
                        ...eO,
                        initial_step: e,
                        has_saved_payment_source: eg
                    });
                    return;
                }
                h.default.track(D.rMx.PAYMENT_FLOW_STEP, {
                    ...eO,
                    ...l,
                    from_step: o,
                    to_step: e === R.h8.ADD_PAYMENT_STEPS ? R.h8.PAYMENT_TYPE : e,
                    step_duration_ms: u - eU,
                    flow_duration_ms: u - em.startTime
                });
            },
            [ec, Q, e_, eE, eO, eU, em.startTime, eD, c, en, ex, eg]
        );
    (0, A.bp)(eE, ef, eG, eo), (0, R.dZ)(eE, eu, eo), (0, g.p)(eE, eT, eG), (0, E.Z)(ex), (0, S.w)(ep, () => M(!1), ey), (0, A.D6)(ef);
    let eY = (0, O.U)({
        renderHeader: B,
        referralTrialOfferId: $,
        handleClose: ex
    });
    return (0, l.jsx)(s.Shaker, {
        className: G.shaker,
        isShaking: q && eu === C.A.PURCHASING,
        intensity: 2,
        children: (0, l.jsx)(s.ModalRoot, {
            className: o()(G.root, { [G.withHeader]: null != eY }),
            transitionState: _,
            hideShadow: ee,
            returnRef: et,
            size: eI,
            children: (0, l.jsx)(w.ZP, {
                header: eY,
                isLargeModal: J || (null == ev ? void 0 : ev.isLargeModal),
                initialPlanId: m,
                subscriptionTier: T,
                handleStepChange: eG,
                handleClose: ex,
                analyticsData: eO,
                setAnalyticsData: eb,
                trialId: L,
                trialFooterMessageOverride: Z,
                reviewWarningMessage: b,
                planGroup: Y,
                openInvoiceId: W,
                analyticsLocation: n,
                onSubscriptionConfirmation: F,
                renderPurchaseConfirmation: H,
                postSuccessGuild: j,
                followupSKUInfo: K,
                referralTrialOfferId: $,
                skipConfirm: en,
                continueSession: el
            })
        })
    });
}
function W(e) {
    let { subscriptionTier: t, initialPlanId: n, handleStepChange: u, referralTrialOfferId: o, handleClose: r, continueSession: s } = e,
        { activeSubscription: f, blockedPayments: E, hasFetchedSubscriptions: p, hasFetchedSubscriptionPlans: A, currencyLoading: g, selectedSkuId: S, setSelectedPlanId: P, defaultPlanId: h, startedPaymentFlowWithPaymentSourcesRef: v, repeatPurchase: I } = (0, N.usePaymentContext)(),
        { isGift: C } = (0, y.wD)(),
        k = v.current,
        O = (0, Z.Z)({
            isGift: C,
            skuId: S,
            referralTrialOfferId: o
        }),
        { defaultToMonthlyPlan: w } = T.k.getCurrentConfig({ location: '055ec5_1' }, { autoTrackExposure: !1 }),
        { redirectToPlanSelectStep: D } = m.m.useExperiment({ location: 'PaymentPredicateStep' }, { autoTrackExposure: !1 }),
        [U, G] = i.useState(!0),
        Y = (0, a.e7)([M.Z], () => M.Z.applicationIdsFetched.has(x.RQ));
    return (i.useEffect(() => {
        G(!p || !A || g);
    }, [g, A, p]),
    (0, c.Z)(
        'Payment Modal',
        U,
        5,
        {
            hasFetchedSubscriptions: p,
            hasFetchedSubscriptionPlans: A,
            currencyLoading: g
        },
        { tags: { app_context: 'billing' } }
    ),
    i.useEffect(() => {
        if ((!Y && (0, d.yD)(x.RQ), U || E)) return;
        let e = (0, L.Kp)({
            isTrial: O,
            isGift: C,
            selectedSkuId: S,
            startedPaymentFlowWithPaymentSources: k
        });
        s ? u(R.h8.ADD_PAYMENT_STEPS) : null != n ? u(I && D ? R.h8.PLAN_SELECT : R.h8.REVIEW) : e ? (P((0, L.nA)(S, f, h)), u(R.h8.REVIEW)) : null != t ? u(R.h8.PLAN_SELECT) : u(R.h8.SKU_SELECT);
    }, [f, E, Y, n, U, u, t, S, P, w, O, h, C, k, s, I, D]),
    U)
        ? (0, l.jsx)(b.Z, {})
        : E
          ? (0, l.jsx)(_.Vq, { onClose: r })
          : null;
}
