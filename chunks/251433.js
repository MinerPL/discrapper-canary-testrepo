n.d(t, {
	N: function () {
		return i;
	},
	U: function () {
		return a;
	}
});
var r = n(182823);
function i(e) {
	let { id: t, label: n, 'aria-labelledby': i, 'aria-label': a, labelElementType: s = 'label' } = e;
	t = (0, r.Me)(t);
	let o = (0, r.Me)(),
		l = {};
	return (
		n
			? ((i = i ? `${o} ${i}` : o),
				(l = {
					id: o,
					htmlFor: 'label' === s ? t : void 0
				}))
			: !i &&
				!a &&
				console.warn(
					'If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility'
				),
		{
			labelProps: l,
			fieldProps: (0, r.bE)({
				id: t,
				'aria-label': a,
				'aria-labelledby': i
			})
		}
	);
}
function a(e) {
	let { description: t, errorMessage: n, isInvalid: a, validationState: s } = e,
		{ labelProps: o, fieldProps: l } = i(e),
		u = (0, r.mp)([!!t, !!n, a, s]),
		c = (0, r.mp)([!!t, !!n, a, s]);
	return {
		labelProps: o,
		fieldProps: (l = (0, r.dG)(l, {
			'aria-describedby': [u, c, e['aria-describedby']].filter(Boolean).join(' ') || void 0
		})),
		descriptionProps: { id: u },
		errorMessageProps: { id: c }
	};
}
