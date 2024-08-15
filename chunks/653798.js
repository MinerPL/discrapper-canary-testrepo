t.d(n, {
	HE: function () {
		return N;
	},
	Ji: function () {
		return d;
	},
	KU: function () {
		return T;
	},
	PO: function () {
		return u;
	},
	R$: function () {
		return _;
	},
	i$: function () {
		return E;
	},
	q9: function () {
		return I;
	}
});
var s = t(735250);
t(470079);
var r = t(120356),
	l = t.n(r),
	i = t(911969),
	a = t(937615),
	c = t(689938),
	o = t(246502);
function u(e) {
	let { children: n, className: t } = e;
	return (0, s.jsx)('div', {
		className: l()(o.table, t),
		children: n
	});
}
function I(e) {
	let { children: n } = e;
	return (0, s.jsx)('div', {
		className: o.header,
		children: n
	});
}
function _(e) {
	let { label: n, value: t, className: r } = e;
	return (0, s.jsxs)('div', {
		className: l()(o.row, r),
		children: [
			(0, s.jsx)('div', {
				className: o.rowLabel,
				children: n
			}),
			(0, s.jsx)('div', {
				className: o.rowAmount,
				children: t
			})
		]
	});
}
function E(e) {
	let {
			label: n,
			value: t,
			discounts: r,
			originalAmount: l,
			interval: u,
			currency: I,
			className: E,
			intervalCount: T
		} = e,
		d = (e) => (null != r ? r.find((n) => n.type === e) : null),
		N = d(i.eW.SUBSCRIPTION_PLAN),
		M = d(i.eW.ENTITLEMENT),
		A = null != N ? Math.floor((N.amount / l) * 100) : null,
		L = (0, a.T4)(l, I);
	return (0, s.jsxs)(s.Fragment, {
		children: [
			(0, s.jsx)(_, {
				label: n,
				value: (0, s.jsxs)(s.Fragment, {
					children: [
						t,
						null != A
							? (0, s.jsxs)('div', {
									className: o.rowPercentDiscount,
									children: ['-', A, '%']
								})
							: null
					]
				}),
				className: E
			}),
			null != A
				? (0, s.jsxs)('div', {
						className: o.rowDiscountOriginalPrice,
						children: ['(', null != u && null != T ? (0, a.og)(L, u, T) : L, ')']
					})
				: null,
			null != M
				? (0, s.jsx)('div', {
						className: o.entitlementDiscountRow,
						children: c.Z.Messages.BILLING_INVOICE_SUBSCRIPTION_CREDIT_APPLIED
					})
				: null
		]
	});
}
function T(e) {
	let { extended: n = !1, negativeMarginTop: t = !1, negativeMarginBottom: r = !1 } = e;
	return (0, s.jsx)('div', {
		className: l()(o.divider, {
			[o.dividerExtended]: n,
			[o.negativeMarginTop]: t,
			[o.negativeMarginBottom]: r
		})
	});
}
function d(e) {
	let { label: n, value: t, className: r } = e;
	return (0, s.jsxs)('div', {
		className: l()(o.totalRow, r),
		children: [
			(0, s.jsx)('div', {
				className: o.totalLabel,
				children: n
			}),
			(0, s.jsx)('div', {
				className: o.totalAmount,
				children: t
			})
		]
	});
}
function N(e) {
	let { children: n, className: t } = e;
	return (0, s.jsx)('div', {
		className: l()(o.finePrint, t),
		children: n
	});
}
