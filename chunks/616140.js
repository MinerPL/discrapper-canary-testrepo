t.d(n, {
	Z: function () {
		return T;
	}
}),
	t(47120);
var s = t(735250),
	i = t(470079),
	o = t(442837),
	l = t(706898),
	r = t(481060),
	a = t(387903),
	c = t(246946),
	d = t(785717),
	u = t(27144),
	I = t(100849),
	_ = t(944546),
	f = t(470900),
	E = t(988246),
	m = t(970041),
	p = t(715388),
	x = t(879828),
	Z = t(834534),
	v = t(228168),
	h = t(455749);
function S(e) {
	let { section: n, subsection: t, user: i, currentUser: o, displayProfile: l, onClose: r } = e,
		{ newActivityCardsEnabled: c } = (0, u.z)({ location: 'SimplifiedUserProfileModalTabs' });
	return n === v.oh.ACTIVITY && c
		? (0, s.jsx)(x.Z, {
				user: i,
				currentUser: o,
				onClose: r
			})
		: n === v.oh.ACTIVITY
			? (0, s.jsx)(I.Z, {
					showActions: (null == o ? void 0 : o.id) !== i.id,
					user: i,
					type: a.Y.SIMPLIFIED_PROFILE,
					onClose: r
				})
			: n === v.oh.MUTUAL_FRIENDS
				? (0, s.jsx)(_.Z, {
						user: i,
						onClose: r
					})
				: n === v.oh.MUTUAL_GUILDS
					? (0, s.jsx)(f.Z, {
							user: i,
							onClose: r
						})
					: n === v.oh.BOT_DATA_ACCESS
						? (0, s.jsx)(m.Z, { user: i })
						: n === v.oh.BOT_INFO
							? (0, s.jsx)(p.Z, {
									user: i,
									currentUser: o,
									displayProfile: l,
									subsection: t,
									onClose: r
								})
							: (0, s.jsx)(Z.Z, {
									user: i,
									currentUser: o,
									displayProfile: l,
									subsection: t,
									onClose: r
								});
}
function T(e) {
	var n, t, a;
	let { user: u, currentUser: I, displayProfile: _, items: f, initialSection: m = v.oh.USER_INFO, initialSubsection: p, onClose: x } = e,
		{ trackUserProfileAction: Z } = (0, d.KZ)(),
		T = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
		[{ section: A, subsection: g }, N] = i.useState({
			section:
				null !==
					(a =
						null ===
							(n = f.find((e) => {
								let { section: n } = e;
								return n === m;
							})) || void 0 === n
							? void 0
							: n.section) && void 0 !== a
					? a
					: null === (t = f[0]) || void 0 === t
						? void 0
						: t.section,
			subsection: p
		});
	i.useEffect(() => {
		if (null == f.find((e) => e.section === A))
			N({
				section: f[0].section,
				subsection: void 0
			});
	}, [f, A]);
	let j = i.useCallback(
		(e) => {
			Z({
				action: 'PRESS_SECTION',
				section: e
			}),
				N({
					section: e,
					subsection: void 0
				});
		},
		[Z, N]
	);
	return T
		? (0, s.jsx)('div', {
				className: h.container,
				children: (0, s.jsx)(E.Z, {})
			})
		: (0, s.jsxs)('div', {
				className: h.container,
				children: [
					(0, s.jsx)(l.n, {
						className: h.tabBar,
						type: 'top',
						selectedItem: A,
						onItemSelect: j,
						children: f.map((e) => {
							let { section: n, text: t } = e;
							return (0, s.jsx)(
								l.n.Item,
								{
									className: h.tabBarItem,
									id: n,
									'aria-label': t,
									children: (0, s.jsx)(r.Text, {
										variant: 'text-sm/normal',
										children: t
									})
								},
								n
							);
						})
					}),
					(0, s.jsx)(S, {
						items: f,
						section: A,
						subsection: g,
						user: u,
						currentUser: I,
						displayProfile: _,
						onClose: x
					})
				]
			});
}
