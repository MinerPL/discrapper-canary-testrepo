n(47120);
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(780384),
	l = n(481060),
	u = n(410030),
	c = n(424218),
	d = n(380684),
	_ = n(981631),
	E = n(474936),
	f = n(689938),
	h = n(865416);
let p = [
	{
		getPerkHeading: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_EMOJI_SLOTS,
		getPerkPreviewLightTheme: () => n(414102),
		getPerkPreviewDarkTheme: () => n(614600),
		getTier0Value: () => E.HO[_.Eu4.NONE].limits.emoji,
		getTier1Value: () => E.HO[_.Eu4.TIER_1].limits.emoji,
		getTier2Value: () => E.HO[_.Eu4.TIER_2].limits.emoji,
		getTier3Value: () => E.HO[_.Eu4.TIER_3].limits.emoji
	},
	{
		getPerkHeading: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_STICKER_SLOTS,
		getPerkPreviewLightTheme: () => n(73541),
		getPerkPreviewDarkTheme: () => n(43735),
		getTier0Value: () => E.HO[_.Eu4.NONE].limits.stickers,
		getTier1Value: () => E.HO[_.Eu4.TIER_1].limits.stickers,
		getTier2Value: () => E.HO[_.Eu4.TIER_2].limits.stickers,
		getTier3Value: () => E.HO[_.Eu4.TIER_3].limits.stickers
	},
	{
		getPerkHeading: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_SOUNDBOARD_SLOTS,
		getPerkPreviewLightTheme: () => n(69098),
		getPerkPreviewDarkTheme: () => n(881755),
		getTier0Value: () => E.HO[_.Eu4.NONE].limits.soundboardSounds,
		getTier1Value: () => E.HO[_.Eu4.TIER_1].limits.soundboardSounds,
		getTier2Value: () => E.HO[_.Eu4.TIER_2].limits.soundboardSounds,
		getTier3Value: () => E.HO[_.Eu4.TIER_3].limits.soundboardSounds
	},
	{
		getPerkHeading: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_STREAM_QUALITY,
		getPerkPreviewLightTheme: () => n(989015),
		getPerkPreviewDarkTheme: () => n(815152),
		getTier0Value: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
				resolution: E.HO[_.Eu4.NONE].limits.screenShareQualityResolution,
				framerate: E.HO[_.Eu4.NONE].limits.screenShareQualityFramerate
			}),
		getTier1Value: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
				resolution: E.HO[_.Eu4.TIER_1].limits.screenShareQualityResolution,
				framerate: E.HO[_.Eu4.TIER_1].limits.screenShareQualityFramerate
			}),
		getTier2Value: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
				resolution: E.HO[_.Eu4.TIER_2].limits.screenShareQualityResolution,
				framerate: E.HO[_.Eu4.TIER_2].limits.screenShareQualityFramerate
			}),
		getTier3Value: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
				resolution: E.HO[_.Eu4.TIER_3].limits.screenShareQualityResolution,
				framerate: E.HO[_.Eu4.TIER_3].limits.screenShareQualityFramerate
			})
	},
	{
		getPerkHeading: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VOICE_QUALITY,
		getPerkPreviewLightTheme: () => n(222185),
		getPerkPreviewDarkTheme: () => n(415480),
		getTier0Value: () => f.Z.Messages.BITRATE_KBPS_NO_SPACE.format({ bitrate: E.HO[_.Eu4.NONE].limits.bitrate / 1000 }),
		getTier1Value: () =>
			f.Z.Messages.BITRATE_KBPS_NO_SPACE.format({ bitrate: E.HO[_.Eu4.TIER_1].limits.bitrate / 1000 }),
		getTier2Value: () =>
			f.Z.Messages.BITRATE_KBPS_NO_SPACE.format({ bitrate: E.HO[_.Eu4.TIER_2].limits.bitrate / 1000 }),
		getTier3Value: () =>
			f.Z.Messages.BITRATE_KBPS_NO_SPACE.format({ bitrate: E.HO[_.Eu4.TIER_3].limits.bitrate / 1000 })
	},
	{
		getPerkHeading: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_UPLOAD_SIZE_LIMIT,
		getPerkPreviewLightTheme: () => n(825588),
		getPerkPreviewDarkTheme: () => n(954499),
		getTier0Value: () =>
			(0, d.XS)()
				? (0, c.BU)(_.WKe / 1024, { useKibibytes: !0 })
				: f.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({ size: E.HO[_.Eu4.NONE].limits.fileSize / 1024 / 1024 }),
		getTier1Value: () =>
			(0, d.XS)()
				? (0, c.BU)(_.WKe / 1024, { useKibibytes: !0 })
				: f.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({ size: E.HO[_.Eu4.TIER_1].limits.fileSize / 1024 / 1024 }),
		getTier2Value: () =>
			f.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({ size: E.HO[_.Eu4.TIER_2].limits.fileSize / 1024 / 1024 }),
		getTier3Value: () =>
			f.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({ size: E.HO[_.Eu4.TIER_3].limits.fileSize / 1024 / 1024 })
	},
	{
		getPerkHeading: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VIDEO_STAGE_SEATS,
		getPerkPreviewLightTheme: () => n(241190),
		getPerkPreviewDarkTheme: () => n(879846),
		getTier0Value: () => E.HO[_.Eu4.NONE].limits.stageVideoUsers,
		getTier1Value: () => E.HO[_.Eu4.TIER_1].limits.stageVideoUsers,
		getTier2Value: () => E.HO[_.Eu4.TIER_2].limits.stageVideoUsers,
		getTier3Value: () => E.HO[_.Eu4.TIER_3].limits.stageVideoUsers
	},
	{
		getPerkHeading: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_ANIMATED_GUILD_ICON,
		getPerkPreviewLightTheme: () => n(499059),
		getPerkPreviewDarkTheme: () => n(488349),
		getTier0Value: () => !1,
		getTier1Value: () => !0,
		getTier2Value: () => !0,
		getTier3Value: () => !0
	},
	{
		getPerkHeading: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_GUILD_INVITE_BACKGROUND,
		getPerkPreviewLightTheme: () => n(136631),
		getPerkPreviewDarkTheme: () => n(692079),
		getTier0Value: () => !1,
		getTier1Value: () => !0,
		getTier2Value: () => !0,
		getTier3Value: () => !0
	},
	{
		getPerkHeading: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_GUILD_BANNER,
		getPerkPreviewLightTheme: () => n(277822),
		getPerkPreviewDarkTheme: () => n(866919),
		getTier0Value: () => !1,
		getTier1Value: () => !1,
		getTier2Value: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_GUILD_BANNER_STATIC,
		getTier3Value: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_GUILD_BANNER_ANIMATED
	},
	{
		getPerkHeading: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_CUSTOM_ROLE_ICONS,
		getPerkPreviewLightTheme: () => n(872259),
		getPerkPreviewDarkTheme: () => n(876049),
		getTier0Value: () => !1,
		getTier1Value: () => !1,
		getTier2Value: () => !0,
		getTier3Value: () => !0
	},
	{
		getPerkHeading: () =>
			f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VANITY_URL,
		getPerkPreviewLightTheme: () => n(710717),
		getPerkPreviewDarkTheme: () => n(945198),
		getTier0Value: () => !1,
		getTier1Value: () => !1,
		getTier2Value: () => !1,
		getTier3Value: () => !0
	}
];
function I(e) {
	let { children: t, className: n, tier: i } = e,
		a = i === _.Eu4.NONE ? 'text-muted' : 'header-primary',
		o = i === _.Eu4.NONE || null == i ? 'heading-xl/normal' : 'heading-xl/bold';
	return (0, r.jsxs)('th', {
		className: s()(h.columnHeading, n),
		scope: 'col',
		children: [
			(0, r.jsx)(l.Heading, {
				color: a,
				variant: o,
				children: t
			}),
			null != i &&
				(0, r.jsx)(l.Text, {
					color: a,
					variant: 'text-md/normal',
					children: f.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({ subscriptions: _.oCV[i] })
				})
		]
	});
}
function m(e) {
	let t;
	let { className: n, textVariant: i = 'text-md/bold', value: a } = e;
	if ('boolean' == typeof a) {
		let e = s()(h.booleanValueIcon, { [h.booleanValueTrue]: a });
		t = a
			? (0, r.jsx)(l.CheckmarkLargeIcon, {
					size: 'md',
					color: 'currentColor',
					className: e
				})
			: (0, r.jsx)(l.XSmallIcon, {
					size: 'md',
					color: 'currentColor',
					className: e
				});
	} else
		t = (0, r.jsx)(l.Text, {
			color: 'interactive-active',
			variant: i,
			children: a
		});
	return (0, r.jsx)('td', {
		className: s()(h.tableCell, n),
		children: t
	});
}
function T(e) {
	let { currentTier: t } = e,
		n = (function (e) {
			switch (e) {
				case _.Eu4.NONE:
				case _.Eu4.TIER_1:
					return _.Eu4.TIER_2;
				case _.Eu4.TIER_2:
				case _.Eu4.TIER_3:
					return _.Eu4.TIER_3;
				default:
					return null;
			}
		})(t);
	return null == n
		? null
		: (0, r.jsx)('div', {
				className: s()(h.recommendedTierHighlight, {
					[h.recommendedTierHighlightTier2]: n === _.Eu4.TIER_2,
					[h.recommendedTierHighlightTier3]: n === _.Eu4.TIER_3
				}),
				children: (0, r.jsx)(l.Text, {
					className: h.recommendedTierHighlightTag,
					color: 'always-white',
					variant: 'text-xs/bold',
					children:
						t === _.Eu4.TIER_3
							? f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CURRENT_TAG
							: f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_RECOMMENDED_TAG
				})
			});
}
t.Z = function (e) {
	let t = (0, u.ZP)(),
		[n, a] = i.useState(null),
		{ className: c, guild: d, hideHeading: E, hideTier0: g } = e;
	function S() {
		a(null);
	}
	return (0, r.jsxs)('div', {
		className: c,
		children: [
			!E &&
				(0, r.jsx)(l.Heading, {
					className: h.heading,
					variant: 'heading-xxl/extrabold',
					children: f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_HEADING
				}),
			(0, r.jsxs)('div', {
				className: h.tableWrapper,
				children: [
					null != d && (0, r.jsx)(T, { currentTier: d.premiumTier }),
					(0, r.jsxs)('table', {
						className: h.table,
						cellPadding: 0,
						cellSpacing: 0,
						children: [
							(0, r.jsx)('thead', {
								children: (0, r.jsxs)('tr', {
									className: h.__invalid_tableRow,
									children: [
										(0, r.jsx)(I, {
											className: h.tableRowHeading,
											children:
												f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_COLUMN_HEADING_PERKS
										}),
										!g &&
											(0, r.jsx)(I, {
												tier: _.Eu4.NONE,
												children: f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME
											}),
										(0, r.jsx)(I, {
											tier: _.Eu4.TIER_1,
											children: f.Z.Messages.PREMIUM_GUILD_TIER_1
										}),
										(0, r.jsx)(I, {
											tier: _.Eu4.TIER_2,
											children: f.Z.Messages.PREMIUM_GUILD_TIER_2
										}),
										(0, r.jsx)(I, {
											tier: _.Eu4.TIER_3,
											children: f.Z.Messages.PREMIUM_GUILD_TIER_3
										})
									]
								})
							}),
							(0, r.jsx)('tbody', {
								className: h.__invalid_tableBody,
								children: p.map((e, i) => {
									let u = n === i;
									function c() {
										a(i);
									}
									return void 0 === e.predicate
										? (0, r.jsxs)(
												'tr',
												{
													className: h.__invalid_tableRow,
													children: [
														(0, r.jsx)('th', {
															className: s()(h.tableCell, h.tableCellWrapper),
															scope: 'row',
															children: (0, r.jsx)(l.Clickable, {
																className: s()(h.tableRowHeading, h.tableCell, h.tableCellInner),
																onFocus: c,
																onBlur: S,
																onMouseEnter: c,
																onMouseLeave: S,
																children: (0, r.jsx)(l.Popout, {
																	align: 'center',
																	disablePointerEvents: !0,
																	nudgeAlignIntoViewport: !0,
																	position: 'bottom',
																	renderPopout: () =>
																		(0, r.jsx)('img', {
																			className: h.perkPreviewImage,
																			src: (0, o.wj)(t) ? e.getPerkPreviewDarkTheme() : e.getPerkPreviewLightTheme(),
																			alt: ''
																		}),
																	shouldShow: u,
																	spacing: 16,
																	children: () =>
																		(0, r.jsx)(l.Text, {
																			variant: 'text-md/normal',
																			children: e.getPerkHeading()
																		})
																})
															})
														}),
														!g &&
															(0, r.jsx)(m, {
																textVariant: 'text-md/normal',
																value: e.getTier0Value()
															}),
														(0, r.jsx)(m, { value: e.getTier1Value() }),
														(0, r.jsx)(m, { value: e.getTier2Value() }),
														(0, r.jsx)(m, { value: e.getTier3Value() })
													]
												},
												i
											)
										: null;
								})
							})
						]
					})
				]
			})
		]
	});
};
