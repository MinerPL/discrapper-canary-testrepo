n.d(t, {
	Z: function () {
		return f;
	}
});
var r = n(735250);
n(470079);
var i = n(481060),
	a = n(100527),
	s = n(906732),
	o = n(299206),
	l = n(389052),
	u = n(710631),
	c = n(622724),
	d = n(785717),
	_ = n(475413),
	E = n(689938);
function f(e) {
	let { user: t, guildId: n, viewProfileItem: f } = e,
		{ trackUserProfileAction: h } = (0, d.KZ)(),
		{ analyticsLocations: p, newestAnalyticsLocation: I } = (0, s.ZP)(a.Z.USER_PROFILE_OVERFLOW_MENU),
		m = (0, u.Z)({
			user: t,
			guildId: n,
			onAction: () =>
				h({
					action: 'PRESS_INVITE_TO_SERVER',
					analyticsLocations: p
				})
		}),
		T = (0, l.Z)({
			user: t,
			location: I,
			color: 'danger',
			onBlock: () =>
				h({
					action: 'BLOCK',
					analyticsLocations: p
				}),
			onUnblock: () =>
				h({
					action: 'UNBLOCK',
					analyticsLocations: p
				})
		}),
		g = (0, c.Z)({
			user: t,
			guildId: n,
			location: I,
			color: 'danger',
			onAction: () =>
				h({
					action: 'REPORT',
					analyticsLocations: p
				})
		}),
		S = (0, c.T)({
			user: t,
			guildId: n,
			location: I,
			color: 'danger',
			onAction: () =>
				h({
					action: 'REPORT',
					analyticsLocations: p
				})
		}),
		A = [
			[f, m],
			[T, g, S],
			[
				(0, o.Z)({
					id: t.id,
					label: E.Z.Messages.COPY_ID_USER,
					onSuccess: () =>
						h({
							action: 'COPY_USER_ID',
							analyticsLocations: p
						})
				})
			]
		];
	return A.every((e) => e.every((e) => null == e))
		? null
		: (0, r.jsx)(s.Gt, {
				value: p,
				children: (0, r.jsx)(i.Popout, {
					renderPopout: (e) => {
						let { closePopout: t } = e;
						return (0, r.jsx)(i.Menu, {
							navId: 'user-profile-overflow-menu',
							onSelect: void 0,
							onClose: t,
							'aria-label': E.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
							children: A.map((e, t) => (0, r.jsx)(i.MenuGroup, { children: e.map((e) => e) }, t))
						});
					},
					children: (e) =>
						(0, r.jsx)(_.oY, {
							action: 'PRESS_OPTIONS',
							icon: i.MoreHorizontalIcon,
							tooltipText: E.Z.Messages.MORE,
							...e
						})
				})
			});
}
