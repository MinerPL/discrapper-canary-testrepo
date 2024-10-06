n.d(s, {
    b: function () {
        return L;
    }
});
var t = n(735250),
    r = n(470079),
    i = n(512722),
    l = n.n(i),
    a = n(881602),
    o = n(155491),
    C = n(317269),
    d = n(669079),
    c = n(296848),
    u = n(987209),
    _ = n(598),
    p = n(592627),
    x = n(614277),
    h = n(698708);
function L(e) {
    var s, n;
    let i,
        { handleClose: L, planGroup: f, onSubscriptionConfirmation: I, renderPurchaseConfirmation: E, postSuccessGuild: M, followupSKUInfo: N, continueSession: j } = e,
        { activeSubscription: g, paymentSources: T, paymentSourceId: m, selectedPlan: S, selectedSkuId: A, step: O, updatedSubscription: R, startingPremiumSubscriptionPlanIdRef: P } = (0, _.usePaymentContext)(),
        { isGift: Z, giftRecipient: v, giftCode: y, hasSentMessage: b, isSendingMessage: U, sendGiftMessage: H } = (0, u.wD)(),
        B = (0, o.Z2)();
    l()(null != S, 'Expected plan to selected'), l()(null != A, 'Expected selectedSkuId'), l()(null != O, 'Step should be set');
    let k = r.useCallback(() => {
        L(), null == I || I();
    }, [L, I]);
    return (
        r.useEffect(() => {
            if (!(!Z || null == v || null == y || b || U || (0, d.pO)(v))) a.F.getCurrentConfig({ location: '36b986_1' }).enabled && H({ onSubscriptionConfirmation: I });
        }, [H, Z, v, y, b, U, I]),
        (i =
            null != E
                ? E(S, k, R)
                : j
                  ? (0, t.jsx)(C.VY, {})
                  : Z
                    ? (0, t.jsx)(C.TB, {
                          planId: S.id,
                          onClose: k,
                          halloweenDecoPurchase: B
                      })
                    : P.current === S.id
                      ? (0, t.jsx)(C.ZP, {
                            planId: S.id,
                            postSuccessGuild: M,
                            onClose: k,
                            paymentSourceType: null === (s = T[null != m ? m : '']) || void 0 === s ? void 0 : s.type
                        })
                      : (0, t.jsx)(C.ZP, {
                            followupSKUInfo: N,
                            startingPremiumSubscriptionPlanId: P.current,
                            planId: S.id,
                            onClose: k,
                            isDowngrade: null != g && (0, c.GY)(g, S.id, f),
                            paymentSourceType: null === (n = T[null != m ? m : '']) || void 0 === n ? void 0 : n.type
                        })),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsxs)(x.C3, {
                    children: [(0, t.jsx)(h.Z, {}), i]
                }),
                Z
                    ? (0, t.jsx)(p.Z, {
                          onClose: k,
                          halloweenDecoPurchase: B
                      })
                    : null
            ]
        })
    );
}
