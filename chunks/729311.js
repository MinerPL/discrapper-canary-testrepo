n.d(t, {
	Z: function () {
		return Z;
	},
	j: function () {
		return b;
	}
}),
	n(47120);
var s = n(735250),
	a = n(470079),
	i = n(120356),
	r = n.n(i),
	l = n(442837),
	o = n(481060),
	c = n(852860),
	d = n(111028),
	u = n(977258),
	_ = n(45966),
	I = n(473403),
	E = n(454585),
	T = n(323502),
	m = n(958832),
	N = n(324067),
	S = n(984933),
	h = n(259580),
	g = n(999382),
	C = n(743475),
	x = n(889369),
	p = n(570961),
	R = n(208665),
	f = n(868814),
	L = n(974513),
	O = n(2348),
	A = n(353890),
	M = n(716130),
	D = n(689938),
	v = n(646309);
function j(e) {
	let { guild: t } = e,
		i = (0, l.e7)([_.Z], () => _.Z.getEnabled(t.id)),
		r = (0, l.e7)([m.Z], () => m.Z.hasFetched(t.id)),
		c = (0, f.Z)(t),
		N = (0, l.e7)([x.Z], () => x.Z.editedDefaultChannelIds),
		S = c.filter((e) => !N.has(e.id)),
		[h, g] = a.useState(!1);
	a.useEffect(() => {
		!r && !i && (0, T.S)(t.id);
	}, [t.id, r, i]);
	let p = (e) => {
		(0, o.openModalLazy)(async () => {
			let { default: a } = await n.e('35641').then(n.bind(n, 89216));
			return (n) =>
				(0, s.jsx)(a, {
					...n,
					guildId: t.id,
					startingChannelId: e
				});
		});
	};
	return h || 0 === S.length
		? null
		: (0, s.jsxs)('div', {
				className: v.recommendations,
				children: [
					(0, s.jsx)(o.Text, {
						variant: 'text-md/medium',
						color: 'header-primary',
						children: D.Z.Messages.CHANNEL_RECOMMENDED
					}),
					(0, s.jsxs)('div', {
						className: v.recsSubheader,
						children: [
							(0, s.jsx)(o.Text, {
								variant: 'text-xs/normal',
								color: 'text-muted',
								children: D.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_RECOMMENDED_DESCRIPTION
							}),
							(0, s.jsxs)(o.Clickable, {
								className: v.dismissAll,
								onClick: () => g(!0),
								children: [
									(0, s.jsx)(o.CheckmarkLargeIcon, {
										size: 'xxs',
										color: 'currentColor',
										className: v.checkmark
									}),
									(0, s.jsx)(o.Text, {
										className: v.dismissAllText,
										variant: 'text-xs/medium',
										color: 'text-brand',
										children: D.Z.Messages.GUILD_ONBOARDING_DEFAULT_CHANNELS_RECOMMENDED_DISMISS_ALL
									})
								]
							})
						]
					}),
					(0, s.jsx)('div', {
						className: v.recommendedChannels,
						children: S.map((e, n) =>
							(0, s.jsxs)(s.Fragment, {
								children: [
									(0, s.jsxs)('div', {
										className: v.channelRow,
										children: [
											(0, s.jsxs)('div', {
												className: v.channelInfo,
												children: [
													(0, s.jsxs)('div', {
														className: v.channelName,
														children: [
															(0, s.jsx)(I._, {
																channel: e,
																guild: t
															}),
															(0, s.jsx)(d.Z, {
																className: v.__invalid_name,
																children: (0, s.jsx)(o.Text, {
																	className: v.__invalid_channelText,
																	variant: 'text-md/medium',
																	lineClamp: 1,
																	color: 'text-normal',
																	children: e.name
																})
															})
														]
													}),
													null != e.topic && e.topic.length > 0
														? (0, s.jsx)(
																d.Z,
																{
																	children: (0, s.jsx)(o.Text, {
																		className: v.topic,
																		variant: 'text-xs/normal',
																		children: E.Z.parseTopic(e.topic, !0, { channelId: e.id })
																	})
																},
																'topic'
															)
														: null
												]
											}),
											(0, u.s)(t.id, e.id)
												? (0, s.jsx)(o.Button, {
														color: o.Button.Colors.BRAND,
														size: o.Button.Sizes.SMALL,
														className: v.addChannelCTA,
														onClick: () => (0, C.pt)(e.id),
														children: D.Z.Messages.ADD
													})
												: (0, s.jsxs)(o.Button, {
														look: o.Button.Looks.OUTLINED,
														color: o.Button.Colors.PRIMARY,
														className: v.lockedPill,
														innerClassName: v.lockedPillInner,
														onClick: () => p(e.id),
														children: [
															(0, s.jsx)(o.LockIcon, {
																size: 'xs',
																color: 'currentColor'
															}),
															(0, s.jsx)(o.Text, {
																variant: 'text-sm/medium',
																children: D.Z.Messages.UNLOCK
															})
														]
													})
										]
									}),
									n < S.length - 1 ? (0, s.jsx)('div', { className: v.separator }) : null
								]
							})
						)
					}),
					(0, s.jsx)('div', { className: v.largeSeparator })
				]
			});
}
function Z(e) {
	let { saveOnClose: t = !1 } = e,
		n = (0, l.e7)([g.Z], () => g.Z.getGuild()),
		i = (0, l.e7)([_.Z], () => _.Z.isLoading()),
		c = (0, l.e7)([S.ZP], () => S.ZP.getChannels(null == n ? void 0 : n.id)),
		d = (0, l.e7)([N.Z], () => N.Z.getCategories(null == n ? void 0 : n.id)),
		u = (0, l.e7)([R.Z], () => R.Z.advancedMode),
		I = a.useRef(null),
		[E, T] = a.useState(!1);
	return (a.useEffect(() => {
		if (t)
			return () => {
				null != n &&
					(0, C.DO)(n)
						.then(() => {
							u && (0, p.rS)(n, { ignoreDefaultPrompt: !0 }).catch(() => {});
						})
						.catch(() => {});
			};
	}, [t, u]),
	null == n)
		? null
		: i
			? (0, s.jsx)(o.Spinner, {})
			: (0, s.jsxs)('div', {
					className: v.columns,
					children: [
						(0, s.jsxs)('div', {
							className: v.channelBrowser,
							children: [
								(0, s.jsx)(o.Clickable, {
									className: v.collapseButton,
									onClick: () => T((e) => !e),
									children: (0, s.jsx)(h.Z, {
										direction: E ? h.Z.Directions.DOWN : h.Z.Directions.UP,
										height: 16,
										width: 16
									})
								}),
								(0, s.jsx)(o.Heading, {
									className: v.header,
									variant: 'heading-lg/extrabold',
									children: D.Z.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS
								}),
								(0, s.jsx)(o.Text, {
									variant: 'text-sm/normal',
									color: 'header-secondary',
									children: D.Z.Messages.GUILD_SETTINGS_DEFAULT_CHANNELS_SUBHEADER
								}),
								(0, s.jsx)(L.Wu, {
									className: v.advancedModeToggle,
									guildId: n.id
								}),
								E
									? null
									: (0, s.jsxs)(s.Fragment, {
											children: [
												(0, s.jsx)(j, { guild: n }),
												(0, s.jsx)(O.Z, {
													className: r()(v.channelBrowserOuter),
													guild: n,
													categories: d,
													channels: c,
													hasSidebar: !1
												})
											]
										}),
								u &&
									(0, s.jsxs)(s.Fragment, {
										children: [
											(0, s.jsx)('div', { className: v.largeSeparator }),
											(0, s.jsx)(o.Heading, {
												className: v.prejoinHeader,
												variant: 'heading-lg/extrabold',
												children: D.Z.Messages.GUILD_SETTINGS_PRE_JOIN_QUESTIONS_HEADER
											}),
											(0, s.jsx)(o.Text, {
												className: v.prejoinSubHeader,
												variant: 'text-sm/normal',
												color: 'header-secondary',
												children: D.Z.Messages.GUILD_SETTINGS_PRE_JOIN_QUESTIONS_SUBHEADER
											}),
											(0, s.jsx)('div', {
												ref: I,
												className: v.advancedModeQuestions,
												children: (0, s.jsx)(M.Z, {
													guildId: n.id,
													prejoinOnly: !0,
													includeCount: !0,
													singleColumn: !0
												})
											})
										]
									})
							]
						}),
						(0, s.jsx)(A.Z, {
							guild: n,
							scrollToQuestions: () => {
								null != I.current && I.current.scrollIntoView({ behavior: 'smooth' });
							}
						})
					]
				});
}
function b() {
	let e = (0, l.e7)([g.Z], () => g.Z.getProps().guild),
		t = (0, l.e7)([x.Z], () => x.Z.submitting),
		n = (0, l.e7)([R.Z], () => R.Z.advancedMode);
	return null == e
		? null
		: (0, s.jsx)(c.Z, {
				onSave: () => {
					(0, C.DO)(e)
						.then(() => {
							n && (0, p.rS)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
						})
						.catch(() => {});
				},
				onReset: C.BG,
				submitting: t,
				onSaveText: D.Z.Messages.SAVE
			});
}
