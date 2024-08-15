var i = s(735250);
s(470079);
var n = s(979554),
	a = s(442837),
	l = s(481060),
	r = s(1585),
	o = s(125988),
	d = s(876917),
	u = s(594174),
	c = s(597688),
	h = s(952183);
let p = l.AvatarSizes.SIZE_152,
	f = (0, r.y9)(p),
	m = (e) => {
		let { item: t } = e,
			s = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
			{
				avatarDecorationSrc: n,
				avatarPlaceholderSrc: r,
				eventHandlers: d
			} = (0, o.Z)({
				user: s,
				avatarDecorationOverride: t,
				size: f
			});
		return (0, i.jsx)('div', {
			className: h.avatarDecorationPreview,
			children: (0, i.jsx)(l.Avatar, {
				...d,
				'aria-label': t.label,
				src: r,
				avatarDecoration: n,
				size: p
			})
		});
	},
	g = (e) => {
		let { item: t } = e;
		return (0, i.jsx)('div', {
			className: h.profileEffectPreview,
			children: (0, i.jsx)(d.Z, {
				isHovering: !0,
				profileEffectId: null == t ? void 0 : t.id
			})
		});
	};
t.Z = (e) => {
	let { giftCode: t } = e,
		s = (0, a.e7)([c.Z], () => c.Z.getProduct(t.skuId)),
		l = null == s ? void 0 : s.items[0];
	return (0, i.jsxs)(i.Fragment, {
		children: [
			(null == l ? void 0 : l.type) === n.Z.AVATAR_DECORATION && (0, i.jsx)(m, { item: l }),
			(null == l ? void 0 : l.type) === n.Z.PROFILE_EFFECT && (0, i.jsx)(g, { item: l })
		]
	});
};
