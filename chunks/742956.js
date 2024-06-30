t.d(n, {
    Z: function () {
        return u;
    }
}), t(627341);
var i = t(735250);
t(470079);
var a = t(120356), r = t.n(a), o = t(278074), s = t(481060), l = t(409813), c = t(689938), d = t(378941);
function u(e) {
    let {
            step: n,
            onClose: t
        } = e, a = (0, o.EQ)(n).with(l.h8.REVIEW, () => c.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER).with(l.h8.ADD_PAYMENT_STEPS, () => c.Z.Messages.BILLING_STANDALONE_ADD_PAYMENT_TITLE).with(l.h8.GIFT_CUSTOMIZATION, () => c.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER).with(l.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => c.Z.Messages.COLLECTIBLES_GIFT_COACHMARK_HEADING).with(l.h8.CONFIRM, () => '').otherwise(() => null);
    return null == a ? null : (0, i.jsxs)(s.ModalHeader, {
        className: r()(d.headerContainerGift),
        separator: n !== l.h8.CONFIRM,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-lg/semibold',
                children: a
            }),
            (0, i.jsx)(s.ModalCloseButton, {
                onClick: t,
                className: d.closeButtonGift
            })
        ]
    });
}
