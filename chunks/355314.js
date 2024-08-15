n.d(t, {
	Z: function () {
		return O;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(442837),
	s = n(481060),
	o = n(310752),
	l = n(174609),
	u = n(703656),
	c = n(210887),
	d = n(594174),
	_ = n(626135),
	E = n(424218),
	f = n(380684),
	h = n(74538),
	p = n(104494),
	m = n(639119),
	I = n(631771),
	T = n(790527),
	g = n(474936),
	S = n(981631),
	A = n(731994),
	N = n(689938),
	v = n(984348);
function O(e) {
	let { onClose: t, ...n } = e,
		O = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
		R = (0, a.e7)([c.Z], () => c.Z.theme),
		C = null == O ? void 0 : O.premiumType,
		y = (0, m.N)(),
		D = (0, p.Ng)(),
		L = null != y || null != D,
		{ enabled: b } = I.MP.useExperiment(
			{ location: 'File Upload Roadblock' },
			{
				autoTrackExposure: !L,
				disable: L
			}
		),
		M = R === S.BRd.LIGHT ? 'light' : 'dark',
		P = b
			? (0, r.jsx)('img', {
					className: v.updatedArt,
					alt: 'File Upload Nitro Perk',
					src: 'https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_'.concat(M, '.png')
				})
			: (0, r.jsx)(o.Z, { icons: A.J6 }),
		U = i.useMemo(() => {
			let e = h.ZP.getUserMaxFileSize(O);
			return (0, E.BU)(e / 1024, { useKibibytes: !0 });
		}, [O]),
		w = i.useMemo(() => {
			let e = N.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({ maxSize: U });
			switch (C) {
				case g.p9.TIER_0:
					e = N.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({ maxSize: U });
					break;
				case g.p9.TIER_1:
					e = N.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({ maxSize: U });
			}
			return e;
		}, [C, U]),
		x = (0, f.XS)(),
		G = (0, f.Xv)(),
		k = (0, E.BU)((G ? g.wb : g.Uq) / 1024, { useKibibytes: !0 }),
		B = b ? N.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_TIER_2 : N.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_3.format({ premiumMaxSize: k }),
		F = b
			? (0, r.jsx)('div', {
					className: v.body,
					children: (0, r.jsx)(s.Text, {
						variant: 'text-sm/medium',
						children: B
					})
				})
			: (0, r.jsxs)('div', {
					className: v.body,
					children: [
						(0, r.jsx)('span', { children: w }),
						(0, r.jsx)(s.Text, {
							variant: 'text-md/medium',
							children: B
						})
					]
				});
	return (0, r.jsx)(T.Z, {
		artElement: P,
		artContainerClassName: b ? v.updatedArtContainer : v.artContainer,
		enableArtBoxShadow: !1,
		type: g.cd.UPLOAD_ERROR_UPSELL,
		title: N.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
		body: F,
		context: N.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({ maxSize: U }),
		glowUp: B,
		analyticsLocation: { section: S.jXE.FILE_UPLOAD_POPOUT },
		onClose: t,
		subscriptionTier: g.Si.TIER_2,
		secondaryCTA: b ? N.Z.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA : void 0,
		onSecondaryClick: b
			? function () {
					(0, l.Z)(),
						t(),
						_.default.track(S.rMx.PREMIUM_PROMOTION_OPENED, {
							location_section: S.jXE.FILE_UPLOAD_UPSELL_MODAL,
							location_object: S.qAy.NAVIGATION_LINK
						}),
						(0, u.uL)(S.Z5c.APPLICATION_STORE);
				}
			: void 0,
		showEnhancedUpsell: b,
		showBetaBadge: x,
		...n
	});
}
