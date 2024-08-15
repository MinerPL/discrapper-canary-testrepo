n.d(t, {
	Z: function () {
		return R;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(338545),
	o = n(704215),
	c = n(481060),
	u = n(442837),
	d = n(410030),
	h = n(607070),
	m = n(645041),
	p = n(430824),
	_ = n(914010),
	f = n(594174),
	E = n(626135),
	C = n(645896),
	g = n(905362),
	I = n(603368),
	x = n(353093),
	T = n(940725),
	N = n(114487),
	v = n(979264),
	S = n(981631),
	Z = n(921944),
	A = n(689938),
	M = n(879012);
function b(e) {
	var t;
	let { guild: n, showToast: s, onConfirm: o, onDismiss: m } = e,
		[p, _] = a.useState(!1),
		E = a.useRef(null),
		g = (0, C.Cc)(n.id),
		T = (0, d.ZP)(),
		S = (0, u.e7)([h.Z], () => h.Z.useReducedMotion),
		Z = (0, I.nP)(null == g ? void 0 : null === (t = g.branding) || void 0 === t ? void 0 : t.primaryColor, [c.tokens.colors.BG_BRAND, 0.5]),
		b = c.tokens.colors.BG_SURFACE_OVERLAY.resolve({
			theme: T,
			saturation: 1
		}).hex(),
		R = (0, I.nj)(Z, b, 'top left', 0.3, '30%'),
		j = (0, u.e7)(
			[f.default],
			() => {
				var e;
				return null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.clan;
			},
			[]
		);
	a.useLayoutEffect(() => {
		var e;
		if (null == E.current) return;
		let t = null === (e = E.current) || void 0 === e ? void 0 : e.parentNode;
		return (
			null != t && (t.style.zIndex = '1003'),
			() => {
				null != t && (t.style.zIndex = '1002');
			}
		);
	}, []);
	let L = a.useCallback(
			(e) => {
				e.stopPropagation(), e.preventDefault(), m();
			},
			[m]
		),
		P = a.useCallback(
			(e) => {
				e.stopPropagation(), e.preventDefault(), o();
			},
			[o]
		),
		O = (0, c.useTransition)(
			s,
			{
				from: {
					transform: S ? 'translateY(0)' : 'translateY(16px)',
					opacity: 0,
					pointerEvents: 'none'
				},
				enter: {
					transform: 'translateY(0)',
					opacity: 1,
					pointerEvents: 'all'
				},
				leave: {
					transform: S ? 'translateY(0)' : 'translateY(16px)',
					opacity: 0,
					pointerEvents: 'none'
				},
				config: {
					mass: 1,
					tension: 500,
					friction: 18,
					clamp: !0
				},
				delay: 200
			},
			'animate-always'
		),
		y = (0, x.Zp)(n, j),
		D = y ? A.Z.Messages.CLAN_USER_ADOPT_TAG_NEW_IDENTITY_TITLE.format({ guildName: n.name }) : A.Z.Messages.CLAN_USER_ADOPT_TAG_UPSELL_TITLE.format({ guildName: n.name }),
		k = y ? A.Z.Messages.CLAN_USER_ADOPT_TAG_NEW_IDENTITY_DESCRIPTION : A.Z.Messages.CLAN_USER_ADOPT_TAG_UPSELL_DESCRIPTION,
		U = y ? A.Z.Messages.CLAN_USER_ADOPT_TAG_NEW_IDENTITY_ARIA_LABEL.format({ guildName: n.name }) : A.Z.Messages.CLAN_USER_ADOPT_TAG_UPSELL_ARIA_LABEL.format({ guildName: n.name });
	return O((e, t) => {
		var a, s;
		return (
			t &&
			(0, i.jsx)(r.animated.div, {
				onMouseEnter: () => _(!0),
				onMouseLeave: () => _(!1),
				className: l()(M.wrapper),
				style: {
					...e,
					...R
				},
				ref: E,
				children: (0, i.jsx)(c.ClickableContainer, {
					'aria-label': U,
					onClick: P,
					children: (0, i.jsxs)('div', {
						className: l()(M.toastContainerInner, p ? M.hovered : null),
						children: [
							(0, i.jsxs)('div', {
								className: M.guildIconContainer,
								children: [
									(0, i.jsx)(N.Z, {
										guild: n,
										iconSize: 64,
										className: M.icon
									}),
									(0, i.jsx)('div', {
										className: M.guildTagContainer,
										children: (0, i.jsx)(v.aG, {
											guildId: n.id,
											clanTag: null === (a = n.clan) || void 0 === a ? void 0 : a.tag,
											clanBadge: null === (s = n.clan) || void 0 === s ? void 0 : s.badge,
											className: M.guildClanTag
										})
									})
								]
							}),
							(0, i.jsxs)('div', {
								children: [
									(0, i.jsx)('div', {
										children: (0, i.jsx)(c.Heading, {
											variant: 'heading-md/bold',
											color: 'header-primary',
											children: D
										})
									}),
									(0, i.jsx)('div', {
										children: (0, i.jsx)(c.Text, {
											variant: 'text-sm/medium',
											color: 'header-secondary',
											children: k
										})
									})
								]
							}),
							(0, i.jsx)('div', {
								children: (0, i.jsx)(c.Clickable, {
									className: M.toastButton,
									onClick: L,
									children: (0, i.jsx)(c.XSmallBoldIcon, {
										size: 'custom',
										width: 20,
										height: 20
									})
								})
							})
						]
					})
				})
			})
		);
	});
}
function R(e) {
	let {} = e,
		t = (0, u.e7)([_.Z], () => _.Z.getGuildId()),
		n = (0, T.h)(t, 'clan_tag_upsell_toast'),
		s = (0, u.e7)([p.Z], () => p.Z.getGuild(t), [t]),
		[l, r] = a.useState(!1),
		c = a.useRef(null);
	a.useEffect(
		() => (
			n &&
				(c.current = window.setTimeout(() => {
					r(!0),
						E.default.track(S.rMx.DISMISSIBLE_CONTENT_SHOWN, {
							type: o.C[o.C.ADOPT_CLAN_IDENTITY_NOTICE],
							guild_id: null != t ? t : S.lds
						});
				}, 2500)),
			() => {
				null != c.current && window.clearTimeout(c.current);
			}
		),
		[]
	);
	let d = a.useCallback(() => {
			if ((r(!1), null != t)) (0, g.S)(t);
		}, [, t]),
		h = a.useCallback(() => {
			if ((r(!1), null != t)) (0, m.Qd)(o.C.ADOPT_CLAN_IDENTITY_NOTICE, null != t ? t : S.lds, !0, Z.L.DISMISS);
		}, [t]);
	return n && null != t && null != s
		? (0, i.jsx)(b, {
				guild: s,
				onConfirm: d,
				onDismiss: h,
				showToast: l
			})
		: null;
}
