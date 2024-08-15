a.d(t, {
	tZ: function () {
		return A;
	}
}),
	a(627341);
var n = a(735250),
	s = a(470079),
	i = a(120356),
	r = a.n(i),
	o = a(278074);
a(442837), a(692547);
var l = a(481060),
	u = a(906732),
	d = a(1585);
a(797610);
var c = a(686546),
	E = a(233440);
a(680295), a(430824);
var _ = a(626135),
	m = a(74538),
	g = a(998502),
	f = a(785717);
a(621853);
var S = a(204197);
a(735336);
var I = a(793397);
a(184325);
var T = a(652853),
	N = a(171368),
	h = a(228168),
	O = a(981631),
	M = a(474936),
	v = a(689938),
	P = a(753875);
let L = l.AvatarSizes.SIZE_80,
	C = (0, d.y9)(L),
	x = g.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;
function A(e) {
	let { user: t, displayProfile: a, avatarSrc: i, hasBanner: d, status: g, isMobile: A, guildId: p, channelId: R, onClose: y, disableUserProfileLink: Z, profileType: U, animateOnHover: b, hasProfileEffect: G, statusTooltipDelay: k } = e,
		{ theme: W } = (0, T.z)(),
		D = s.useContext(_.AnalyticsContext),
		j = t.isNonUserBot() && !t.isClyde(),
		B = m.ZP.isPremiumAtLeast(null == a ? void 0 : a.premiumType, M.p9.TIER_2),
		F = s.useMemo(() => (0, E.W)(t, R), [t, R]),
		{ analyticsLocations: w } = (0, u.ZP)(),
		{ context: H, trackUserProfileAction: q } = (0, f.KZ)(),
		z = Z || t.isClyde(),
		{
			avatarDecorationSrc: V,
			avatarSrc: X,
			eventHandlers: Y
		} = (0, S.Z)({
			user: t,
			guildId: p,
			size: L,
			animateOnHover: b
		}),
		K = (0, n.jsx)('div', {
			className: P.avatarHoverTarget,
			...Y,
			children: (0, n.jsx)(x, {
				src: null != i ? i : X,
				avatarDecoration: V,
				size: L,
				'aria-label': t.username,
				status: F ? O.Skl.UNKNOWN : g,
				statusBackdropColor: B && !F ? (0, l.getStatusBackdropColor)(W) : void 0,
				isMobile: A,
				statusTooltip: !0,
				statusTooltipDelay: k
			})
		}),
		Q = (0, o.EQ)(U)
			.with(h.y0.POPOUT, () =>
				(0, I.zW)({
					premiumUserWithBanner: P.avatarPositionPremiumBanner,
					premiumUserWithoutBanner: P.avatarPositionPremiumNoBanner,
					default: P.avatarPositionNormal
				})({
					isPremium: B,
					hasBanner: d,
					hasProfileEffect: G
				})
			)
			.with(h.y0.POMELO_POPOUT, () => P.avatarPositionPomelo)
			.with(h.y0.PANEL, () => P.avatarPositionPanel)
			.with(h.y0.BITE_SIZE, () => P.avatarPositionBiteSize)
			.exhaustive();
	return (0, n.jsx)(n.Fragment, {
		children: (0, n.jsxs)(l.Clickable, {
			className: r()(
				{
					[P.clickable]: !z,
					[P.avatarWrapperNonUserBot]: j,
					[P.avatarWrapperNormal]: !j
				},
				Q
			),
			onClick:
				j || z
					? void 0
					: function () {
							q({ action: 'PRESS_VIEW_PROFILE' }),
								(0, N.openUserProfileModal)({
									...H,
									userId: t.id,
									sourceAnalyticsLocations: w,
									analyticsLocation: D.location
								}),
								null == y || y();
						},
			children: [
				K,
				!z &&
					(function () {
						let e = null != V,
							t = e ? C : (0, l.getAvatarSize)(L);
						return (0, n.jsx)(c.ZP, {
							mask:
								null == g || g === O.Skl.UNKNOWN || F
									? c.ZP.Masks.AVATAR_DEFAULT
									: (0, o.EQ)([e, A])
											.with([!0, !0], () => c.ZP.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80)
											.with([!0, !1], () => c.ZP.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80)
											.with([!1, !0], () => c.ZP.Masks.AVATAR_STATUS_MOBILE_80)
											.with([!1, !1], () => c.ZP.Masks.AVATAR_STATUS_ROUND_80)
											.exhaustive(),
							className: e ? P.avatarDecorationHint : P.avatarHint,
							style: e ? { borderRadius: 0.4 * t } : void 0,
							width: t,
							height: t,
							children: (0, n.jsx)('div', {
								className: P.avatarHintInner,
								children: v.Z.Messages.VIEW_PROFILE
							})
						});
					})()
			]
		})
	});
}
