t.d(n, {
    Dd: function () {
        return x;
    }
});
var i = t(735250);
t(470079);
var a = t(442837), r = t(481060), o = t(628952), s = t(225657), l = t(927699), c = t(987716), d = t(311821), u = t(594174), f = t(285952), p = t(987209), _ = t(598), m = t(409813), C = t(614277), b = t(474936), g = t(689938), v = t(754324);
let x = {
    key: m.h8.GIFT_CUSTOMIZATION,
    renderStep: e => (0, i.jsx)(E, { ...e }),
    options: {
        isLargeModal: !0,
        useBreadcrumbLabel: () => g.Z.Messages.GIFT_CARD_SELECTION
    }
};
function h(e) {
    let {
            onStepChange: n,
            onBackClick: t,
            showBackButton: a = !1,
            disabled: o = !1,
            loading: s = !1
        } = e, {hasPaymentSources: l} = (0, _.usePaymentContext)(), c = l ? m.h8.REVIEW : m.h8.ADD_PAYMENT_STEPS;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.Button, {
                onClick: () => n(c),
                disabled: o,
                submitting: s,
                children: g.Z.Messages.PAGINATION_NEXT
            }),
            a ? (0, i.jsx)(d.Z, { onClick: t }) : null
        ]
    });
}
function E(e) {
    let {
            handleStepChange: n,
            handleClose: t
        } = e, {
            customGiftMessage: d = '',
            setCustomGiftMessage: m,
            giftRecipientError: x,
            validatingGiftRecipient: E,
            giftRecipient: T
        } = (0, p.wD)(), {
            selectedSkuId: I,
            selectedSkuPricePreview: S
        } = (0, _.usePaymentContext)(), A = (0, a.e7)([u.default], () => u.default.getCurrentUser());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C.C3, {
                children: (0, i.jsxs)('div', {
                    className: v.stepBody,
                    children: [
                        (0, i.jsx)('div', {
                            className: v.bodyColumnMiddle,
                            children: (0, i.jsx)(c.q, { isShopGift: !0 })
                        }),
                        (0, i.jsxs)('div', {
                            className: v.bodyColumnRight,
                            children: [
                                (0, i.jsx)(s.Z, {
                                    selectedSkuId: I,
                                    className: v.sendTo
                                }),
                                (0, i.jsx)(l.Z, {
                                    sectionTitle: g.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => null == m ? void 0 : m(e),
                                    pendingText: d,
                                    currentText: d,
                                    disableThemedBackground: !0,
                                    className: v.customGiftMessageWrapper,
                                    innerClassName: v.customGiftMessage
                                }),
                                (0, i.jsx)(o.Z, {
                                    selectedSkuId: I,
                                    selectedSkuPricePreview: S,
                                    className: v.giftPreview
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)(C.O3, {
                children: (0, i.jsx)(r.ModalFooter, {
                    justify: f.Z.Justify.BETWEEN,
                    align: f.Z.Align.CENTER,
                    children: (0, i.jsx)(h, {
                        onStepChange: n,
                        onBackClick: t,
                        disabled: null != x || null == T || T.id === (null == A ? void 0 : A.id) || d.length > b.$n,
                        loading: E
                    })
                })
            })
        ]
    });
}
