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
    o = n(317269),
    C = n(669079),
    d = n(296848),
    u = n(987209),
    c = n(598),
    _ = n(164513),
    p = n(614277),
    x = n(698708);
function L(e) {
    var s, n;
    let i,
        { handleClose: L, planGroup: h, onSubscriptionConfirmation: f, renderPurchaseConfirmation: I, postSuccessGuild: E, followupSKUInfo: M, continueSession: N } = e,
        { activeSubscription: j, paymentSources: T, paymentSourceId: g, selectedPlan: m, selectedSkuId: A, step: O, updatedSubscription: S, startingPremiumSubscriptionPlanIdRef: R } = (0, c.usePaymentContext)(),
        { isGift: P, giftRecipient: Z, giftCode: v, hasSentMessage: y, isSendingMessage: b, sendGiftMessage: U } = (0, u.wD)();
    l()(null != m, 'Expected plan to selected'), l()(null != A, 'Expected selectedSkuId'), l()(null != O, 'Step should be set');
    let B = r.useCallback(() => {
        L(), null == f || f();
    }, [L, f]);
    return (
        r.useEffect(() => {
            if (!(!P || null == Z || null == v || y || b || (0, C.pO)(Z))) a.F.getCurrentConfig({ location: '36b986_1' }).enabled && U({ onSubscriptionConfirmation: f });
        }, [U, P, Z, v, y, b, f]),
        (i =
            null != I
                ? I(m, B, S)
                : N
                  ? (0, t.jsx)(o.VY, {})
                  : P
                    ? (0, t.jsx)(o.TB, {
                          planId: m.id,
                          onClose: B
                      })
                    : R.current === m.id
                      ? (0, t.jsx)(o.ZP, {
                            planId: m.id,
                            postSuccessGuild: E,
                            onClose: B,
                            paymentSourceType: null === (s = T[null != g ? g : '']) || void 0 === s ? void 0 : s.type
                        })
                      : (0, t.jsx)(o.ZP, {
                            followupSKUInfo: M,
                            startingPremiumSubscriptionPlanId: R.current,
                            planId: m.id,
                            onClose: B,
                            isDowngrade: null != j && (0, d.GY)(j, m.id, h),
                            paymentSourceType: null === (n = T[null != g ? g : '']) || void 0 === n ? void 0 : n.type
                        })),
        (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsxs)(p.C3, {
                    children: [(0, t.jsx)(x.Z, {}), i]
                }),
                P && (0, t.jsx)(_.Z, { onClose: B })
            ]
        })
    );
}
