t.d(a, {
	j: function () {
		return u;
	}
});
var s = t(735250),
	n = t(470079),
	l = t(481060),
	r = t(462566);
t(600164);
var o = t(603421),
	i = t(689938),
	c = t(411212);
let u = (e) => {
	let { billingError: a, onCardInfoChange: t } = e,
		u = null != a && (null == a.code || (0, o.ly)(a) === o.Rg.CREDIT_CARD_INFORMATION);
	return (0, s.jsxs)(n.Fragment, {
		children: [
			u
				? (0, s.jsx)(l.FormErrorBlock, {
						className: c.errorBlock,
						children: i.Z.Messages.BILLING_ERROR_SECTION_CARD
					})
				: null,
			(0, s.jsx)(r.Z, {
				onCardInfoChange: t,
				error: a
			})
		]
	});
};
