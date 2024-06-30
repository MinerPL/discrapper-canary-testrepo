t.r(e), t.d(e, {
    PaymentModal: function () {
        return w;
    },
    PaymentPredicateStep: function () {
        return b;
    }
}), t(47120);
var l = t(735250), u = t(470079), i = t(120356), r = t.n(i), a = t(792986), o = t(399606), s = t(481060), c = t(496929), d = t(975608), _ = t(89057), E = t(382577), f = t(439017), p = t(104494), m = t(176919), T = t(711007), M = t(459965), I = t(509545), A = t(580130), v = t(626135), S = t(669079), h = t(74538), N = t(987209), P = t(598), R = t(409813), y = t(45572), g = t(784707), C = t(614223), L = t(48175), Z = t(928886), k = t(456251), O = t(614277), x = t(981631), U = t(474936), D = t(689938), G = t(508049);
function w(n) {
    let {
            analyticsLocations: e,
            analyticsLocation: t,
            analyticsObject: i,
            analyticsSourceLocation: o,
            analyticsSubscriptionType: c = x.NYc.PREMIUM,
            onComplete: d,
            transitionState: _,
            initialPlanId: f,
            subscriptionTier: A,
            onClose: C,
            trialId: L,
            trialFooterMessageOverride: k,
            reviewWarningMessage: w,
            planGroup: b = U.Y1,
            openInvoiceId: Y,
            onSubscriptionConfirmation: H,
            renderPurchaseConfirmation: W,
            postSuccessGuild: j,
            followupSKUInfo: K,
            renderHeader: B,
            applicationId: F,
            guildId: V,
            referralTrialOfferId: X,
            skuId: z,
            onStepChange: Q,
            shakeWhilePurchasing: q = !1,
            isLargeModal: J = !1,
            hideShadow: $ = !1,
            returnRef: nn,
            skipConfirm: ne = !1,
            continueSession: nt = !1
        } = n, {
            activitySessionId: nl,
            purchaseState: nu,
            setPurchaseState: ni,
            selectedSkuId: nr,
            setSelectedSkuId: na,
            selectedPlan: no,
            setSelectedPlanId: ns,
            setStep: nc,
            setPurchaseError: nd,
            paymentAuthenticationState: n_,
            step: nE,
            contextMetadata: nf,
            purchaseTokenAuthState: np,
            activeSubscription: nm,
            priceOptions: nT,
            hasPaymentSources: nM,
            paymentSourceId: nI,
            paymentSources: nA,
            purchaseType: nv,
            defaultPlanId: nS
        } = (0, P.usePaymentContext)(), nh = (0, g.Z)(), nN = J || (null == nh ? void 0 : nh.isLargeModal) ? s.ModalSize.LARGE : s.ModalSize.SMALL, {
            isGift: nP,
            giftRecipient: nR,
            customGiftMessage: ny,
            emojiConfetti: ng,
            soundEffect: nC
        } = (0, N.wD)(), nL = (0, p.Ng)(), nZ = null != A && !nP && (0, p.Wp)(nL, A), [nk, nO] = u.useState({
            load_id: nf.loadId,
            payment_type: x.Zuq[nv],
            location: null != t ? t : i,
            source: o,
            subscription_type: c,
            subscription_plan_id: null == no ? void 0 : no.id,
            is_gift: nP,
            eligible_for_trial: null != L,
            location_stack: e,
            sku_id: z,
            application_id: F,
            guild_id: V,
            payment_modal_version: 'v1',
            activity_session_id: nl,
            eligible_for_discount: nZ
        }), nx = null != nI ? nA[nI] : null;
    u.useEffect(() => {
        nO(n => {
            let e = null != no ? (0, h.aS)(no.id, !1, nP, nT) : void 0;
            return {
                ...n,
                subscription_plan_id: null == no ? void 0 : no.id,
                price: null == e ? void 0 : e.amount,
                regular_price: null == no ? void 0 : no.price,
                currency: nT.currency,
                sku_id: nr
            };
        });
    }, [
        no,
        nr,
        nP,
        nT
    ]), u.useEffect(() => {
        v.default.track(x.rMx.PAYMENT_FLOW_STARTED, {
            ...nk,
            has_saved_payment_source: nM
        });
    }, []), u.useEffect(() => {
        if (null != nS && nt ? ns(nS) : ns(f), null != z)
            na(z);
        else if (null != f) {
            var n;
            na(null === (n = I.Z.get(f)) || void 0 === n ? void 0 : n.skuId);
        }
    }, [
        ns,
        na,
        f,
        z,
        nS,
        nt
    ]);
    let nU = u.useCallback(() => {
            let n = (0, S.MY)(nR) === S.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD, e = Date.now();
            v.default.track(x.rMx.PAYMENT_FLOW_SUCCEEDED, {
                ...nk,
                is_custom_message_edited: nP && n && null != ny ? ny !== D.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : void 0,
                is_custom_emoji_sound_available: nP && n,
                emoji_name: nP && n && (null == ng ? void 0 : ng.id) == null ? null == ng ? void 0 : ng.surrogates : void 0,
                sound_id: nP && n ? null == nC ? void 0 : nC.soundId : void 0,
                duration_ms: e - nf.startTime,
                payment_source_type: null == nx ? void 0 : nx.type
            });
        }, [
            nk,
            ng,
            ny,
            nR,
            nP,
            nC,
            nf.startTime,
            nx
        ]), nD = u.useMemo(() => () => null == C ? void 0 : C(nu === y.A.COMPLETED, nr), [
            C,
            nu,
            nr
        ]), nG = (0, a.Z)(() => Date.now(), [nE]), nw = u.useCallback(function (n) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                    trackedFromStep: t,
                    analyticsDataOverride: l,
                    fulfillment: u
                } = e, i = Date.now();
            if (n === R.h8.CONFIRM && (nU(), null == d || d(u), ne)) {
                nD();
                return;
            }
            nc(n), null == Q || Q(n), nd(null);
            let r = null != t ? t : nE;
            if (null === r) {
                v.default.track(x.rMx.PAYMENT_FLOW_LOADED, {
                    ...nk,
                    initial_step: n,
                    has_saved_payment_source: nM
                });
                return;
            }
            v.default.track(x.rMx.PAYMENT_FLOW_STEP, {
                ...nk,
                ...l,
                from_step: r,
                to_step: n === R.h8.ADD_PAYMENT_STEPS ? R.h8.PAYMENT_TYPE : n,
                step_duration_ms: i - nG,
                flow_duration_ms: i - nf.startTime
            });
        }, [
            nc,
            Q,
            nd,
            nE,
            nk,
            nG,
            nf.startTime,
            nU,
            d,
            ne,
            nD,
            nM
        ]);
    (0, m.bp)(nE, n_, nw), (0, R.dZ)(nE, nu, ni), (0, T.p)(nE, np, nw), (0, E.Z)(nD), (0, M.w)(nm, () => C(!1), nP), (0, m.D6)(n_);
    let nb = (0, Z.U)({
        renderHeader: B,
        referralTrialOfferId: X,
        handleClose: nD
    });
    return (0, l.jsx)(s.Shaker, {
        className: G.shaker,
        isShaking: q && nu === y.A.PURCHASING,
        intensity: 2,
        children: (0, l.jsx)(s.ModalRoot, {
            className: r()(G.root, { [G.withHeader]: null != nb }),
            transitionState: _,
            hideShadow: $,
            returnRef: nn,
            size: nN,
            children: (0, l.jsx)(O.ZP, {
                header: nb,
                isLargeModal: J || (null == nh ? void 0 : nh.isLargeModal),
                initialPlanId: f,
                subscriptionTier: A,
                handleStepChange: nw,
                handleClose: nD,
                analyticsData: nk,
                setAnalyticsData: nO,
                trialId: L,
                trialFooterMessageOverride: k,
                reviewWarningMessage: w,
                planGroup: b,
                openInvoiceId: Y,
                analyticsLocation: t,
                onSubscriptionConfirmation: H,
                renderPurchaseConfirmation: W,
                postSuccessGuild: j,
                followupSKUInfo: K,
                referralTrialOfferId: X,
                skipConfirm: ne,
                continueSession: nt
            })
        })
    });
}
function b(n) {
    let {
            subscriptionTier: e,
            initialPlanId: t,
            handleStepChange: i,
            referralTrialOfferId: r,
            handleClose: a,
            continueSession: s
        } = n, {
            activeSubscription: E,
            blockedPayments: p,
            hasFetchedSubscriptions: m,
            hasFetchedSubscriptionPlans: T,
            currencyLoading: M,
            selectedSkuId: I,
            setSelectedPlanId: v,
            defaultPlanId: S,
            startedPaymentFlowWithPaymentSourcesRef: h
        } = (0, P.usePaymentContext)(), {isGift: y} = (0, N.wD)(), g = h.current, Z = (0, L.Z)({
            isGift: y,
            skuId: I,
            referralTrialOfferId: r
        }), {defaultToMonthlyPlan: O} = f.k.getCurrentConfig({ location: '055ec5_1' }, { autoTrackExposure: !1 }), [x, D] = u.useState(!0), G = (0, o.e7)([A.Z], () => A.Z.applicationIdsFetched.has(U.RQ));
    return (u.useEffect(() => {
        D(!m || !T || M);
    }, [
        M,
        T,
        m
    ]), (0, d.Z)('Payment Modal', x, 5, {
        hasFetchedSubscriptions: m,
        hasFetchedSubscriptionPlans: T,
        currencyLoading: M
    }, { tags: { app_context: 'billing' } }), u.useEffect(() => {
        if (!G && (0, c.yD)(U.RQ), x || p)
            return;
        let n = (0, C.Kp)({
            isTrial: Z,
            isGift: y,
            selectedSkuId: I,
            startedPaymentFlowWithPaymentSources: g
        });
        s ? i(R.h8.ADD_PAYMENT_STEPS) : null != t ? i(R.h8.REVIEW) : n ? (v((0, C.nA)(I, E, S)), i(R.h8.REVIEW)) : null != e ? i(R.h8.PLAN_SELECT) : i(R.h8.SKU_SELECT);
    }, [
        E,
        p,
        G,
        t,
        x,
        i,
        e,
        I,
        v,
        O,
        Z,
        S,
        y,
        g,
        s
    ]), x) ? (0, l.jsx)(k.Z, {}) : p ? (0, l.jsx)(_.Vq, { onClose: a }) : null;
}
