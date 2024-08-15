n.r(t),
	n.d(t, {
		default: function () {
			return x;
		},
		openCollectibleRewardModal: function () {
			return G;
		}
	}),
	n(773603),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(887024),
	l = n(979554),
	u = n(442837),
	c = n(481060),
	d = n(809206),
	_ = n(607070),
	E = n(235400),
	f = n(204418),
	h = n(583434),
	p = n(530618),
	m = n(70097),
	I = n(454585),
	T = n(164946),
	g = n(166625),
	S = n(25990),
	A = n(594174),
	N = n(272008),
	v = n(497505),
	O = n(918701),
	R = n(566078),
	C = n(114732),
	y = n(46140),
	D = n(675654),
	L = n(689938),
	b = n(443100),
	M = n(789002);
function P() {
	let e = S.Z.getAllPending(),
		t = (0, T.ED)(e);
	return (0, d.Mn)(t).finally(d.si);
}
function U(e) {
	var t;
	let { transitionState: n, onClose: a, quest: l, location: d, reward: E, decoration: f, onUseNow: h } = e,
		m = i.useRef(null),
		[I, T] = i.useState(null),
		g = i.useRef(new o.qA()),
		S = (0, u.e7)([_.Z], () => _.Z.useReducedMotion),
		R = (0, u.e7)([A.default], () => A.default.getCurrentUser()),
		y = (0, O.j8)(l),
		L = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null,
		[M, P] = i.useState(L ? 'claimed' : 'loading');
	i.useEffect(() => {
		!L &&
			(0, N.QB)(l.id, v.y$.CROSS_PLATFORM, d)
				.then(() => P('claimed'))
				.catch(() => P('error'));
	}, [l, d, L]);
	let U = null == R || null == f || 'loading' === M;
	return (0, r.jsxs)(r.Fragment, {
		children: [
			(0, r.jsx)(o.O_, {
				ref: T,
				className: b.confettiCanvas,
				environment: g.current
			}),
			(0, r.jsx)('div', {
				ref: m,
				children: (0, r.jsx)(c.ModalRoot, {
					transitionState: n,
					size: c.ModalSize.DYNAMIC,
					className: s()(b.rootContainer, { [b.rootContainerLoading]: U }),
					hideShadow: !0,
					children: U
						? (0, r.jsx)(c.Spinner, { type: c.Spinner.Type.SPINNING_CIRCLE })
						: 'error' === M
							? (0, r.jsx)(C.Z, { onClose: a })
							: (0, r.jsx)(w, {
									quest: l,
									user: R,
									primaryColor: l.config.colors.primary,
									secondaryColor: l.config.colors.secondary,
									decoration: f,
									decorationName: E.messages.name,
									backgroundUrl: y,
									isSaving: 'applying' === M,
									onClose: a,
									onConfirm: () => {
										P('applying'), h().finally(a);
									}
								})
				})
			}),
			!S &&
				!L &&
				'claimed' === M &&
				(0, r.jsx)(p.Z, {
					confettiTarget: m.current,
					confettiCanvas: I,
					sprites: D.CA,
					colors: D.Br
				})
		]
	});
}
function w(e) {
	let { quest: t, user: n, decoration: i, decorationName: a, primaryColor: s, secondaryColor: o, backgroundUrl: l, isSaving: u, onClose: d, onConfirm: _ } = e,
		E = (0, O.zK)(t, y.S7.IN_HOUSE_CONSOLE_QUEST),
		h = R.r.build(t.config).defaultRewardRedemptionInstructionsByPlatform[v.y$.CROSS_PLATFORM],
		p = (0, O.Kr)(t.config),
		T =
			null == p
				? L.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_BODY.format({ decorationName: a })
				: L.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_BODY_WITH_EXPIRATION.format({
						decorationName: a,
						duration: p
					});
	return (0, r.jsxs)('div', {
		className: b.claimedRootContainer,
		children: [
			(0, r.jsxs)('div', {
				className: b.headerContainer,
				children: [
					(0, r.jsx)(m.Z, {
						className: b.headerBackground,
						autoPlay: !1,
						loop: !1,
						muted: !0,
						playsInline: !0,
						controls: !1,
						poster: l
					}),
					(0, r.jsxs)('div', {
						className: b.headerForeground,
						children: [
							(0, r.jsx)('div', {
								className: b.previewContainer,
								children: (0, r.jsx)(f.Z, {
									user: n,
									guildId: null,
									avatarDecorationOverride: i
								})
							}),
							(0, r.jsx)(c.ModalCloseButton, {
								className: b.close,
								withCircleBackground: !0,
								onClick: d
							})
						]
					})
				]
			}),
			(0, r.jsx)(c.ModalFooter, {
				className: b.footerContainer,
				separator: !1,
				children: (0, r.jsxs)('div', {
					className: b.gradient,
					style: { backgroundImage: 'linear-gradient(180deg, '.concat(s, ', ').concat(o, ')') },
					children: [
						(0, r.jsx)(c.Heading, {
							variant: 'heading-lg/bold',
							color: 'always-white',
							className: b.heading,
							children: L.Z.Messages.QUESTS_REWARD_AVATAR_DECORATION_HEADER
						}),
						(0, r.jsx)(c.Text, {
							variant: 'text-sm/normal',
							color: 'always-white',
							className: b.text,
							children: T
						}),
						(0, r.jsx)(c.Button, {
							submitting: u,
							onClick: _,
							children: L.Z.Messages.COLLECTIBLES_USE_NOW
						}),
						E &&
							(0, r.jsxs)('div', {
								className: b.additionalRedemptionInstructions,
								children: [
									(0, r.jsx)('img', {
										src: M,
										alt: '',
										className: b.sponsorLogo
									}),
									(0, r.jsx)(c.Text, {
										variant: 'text-xs/normal',
										className: b.sponsoredBy,
										children: L.Z.Messages.QUESTS_REWARD_SPONSORED_BY.format({ publisherName: t.config.messages.gamePublisher })
									}),
									(0, r.jsx)(c.Text, {
										variant: 'text-sm/normal',
										color: 'always-white',
										children: I.Z.parse(h, !1, { allowLinks: !0 })
									})
								]
							})
					]
				})
			})
		]
	});
}
function x(e) {
	var t, n;
	let { quest: a, location: s, onClose: o, transitionState: u } = e,
		c = i.useMemo(() => (0, O.xn)(a.config), [a]),
		[_, f] = (function (e) {
			let { product: t, isFetching: n } = (0, h.T)(e),
				{} = (0, g.Z)({}),
				r = i.useMemo(() => {
					if (null == t || n) return null;
					let e = t.items.find((e) => e.type === l.Z.AVATAR_DECORATION);
					return null == e ? null : e;
				}, [t, n]);
			return [r, () => (null == r ? Promise.reject() : ((0, d.cV)(r), P()))];
		})(null !== (n = null == c ? void 0 : c.skuId) && void 0 !== n ? n : null);
	if (null == c) return null;
	let p = (0, O.zK)(a, y.S7.IN_HOUSE_CONSOLE_QUEST);
	return (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null || p
		? (0, r.jsx)(U, {
				onClose: o,
				transitionState: u,
				quest: a,
				location: s,
				reward: c,
				decoration: _,
				onUseNow: f
			})
		: (0, r.jsx)(E.default, {
				transitionState: u,
				onCloseModal: P,
				onClose: o,
				analyticsLocations: [],
				initialSelectedDecoration: _
			});
}
function G(e, t) {
	(0, c.openModalLazy)(async () => {
		let { default: i } = await Promise.resolve().then(n.bind(n, 920916));
		return (n) =>
			(0, r.jsx)(i, {
				...n,
				quest: e,
				location: t
			});
	});
}
