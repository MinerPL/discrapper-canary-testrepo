l.d(n, {
	ZP: function () {
		return h;
	},
	tE: function () {
		return t;
	}
}),
	l(47120);
var t,
	r,
	i = l(735250),
	a = l(470079),
	u = l(120356),
	s = l.n(u),
	o = l(481060),
	c = l(911969),
	d = l(868819),
	m = l(970184),
	f = l(280501),
	p = l(689938),
	E = l(758183),
	v = l(252443);
function C(e) {
	let { icon: n, iconSize: l } = e;
	return (0, i.jsx)('div', {
		className: E.iconContainer,
		style: {
			height: l,
			width: l
		},
		children: n
	});
}
function h(e) {
	let { selectActionComponent: n, queryOptions: l, renderIcon: t, renderOptionLabel: r, defaultValues: u } = e,
		{ type: h, placeholder: x, maxValues: _, disabled: N } = n,
		[T, I] = a.useState(!1),
		[g, S] = a.useState(!1),
		[O, Z] = a.useState(new Map(null == u ? void 0 : u.map((e) => [e.value, e]))),
		[j, L] = a.useState(new Set(O.keys())),
		[A, M] = a.useState(() => (null != u ? u : []).map((e) => e.value)),
		[R, P] = a.useState(0);
	a.useEffect(() => {
		let e = (null != u ? u : []).map((e) => e.value);
		if (e.every((e) => A.includes(e)) && A.every((n) => e.includes(n))) return;
		M(e);
		let n = new Map(null == u ? void 0 : u.map((e) => [e.value, e]));
		Z(n), L(new Set(n.keys())), P((e) => e + 1);
	}, [u, A]);
	let {
			state: b,
			executeStateUpdate: y,
			visualState: U,
			isDisabled: k,
			error: D
		} = (0, m.Ee)(n, {
			type: h,
			selectedOptions: Array.from(O.values())
		}),
		w = U === f.gH.LOADING;
	a.useEffect(() => {
		if ((null == b ? void 0 : b.type) === c.re.USER_SELECT || (null == b ? void 0 : b.type) === c.re.ROLE_SELECT || (null == b ? void 0 : b.type) === c.re.MENTIONABLE_SELECT || (null == b ? void 0 : b.type) === c.re.CHANNEL_SELECT) {
			let e = new Map(b.selectedOptions.map((e) => [e.value, e]));
			Z(e), L(new Set(e.keys()));
		}
	}, [b]);
	let B = a.useCallback(() => {
		y({
			type: h,
			selectedOptions: Array.from(O.values())
		}) && L(new Set(O.keys()));
	}, [y, h, O]);
	a.useEffect(() => {
		if (!(T || g || (O.size === j.size && Array.from(O.keys()).every((e) => j.has(e))))) B();
	}, [T, g, j, O, B]);
	let G = 0 === O.size || T,
		H = {
			isDisabled: N || k,
			wrapperClassName: E.select,
			options: (e) =>
				new Promise((n) => {
					n(l(e));
				}),
			placeholder: G ? (null != x ? x : p.Z.Messages.MESSAGE_SELECT_COMPONENT_DEFAULT_PLACEHOLDER) : void 0,
			onClose: () => I(!1),
			onOpen: () => I(!0),
			onBlur: () => S(!1),
			maxVisibleItems: 5,
			optionClassName: E.__invalid_selectOption,
			renderOptionPrefix: (e, n) => {
				let { inPill: l } = n,
					r = l ? 16 : 24,
					a = t(e, r);
				return null != a
					? (0, i.jsx)(C, {
							icon: a,
							iconSize: r
						})
					: null;
			},
			renderOptionLabel: r
		};
	return (0, i.jsxs)(a.Fragment, {
		children: [
			(0, i.jsxs)('div', {
				className: E.container,
				children: [
					_ > 1
						? (0, i.jsx)(
								o.SearchableSelect,
								{
									className: E.badges,
									value: Array.from(O.values()),
									onChange: (e) => {
										!T && S(!0), Z(new Map(e.map((e) => [e.value, e])));
									},
									multi: !0,
									inputClassNames: s()({
										[E.soloInput]: 0 === O.size,
										[E.inlineInput]: O.size > 0,
										[E.hidden]: !G
									}),
									closeOnSelect: !1,
									centerCaret: !0,
									...H
								},
								R
							)
						: (0, i.jsx)(
								o.SearchableSelect,
								{
									className: (E.badges, E.singleSelect),
									value: [...O.values()][0],
									onChange: (e) => Z(null != e ? new Map([[e.value, e]]) : new Map()),
									clearable: !0,
									centerCaret: !0,
									...H
								},
								R
							),
					w
						? (0, i.jsx)('div', {
								className: E.loading,
								children: (0, i.jsx)(o.Dots, {
									dotRadius: 3.5,
									themed: !0
								})
							})
						: null
				]
			}),
			null != D
				? (0, i.jsx)(d.st, {
						...(0, d.c4)(D),
						className: v.error
					})
				: null
		]
	});
}
((r = t || (t = {}))[(r.PILL_ICON_SIZE = 16)] = 'PILL_ICON_SIZE'), (r[(r.ROW_ICON_SIZE = 24)] = 'ROW_ICON_SIZE');
