var i = n(735250);
n(470079);
var a = n(120356),
	s = n.n(a),
	r = n(442837),
	l = n(481060),
	o = n(607070),
	c = n(706454),
	u = n(63063),
	d = n(930153),
	_ = n(617136),
	E = n(113434),
	I = n(569984),
	m = n(497505),
	T = n(918701),
	h = n(566078),
	N = n(340100),
	f = n(644646),
	C = n(667105),
	p = n(341907),
	g = n(128535),
	S = n(87894),
	A = n(2660),
	R = n(46140),
	x = n(981631),
	O = n(689938),
	M = n(315010),
	v = n(789002);
let L = (e, t, n) => ((0, S.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium');
function Z(e) {
	let { containerSize: t, onClick: n, children: a, tabIndex: s } = e;
	return 'xs' === t
		? (0, i.jsx)(l.Clickable, {
				tabIndex: s,
				className: M.learnMoreLink,
				tag: 'span',
				onClick: n,
				children: (0, i.jsx)(l.Text, {
					variant: 'text-sm/medium',
					color: 'text-link',
					children: a
				})
			})
		: (0, i.jsx)(l.Button, {
				tabIndex: s,
				wrapperClassName: M.ctaButtonWrapper,
				color: l.ButtonColors.PRIMARY,
				onClick: n,
				children: a
			});
}
function P(e) {
	let { quest: t, progressState: n, isCollectibleQuest: a, location: s, questContentPosition: c, inGiftInventory: u } = e,
		d = n >= E.OH.COMPLETED,
		_ = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
		m = (0, r.e7)([I.Z], () => I.Z.isEnrolling(t.id)),
		h = (0, T.zK)(t, R.S7.IN_HOUSE_CONSOLE_QUEST),
		N = (0, C.Ks)({
			progressState: n,
			quest: t,
			isInHouseQuest: h,
			location: s,
			isCollectibleQuest: a,
			questContentPosition: c,
			inGiftInventory: u
		}),
		f = h && u && d,
		p = f ? M.inHouseButton : l.ButtonColors.BRAND,
		g = d && !_ ? l.ShinyButton : l.Button;
	return (0, i.jsx)(
		l.Tooltip,
		{
			text: N.tooltipText,
			tooltipContentClassName: M.ctaTooltipText,
			children: (e) => {
				var t;
				return (0, i.jsx)(g, {
					...e,
					wrapperClassName: M.ctaButtonWrapper,
					color: p,
					disabled: null == N.onClick,
					submitting: m,
					onClick: null !== (t = N.onClick) && void 0 !== t ? t : () => {},
					children: (0, i.jsxs)('div', {
						className: M.ctaButtonInner,
						children: [
							f &&
								(0, i.jsx)('img', {
									src: v,
									alt: '',
									className: M.inHouseIcon
								}),
							N.text
						]
					})
				});
			}
		},
		N.tooltipText
	);
}
t.Z = (e) => {
	let { quest: t, location: n, size: a, isFocused: o, isQuestExpired: I, isExpanded: C, isAnimating: v, contentPosition: b } = e,
		D = (0, E._Q)(t),
		j = D >= E.OH.ACCEPTED,
		U = D >= E.OH.COMPLETED,
		y = D >= E.OH.CLAIMED,
		B = (0, T.Xv)(t.config),
		k = (0, S.uq)(n),
		G = n === m.jn.QUESTS_EMBED,
		F = C || v,
		w = j && !y && k,
		V = (0, E.t5)(t, R.dr.QUESTS_CARD, n),
		{ xboxAndPlaystationAccounts: H } = (0, E.z6)(),
		Y = (0, r.e7)([c.default], () => c.default.locale),
		W = (0, E.z)(t),
		K = k && B,
		z = I && !U,
		Q = H.length > 0 && k && (0, T.$J)(t) && j && !U && !W,
		q = (0, i.jsx)(f.Z, {
			autoplay: o,
			className: s()(M.gridImg, {
				[M.questRewardGiftInventory]: k && 'lg' === a,
				[M.questRewardEmbed]: G && 'lg' === a,
				[M.questRewardEmbedSm]: 'sm' === a,
				[M.questRewardEmbedXs]: 'xs' === a
			}),
			learnMoreStyle: k ? null : 'text',
			location: R.dr.QUESTS_CARD,
			quest: t,
			questContent: n,
			questContentPosition: b
		});
	return (0, i.jsxs)('div', {
		className: M.root,
		children: [
			(0, i.jsxs)('div', {
				className: s()(M.outerContainer, {
					[M.outerContainerSm]: 'sm' === a,
					[M.outerContainerXs]: 'xs' === a,
					[M.outerContainerNoProgress]: !w
				}),
				style: { visibility: F ? 'inherit' : 'hidden' },
				'aria-hidden': !F,
				children: [
					(0, i.jsx)(l.Tooltip, {
						text: z ? O.Z.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
						tooltipContentClassName: M.rewardTileExpirationTooltip,
						shouldShow: z,
						children: (e) =>
							(0, i.jsxs)('div', {
								className: M.rewardTileWrapper,
								...e,
								children: [
									I &&
										(0, i.jsx)('div', {
											className: M.rewardTileExpired,
											children: (0, i.jsx)(l.CircleWarningIcon, { color: l.tokens.colors.WHITE })
										}),
									K
										? (0, i.jsx)(A.Z, {
												questConfig: t.config,
												fallback: q,
												isFocused: o
											})
										: q
								]
							})
					}),
					(0, i.jsxs)('div', {
						className: s()(M.gridText, M.taskDetails),
						children: [
							(0, i.jsx)(l.Text, {
								variant: L(n, a, j),
								className: M.taskInstructions,
								children: I ? O.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({ questName: t.config.messages.questName }) : V
							}),
							(0, i.jsx)(l.Text, {
								variant: 'lg' === a ? 'text-sm/medium' : 'text-xs/medium',
								color: 'text-muted',
								children: (function (e) {
									var t, n, i, a, s, r;
									let { quest: l, location: o, locale: c, isQuestExpired: _ } = e,
										I = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
										m = I && (null === (n = l.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
										N = (0, T.zK)(l, R.S7.IN_HOUSE_CONSOLE_QUEST),
										f = (0, S.uq)(o),
										C = (0, E.B6)(null === (i = l.userStatus) || void 0 === i ? void 0 : i.completedAt, {
											year: 'numeric',
											month: 'long',
											day: 'numeric'
										}),
										p = (0, T.oo)({ quest: l }),
										g = h.r.build(l.config).defaultReward.messages.nameWithArticle,
										A = (0, T.Kr)(l.config),
										M = (0, T.b7)(l);
									if (I && N && f) return O.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({ date: C });
									if (m) {
										let e = p
												? (0, T.o9)({
														quest: l,
														idx: null === (a = l.userStatus) || void 0 === a ? void 0 : a.claimedTier
													})
												: null,
											t = null !== (s = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== s ? s : null;
										return null != t
											? O.Z.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
													reward: t,
													date: C
												})
											: O.Z.Messages.QUEST_REWARD_COMPLETED.format({
													reward: g,
													date: C
												});
									}
									if (I)
										return p
											? O.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({ date: C })
											: O.Z.Messages.QUEST_REWARD_COMPLETED.format({
													reward: g,
													date: C
												});
									let v = p
										? (0, T.o9)({
												quest: l,
												idx: 0
											})
										: null;
									return _
										? O.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({ reward: null !== (r = null == v ? void 0 : v.messages.nameWithArticle) && void 0 !== r ? r : g })
										: null != v && null != v.approximateCount
											? O.Z.Messages.QUEST_REWARD_TIERED.format({
													maxReward: v.messages.nameWithArticle,
													maxRewardCount: (0, d.Bs)(v.approximateCount, c),
													helpCenterLink: u.Z.getArticleURL(x.BhN.QUESTS_LEARN_MORE)
												})
											: null != A
												? O.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
														reward: g,
														duration: A
													})
												: null != M
													? M.description
													: O.Z.Messages.QUEST_REWARD.format({ reward: g });
								})({
									quest: t,
									location: n,
									locale: Y,
									isQuestExpired: I
								})
							})
						]
					}),
					(0, i.jsxs)('div', {
						className: s()(M.ctaButtonContainer, M.gridCtaButtons),
						children: [
							!k &&
								(0, i.jsx)(Z, {
									containerSize: a,
									onClick: () => {
										(0, p.navigateToQuestHome)(R.dr.QUESTS_CARD, t.id),
											(0, _._3)({
												questId: t.id,
												questContent: n,
												questContentPosition: b,
												questContentCTA: _.jZ.LEARN_MORE
											});
									},
									children: O.Z.Messages.QUESTS_LEARN_MORE_V2
								}),
							I && !U
								? null
								: (0, i.jsx)(P, {
										quest: t,
										progressState: D,
										isCollectibleQuest: B,
										location: n,
										inGiftInventory: k
									})
						]
					}),
					w &&
						(0, i.jsx)(N.Z, {
							className: M.gridProgressBar,
							color: U ? l.tokens.colors.TEXT_POSITIVE : l.tokens.colors.BG_BRAND,
							quest: t,
							isInventory: k
						})
				]
			}),
			Q &&
				(0, i.jsxs)('div', {
					className: M.microphoneContainer,
					children: [
						(0, i.jsx)('div', { className: M.separator }),
						(0, i.jsx)(g.Z, {
							quest: t,
							location: n
						})
					]
				})
		]
	});
};
