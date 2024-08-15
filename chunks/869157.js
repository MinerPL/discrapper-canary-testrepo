t.d(n, {
	Z: function () {
		return L;
	}
}),
	t(724458),
	t(47120);
var i = t(735250),
	a = t(470079),
	s = t(512722),
	l = t.n(s),
	r = t(392711),
	o = t.n(r),
	d = t(442837),
	c = t(481060),
	u = t(749210),
	I = t(367907),
	m = t(895924),
	_ = t(581364),
	N = t(929507),
	E = t(997787),
	T = t(970731),
	h = t(314897),
	g = t(430824),
	p = t(594174),
	f = t(626135),
	C = t(5192),
	O = t(709054),
	x = t(360606),
	S = t(905753),
	A = t(399860),
	R = t(335049),
	b = t(617012),
	Z = t(981631),
	v = t(689938),
	M = t(570767);
function L(e) {
	let { commandId: n, editPermissions: t, guildId: s, noneSelectedText: r, overwrites: I, hasAccessToMutatePermissions: N } = e,
		T = (0, d.e7)([g.Z], () => g.Z.getGuild(s));
	l()(null != T, '');
	let h = (0, d.e7)([g.Z], () => g.Z.getRoles(s)),
		[f, R] = a.useState(new Set()),
		b = a.useMemo(() => {
			var e;
			let n = (0, _.bD)(s);
			let t =
				((e = h),
				o()(e)
					.sortBy((e) => e.position)
					.reduce((e, n, t) => ((e[n.id] = t), e), {}));
			return Object.values(I)
				.filter((e) => e.canRead)
				.sort((e, i) => {
					let a = e.type - i.type;
					if (0 !== a) return a;
					switch (e.type) {
						case m.Kw.USER:
							return (function (e, n, t) {
								let i = Number(e.canWrite) - Number(n.canWrite);
								if (0 !== i) return i;
								let a = p.default.getUser(e.id),
									s = p.default.getUser(n.id);
								if (null != a && null != s) {
									let e = C.ZP.getName(t, void 0, a),
										n = C.ZP.getName(t, void 0, s);
									return null == e ? void 0 : e.localeCompare(n);
								}
								return O.default.compare(e.id, n.id);
							})(e, i, s);
						case m.Kw.ROLE:
							return (function (e, n, t, i) {
								if (e.id === t) return -1;
								if (n.id === t) return 1;
								let a = i[e.id];
								return a > i[n.id] ? -1 : 1;
							})(e, i, s, t);
						case m.Kw.CHANNEL:
							return (function (e, n, t) {
								if (e.id === t) return -1;
								if (n.id === t) return 1;
								let i = Number(e.canWrite) - Number(n.canWrite);
								return 0 !== i ? i : O.default.compare(e.id, n.id);
							})(e, i, n);
					}
				});
		}, [s, I, h]),
		Z = a.useCallback(
			(e, n) => {
				t({}, [(0, A.rE)(e, n)]);
			},
			[t]
		),
		v = a.useCallback(
			(e, n, i) => {
				let a = (0, A.rE)(e, n);
				null != I[a] &&
					t(
						{
							[a]: {
								id: e,
								permission: i,
								type: n
							}
						},
						[]
					);
			},
			[t, I]
		);
	a.useEffect(() => {
		let e = Object.values(I)
			.filter((e) => e.type === m.Kw.USER && !e.canRead && !f.has(e.id))
			.map((e) => e.id);
		if (0 !== e.length) u.Z.requestMembersById(s, e, !1), R((n) => new Set([...n, ...e]));
	}, [s, I, f, R]);
	let L = (0, d.e7)([S.Z], () => S.Z.getApplicationId()),
		D = (0, d.e7)([x.Z], () =>
			null == L
				? void 0
				: x.Z.integrations.find((e) => {
						var n;
						return (null === (n = e.application) || void 0 === n ? void 0 : n.id) === L;
					})
		),
		P = (0, d.e7)([E.Z], () => void 0 !== D && E.Z.canShowToggleTooltip(D.id));
	return (0, i.jsx)(a.Fragment, {
		children:
			b.length > 0
				? b.map((e) =>
						(0, i.jsx)(
							j,
							{
								guild: T,
								commandId: n,
								onChange: (n) => v(e.id, e.type, n),
								onRemove: () => Z(e.id, e.type),
								overwrite: e,
								integration: D,
								canShowMigrationTooltip: P,
								hasAccessToMutatePermissions: N
							},
							e.id
						)
					)
				: (0, i.jsx)('div', {
						className: M.noItemsSelected,
						children: (0, i.jsx)(c.Text, {
							color: 'text-muted',
							variant: 'text-sm/normal',
							children: r
						})
					})
	});
}
function j(e) {
	var n, t, s;
	let l,
		{ guild: r, commandId: o, onChange: d, onRemove: u, overwrite: E, integration: g, canShowMigrationTooltip: p, hasAccessToMutatePermissions: C } = e,
		O = E.id === r.id || E.id === (0, _.bD)(r.id),
		x = null == g ? void 0 : null === (t = g.application) || void 0 === t ? void 0 : null === (n = t.bot) || void 0 === n ? void 0 : n.username,
		S = !E.canWrite || !C,
		A = h.default.getId();
	C ? !E.canWrite && (E.type === m.Kw.USER ? (l = E.id === A ? v.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_SELF : v.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_USER_OTHER) : E.type === m.Kw.ROLE && (l = v.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_ROLE)) : (l = null != o ? v.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_COMMAND : v.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSIONS_LOCKED_APPLICATION);
	let L = p && null != g && E.id === r.id && void 0 !== x && !E.permission;
	a.useEffect(() => {
		if (L) {
			var e;
			f.default.track(Z.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
				...(0, I.hH)(r.id),
				application_id: null == g ? void 0 : null === (e = g.application) || void 0 === e ? void 0 : e.id,
				location: 'toggle'
			});
		}
	}, [r.id, null == g ? void 0 : null === (s = g.application) || void 0 === s ? void 0 : s.id, L]);
	let j = (0, i.jsx)(c.Tooltip, {
			tooltipClassName: M.tooltip,
			text: l,
			shouldShow: S,
			position: 'left',
			hideOnClick: !1,
			children: (e) =>
				(0, i.jsx)('div', {
					...e,
					children: (0, i.jsx)(b.Z, {
						isDisabled: S,
						currentValue: E.permission,
						onChange: L
							? (e) => {
									N.Z.dismissToggleTooltip(r.id, g), d(e);
								}
							: d
					})
				})
		}),
		P = (0, i.jsx)(c.Popout, {
			renderPopout: () =>
				(0, i.jsx)(c.Clickable, {
					onClick: (e) => {
						e.stopPropagation(), N.Z.dismissToggleTooltip(r.id, g);
					},
					children: (0, i.jsx)(T.ZP, {
						className: M.tooltip,
						content: v.Z.Messages.COMMANDS_SCOPE_MIGRATION_TOGGLE_TOOLTIP.format({
							botName: x,
							link: 'https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/'
						}),
						onClick: () => {}
					})
				}),
			position: 'bottom',
			align: 'center',
			animation: c.Popout.Animation.TRANSLATE,
			onRequestClose: () => N.Z.dismissToggleTooltip(r.id, g),
			shouldShow: L,
			closeOnScroll: !0,
			children: () => j
		});
	return (0, i.jsxs)(
		'div',
		{
			className: M.entryItem,
			children: [
				(0, i.jsx)('div', {
					className: M.entryName,
					children: (0, i.jsx)(R.Z, {
						guild: r,
						id: E.id,
						type: E.type,
						isLocked: S,
						lockTooltipText: l
					})
				}),
				(0, i.jsxs)('div', {
					className: M.entryActions,
					children: [
						(0, i.jsx)(D, {
							commandId: o,
							isSentinel: O,
							isDisabled: !C,
							onRemove: u
						}),
						P
					]
				})
			]
		},
		E.id
	);
}
function D(e) {
	let { commandId: n, isSentinel: t, isDisabled: a, onRemove: s } = e;
	return a
		? null
		: null != n || !t
			? (0, i.jsx)('div', {
					className: M.removeActions,
					children: (0, i.jsx)(c.Clickable, {
						className: M.removeContainer,
						'aria-label': v.Z.Messages.INTEGRATIONS_APPLICATION_PERMISSION_ENTRY_REMOVE_ARIA_LABEL,
						onClick: s,
						children: (0, i.jsx)(c.TrashIcon, {
							size: 'md',
							color: 'currentColor',
							className: M.removeIcon
						})
					})
				})
			: null;
}
