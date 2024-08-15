l.d(n, {
	Z: function () {
		return j;
	}
});
var a = l(735250),
	r = l(470079),
	i = l(120356),
	t = l.n(i),
	s = l(866442),
	d = l(399606),
	o = l(481060),
	c = l(749210),
	u = l(410030),
	h = l(607070),
	m = l(603368),
	g = l(484459),
	C = l(318661),
	x = l(721987),
	f = l(502762),
	I = l(430824),
	Z = l(594174),
	_ = l(5192),
	v = l(51144),
	p = l(228168),
	N = l(65679);
function j(e) {
	let { guildId: n, welcomeMessage: l, className: i } = e,
		j = (0, d.e7)([I.Z], () => I.Z.getGuild(n)),
		b = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
		E = (0, d.e7)([Z.default], () => Z.default.getUser(null == l ? void 0 : l.authorIds[0])),
		M = (0, d.e7)([Z.default], () => Z.default.getCurrentUser()),
		A = (0, C.ZP)(null == E ? void 0 : E.id, n),
		{ theme: S, primaryColor: T } = (0, x.Z)({
			user: E,
			displayProfile: A
		}),
		R = (0, u.ZP)(),
		P = (0, o.useToken)(o.tokens.colors.BACKGROUND_SECONDARY, S).hex(),
		B = r.useMemo(() => {
			var e;
			return null !== (e = null == l ? void 0 : l.authorIds) && void 0 !== e ? e : [];
		}, [l]);
	r.useEffect(() => {
		c.Z.requestMembersById(n, B);
	}, [n, B]),
		r.useEffect(() => {
			null != E && (0, g.Z)(E.id, E.getAvatarURL(n, 48), { guildId: n });
		}, [E, n]);
	let y = (0, v._T)(M),
		H = null != T ? (0, s.br)(T, 1) : P,
		k = (0, m.$0)(H);
	if (null == E || null == M || null == l) return null;
	let L = null != j && j.ownerId === E.id;
	return (0, a.jsx)('div', {
		className: t()(N.welcomeMessageContainer, i),
		children: (0, a.jsxs)(f.Z, {
			className: N.welcomeMessageProfileContainer,
			user: E,
			displayProfile: A,
			profileType: p.y0.CARD,
			themeOverride: R,
			forceShowPremium: !0,
			children: [
				(0, a.jsx)('div', { className: N.avatarBackground }),
				b
					? (0, a.jsx)(o.Avatar, {
							src: E.getAvatarURL(n, 48),
							size: o.AvatarSizes.SIZE_48,
							className: N.avatar,
							'aria-label': E.username
						})
					: (0, a.jsx)(o.AnimatedAvatar, {
							src: E.getAvatarURL(n, 48),
							size: o.AvatarSizes.SIZE_48,
							className: N.avatar,
							'aria-label': E.username
						}),
				(0, a.jsx)('div', {
					className: N.avatarBorder,
					style: { backgroundColor: H }
				}),
				(0, a.jsxs)('div', {
					className: N.welcomeMessageContent,
					style: { color: k.hex() },
					children: [
						(0, a.jsxs)('div', {
							className: N.adminUsernameContainer,
							children: [
								(0, a.jsx)(o.Text, {
									variant: 'text-sm/semibold',
									color: 'currentColor',
									children: _.ZP.getName(n, null, E)
								}),
								L
									? (0, a.jsx)(o.CrownIcon, {
											size: 'md',
											color: 'currentColor',
											className: N.ownerIcon
										})
									: null
							]
						}),
						(0, a.jsx)(o.Text, {
							variant: 'text-md/medium',
							color: 'currentColor',
							children: (function (e, n) {
								let l = e.split(/\[@username\]/g);
								return (0, a.jsx)('span', {
									children: l.map((e, i) =>
										(0, a.jsxs)(
											r.Fragment,
											{
												children: [
													e,
													i < l.length - 1
														? (0, a.jsx)(o.Text, {
																tag: 'span',
																variant: 'text-md/semibold',
																children: '@'.concat(n)
															})
														: null
												]
											},
											'username-'.concat(i)
										)
									)
								});
							})(null == l ? void 0 : l.message, null != y ? y : M.username)
						})
					]
				})
			]
		})
	});
}
