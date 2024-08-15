var s = n(735250),
	o = n(470079),
	a = n(120356),
	r = n.n(a),
	l = n(338545),
	i = n(442837),
	c = n(950104),
	d = n(780384),
	u = n(481060),
	p = n(70097),
	x = n(703656),
	m = n(358085),
	g = n(617136),
	_ = n(272008),
	C = n(113434),
	f = n(569984),
	h = n(497505),
	E = n(918701),
	T = n(865364),
	S = n(585500),
	v = n(566078),
	A = n(340100),
	N = n(611855),
	j = n(644646),
	B = n(78826),
	b = n(670638),
	R = n(667105),
	y = n(46140),
	I = n(981631),
	k = n(701488),
	M = n(689938),
	O = n(919812);
let U = o.forwardRef(function (e, t) {
	var n, a;
	let {
			children: T,
			className: U,
			collapsedHeight: q,
			expansionSpring: w,
			isExpanded: Z,
			isExpansionAnimationComplete: P,
			onCtxMenuOpen: Q,
			onCtxMenuClose: W,
			onCtxMenuSelect: D,
			quest: H,
			useReducedMotion: V
		} = e,
		z = (0, i.e7)([f.Z], () => f.Z.isEnrolling(H.id), [H]),
		G = (0, C.B6)(H.config.expiresAt),
		F = v.r.build(H.config),
		Y = (0, C.B6)(F.rewardsExpireAt),
		K = o.useMemo(() => (0, E.nP)(H.config.assets.questBarHero), [H]),
		X = (0, R.tP)(F.application.id),
		J = F.features.has(y.S7.START_QUEST_CTA) ? g.jZ.START_QUEST : g.jZ.ACCEPT_QUEST,
		$ = F.features.has(y.S7.START_QUEST_CTA) ? M.Z.Messages.QUESTS_START_QUEST : M.Z.Messages.QUESTS_ACCEPT_QUEST,
		ee = o.useCallback(() => {
			(0, _.AH)(H.id, {
				questContent: h.jn.QUEST_BAR,
				questContentCTA: J
			}),
				F.features.has(y.S7.START_QUEST_CTA) && (0, x.uL)(I.Z5c.ACTIVITY_DETAILS(k.In), void 0);
		}, [H, J, F.features]),
		et = (0, R.hf)({
			quest: H,
			location: h.jn.QUEST_BAR
		}),
		en = o.useCallback(() => {
			(0, E.FE)(H, {
				content: h.jn.QUEST_BAR,
				ctaContent: g.jZ.OPEN_GAME_LINK
			});
		}, [H]),
		es = F.features.has(y.S7.POST_ENROLLMENT_CTA),
		eo = (0, C.Rf)(H),
		ea = (0, C.Jf)(H),
		er = null != ea ? ea.progress > 0 : eo.progressSeconds > 0,
		el = (null === (n = H.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
		ei = (null === (a = H.userStatus) || void 0 === a ? void 0 : a.completedAt) != null,
		ec = o.useMemo(() => (0, E.Xv)(H.config), [H.config]),
		ed = Z && P,
		eu = (0, E.ph)(H),
		ep = (0, S.D)({
			quest: H,
			taskDetails: eo,
			location: y.dr.QUESTS_BAR,
			questContent: h.jn.QUEST_BAR,
			thirdPartyTaskDetails: null != ea ? ea : void 0
		}),
		ex = (0, m.isWeb)(),
		em = o.useMemo(() => {
			let e = (0, d.Qg)(H.config.colors.primary, {
				base: '#ffffff',
				contrastRatio: d.S3.Text
			});
			return {
				'--custom-cta-color': e,
				'--custom-cta-color-hover': (0, c.r5)(e, 0.3),
				'--custom-cta-color-active': (0, c.r5)(e, 0.35)
			};
		}, [H.config.colors.primary]);
	return (0, s.jsxs)(l.animated.div, {
		className: r()(U, O.contentExpanded, { [O.contentInteractable]: ed }),
		style: {
			backgroundColor: H.config.colors.secondary,
			transform: ei
				? void 0
				: (0, l.to)(
						[
							w.to({
								range: [0, 1],
								output: [0, -100]
							}),
							w.to({
								range: [0, 1],
								output: [0, q]
							})
						],
						(e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
					)
		},
		children: [
			T,
			(0, s.jsx)('div', {
				'aria-hidden': !ed,
				children: el
					? (0, s.jsxs)('div', {
							className: O.questAcceptedContent,
							ref: t,
							children: [
								(0, s.jsxs)('div', {
									className: O.utils,
									children: [
										(0, s.jsxs)('div', {
											className: O.questAcceptedContentHeading,
											children: [
												(0, s.jsx)(j.Z, {
													className: O.questProgressRewardTile,
													learnMoreStyle: 'icon',
													quest: H,
													questContent: h.jn.QUEST_BAR,
													location: y.dr.QUESTS_BAR
												}),
												(0, s.jsxs)('div', {
													children: [
														(0, s.jsx)(u.Heading, {
															color: 'always-white',
															variant: 'heading-sm/semibold',
															children: (0, E.AV)({
																quest: H,
																taskDetails: eo,
																thirdPartyTaskDetails: null != ea ? ea : void 0
															})
														}),
														(0, s.jsx)(u.Text, {
															className: O.questAcceptedContentCopySubheading,
															color: 'always-white',
															variant: 'text-xxs/normal',
															children: ei
																? M.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: Y })
																: M.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: G })
														})
													]
												})
											]
										}),
										(0, s.jsx)(b.r, {
											onOpen: Q,
											onClose: W,
											onSelect: D,
											questContent: h.jn.QUEST_BAR,
											quest: H,
											shouldShowDisclosure: !1,
											showShareLink: !0,
											children: (e) =>
												(0, s.jsx)(u.Clickable, {
													...e,
													className: O.submenuWrapper,
													'aria-label': M.Z.Messages.ACTIONS,
													children: (0, s.jsx)(u.MoreHorizontalIcon, {
														size: 'md',
														color: 'currentColor',
														className: O.submenuIcon
													})
												})
										})
									]
								}),
								ei
									? (0, s.jsx)(u.Button, {
											className: r()(O.cta, O.ctaClaimReward),
											style: ec ? em : void 0,
											color: u.Button.Colors.CUSTOM,
											fullWidth: !0,
											onClick: et,
											size: u.Button.Sizes.NONE,
											children: M.Z.Messages.QUESTS_CLAIM_REWARD
										})
									: (0, s.jsx)(u.Text, {
											className: O.description,
											color: 'always-white',
											variant: 'text-xs/normal',
											children: ep
										}),
								(0, s.jsx)(A.Z, { quest: H }),
								!ex && !er && !X && es && (0, s.jsx)(L, { onClick: ed ? en : void 0 })
							]
						})
					: (0, s.jsxs)('div', {
							children: [
								(0, s.jsxs)('div', {
									className: O.questPromoContent,
									ref: t,
									children: [
										(0, s.jsxs)('div', {
											className: O.utils,
											children: [
												(0, s.jsx)(N.Z, { color: 'always-white' }),
												(0, s.jsx)(b.r, {
													onOpen: Q,
													onClose: W,
													onSelect: D,
													questContent: h.jn.QUEST_BAR,
													quest: H,
													shouldShowDisclosure: !0,
													showShareLink: !0,
													children: (e) =>
														(0, s.jsx)(u.Clickable, {
															...e,
															className: O.submenuWrapper,
															'aria-label': M.Z.Messages.ACTIONS,
															children: (0, s.jsx)(u.MoreHorizontalIcon, {
																size: 'md',
																color: 'currentColor',
																className: O.submenuIcon
															})
														})
												})
											]
										}),
										(0, s.jsxs)('div', {
											className: O.details,
											children: [
												(0, s.jsx)(j.Z, {
													className: O.rewardTile,
													learnMoreStyle: 'text',
													quest: H,
													questContent: h.jn.QUEST_BAR,
													location: y.dr.QUESTS_BAR
												}),
												(0, s.jsx)(u.Heading, {
													className: O.title,
													color: 'always-white',
													variant: 'heading-md/medium',
													children: M.Z.Messages.QUESTS_TITLE.format({ questName: H.config.messages.questName })
												}),
												(0, s.jsx)(u.Text, {
													className: O.description,
													color: 'always-white',
													variant: 'text-sm/normal',
													children: ep
												})
											]
										}),
										(0, s.jsx)(u.Button, {
											className: O.cta,
											style: '1232852290197655573' !== H.id ? em : void 0,
											color: u.Button.Colors.CUSTOM,
											fullWidth: !0,
											onClick: ed ? ee : void 0,
											size: u.Button.Sizes.NONE,
											submitting: z,
											children: $
										})
									]
								}),
								(0, s.jsx)('div', {
									className: O.heroAssetWrapper,
									style: { color: H.config.colors.secondary },
									children: K
										? (0, s.jsx)(B.Fl, {
												id: 'QuestBarContentExpanded_heroAnimated',
												children: (e) =>
													(0, s.jsx)(p.Z, {
														ref: e,
														autoPlay: !V,
														loop: !0,
														muted: !0,
														playsInline: !0,
														className: O.heroAsset,
														controls: !1,
														children: (0, s.jsx)('source', {
															src: eu,
															type: (0, E.mN)(eu)
														})
													})
											})
										: (0, s.jsx)(B.Fl, {
												id: 'QuestBarContentExpanded_heroStatic',
												children: (e) =>
													(0, s.jsx)('img', {
														ref: e,
														alt: '',
														className: O.heroAsset,
														src: eu
													})
											})
								})
							]
						})
			})
		]
	});
});
function L(e) {
	let { style: t, onClick: n } = e;
	return (0, T.O)({
		location: y.dr.QUESTS_BAR,
		autoTrackExposure: !0
	})
		? (0, s.jsx)(u.Button, {
				className: O.cta,
				style: t,
				color: u.Button.Colors.CUSTOM,
				fullWidth: !0,
				onClick: n,
				size: u.Button.Sizes.NONE,
				children: M.Z.Messages.QUESTS_GET_THIS_GAME
			})
		: null;
}
t.Z = U;
