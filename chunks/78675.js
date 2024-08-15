n.d(t, {
	Z: function () {
		return S;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(866442),
	l = n(442837),
	u = n(692547),
	c = n(481060),
	d = n(220082),
	_ = n(583405),
	E = n(279745),
	f = n(695346),
	h = n(451478),
	p = n(768581),
	m = n(888778),
	I = n(943217),
	T = n(793397),
	g = n(439779);
function S(e) {
	var t;
	let { user: n, displayProfile: a, guildId: S, profileType: A, pendingBanner: N, children: v, animateOnHover: O = !1, hasProfileEffect: R = !1, canUsePremiumCustomization: C = !1 } = e,
		y = C || (null == a ? void 0 : a.canUsePremiumProfileCustomization) || !1,
		[D, L] = i.useState(!1),
		b = (0, l.e7)([h.Z], () => h.Z.isFocused()),
		M = f.QK.getSetting(),
		{ bannerSrc: P, status: U } = (0, m.Z)({
			displayProfile: a,
			pendingBanner: N,
			size: (0, T.e7)(A),
			canAnimate: O || !M ? D : b
		}),
		w = (0, c.useToken)(u.Z.unsafe_rawColors.PRIMARY_800).hex(),
		x = (0, c.getAvatarSize)(c.AvatarSizes.SIZE_80),
		G = (0, o._i)((0, d.ZP)(n.getAvatarURL(S, x), w, !1)),
		k = (0, _.Z)(null !== (t = null == a ? void 0 : a.primaryColor) && void 0 !== t ? t : G).hsl;
	return (0, r.jsx)(I.Z, {
		isPremium: y,
		hasThemeColors: y,
		profileType: A,
		hasBanner: null != P,
		hasProfileEffect: R,
		children: (0, r.jsxs)('div', {
			className: s()(
				g.banner,
				g.divider,
				(0, T.Ae)({
					profileType: A,
					user: {
						hasBanner: null != P,
						isPremium: y,
						hasProfileEffect: R
					}
				})
			),
			onMouseMove: () => L(!0),
			onMouseLeave: () => L(!1),
			style: {
				backgroundImage: null != P ? 'url('.concat(P, ')') : void 0,
				backgroundColor: U !== m.s.COMPLETE ? u.Z.unsafe_rawColors.PRIMARY_800.css : k
			},
			children: [!M && (0, p.F8)(P) && (0, r.jsx)(E.Z, { className: g.gifTag }), v]
		})
	});
}
