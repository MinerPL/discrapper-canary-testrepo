n(627341), n(47120), n(724458), n(653041);
var t = n(735250),
	a = n(470079),
	i = n(120356),
	r = n.n(i),
	l = n(512722),
	o = n.n(l),
	c = n(392711),
	u = n.n(c),
	_ = n(278074),
	d = n(442837),
	I = n(780384),
	E = n(481060),
	m = n(570140),
	C = n(179360),
	T = n(230711),
	N = n(410030),
	S = n(607070),
	p = n(44315),
	L = n(112831),
	A = n(543241),
	O = n(906411),
	P = n(565138),
	R = n(822179),
	M = n(419922),
	x = n(484459),
	f = n(318661),
	g = n(813549),
	h = n(735336),
	Z = n(502762),
	j = n(652853),
	U = n(430824),
	v = n(594174),
	b = n(314884),
	F = n(709586),
	y = n(626135),
	G = n(768581),
	D = n(63063),
	B = n(998502),
	k = n(53900),
	H = n(789155),
	Y = n(55610),
	z = n(798769),
	w = n(474936),
	W = n(981631),
	V = n(228168),
	K = n(689938),
	X = n(123007),
	q = n(834982),
	J = n(912450),
	Q = n(703548),
	$ = n(869333),
	ee = n(652528),
	es = n(874692),
	en = n(391458),
	et = n(70967),
	ea = n(674264),
	ei = n(360088),
	er = n(304880);
let el = B.ZP.getEnableHardwareAcceleration() ? E.AnimatedAvatar : E.Avatar,
	eo = {
		boostItemVisual: ee,
		emojiStickersVisual: es,
		screenShareItemVisual: ei,
		uploadsMessagesItemVisual: en,
		uploadsMessagesItemVisualV2: et,
		PL: ea,
		TR: er
	},
	ec = {
		boostItemVisual: q,
		emojiStickersVisual: J,
		screenShareItemVisual: ei,
		uploadsMessagesItemVisual: Q,
		uploadsMessagesItemVisualV2: $,
		PL: ea,
		TR: er
	};
function eu() {
	let e = (0, N.ZP)();
	return (0, I.wj)(e) ? ec : eo;
}
function e_(e) {
	let { description: s, onLearnMore: n, renderVisual: a } = e;
	return (0, t.jsxs)('div', {
		className: X.whatYouLoseItem,
		children: [
			(0, t.jsxs)('div', {
				className: X.whatYouLoseItemLeftColumn,
				children: [
					(0, t.jsx)(E.Text, {
						variant: 'text-md/normal',
						children: s
					}),
					(0, t.jsx)(E.Button, {
						look: E.Button.Looks.LINK,
						color: E.Button.Colors.LINK,
						size: E.Button.Sizes.NONE,
						className: X.whatYouLoseItemLearnMore,
						onClick: n,
						children: K.Z.Messages.LEARN_MORE
					})
				]
			}),
			(0, t.jsx)('div', {
				className: X.whatYouLoseItemRightColumn,
				children: a()
			})
		]
	});
}
function ed(e) {
	let { ...s } = e,
		{ theme: n } = (0, j.z)(),
		a = (0, p.O0)(W.tPk.INTERACTIVE_ACTIVE, n);
	return (0, t.jsx)(E.NitroWheelIcon, {
		size: 'md',
		...s,
		color: a.hex
	});
}
function eI(e) {
	let { currentUser: s, premiumType: n, onClose: a } = e,
		i = (0, f.ZP)(s.id),
		r = (0, d.e7)([S.Z], () => S.Z.useReducedMotion),
		l = n === w.p9.TIER_1,
		o = (0, _.EQ)(null == i ? void 0 : i.premiumType)
			.with(w.p9.TIER_2, () =>
				(0, t.jsxs)(Z.Z, {
					user: s,
					displayProfile: i,
					forceShowPremium: !0,
					profileType: V.y0.CANCEL_MODAL,
					className: X.profileCard,
					children: [
						(0, t.jsx)('div', {
							className: X.profileBanner,
							children: (0, t.jsx)(h.Z, {
								displayProfile: i,
								user: s,
								allowEdit: !1,
								profileType: V.y0.CANCEL_MODAL
							})
						}),
						(0, t.jsx)(el, {
							className: X.profileAvatar,
							src: s.getAvatarURL(void 0, (0, E.getAvatarSize)(E.AvatarSizes.SIZE_56), !r),
							size: E.AvatarSizes.SIZE_56,
							'aria-label': s.username
						}),
						(0, t.jsx)(Z.Z.Overlay, {
							className: X.profileInner,
							children: (0, t.jsxs)('div', {
								className: X.profileUserInfo,
								children: [
									(0, t.jsx)(g.Z, {
										className: X.profileNameTag,
										usernameClass: X.profileNameTagUsername,
										name: s.toString()
									}),
									(0, t.jsx)(ed, { className: X.profilePremiumIcon })
								]
							})
						})
					]
				})
			)
			.otherwise(() =>
				(0, t.jsxs)('div', {
					className: X.profileCardTier1,
					children: [
						(0, t.jsx)(el, {
							className: X.profileAvatarTier1,
							src: s.getAvatarURL(void 0, (0, E.getAvatarSize)(E.AvatarSizes.SIZE_56), !r),
							size: E.AvatarSizes.SIZE_56,
							'aria-label': s.username
						}),
						(0, t.jsxs)('div', {
							className: X.profileUserInfoTier1,
							children: [
								(0, t.jsx)(g.Z, {
									className: X.profileNameTag,
									usernameClass: X.profileNameTagUsername,
									name: s.toString()
								}),
								(0, t.jsx)(E.NitroWheelIcon, {
									size: 'md',
									color: 'currentColor',
									className: X.profilePremiumIcon
								})
							]
						})
					]
				})
			);
	return (0, t.jsx)(
		e_,
		{
			description: l ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE.format(),
			onLearnMore: () => {
				a(), T.Z.open(W.oAB.PROFILE_CUSTOMIZATION), y.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'user_profile_customization' });
			},
			renderVisual: () => o
		},
		'profile-item'
	);
}
function eE(e) {
	let { premiumType: s } = e,
		n = (0, d.e7)([S.Z], () => S.Z.useReducedMotion),
		a = (0, A.wC)(null)
			.filter((e) => e.type === O.B.GUILD && (e.animated || null != e.guildId))
			.slice(0, 3),
		i = (0, d.Wu)([R.Z], () => R.Z.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - a.length)),
		r = eu().emojiStickersVisual,
		l = s === w.p9.TIER_1;
	return (0, t.jsx)(
		e_,
		{
			description: l ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS.format(),
			onLearnMore: () => {
				window.open(D.Z.getArticleURL(W.BhN.PREMIUM_DETAILS)), y.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'emojis_stickers' });
			},
			renderVisual: () =>
				(null != a && a.length > 0) || (!l && null != i && i.length > 0)
					? (0, t.jsxs)('div', {
							className: X.emojiStickersPersonalizedContainer,
							children: [
								a
									.map((e) =>
										null == e.id
											? e.url
											: G.ZP.getEmojiURL({
													id: e.id,
													animated: !n && e.animated,
													size: 58
												})
									)
									.map((e) =>
										null != e
											? (0, t.jsx)('img', {
													className: X.personalizedEmoji,
													alt: '',
													src: e
												})
											: null
									),
								l
									? null
									: i.map((e) =>
											(0, t.jsx)(
												M.ZP,
												{
													disableAnimation: n,
													sticker: e,
													size: 58,
													withLoadingIndicator: !1
												},
												e.id
											)
										)
							]
						})
					: (0, t.jsx)('img', {
							className: X.nonPersonalizedGraphic,
							alt: '',
							src: r
						})
		},
		'emoji-stickers-item'
	);
}
function em(e) {
	let { premiumType: s, onClose: n } = e;
	a.useEffect(() => m.Z.wait(() => (0, C.X8)()), []);
	let i = (0, d.e7)([S.Z], () => S.Z.useReducedMotion),
		[l, o] = (0, d.Wu)([b.Z, U.Z], () => {
			let e = b.Z.boostSlots,
				s = new Map();
			u()(e)
				.map('premiumGuildSubscription')
				.map('guildId')
				.forEach((e) => {
					if (null != U.Z.getGuild(e)) {
						var n;
						let t = null !== (n = s.get(e)) && void 0 !== n ? n : 0;
						s.set(e, t + 1);
					}
				});
			let n = null,
				t = 0;
			return s.size > 0 && ([n, t] = Array.from(s.entries()).reduce((e, s) => (s[1] > e[1] ? s : e))), [U.Z.getGuild(n), t];
		}),
		c = null != l && o > 0,
		_ = eu().boostItemVisual;
	return (0, t.jsx)(
		e_,
		{
			description: s === w.p9.TIER_1 ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_TIER_1.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS.format(),
			onLearnMore: () => {
				n(), T.Z.open(W.oAB.GUILD_BOOSTING), y.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'boosts' });
			},
			renderVisual: () =>
				c
					? (0, t.jsx)('div', {
							className: X.boostCardContainer,
							children: (0, t.jsxs)('div', {
								className: X.boostCard,
								children: [
									(0, t.jsx)(P.Z, {
										guild: l,
										size: P.Z.Sizes.MEDIUM,
										animate: !i,
										className: X.boostCardIcon
									}),
									(0, t.jsxs)('div', {
										className: X.boostCardInfo,
										children: [
											(0, t.jsx)(E.Text, {
												variant: 'text-md/normal',
												className: r()(X.textSingleLineEllipsis, X.boostCardTitle),
												children: l.name
											}),
											(0, t.jsxs)('div', {
												className: X.boostCardSubtitle,
												children: [
													(0, t.jsx)(F.Z, { className: X.boostCardGem }),
													(0, t.jsx)(E.Text, {
														variant: 'text-xs/normal',
														className: r()(X.textSingleLineEllipsis, X.boostCardCount),
														children: K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_APPLIED.format({ boostCount: o })
													})
												]
											})
										]
									})
								]
							})
						})
					: (0, t.jsx)('img', {
							alt: '',
							src: _
						})
		},
		'boost-item'
	);
}
let eC = () => {
	let e = eu().screenShareItemVisual;
	return (0, t.jsx)(
		e_,
		{
			description: K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SCREENSHARE.format(),
			onLearnMore: () => {
				window.open(D.Z.getArticleURL(W.BhN.STREAM_QUALITY_SETTINGS)), y.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'screen_share' });
			},
			renderVisual: () =>
				(0, t.jsx)('img', {
					alt: '',
					src: e
				})
		},
		'screen-share-item'
	);
};
function eT(e) {
	let { premiumType: s } = e,
		n = eu().uploadsMessagesItemVisual;
	return (0, t.jsx)(
		e_,
		{
			description: s === w.p9.TIER_2 ? K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES.format() : K.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES_TIER_1.format(),
			onLearnMore: () => {
				window.open(D.Z.getArticleURL(W.BhN.PREMIUM_DETAILS)), y.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'msgs_uploads' });
			},
			renderVisual: () =>
				(0, t.jsx)('img', {
					alt: '',
					src: n
				})
		},
		'uploads-item'
	);
}
let eN = (e) => {
	let { country: s } = e,
		n = eu(),
		a = 'PL' === s ? n.PL : n.TR;
	return (0, t.jsx)(
		e_,
		{
			description: ('PL' === s ? K.Z.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK : K.Z.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK).format(),
			onLearnMore: () => {
				window.open(D.Z.getArticleURL(W.BhN.LOCALIZED_PRICING)), y.default.track(W.rMx.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, { action: 'grandfathered_prices' });
			},
			renderVisual: () =>
				(0, t.jsx)('img', {
					alt: '',
					src: a
				})
		},
		'grandfathered-prices-item'
	);
};
function eS(e) {
	let { currentUser: s, premiumType: n, onClose: i, isDowngrade: r = !1 } = e,
		l = (0, k.Z)(),
		c = (0, Y.U)(),
		u = a.useMemo(() => {
			let e = [];
			switch ((c && (o()(null != l, 'Subscription billing country should not be null'), e.push((0, t.jsx)(eN, { country: l }))), n)) {
				case w.p9.TIER_0:
					e.push((0, t.jsx)(eE, { premiumType: n }), (0, t.jsx)(eT, { premiumType: n }));
					break;
				case w.p9.TIER_1:
					r
						? e.push(
								(0, t.jsx)(eI, {
									currentUser: s,
									premiumType: n,
									onClose: i
								}),
								(0, t.jsx)(eC, {}),
								(0, t.jsx)(em, {
									premiumType: n,
									onClose: i
								})
							)
						: e.push(
								(0, t.jsx)(eI, {
									currentUser: s,
									premiumType: n,
									onClose: i
								}),
								(0, t.jsx)(eE, { premiumType: n }),
								(0, t.jsx)(eC, {}),
								(0, t.jsx)(eT, { premiumType: n }),
								(0, t.jsx)(em, {
									premiumType: n,
									onClose: i
								})
							);
					break;
				case w.p9.TIER_2:
					r
						? e.push(
								(0, t.jsx)(eI, {
									currentUser: s,
									premiumType: n,
									onClose: i
								}),
								(0, t.jsx)(em, {
									premiumType: n,
									onClose: i
								}),
								(0, t.jsx)(eC, {})
							)
						: e.push(
								(0, t.jsx)(eI, {
									currentUser: s,
									premiumType: n,
									onClose: i
								}),
								(0, t.jsx)(eE, { premiumType: n }),
								(0, t.jsx)(em, {
									premiumType: n,
									onClose: i
								}),
								(0, t.jsx)(eC, {}),
								(0, t.jsx)(eT, { premiumType: n })
							);
			}
			return e;
		}, [n, s, i, r, c, l]);
	return (0, t.jsx)('div', {
		className: X.whatYouLoseItemContainer,
		children: u
	});
}
s.Z = function (e) {
	let { premiumType: s, titleText: n, subtitleText: i, footer: r, onClose: l, onDiscountClaim: c, onContinue: u, analyticsLocations: _, isLoading: I = !1, churnUserDiscountOffer: m = null, isDowngrade: C = !1, subtitleIcon: T, subtitleClassName: N } = e,
		S = (0, d.e7)([v.default], () => {
			let e = v.default.getCurrentUser();
			return o()(null != e, 'ProfileItem: currentUser cannot be undefined'), e;
		});
	a.useEffect(() => {
		(0, x.Z)(S.id, S.getAvatarURL(null, 80));
	}, [S]);
	let p = null != m && !I;
	return (a.useEffect(() => {
		p &&
			y.default.track(W.rMx.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
				location_stack: _,
				discount_id: null == m ? void 0 : m.discount_id
			});
	}, [p, _, m]),
	I)
		? (0, t.jsxs)(t.Fragment, {
				children: [
					(0, t.jsx)(z.Z, {
						premiumType: s,
						onClose: l
					}),
					(0, t.jsx)(E.ModalContent, {
						className: X.body,
						children: (0, t.jsx)(E.Spinner, { className: X.spinner })
					})
				]
			})
		: (0, t.jsxs)(t.Fragment, {
				children: [
					(0, t.jsx)(z.Z, {
						premiumType: s,
						onClose: l
					}),
					(0, t.jsxs)(E.ModalContent, {
						className: X.body,
						children: [
							(0, t.jsx)(L.Z, {
								size: L.Z.Sizes.SIZE_24,
								className: X.title,
								children: n
							}),
							(0, t.jsxs)('div', {
								className: N,
								children: [
									T,
									(0, t.jsx)(E.Text, {
										variant: 'text-md/normal',
										className: X.subtitle,
										children: i
									})
								]
							}),
							(0, t.jsx)(eS, {
								currentUser: S,
								premiumType: s,
								onClose: l,
								isDowngrade: C
							})
						]
					}),
					!p && (0, t.jsx)(E.ModalFooter, { children: r }),
					p &&
						(0, t.jsx)(H.Z, {
							churnUserDiscountOffer: m,
							onDiscountClaim: c,
							onContinue: u
						})
				]
			});
};
