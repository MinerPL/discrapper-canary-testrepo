n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(735250);
n(470079);
var i = n(772848), a = n(481060), o = n(976255), s = n(667), l = n(138464), u = n(594174), c = n(626135), d = n(585483), _ = n(74538), E = n(981631), f = n(474936);
function h(e) {
    let {
            initialPlanId: t,
            followupSKUInfo: h,
            onClose: p,
            onComplete: m,
            onSubscriptionConfirmation: I,
            analyticsLocations: T,
            analyticsObject: g,
            analyticsLocation: S,
            analyticsSourceLocation: A,
            isGift: N = !1,
            giftMessage: v,
            subscriptionTier: O,
            trialId: R,
            postSuccessGuild: C,
            openInvoiceId: y,
            applicationId: D,
            referralTrialOfferId: L,
            giftRecipient: b,
            returnRef: M,
            subscription: P,
            skipConfirm: U
        } = null != e ? e : {}, w = !1, x = (0, i.Z)(), G = u.default.getCurrentUser(), k = (0, _.M5)(G, f.p9.TIER_2);
    (0, a.openModalLazy)(async () => {
        let {default: e} = await Promise.all([
            n.e('96427'),
            n.e('77298'),
            n.e('23357'),
            n.e('15972'),
            n.e('12013'),
            n.e('6416'),
            n.e('39612'),
            n.e('29549'),
            n.e('32776'),
            n.e('95900'),
            n.e('8016'),
            n.e('68136'),
            n.e('31605'),
            n.e('95854'),
            n.e('57497'),
            n.e('8110')
        ]).then(n.bind(n, 7305));
        return n => {
            let {
                onClose: i,
                ...a
            } = n;
            return (0, r.jsx)(e, {
                ...a,
                loadId: x,
                subscriptionTier: O,
                skuId: (0, _.Wz)(O),
                isGift: N,
                giftMessage: v,
                giftRecipient: b,
                initialPlanId: t,
                followupSKUInfo: h,
                onClose: (e, t) => {
                    i(), null == p || p(e), e && (null == I || I(), !N && null != t && t === f.Si.TIER_2 && !k && d.S.dispatch(E.CkL.PREMIUM_SUBSCRIPTION_CREATED));
                },
                onComplete: () => {
                    w = !0, null == m || m(), !N && (0, l.H)(!0);
                },
                onSubscriptionConfirmation: I,
                analyticsLocations: T,
                analyticsObject: g,
                analyticsLocation: S,
                analyticsSourceLocation: A,
                trialId: R,
                postSuccessGuild: C,
                planGroup: f.Y1,
                openInvoiceId: y,
                applicationId: D,
                referralTrialOfferId: L,
                returnRef: M,
                subscription: P,
                skipConfirm: !!U
            });
        };
    }, {
        modalKey: 'payment-modal',
        onCloseCallback: () => {
            !w && c.default.track(E.rMx.PAYMENT_FLOW_CANCELED, {
                load_id: x,
                payment_type: E.Zuq[E.GZQ.SUBSCRIPTION],
                location: null != S ? S : g,
                source: A,
                subscription_type: E.NYc.PREMIUM,
                is_gift: N,
                eligible_for_trial: null != R,
                application_id: D,
                location_stack: T
            }), (0, o.fw)(), (0, s.p)(), null == p || p(w), w && (null == I || I());
        }
    });
}
