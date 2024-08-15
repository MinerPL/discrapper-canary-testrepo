t.d(s, {
	Z: function () {
		return x;
	}
});
var n = t(735250),
	a = t(470079),
	i = t(442837),
	r = t(481060),
	o = t(503089),
	l = t(906732),
	c = t(254901),
	d = t(18438),
	_ = t(778825),
	E = t(66516),
	u = t(484459),
	I = t(216045),
	T = t(839469),
	S = t(25990),
	N = t(594174),
	C = t(585483),
	m = t(16703),
	A = t(785145),
	O = t(981631),
	g = t(526761),
	h = t(726985),
	p = t(689938),
	R = t(798042);
function x() {
	c.Z.useExperiment({ location: 'profile_customization_auto' });
	let e = (0, i.e7)([_.Z], () => _.Z.getGuild()),
		s = (0, m.Z)(),
		t = (0, i.e7)([_.Z, S.Z], () => _.Z.showNotice() || S.Z.showNotice()),
		x = null != e ? e : s,
		M = (0, i.e7)([N.default], () => N.default.getCurrentUser()),
		{ subsection: f, setSubsection: D } = (0, A.Z)(),
		{ analyticsLocations: P } = (0, l.ZP)(),
		{ hasSearchResults: L, searchResults: b } = (0, T.E)();
	function Z(s) {
		if (f !== s) {
			if (t) {
				C.S.dispatch(O.CkL.SHAKE_APP, {
					duration: 300,
					intensity: o.$x
				}),
					C.S.dispatch(O.CkL.EMPHASIZE_NOTICE);
				return;
			}
			s === g.NB.GUILD && null == e && null != x && (0, d.Fq)(x, P), D(s);
		}
	}
	a.useEffect(() => {
		null != M && (0, u.Z)(M.id, M.getAvatarURL(null == x ? void 0 : x.id, 80), { guildId: null == x ? void 0 : x.id });
	}, [null == x ? void 0 : x.id, M]);
	let v = !0,
		j = !0;
	return (
		L && 1 === b.length && (b.includes(h.s6.PROFILE_SERVER_PROFILES) ? (Z(g.NB.GUILD), (j = !1)) : b.includes(h.s6.PROFILE_USER_PROFILE) && (Z(g.NB.USER_PROFILE), (v = !1))),
		(0, n.jsx)(l.Gt, {
			value: P,
			children: (0, n.jsxs)(r.HeadingLevel, {
				component: (0, n.jsx)(r.Heading, {
					variant: 'heading-lg/semibold',
					children: p.Z.Messages.USER_SETTINGS_PROFILES
				}),
				children: [
					(0, n.jsxs)(r.TabBar, {
						className: R.tabBar,
						type: 'top',
						look: 'brand',
						selectedItem: f,
						onItemSelect: Z,
						children: [
							j
								? (0, n.jsx)(
										r.TabBar.Item,
										{
											className: R.tabBarItem,
											id: g.NB.USER_PROFILE,
											children: p.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE
										},
										g.NB.USER_PROFILE
									)
								: null,
							v
								? (0, n.jsx)(
										r.TabBar.Item,
										{
											className: R.tabBarItem,
											id: g.NB.GUILD,
											children: p.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY
										},
										g.NB.GUILD
									)
								: null
						]
					}),
					f === g.NB.GUILD ? (0, n.jsx)(E.Z, { selectedGuild: x }) : (0, n.jsx)(I.Z, {})
				]
			})
		})
	);
}
