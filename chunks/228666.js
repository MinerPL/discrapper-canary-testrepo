t.d(a, {
	P: function () {
		return N;
	}
});
var s = t(735250),
	n = t(470079),
	l = t(442837),
	r = t(481060),
	o = t(464179);
t(600164);
var i = t(706454),
	c = t(351402),
	u = t(603421),
	d = t(981631),
	E = t(689938),
	A = t(411212);
let N = (e) => {
	let a,
		{ billingAddressInfo: t, billingError: N, onBillingAddressChange: m, paymentSourceType: _ } = e,
		p = null != N && (null == N.code || (0, u.ly)(N) === u.Rg.ADDRESS),
		h = (0, l.e7)([i.default], () => i.default.locale);
	switch (_) {
		case d.HeQ.GIROPAY:
		case d.HeQ.PAYSAFE_CARD:
		case d.HeQ.GCASH:
		case d.HeQ.GRABPAY_MY:
		case d.HeQ.MOMO_WALLET:
		case d.HeQ.KAKAOPAY:
		case d.HeQ.GOPAY_WALLET:
		case d.HeQ.BANCONTACT:
			a = 'en-US' === h ? o.ZP.Layouts.MODAL_US_WITH_NAME : o.ZP.Layouts.MODAL_INTL_WITH_NAME;
			break;
		case d.HeQ.VENMO:
		case d.HeQ.CASH_APP:
			a = o.ZP.Layouts.MODAL_US_WITH_NAME;
			break;
		default:
			a = 'en-US' === h ? o.ZP.Layouts.MODAL_US : o.ZP.Layouts.MODAL_INTL;
	}
	let T = (0, l.e7)([c.Z], () => c.Z.ipCountryCode);
	return (
		0 === t.country.length && (t.country = null != T ? T : ''),
		(0, s.jsxs)(n.Fragment, {
			children: [
				p
					? (0, s.jsx)(r.FormErrorBlock, {
							className: A.errorBlock,
							children: E.Z.Messages.BILLING_ERROR_SECTION_ADDRESS
						})
					: null,
				(0, s.jsx)(o.ZP, {
					className: A.__invalid_formItem,
					onBillingAddressChange: m,
					error: N,
					layout: a,
					...t
				})
			]
		})
	);
};
