t.d(s, {
	c: function () {
		return g;
	}
});
var n = t(735250),
	a = t(470079),
	i = t(442837),
	r = t(481060),
	o = t(37234),
	l = t(100527),
	c = t(906732),
	d = t(94795),
	_ = t(327943),
	E = t(539873),
	u = t(311476),
	I = t(197115),
	T = t(626135),
	S = t(981631),
	N = t(474936),
	C = t(689938),
	m = t(115907),
	A = t(224499);
let O = () => {
		(0, d.nJ)(), (0, o.xf)();
	},
	g = () => {
		let { analyticsLocations: e } = (0, c.ZP)(l.Z.USER_SETTINGS),
			s = (0, i.e7)([_.Z], () => _.Z.isUpsellPreview),
			{ enabled: t } = u.Z.getCurrentConfig(
				{ location: 'UserSettingsAppearanceInAppIcon' },
				{
					autoTrackExposure: s,
					disable: !s
				}
			);
		return (
			a.useEffect(() => {
				s &&
					T.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
						type: N.cd.APP_ICON_UPSELL,
						location_stack: e
					});
			}, []),
			(0, n.jsxs)('div', {
				className: m.selectionGroup,
				children: [
					(0, n.jsx)(E.Z, {
						disabled: s && !t,
						renderCTAButtons: () =>
							(0, n.jsxs)('div', {
								className: m.tryItOutButtons,
								children: [
									(0, n.jsx)(r.Button, {
										color: !t && s ? r.Button.Colors.PRIMARY : r.Button.Colors.BRAND,
										onClick: () => O(),
										children: t ? C.Z.Messages.PREVIEW : C.Z.Messages.APP_ICON_PREVIEW_TITLE
									}),
									s
										? (0, n.jsx)(I.Z, {
												showGradient: t,
												subscriptionTier: N.Si.TIER_2,
												buttonText: t
													? C.Z.Messages.PREMIUM_UPSELL_GET_NITRO
													: C.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
											})
										: null
								]
							})
					}),
					(0, n.jsx)(r.FormDivider, { className: A.marginTop20 })
				]
			})
		);
	};
