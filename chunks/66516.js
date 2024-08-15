t.d(s, {
	Z: function () {
		return D;
	}
});
var n = t(735250),
	a = t(470079),
	i = t(512722),
	r = t.n(i),
	o = t(442837),
	l = t(481060),
	c = t(570140),
	d = t(497321),
	_ = t(100527),
	E = t(367907),
	u = t(906732),
	I = t(296810),
	T = t(921813),
	S = t(621853),
	N = t(246946),
	C = t(594174),
	m = t(63063),
	A = t(74538),
	O = t(18438),
	g = t(778825),
	h = t(856607),
	p = t(594496),
	R = t(856768),
	x = t(981631),
	M = t(689938);
function f(e) {
	(0, l.openModalLazy)(async () => {
		let { default: s } = await t.e('84509').then(t.bind(t, 933696));
		return (t) =>
			(0, n.jsx)(s, {
				source: {
					...e,
					page: x.ZY5.GUILD_MEMBER_PROFILE_SETTINGS
				},
				...t
			});
	});
}
function D(e) {
	let { selectedGuild: s } = e,
		{ analyticsLocations: t } = (0, u.ZP)(_.Z.GUILD_PROFILE),
		i = (0, o.e7)([C.default], () => {
			let e = C.default.getCurrentUser();
			return r()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
		}),
		D = (0, o.e7)([S.Z], () => !S.Z.isFetchingProfile(i.id)),
		P = (0, o.e7)([N.Z], () => N.Z.hidePersonalInformation),
		{ source: L, ...b } = (0, o.cj)([g.Z], () => ({
			...g.Z.getAllPending(),
			source: g.Z.getSource()
		}));
	return (a.useEffect(() => () => c.Z.wait(O.W3), []),
	a.useEffect(() => {
		null != L &&
			E.ZP.trackWithMetadata(x.rMx.SETTINGS_PANE_VIEWED, {
				settings_type: 'guild',
				destination_pane: x.jXE.SETTINGS_CUSTOMIZE_PROFILE,
				source: L
			});
	}, [L]),
	P)
		? (0, n.jsx)(d.Z, {})
		: D
			? (0, n.jsxs)(u.Gt, {
					value: t,
					children: [
						(0, n.jsx)(l.Text, {
							variant: 'text-sm/normal',
							children: M.Z.Messages.PROFILE_CUSTOMIZATION_GUILD_HINT.format({
								helpCenterLink: m.Z.getArticleURL(x.BhN.GUILD_PROFILES)
							})
						}),
						null != s
							? (0, n.jsxs)(n.Fragment, {
									children: [
										(0, n.jsx)(R.Z, {
											guildId: s.id,
											onChange: (e) => {
												null != e && (0, O.HP)(e);
											}
										}),
										(0, n.jsx)(I.Z, {
											previewTitle: M.Z.Messages.CHANGE_IDENTITY_PREVIEW_WITH_GUILD_NAME.format({
												guildName: null == s ? void 0 : s.name
											}),
											profilePreview: (0, n.jsx)(T.Z, {
												user: i,
												guild: s,
												canUsePremiumCustomization: A.ZP.canUsePremiumProfileCustomization(i),
												onUpsellClick: f,
												...b
											}),
											children: (0, n.jsx)(p.Z, {})
										})
									]
								})
							: (0, n.jsx)(h.Z, {})
					]
				})
			: (0, n.jsx)(l.Spinner, {});
}
