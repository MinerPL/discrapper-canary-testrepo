var s = n(735250);
n(470079);
var o = n(338545),
	a = n(481060),
	r = n(497505),
	l = n(302245),
	i = n(644646),
	c = n(46140),
	d = n(689938),
	u = n(627516);
t.Z = (e) => {
	let { quest: t, expansionSpring: n, isFullyExpanded: p, partnerBranding: x, useReducedMotion: m } = e,
		{ enabled: g, variant: _ } = l.Hp.useExperiment({ location: c.dr.QUESTS_BAR });
	if (!g) return null;
	let C = null;
	return (_ === l.PW.REWARD_AVAILABLE
		? (C = d.Z.Messages.REWARD_AVAILABLE)
		: _ === l.PW.EARN_A_REWARD
			? (C = d.Z.Messages.EARN_A_REWARD)
			: _ === l.PW.EARN_A_REWARD_EXCLAMATION && (C = d.Z.Messages.EARN_A_REWARD_EXCLAIMATION),
	null == C)
		? null
		: (0, s.jsxs)(s.Fragment, {
				children: [
					(0, s.jsx)(o.animated.div, {
						className: u.rewardTileSpacer,
						style: {
							transform: (0, o.to)(
								[
									n.to({
										range: [0, 1],
										output: [1, 24 / 38]
									})
								],
								(e) => 'scale('.concat(e, ')')
							)
						}
					}),
					(0, s.jsx)(o.animated.div, {
						className: u.rewardTileContainer,
						style: {
							transform: (0, o.to)(
								[
									n.to({
										range: [0, 1],
										output: [-12, 0]
									}),
									n.to({
										range: [0, 1],
										output: [0, 92]
									}),
									n.to({
										range: [1, 0],
										output: [1, 38 / 64]
									})
								],
								(e, t, n) => 'translate('.concat(e, 'px, ').concat(t, 'px) scale(').concat(n, ')')
							)
						},
						children: (0, s.jsx)(i.Z, {
							learnMoreStyle: 'text',
							quest: t,
							questContent: r.jn.QUEST_BAR_V2,
							location: c.dr.QUESTS_BAR,
							autoplay: !m
						})
					}),
					(0, s.jsxs)('div', {
						className: u.rewardHighlightLogoCTA,
						children: [
							(0, s.jsx)(o.animated.div, {
								className: u.partnerBranding,
								style: {
									opacity: n.to({
										range: [0, 1],
										output: [1, p ? 1 : 0.8]
									}),
									transform: (0, o.to)(
										[
											n.to({
												range: [0, 1],
												output: [0, -42]
											}),
											n.to({
												range: [0, 1],
												output: [0, 10]
											})
										],
										(e, t) => 'translate('.concat(e, 'px, ').concat(t, 'px)')
									)
								},
								children: x
							}),
							(0, s.jsx)(o.animated.div, {
								className: u.rewardHighlightCTA,
								style: {
									opacity: n.to({
										range: [0, 1],
										output: [0.7, 0]
									})
								},
								children: (0, s.jsx)(a.Text, {
									color: 'always-white',
									variant: 'text-xs/medium',
									children: C
								})
							})
						]
					}),
					(0, s.jsx)(o.animated.div, {
						className: u.giftBoxIcon,
						style: {
							opacity: n.to({
								range: [0, 1],
								output: [1, 0]
							})
						},
						children: (0, s.jsx)(a.GiftIcon, {
							size: 'md',
							color: a.tokens.colors.WHITE
						})
					})
				]
			});
};
