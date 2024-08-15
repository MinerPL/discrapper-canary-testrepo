t.d(s, {
	Z: function () {
		return m;
	}
});
var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(481060),
	l = t(906732),
	c = t(642619),
	d = t(626135),
	_ = t(74538),
	E = t(150039),
	u = t(993413),
	I = t(504983),
	T = t(981631),
	S = t(474936),
	N = t(689938),
	C = t(733691);
function m(e) {
	let {
			user: s,
			guild: t,
			className: i,
			sectionTitle: m,
			forcedDivider: A = !1,
			withTutorial: O = !1,
			showBorder: g = !1,
			isTryItOutFlow: h = !1,
			initialSelectedEffectId: p
		} = e,
		R = (0, E.Kg)(s, t),
		x = _.ZP.canUsePremiumProfileCustomization(s),
		{ analyticsLocations: M } = (0, l.ZP)(),
		{ pendingProfileEffectId: f, errors: D } = (0, E.bd)(t),
		P = a.useCallback(
			() =>
				(0, c.H)({
					analyticsLocations: M,
					initialSelectedEffectId: p,
					guild: t
				}),
			[M, p, t]
		);
	a.useEffect(() => {
		x &&
			d.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
				type: S.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
				location_stack: M
			});
	}, [x, M]);
	let L = null != t,
		b = h || void 0 !== f ? null != f : null != R,
		Z = O ? o.ShinyButton : o.Button;
	return (0, n.jsx)(u.Z, {
		forcedDivider: A,
		borderType: I.Y.PREMIUM,
		hasBackground: !0,
		title: m,
		showBorder: g,
		errors: D,
		className: i,
		children: (0, n.jsxs)('div', {
			className: C.buttonsContainer,
			children: [
				(0, n.jsx)(Z, {
					size: o.Button.Sizes.SMALL,
					onClick: P,
					className: r()({ [C.buttonHighlighted]: O }),
					children: N.Z.Messages.USER_SETTINGS_CHANGE_PROFILE_EFFECT
				}),
				b &&
					(0, n.jsx)(o.Button, {
						className: C.removeButton,
						color: o.Button.Colors.PRIMARY,
						look: o.Button.Looks.LINK,
						size: o.Button.Sizes.SMALL,
						onClick: function () {
							(0, E.s6)(null, R, t);
						},
						children: L
							? N.Z.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT
							: N.Z.Messages.USER_SETTINGS_REMOVE_PROFILE_EFFECT
					})
			]
		})
	});
}
