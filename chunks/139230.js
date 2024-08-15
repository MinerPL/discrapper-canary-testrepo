a.r(n),
	a.d(n, {
		default: function () {
			return Z;
		}
	}),
	a(47120),
	a(789020);
var t = a(735250),
	s = a(470079),
	i = a(266067),
	l = a(692547),
	r = a(481060),
	o = a(100527),
	c = a(906732),
	u = a(70097),
	d = a(665149),
	g = a(703656),
	m = a(630388),
	p = a(566620),
	x = a(122613),
	v = a(678173),
	f = a(880308),
	b = a(636508),
	h = a(696068),
	I = a(361213),
	j = a(778569),
	S = a(412019),
	_ = a(431136),
	y = a(226799),
	C = a(981631),
	M = a(689938),
	N = a(776097);
function Z(e) {
	var n, a;
	let { match: x } = e,
		b = null !== (n = (0, g.DR)()) && void 0 !== n ? n : [],
		{ analyticsLocations: h } = (0, c.ZP)([...b, o.Z.ACTIVITY_DETAIL_PAGE]),
		{ applicationId: S } = x.params;
	(0, f.g)(),
		s.useEffect(() => {
			(0, p.w1)({ guildId: null });
		}, []);
	let _ = (0, j.Z)({
			applicationId: null != S ? S : '',
			size: 2048,
			names: ['embedded_cover']
		}),
		Z = (0, v.T)(null, null != S && '' !== S ? S : null);
	if (null == S || null == Z) return null;
	if (!(0, m.yE)(Z.application.flags, C.udG.EMBEDDED)) return (0, t.jsx)(i.l_, { to: C.Z5c.ACTIVITIES });
	let T =
			null != Z.activity.activity_preview_video_asset_id
				? (0, I.Z)(S, Z.activity.activity_preview_video_asset_id)
				: null,
		A = y.o[S],
		D =
			(null == A ? void 0 : A.playersSuggestionMin) != null && (null == A ? void 0 : A.playersSuggestionMax) != null
				? ''.concat(A.playersSuggestionMin, ' - ').concat(A.playersSuggestionMax)
				: void 0;
	return (0, t.jsx)(c.Gt, {
		value: h,
		children: (0, t.jsxs)('div', {
			className: N.outerContainer,
			children: [
				(0, t.jsxs)(d.ZP, {
					children: [
						(0, t.jsxs)('div', {
							className: N.titleContainer,
							children: [
								(0, t.jsx)(r.ActivitiesIcon, {
									size: 'md',
									color: 'currentColor',
									className: N.rocketIcon
								}),
								(0, t.jsx)(r.Heading, {
									variant: 'heading-md/semibold',
									children: Z.application.name
								})
							]
						}),
						(0, t.jsx)('div', { className: N.__invalid_headerBarRightSideFiller })
					]
				}),
				(0, t.jsx)(r.Scroller, {
					className: N.scroller,
					children: (0, t.jsxs)('div', {
						className: N.innerContainer,
						children: [
							(0, t.jsxs)('div', {
								className: N.header,
								children: [
									(0, t.jsx)('img', {
										src: _.url,
										className: N.headerImage,
										alt: Z.application.name
									}),
									(0, t.jsx)('div', { className: N.headerImageOverlay }),
									(0, t.jsxs)(r.Clickable, {
										onClick: () => {
											(0, g.op)();
										},
										className: N.backButtonContainer,
										children: [
											(0, t.jsx)(r.ChevronSmallLeftIcon, {
												size: 'md',
												color: l.Z.unsafe_rawColors.WHITE_100,
												className: N.backButtonIcon
											}),
											(0, t.jsx)(r.Heading, {
												color: 'always-white',
												variant: 'heading-lg/semibold',
												children: M.Z.Messages.BACK
											})
										]
									})
								]
							}),
							(0, t.jsx)('div', {
								className: N.detailsOuterContainer,
								children: (0, t.jsx)('div', {
									className: N.detailsInnerContainer,
									children: (0, t.jsxs)('div', {
										className: N.detailsInnerInnerContainer,
										children: [
											(0, t.jsxs)('div', {
												className: N.activityDetailsContainer,
												children: [
													(0, t.jsxs)('div', {
														children: [
															(0, t.jsx)('div', {
																className: N.detailsTitle,
																children: (0, t.jsx)(r.Heading, {
																	variant: 'heading-xxl/bold',
																	children: Z.application.name
																})
															}),
															(0, t.jsxs)('div', {
																className: N.detailsDetails,
																children: [
																	null != D
																		? (0, t.jsxs)('div', {
																				className: N.detailItem,
																				children: [
																					(0, t.jsx)(r.GroupIcon, {
																						size: 'xs',
																						color: 'currentColor'
																					}),
																					(0, t.jsx)(r.Text, {
																						variant: 'text-xs/semibold',
																						className: N.detailItemText,
																						children: M.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({
																							nPlayers: D
																						})
																					})
																				]
																			})
																		: null,
																	(null == A ? void 0 : A.timeSuggestionMinutes) != null
																		? (0, t.jsxs)('div', {
																				className: N.detailItem,
																				children: [
																					(0, t.jsx)(r.HourglassIcon, {
																						size: 'xs',
																						color: 'currentColor'
																					}),
																					(0, t.jsx)(r.Text, {
																						variant: 'text-xs/semibold',
																						className: N.detailItemText,
																						children: M.Z.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({
																							nMinutes: A.timeSuggestionMinutes
																						})
																					})
																				]
																			})
																		: null,
																	(0, t.jsxs)('div', {
																		className: N.detailItem,
																		children: [
																			(0, t.jsx)(r.TagsIcon, {
																				size: 'xs',
																				color: 'currentColor'
																			}),
																			(0, t.jsx)(r.Text, {
																				variant: 'text-xs/semibold',
																				className: N.detailItemText,
																				children: Z.application.tags.slice(0, 3).join(', ')
																			})
																		]
																	})
																]
															})
														]
													}),
													(0, t.jsx)(r.Heading, {
														variant: 'heading-lg/medium',
														className: N.detailsDescription,
														children: Z.application.description
													}),
													(0, t.jsx)('div', { className: N.divider }),
													(0, t.jsxs)('div', {
														className: N.imagesContainer,
														children: [
															(null !== (a = null == A ? void 0 : A.gameplayImageUrls) && void 0 !== a ? a : []).map(
																(e) =>
																	(0, t.jsx)(
																		'img',
																		{
																			src: e,
																			alt: M.Z.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({
																				activityName: Z.application.name
																			}),
																			className: N.activityImage
																		},
																		e
																	)
															),
															(0, t.jsx)(u.Z, {
																loop: !0,
																autoPlay: !0,
																muted: !0,
																className: N.activityImage,
																src: T,
																poster: _.url
															})
														]
													})
												]
											}),
											(0, t.jsx)('div', {
												className: N.launcherOuterContainer,
												children: (0, t.jsx)(E, { activityItem: Z })
											})
										]
									})
								})
							})
						]
					})
				})
			]
		})
	});
}
function E(e) {
	var n, i;
	let { activityItem: l } = e,
		{ analyticsLocations: o } = (0, c.ZP)(),
		[u, d] = s.useState(null !== (n = (0, b.$)()) && void 0 !== n ? n : void 0),
		[g, m] = s.useState(null !== (i = (0, h.d)({ guildId: u })) && void 0 !== i ? i : void 0),
		p = (0, b.W)(),
		v = (0, h.F)(u),
		f = s.useCallback(async () => {
			var e;
			if (null != g && null != u)
				await (0, x.Z)({
					targetApplicationId: null == l ? void 0 : null === (e = l.application) || void 0 === e ? void 0 : e.id,
					channelId: g,
					analyticsLocations: o
				});
		}, [l, o, g, u]),
		I = s.useCallback(() => {
			(0, r.openModalLazy)(async () => {
				let { default: e } = await Promise.all([a.e('60133'), a.e('45374')]).then(a.bind(a, 827940));
				return (n) =>
					(0, t.jsx)(e, {
						activityItem: l,
						...n,
						analyticsLocations: o
					});
			});
		}, [l, o]);
	return (0, t.jsxs)('div', {
		className: N.launcherInnerContainer,
		children: [
			(0, t.jsx)(r.Text, {
				variant: 'text-md/medium',
				children: M.Z.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
			}),
			(0, t.jsx)(r.Select, {
				placeholder: M.Z.Messages.GUILD_SELECT,
				optionClassName: N.__invalid_option,
				options: p,
				renderOptionValue: (e) => {
					let n = e.find((e) => e.value === u);
					return null == n ? null : (0, t.jsx)(_.m, { guildId: n.value });
				},
				renderOptionLabel: (e) => {
					let { value: n } = e;
					return (0, t.jsx)(_.m, { guildId: n });
				},
				isSelected: (e) => e === u,
				select: (e) => {
					var n;
					d(e), m(null !== (n = (0, h.d)({ guildId: e })) && void 0 !== n ? n : void 0);
				},
				serialize: (e) => e
			}),
			(0, t.jsx)(r.Select, {
				placeholder: M.Z.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
				optionClassName: N.__invalid_option,
				options: v,
				isSelected: (e) => {
					let { channel: n } = e;
					return n.id === g;
				},
				select: (e) => {
					let { channel: n } = e;
					return m(n.id);
				},
				serialize: (e) => {
					let { channel: n } = e;
					return n.id;
				},
				renderOptionValue: () => {
					let e = v.find((e) => e.value.channel.id === g);
					return null == e
						? null
						: (0, t.jsx)(S.O, {
								channel: e.value.channel,
								users: e.value.users
							});
				},
				renderOptionLabel: (e) => {
					let {
						value: { channel: n, users: a }
					} = e;
					return (0, t.jsx)(S.O, {
						channel: n,
						users: a
					});
				}
			}),
			(0, t.jsx)(r.Button, {
				fullWidth: !0,
				disabled: null == u || null == g || !p.some((e) => e.value === u) || !v.some((e) => e.value.channel.id === g),
				onClick: f,
				children: M.Z.Messages.START
			}),
			(0, t.jsx)('div', { className: N.divider }),
			(0, t.jsx)(r.Button, {
				fullWidth: !0,
				color: r.Button.Colors.PRIMARY,
				onClick: I,
				children: M.Z.Messages.SHARE
			})
		]
	});
}
