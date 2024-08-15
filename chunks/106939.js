n.d(t, {
	M: function () {
		return K;
	},
	Z: function () {
		return Y;
	}
});
var s = n(735250),
	a = n(470079),
	r = n(120356),
	i = n.n(r),
	l = n(873546),
	o = n(286379),
	c = n(399606),
	d = n(704215),
	_ = n(481060),
	u = n(150063),
	E = n(758119),
	T = n(100527),
	I = n(906732),
	R = n(252618),
	C = n(313201),
	g = n(605236),
	p = n(984370),
	N = n(797614),
	A = n(108427),
	m = n(210887),
	f = n(695346),
	S = n(594174),
	h = n(626135),
	M = n(792125),
	x = n(280570),
	b = n(914788),
	O = n(841409),
	P = n(652262),
	v = n(880257),
	L = n(631885),
	Z = n(830746),
	D = n(731934),
	B = n(521450),
	j = n(292352),
	U = n(981631),
	G = n(723359),
	y = n(921944),
	k = n(689938),
	H = n(199071);
let w = {
		[j.dG.REQUESTS]: () => (0, s.jsx)(D.Z, {}),
		[j.dG.ACTIVITY]: () => (0, s.jsx)(Z.Z, {}),
		[j.dG.SETTINGS]: () => (0, s.jsx)(B.Z, {})
	},
	F = {
		[j.dG.REQUESTS]: () => (0, s.jsx)(D.Z, {}),
		[j.dG.ACTIVITY]: () => (0, s.jsx)(Z.Z, {})
	};
function V(e) {
	let { section: t, handleItemSelect: n } = e,
		a = (0, L.gU)(),
		r = (0, v.Z)();
	return (0, s.jsxs)(_.TabBar, {
		className: H.settingsTabBar,
		'aria-label': k.Z.Messages.FAMILY_CENTER_TITLE,
		selectedItem: t,
		type: 'top',
		look: 'brand',
		onItemSelect: n,
		children: [
			(0, s.jsx)(_.TabBar.Item, {
				className: H.settingsTabBarItem,
				id: j.dG.ACTIVITY,
				children: k.Z.Messages.FAMILY_CENTER_ACTIVITY_TAB
			}),
			(0, s.jsxs)(_.TabBar.Item, {
				className: H.settingsTabBarItem,
				id: j.dG.REQUESTS,
				'aria-label': k.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
				children: [
					k.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
					a > 0
						? (0, s.jsx)(_.NumberBadge, {
								className: H.badge,
								count: a
							})
						: null
				]
			}),
			r
				? (0, s.jsx)(_.TabBar.Item, {
						className: H.settingsTabBarItem,
						id: j.dG.SETTINGS,
						children: k.Z.Messages.SETTINGS
					})
				: null
		]
	});
}
function W(e) {
	let { theme: t, section: n, handleItemSelect: a } = e,
		r = (0, C.Dt)(),
		o = (0, L.gU)();
	return (0, s.jsxs)(p.Z, {
		className: i()((0, M.Q)(t), H.sidebarTabBar),
		scrollable: l.tq,
		role: 'navigation',
		'aria-labelledby': r,
		toolbar: !0,
		children: [
			(0, s.jsx)(p.Z.Icon, {
				icon: _.GroupIcon,
				'aria-hidden': !0
			}),
			(0, s.jsx)(p.Z.Title, {
				id: r,
				children: k.Z.Messages.FAMILY_CENTER_TITLE
			}),
			(0, s.jsx)(p.Z.Divider, {}),
			(0, s.jsxs)(_.TabBar, {
				'aria-label': k.Z.Messages.FAMILY_CENTER_TITLE,
				selectedItem: n,
				type: 'top-pill',
				onItemSelect: a,
				className: H.__invalid_tabBar,
				children: [
					(0, s.jsx)(_.TabBar.Item, {
						id: j.dG.ACTIVITY,
						className: H.item,
						children: k.Z.Messages.FAMILY_CENTER_ACTIVITY_TAB
					}),
					(0, s.jsxs)(_.TabBar.Item, {
						id: j.dG.REQUESTS,
						className: H.item,
						'aria-label': k.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
						children: [
							k.Z.Messages.FAMILY_CENTER_REQUESTS_TAB,
							o > 0
								? (0, s.jsx)(_.NumberBadge, {
										className: H.badge,
										count: o
									})
								: null
						]
					})
				]
			})
		]
	});
}
function K() {
	let e = (0, v.Z)(),
		t = (0, L.M8)(),
		n = (0, g.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
		r = (0, c.e7)([b.Z], () => b.Z.getIsInitialized()),
		l = (0, P.M)(),
		{ selectedTab: u, handleTabChange: T } = (0, O.Z)(),
		I = (0, C.Dt)(),
		p = S.default.getCurrentUser(),
		m = null != e,
		f = r && null != p && !m;
	return (a.useEffect(() => {
		(0, A.e)('family-center'),
			x.ZP.initialPageLoad(),
			!n &&
				(0, g.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
					dismissAction: y.L.AUTO,
					forceTrack: !0
				});
	}, []),
	a.useEffect(() => {
		r &&
			m &&
			(h.default.track(U.rMx.FAMILY_CENTER_VIEWED, {
				is_considered_adult: e,
				num_of_accepted_links: t,
				selected_teen_id: l,
				initial_page: j.QH[u],
				source: j._6[j.Mu.SIDENAV]
			}),
			N.Z.increment({ name: o.V.FAMILY_CENTER_VIEW }));
	}, [r, m]),
	f)
		? ((0, E.mN)(G.L0.FAMILY_CENTER), null)
		: (0, s.jsxs)('main', {
				className: i()(H.container),
				'aria-label': k.Z.Messages.FAMILY_CENTER_TITLE,
				children: [
					(0, s.jsx)(R.yY, { location: k.Z.Messages.FAMILY_CENTER_TITLE }),
					(0, s.jsx)(V, {
						section: u,
						handleItemSelect: (e) => {
							T(e);
						}
					}),
					(0, s.jsx)(_.TabBar.Panel, {
						id: u,
						'aria-labelledby': I,
						className: H.contentPanel,
						children: (0, s.jsx)('div', { children: w[u]() })
					})
				]
			});
}
function Y() {
	let { analyticsLocations: e } = (0, I.ZP)(T.Z.FAMILY_CENTER),
		t = (0, v.Z)(),
		n = (0, L.M8)(),
		r = (0, g.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
		l = (0, c.e7)([b.Z], () => b.Z.getIsInitialized()),
		p = (0, P.M)(),
		M = (0, c.e7)([m.Z], () => m.Z.theme),
		{ selectedTab: Z, handleTabChange: D } = (0, O.Z)(),
		B = (0, C.Dt)(),
		w = S.default.getCurrentUser(),
		V = null != t,
		K = l && null != w && !V;
	if (
		(a.useEffect(() => {
			u.Y(U.Z5c.FAMILY_CENTER),
				(0, A.e)('family-center'),
				!b.Z.isLoading() && b.Z.canRefetch() && x.ZP.initialPageLoad(),
				!r &&
					(0, g.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
						dismissAction: y.L.AUTO,
						forceTrack: !0
					});
		}, []),
		a.useEffect(() => {
			l &&
				V &&
				(h.default.track(U.rMx.FAMILY_CENTER_VIEWED, {
					is_considered_adult: t,
					num_of_accepted_links: n,
					selected_teen_id: p,
					initial_page: j.QH[Z],
					source: j._6[j.Mu.SIDENAV]
				}),
				N.Z.increment({ name: o.V.FAMILY_CENTER_VIEW }));
		}, [l, V]),
		a.useEffect(() => {
			let e = f.Ex.getSetting();
			l && t && void 0 === e && f.Ex.updateSetting(!0);
		}, [l, t]),
		K)
	)
		return (0, E.mN)(G.L0.FAMILY_CENTER), null;
	let Y = Z !== j.dG.SETTINGS ? Z : j.dG.ACTIVITY,
		z = F[Y];
	return (0, s.jsx)(I.Gt, {
		value: e,
		children: (0, s.jsxs)('main', {
			className: i()(H.container, H.containerSidenav),
			'aria-label': k.Z.Messages.FAMILY_CENTER_TITLE,
			children: [
				(0, s.jsx)(R.yY, { location: k.Z.Messages.FAMILY_CENTER_TITLE }),
				(0, s.jsx)(W, {
					theme: M,
					section: Y,
					handleItemSelect: (e) => {
						D(e);
					}
				}),
				(0, s.jsx)(_.TabBar.Panel, {
					id: Y,
					'aria-labelledby': B,
					className: H.contentPanel,
					children: (0, s.jsx)(_.Scroller, {
						children: (0, s.jsx)('div', {
							className: H.sideNavContent,
							children: z()
						})
					})
				})
			]
		})
	});
}
