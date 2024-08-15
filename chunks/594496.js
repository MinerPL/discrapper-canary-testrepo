t.d(s, {
	Z: function () {
		return D;
	}
});
var n = t(735250);
t(470079);
var a = t(512722),
	i = t.n(a),
	r = t(442837),
	o = t(481060),
	l = t(295474),
	c = t(150039),
	d = t(126631),
	_ = t(433411),
	E = t(532432),
	u = t(134795),
	I = t(513901),
	T = t(451392),
	S = t(906364),
	N = t(621853),
	C = t(271383),
	m = t(594174),
	A = t(74538),
	O = t(51144),
	g = t(18438),
	h = t(778825),
	p = t(52597),
	R = t(430131),
	x = t(133484),
	M = t(689938),
	f = t(84482);
function D(e) {
	var s, t, a, D;
	let { guild: P } = e,
		L = (0, r.e7)([m.default], () => {
			let e = m.default.getCurrentUser();
			return i()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
		}),
		{
			pendingAvatar: b,
			pendingNickname: Z,
			pendingBanner: v,
			pendingBio: j,
			pendingPronouns: B,
			pendingThemeColors: U,
			errors: G,
			guild: F
		} = (0, r.cj)([h.Z], () => {
			let { pendingAvatar: e, pendingNickname: s, pendingBio: t, pendingPronouns: n, pendingBanner: a, pendingThemeColors: i } = h.Z.getAllPending();
			return {
				pendingAvatar: e,
				pendingNickname: s,
				pendingBanner: a,
				pendingBio: t,
				pendingPronouns: n,
				pendingThemeColors: i,
				errors: h.Z.getErrors(),
				guild: h.Z.getGuild()
			};
		}),
		y = null != P ? P : F;
	i()(null != y, 'guild should not be null');
	let V = (0, l.gS)(y.id),
		Y = (0, r.e7)([C.ZP], () => (null == y.id ? null : C.ZP.getMember(y.id, L.id))),
		w = (0, r.e7)([N.Z], () => N.Z.getGuildMemberProfile(L.id, y.id)),
		H = A.ZP.canUsePremiumProfileCustomization(L),
		k = (0, c.gd)(b, null == Y ? void 0 : Y.avatar),
		W = (0, c.f$)(v, null == w ? void 0 : w.banner),
		K = (0, p.p)(U, null == w ? void 0 : w.themeColors),
		z = null !== (s = null == w ? void 0 : w.bio) && void 0 !== s ? s : '',
		Q = null !== (t = null == w ? void 0 : w.pronouns) && void 0 !== t ? t : '',
		X = (e, s, t) => {
			t(null != e ? e : null != s ? null : void 0);
		};
	return (0, n.jsxs)('div', {
		className: f.sectionsContainer,
		children: [
			(0, n.jsx)(
				R.Z,
				{
					errors: null !== (a = null == G ? void 0 : G.nick) && void 0 !== a ? a : null == V ? void 0 : V.nick,
					username: O.ZP.getName(L),
					pendingNick: Z,
					currentNick: null == Y ? void 0 : Y.nick,
					guild: y
				},
				'nick'
			),
			(0, n.jsx)(
				S.Z,
				{
					sectionTitle: M.Z.Messages.USER_SETTINGS_PRONOUNS,
					errors: null == G ? void 0 : G.pronouns,
					onPronounsChange: (e) => {
						(0, p.xs)(e, Q);
					},
					pendingPronouns: B,
					currentPronouns: Q
				},
				'pronouns'
			),
			(0, n.jsxs)(x.Z, {
				user: L,
				showOverlay: !H,
				children: [
					(0, n.jsx)(
						E.Z,
						{
							sectionTitle: (0, n.jsxs)(n.Fragment, {
								children: [
									M.Z.Messages.USER_SETTINGS_AVATAR,
									(0, n.jsx)(o.Tooltip, {
										text: M.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
										children: (e) =>
											(0, n.jsx)(o.NitroWheelIcon, {
												size: 'md',
												color: 'currentColor',
												...e,
												className: f.nitroWheel
											})
									})
								]
							}),
							showRemoveAvatarButton: k,
							onAvatarChange: (e) => X(e, null == Y ? void 0 : Y.avatar, g.I5),
							errors: null == G ? void 0 : G.avatar,
							guildId: y.id,
							disabled: !H
						},
						'avatar'
					),
					(0, n.jsx)(
						_.Z,
						{
							sectionTitle: (0, n.jsxs)(n.Fragment, {
								children: [
									M.Z.Messages.USER_SETTINGS_AVATAR_DECORATION,
									(0, n.jsx)(o.Tooltip, {
										text: M.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
										children: (e) =>
											(0, n.jsx)(o.NitroWheelIcon, {
												size: 'md',
												color: 'currentColor',
												...e,
												className: f.nitroWheel
											})
									})
								]
							}),
							user: L,
							guild: y
						},
						'decoration'
					),
					(0, n.jsx)(
						I.Z,
						{
							sectionTitle: (0, n.jsxs)(n.Fragment, {
								children: [
									M.Z.Messages.USER_SETTINGS_PROFILE_EFFECT,
									(0, n.jsx)(o.Tooltip, {
										text: M.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
										children: (e) =>
											(0, n.jsx)(o.NitroWheelIcon, {
												size: 'md',
												color: 'currentColor',
												...e,
												className: f.nitroWheel
											})
									})
								]
							}),
							user: L,
							guild: y
						},
						'effect'
					),
					(0, n.jsx)(
						u.Z,
						{
							showRemoveBannerButton: W,
							errors: null == G ? void 0 : G.banner,
							onBannerChange: (e) => X(e, null == w ? void 0 : w.banner, g.g_),
							guildId: null == y ? void 0 : y.id,
							disabled: !H
						},
						'banner'
					),
					(0, n.jsx)(T.Z, {
						user: L,
						pendingAvatar: b,
						pendingColors: U,
						onThemeColorsChange: (e) => {
							(0, p.ce)(e, null == w ? void 0 : w.themeColors);
						},
						guildId: null == y ? void 0 : y.id,
						showResetThemeButton: K
					}),
					(0, n.jsx)(
						d.Z,
						{
							placeholder: M.Z.Messages.CHANGE_IDENTITY_BIO_PLACEHOLDER,
							sectionTitle: (0, n.jsxs)(n.Fragment, {
								children: [
									M.Z.Messages.USER_PROFILE_ABOUT_ME,
									(0, n.jsx)(o.Tooltip, {
										text: M.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP,
										children: (e) =>
											(0, n.jsx)(o.NitroWheelIcon, {
												size: 'md',
												color: 'currentColor',
												...e,
												className: f.nitroWheel
											})
									})
								]
							}),
							onBioChange: (e) => (0, p.qN)(e, z),
							errors: null !== (D = null == G ? void 0 : G.bio) && void 0 !== D ? D : null == V ? void 0 : V.bio,
							pendingBio: j,
							currentBio: z,
							disabled: !H
						},
						'about'
					)
				]
			})
		]
	});
}
