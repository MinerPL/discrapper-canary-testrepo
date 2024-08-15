n.d(t, {
	Z: function () {
		return D;
	}
}),
	n(47120);
var s = n(735250),
	a = n(470079),
	i = n(120356),
	r = n.n(i),
	l = n(225857),
	o = n(290843),
	c = n(866442),
	d = n(442837),
	u = n(481060),
	_ = n(239091),
	I = n(749210),
	E = n(607070),
	T = n(605436),
	m = n(134433),
	N = n(325476),
	S = n(496675),
	h = n(671533),
	g = n(946724),
	C = n(970129),
	x = n(712181),
	p = n(420966),
	R = n(203377),
	f = n(981631),
	L = n(689938),
	O = n(598679);
let A = 'DRAGGABLE_ROLE';
function M(e) {
	var t, a;
	let i,
		{
			guild: d,
			role: I,
			highestRole: E,
			selectedItem: N,
			onClick: S,
			currentPosition: h,
			onDragStart: g,
			onDragReset: x,
			onDragComplete: p,
			roleStyle: R
		} = e,
		L = (0, C.T)(d, E, I),
		M = (0, T.pM)(d.id, I.id),
		D = null == L && !M,
		v = (null === (t = I.tags) || void 0 === t ? void 0 : t.guild_connections) !== void 0,
		[, j] = (0, l.c)({
			type: A,
			item: () => (
				g(I.id),
				{
					id: I.id,
					position: h
				}
			),
			canDrag: () => D,
			end: (e, t) => {
				let n = t.getDropResult();
				if (null == n) {
					x();
					return;
				}
				p(n.roleId);
			}
		}),
		[{ dragSourcePosition: Z }, b] = (0, o.L)({
			accept: A,
			canDrop: () => D,
			collect: (e) => {
				let t = e.getItem();
				return null != t && e.isOver() && e.canDrop()
					? { dragSourcePosition: t.position }
					: { dragSourcePosition: null };
			},
			drop: () => ({ roleId: I.id })
		}),
		U = null !== (a = I.colorString) && void 0 !== a ? a : (0, c.Rf)(f.p6O);
	return (
		(i = v
			? (0, s.jsx)(m.Z, {
					size: 12,
					color: I.colorString,
					className: O.verifiedRoleIcon
				})
			: 'dot' === R
				? (0, s.jsx)(u.RoleDot, {
						color: U,
						background: !1,
						tooltip: !1
					})
				: (0, s.jsx)(u.RoleCircle, { color: U })),
		(0, s.jsxs)(u.TabBar.Item, {
			className: r()(O.row, {
				[O.dragBefore]: null !== Z && h < Z,
				[O.dragAfter]: null !== Z && h > Z
			}),
			id: I.id,
			selectedItem: N,
			itemType: 'side',
			onClick: S,
			onContextMenu: function (e) {
				(0, _.jW)(e, async () => {
					let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
					return (t) =>
						(0, s.jsx)(e, {
							...t,
							role: I,
							guild: d
						});
				});
			},
			'aria-label': I.name,
			clickableRef: (e) => {
				var t;
				return j(b(null !== (t = null == e ? void 0 : e.ref) && void 0 !== t ? t : null));
			},
			children: [
				i,
				null != L
					? (0, s.jsx)(C.Z, {
							className: O.lock,
							tooltipText: L
						})
					: null,
				(0, s.jsx)(u.Text, {
					variant: 'text-sm/medium',
					color: M ? 'header-primary' : 'interactive-active',
					lineClamp: 1,
					children: I.name
				})
			]
		})
	);
}
function D(e) {
	let { guild: t, currentRoleId: n, setCurrentRoleId: i, setSelectedSection: l } = e,
		o = (0, d.e7)([g.Z], () => g.Z.roles),
		c = (0, d.e7)([S.Z], () => S.Z.getHighestRole(t)),
		_ = (0, d.e7)([E.Z], () => E.Z.roleStyle),
		[T, m] = a.useState(o.length),
		{ scrolledToTop: C, handleScroll: f } = (0, p.V)(),
		{ handleDragStart: A, handleDragReset: D, handleDragComplete: v } = (0, x.Z)(o),
		j = a.useRef(null),
		Z = a.useCallback(
			(e) => {
				var t, n;
				let s = o.findIndex((t) => t.id === e);
				null === (n = j.current) ||
					void 0 === n ||
					null === (t = n.getScrollerNode()) ||
					void 0 === t ||
					t.scrollTo({ top: Math.max((s - 2) * 34, 0) });
			},
			[o]
		);
	a.useEffect(() => {
		Z(n);
	}, []),
		a.useEffect(() => {
			o.length > T && Z(n), o.length !== T && m(o.length);
		}, [o.length, T, m, Z, n]);
	let b = () => {
		I.Z.createRole(t.id), l(R.ZI.DISPLAY);
	};
	return (0, s.jsx)(N.ZP.Sidebar, {
		className: O.sidebar,
		children: (0, s.jsxs)('div', {
			className: O.container,
			children: [
				(0, s.jsxs)('div', {
					className: r()(O.titleContainer, { [O.titleElevated]: !C }),
					children: [
						(0, s.jsxs)(u.Clickable, {
							className: O.title,
							onClick: () => i(null),
							children: [
								(0, s.jsx)(h.Z, { direction: h.Z.Directions.LEFT }),
								(0, s.jsx)(u.Text, {
									className: O.titleText,
									variant: 'text-md/semibold',
									color: 'none',
									children: L.Z.Messages.BACK
								})
							]
						}),
						(0, s.jsx)(u.Tooltip, {
							position: 'top',
							'aria-label': L.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE,
							text: (0, s.jsx)(u.Text, {
								className: O.tooltip,
								variant: 'text-sm/normal',
								children: L.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
							}),
							children: (e) =>
								(0, s.jsx)(u.Clickable, {
									className: O.addRole,
									...e,
									onClick: b,
									children: (0, s.jsx)(u.PlusSmallIcon, {
										size: 'custom',
										color: 'currentColor',
										width: 20,
										height: 20
									})
								})
						})
					]
				}),
				(0, s.jsx)(u.AdvancedScroller, {
					className: O.list,
					ref: j,
					onScroll: f,
					children: (0, s.jsx)(u.TabBar, {
						selectedItem: n,
						onItemSelect: (e) => i(e),
						orientation: 'vertical',
						children: o.map((e, a) =>
							(0, s.jsx)(
								M,
								{
									guild: t,
									role: e,
									highestRole: c,
									selectedItem: n,
									onClick: () => i(e.id),
									currentPosition: a,
									onDragStart: A,
									onDragReset: D,
									onDragComplete: v,
									roleStyle: _
								},
								e.id
							)
						)
					})
				})
			]
		})
	});
}
