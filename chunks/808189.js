var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(481060),
	o = n(535322),
	l = n(31698),
	u = n(528771),
	c = n(267642),
	d = n(981631),
	_ = n(474936),
	E = n(689938),
	f = n(380436);
let h = [
	{
		tier: d.Eu4.TIER_1,
		perks: [
			{
				icon: s.ReactionIcon,
				getCopy: () =>
					E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_EMOJI.format({
						numEmojiSlots: _.HO[d.Eu4.TIER_1].limits.emoji
					})
			},
			{
				icon: s.SoundboardIcon,
				getCopy: () =>
					E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_SOUNDS.format({
						numSoundboardSlots: _.HO[d.Eu4.TIER_1].limits.soundboardSounds
					}),
				isNew: !0
			},
			{
				icon: s.GifIcon,
				getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_ICON
			},
			{
				icon: s.VoiceNormalIcon,
				getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_AUDIO_QUALITY
			}
		]
	},
	{
		tier: d.Eu4.TIER_2,
		perks: [
			{
				icon: s.ScreenArrowIcon,
				getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STREAM_QUALITY
			},
			{
				icon: s.UploadIcon,
				getCopy: () =>
					E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({
						uploadSizeLimit: E.Z.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_2
					})
			},
			{
				icon: s.ReactionIcon,
				getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ROLE_ICONS
			},
			{
				icon: s.ServerGridIcon,
				getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_GUILD_BANNER
			}
		]
	},
	{
		tier: d.Eu4.TIER_3,
		perks: [
			{
				icon: s.LinkIcon,
				getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_VANITY_URL
			},
			{
				icon: s.UploadIcon,
				getCopy: () =>
					E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({
						uploadSizeLimit: E.Z.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_3
					})
			},
			{
				icon: s.VoiceNormalIcon,
				getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_HIGHEST_AUDIO_QUALITY
			},
			{
				icon: s.GifIcon,
				getCopy: () => E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_BANNER
			},
			{
				icon: s.StageIcon,
				getCopy: () =>
					E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STAGE_SEATS_AND_MORE.format({ numStageSeats: d.RcX })
			}
		]
	}
];
t.Z = function (e) {
	let { guild: t } = e;
	return (0, r.jsx)('div', {
		className: f.tierCards,
		children: h.map((e) =>
			(0, r.jsxs)(
				'div',
				{
					className: f.tierCard,
					children: [
						e.tier === d.Eu4.TIER_3 &&
							(0, r.jsxs)(r.Fragment, {
								children: [
									(0, r.jsx)('div', { className: a()(f.tierCardBorderHighlight, f.tierCardBorderHighlightTopRight) }),
									(0, r.jsx)('div', { className: a()(f.tierCardBorderHighlight, f.tierCardBorderHighlightBottomLeft) }),
									(0, r.jsxs)('div', {
										className: a()(f.tierCardSparkleHighlight, f.tierCardSparkleHighlightTopRight),
										children: [
											(0, r.jsx)(u.Z, { className: f.tierCardSparkle1 }),
											(0, r.jsx)(u.Z, { className: f.tierCardSparkle2 }),
											(0, r.jsx)(l.Z, { className: f.tierCardSparkle3 })
										]
									}),
									(0, r.jsx)('div', {
										className: a()(f.tierCardSparkleHighlight, f.tierCardSparkleHighlightBottomLeft),
										children: (0, r.jsx)(u.Z, { className: f.tierCardSparkle1 })
									})
								]
							}),
						e.tier === t.premiumTier &&
							(0, r.jsx)(s.Text, {
								className: f.tierCardCurrentTier,
								tag: 'div',
								variant: 'text-xs/semibold',
								color: 'always-white',
								children: E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_CURRENT_TIER_LABEL
							}),
						(0, r.jsxs)('div', {
							className: f.tierCardHeader,
							children: [
								(0, r.jsx)(s.Heading, {
									className: f.tierCardHeading,
									variant: 'heading-xxl/semibold',
									color: 'always-white',
									children: (0, c.nW)(e.tier, { useLevels: !1 })
								}),
								(0, r.jsx)(s.Text, {
									className: f.tierCardBoostRequirement,
									variant: 'text-md/normal',
									color: 'always-white',
									children: E.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTS_REQUIRED.format({
										numBoostsRequired: d.oCV[e.tier]
									})
								})
							]
						}),
						(0, r.jsx)('ul', {
							className: f.tierCardList,
							children: e.perks.map((e, t) =>
								null == e.predicate || e.predicate()
									? (0, r.jsxs)(
											'li',
											{
												className: f.tierCardPerkRow,
												children: [
													(0, r.jsxs)(s.Text, {
														className: f.tierCardListItem,
														variant: 'text-md/normal',
														color: 'always-white',
														children: [(0, r.jsx)(e.icon, { className: f.tierCardListIcon }), e.getCopy()]
													}),
													e.isNew
														? (0, r.jsx)(o.Z, {
																className: f.tierCardNewFeatureBadge,
																forceUseColorForSparkles: !0,
																shouldInheritBackgroundColor: !0,
																shouldInheritTextColor: !0
															})
														: null
												]
											},
											t
										)
									: null
							)
						})
					]
				},
				e.tier
			)
		)
	});
};
