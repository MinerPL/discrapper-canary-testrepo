n.d(t, {
	Z: function () {
		return C;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(442837),
	l = n(481060),
	u = n(355467),
	c = n(100527),
	d = n(906732),
	_ = n(678558),
	E = n(626135),
	f = n(74538),
	h = n(357355),
	p = n(104494),
	I = n(639119),
	m = n(165583),
	T = n(197115),
	g = n(302945),
	S = n(631771),
	A = n(474936),
	N = n(981631),
	v = n(689938),
	O = n(876298),
	R = n(769860);
function C(e) {
	var t, n, a;
	let {
			title: C,
			type: y,
			guildBoostProps: D,
			analyticsSource: L,
			analyticsLocation: b,
			body: M,
			context: P,
			glowUp: U,
			modalClassName: w,
			artContainerClassName: x,
			headerClassName: G,
			bodyClassName: k,
			transitionState: B,
			onClose: F,
			onSubscribeClick: V,
			onSecondaryClick: H,
			secondaryCTA: Z,
			subscribeButtonText: Y,
			showNewBadge: j = !1,
			showBetaBadge: W = !1,
			enableArtBoxShadow: K = !0,
			subscriptionTier: z = A.Si.TIER_2,
			isLoading: q = !1,
			hideBackButton: Q,
			backButtonText: X,
			showEnhancedUpsell: $,
			children: J,
			...ee
		} = e,
		et = null != D,
		en = (0, I.N)(),
		er = (0, p.Ng)(),
		ei =
			((null == en ? void 0 : null === (t = en.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === z ||
				(0, p.Wp)(er, z)) &&
			!et,
		{ analyticsLocations: ea } = (0, d.ZP)(c.Z.PREMIUM_UPSELL_MODAL);
	i.useEffect(() => {
		!q &&
			(et
				? E.default.track(N.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
						type: ''.concat(y, ' - Tier ').concat(D.boostedGuildTier),
						guild_id: D.guild.id,
						channel_id: D.channelId,
						location: b,
						location_stack: ea
					})
				: E.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
						type: y,
						source: L,
						location: b,
						location_stack: ea,
						sku_id: (0, f.Wz)(z)
					}));
	}, [et, z, q]);
	let es = (0, o.e7)([h.Z], () => h.Z.affinities),
		eo = es.length > 1 && (0, S.YN)(y),
		el = (0, o.e7)([h.Z], () => h.Z.hasFetched);
	i.useEffect(() => {
		!el && u.MH();
	}, [el]);
	let eu = K ? s()(O.artContainer, O.artContainerBoxShadow, x) : s()(O.artContainer, x),
		ec = null;
	return (
		(ec =
			'artURL' in ee
				? (0, r.jsx)('img', {
						className: O.art,
						alt: '',
						src: ee.artURL
					})
				: ee.artElement),
		(0, r.jsxs)(l.ModalRoot, {
			className: s()(O.root, w),
			'aria-label': C,
			transitionState: B,
			children: [
				W
					? (0, r.jsx)(l.Text, {
							variant: 'text-xs/semibold',
							className: O.betaBadge,
							children: v.Z.Messages.BETA
						})
					: null,
				(0, r.jsxs)('div', {
					className: eu,
					children: [
						ec,
						j
							? (0, r.jsx)('img', {
									className: O.sparkleBadge,
									alt: '',
									src: R
								})
							: null
					]
				}),
				$
					? (0, r.jsx)(l.ModalCloseButton, {
							onClick: F,
							className: O.closeButton
						})
					: null,
				(0, r.jsx)(l.ModalContent, {
					scrollbarType: 'none',
					className: $ ? O.enhancedContent : O.content,
					children: q
						? (0, r.jsx)(l.Spinner, {})
						: (0, r.jsx)(r.Fragment, {
								children: ei
									? (0, r.jsx)(r.Fragment, {
											children: (0, r.jsx)(m.ZP, {
												onClose: F,
												type: y,
												subscriptionTier:
													null !==
														(a =
															null == en
																? void 0
																: null === (n = en.subscription_trial) || void 0 === n
																	? void 0
																	: n.sku_id) && void 0 !== a
														? a
														: A.Si.TIER_2,
												headingText: C,
												context: P,
												analyticsLocationObject: b,
												discountOffer: er,
												trialOffer: en,
												children: U
											})
										})
									: (0, r.jsxs)(r.Fragment, {
											children: [
												(0, r.jsx)(l.Heading, {
													className: s()(O.header, { [O.enhancedHeader]: $ }, G),
													variant: 'heading-xl/bold',
													children: C
												}),
												eo ? (0, r.jsx)(g.Z, { affinities: es }) : void 0,
												J,
												(0, r.jsx)(l.Text, {
													variant: 'text-md/normal',
													className: s()(k, O.subHeader),
													children: M
												})
											]
										})
							})
				}),
				(0, r.jsxs)(l.ModalFooter, {
					className: s()(O.footer, { [O.enhancedFooter]: $ }),
					children: [
						(0, r.jsxs)('div', {
							className: s()(O.primaryActions, { [O.enhancedPrimaryActions]: $ }),
							children: [
								null != Z
									? (0, r.jsx)(l.Button, {
											className: s()(O.secondaryAction, { [O.enhancedSecondaryAction]: $ }),
											onClick: H,
											size: l.Button.Sizes.SMALL,
											color: $ ? l.Button.Colors.CUSTOM : l.Button.Colors.PRIMARY,
											look: l.Button.Looks.LINK,
											children: Z
										})
									: null,
								(() => {
									if (et)
										return (0, r.jsx)(_.Z, {
											analyticsLocation: b,
											guild: D.guild,
											onClose: F
										});
									let e = $ ? v.Z.Messages.PREMIUM_UPSELL_GET_NITRO : void 0;
									if (ei) {
										if (null != en) {
											var t, n;
											e = (0, f.Rt)({
												intervalType:
													null == en
														? void 0
														: null === (t = en.subscription_trial) || void 0 === t
															? void 0
															: t.interval,
												intervalCount:
													null == en
														? void 0
														: null === (n = en.subscription_trial) || void 0 === n
															? void 0
															: n.interval_count
											});
										} else
											null != er && (e = v.Z.Messages.PREMIUM_DISCOUNT_CTA.format({ percent: er.discount.amount }));
									}
									return (0, r.jsx)(T.Z, {
										showGradient: $,
										premiumModalAnalyticsLocation: b,
										subscriptionTier: z,
										size: l.Button.Sizes.SMALL,
										color: $ ? l.Button.Colors.CUSTOM : l.Button.Colors.GREEN,
										onClick: () => {
											null == V || V(), F();
										},
										buttonText: null != Y ? Y : e
									});
								})()
							]
						}),
						!Q &&
							!$ &&
							(0, r.jsx)(l.Button, {
								onClick: F,
								size: l.Button.Sizes.SMALL,
								color: l.Button.Colors.PRIMARY,
								look: l.Button.Looks.LINK,
								children: null != X ? X : v.Z.Messages.BACK
							})
					]
				})
			]
		})
	);
}
