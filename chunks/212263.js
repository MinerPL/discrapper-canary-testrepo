n(47120);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(442837),
	l = n(481060),
	u = n(355467),
	c = n(100527),
	d = n(906732),
	_ = n(28546),
	E = n(357355),
	f = n(98278),
	h = n(104494),
	p = n(639119),
	I = n(165583),
	m = n(197115),
	T = n(631771),
	g = n(609218),
	S = n(210887),
	A = n(626135),
	N = n(176354),
	v = n(74538),
	O = n(543241),
	R = n(149203),
	C = n(981631),
	y = n(185923),
	D = n(474936),
	L = n(689938),
	b = n(900566);
t.Z = (e) => {
	var t, a;
	let M,
		{
			onLearnMore: P,
			onClose: U,
			channel: w,
			emojiDescriptor: x,
			pickerIntention: G,
			analyticsLocation: k,
			containerContext: B
		} = e,
		F = (0, o.e7)([S.Z], () => S.Z.theme) === C.BRd.LIGHT ? 'light' : 'dark',
		[V, H] = i.useState(!1),
		Z = () => {
			(0, O.A3)(w), (0, f.z)(), P();
		},
		Y = n(577391)('./img_premium_emoji_'.concat(F, '.svg')),
		j = 'https://cdn.discordapp.com/assets/premium/roadblocks/emoji_'.concat(F, '.png'),
		W = (0, p.N)(),
		K = (0, h.Ng)(),
		z = null != W || null != K,
		q = (0, _.Iu)((e) => e.searchQuery),
		{ analyticsLocations: Q } = (0, d.ZP)(c.Z.EMOJI_PICKER),
		{ enabled: X, addSocialProof: $ } = T.Gi.useExperiment(
			{ location: 'Premium Emoji Roadblock' },
			{
				autoTrackExposure: !z,
				disable: z
			}
		);
	M =
		G === y.Hz.REACTION
			? D.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED
			: null == x
				? D.cd.EMOJI_PICKER_FLOATING_UPSELL
				: x.subCategory === R.t0.TOP_GUILD_EMOJI
					? D.cd.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED
					: x.subCategory === R.t0.NEWLY_ADDED_EMOJI
						? D.cd.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED
						: D.cd.EMOJI_PICKER_EMOJI_CLICKED;
	let J = null != x ? x.emoji : void 0,
		ee = null != J && J.animated,
		et = null != J && !N.ZP.isInternalEmojiForGuildId(J, null == w ? void 0 : w.getGuildId()),
		en = null != J ? C.qAy.EMOJI : C.qAy.EMOJI_PICKER_FLOATING_UPSELL;
	i.useEffect(() => {
		!X &&
			A.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
				type: M,
				is_animated: ee,
				is_external: et,
				has_search_query: null != q && '' !== q,
				location: {
					...k,
					object: en
				},
				location_stack: Q,
				sku_id: (0, v.Wz)(v.ZP.getSkuIdForPremiumType(D.p9.TIER_2))
			});
	}, [k, Q, q, ee, et, M, en, X]);
	let er = (0, o.e7)([E.Z], () => E.Z.affinities),
		ei = (0, o.e7)([E.Z], () => E.Z.hasFetched);
	i.useEffect(() => {
		!ei && u.MH();
	}, [ei]);
	let ea = er.length > 1 && $;
	return X
		? (0, r.jsx)(g.Z, {
				containerContext: B,
				image: {
					url: j,
					width: 220,
					height: 132
				},
				title: L.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_TITLE_V2,
				description: L.Z.Messages.EMOJI_PICKER_PREMIUM_UPSELL_DESCRIPTION_V2,
				enableSocialProof: ea,
				analyticsLocationSection: C.jXE.EMOJI_UPSELL_POPOUT,
				onClose: U,
				upsellViewedTrackingData: {
					type: M,
					is_external: et,
					location: {
						...k,
						object: en
					},
					location_stack: Q,
					sku_id: (0, v.Wz)(v.ZP.getSkuIdForPremiumType(D.p9.TIER_2)),
					has_search_query: null != q && '' !== q,
					is_animated: ee
				}
			})
		: (0, r.jsxs)('div', {
				className: s()(b.premiumPromo, { [b.unifyTrialUpsell]: z }),
				children: [
					(0, r.jsx)(l.Clickable, {
						className: b.premiumPromoClose,
						onClick: U,
						children: L.Z.Messages.CLOSE
					}),
					(0, r.jsxs)(r.Fragment, {
						children: [
							z
								? (0, r.jsx)(I.ZP, {
										type: D.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
										subscriptionTier:
											null !==
												(a =
													null == W
														? void 0
														: null === (t = W.subscription_trial) || void 0 === t
															? void 0
															: t.sku_id) && void 0 !== a
												? a
												: D.Si.TIER_2,
										onClose: U,
										trialOffer: W,
										discountOffer: K,
										children: L.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({ onClick: Z })
									})
								: (0, r.jsxs)(r.Fragment, {
										children: [
											(0, r.jsx)('img', {
												alt: '',
												className: b.premiumPromoImage,
												src: Y
											}),
											(0, r.jsx)('div', {
												className: b.premiumPromoTitle,
												children: L.Z.Messages.PREMIUM_PROMO_TITLE_SEARCH_UPSELL
											}),
											(0, r.jsx)('div', {
												className: b.premiumPromoDescription,
												children: L.Z.Messages.PREMIUM_PROMO_DESCRIPTION_SEARCH_UPSELL.format({ onClick: Z })
											})
										]
									}),
							!z &&
								(0, r.jsx)(m.Z, {
									subscriptionTier: D.Si.TIER_2,
									submitting: V,
									premiumModalAnalyticsLocation: {
										section: C.jXE.EMOJI_PICKER_POPOUT,
										object: C.qAy.BUTTON_CTA
									},
									size: l.Button.Sizes.SMALL,
									color: l.Button.Colors.GREEN,
									onClick: () => {
										H(!0);
									},
									onSubscribeModalClose: (e) => {
										H(!1), e && U();
									},
									buttonText: z
										? L.Z.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT
										: L.Z.Messages.PREMIUM_REQUIRED_GET_NITRO
								})
						]
					})
				]
			});
};
