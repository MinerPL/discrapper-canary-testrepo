t.d(n, {
	Z: function () {
		return c;
	}
}),
	t(627341);
var a = t(735250);
t(470079);
var s = t(120356),
	i = t.n(s),
	l = t(278074),
	r = t(481060),
	o = t(409813),
	d = t(689938),
	u = t(748202);
function c(e) {
	let { step: n, onClose: t } = e,
		s = (0, l.EQ)(n)
			.with(o.h8.REVIEW, () => d.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_REVIEW_HEADER)
			.with(o.h8.ADD_PAYMENT_STEPS, () => d.Z.Messages.BILLING_STANDALONE_ADD_PAYMENT_TITLE)
			.with(o.h8.GIFT_CUSTOMIZATION, () => d.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER)
			.with(o.h8.AWAITING_PURCHASE_TOKEN_AUTH, () => d.Z.Messages.COLLECTIBLES_GIFT_COACHMARK_HEADING)
			.with(o.h8.CONFIRM, () => '')
			.otherwise(() => null);
	return null == s
		? null
		: (0, a.jsxs)(r.ModalHeader, {
				className: i()(u.headerContainerGift),
				separator: n !== o.h8.CONFIRM,
				children: [
					(0, a.jsx)(r.Heading, {
						variant: 'heading-lg/semibold',
						children: s
					}),
					(0, a.jsx)(r.ModalCloseButton, {
						onClick: t,
						className: u.closeButtonGift
					})
				]
			});
}
