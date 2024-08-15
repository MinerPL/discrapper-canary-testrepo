n.d(t, {
	Z: function () {
		return m;
	}
});
var r = n(735250);
n(470079);
var i = n(442837),
	a = n(481060),
	s = n(782568),
	o = n(100527),
	l = n(906732),
	u = n(326135),
	c = n(299206),
	d = n(389052),
	_ = n(622724),
	E = n(706454),
	f = n(785717),
	h = n(621853),
	p = n(475413),
	I = n(689938);
function m(e) {
	var t;
	let { user: n, guildId: m, viewProfileItem: T } = e,
		{ trackUserProfileAction: g } = (0, f.KZ)(),
		{ analyticsLocations: S, newestAnalyticsLocation: A } = (0, l.ZP)(o.Z.USER_PROFILE_OVERFLOW_MENU),
		N = (0, i.e7)([E.default], () => E.default.locale),
		v = (0, i.e7)([h.Z], () => h.Z.getUserProfile(n.id)),
		O = null == v ? void 0 : v.application,
		R = (0, d.Z)({
			user: n,
			location: A,
			color: 'danger',
			onBlock: () =>
				g({
					action: 'BLOCK',
					analyticsLocations: S
				}),
			onUnblock: () =>
				g({
					action: 'UNBLOCK',
					analyticsLocations: S
				})
		}),
		C = (0, _.Z)({
			user: n,
			guildId: m,
			location: A,
			color: 'danger',
			onAction: () =>
				g({
					action: 'REPORT',
					analyticsLocations: S
				})
		}),
		y =
			null == O
				? null
				: (0, r.jsx)(a.MenuItem, {
						id: 'report-app',
						label: I.Z.Messages.REPORT_APP,
						color: 'danger',
						action: () => {
							g({
								action: 'REPORT_APP',
								analyticsLocations: S
							}),
								(0, s.Z)(
									(0, u.G)({
										id: O.id,
										name: n.username,
										locale: N
									})
								);
						}
					}),
		D = [
			[T],
			[R, C, y],
			[
				(0, c.Z)({
					id: null == v ? void 0 : null === (t = v.application) || void 0 === t ? void 0 : t.id,
					label: I.Z.Messages.COPY_ID_APP,
					onSuccess: () =>
						g({
							action: 'COPY_APP_ID',
							analyticsLocations: S
						})
				})
			]
		];
	return D.every((e) => e.every((e) => null == e))
		? null
		: (0, r.jsx)(a.Popout, {
				renderPopout: (e) => {
					let { closePopout: t } = e;
					return (0, r.jsx)(a.Menu, {
						navId: 'user-bot-profile-overflow-menu',
						onSelect: void 0,
						onClose: t,
						'aria-label': I.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
						children: D.map((e, t) => (0, r.jsx)(a.MenuGroup, { children: e.map((e) => e) }, t))
					});
				},
				children: (e) =>
					(0, r.jsx)(p.oY, {
						action: 'PRESS_OPTIONS',
						icon: a.MoreHorizontalIcon,
						tooltipText: I.Z.Messages.MORE,
						...e
					})
			});
}
