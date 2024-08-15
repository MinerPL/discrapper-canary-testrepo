n(47120), n(627341);
var s = n(735250),
	r = n(470079),
	a = n(120356),
	i = n.n(a),
	o = n(512722),
	c = n.n(o),
	l = n(278074),
	d = n(873546),
	u = n(180650),
	f = n(979554),
	p = n(399606),
	g = n(663002),
	C = n(481060),
	_ = n(37234),
	m = n(727637),
	h = n(607070),
	b = n(100527),
	x = n(906732),
	E = n(1585),
	I = n(333867),
	v = n(197115),
	S = n(300284),
	L = n(876917),
	T = n(642619),
	N = n(210887),
	O = n(74538),
	k = n(335131),
	j = n(1870),
	P = n(884697),
	B = n(890249),
	R = n(635552),
	A = n(724994),
	Z = n(390698),
	M = n(813083),
	y = n(680942),
	w = n(558060),
	D = n(237031),
	H = n(616066),
	F = n(216541),
	U = n(832149),
	G = n(474936),
	W = n(689938),
	V = n(775409);
let Y = (e) => {
		let { children: t, onClick: n, ...r } = e;
		return (0, s.jsx)(C.Button, {
			fullWidth: !0,
			look: C.Button.Looks.FILLED,
			onClick: (e) => {
				e.stopPropagation(), n();
			},
			...r,
			children: t
		});
	},
	z = (e) => {
		let { className: t, ...n } = e;
		return (0, s.jsx)(C.Button, {
			color: C.ButtonColors.BRAND,
			look: C.Button.Looks.FILLED,
			size: C.ButtonSizes.ICON,
			className: i()(V.previewButton, t),
			innerClassName: V.previewButtonInner,
			'aria-label': W.Z.Messages.PREVIEW,
			...n,
			children: (0, s.jsx)(C.EyeIcon, {
				size: 'md',
				color: 'currentColor'
			})
		});
	};
t.Z = function (e) {
	let { product: t, user: n, category: a, onMount: o, isGiftEasterEggEnabled: K, isPopularPicksRow: X } = e,
		{ analyticsLocations: q } = (0, x.ZP)([
			...(X ? [b.Z.COLLECTIBLES_SHOP_POPULAR_PICKS_CAROUSEL] : []),
			b.Z.COLLECTIBLES_SHOP_CARD
		]),
		$ = r.useRef(null),
		Q = (0, m.Z)($),
		[J, ee] = r.useState(!1),
		et = Q || J,
		[en] = t.items,
		es = (0, p.e7)([h.Z], () => h.Z.useReducedMotion),
		er = O.ZP.canUseCollectibles(n),
		ea = (0, P.XM)(t, er, !1),
		ei = r.useMemo(() => (0, P.BH)(t, er), [t, er]),
		eo = (0, P.G1)(t),
		ec = (0, P.rN)(t),
		{ isPurchased: el, isPartiallyPurchased: ed } = (0, A.L)(t),
		[eu, ef] = (0, p.Wu)([j.Z], () => [
			j.Z.isClaiming === t.skuId,
			null != j.Z.isClaiming && j.Z.isClaiming !== t.skuId
		]),
		ep = (0, p.e7)([N.Z], () => (0, g.w)(N.Z.theme)),
		eg = (0, B.m)('CollectiblesCollectedModal'),
		eC = (0, P.x6)(t) || eg,
		e_ = (0, P.Yq)(t.skuId),
		em = a.skuId === u.T.STORM && '1268362891946627103' === t.skuId;
	r.useEffect(() => {
		let { current: e } = $;
		if (null == e) return;
		let t = () => ee(!0);
		return (
			e.addEventListener('focusin', t),
			e.blur(),
			() => {
				e.removeEventListener('focusin', t);
			}
		);
	}, []),
		r.useEffect(() => {
			null == o || o($);
		}, [o]);
	let eh = (0, S.Z)({ analyticsLocations: q }),
		eb = r.useRef(null),
		{ handleUseNow: ex, isApplying: eE } = (0, R.W)({ product: t }),
		eI = () => {
			if (((0, _.xf)(), eh(), t.type === f.Z.AVATAR_DECORATION && null != en)) {
				c()(en.type === t.type, "product type is equivlant to first item's check for avatar deco"),
					(0, E.ps)({
						initialSelectedDecoration: en,
						analyticsLocations: q
					});
				return;
			}
			t.type === f.Z.PROFILE_EFFECT &&
				(0, T.H)({
					initialSelectedEffectId: en.id,
					analyticsLocations: q
				});
		},
		ev = (e) => (n) => {
			(eb.current = n.currentTarget),
				(0, D.T)({
					product: t,
					category: a,
					analyticsLocations: q,
					analyticsSource: e,
					returnRef: eb
				});
		},
		eS = ev(b.Z.COLLECTIBLES_SHOP_CARD),
		eL = ev(b.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
		eT = () =>
			(0, s.jsx)('div', {
				className: V.hoverUpsellContainer,
				children: (0, s.jsx)(v.Z, {
					fullWidth: !0,
					className: V.__invalid_premiumSubscribeButton,
					disabled: ef,
					onClick: (e) => e.stopPropagation(),
					buttonText: W.Z.Messages.UNLOCK_WITH_NITRO,
					subscriptionTier: G.Si.TIER_2
				})
			}),
		eN = () =>
			el || ed
				? (0, s.jsx)(Z.U, {
						className: V.priceTag,
						isPartiallyPurchased: ed
					})
				: eo
					? (0, s.jsx)(C.Text, {
							variant: 'text-md/semibold',
							className: V.priceTag,
							children: W.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
						})
					: (0, s.jsx)(w.Z, {
							product: t,
							discount: ei,
							isPremiumUser: er,
							className: V.priceTag
						}),
		eO = () =>
			eo || d.tq
				? null
				: ec
					? (0, s.jsx)(z, { onClick: eL })
					: (0, s.jsx)(y.Z, {
							product: t,
							returnRef: $,
							isGiftEasterEggEnabled: K,
							disableCustomColor: !0,
							tooltipDelay: 250
						}),
		ek = () => {
			if (eo && !er && !ec) return eT();
			let e = eo
				? {
						submitting: eu,
						submittingStartedLabel: W.Z.Messages.COLLECTIBLES_COLLECTING,
						submittingFinishedLabel: W.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
						onClick: async () => {
							await (0, k.fK)(t.skuId),
								(0, U.Z)({
									product: t,
									analyticsLocations: q
								});
						}
					}
				: {
						onClick: () =>
							(0, I.Z)({
								skuId: t.skuId,
								analyticsLocations: q,
								returnRef: $
							})
					};
			return (0, s.jsxs)('div', {
				className: V.buttonsContainer,
				children: [
					ed
						? null
						: el
							? (0, s.jsx)(Y, {
									disabled: ef,
									onClick: eC ? ex : eI,
									submitting: eE,
									children: W.Z.Messages.COLLECTIBLES_USE_NOW
								})
							: (0, s.jsx)(Y, {
									disabled: ef,
									className: V.purchaseButton,
									...e,
									children: eo
										? W.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
										: W.Z.Messages.COLLECTIBLES_PURCHASE.format({ price: ea })
								}),
					eO()
				]
			});
		};
	return (0, P.x6)(t) && null != ei && ei.discountPercentage < 0
		? null
		: (0, s.jsx)(C.FocusRing, {
				children: (0, s.jsxs)(C.Clickable, {
					innerRef: $,
					className: i()(ep ? V.shopCardDark : V.shopCard, {
						[V.partiallyOwned]: ed,
						[V.shopCardAnimation]: !es,
						[ep ? V.shopCardDarkHighlighted : V.shopCardHighlighted]: et,
						[V.mysteryShopCard]: em
					}),
					onBlur: () => ee(!1),
					onClick: eS,
					id: 'shop-item-'.concat(t.skuId),
					children: [
						eo &&
							(0, s.jsx)(C.Tooltip, {
								tooltipContentClassName: V.premiumWheelTooltipContent,
								color: C.Tooltip.Colors.PRIMARY,
								text: W.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
								children: (e) =>
									(0, s.jsx)(C.TextBadge, {
										...e,
										className: V.premiumWheelBadge,
										text: (0, s.jsx)(C.NitroWheelIcon, {
											size: 'md',
											color: 'currentColor',
											className: V.premiumWheel
										})
									})
							}),
						(0, s.jsx)('div', {
							className: V.preview,
							children: (0, l.EQ)(t.type)
								.with(f.Z.PROFILE_EFFECT, () =>
									(0, s.jsx)('div', {
										className: V.profileEffectShopPreview,
										children: (0, s.jsx)(L.Z, {
											isHovering: et,
											profileEffectId: en.id,
											isPurchased: el,
											removeSetHeight: !0
										})
									})
								)
								.with(
									f.Z.AVATAR_DECORATION,
									() => (
										c()(en.type === f.Z.AVATAR_DECORATION, 'ts-match already checked the type'),
										(0, s.jsx)('div', {
											className: i()(V.avatarContainer, em && V.mysteryAvatarContainer),
											children: (0, s.jsx)(H.R, {
												item: en,
												user: n,
												isPurchased: el,
												isHighlighted: et
											})
										})
									)
								)
								.with(f.Z.BUNDLE, () =>
									(0, s.jsx)(F.d, {
										product: t,
										user: n,
										isPurchased: el,
										isHighlighted: et
									})
								)
								.otherwise(() => null)
						}),
						el
							? (0, s.jsx)('div', {
									className: V.checkmarkWrapper,
									children: (0, s.jsx)(C.CheckmarkLargeBoldIcon, {
										size: 'custom',
										color: 'currentColor',
										width: 38,
										height: 38,
										className: V.checkmark
									})
								})
							: null,
						(0, s.jsxs)('div', {
							className: i()(V.cardText, { [V.cardTextBlur]: (null == en ? void 0 : en.type) === f.Z.PROFILE_EFFECT }),
							children: [
								(0, s.jsx)('div', {
									className: i()(
										V.cardBackground,
										ep ? V.darkCardBackground : V.lightCardBackground,
										(null == en ? void 0 : en.type) === f.Z.PROFILE_EFFECT ? V.cardLowOpacity : null
									)
								}),
								(0, s.jsx)(C.Text, {
									variant: 'text-lg/bold',
									className: V.productName,
									children: t.name
								}),
								(0, s.jsxs)('div', {
									className: V.detailsWrapper,
									children: [
										(0, s.jsx)('div', {
											className: ed ? void 0 : V.innerBlur,
											children: eN()
										}),
										(0, s.jsx)('div', {
											className: V.innerHover,
											children: ek()
										})
									]
								})
							]
						}),
						(0, s.jsx)(M.Z, {
							category: a,
							className: V.limitedTimeBadge,
							display: 'card'
						}),
						e_ &&
							!ed &&
							!el &&
							(0, s.jsx)(C.TextBadge, {
								text: W.Z.Messages.NEW,
								disableColor: !0,
								className: V.newBadge
							})
					]
				})
			});
};
