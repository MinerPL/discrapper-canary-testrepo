n(47120);
var s = n(735250),
	a = n(470079),
	i = n(120356),
	r = n.n(i),
	l = n(481060),
	o = n(981631),
	c = n(541992);
t.Z = (e) => {
	let { className: t, tags: n, value: i, onRemoveTag: d, onAddTag: u, maxTaxLength: _, maxTags: I, disabled: E, placeholder: T, ...m } = e,
		[N, S] = a.useState(null != i ? i : ''),
		h = n.map((e, t) =>
			(0, s.jsxs)(
				'span',
				{
					className: r()(c.tag, { [c.__invalid_disabledTag]: E }),
					children: [
						e,
						!E &&
							(0, s.jsx)(l.Clickable, {
								className: c.closeWrapper,
								onClick: () => d(t),
								children: (0, s.jsx)(l.XSmallIcon, {
									size: 'xs',
									color: 'currentColor',
									className: c.close
								})
							})
					]
				},
				t
			)
		),
		g = a.useCallback(() => {
			let e = N.trim();
			if (0 !== e.length) (null == I || !(n.length >= I)) && (u(e), S(''));
		}, [N, I, u, n.length]),
		C = a.useCallback(
			(e) => {
				switch (e.keyCode) {
					case o.yXg.BACKSPACE:
						0 === N.length && n.length > 0 && (e.preventDefault(), e.stopPropagation(), d(n.length - 1));
						break;
					case o.yXg.ENTER:
					case o.yXg.TAB:
					case o.yXg.COMMA:
						e.preventDefault(), e.stopPropagation(), g();
				}
			},
			[g, N.length, d, n.length]
		);
	return (0, s.jsxs)('div', {
		className: r()(t, c.inputWrapper, { [c.disabled]: E }),
		children: [
			h,
			(0, s.jsx)(l.TextInput, {
				className: c.inputOuter,
				inputClassName: c.inputInner,
				...m,
				value: N,
				onKeyDown: C,
				onChange: S,
				maxLength: _,
				disabled: E,
				onBlur: g,
				placeholder: T
			})
		]
	});
};
