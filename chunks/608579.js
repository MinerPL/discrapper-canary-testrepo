t.d(n, {
    Z: function () {
        return I;
    }
}), t(47120);
var i = t(735250), a = t(470079), r = t(120356), o = t.n(r), s = t(887024), l = t(100527), c = t(906732), d = t(987209), u = t(598), f = t(409813), p = t(791785), _ = t(961830), m = t(742956), C = t(346790), b = t(49308), g = t(117652), v = t(126982), x = t(981631), h = t(302800), E = t(231338), T = t(99178);
function I(e) {
    let {
            onClose: n,
            onComplete: t,
            onStepChange: r,
            transitionState: I,
            loadId: S,
            skuId: A,
            isGift: N = !1,
            giftRecipient: y,
            giftMessage: P,
            analyticsLocations: j,
            returnRef: O
        } = e, {analyticsLocations: Z} = (0, c.ZP)([
            ...j,
            l.Z.COLLECTIBLES_PAYMENT_MODAL
        ]), B = a.useRef(new s.qA()), [k, w] = a.useState(null), [R, M] = a.useState(!1), L = a.useMemo(() => (0, h.UY)(A), [A]), D = a.useCallback(() => {
            M(!0), null == t || t();
        }, [t]), G = a.useCallback(e => {
            M(!1), n(e);
        }, [n]), H = a.useMemo(() => [
            _.WA,
            g.Dd,
            C.n,
            ..._.yp,
            _.wo,
            {
                key: f.h8.CONFIRM,
                renderStep: e => (0, i.jsx)(b.x, {
                    ...e,
                    confettiCanvas: k,
                    analyticsLocations: Z,
                    hideConfetti: null != L
                }),
                options: {
                    bodyClassName: T.modalOverrideBody,
                    sliderBodyClassName: T.modalOverrideSliderBody
                }
            }
        ], [
            Z,
            k,
            L
        ]);
    return (0, i.jsxs)(c.Gt, {
        value: Z,
        children: [
            (0, i.jsx)(s.O_, {
                ref: w,
                className: T.confettiCanvas,
                environment: B.current
            }),
            null != L && (0, i.jsx)('img', {
                src: L.confettiAssetSrc,
                className: o()(T.customConfetti, { [T.hidden]: !R }),
                style: L.style,
                alt: '',
                'aria-hidden': !0
            }),
            (0, i.jsx)(u.PaymentContextProvider, {
                loadId: S,
                stepConfigs: H,
                applicationId: x.XAJ,
                skuIDs: [A],
                isGift: N,
                activeSubscription: null,
                purchaseType: E.GZ.ONE_TIME,
                children: (0, i.jsx)(d.KB, {
                    isGift: N,
                    giftRecipient: y,
                    giftMessage: P,
                    children: (0, i.jsx)(p.PaymentModal, {
                        onClose: G,
                        onComplete: D,
                        applicationId: x.XAJ,
                        skuId: A,
                        initialPlanId: null,
                        analyticsLocations: Z,
                        transitionState: I,
                        renderHeader: (e, n, t) => N ? (0, i.jsx)(m.Z, {
                            step: t,
                            onClose: () => n(!1)
                        }) : (0, i.jsx)(v.Z, {
                            step: t,
                            onClose: () => n(!1)
                        }),
                        returnRef: O,
                        onStepChange: r,
                        hideShadow: !0
                    })
                })
            })
        ]
    });
}
