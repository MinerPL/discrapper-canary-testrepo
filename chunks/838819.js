n.r(t), n(47120);
var s = n(735250),
	r = n(470079),
	a = n(120356),
	i = n.n(a),
	o = n(392711),
	c = n(180650),
	l = n(979554),
	d = n(399606),
	u = n(704215),
	f = n(952265),
	p = n(780384),
	g = n(481060),
	C = n(150063),
	_ = n(434650),
	m = n(100527),
	h = n(906732),
	b = n(702486),
	x = n(514361),
	E = n(605236),
	I = n(977395),
	v = n(479446),
	S = n(981632),
	L = n(290026),
	T = n(210887),
	N = n(819640),
	O = n(594174),
	k = n(626135),
	j = n(74538),
	P = n(335131),
	B = n(372047),
	R = n(328347),
	A = n(280773),
	Z = n(617452),
	M = n(223143),
	y = n(675052),
	w = n(298228),
	D = n(937510),
	H = n(853748),
	F = n(426171),
	U = n(823941),
	G = n(752053),
	W = n(963102),
	V = n(128185),
	Y = n(508498),
	z = n(38900),
	K = n(709999),
	X = n(373113),
	q = n(802022),
	$ = n(399033),
	Q = n(994896),
	J = n(558117),
	ee = n(141594),
	et = n(302800),
	en = n(981631),
	es = n(921944),
	er = n(420212),
	ea = n(474936),
	ei = n(689938),
	eo = n(53824);
function ec(e) {
	let {
			products: t,
			handleShopCardMount: n,
			header: r,
			category: a,
			isPremiumUser: i,
			isGiftEasterEggEnabled: o,
			showMysteryCard: c = !1
		} = e,
		l = (0, d.e7)([O.default], () => O.default.getCurrentUser());
	return null == l || 0 === t.length
		? null
		: (0, s.jsxs)('div', {
				children: [
					null != r
						? (0, s.jsx)(g.Text, {
								className: eo.itemTypeTitle,
								color: 'header-secondary',
								variant: 'text-sm/bold',
								children: r
							})
						: (0, s.jsx)(g.Spacer, { size: 24 }),
					(0, s.jsx)('div', {
						className: eo.cardsContainer,
						children: t.map((e, t) =>
							(0, s.jsxs)(s.Fragment, {
								children: [
									(0, s.jsx)(
										K.Z,
										{
											onMount: n(e),
											isPremiumUser: i,
											category: a,
											product: e,
											user: l,
											isGiftEasterEggEnabled: o
										},
										e.skuId
									),
									1 === t && c && (0, s.jsx)(q.Z, {})
								]
							})
						)
					})
				]
			});
}
function el(e) {
	let { category: t, initialItemCardRef: n, includeBundles: a = !1, ...i } = e,
		u = (0, D.l)(t.products),
		f = (0, d.e7)([R.Z], () => R.Z.initialProductSkuId),
		p = r.useCallback(
			(e) => (t) => {
				e.skuId === f && (n.current = t.current);
			},
			[f, n]
		),
		{ unifiedProductCatalogEnabled: g } = (0, A.n)('CollectiblesShop'),
		{ revealed: C } = (0, J.R)('CollectiblesShop'),
		_ = !C && t.skuId === c.T.STORM && u.length <= 15;
	if (g || a)
		return (0, s.jsx)(ec, {
			products: u,
			handleShopCardMount: p,
			category: t,
			showMysteryCard: _,
			...i
		});
	{
		var m, h;
		let e = (0, o.groupBy)(u, 'type');
		return (0, s.jsxs)(s.Fragment, {
			children: [
				(0, s.jsx)(ec, {
					products: null !== (m = e[l.Z.AVATAR_DECORATION]) && void 0 !== m ? m : [],
					handleShopCardMount: p,
					category: t,
					header: ei.Z.Messages.PREMIUM_FEATURE_AVATAR_DECORATIONS_HEADER,
					showMysteryCard: _,
					...i
				}),
				(0, s.jsx)(ec, {
					products: null !== (h = e[l.Z.PROFILE_EFFECT]) && void 0 !== h ? h : [],
					handleShopCardMount: p,
					category: t,
					header: ei.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_PROFILE_EFFECTS_TITLE,
					...i
				})
			]
		});
	}
}
function ed(e) {
	let {
			category: t,
			isPremiumUser: n,
			initialItemCardRef: a,
			isGiftEasterEggEnabled: o,
			setIsGiftEasterEggEnabled: c,
			showEasterEggToggle: l,
			isFullScreen: d,
			index: u,
			includeBundles: f = !1
		} = e,
		p = r.useRef(10 + 70 * Math.random()),
		[C, m] = r.useState(!1),
		h = (0, et.M7)(t.skuId),
		b = (0, _.O)(
			(e) => {
				m(e && null != h);
			},
			d ? 0.13 : 0.15
		);
	return (0, s.jsxs)('div', {
		className: eo.categoryWrapper,
		ref: b,
		children: [
			l &&
				(0, s.jsx)(g.Clickable, {
					className: i()(eo.hiddenWumpus, { [eo.hiddenWumpusEnabled]: o }),
					onClick: () => c(!0),
					style: { left: ''.concat(p.current, '%') },
					children: (0, s.jsx)(S.Z, {
						idleAnimationState: v.S.IDLE,
						giftStyle: ea.Cj.BOX
					})
				}),
			(0, s.jsx)(U.Z, {
				category: t,
				hideLimitedTimeBadge: null != h,
				index: u
			}),
			(0, s.jsx)(el, {
				category: t,
				initialItemCardRef: a,
				isPremiumUser: n,
				isGiftEasterEggEnabled: o,
				includeBundles: f
			}),
			null != h &&
				null != t.unpublishedAt &&
				(0, s.jsx)(H.$, {
					unpublishedAt: t.unpublishedAt,
					isVisible: C,
					displayOptions: h,
					isFullScreen: d
				})
		]
	});
}
t.default = function (e) {
	let { isFullScreen: t = !0 } = e;
	r.useEffect(() => {
		I.f.trigger();
	});
	let { analyticsSource: n, analyticsLocations: a } = (0, d.cj)([R.Z], () => R.Z.getAnalytics()),
		{ analyticsLocations: o } = (0, h.ZP)([...a, m.Z.COLLECTIBLES_SHOP]),
		c = (0, d.e7)([N.Z], () => N.Z.getLayers().includes(en.S9g.COLLECTIBLES_SHOP)),
		_ = (0, f.f9)(),
		{ onClose: v } = (0, Y.Db)(),
		S = (0, d.e7)([O.default], () => O.default.getCurrentUser()),
		A = j.ZP.canUseCollectibles(S),
		{ categories: D, isFetchingCategories: H, error: U, refreshCategories: K } = (0, M.Z)();
	(0, L.P)();
	let q = (0, w.O)(D),
		{ sortedPopularPickProducts: J, popularProductToCategoryMap: et } = (0, y.a)(D),
		ec = (0, Z.e)('CollectiblesShop'),
		el = r.useRef(null),
		[eu, ef] = r.useState(!1);
	(0, F.Kp)({
		categories: D,
		isFetchingCategories: H,
		isLayer: c,
		initialItemCardRef: el
	});
	let { sessionId: ep, scrollerRef: eg, scrollHandler: eC } = (0, b._)(en.rMx.COLLECTIBLES_SHOP_SCROLLED, n);
	r.useEffect(() => {
		k.default.track(en.rMx.COLLECTIBLES_SHOP_VIEWED, {
			location_stack: o,
			source: n,
			page_session_id: ep
		}),
			!A &&
				k.default.track(en.rMx.PREMIUM_UPSELL_VIEWED, {
					type: ea.cd.COLLECTIBLES_SHOP,
					location_stack: o
				});
	}, [A, o, n, ep]);
	let { dismissCollectiblesShopTabNewBadge: e_ } = (0, ee.Z)();
	r.useEffect(() => {
		if ((e_(), !(0, E.un)(u.z.COLLECTIBLES_GIFTING_COACHMARK)))
			(0, E.EW)(u.z.COLLECTIBLES_GIFTING_COACHMARK, {
				dismissAction: es.L.AUTO_DISMISS,
				forceTrack: !0
			});
	}, [e_]),
		r.useEffect(() => {
			!t && (0, C.Y)(en.Z5c.COLLECTIBLES_SHOP);
		}, [t]),
		r.useEffect(
			() => () => {
				(0, P.K$)({
					categories: [...D.values()],
					itemTypes: [l.Z.AVATAR_DECORATION, l.Z.PROFILE_EFFECT]
				});
			},
			[D]
		),
		r.useEffect(() => {
			if (!t || c || _) return;
			let e = (e) => {
				if (e.key === er.mR.Escape) v();
			};
			return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
		}, [t, c, _, v]);
	let em = r.useCallback(() => {
			K();
		}, [K]),
		{ containerRef: eh } = (function () {
			let e = r.useRef(null),
				t = r.useRef(null);
			return (
				(0, g.useFocusLock)(e, { returnRef: t }),
				{
					containerRef: e,
					returnRef: t
				}
			);
		})(),
		{ setCategoryRef: eb, handleScrollToCategory: ex } = (0, F.xV)(eg.current),
		{ condensedBannersAndDynamicHeadersEnabled: eE } = (0, Q.O)({ location: 'CollectiblesShop' }),
		{ enabled: eI } = (0, B.Z)({ location: 'CollectiblesShop' }),
		ev = (0, d.e7)([x.Z], () => x.Z.gradientPreset),
		eS = !(0, d.e7)([T.Z], () => (0, p.wj)(T.Z.theme)) && null == ev;
	return (0, s.jsxs)(h.Gt, {
		value: o,
		children: [
			(0, s.jsx)('div', {
				className: eo.shop,
				ref: t ? eh : void 0,
				children: (0, s.jsxs)(g.AdvancedScroller, {
					className: eo.shopScroll,
					ref: eg,
					onScroll: eC,
					children: [
						(0, s.jsx)(W.I, {
							isFullScreen: t,
							isLayer: c,
							onClose: v
						}),
						(0, s.jsx)('div', {
							className: eo.pageWrapper,
							children: (0, s.jsxs)('main', {
								className: i()(eo.page, { [eo.pageFullscreen]: t }),
								children: [
									eE &&
										q.length > 0 &&
										(0, s.jsx)(V.h, {
											categories: q,
											handleScrollToCategory: ex
										}),
									eI &&
										(0, s.jsxs)('div', {
											className: i()(
												eo.popularPicksContainer,
												eS ? eo.defaultLightModeCustomGradient : eo.popularPicksGradient
											),
											children: [
												(0, s.jsx)(g.Text, {
													className: eo.popularPicksHeader,
													variant: 'text-lg/medium',
													children: ei.Z.Messages.COLLECTIBLES_POPULAR_PICKS
												}),
												(0, s.jsx)($.Z, {
													products: J,
													user: S,
													productToCategoryMap: et
												})
											]
										}),
									H
										? (0, s.jsx)(z.Z, {})
										: U
											? (0, s.jsx)(G.Z, { onRetry: em })
											: (0, s.jsx)('div', {
													className: eo.categories,
													children: q
														.filter((e) => null == e.unpublishedAt || e.unpublishedAt > new Date())
														.filter((e) => {
															let { products: t } = e;
															return t.length > 0;
														})
														.map((e, n) =>
															(0, s.jsx)(
																'div',
																{
																	ref: (t) => eb(e.skuId, t),
																	children: (0, s.jsx)(ed, {
																		isPremiumUser: A,
																		category: e,
																		initialItemCardRef: el,
																		setIsGiftEasterEggEnabled: ef,
																		isGiftEasterEggEnabled: eu,
																		isFullScreen: t,
																		includeBundles: ec,
																		index: n
																	})
																},
																e.skuId
															)
														)
												})
								]
							})
						})
					]
				})
			}),
			eu && (0, s.jsx)(X.Z, {})
		]
	});
};
