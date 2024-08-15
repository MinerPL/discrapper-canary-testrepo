n.r(t),
	n.d(t, {
		CollectiblesCollectedModalInner: function () {
			return U;
		}
	}),
	n(47120),
	n(627341);
var a = n(735250),
	r = n(470079),
	s = n(887024),
	o = n(512722),
	l = n.n(o),
	i = n(338545),
	c = n(278074),
	d = n(979554),
	u = n(399606),
	f = n(481060),
	g = n(37234),
	p = n(607070),
	C = n(100527),
	v = n(906732),
	m = n(1585),
	E = n(125988),
	h = n(300284),
	b = n(876917),
	y = n(642619),
	T = n(594174),
	A = n(884697),
	x = n(890249),
	I = n(318028),
	L = n(635552),
	_ = n(328456),
	N = n(624377),
	S = n(530618),
	O = n(141011),
	Z = n(372654),
	R = n(216541),
	j = n(302800),
	M = n(215023),
	k = n(689938),
	w = n(621000),
	B = n(660097);
let P = (e) => {
		let { product: t, item: n } = e,
			r = (0, u.e7)([T.default], () => {
				let e = T.default.getCurrentUser();
				return l()(null != e, 'User cannot be undefined'), e;
			}),
			{ avatarDecorationSrc: s } = (0, E.Z)({
				user: r,
				avatarDecorationOverride: (null == n ? void 0 : n.type) === d.Z.AVATAR_DECORATION ? n : null,
				size: (0, m.y9)(f.AvatarSizes.SIZE_120)
			});
		return (0, c.EQ)(t.type)
			.with(d.Z.PROFILE_EFFECT, () =>
				(0, a.jsx)('div', {
					className: w.profileEffectShopPreview,
					children: (0, a.jsx)(b.Z, {
						forCollectedModal: !0,
						profileEffectId: n.id
					})
				})
			)
			.with(
				d.Z.AVATAR_DECORATION,
				() => (
					l()(n.type === d.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
					(0, a.jsx)(f.Avatar, {
						size: f.AvatarSizes.SIZE_120,
						src: B,
						avatarDecoration: s,
						className: w.avatarDecoration,
						'aria-label': t.name
					})
				)
			)
			.with(d.Z.BUNDLE, () =>
				(0, a.jsx)('div', {
					className: w.bundlePreview,
					children: (0, a.jsx)(R.d, {
						product: t,
						user: r,
						isPurchased: !1,
						isHighlighted: !0,
						profileEffectClassName: w.bundleProfileEffectCard
					})
				})
			)
			.otherwise(() => null);
	},
	D = (e) => {
		let { product: t, item: n, reducedMotion: s, displayOptions: o } = e,
			[l, c] = r.useState(!1),
			d = (0, f.useSpring)({
				from: {
					transform: 'translateX(100%)',
					right: '-100%'
				},
				to: {
					transform: 'translateX(50%)',
					right: '50%'
				},
				config: { duration: 1550 },
				onRest: () => setTimeout(() => c(!0), 100)
			}),
			u = (0, f.useSpring)({
				from: {
					transform: 'translateX(100%)',
					right: '-100%'
				},
				to: {
					transform: 'translateX(50%)',
					right: '50%'
				},
				config: { duration: 1550 },
				reverse: l
			}),
			g = (0, f.useSpring)(
				{
					from: {
						transform: 'translateX(50%)',
						right: '50%',
						opacity: 1
					},
					to: {
						transform: 'translateX(50%)',
						right: '50%',
						opacity: 0
					},
					config: { duration: 300 },
					delay: 600
				},
				'animate-always'
			);
		return (0, a.jsxs)(a.Fragment, {
			children: [
				(0, a.jsx)(i.animated.div, {
					className: w.easterEggContainer,
					style: d,
					children: (0, a.jsx)(P, {
						product: t,
						item: n
					})
				}),
				(0, a.jsx)(i.animated.div, {
					className: w.easterEggContainer,
					style: s ? g : u,
					children: (0, a.jsx)('img', {
						src: o.imageSrc,
						style: o.style,
						alt: '',
						'aria-hidden': 'true'
					})
				})
			]
		});
	},
	F = (e) => {
		let { product: t, item: n, reducedMotion: r = !1 } = e,
			s = (0, j.v)(t.categorySkuId);
		return null != s
			? (0, a.jsx)(D, {
					product: t,
					item: n,
					reducedMotion: r,
					displayOptions: s
				})
			: (0, a.jsx)(P, {
					product: t,
					item: n
				});
	},
	U = (e) => {
		var t;
		let {
				product: n,
				onClose: s,
				confettiTarget: o,
				confettiCanvas: i,
				hideConfetti: E = !1,
				analyticsLocations: b
			} = e,
			{ confettiColors: T } = (0, N.Z)(n.styles),
			R = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
			j = (0, x.m)('CollectiblesCollectedModal'),
			[B] = n.items,
			P = r.useRef(null),
			{ analyticsLocations: D } = (0, v.ZP)([...b, C.Z.COLLECTIBLES_COLLECTED_MODAL]),
			U = (0, h.Z)({ analyticsLocations: D }),
			H = r.useCallback(() => {
				if ((s(), (0, g.xf)(), U(), n.type === d.Z.AVATAR_DECORATION)) {
					l()(B.type === d.Z.AVATAR_DECORATION, 'product type and item type are the same'),
						(0, m.ps)({
							initialSelectedDecoration: B,
							analyticsLocations: D
						});
					return;
				}
				n.type === d.Z.PROFILE_EFFECT &&
					(0, y.H)({
						initialSelectedEffectId: B.id,
						analyticsLocations: D
					});
			}, [s, U, n.type, B, D]),
			{ handleUseNow: z, isApplying: V } = (0, L.W)({
				product: n,
				onSuccess: s,
				onError: s
			}),
			{ firstAvatarDecoration: W, firstProfileEffect: X } = (0, _.R)(n),
			G = (0, A.x6)(n) ? null != W && null != X : null != W || null != X,
			K = (0, A.x6)(n) || j,
			{ category: Y, isFetching: Q } = (0, I.l)(n.skuId),
			q = null !== (t = null == Y ? void 0 : Y.successModalBg) && void 0 !== t ? t : n.banner;
		return (0, a.jsxs)(v.Gt, {
			value: D,
			children: [
				(0, a.jsxs)('div', {
					className: w.modalInner,
					ref: P,
					children: [
						(0, a.jsxs)('div', {
							className: w.bannerContainer,
							children: [
								(0, a.jsx)(O.Z, {
									asset: Q ? void 0 : q,
									size: (0, Z.ML)(880),
									className: w.decorationBanner,
									categoryBannerOverride: (0, M.ZS)(n.categorySkuId)
								}),
								(0, a.jsx)(F, {
									product: n,
									item: B,
									reducedMotion: R
								})
							]
						}),
						(0, a.jsxs)('div', {
							className: w.collectedInfoContainer,
							children: [
								(0, a.jsxs)('div', {
									className: w.collectedTextContainer,
									children: [
										(0, a.jsx)(f.Heading, {
											variant: 'heading-lg/bold',
											children: k.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({ itemName: n.name })
										}),
										(0, a.jsx)(f.Text, {
											variant: 'text-sm/normal',
											children: (0, c.EQ)(null == n ? void 0 : n.type)
												.with(d.Z.BUNDLE, () => k.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION_BUNDLE)
												.with(d.Z.PROFILE_EFFECT, () => k.Z.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION)
												.otherwise(() => k.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION)
										})
									]
								}),
								K
									? (0, a.jsxs)('div', {
											className: w.buttons,
											children: [
												(0, a.jsx)(f.Button, {
													color: G ? f.ButtonColors.PRIMARY : f.ButtonColors.BRAND,
													onClick: H,
													children: k.Z.Messages.USER_SETTINGS_EDIT_USER_PROFILE
												}),
												G
													? (0, a.jsx)(f.Button, {
															onClick: z,
															submitting: V,
															children: k.Z.Messages.COLLECTIBLES_USE_NOW
														})
													: null
											]
										})
									: (0, a.jsx)(f.Button, {
											onClick: H,
											children: k.Z.Messages.COLLECTIBLES_USE_NOW
										})
							]
						}),
						(0, a.jsx)(f.ModalCloseButton, {
							onClick: s,
							className: w.modalCloseButton,
							withCircleBackground: !0
						})
					]
				}),
				!E &&
					!R &&
					(0, a.jsx)(S.Z, {
						confettiTarget: null != o ? o : P.current,
						confettiCanvas: i,
						sprites: (0, Z.vK)(n.categorySkuId),
						colors: null == T ? void 0 : T.map((e) => e.toHexString())
					})
			]
		});
	};
t.default = (e) => {
	let { transitionState: t, product: n, onClose: o, analyticsLocations: l } = e,
		i = r.useRef(new s.qA()),
		[c, d] = r.useState(null),
		u = (0, j.UY)(n.skuId);
	return (0, a.jsxs)(a.Fragment, {
		children: [
			(0, a.jsx)(s.O_, {
				ref: d,
				className: w.confettiCanvas,
				environment: i.current
			}),
			(0, a.jsxs)(f.ModalRoot, {
				hideShadow: !0,
				transitionState: t,
				size: f.ModalSize.DYNAMIC,
				className: w.modalRoot,
				children: [
					null != u &&
						(0, a.jsx)('img', {
							src: u.imageSrc,
							className: w.customConfetti,
							style: u.style,
							alt: '',
							'aria-hidden': 'true'
						}),
					(0, a.jsx)(f.ModalContent, {
						className: w.modalContent,
						children: (0, a.jsx)(U, {
							product: n,
							onClose: o,
							confettiCanvas: c,
							hideConfetti: null != u,
							analyticsLocations: l
						})
					})
				]
			})
		]
	});
};
