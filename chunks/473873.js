n.d(t, {
	U: function () {
		return s;
	},
	k: function () {
		return o;
	}
});
var r = n(182823),
	i = n(706682),
	a = n(612001);
function s(e, t) {
	let n,
		{ elementType: s = 'button', isDisabled: o, onPress: l, onPressStart: u, onPressEnd: c, onPressUp: d, onPressChange: _, preventFocusOnPress: E, allowFocusWhenDisabled: f, onClick: h, href: p, target: m, rel: I, type: T = 'button' } = e;
	n =
		'button' === s
			? {
					type: T,
					disabled: o
				}
			: {
					role: 'button',
					tabIndex: o ? void 0 : 0,
					href: 'a' === s && o ? void 0 : p,
					target: 'a' === s ? m : void 0,
					type: 'input' === s ? T : void 0,
					disabled: 'input' === s ? o : void 0,
					'aria-disabled': o && 'input' !== s ? o : void 0,
					rel: 'a' === s ? I : void 0
				};
	let { pressProps: g, isPressed: S } = (0, a.r7)({
			onPressStart: u,
			onPressEnd: c,
			onPressChange: _,
			onPress: l,
			onPressUp: d,
			isDisabled: o,
			preventFocusOnPress: E,
			ref: t
		}),
		{ focusableProps: A } = (0, i.kc)(e, t);
	f && (A.tabIndex = o ? -1 : A.tabIndex);
	let N = (0, r.dG)(A, g, (0, r.zL)(e, { labelable: !0 }));
	return {
		isPressed: S,
		buttonProps: (0, r.dG)(n, N, {
			'aria-haspopup': e['aria-haspopup'],
			'aria-expanded': e['aria-expanded'],
			'aria-controls': e['aria-controls'],
			'aria-pressed': e['aria-pressed'],
			onClick: (e) => {
				h && (h(e), console.warn('onClick is deprecated, please use onPress'));
			}
		})
	};
}
function o(e, t, n) {
	let { isSelected: i } = t,
		{ isPressed: a, buttonProps: o } = s(
			{
				...e,
				onPress: (0, r.tS)(t.toggle, e.onPress)
			},
			n
		);
	return {
		isPressed: a,
		buttonProps: (0, r.dG)(o, { 'aria-pressed': i })
	};
}
