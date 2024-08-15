n.d(t, {
	S: function () {
		return o;
	},
	T: function () {
		return l;
	}
});
var r = n(182823),
	i = n(470079),
	a = n(612001);
let s = {
	border: 0,
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: '1px',
	margin: '-1px',
	overflow: 'hidden',
	padding: 0,
	position: 'absolute',
	width: '1px',
	whiteSpace: 'nowrap'
};
function o(e = {}) {
	let { style: t, isFocusable: n } = e,
		[r, o] = (0, i.useState)(!1),
		{ focusWithinProps: l } = (0, a.L_)({
			isDisabled: !n,
			onFocusWithinChange: (e) => o(e)
		}),
		u = (0, i.useMemo)(
			() =>
				r
					? t
					: t
						? {
								...s,
								...t
							}
						: s,
			[r]
		);
	return {
		visuallyHiddenProps: {
			...l,
			style: u
		}
	};
}
function l(e) {
	let { children: t, elementType: n = 'div', isFocusable: a, style: s, ...l } = e,
		{ visuallyHiddenProps: u } = o(e);
	return i.createElement(n, (0, r.dG)(l, u), t);
}
