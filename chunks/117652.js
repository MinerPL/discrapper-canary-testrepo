t.d(n, {
	Dd: function () {
		return I;
	}
});
var a = t(735250);
t(470079);
var s = t(442837),
	i = t(481060),
	l = t(628952),
	r = t(225657),
	o = t(600164),
	d = t(927699),
	u = t(987716),
	c = t(311821),
	E = t(594174),
	f = t(987209),
	h = t(598),
	m = t(409813),
	v = t(614277),
	C = t(474936),
	p = t(689938),
	x = t(21954);
let I = {
	key: m.h8.GIFT_CUSTOMIZATION,
	renderStep: (e) => (0, a.jsx)(g, { ...e }),
	options: {
		isLargeModal: !0,
		useBreadcrumbLabel: () => p.Z.Messages.GIFT_CARD_SELECTION
	}
};
function T(e) {
	let { onStepChange: n, onBackClick: t, showBackButton: s = !1, disabled: l = !1, loading: r = !1 } = e,
		{ hasPaymentSources: o } = (0, h.usePaymentContext)(),
		d = o ? m.h8.REVIEW : m.h8.ADD_PAYMENT_STEPS;
	return (0, a.jsxs)(a.Fragment, {
		children: [
			(0, a.jsx)(i.Button, {
				onClick: () => n(d),
				disabled: l,
				submitting: r,
				children: p.Z.Messages.PAGINATION_NEXT
			}),
			s ? (0, a.jsx)(c.Z, { onClick: t }) : null
		]
	});
}
function g(e) {
	let { handleStepChange: n, handleClose: t } = e,
		{
			customGiftMessage: c = '',
			setCustomGiftMessage: m,
			giftRecipientError: I,
			validatingGiftRecipient: g,
			giftRecipient: N
		} = (0, f.wD)(),
		{ selectedSkuId: S, selectedSkuPricePreview: A } = (0, h.usePaymentContext)(),
		_ = (0, s.e7)([E.default], () => E.default.getCurrentUser());
	return (0, a.jsxs)(a.Fragment, {
		children: [
			(0, a.jsx)(v.C3, {
				children: (0, a.jsxs)('div', {
					className: x.stepBody,
					children: [
						(0, a.jsx)('div', {
							className: x.bodyColumnMiddle,
							children: (0, a.jsx)(u.q, { isShopGift: !0 })
						}),
						(0, a.jsxs)('div', {
							className: x.bodyColumnRight,
							children: [
								(0, a.jsx)(r.Z, {
									selectedSkuId: S,
									className: x.sendTo
								}),
								(0, a.jsx)(d.Z, {
									sectionTitle: p.Z.Messages.GIFT_OPTIONAL_MESSAGE,
									onTextChange: (e) => (null == m ? void 0 : m(e)),
									pendingText: c,
									currentText: c,
									disableThemedBackground: !0,
									className: x.customGiftMessageWrapper,
									innerClassName: x.customGiftMessage
								}),
								(0, a.jsx)(l.Z, {
									selectedSkuId: S,
									selectedSkuPricePreview: A,
									className: x.giftPreview
								})
							]
						})
					]
				})
			}),
			(0, a.jsx)(v.O3, {
				children: (0, a.jsx)(i.ModalFooter, {
					justify: o.Z.Justify.BETWEEN,
					align: o.Z.Align.CENTER,
					children: (0, a.jsx)(T, {
						onStepChange: n,
						onBackClick: t,
						disabled: null != I || null == N || N.id === (null == _ ? void 0 : _.id) || c.length > C.$n,
						loading: g
					})
				})
			})
		]
	});
}
