var r = n(735250);
n(470079);
var s = n(442837),
	i = n(481060),
	l = n(809206),
	a = n(597688),
	o = n(884697),
	c = n(18438),
	d = n(778825),
	u = n(957730),
	f = n(921813),
	m = n(350327),
	E = n(318661),
	p = n(706454),
	_ = n(695346),
	h = n(265159),
	g = n(25990),
	I = n(594174),
	v = n(55935),
	C = n(74538),
	x = n(689938),
	P = n(149441);
let A = (e) => {
		var t;
		let { effectIsOwned: n, pendingProfileEffectRecord: l, product: c, purchase: d } = e,
			u = (0, s.e7)([I.default], () => I.default.getCurrentUser()),
			f = (0, s.e7)([a.Z], () => a.Z.getProduct(null == l ? void 0 : l.skuId)),
			m = (0, s.e7)([p.default], () => p.default.locale),
			E = C.ZP.canUseCollectibles(u),
			_ = (0, o.qS)(d),
			h = (0, o.G1)(c),
			g = (null == d ? void 0 : d.expiresAt) != null ? (0, v.TD)(Date.now(), d.expiresAt) : null,
			A = Z(!E && _, h, E);
		return null != l
			? (0, r.jsx)('div', {
					className: n ? P.effectDescriptionNoGradient : P.effectDescriptionBorderWithGradient,
					children: (0, r.jsxs)('div', {
						className: P.effectDescriptionContainer,
						children: [
							(0, r.jsx)(i.Text, {
								color: 'header-primary',
								variant: 'text-sm/semibold',
								className: P.effectName,
								children: null !== (t = null == d ? void 0 : d.name) && void 0 !== t ? t : null == f ? void 0 : f.name
							}),
							(0, r.jsx)(i.Text, {
								color: 'text-normal',
								variant: 'text-sm/normal',
								className: P.effectDescription,
								children: null != d ? d.summary : A
							}),
							null != g &&
								(0, r.jsx)(i.Text, {
									variant: 'text-xxs/normal',
									color: 'text-muted',
									className: P.effectPurchasedAt,
									children: x.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({ days: g.days.toString() })
								}),
							null != d &&
								(0, r.jsxs)(i.Text, {
									variant: 'text-xxs/normal',
									color: 'text-muted',
									className: P.effectPurchasedAt,
									children: [
										x.Z.Messages.COLLECTIBLES_ACQUIRED_DATE.format({
											date: d.purchasedAt.toLocaleDateString(m, {
												month: 'long',
												year: 'numeric'
											})
										}),
										null != d.expiresAt &&
											(0, r.jsxs)(r.Fragment, {
												children: [
													(0, r.jsx)('br', {}),
													x.Z.Messages.COLLECTIBLES_EXPIRE_DATE.format({
														date: d.expiresAt.toLocaleDateString(m, {
															minute: 'numeric',
															hour: 'numeric',
															day: 'numeric',
															month: 'long',
															year: 'numeric'
														})
													})
												]
											})
									]
								}),
							_ &&
								(0, r.jsx)(i.Text, {
									variant: 'text-xxs/normal',
									color: 'text-muted',
									className: P.effectPurchasedAt,
									children: x.Z.Messages.CHANGE_DECORATION_MODAL_STARTER_DESC
								})
						]
					})
				})
			: null;
	},
	Z = (e, t, n) => (e ? x.Z.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER_CHURNED : t && n ? x.Z.Messages.CHANGE_DECORATION_MODAL_PREVIEW_STARTER_PREMIUM : t && !n ? x.Z.Messages.CHANGE_PFX_MODAL_PREVIEW_STARTER : x.Z.Messages.CHANGE_PROFILE_EFFECT_MODAL_PREVIEW_PURCHASE_PREMIUM);
t.Z = (e) => {
	var t;
	let { user: n, pendingProfileEffectRecord: i, canApplySelectedChange: a, product: o, purchase: p, guild: I } = e,
		{
			pendingGlobalName: v,
			pendingNickname: x,
			pendingPronouns: Z,
			pendingBio: T,
			pendingBanner: N,
			pendingAvatar: S,
			pendingAvatarDecoration: j,
			pendingThemeColors: R,
			pendingAccentColor: M
		} = (0, s.cj)([d.Z, g.Z], () => ({
			pendingNickname: void 0,
			pendingGlobalName: void 0,
			pendingAccentColor: void 0,
			...(null != I ? d.Z.getAllPending() : g.Z.getAllPending())
		})),
		O = C.ZP.isPremium(n),
		L = C.ZP.canUsePremiumProfileCustomization(n),
		y = (0, E.ZP)(n.id),
		b = !!(null == y ? void 0 : y.getPreviewBio(T).value),
		B = {
			user: n,
			guild: I,
			pendingGlobalName: v,
			pendingNickname: x,
			pendingPronouns: Z,
			pendingBio: _.dN.useSetting() && null != T ? u.ZP.parse(void 0, T).content : T,
			pendingBanner: N,
			useLargeBanner: !0,
			pendingAvatar: S,
			pendingAvatarDecoration: j,
			pendingThemeColors: R,
			pendingAccentColor: M,
			pendingProfileEffectId: null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : null,
			hideFakeActivity: b,
			canUsePremiumCustomization: L,
			onUpsellClick: h.Z,
			onAvatarChange: null != I ? c.I5 : l.I5,
			onBannerChange: m.g_
		};
	return (0, r.jsxs)('div', {
		className: P.previewContainer,
		children: [
			(0, r.jsx)(f.Z, {
				...B,
				disabledInputs: !0,
				hideCustomStatus: !0
			}),
			!1,
			(0, r.jsx)(A, {
				effectIsOwned: a,
				pendingProfileEffectRecord: i,
				product: o,
				purchase: p,
				userIsPremium: O
			})
		]
	});
};
