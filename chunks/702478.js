n(47120);
var s = n(735250),
	a = n(470079),
	i = n(772848),
	r = n(640358),
	l = n(442837),
	o = n(544891),
	c = n(704215),
	d = n(692547),
	u = n(481060),
	_ = n(841470),
	I = n(605236),
	E = n(142497),
	T = n(690221),
	m = n(706454),
	N = n(650774),
	S = n(430824),
	h = n(626135),
	g = n(771212),
	C = n(434404),
	x = n(146596),
	p = n(559368),
	R = n(999382),
	f = n(981631),
	L = n(921944),
	O = n(190378),
	A = n(689938),
	M = n(897563),
	D = n(287837),
	v = n(573189),
	j = n(899947),
	Z = n(117831),
	b = n(996737),
	U = n(21846),
	G = n(280632),
	P = n(44234),
	B = n(117428);
let y = function (e, t, n) {
		let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
			a = null;
		return (
			null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (a = A.Z.Messages.GUILD_ANALYTICS_METRICS_LAST_WEEK) : (a = A.Z.Messages.PERCENTAGE_SINCE_LAST_WEEK.format({ percentage: (0, r.o)(Math.abs(t), n) })),
			{
				localizedNumber: null != e ? ''.concat((0, r.o)(e, n)).concat(s ? '%' : '') : A.Z.Messages.NOT_AVAILABLE,
				subtext: a,
				isTrendingUp: t > 0,
				isTrendingDown: t < 0
			}
		);
	},
	F = function (e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
		return t || e === f.evJ.NOT_ENOUGH_GUILD_MEMBERS
			? (0, s.jsx)(u.FormErrorBlock, {
					icon: u.CircleInformationIcon,
					className: M.notEnoughMembersError,
					backgroundColor: u.FormErrorBlockColors.BACKGROUND_ACCENT,
					children: A.Z.Messages.GUILD_ANALYTICS_ERROR_GUILD_SIZE
				})
			: null == e
				? null
				: (0, s.jsx)(u.FormErrorBlock, {
						backgroundColor: u.FormErrorBlockColors.BACKGROUND_ACCENT,
						children: A.Z.Messages.GUILD_ANALYTICS_ERROR_MESSAGE
					});
	};
function k(e) {
	h.default.track(f.rMx.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, { guild_id: e });
	let t = null == e ? f.E07.DEVELOPER_PORTAL : f.E07.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
		n = (0, i.Z)();
	return o.tn
		.post({
			url: f.ANM.HANDOFF,
			body: { key: n },
			oldFormErrors: !0
		})
		.then(
			(e) => {
				let s = e.body.handoff_token;
				window.open(f.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(n, s, t));
			},
			() => {
				window.open(t);
			}
		);
}
let w = () => {
	let [e, t] = a.useState(!1),
		n = (0, l.e7)([R.Z], () => R.Z.getGuildId());
	return (0, s.jsx)(u.Button, {
		className: M.developerPortalCta,
		onClick: () => {
			t(!0),
				k(n).then(() => {
					t(!1);
				});
		},
		submitting: e,
		children: A.Z.Messages.GUILD_ANALYICS_DEVELOPERS_BUTTON
	});
};
function H(e) {
	let { guildId: t } = e,
		{ hasAccessRate: n, accessRate: i } = (0, l.cj)([p.Z], () => p.Z.getMemberInsights(t)),
		r = (0, l.e7)([N.Z], () => {
			var e;
			return null !== (e = N.Z.getMemberCount()) && void 0 !== e ? e : 0;
		}),
		{ showAccessRate: o } = (0, g.eA)(t, !n);
	if (
		(a.useEffect(() => {
			o && ((0, I.kk)(c.z.GUILD_INSIGHTS_ACCESS_RATE_NEW), (0, I.EW)(c.z.GUILD_INSIGHTS_ACCESS_RATE_NEW, { dismissAction: L.L.AUTO }));
		}, [o]),
		!o || !n || null == i)
	)
		return null;
	let _ = 10 * Math.ceil((1 - i) * 10),
		E = B,
		m = null,
		S = null;
	return (
		i >= 0.9
			? ((E = B),
				(m = A.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_VERY_GOOD.format({
					ratingHook: (e, t) =>
						(0, s.jsx)(
							'span',
							{
								className: M.ratingVeryGood,
								children: e
							},
							t
						)
				})),
				(S = A.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_LESS.format({ accessRate: 10 })))
			: i >= (r > 10000 ? 0.7 : 0.8)
				? ((E = G),
					(m = A.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_GOOD.format({
						ratingHook: (e, t) =>
							(0, s.jsx)(
								'span',
								{
									className: M.ratingGood,
									children: e
								},
								t
							)
					})),
					(S = A.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({ accessRate: _ })))
				: i >= 0.5
					? ((E = P),
						(m = A.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_NEUTRAL.format({
							ratingHook: (e, t) =>
								(0, s.jsx)(
									'span',
									{
										className: M.ratingNeutral,
										children: e
									},
									t
								)
						})),
						(S = A.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({ accessRate: _ })))
					: ((E = U),
						(m = A.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_BAD.format({
							ratingHook: (e, t) =>
								(0, s.jsx)(
									'span',
									{
										className: M.ratingBad,
										children: e
									},
									t
								)
						})),
						(S = 100 === _ ? A.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({ accessRate: _ }) : A.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_MORE.format({ accessRate: _ }))),
		(0, s.jsxs)(s.Fragment, {
			children: [
				(0, s.jsxs)(u.Heading, {
					variant: 'heading-md/semibold',
					className: M.insightsTitle,
					children: [
						A.Z.Messages.MEMBER_INSIGHTS_SERVER_ACCESS,
						(0, s.jsx)(u.TextBadge, {
							text: A.Z.Messages.BETA,
							color: d.Z.unsafe_rawColors.BRAND_500.css,
							className: M.betaTag
						})
					]
				}),
				(0, s.jsxs)('div', {
					className: M.memberInsightsContainer,
					children: [
						(0, s.jsxs)('div', {
							className: M.insightsHeader,
							children: [
								(0, s.jsx)('img', {
									alt: '',
									className: M.insightsIcon,
									src: E
								}),
								(0, s.jsxs)('div', {
									children: [
										(0, s.jsx)(u.Text, {
											variant: 'text-md/semibold',
											className: M.title,
											children: m
										}),
										(0, s.jsxs)(u.Text, {
											className: M.description,
											variant: 'text-sm/normal',
											children: [
												S,
												(0, s.jsx)(u.TooltipContainer, {
													text: A.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATE_TOOLTIP,
													className: M.insightsTooltip,
													children: (0, s.jsx)(u.CircleInformationIcon, {
														size: 'xs',
														color: 'currentColor',
														className: M.insightsTooltipIcon
													})
												})
											]
										})
									]
								})
							]
						}),
						i < 0.9
							? (0, s.jsxs)(s.Fragment, {
									children: [
										(0, s.jsx)('div', { className: M.divider }),
										(0, s.jsx)(u.Text, {
											className: M.tips,
											variant: 'text-sm/semibold',
											children: A.Z.Messages.MEMBER_INSIGHTS_TIPS.format()
										}),
										(0, s.jsxs)('div', {
											className: M.insightsActions,
											children: [
												(0, s.jsxs)('div', {
													className: M.insightAction,
													children: [
														(0, s.jsx)('img', {
															alt: '',
															className: M.actionIcon,
															src: j
														}),
														(0, s.jsx)(u.Text, {
															className: M.actionText,
															variant: 'text-sm/normal',
															children: A.Z.Messages.ACCESS_RATE_ACTION_SIMPLIFY
														})
													]
												}),
												(0, s.jsx)('div', { className: M.dividerInline }),
												(0, s.jsxs)('div', {
													className: M.insightAction,
													children: [
														(0, s.jsx)('img', {
															alt: '',
															className: M.actionIcon,
															src: Z
														}),
														(0, s.jsx)(u.Text, {
															className: M.actionText,
															variant: 'text-sm/normal',
															children: A.Z.Messages.ACCESS_RATE_ACTION_EXTRA_STEPS
														})
													]
												}),
												(0, s.jsx)('div', { className: M.dividerInline }),
												(0, s.jsxs)('div', {
													className: M.insightAction,
													children: [
														(0, s.jsx)('img', {
															alt: '',
															className: M.actionIcon,
															src: v
														}),
														(0, s.jsx)(u.Text, {
															className: M.actionText,
															variant: 'text-sm/normal',
															children: A.Z.Messages.ACCESS_RATE_ACTION_BOTS.format({
																integrationsHook: (e, t) =>
																	(0, s.jsx)(
																		T.Z,
																		{
																			onClick: () => C.Z.setSection(f.pNK.INTEGRATIONS),
																			className: M.link,
																			children: e
																		},
																		t
																	)
															})
														})
													]
												}),
												(0, s.jsx)('div', { className: M.dividerInline }),
												(0, s.jsxs)('div', {
													className: M.insightAction,
													children: [
														(0, s.jsx)('img', {
															alt: '',
															className: M.actionIcon,
															src: D
														}),
														(0, s.jsx)(u.Text, {
															className: M.actionText,
															variant: 'text-sm/normal',
															children: A.Z.Messages.ACCESS_RATE_ACTION_AUDIT
														})
													]
												})
											]
										})
									]
								})
							: (0, s.jsx)('div', {
									className: M.insightsActions,
									children: (0, s.jsxs)('div', {
										className: M.insightAction,
										children: [
											(0, s.jsx)('img', {
												alt: '',
												className: M.actionIcon,
												src: b
											}),
											(0, s.jsx)(u.Text, {
												className: M.actionText,
												variant: 'text-sm/normal',
												children: A.Z.Messages.ACCESS_RATE_ACTION_SUCCESS.format({
													insightsHook: (e, n) =>
														(0, s.jsx)(
															T.Z,
															{
																onClick: () => k(t),
																className: M.link,
																children: e
															},
															n
														)
												})
											})
										]
									})
								})
					]
				}),
				(0, s.jsx)('div', { className: M.divider }),
				(0, s.jsx)(u.Heading, {
					variant: 'heading-md/semibold',
					className: M.insightsTitle,
					children: A.Z.Messages.SERVER_INSIGHTS
				})
			]
		})
	);
}
t.Z = () => {
	let e = (0, l.e7)([R.Z], () => R.Z.getGuildId()),
		t = (0, l.e7)([N.Z], () => N.Z.getMemberCount(e)),
		n = (0, l.e7)([S.Z], () => S.Z.getGuild(e)),
		i = (0, l.e7)([m.default], () => m.default.locale),
		{ analytics: r, errorCode: o } = (0, l.cj)([p.Z], () => ({
			analytics: null != e ? p.Z.getOverviewAnalytics(e) : null,
			errorCode: p.Z.getError()
		})),
		c = null == t || null == n || (null != t && t < 500 && null != n && !n.hasFeature(f.oNc.PARTNERED) && !n.hasFeature(f.oNc.VERIFIED));
	a.useEffect(() => {
		null != e && !c && ((0, x.Vk)(e), (0, x.SR)(e), (0, x.xl)(e));
	}, [e, c]),
		a.useEffect(() => {
			(0, E.Kw)(O.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU);
		}, []);
	let d =
		null != r
			? (0, s.jsx)('div', {
					className: M.__invalid_guildAnalyticsOverviewWrapper,
					children: (0, s.jsxs)('div', {
						className: M.overviewData,
						children: [
							(0, s.jsx)(_.Z, {
								title: A.Z.Messages.WEEKLY_VISITORS,
								tooltipText: A.Z.Messages.VISITORS_INFO,
								...y(r.visitors, r.visitorsChange, i)
							}),
							(0, s.jsx)(_.Z, {
								title: A.Z.Messages.WEEKLY_COMMUNICATORS,
								tooltipText: A.Z.Messages.COMMUNICATORS_INFO,
								...y(r.communicators, r.communicatorsChange, i)
							}),
							(0, s.jsx)(_.Z, {
								title: A.Z.Messages.WEEKLY_NEW_MEMBERS,
								...y(r.newMembers, r.newMembersChange, i)
							}),
							(0, s.jsx)(_.Z, {
								title: A.Z.Messages.WEEKLY_NEW_MEMBER_RETENTION,
								tooltipText: A.Z.Messages.NEW_MEMBER_RETENTION_INFO,
								...y(r.pctRetained, r.pctRetainedChange, i, !0)
							})
						]
					})
				})
			: null;
	return (0, s.jsxs)(u.FormSection, {
		tag: u.FormTitleTags.H1,
		title: A.Z.Messages.SERVER_INSIGHTS,
		children: [
			(0, s.jsx)(u.FormText, {
				type: u.FormTextTypes.DESCRIPTION,
				children: A.Z.Messages.GUILD_ANALYTICS_DESCRIPTION.format()
			}),
			F(o, c),
			null != e ? (0, s.jsx)(H, { guildId: e }) : null,
			(0, s.jsxs)('div', {
				className: M.developerPortalCtaWrapper,
				children: [
					(0, s.jsx)('div', { className: M.placeholderImage }),
					(0, s.jsx)(u.Text, {
						className: M.developerPortalCtaText,
						variant: 'text-sm/normal',
						children: A.Z.Messages.GUILD_ANALYTICS_DEVELOPERS_CTA
					}),
					(0, s.jsx)(w, {})
				]
			}),
			d
		]
	});
};
