t.d(s, {
	Z: function () {
		return C;
	}
});
var n = t(735250),
	a = t(470079),
	i = t(481060),
	r = t(410030),
	o = t(100527),
	l = t(906732),
	c = t(197115),
	d = t(626135),
	_ = t(74538),
	E = t(981631),
	u = t(474936),
	I = t(689938),
	T = t(333727),
	S = t(699623),
	N = t(820350);
function C(e) {
	let { user: s, showOverlay: t, children: C } = e,
		m = (0, r.ZP)(),
		{ analyticsLocations: A } = (0, l.ZP)(o.Z.PREMIUM_UPSELL_OVERLAY);
	return (a.useEffect(() => {
		t &&
			d.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
				location_stack: A,
				type: u.cd.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_INLINE
			});
	}, [t, A]),
	t)
		? (0, n.jsxs)('div', {
				className: T.upsellOverlayContainer,
				children: [
					(0, n.jsx)('div', { children: C }),
					(0, n.jsxs)('div', {
						className: T.upsellOverlay,
						children: [
							(0, n.jsx)('img', {
								className: T.upsellImage,
								alt: I.Z.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_IMAGE_ALT,
								src: (function (e) {
									switch (e) {
										case E.BRd.DARK:
											return S;
										case E.BRd.LIGHT:
											return N;
									}
								})(m)
							}),
							(0, n.jsxs)('div', {
								className: T.upsellTextContainer,
								children: [
									(0, n.jsx)(i.Text, {
										variant: 'text-lg/semibold',
										color: 'always-white',
										children: I.Z.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_TITLE
									}),
									(0, n.jsx)(i.Text, {
										variant: 'text-sm/normal',
										color: 'always-white',
										children: I.Z.Messages.GUILD_IDENTITY_UPSELL_OVERLAY_DESCRIPTION_THEMES
									})
								]
							}),
							(0, n.jsx)(c.Z, {
								size: i.Button.Sizes.LARGE,
								color: i.Button.Colors.GREEN,
								buttonText: _.ZP.isPremium(s)
									? I.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_UPGRADE
									: I.Z.Messages.CHANGE_IDENTITY_UPSELL,
								subscriptionTier: u.Si.TIER_2
							})
						]
					})
				]
			})
		: (0, n.jsx)(n.Fragment, { children: C });
}
