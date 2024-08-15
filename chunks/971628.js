a.d(t, {
	G: function () {
		return b;
	},
	Z: function () {
		return R;
	}
}),
	a(47120),
	a(724458);
var n = a(735250),
	l = a(470079),
	s = a(120356),
	r = a.n(s),
	i = a(91192),
	o = a(481060),
	c = a(385499),
	d = a(600164),
	u = a(313201),
	m = a(565138),
	h = a(631969),
	S = a(605436),
	x = a(537383),
	T = a(71080),
	g = a(689938),
	f = a(779077);
let v = (0, u.hQ)(),
	_ = (0, u.hQ)();
function b(e) {
	return ''.concat(e.rowType, ':').concat(e.id);
}
function E(e) {
	return (0, n.jsx)(
		o.FormTitle,
		{
			tag: 'h5',
			className: r()(f.sectionTitle, f.rowHeight),
			children: e
		},
		e
	);
}
function C(e) {
	let {
			id: t,
			children: a,
			rowLabel: l,
			checked: s,
			onSelect: c,
			disabled: u,
			showCheckbox: m,
			selected: h,
			onMouseEnter: S,
			'aria-posinset': x,
			'aria-setsize': T
		} = e,
		g = (0, i.JA)(t);
	return (0, n.jsx)(o.Clickable, {
		...g,
		id: t,
		className: r()(f.addMemberRow, { [f.selectedRow]: h }),
		onClick: (e) => {
			!u && (e.preventDefault(), c());
		},
		onMouseEnter: S,
		role: 'option',
		'aria-disabled': u,
		'aria-selected': s,
		'aria-setsize': T,
		'aria-posinset': x,
		children: (0, n.jsxs)(d.Z, {
			justify: d.Z.Justify.BETWEEN,
			align: d.Z.Align.CENTER,
			children: [
				m
					? (0, n.jsx)(o.Checkbox, {
							displayOnly: !0,
							size: 18,
							value: s,
							type: o.Checkbox.Types.INVERTED,
							disabled: u,
							children: (0, n.jsx)('div', {
								className: f.checkboxLabel,
								children: a
							})
						})
					: a,
				null != l
					? (0, n.jsx)(o.Text, {
							color: 'text-muted',
							variant: 'text-xs/normal',
							children: l
						})
					: null
			]
		})
	});
}
function R(e) {
	let {
			listClassName: t,
			pendingAdditions: a,
			query: s,
			onQueryChange: i,
			onClickRow: u,
			onRemovePendingAddition: R,
			roles: p = [],
			members: I = [],
			users: M = [],
			guilds: A = [],
			placeholderText: w,
			disabledText: N,
			hintText: Z,
			searchTitleText: j,
			renderEmptyText: L,
			focusSearchAfterReady: U,
			isReady: D,
			maxCount: y,
			hideRowLabel: O = !1
		} = e,
		G = l.useRef(null),
		B = l.useRef(null),
		k = [p.length, I.length, M.length, A.length],
		[P, F] = l.useState(!1),
		[H, z] = l.useState(0),
		[$, K] = l.useState(-1);
	l.useEffect(() => {
		var e;
		null === (e = G.current) || void 0 === e || e.focus();
	}, []);
	let Q = l.useCallback(function (e, t) {
			let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
			if ((z(e), K(t), a)) {
				var n;
				null === (n = B.current) ||
					void 0 === n ||
					n.scrollToIndex({
						section: null != e ? e : 0,
						row: null != t ? t : 0,
						padding: 8
					});
			}
		}, []),
		W = l.useCallback(
			(e, t) => {
				if (null == t) return;
				i('');
				let a = (e === T.m$.ROLES ? p : [])[t];
				a.rowType !== T.aC.EMPTY_STATE && u(a);
			},
			[p, u, i]
		),
		q = l.useCallback(
			(e) => {
				var t;
				if (null != e && e.rowType !== T.aC.EMPTY_STATE)
					u(e), i(''), null === (t = G.current) || void 0 === t || t.focus();
			},
			[u, i]
		),
		V = l.useMemo(() => Object.keys(a), [a]),
		Y =
			l.useMemo(
				() =>
					I.some((e) => !e.disabled) ||
					p.some((e) => !e.disabled) ||
					M.some((e) => !e.disabled) ||
					A.some((e) => !e.disabled),
				[I, p, M, A]
			) || '' === s.trim();
	function J() {
		var e;
		F(!(null === (e = B.current) || void 0 === e ? void 0 : e.isScrolledToTop()) && Y);
	}
	return (
		l.useEffect(() => {
			J();
		}),
		(0, n.jsxs)(n.Fragment, {
			children: [
				(0, n.jsxs)('div', {
					className: r()(f.searchBox, { [f.scrollSeparator]: P }),
					children: [
						null != j &&
							(0, n.jsx)(o.FormTitle, {
								tag: o.FormTitleTags.H5,
								children: j
							}),
						(0, n.jsx)(x.Z, {
							ref: G,
							query: s,
							onQueryChange: i,
							selectedSection: H,
							selectedRow: $,
							onSelectionChange: Q,
							onSelect: W,
							tags: V.map((e) => a[e].display),
							sections: k,
							onRemoveTag: function (e) {
								R(V[e]);
							},
							placeholder: w,
							focusAfterReady: U,
							isReady: D,
							'aria-labelledby': v,
							'aria-controls': _
						}),
						null != Z
							? (0, n.jsx)(o.Text, {
									variant: 'text-xs/normal',
									children: Z
								})
							: null
					]
				}),
				Y
					? (0, n.jsx)(o.List, {
							ref: B,
							className: r()(f.roleMemberList, t),
							sections: k,
							renderRow: (e) => {
								let t,
									l,
									{ section: s, row: i } = e,
									d = null,
									u = !1,
									h = !1,
									x = !1,
									g = null != y && Object.keys(a).length >= y;
								switch (s) {
									case T.m$.ROLES:
										(u = (l = b((d = p[i]))) in a || d.disabled),
											(h = d.disabled || g),
											(x = H === T.m$.ROLES && $ === i),
											(t = (0, n.jsxs)('div', {
												className: f.rowBody,
												children: [
													(0, n.jsx)('div', {
														className: r()(f.rowHeight, f.alignCenter),
														children: (0, n.jsx)(o.ShieldUserIcon, {
															size: 'custom',
															color: d.colorString,
															height: 20
														})
													}),
													(0, n.jsxs)('div', {
														className: f.rowLabel,
														children: [
															(0, n.jsx)(o.Text, {
																variant: 'text-sm/medium',
																className: f.__invalid_rowTitle,
																color: d.rowType === T.aC.EMPTY_STATE ? 'text-muted' : 'text-normal',
																children: d.name
															}),
															d.disabled && null != N
																? (0, n.jsx)(o.Text, {
																		color: 'header-secondary',
																		variant: 'text-xs/normal',
																		children: N
																	})
																: null
														]
													})
												]
											}));
										break;
									case T.m$.MEMBERS:
										(u = (l = b((d = I[i]))) in a || d.disabled),
											(h = d.disabled || g),
											(x = H === T.m$.MEMBERS && $ === i),
											(t = (0, n.jsxs)('div', {
												className: f.rowBody,
												children: [
													(0, n.jsx)(o.Avatar, {
														src: d.avatarURL,
														size: o.AvatarSizes.SIZE_24,
														'aria-label': ''
													}),
													(0, n.jsx)(o.Text, {
														className: f.rowLabel,
														variant: 'text-sm/normal',
														children: d.name
													}),
													null != d.nickname
														? (0, n.jsx)(o.Text, {
																color: 'text-muted',
																className: f.rowLabelSubText,
																variant: 'text-sm/normal',
																'aria-hidden': !0,
																children: d.username
															})
														: null,
													d.bot && (0, n.jsx)(c.Z, { verified: d.verifiedBot })
												]
											}));
										break;
									case T.m$.USERS:
										(u = (l = b((d = M[i]))) in a || d.disabled),
											(h = d.disabled || g),
											(x = H === T.m$.USERS && $ === i),
											(t = (0, n.jsxs)('div', {
												className: f.rowBody,
												children: [
													(0, n.jsx)(o.Avatar, {
														src: d.avatarURL,
														size: o.AvatarSizes.SIZE_24,
														'aria-label': ''
													}),
													(0, n.jsxs)('div', {
														className: f.rowLabel,
														children: [
															(0, n.jsx)(o.Text, {
																variant: 'text-sm/normal',
																children: d.name
															}),
															d.disabled && null != N
																? (0, n.jsx)(o.Text, {
																		color: 'header-secondary',
																		variant: 'text-xs/normal',
																		children: N
																	})
																: null
														]
													})
												]
											}));
										break;
									case T.m$.GUILDS:
										(u = (l = b((d = A[i]))) in a || d.disabled),
											(h = d.disabled || g),
											(x = H === T.m$.GUILDS && $ === i),
											(t = (0, n.jsxs)('div', {
												className: f.rowBody,
												children: [
													(0, n.jsx)(m.Z, {
														guild: d.guild,
														active: !0,
														size: m.Z.Sizes.SMALLER
													}),
													(0, n.jsx)('div', {
														className: f.rowLabel,
														children: (0, n.jsx)(o.Text, {
															variant: 'text-sm/medium',
															color: 'text-normal',
															children: d.name
														})
													})
												]
											}));
								}
								return null == d
									? null
									: (0, n.jsx)(
											C,
											{
												id: 'user-row-'.concat(i),
												rowLabel: O ? null : S.zB(d.rowType),
												checked: u,
												disabled: h,
												onSelect: () => q(d),
												showCheckbox: d.rowType !== T.aC.EMPTY_STATE,
												onMouseEnter: () => Q(s, i, !1),
												selected: x,
												'aria-posinset': i + 1,
												'aria-setsize': k.reduce((e, t) => e + t, 0),
												children: t
											},
											l
										);
							},
							rowHeight: 40,
							renderSection: (e) => {
								let { section: t } = e;
								switch (t) {
									case T.m$.ROLES:
										return E(g.Z.Messages.ROLES);
									case T.m$.MEMBERS:
										return E(g.Z.Messages.MEMBERS);
									case T.m$.USERS:
										return E(g.Z.Messages.USERS);
									case T.m$.GUILDS:
										return E(g.Z.Messages.SERVERS);
								}
							},
							sectionHeight: 32,
							onScroll: J,
							role: void 0,
							innerRole: 'listbox',
							innerId: _,
							innerAriaMultiselectable: !0,
							innerAriaOrientation: 'vertical'
						})
					: (0, n.jsxs)(d.Z, {
							className: t,
							align: d.Z.Align.CENTER,
							justify: d.Z.Justify.CENTER,
							direction: d.Z.Direction.VERTICAL,
							children: [
								(0, n.jsx)(h.Z, { className: f.noResultIcon }),
								(0, n.jsx)(o.Text, {
									variant: 'text-sm/normal',
									children: L(s)
								})
							]
						})
			]
		})
	);
}
