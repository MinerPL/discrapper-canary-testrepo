n.d(t, {
	KF: function () {
		return A;
	},
	LW: function () {
		return R;
	},
	OO: function () {
		return b;
	},
	TH: function () {
		return M;
	}
}),
	n(47120);
var i = n(735250),
	l = n(470079),
	r = n(120356),
	a = n.n(r),
	s = n(266067),
	o = n(442837),
	c = n(704215),
	u = n(481060),
	d = n(350810),
	h = n(110924),
	p = n(410030),
	_ = n(100527),
	f = n(970606),
	g = n(963202),
	m = n(824991),
	C = n(243778),
	I = n(863249),
	E = n(937111),
	N = n(602147),
	x = n(981631),
	S = n(308083),
	v = n(921944),
	Z = n(689938),
	T = n(174507);
function L(e) {
	let { title: t, message: n, dismissibleContent: r, defaultGameId: a, onPopoutVisible: o, onClick: c, children: h, isEligibleForUpsell: _ = !0, withInviteIcon: f = !0 } = e,
		g = (0, s.TH)(),
		[I, E] = (0, C.US)([r], v.R.SIDEBAR),
		Z = I !== r,
		L = (0, d.Z)(),
		A = _ && !L && !Z && g.pathname !== x.Z5c.GUILD_DISCOVERY;
	l.useEffect(() => {
		A && o();
	}, [A, o]);
	let b = (0, p.ZP)(),
		M = l.useMemo(() => {
			switch (a) {
				case S.nJ:
					return T.valorantBackgroundImage;
				case S.xn:
					return T.genshinBackgroundImage;
				default:
					return b === x.BRd.DARK ? T.genericBackgroundImageDark : T.genericBackgroundImageLight;
			}
		}, [a, b]),
		R = l.useCallback(() => {
			E(v.L.TAKE_ACTION), c(), (0, N.o)();
		}, [E, c]),
		O = l.useCallback(
			(e) => {
				e(), E(v.L.USER_DISMISS);
			},
			[E]
		);
	return (0, i.jsxs)('div', {
		className: T.container,
		children: [
			(0, i.jsx)(u.Popout, {
				shouldShow: A,
				renderPopout: (e) => {
					let { closePopout: l } = e;
					return (0, i.jsxs)('div', {
						className: T.popoutContainer,
						children: [
							(0, i.jsx)('div', { className: M }),
							(0, i.jsx)(u.Clickable, {
								onClick: () => O(l),
								className: T.close,
								children: (0, i.jsx)(u.XSmallIcon, {
									size: 'xs',
									color: u.tokens.colors.WHITE
								})
							}),
							(0, i.jsxs)('div', {
								className: T.popoutContent,
								children: [f && (0, i.jsx)(m.YV, {}), (0, i.jsx)(m.aF, { title: t }), (0, i.jsx)(m.To, { message: n }), (0, i.jsx)(m.Xu, { onClick: R })]
							}),
							(0, i.jsx)('div', { className: T.popoutCaret })
						]
					});
				},
				position: 'top',
				animationPosition: 'top',
				align: 'left',
				spacing: 16,
				children: (e) =>
					(0, i.jsx)('div', {
						...e,
						className: T.popoutAnchor
					})
			}),
			h({ onClick: R })
		]
	});
}
function A(e) {
	let { defaultGameId: t, children: n } = e,
		r = l.useCallback(() => {
			(0, f.tv)({ location: _.Z.GUILDS_LIST });
		}, []),
		a = l.useCallback(() => {
			(0, f.GS)({ location: _.Z.GUILDS_LIST });
		}, []),
		[s, o] = l.useMemo(() => {
			switch (t) {
				case S.xn:
					return [Z.Z.Messages.CLAN_GUILD_LIST_USER_UPSELL_GENSHIN_TITLE, Z.Z.Messages.CLAN_GUILD_LIST_USER_UPSELL_GENSHIN_MESSAGE];
				case S.nJ:
					return [Z.Z.Messages.CLAN_GUILD_LIST_USER_UPSELL_VALORANT_TITLE, Z.Z.Messages.CLAN_GUILD_LIST_USER_UPSELL_VALORANT_MESSAGE];
				default:
					return [void 0, void 0];
			}
		}, [t]);
	return (0, i.jsx)(L, {
		title: s,
		message: o,
		dismissibleContent: c.z.GUILD_LIST_CLAN_USER_UPSELL,
		defaultGameId: t,
		onClick: a,
		onPopoutVisible: r,
		withInviteIcon: !1,
		children: n
	});
}
function b(e) {
	let { children: t } = e,
		{ guilds: n } = (0, g.C3)({
			location: 'GuildsBarClanAdminUpsellPopout',
			includeConverted: !1
		}),
		r = n.length > 0,
		a = l.useCallback(() => {
			(0, f.TE)({ location: _.Z.GUILDS_LIST });
		}, []),
		s = l.useCallback(() => {
			(0, f._9)({ location: _.Z.GUILDS_LIST });
		}, []),
		o = Z.Z.Messages.RAPIDASH_CHANNEL_LIST_ADMIN_UPSELL_TITLE,
		u = Z.Z.Messages.RAPIDASH_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE;
	return (0, i.jsx)(L, {
		title: o,
		message: u,
		dismissibleContent: c.z.GUILD_LIST_CLAN_ADMIN_UPSELL,
		defaultGameId: null,
		onClick: s,
		isEligibleForUpsell: r,
		onPopoutVisible: a,
		children: t
	});
}
function M(e) {
	let { onActivate: t, children: n } = e,
		r = (0, o.e7)([E.Z], () => E.Z.hasJoinRequestCoackmark()),
		a = l.useCallback(() => {
			I.Z.clearCoachmark();
		}, []),
		s = (0, h.Z)(r),
		c = l.useRef(null);
	return (
		l.useEffect(() => {
			if (r && r !== s) {
				var e, n, i, l, a;
				t(), null === (a = c.current) || void 0 === a || null === (l = a.ref) || void 0 === l || null === (i = l.current) || void 0 === i || null === (n = i.layerRef) || void 0 === n || null === (e = n.current) || void 0 === e || e.updatePosition();
			}
		}, [c, r, s, t]),
		(0, i.jsxs)('div', {
			className: T.container,
			children: [
				(0, i.jsx)(u.Popout, {
					ref: c,
					shouldShow: r,
					renderPopout: () =>
						(0, i.jsxs)('div', {
							className: T.popoutContainer,
							children: [
								(0, i.jsxs)('div', {
									className: T.popoutContent,
									children: [
										(0, i.jsxs)('div', {
											className: T.coachmarkTextContainer,
											children: [
												(0, i.jsx)(u.Heading, {
													variant: 'heading-md/medium',
													children: Z.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_TITLE
												}),
												(0, i.jsx)(u.Text, {
													variant: 'text-xs/normal',
													color: 'text-muted',
													children: Z.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_BODY
												})
											]
										}),
										(0, i.jsx)(u.Button, {
											fullWidth: !0,
											size: u.ButtonSizes.SMALL,
											color: u.ButtonColors.BRAND,
											onClick: a,
											children: Z.Z.Messages.CLAN_USER_APPLICATION_COACHMARK_CTA
										})
									]
								}),
								(0, i.jsx)('div', { className: T.popoutCaretLeft })
							]
						}),
					position: 'right',
					animationPosition: 'right',
					align: 'top',
					spacing: 16,
					children: (e) =>
						(0, i.jsx)('div', {
							...e,
							className: T.popoutAnchor
						})
				}),
				n
			]
		})
	);
}
function R(e) {
	let { hideGradient: t, children: n } = e;
	return (0, i.jsxs)('div', {
		className: T.footer,
		children: [(0, i.jsx)('div', { className: a()(T.gradient, { [T.gradientHidden]: t }) }), n]
	});
}
