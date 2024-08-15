n.d(t, {
	S: function () {
		return f;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(1561),
	l = n(761224),
	u = n(743236),
	c = n(448239),
	d = n(247442),
	_ = n(939350),
	E = n(837244);
function f(e) {
	let { color: t = 'default', label: n, checked: a, subtext: f, disabled: h, isFocused: p, menuItemProps: m, action: I, className: T, focusedClassName: g } = e,
		S = i.useRef(null);
	return (
		i.useEffect(() => {
			p && (0, u.F)(S);
		}, [p]),
		(0, r.jsxs)(o.P, {
			innerRef: S,
			className: s()(E.item, E.labelContainer, _._[t], T, {
				[E.disabled]: h,
				[E.focused]: p,
				[null != g ? g : '']: p
			}),
			onClick: h ? void 0 : I,
			...m,
			'aria-checked': a,
			'aria-disabled': h,
			children: [
				(0, r.jsxs)('div', {
					className: E.label,
					children: [
						(0, l.I)(n, e),
						null != f &&
							(0, r.jsx)('div', {
								className: E.subtext,
								children: f
							})
					]
				}),
				(0, r.jsx)('div', {
					className: E.iconContainer,
					children: a
						? (0, r.jsx)(d.Z, {
								className: E.icon,
								background: E.checkbox,
								foreground: E.check
							})
						: (0, r.jsx)(c.Z, {
								className: E.icon,
								foreground: E.__invalid_checkboxEmpty
							})
				})
			]
		})
	);
}
