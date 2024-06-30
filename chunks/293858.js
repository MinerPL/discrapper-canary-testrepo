t.d(n, {
    b: function () {
        return f;
    }
});
var i = t(735250), r = t(470079), o = t(512722), a = t.n(o), s = t(881602), l = t(317269), d = t(669079), c = t(296848), C = t(987209), u = t(598), _ = t(614277), p = t(698708);
function f(e) {
    var n, t;
    let o, {
            handleClose: f,
            planGroup: x,
            onSubscriptionConfirmation: h,
            renderPurchaseConfirmation: b,
            postSuccessGuild: g,
            followupSKUInfo: m,
            continueSession: I
        } = e, {
            activeSubscription: L,
            paymentSources: E,
            paymentSourceId: M,
            selectedPlan: T,
            selectedSkuId: N,
            step: S,
            updatedSubscription: j,
            startingPremiumSubscriptionPlanIdRef: A
        } = (0, u.usePaymentContext)(), {
            isGift: O,
            giftRecipient: R,
            giftCode: P,
            hasSentMessage: y,
            isSendingMessage: v,
            sendGiftMessage: B
        } = (0, C.wD)();
    a()(null != T, 'Expected plan to selected'), a()(null != N, 'Expected selectedSkuId'), a()(null != S, 'Step should be set');
    let k = r.useCallback(() => {
        f(), null == h || h();
    }, [
        f,
        h
    ]);
    return r.useEffect(() => {
        if (!(!O || null == R || null == P || y || v || (0, d.pO)(R)))
            s.F.getCurrentConfig({ location: '36b986_1' }).enabled && B({ onSubscriptionConfirmation: h });
    }, [
        B,
        O,
        R,
        P,
        y,
        v,
        h
    ]), o = null != b ? b(T, k, j) : I ? (0, i.jsx)(l.VY, {}) : O ? (0, i.jsx)(l.TB, {
        planId: T.id,
        onClose: k
    }) : A.current === T.id ? (0, i.jsx)(l.ZP, {
        planId: T.id,
        postSuccessGuild: g,
        onClose: k,
        paymentSourceType: null === (n = E[null != M ? M : '']) || void 0 === n ? void 0 : n.type
    }) : (0, i.jsx)(l.ZP, {
        followupSKUInfo: m,
        startingPremiumSubscriptionPlanId: A.current,
        planId: T.id,
        onClose: k,
        isDowngrade: null != L && (0, c.GY)(L, T.id, x),
        paymentSourceType: null === (t = E[null != M ? M : '']) || void 0 === t ? void 0 : t.type
    }), (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)(_.C3, {
            children: [
                (0, i.jsx)(p.Z, {}),
                o
            ]
        })
    });
}
