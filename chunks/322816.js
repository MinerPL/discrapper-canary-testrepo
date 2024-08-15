n.d(t, {
	ZP: function () {
		return A;
	}
}),
	n(411104),
	n(47120);
var s = n(735250),
	a = n(470079),
	i = n(120356),
	r = n.n(i),
	l = n(149765),
	o = n(442837),
	c = n(481060),
	d = n(144991),
	u = n(496675),
	_ = n(594174),
	I = n(626135),
	E = n(233608),
	T = n(700785),
	m = n(764260),
	N = n(631969),
	S = n(95242),
	h = n(420966),
	g = n(275296),
	C = n(203377),
	x = n(981631),
	p = n(689938),
	R = n(441228),
	f = n(151365);
function L(e) {
	let { guild: t, role: n, locked: i } = e,
		r = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
		d = a.useMemo(
			() =>
				T.uB({
					user: r,
					context: t
				}),
			[r, t]
		),
		u = a.useMemo(
			() => ({
				[n.id]: {
					...n,
					permissions: T.Hn
				}
			}),
			[n]
		),
		I = a.useMemo(
			() =>
				T.uB({
					user: r,
					context: t,
					roles: u
				}),
			[r, t, u]
		),
		E = !l.fS(d, I);
	return (0, s.jsx)('div', {
		className: R.clearButtonWrapper,
		children: (0, s.jsx)(c.Tooltip, {
			text: E ? p.Z.Messages.HELP_CLEAR_PERMISSIONS : null,
			position: 'top',
			color: c.Tooltip.Colors.RED,
			children: (e) => {
				let { onMouseEnter: t, onMouseLeave: a } = e;
				return (0, s.jsx)(c.Button, {
					className: R.clearButton,
					size: c.Button.Sizes.TINY,
					look: c.Button.Looks.LINK,
					color: c.Button.Colors.LINK,
					onClick: () => (0, m.TY)(n.id),
					onMouseEnter: t,
					onMouseLeave: a,
					disabled: l.fS(n.permissions, T.Hn) || E || i,
					children: p.Z.Messages.ROLE_PERMISSIONS_CLEAR_PERMISSIONS
				});
			}
		})
	});
}
function O(e) {
	let { guild: t, role: n, specs: a, locked: i } = e;
	if (0 === a.length)
		return (0, s.jsxs)('div', {
			className: R.noResultsContainer,
			children: [
				(0, s.jsx)(N.Z, { className: R.noResults }),
				(0, s.jsx)(c.Text, {
					variant: 'text-sm/normal',
					children: p.Z.Messages.ROLE_PERMISSIONS_EMPTY_TEXT
				})
			]
		});
	function r(e) {
		return u.Z.can(e, t)
			? !u.Z.can(e, t, null, {
					[n.id]: {
						...n,
						permissions: l.Od(n.permissions, e)
					}
				}) && p.Z.Messages.HELP_SINGULAR_PERMISSION
			: p.Z.Messages.HELP_MISSING_PERMISSION;
	}
	return (0, s.jsxs)('div', {
		className: R.permissionsWrapper,
		children: [
			(0, s.jsx)(L, {
				guild: t,
				role: n,
				locked: i
			}),
			a.map((e, t) =>
				(0, s.jsx)(
					d.Z,
					{
						className: R.permissionsForm,
						spec: e,
						permissions: n.permissions,
						locked: i,
						onChange: (e, t) => {
							if ('string' == typeof t) throw Error('Unexpected string `allow`');
							(0, m.lO)(n.id, e, t);
						},
						permissionRender: r
					},
					t
				)
			)
		]
	});
}
function A(e) {
	let { guild: t, role: n, locked: i, setSelectedSection: l, initialSearchQuery: o } = e,
		[d, u] = a.useState(null != o ? o : ''),
		_ = a
			.useMemo(() => E.Z.generateGuildPermissionSpec(t), [t])
			.map((e) => ({
				...e,
				permissions: e.permissions.filter((e) => {
					let t = d.trimStart().toLowerCase();
					return (
						e.title.toLowerCase().includes(t) ||
						(null != e.description && e.description.toString().toLowerCase().includes(t))
					);
				})
			}))
			.filter((e) => e.permissions.length > 0),
		{ headerHeight: T, headerRef: m } = (0, S.Z)(0),
		{ scrolledToTop: N, handleScroll: L } = (0, h.V)(),
		A = a.useRef(!1);
	return (
		a.useEffect(() => {
			if (!A.current && '' !== d.trimStart())
				I.default.track(x.rMx.SEARCH_STARTED, { search_type: 'Permissions' }), (A.current = !0);
		}, [d]),
		(0, s.jsx)(c.AdvancedScrollerAuto, {
			className: R.scroller,
			style: { scrollPaddingTop: T },
			onScroll: L,
			children: (0, s.jsxs)('div', {
				className: f.contentWidth,
				children: [
					(0, s.jsxs)('div', {
						className: r()(f.header, f.stickyHeader, { [f.stickyHeaderElevated]: !N }),
						ref: m,
						children: [
							(0, s.jsx)(h.Z, {
								guild: t,
								role: n,
								selectedSection: C.ZI.PERMISSIONS,
								setSelectedSection: l
							}),
							(0, s.jsx)('div', {
								className: R.noticeContainer,
								children: (0, s.jsx)(g.Z, { role: n })
							}),
							(0, s.jsx)('div', {
								className: R.searchContainer,
								children: (0, s.jsx)(c.SearchBar, {
									size: c.SearchBar.Sizes.MEDIUM,
									query: d,
									onChange: u,
									onClear: () => u(''),
									placeholder: p.Z.Messages.ROLE_PERMISSIONS_SEARCH_PLACEHOLDER,
									'aria-label': p.Z.Messages.ROLE_PERMISSIONS_SEARCH_PLACEHOLDER
								})
							})
						]
					}),
					(0, s.jsx)(O, {
						guild: t,
						role: n,
						specs: _,
						locked: i
					})
				]
			})
		})
	);
}
