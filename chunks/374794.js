t.d(A, {
	Z: function () {
		return l;
	}
});
var a = t(735250);
t(470079);
var n = t(120356),
	r = t.n(n),
	s = t(481060),
	o = t(53281);
function l(e) {
	let {
		children: A,
		className: t,
		innerClassName: n,
		onChange: l,
		'aria-label': i,
		'aria-describedby': d,
		filters: c,
		multiple: u = !1,
		disabled: C = !1,
		submitting: g = !1,
		...T
	} = e;
	return (0, a.jsx)(s.FocusRing, {
		within: !0,
		children: (0, a.jsxs)('div', {
			className: r()(
				t,
				(0, s.getButtonStyle)({
					...T,
					submitting: g,
					disabled: C
				})
			),
			'aria-disabled': C,
			children: [
				(0, a.jsx)('span', {
					'aria-hidden': !0,
					className: n,
					children: A
				}),
				(0, a.jsx)(o.Z, {
					tabIndex: 0,
					onChange: l,
					filters: c,
					multiple: u,
					'aria-label': i,
					'aria-describedby': d,
					disabled: C
				})
			]
		})
	});
}
