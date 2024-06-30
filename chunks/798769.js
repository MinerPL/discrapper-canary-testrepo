s.d(n, {
    Z: function () {
        return T;
    }
});
var a = s(735250);
s(470079);
var t = s(120356), r = s.n(t), c = s(442837), i = s(481060), L = s(607070), C = s(409813), l = s(669079), u = s(170579), o = s(616030), d = s(474936), h = s(689938), N = s(319473);
function T(e) {
    let {
            currentStep: n,
            className: s,
            purchaseState: t,
            premiumType: T,
            useWinterTheme: S = !1,
            onClose: E,
            hideCloseButton: f,
            showTrialBadge: R,
            showDiscountBadge: p,
            isGift: M,
            giftRecipient: I
        } = e, _ = (0, c.e7)([L.Z], () => L.Z.useReducedMotion), x = S ? d.nL.WINTER : d.nL.DEFAULT;
    return M && (0, l.pO)(I) && n !== C.h8.CONFIRM ? (0, a.jsxs)(i.ModalHeader, {
        className: N.modalHeaderCustomGift,
        separator: !1,
        children: [
            (0, a.jsx)('div', {
                className: N.giftNitroInfo,
                children: (0, a.jsx)(i.Heading, {
                    variant: 'heading-lg/semibold',
                    children: (() => {
                        switch (n) {
                        case C.h8.PLAN_SELECT:
                            return T === d.p9.TIER_0 ? h.Z.Messages.GIFT_NITRO_TIER_0 : h.Z.Messages.GIFT_NITRO_ACTION;
                        case C.h8.ADD_PAYMENT_STEPS:
                            return h.Z.Messages.PAYMENT_METHOD_SELECTION;
                        case C.h8.REVIEW:
                            return h.Z.Messages.GIFT_PURCHASE_REVIEW;
                        default:
                            return h.Z.Messages.GIFT_NITRO_ACTION;
                        }
                    })()
                })
            }),
            (0, a.jsx)(i.ModalCloseButton, {
                onClick: E,
                className: N.closeButton
            })
        ]
    }) : (0, a.jsx)(i.ModalHeader, {
        className: r()(N.modalHeader, s),
        separator: !1,
        children: (0, a.jsx)(u.Z, {
            hideCloseOnFullScreen: !0,
            hideCloseButton: f,
            shouldShowPrice: !0,
            upgradeToPremiumType: T,
            renderAnimation: () => T === d.p9.TIER_0 ? (0, a.jsx)(o.zC, {
                className: N.headerAnimation,
                currentStep: n,
                purchaseState: t,
                pause: _
            }) : T === d.p9.TIER_1 ? (0, a.jsx)(o.tK, {
                className: N.headerAnimation,
                currentStep: n,
                purchaseState: t,
                pause: _
            }) : (0, a.jsx)(o.Bk, {
                className: N.headerAnimation,
                currentStep: n,
                purchaseState: t,
                pause: _
            }),
            plan: null,
            isGift: !1,
            className: N.header,
            onClose: E,
            headerTheme: x,
            showTrialBadge: R,
            showDiscountBadge: p
        })
    });
}
