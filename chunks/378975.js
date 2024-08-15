l.d(n, {
	Z: function () {
		return h;
	}
}),
	l(47120);
var t = l(735250),
	r = l(470079),
	i = l(120356),
	a = l.n(i),
	u = l(481060),
	s = l(596454),
	o = l(911969),
	c = l(868819),
	d = l(970184),
	m = l(280501),
	f = l(689938),
	p = l(252443);
function E(e) {
	let { emoji: n, label: l, description: r, isDisabled: i, isOffset: u } = e,
		o = a()(p.labelContainer, {
			[p.disabled]: i,
			[p.offset]: null == n && u
		});
	return (0, t.jsxs)('div', {
		className: p.option,
		children: [
			null != n
				? (0, t.jsx)(s.Z, {
						className: p.emoji,
						emojiId: n.id,
						emojiName: n.name,
						animated: n.animated
					})
				: null,
			(0, t.jsxs)('div', {
				className: o,
				children: [
					(0, t.jsx)('strong', {
						className: p.label,
						children: l
					}),
					null != r
						? (0, t.jsx)('span', {
								className: p.description,
								children: r
							})
						: null
				]
			})
		]
	});
}
function v(e) {
	let { emoji: n, label: l } = e;
	return (0, t.jsx)('div', {
		className: p.option,
		children: (0, t.jsxs)('div', {
			className: a()(p.value, p.singleValue),
			children: [
				null != n
					? (0, t.jsx)(s.Z, {
							className: p.emoji,
							src: n.src,
							emojiId: n.id,
							emojiName: n.name,
							animated: n.animated
						})
					: null,
				(0, t.jsx)('span', {
					className: p.singleValueLabel,
					children: l
				})
			]
		})
	});
}
function C(e) {
	let { options: n } = e;
	return (0, t.jsx)('div', {
		className: p.option,
		children: (0, t.jsx)('div', {
			className: p.value,
			children: n.map((e, n) =>
				(0, t.jsxs)(
					'div',
					{
						className: p.optionTag,
						children: [
							null != e.emoji
								? (0, t.jsx)(s.Z, {
										className: p.smallEmoji,
										src: e.emoji.src,
										emojiId: e.emoji.id,
										emojiName: e.emoji.name,
										animated: e.emoji.animated
									})
								: null,
							(0, t.jsx)(
								'span',
								{
									className: p.tag,
									children: e.label
								},
								e.value
							)
						]
					},
					n
				)
			)
		})
	});
}
function h(e) {
	let { type: n, options: l, id: i, placeholder: a, maxValues: s, minValues: h, disabled: x } = e,
		_ = r.useMemo(() => l.filter((e) => e.default).map((e) => e.value), [l]),
		{
			state: N,
			executeStateUpdate: T,
			visualState: I,
			isDisabled: g,
			error: S
		} = (0, d.Ee)(e, {
			type: n,
			values: _
		}),
		O = s > 1,
		Z = I === m.gH.LOADING,
		[j, L] = r.useState(!1),
		[A, M] = r.useState(() => new Set(l.filter((e) => e.default).map((e) => e.value))),
		[R, P] = r.useState(A),
		b = r.useMemo(() => l.some((e) => null != e.emoji), [l]);
	r.useEffect(() => {
		if ((null == N ? void 0 : N.type) === o.re.STRING_SELECT) {
			let e = new Set(N.values);
			M(e), P(e);
		} else {
			let e = new Set(_);
			M(e), P(e);
		}
	}, [i, _, N]);
	let y = r.useCallback(() => {
		if (R !== A)
			T({
				type: o.re.STRING_SELECT,
				values: Array.from(A)
			}) && P(A);
	}, [A, R, P, T]);
	r.useEffect(() => {
		if (!(j || (A.size === R.size && Array.from(R).every((e) => A.has(e))))) y();
	}, [j, A, R, y]);
	let U = u.singleSelect;
	O ? (U = u.multiSelect) : 0 === h && (U = u.toggleSelect);
	let k = (0, u.useVariableSelect)({
		value: A,
		onChange: (e) => M(e),
		onSelectInteraction: U
	});
	return (0, t.jsxs)(r.Fragment, {
		children: [
			(0, t.jsxs)('div', {
				className: p.container,
				children: [
					(0, t.jsx)(u.Select, {
						isDisabled: x || g,
						className: p.select,
						options: l.map((e) => ({
							...e,
							disabled: O && !A.has(e.value) && A.size === s
						})),
						placeholder: null != a ? a : f.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER,
						onClose: () => L(!1),
						onOpen: () => L(!0),
						maxVisibleItems: 5,
						closeOnSelect: !O,
						optionClassName: p.selectOption,
						renderOptionLabel: (e) =>
							(0, t.jsx)(E, {
								...e,
								isDisabled: O && !A.has(e.value) && A.size === s,
								isOffset: b
							}),
						renderOptionValue: (e) => (O ? (0, t.jsx)(C, { options: e }) : (0, t.jsx)(v, { ...e[0] })),
						...k
					}),
					Z
						? (0, t.jsx)('div', {
								className: p.__invalid_loading,
								children: (0, t.jsx)(u.Dots, {
									dotRadius: 3.5,
									themed: !0
								})
							})
						: null
				]
			}),
			null != S
				? (0, t.jsx)(c.st, {
						...(0, c.c4)(S),
						className: p.error
					})
				: null
		]
	});
}
