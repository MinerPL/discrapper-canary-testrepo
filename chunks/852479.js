l.d(t, {
	Z: function () {
		return x;
	}
});
var n = l(735250),
	a = l(470079),
	o = l(120356),
	s = l.n(o),
	i = l(913527),
	r = l.n(i),
	C = l(399606),
	c = l(481060),
	d = l(740900),
	u = l(241559),
	m = l(893966),
	_ = l(527379),
	E = l(689938),
	h = l(931658),
	M = l(999220);
function x(e) {
	let { guild: t, onSubmit: o } = e,
		i = (0, C.e7)([m.Z], () => m.Z.getMembersCountByGuildId(t.id, d.R_.NEW_GUILD_MEMBER), [t.id]),
		x = (0, C.e7)(
			[m.Z],
			() => {
				let e = m.Z.getNewMemberTimestamp(t.id);
				return r()(e).format('h:mm A');
			},
			[t.id]
		),
		b = (0, C.e7)([m.Z], () => m.Z.hasDefaultSearchStateByGuildId(t.id), [t.id]),
		T = a.useCallback(() => {
			(0, _.YO)(t.id), null == o || o();
		}, [t.id, o]),
		L = a.useCallback(() => {
			b
				? T()
				: (0, c.openModalLazy)(async () => {
						let { default: e } = await l.e('24478').then(l.bind(l, 319481));
						return (t) =>
							(0, n.jsx)(e, {
								...t,
								onConfirm: T
							});
					});
		}, [T, b]),
		g = new Intl.NumberFormat(E.Z.getLocale()).format(i),
		I = (0, u.nX)(t.id),
		p = (0, u.xC)(t.id),
		H = a.useMemo(() => 1 + (I ? 1 : 0) + (p ? 1 : 0), [I, p]);
	return 0 === i
		? null
		: (0, n.jsxs)('tr', {
				className: s()(M.newMembersNotice),
				onClick: L,
				children: [
					(0, n.jsx)('td', {
						colSpan: 3,
						children: (0, n.jsx)(c.Text, {
							variant: 'text-sm/normal',
							color: 'always-white',
							children: E.Z.Messages.MEMBER_SAFETY_TABLE_NEW_MEMBER_NOTICE_LABEL.format({
								count: g,
								date: x
							})
						})
					}),
					(0, n.jsx)('td', { colSpan: H }),
					(0, n.jsx)('td', {
						colSpan: 2,
						children: (0, n.jsx)('div', {
							className: s()(h.actionCell),
							children: (0, n.jsx)(c.Button, {
								size: c.Button.Sizes.SMALL,
								color: c.Button.Colors.TRANSPARENT,
								look: c.Button.Looks.LINK,
								className: s()(M.memberNoticeActionButton),
								children: (0, n.jsxs)(c.Text, {
									variant: 'text-sm/normal',
									color: 'always-white',
									className: s()(M.memberNoticeAction),
									children: [
										(0, n.jsx)('div', { children: E.Z.Messages.MEMBER_SAFETY_TABLE_NEW_MEMBER_NOTICE_ACTION }),
										(0, n.jsx)(c.UserIcon, {
											size: 'custom',
											color: 'currentColor',
											width: 20,
											height: 20,
											className: s()(M.memberNoticeActionIcon)
										})
									]
								})
							})
						})
					})
				]
			});
}
