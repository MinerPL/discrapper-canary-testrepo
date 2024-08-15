t.d(n, {
	b: function () {
		return s;
	}
});
var i = t(735250);
t(470079);
var a = t(481060),
	r = t(991862);
function s(e) {
	let { currencies: n, className: t, children: a } = e;
	return n.length < 2
		? null
		: (0, i.jsx)('div', {
				className: t,
				children: a
			});
}
n.Z = function (e) {
	let { currencies: n, onChange: t, selectedCurrency: s, className: l, disabled: o = !1 } = e;
	if (n.length < 2) return null;
	let c = n.map((e, n) => ({
		key: n,
		value: e,
		label: ''.concat(e.toUpperCase(), ' - ').concat((0, r.T)(e))
	}));
	return (0, i.jsx)(a.SingleSelect, {
		value: s,
		options: c,
		onChange: (e) => {
			null != e && t(e);
		},
		className: l,
		isDisabled: o
	});
};
