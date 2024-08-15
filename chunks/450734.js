n.d(t, {
	Z: function () {
		return h;
	}
});
var r = n(735250);
n(470079);
var s = n(120356),
	i = n.n(s),
	l = n(442837),
	a = n(481060),
	o = n(906732),
	c = n(1585),
	d = n(158776),
	u = n(998502),
	f = n(445924),
	m = n(654904),
	E = n(486324),
	p = n(651058);
let _ = u.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;
function h(e) {
	let { user: t, guild: n, displayProfile: s, canUsePremiumCustomization: u, previewAvatar: h, previewAvatarDecoration: g, previewTheme: I, previewPrimaryColor: v, className: C, disabledInputs: x, isTryItOutFlow: P, onUpsellClick: A } = e,
		{ analyticsLocations: Z } = (0, o.ZP)(),
		T = (0, l.e7)([d.Z], () => d.Z.getStatus(t.id)),
		N = null == n || (null == s ? void 0 : s.canUsePremiumProfileCustomization) || u,
		S = (0, r.jsx)(_, {
			src: h,
			avatarDecoration: g,
			imageClassName: i()(C, { [p.overlay]: !x }),
			size: a.AvatarSizes.SIZE_80,
			'aria-label': t.username,
			status: T,
			statusTooltip: !1,
			statusBackdropColor: null != v ? (0, a.getStatusBackdropColor)(I) : void 0
		});
	return x
		? (0, r.jsx)('div', {
				className: p.avatar,
				children: S
			})
		: N
			? (0, r.jsx)(a.Popout, {
					renderPopout: (e) => {
						let { closePopout: t } = e;
						return (0, r.jsx)(f.Z, {
							className: p.menu,
							onClose: t,
							onChangeAvatar: () => (0, m.$r)(E.pC.AVATAR, null == n ? void 0 : n.id, P),
							onChangeAvatarDecoration: () => {
								(0, c.ps)({
									guild: null == n ? void 0 : n,
									analyticsLocations: Z,
									isTryItOutFlow: P
								});
							}
						});
					},
					children: (e) =>
						(0, r.jsxs)(a.Clickable, {
							...e,
							className: i()(p.avatar, p.clickable),
							children: [
								S,
								(0, r.jsx)(a.PencilIcon, {
									size: 'custom',
									className: p.overlayIcon,
									width: 20,
									height: 20,
									color: 'white'
								})
							]
						})
				})
			: (0, r.jsxs)(a.Clickable, {
					onClick: A,
					className: i()(p.avatar, p.clickable),
					children: [
						S,
						(0, r.jsx)(a.NitroWheelIcon, {
							size: 'custom',
							className: p.overlayIcon,
							width: 20,
							height: 20,
							color: 'white'
						})
					]
				});
}
