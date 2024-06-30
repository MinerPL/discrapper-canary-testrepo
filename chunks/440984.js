s.d(t, {
    D: function () {
        return A;
    }
}), s(47120);
var n = s(735250), a = s(470079), i = s(442837), r = s(780384), o = s(481060), l = s(410030), c = s(607070), d = s(530618), _ = s(74538), E = s(937615), u = s(230916), T = s(798769), I = s(474936), S = s(689938), N = s(596159), C = s(982404), m = s(299156);
function A(e) {
    let {
            premiumSubscription: t,
            premiumType: s,
            onClose: A,
            confettiCanvas: h,
            userWasChurned: g = !1,
            userDiscountOffer: O
        } = e, p = (0, l.ZP)(), R = (0, r.wj)(p) ? C : m, x = a.useRef(null), [M, D] = a.useState(!1), f = (0, u._)(t, I.Xh.PREMIUM_MONTH_TIER_2, O), P = (0, _.aS)(I.Xh.PREMIUM_MONTH_TIER_2), L = (0, E.T4)(P.amount, P.currency), Z = (0, i.e7)([c.Z], () => c.Z.useReducedMotion);
    if (a.useEffect(() => {
            null != x.current && null != f && D(!0);
        }, [
            x,
            M,
            f
        ]), null == O || null == f)
        return null;
    let b = S.Z.Messages.PREMIUM_TIER_SUBSCRIPTION_DESCRIPTION_AFTER_REDEMPTION_WITH_ACTIVE_SUB.format({
            numMonths: O.discount.user_usage_limit,
            discountedPrice: f,
            regularPrice: L
        }), v = (0, n.jsx)('div', {
            className: N.whatYouLoseButtonContainer,
            children: (0, n.jsx)(o.Button, {
                color: o.Button.Colors.BRAND,
                onClick: A,
                children: S.Z.Messages.PREMIUM_DISCOUNT_SWEET
            })
        });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(T.Z, {
                premiumType: s,
                className: N.cancellationHeader,
                onClose: A
            }),
            (0, n.jsx)('div', {
                ref: x,
                children: (0, n.jsx)(o.ModalContent, {
                    className: N.body,
                    children: null != f ? (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsxs)('div', {
                                className: N.discountAppliedBody,
                                children: [
                                    (0, n.jsx)('img', {
                                        alt: '',
                                        src: R,
                                        className: N.nitroIcon
                                    }),
                                    (0, n.jsx)(o.Heading, {
                                        variant: 'heading-xl/bold',
                                        children: g ? S.Z.Messages.PREMIUM_TRIAL_TUTORIAL_WELCOME_BACK : S.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED_PUNCTUATED
                                    })
                                ]
                            }),
                            (0, n.jsx)('div', {
                                className: N.bodyString,
                                children: b
                            }),
                            v
                        ]
                    }) : (0, n.jsx)(o.Spinner, {})
                })
            }),
            !Z && M && (0, n.jsx)(d.Z, {
                confettiTarget: x.current,
                confettiCanvas: h,
                confettiVelocityMultiplier: 0.75
            })
        ]
    });
}
