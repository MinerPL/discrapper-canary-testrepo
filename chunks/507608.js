i.d(n, {
	AF: function () {
		return y;
	},
	hd: function () {
		return A;
	},
	zz: function () {
		return E;
	}
}),
	i(47120);
var l = i(735250),
	t = i(470079),
	r = i(905322),
	s = i(200207),
	a = i(269210),
	o = i(442837),
	d = i(481060),
	u = i(607070),
	c = i(100527),
	p = i(906732),
	m = i(87484),
	v = i(171246),
	g = i(930155),
	x = i(889989),
	h = i(696906),
	S = i(55563),
	f = i(551428),
	j = i(626135),
	I = i(768581),
	_ = i(73346),
	b = i(624138),
	R = i(591759),
	N = i(601911),
	T = i(110742),
	P = i(147496),
	k = i(680005),
	O = i(519896),
	M = i(981631),
	Z = i(689938),
	L = i(637714);
function y(e) {
	let {
			app: n,
			subscriptionGroupListing: i,
			onlySubscribeServerSubForGuildId: s,
			subscriptionListings: a,
			otpListings: m
		} = e,
		g = t.useMemo(() => (0, N.y)(n, 100), [n]),
		{ bot: x } = n,
		h = t.useMemo(() => {
			var e;
			if ((null == x ? void 0 : x.banner) == null) return;
			let n = (0, I.aN)({
				id: x.id,
				banner: x.banner,
				size: 1024,
				canAnimate: !1
			});
			return null != n && null !== (e = R.Z.toURLSafe(n)) && void 0 !== e ? e : void 0;
		}, [x]),
		S = t.useMemo(() => {
			var e;
			if ((null == x ? void 0 : x.banner) == null) return;
			let n = (0, I.aN)({
				id: x.id,
				banner: x.banner,
				size: 1024,
				canAnimate: !0
			});
			return null != n && null !== (e = R.Z.toURLSafe(n)) && void 0 !== e ? e : void 0;
		}, [x]),
		f = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
		_ = t.useMemo(() => [...a.map((e) => e.id), ...m.map((e) => e.id)], [a, m]),
		{ analyticsLocations: b } = (0, p.ZP)(c.Z.APP_STOREFRONT);
	return (
		t.useEffect(() => {
			0 !== _.length &&
				j.default.track(M.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
					application_id: n.id,
					sku_ids: _,
					location_stack: b
				});
		}, [b, n.id, _]),
		(0, l.jsxs)('div', {
			className: L.wrapper,
			children: [
				(0, l.jsx)(r.j, {
					title: n.name,
					iconSrc: g,
					backgroundSrc: h,
					animatedBackgroundSrc: S,
					prefersReducedMotion: f
				}),
				a.length > 0 &&
					null != i &&
					(0, l.jsxs)('div', {
						className: L.productSection,
						children: [
							(0, l.jsx)(d.Heading, {
								variant: 'heading-lg/semibold',
								color: 'header-secondary',
								children: Z.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS
							}),
							(0, l.jsx)('div', {
								className: L.productList,
								children: a.map((e) =>
									(0, l.jsx)(
										E,
										{
											appId: n.id,
											groupListingId: i.id,
											onlySubscribeServerSubForGuildId: s,
											listing: e,
											groupListingType: (0, v.KW)(i.sku_flags) ? 'user' : 'guild'
										},
										e.id
									)
								)
							})
						]
					}),
				m.length > 0 &&
					(0, l.jsxs)('div', {
						className: L.productSection,
						children: [
							(0, l.jsx)(d.Heading, {
								variant: 'heading-lg/semibold',
								color: 'header-secondary',
								children: Z.Z.Messages.STOREFRONT_APP_PRODUCTS
							}),
							(0, l.jsx)('div', {
								className: L.productList,
								children: m.map((e) =>
									(0, l.jsx)(
										A,
										{
											skuId: e.sku.id,
											appId: n.id
										},
										e.id
									)
								)
							})
						]
					}),
				(0, l.jsx)(d.Text, {
					variant: 'text-md/normal',
					className: L.legalText,
					children:
						null != n.termsOfServiceUrl && null != n.privacyPolicyUrl
							? Z.Z.Messages.STOREFRONT_VIEW_TOS_PP.format({
									tosUrl: n.termsOfServiceUrl,
									ppUrl: n.privacyPolicyUrl
								})
							: Z.Z.Messages.STOREFRONT_NO_TOS_PP
				})
			]
		})
	);
}
function E(e) {
	let {
			appId: n,
			groupListingId: i,
			onlySubscribeServerSubForGuildId: r,
			listing: s,
			groupListingType: o,
			onDetails: u
		} = e,
		{ data: c } = (0, g.H)(s.id),
		{ openModal: p } = (0, h.Z)({
			guildId: r,
			groupListingId: i,
			showBenefitsFirst: !1,
			analyticsLocation: M.Sbl.APP_STOREFRONT,
			skuId: s.id
		}),
		m = t.useMemo(() => {
			var e;
			return null === (e = s.store_listing_benefits) || void 0 === e
				? void 0
				: e.map((e) => ({
						id: e.id,
						title: e.name,
						description: e.description,
						icon: (0, x.n)(n, e.icon)
					}));
		}, [n, s.store_listing_benefits]),
		v = t.useMemo(() => {
			var e;
			return null != s.image_asset && null !== (e = R.Z.toURLSafe((0, _._W)(n, s.image_asset, 256))) && void 0 !== e
				? e
				: void 0;
		}, [n, s.image_asset]);
	return null == c
		? null
		: (0, l.jsx)(a.U, {
				title: s.name,
				description: s.description,
				imgSrc: v,
				subscriptionType: o,
				onPurchase: p,
				PurchaseButton: (e) =>
					(0, l.jsx)(k.p, {
						...e,
						appId: n,
						groupListingId: i,
						groupListingType: o,
						guildId: r,
						skuId: s.id,
						subPlan: c[0]
					}),
				benefitItems:
					null != m
						? m.map((e) =>
								(0, l.jsx)(
									a.G,
									{
										name: e.title,
										icon: e.icon
									},
									e.id
								)
							)
						: void 0,
				onDetails:
					null != u
						? u
						: null != m
							? () => {
									(0, d.openModal)((e) => {
										let { onClose: t, transitionState: r } = e;
										return (0, l.jsx)(O.SubscriptionDetailsModal, {
											appId: n,
											groupListingId: i,
											groupListingType: o,
											onClose: t,
											skuId: s.id,
											transitionState: r
										});
									});
								}
							: void 0
			});
}
function A(e) {
	var n, i, t, r;
	let { skuId: a, appId: u, onDetails: v } = e,
		{ analyticsLocations: g } = (0, p.ZP)(c.Z.APP_STOREFRONT),
		x = (0, o.e7)([f.Z], () => f.Z.getForSKU(a), [a]),
		h = (0, o.e7)([S.Z], () => S.Z.get(a), [a]),
		j = (0, T.M)(a);
	if (null == h) return null;
	let I = null !== (i = h.name) && void 0 !== i ? i : '',
		N =
			null !== (t = null == x ? void 0 : null === (n = x.description) || void 0 === n ? void 0 : n.trim()) &&
			void 0 !== t
				? t
				: void 0,
		O =
			(null == x ? void 0 : x.headerBackground) != null &&
			null !== (r = R.Z.toURLSafe((0, _._W)(u, x.headerBackground, 256))) &&
			void 0 !== r
				? r
				: void 0,
		L = h.type === M.epS.DURABLE && j,
		y =
			h.type === M.epS.DURABLE
				? L
					? Z.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE
					: Z.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY
				: void 0,
		{ price: E } = h;
	return null == E
		? null
		: (0, l.jsx)(s.I, {
				title: I,
				description: N,
				headerImage: O,
				availabilityLabel: y,
				onDetails:
					null != v
						? v
						: (0, b.Ew)(N)
							? void 0
							: () => {
									(0, d.openModal)((e) => {
										let { onClose: n, transitionState: i } = e;
										return (0, l.jsx)(P.ItemDetailsModal, {
											appId: u,
											skuId: a,
											onClose: n,
											transitionState: i
										});
									});
								},
				PurchaseButton: (e) =>
					(0, l.jsx)(k.Y, {
						...e,
						appId: u,
						sku: h
					}),
				onPurchase: () => {
					(0, m.Z)({
						applicationId: u,
						skuId: h.id,
						analyticsLocations: g
					});
				}
			});
}
