n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(703533),
    s = n(442837),
    c = n(100527),
    d = n(906732),
    u = n(597688),
    m = n(987209),
    h = n(563132),
    f = n(409813),
    p = n(791785),
    g = n(961830),
    _ = n(742956),
    C = n(346790),
    E = n(49308),
    I = n(117652),
    x = n(126982),
    v = n(981631),
    N = n(302800),
    T = n(215023),
    S = n(231338),
    b = n(556709);
function A(e) {
    var t;
    let { onClose: n, onComplete: l, onStepChange: A, transitionState: j, loadId: Z, skuId: R, isGift: P = !1, giftRecipient: y, giftMessage: L, giftingOrigin: O, analyticsLocations: M, returnRef: k } = e,
        { analyticsLocations: D } = (0, d.ZP)([...M, c.Z.COLLECTIBLES_PAYMENT_MODAL]),
        B = r.useRef(new o.qA()),
        [w, U] = r.useState(null),
        [F, G] = r.useState(!1),
        V = r.useMemo(() => (0, N.UY)(R), [R]),
        H = (0, s.Wu)([u.Z], () => u.Z.recommendedGiftSkuIds, []),
        z = null != R ? [R] : H,
        W = null !== (t = z[0]) && void 0 !== t ? t : null,
        K = null != R && T.Rm.has(R),
        Y = r.useCallback(() => {
            G(!0), null == l || l();
        }, [l]),
        X = r.useCallback(
            (e) => {
                G(!1), n(e);
            },
            [n]
        ),
        Q = r.useMemo(
            () => [
                g.WA,
                I.Dd,
                C.n,
                ...g.yp,
                g.wo,
                {
                    key: f.h8.CONFIRM,
                    renderStep: (e) =>
                        (0, i.jsx)(E.x, {
                            ...e,
                            confettiCanvas: w,
                            analyticsLocations: D,
                            hideConfetti: null != V
                        }),
                    options: {
                        bodyClassName: b.modalOverrideBody,
                        sliderBodyClassName: b.modalOverrideSliderBody
                    }
                }
            ],
            [D, w, V]
        );
    return (0, i.jsxs)(d.Gt, {
        value: D,
        children: [
            (0, i.jsx)(o.O_, {
                ref: U,
                className: b.confettiCanvas,
                environment: B.current
            }),
            null != V &&
                (0, i.jsx)('img', {
                    src: V.imageSrc,
                    className: a()(b.customConfetti, { [b.hidden]: !F }),
                    style: V.style,
                    alt: '',
                    'aria-hidden': !0
                }),
            (0, i.jsx)(h.PaymentContextProvider, {
                loadId: Z,
                stepConfigs: Q,
                applicationId: v.XAJ,
                skuIDs: z,
                isGift: P,
                activeSubscription: null,
                purchaseType: S.GZ.ONE_TIME,
                children: (0, i.jsx)(m.KB, {
                    isGift: P,
                    giftRecipient: y,
                    giftMessage: L,
                    giftingOrigin: O,
                    children: (0, i.jsx)(p.PaymentModal, {
                        onClose: X,
                        onComplete: Y,
                        applicationId: v.XAJ,
                        skuId: W,
                        initialPlanId: null,
                        analyticsLocations: D,
                        transitionState: j,
                        renderHeader: (e, t, n) =>
                            P
                                ? (0, i.jsx)(_.Z, {
                                      step: n,
                                      onClose: () => t(!1),
                                      giftingOrigin: O
                                  })
                                : (0, i.jsx)(x.Z, {
                                      step: n,
                                      onClose: () => t(!1)
                                  }),
                        returnRef: k,
                        onStepChange: A,
                        skipConfirm: K,
                        hideShadow: !0
                    })
                })
            })
        ]
    });
}
