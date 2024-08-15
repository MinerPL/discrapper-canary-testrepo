a.r(L),
	a.d(L, {
		default: function () {
			return e4;
		}
	}),
	a(47120),
	a(757143),
	a(653041);
var C,
	t,
	i,
	s,
	r = a(735250),
	n = a(470079),
	l = a(120356),
	o = a.n(l),
	H = a(716),
	c = a(266067),
	d = a(990547),
	V = a(442837),
	M = a(477690),
	Z = a(481060),
	_ = a(150063),
	E = a(393238),
	I = a(110924),
	h = a(315263),
	u = a(607070),
	p = a(100527),
	f = a(906732),
	T = a(213609),
	m = a(216547),
	g = a(812206),
	x = a(70097),
	N = a(665149),
	D = a(706454),
	v = a(210887),
	A = a(592125),
	S = a(430824),
	b = a(771845),
	w = a(594174),
	j = a(517802),
	R = a(471731),
	B = a(626135),
	O = a(823379),
	k = a(5192),
	P = a(624138),
	y = a(792125),
	F = a(712092),
	W = a(507885),
	G = a(566620),
	U = a(317381),
	Y = a(379146),
	K = a(273003),
	X = a(754332),
	J = a(140863),
	z = a(969345),
	Q = a(257968),
	q = a(127255),
	$ = a(361213),
	ee = a(542094),
	eL = a(778569),
	ea = a(840000),
	eC = a(537789),
	et = a(841547),
	ei = a(239298),
	es = a(513202),
	er = a(884338),
	en = a(701488),
	el = a(981631),
	eo = a(689938),
	eH = a(102615),
	ec = a(131454),
	ed = a(372065),
	eV = a(376226),
	eM = a(785930),
	eZ = a(143824),
	e_ = a(848366),
	eE = a(392381),
	eI = a(176890),
	eh = a(997074),
	eu = a(901924),
	ep = a(448096),
	ef = a(286557),
	eT = a(358176),
	em = a(610924),
	eg = a(326822),
	ex = a(797956),
	eN = a(612852),
	eD = a(369827);
let ev = 'celebrate-with-us',
	eA = ''.concat(el.Z5c.ACTIVITIES, '#').concat(ev),
	eS = 'https://support.discord.com/hc/en-us/articles/13771635451415-Share-Nitro-Trials-with-a-Friend-FAQ',
	eb = 'https://discord.gg/discord-townhall',
	ew = 'https://discordmerch.com/dxcprod';
function ej() {
	var e, L;
	let { width: a, ref: C } = (0, E.Z)(),
		t = (0, V.e7)([u.Z], () => u.Z.useReducedMotion),
		i = (0, V.e7)([W.Z], () => W.Z.isAcknowledged(en.ES.FREE)),
		[s, l] = n.useState(!1),
		[d, M] = n.useState(!1),
		[I, h] = n.useState(!1),
		T = (0, c.k6)(),
		m = (0, c.TH)(),
		g = (0, V.e7)([v.Z], () => v.Z.getState().theme),
		[D] = n.useState((0, Q.c)(W.Z) > 0),
		{ analyticsLocations: A } = (0, f.ZP)([...(null !== (L = null == m ? void 0 : null === (e = m.state) || void 0 === e ? void 0 : e.analyticsLocations) && void 0 !== L ? L : []), p.Z.ACTIVITIES_PAGE]),
		S = n.useRef(new Date());
	return (
		n.useEffect(() => {
			setTimeout(() => {
				!i && F.Z(en.ES.FREE);
			}, 500);
		}, [i]),
		n.useEffect(() => {
			!i &&
				(setTimeout(() => {
					l(!0);
				}, 1300),
				setTimeout(() => {
					M(!0);
				}, 1500),
				setTimeout(() => {
					h(!0);
				}, 1700));
		}, [i]),
		n.useEffect(
			() => (
				(0, _.Y)(el.Z5c.ACTIVITIES),
				D &&
					!A.includes(p.Z.ACTIVITIES_PAGE_NOTIFICATION_DOT) &&
					T.replace(el.Z5c.ACTIVITIES, {
						analyticsLocations: [...A, p.Z.ACTIVITIES_PAGE_NOTIFICATION_DOT]
					}),
				() => {
					let e = S.current,
						L = Math.ceil((new Date().getTime() - e.getTime()) / 1000);
					B.default.track(el.rMx.ROUTE_UNMOUNT, {
						route: '/activities',
						page_view_duration_s: L
					});
				}
			),
			[A, T, D]
		),
		(0, r.jsx)(f.Gt, {
			value: A,
			children: (0, r.jsxs)('div', {
				className: eH.outerContainer,
				children: [
					(0, r.jsxs)(N.ZP, {
						children: [
							(0, r.jsx)(j.Z, { className: o()(eH.activitiesBirthdayIcon, { [eH.activitiesBirthdayIconLight]: 'light' === g }) }),
							(0, r.jsx)(Z.Heading, {
								variant: 'heading-md/semibold',
								children: eo.Z.Messages.EMBEDDED_ACTIVITIES_ACTIVITY_TAB_TITLE
							})
						]
					}),
					(0, r.jsx)(Z.Scroller, {
						className: eH.scroller,
						children: (0, r.jsxs)('div', {
							className: eH.innerContainer,
							children: [
								(0, r.jsxs)('div', {
									className: eH.heroFlipper,
									children: [
										(0, r.jsxs)('div', {
											className: o()(eH.heroFlipperInner, { [eH.heroFlipped]: i || t }),
											children: [
												(0, r.jsx)('img', {
													src: 'light' === g ? ec : ed,
													className: o()(eH.hero),
													alt: eo.Z.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_ACTIVITIES_HERO_ALT
												}),
												(0, r.jsx)('div', {
													className: o()(eH.heroFlipperBack, { [eH.heroFlipperBackLightMode]: 'light' === g }),
													children: (0, r.jsx)(eR, {
														containerRef: C,
														width: a
													})
												})
											]
										}),
										!t && s
											? (0, r.jsx)('div', {
													className: eH.heroConfetti01Wrapper,
													children: (0, r.jsx)(H.Z, { colors: ey })
												})
											: null,
										!t && d
											? (0, r.jsx)('div', {
													className: eH.heroConfetti02Wrapper,
													children: (0, r.jsx)(H.Z, { colors: ey })
												})
											: null,
										!t && I
											? (0, r.jsx)('div', {
													className: eH.heroConfetti03Wrapper,
													children: (0, r.jsx)(H.Z, { colors: ey })
												})
											: null
									]
								}),
								null != a && a < 660
									? (0, r.jsx)(x.Z, {
											autoPlay: !0,
											muted: !0,
											src: eV,
											loop: !0,
											className: eH.freeForeverBreakpointVideo,
											controls: t
										})
									: null,
								(0, r.jsx)(eB, {}),
								(0, r.jsx)(eF, {}),
								(0, r.jsx)(eJ, {}),
								(0, r.jsx)(eQ, {}),
								(0, r.jsx)(e$, {}),
								(0, r.jsx)(e6, {})
							]
						})
					})
				]
			})
		})
	);
}
function eR(e) {
	let { width: L, containerRef: a } = e,
		C = (0, V.e7)([u.Z], () => u.Z.useReducedMotion);
	return (0, r.jsxs)('div', {
		className: eH.freeForeverContainer,
		ref: a,
		children: [
			(0, r.jsx)('div', {
				className: eH.freeForeverLeft,
				children: (0, r.jsxs)('div', {
					className: eH.freeForeverText,
					children: [
						(0, r.jsx)(R.Z, {
							className: o()(eH.freeForeverLogo, {
								[eH.freeForeverLogoMedium]: null != L && L < 1000,
								[eH.freeForeverLogoSmall]: null != L && L < 480
							})
						}),
						(0, r.jsx)(Z.Heading, {
							variant: null == L || L < 480 ? 'heading-sm/bold' : L < 1000 ? 'display-sm' : 'display-md',
							children: eo.Z.Messages.EMBEDDED_ACTIVITIES_FREE_FOREVER_TITLE
						}),
						(0, r.jsx)(Z.Text, {
							variant: null == L || L < 480 ? 'text-sm/medium' : L < 1000 ? 'text-md/medium' : 'text-lg/medium',
							children: eo.Z.Messages.EMBEDDED_ACTIVITIES_FREE_FOREVER_DESCRIPTION
						})
					]
				})
			}),
			null != L && L > 660
				? (0, r.jsx)('div', {
						className: eH.freeForeverRight,
						children: (0, r.jsx)(x.Z, {
							autoPlay: !0,
							muted: !0,
							loop: !0,
							src: eV,
							poster: eM,
							className: eH.freeForeverVideo,
							controls: C
						})
					})
				: null
		]
	});
}
function eB() {
	return (0, r.jsxs)('div', {
		className: eH.birthdayExplanationWrapper,
		children: [
			(0, r.jsx)('div', {
				className: eH.birthdayBalloonsContainer,
				children: (0, r.jsx)(ea.j, { className: o()(eH.birthdayExplanationBalloonsLeft, eH.balloon) })
			}),
			(0, r.jsx)(Z.Heading, {
				variant: 'heading-md/semibold',
				className: eH.birthdayExplanationText,
				children: eo.Z.Messages.EMBEDDED_ACTIVITIES_BIRTHDAY_HERO_TEXT_WITH_2_LINKS.format({
					linkToBdayBlogPost: 'https://dis.gd/birthday',
					linkToSurprises: (e) =>
						(0, r.jsxs)(Z.Anchor, {
							href: eA,
							children: [
								e,
								(0, r.jsx)('img', {
									src: ep,
									className: eH.birthdayExplanationNitroIcon,
									alt: eo.Z.Messages.EMBEDDED_ACTIVITIES_NITRO_ICON_ALT
								})
							]
						})
				})
			}),
			(0, r.jsx)('div', {
				className: eH.birthdayBalloonsContainer,
				children: (0, r.jsx)(ea.j, {
					className: o()(eH.birthdayExplanationBalloonsRight, eH.balloon),
					flipX: !0
				})
			})
		]
	});
}
let eO = 'whats-new',
	ek = (0, P.Mg)(M.Z.ACTIVITIES_HOME_WHATS_NEW_TILE_WIDTH),
	eP = (0, P.Mg)(M.Z.ACTIVITIES_HOME_WHATS_NEW_HORIZONTAL_MARGIN),
	ey = [Z.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_BLUE.css, Z.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_GREEN.css, Z.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_PINK.css, Z.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_PURPLE.css, Z.tokens.unsafe_rawColors.DISCORD_8TH_BDAY_YELLOW.css];
function eF() {
	let { enabled: e } = Y.q.useExperiment({ location: 'd72ecf_2' }),
		{ enabled: L } = K.q.useExperiment({ location: 'd72ecf_3' }),
		{ enabled: a } = J.u.useExperiment({ location: 'd72ecf_4' }),
		{ enabled: C } = X.m.useExperiment({ location: 'd72ecf_5' }),
		t = n.useMemo(() => {
			let t = [];
			return (
				t.push({
					id: en.ES.DISCORD_TURNS_8,
					title: eo.Z.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_TITLE,
					content: (0, r.jsx)(Z.Text, {
						variant: 'text-sm/normal',
						className: eH.whatsNewDescription,
						children: eo.Z.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_DESCRIPTION
					}),
					imgUrl: eg,
					imgAlt: eo.Z.Messages.EMBEDDED_ACTIVITIES_WEEKLY_DROPS_TILE_IMG_ALT,
					link: void 0,
					isAppLink: !1,
					cardImgUrl: eZ,
					revealDate: new Date('May 15, 2023 17:00:00'),
					enabled: !0
				}),
				t.push({
					id: en.ES.GDM_ACTIVITIES,
					title: eo.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_TITLE,
					content: (0, r.jsx)(Z.Text, {
						variant: 'text-sm/normal',
						className: eH.whatsNewDescription,
						children: eo.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_DESCRIPTION
					}),
					imgUrl: em,
					imgAlt: eo.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_GDM_TILE_IMG_ALT,
					link: 'https://support.discord.com/hc/en-us/articles/4422142836759-Activities-on-Discord#h_01GSX5FCYNMF5PCGKNNA6XFW29',
					isAppLink: !1,
					cardImgUrl: e_,
					revealDate: new Date('May 15, 2023 17:00:00'),
					enabled: e
				}),
				t.push({
					id: en.ES.PUTT_PARTY,
					title: eo.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_TITLE,
					content: (0, r.jsx)(Z.Text, {
						variant: 'text-sm/normal',
						className: eH.whatsNewDescription,
						children: eo.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_DESCRIPTION
					}),
					imgUrl: eD,
					imgAlt: eo.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_PUTT_PARTY_TILE_IMG_ALT,
					link: el.Z5c.ACTIVITY_DETAILS(en.f9),
					isAppLink: !0,
					cardImgUrl: eE,
					revealDate: new Date('May 22, 2023 17:00:00'),
					enabled: a
				}),
				t.push({
					id: en.ES.JAMSPACE,
					title: eo.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_TITLE,
					content: (0, r.jsx)(Z.Text, {
						variant: 'text-sm/normal',
						className: eH.whatsNewDescription,
						children: eo.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_DESCRIPTION
					}),
					imgUrl: ex,
					imgAlt: eo.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_JAMSPACE_TILE_IMG_ALT,
					link: el.Z5c.ACTIVITY_DETAILS(en.MO),
					isAppLink: !0,
					cardImgUrl: eI,
					revealDate: new Date('May 30, 2023 17:00:00'),
					enabled: L
				}),
				t.push({
					id: en.ES.POKER,
					title: eo.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_TITLE,
					content: (0, r.jsx)(Z.Text, {
						variant: 'text-sm/normal',
						className: eH.whatsNewDescription,
						children: eo.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_DESCRIPTION
					}),
					imgUrl: eN,
					imgAlt: eo.Z.Messages.EMBEDDED_ACTIVITIES_WHATS_NEW_POKER_TILE_IMG_ALT,
					link: el.Z5c.ACTIVITY_DETAILS(en.Zc),
					isAppLink: !0,
					cardImgUrl: eh,
					revealDate: new Date('June 5, 2023 17:00:00'),
					enabled: C
				}),
				t
			);
		}, [e, L, C, a]);
	return t.length <= 0
		? null
		: (0, r.jsx)('div', {
				className: eH.whatsNew,
				children: (0, r.jsx)(m.Z, {
					tileMargin: eP,
					headerId: eO,
					tileWidth: ek,
					header: eo.Z.Messages.WHATS_NEW,
					headerContainerClassName: eH.tileScrollerHeader,
					scrollContainerClassName: eH.tileScrollerContainer,
					children: (0, r.jsx)('ul', {
						'aria-labelledby': eO,
						className: eH.whatsNewItemsContainer,
						children: t.map((e) => (0, r.jsx)(eW, { ...e }, e.id))
					})
				})
			});
}
function eW(e) {
	let { imgUrl: L, imgAlt: a, title: C, content: t, link: i, isAppLink: s, id: l, cardImgUrl: c, revealDate: d, enabled: M } = e,
		_ = (0, V.e7)([u.Z], () => u.Z.useReducedMotion),
		E = (0, V.e7)([D.default], () => D.default.locale),
		{ analyticsLocations: h } = (0, f.ZP)(p.Z.ACTIVITIES_PAGE_WHATS_NEW_TILE),
		[T, m] = n.useState(!1),
		g = (0, I.Z)(T),
		x = (0, V.e7)(
			[W.Z],
			() => {
				if (!M) return 0;
				let e = W.Z.isOpened(l);
				return l === en.ES.JAMSPACE ? (e || W.Z.isOpened(en.ES.JAMSPACE_OLD) ? 2 : 1) : e ? 2 : 1;
			},
			[M, l]
		);
	n.useEffect(() => {
		M && F.Z(l);
	}, [M, l]);
	let N = (0, r.jsxs)(r.Fragment, {
		children: [
			(0, r.jsx)(Z.Text, {
				variant: 'text-sm/semibold',
				className: eH.whatsNewDate,
				children: new Intl.DateTimeFormat(E, { dateStyle: 'long' }).format(d)
			}),
			(0, r.jsxs)('div', {
				className: eH.whatsNewImageContainer,
				children: [
					(0, r.jsx)('img', {
						src: L,
						className: eH.whatsNewImage,
						alt: a
					}),
					(0, r.jsx)(Z.Text, {
						variant: 'eyebrow',
						className: eH.newTag,
						children: eo.Z.Messages.NEW
					})
				]
			}),
			(0, r.jsxs)('div', {
				className: eH.whatsNewTextArea,
				children: [
					(0, r.jsx)(Z.Heading, {
						variant: 'heading-md/bold',
						className: eH.whatsNewDetailsHeader,
						children: C
					}),
					t
				]
			})
		]
	});
	return (0, r.jsx)(f.Gt, {
		value: h,
		children: (0, r.jsxs)('div', {
			className: eH.flipCardOuter,
			children: [
				_ || 2 !== x || T || !g
					? null
					: (0, r.jsx)('div', {
							className: eH.flipCardConfetti,
							children: (0, r.jsx)(H.Z, { colors: ey })
						}),
				(0, r.jsx)(eG, {
					openState: x,
					link: i,
					isAppLink: s,
					onOpen: () => {
						m(!0),
							F.E(l),
							B.default.track(el.rMx.ACTIVITIES_WHATS_NEW_OPENED, { section_id: l }),
							setTimeout(() => {
								m(!1);
							}, 500);
					},
					onCardContentClick: () => {
						B.default.track(el.rMx.ACTIVITIES_WHATS_NEW_CLICKED, { section_id: l });
					}
				}),
				(0, r.jsxs)('div', {
					className: o()(eH.flipCardInner, {
						[eH.flipCardInnerFlipped]: 2 === x,
						[eH.flipCardOpening]: T && !_,
						[eH.flipCardInnerReducedMotion]: _
					}),
					children: [
						(0, r.jsx)('div', {
							className: eH.flipCardOpened,
							children: (() => {
								switch (x) {
									case 0:
									case 1:
										return (0, r.jsx)(Z.Text, {
											variant: 'text-md/medium',
											children: '( ͡\xB0 ͜ʖ ͡\xB0) https://discord.com/careers'
										});
									case 2:
										return (0, r.jsx)('div', {
											className: eH.whatsNewItemContainer,
											children: N
										});
									default:
										return null;
								}
							})()
						}),
						(0, r.jsxs)('div', {
							className: eH.flipCardClosed,
							children: [
								(0, r.jsx)('img', {
									src: c,
									className: eH.flipCardClosedImg,
									alt: eo.Z.Messages.EMBEDDED_ACTIVITIES_PLAYING_CARD_ALT
								}),
								(() => {
									switch (x) {
										case 0:
											return (0, r.jsx)(Z.Text, {
												variant: 'text-sm/semibold',
												className: eH.flipCardClosedText,
												children: eo.Z.Messages.EMBEDDED_ACTIVITIES_CLICK_TO_REVEAL_DATE.format({ revealDate: new Intl.DateTimeFormat(E).format(d) })
											});
										case 1:
											return (0, r.jsx)(Z.Text, {
												variant: 'text-sm/semibold',
												className: eH.flipCardText,
												children: eo.Z.Messages.EMBEDDED_ACTIVITIES_REVEAL_THIS_WEEKS_DROP.format({ revealDate: new Intl.DateTimeFormat(E).format(d) })
											});
										default:
											return null;
									}
								})()
							]
						})
					]
				})
			]
		})
	});
}
function eG(e) {
	let { openState: L, link: a, isAppLink: C, onOpen: t, onCardContentClick: i } = e,
		{ analyticsLocations: s } = (0, f.ZP)(),
		n = (0, V.e7)([u.Z], () => u.Z.useReducedMotion);
	switch (L) {
		case 0:
			return (0, r.jsx)('div', { className: o()(eH.clickableContainer, eH.noPointer, { [eH.clickableContainerReducedMotion]: n }) });
		case 1:
			return (0, r.jsx)(Z.Clickable, {
				'aria-label': eo.Z.Messages.EMBEDDED_ACTIVITIES_OPEN_BIRTHDAY_SURPRISE,
				className: o()(eH.clickableContainer, { [eH.clickableContainerReducedMotion]: n }),
				onClick: t
			});
		case 2:
			if (null == a) return (0, r.jsx)('div', { className: o()(eH.clickableContainer, eH.noPointer, { [eH.clickableContainerReducedMotion]: n }) });
			if (C)
				return (0, r.jsx)(ei.o, {
					className: o()(eH.clickableContainer, { [eH.clickableContainerReducedMotion]: n }),
					onClick: i,
					to: {
						pathname: a,
						state: { analyticsLocations: s }
					}
				});
			return (0, r.jsx)(Z.Clickable, {
				tag: 'a',
				href: a,
				target: '_blank',
				className: o()(eH.clickableContainer, { [eH.clickableContainerReducedMotion]: n }),
				onClick: i
			});
		default:
			return null;
	}
}
((i = C || (C = {}))[(i.LOCKED = 0)] = 'LOCKED'), (i[(i.UNLOCKED = 1)] = 'UNLOCKED'), (i[(i.OPENED = 2)] = 'OPENED');
let eU = 'happening-now',
	eY = (0, P.Mg)(M.Z.ACTIVITIES_HOME_HAPPENING_NOW_CARD_WIDTH),
	eK = (0, P.Mg)(M.Z.ACTIVITIES_HOME_HAPPENING_NOW_GAP);
function eX(e, L) {
	if (e.length !== L.length) return !1;
	for (let a = 0; a < e.length; a++) if (e[a].activityItem.application.id !== L[a].activityItem.application.id || e[a].channel.id !== L[a].channel.id || e[a].users.length !== L[a].users.length) return !1;
	return !0;
}
function eJ() {
	let { analyticsLocations: e } = (0, f.ZP)(p.Z.ACTIVITIES_HAPPENING_NOW),
		L = (0, V.e7)(
			[U.ZP, g.Z, A.Z, w.default, b.ZP],
			() => {
				let e = [],
					L = w.default.getCurrentUser();
				if (null == L) return e;
				let a = U.ZP.getShelfActivities(null),
					C = a.map((e) => g.Z.getApplication(e.application_id)).filter(O.lm);
				return (
					b.ZP.getFlattenedGuildIds().forEach((t) => {
						U.ZP.getEmbeddedActivitiesForGuild(t).forEach((t) => {
							let i = A.Z.getChannel(t.channelId);
							if (null == i || t.userIds.has(L.id)) return;
							let s = (0, z.Z)({
									activityConfigs: a,
									applicationId: t.applicationId,
									applications: C
								}),
								r = Array.from(t.userIds)
									.map((e) => w.default.getUser(e))
									.filter(O.lm);
							null != s &&
								e.push({
									activityItem: s,
									channel: i,
									users: r
								});
						});
					}),
					e
				);
			},
			[],
			eX
		);
	return ((0, T.Z)(
		{
			type: d.ImpressionTypes.PANE,
			name: d.ImpressionNames.ACTIVITIES_HAPPENING_NOW,
			properties: { n_activities: L.length }
		},
		{ trackOnInitialLoad: !0 }
	),
	L.length <= 0)
		? null
		: (0, r.jsx)(f.Gt, {
				value: e,
				children: (0, r.jsx)('div', {
					className: eH.happeningNowContainer,
					children: (0, r.jsx)(m.Z, {
						tileMargin: eK,
						headerId: eU,
						tileWidth: eY,
						header: eo.Z.Messages.EMBEDDED_ACTIVITIES_HAPPENING_NOW_TITLE,
						subHeader: eo.Z.Messages.EMBEDDED_ACTIVITIES_HAPPENING_NOW_DESCRIPTION,
						headerContainerClassName: eH.tileScrollerHeader,
						scrollContainerClassName: eH.tileScrollerContainer,
						children: (0, r.jsx)('ul', {
							'aria-labelledby': eU,
							className: eH.whatsNewItemsContainer,
							children: L.map((e) => {
								let { activityItem: L, channel: a, users: C } = e;
								return (0, r.jsx)(
									ez,
									{
										activityItem: L,
										channel: a,
										users: C
									},
									''.concat(a.id).concat(L.application.id)
								);
							})
						})
					})
				})
			});
}
function ez(e) {
	let { activityItem: L, channel: a, users: C } = e,
		t = (0, V.e7)([u.Z], () => u.Z.useReducedMotion),
		{ imageBackground: i, onActivityItemSelected: s } = (0, ee.ZP)({
			activityItem: L,
			channel: a,
			guildId: a.guild_id,
			locationObject: {},
			embeddedActivitiesManager: es.Z,
			backgroundResolution: 512
		}),
		n = k.ZP.getName(a.guild_id, a.id, null == C ? void 0 : C[0]);
	n = (0, P.aF)(n, 25);
	let l = (0, V.e7)([S.Z], () => {
		var e;
		return null === (e = S.Z.getGuild(a.guild_id)) || void 0 === e ? void 0 : e.name;
	});
	return (0, r.jsxs)(Z.Clickable, {
		onClick: s,
		className: o()((0, y.Q)(el.BRd.DARK), eH.happeningNowCard, { [eH.happeningNowCardReducedMotion]: t }),
		children: [
			(0, r.jsx)('img', {
				src: i.url,
				alt: L.application.name,
				className: eH.happeningNowCardImg
			}),
			(0, r.jsxs)('div', {
				className: eH.happeningNowCardForeground,
				children: [
					(0, r.jsx)(Z.Heading, {
						variant: 'heading-lg/bold',
						children: L.application.name
					}),
					(0, r.jsx)(er.Z, {
						guildId: a.guild_id,
						users: C,
						max: 4,
						className: eH.happeningNowAvatars
					}),
					(0, r.jsx)(Z.Text, {
						className: eH.happeningNowAvatarNames,
						variant: 'text-xs/normal',
						children:
							C.length > 1
								? eo.Z.Messages.EMBEDDED_ACTIVITIES_USERNAME_AND_OTHERS.format({
										username: n,
										count: C.length - 1
									})
								: eo.Z.Messages.EMBEDDED_ACTIVITIES_IS_PLAYING.format({ username: n })
					}),
					(0, r.jsx)(Z.Text, {
						variant: 'text-md/medium',
						className: o()(eH.happeningNowJoin, { [eH.happeningNowJoinReducedMotion]: t }),
						children: eo.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY
					}),
					null != l
						? (0, r.jsx)(Z.Text, {
								variant: 'text-xs/medium',
								className: eH.happeningNowChannelAndGuildName,
								children: eo.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
									channelName: (0, P.aF)(a.name, 25),
									serverName: (0, P.aF)(l, 25)
								})
							})
						: null
				]
			})
		]
	});
}
function eQ() {
	let e = (0, q.Z)({ guildId: null });
	return (
		n.useEffect(() => {
			(0, G.w1)({ guildId: null });
		}, []),
		(0, r.jsxs)(r.Fragment, {
			children: [
				(0, r.jsx)('div', {
					className: eH.activityGridHeader,
					children: (0, r.jsxs)('div', {
						children: [
							(0, r.jsx)(Z.Heading, {
								variant: 'heading-lg/bold',
								children: eo.Z.Messages.EMBEDDED_ACTIVITIES_EXPLORE_ACTIVITIES
							}),
							(0, r.jsx)(Z.Text, {
								variant: 'text-sm/medium',
								className: eH.activityGridSubheader,
								children: eo.Z.Messages.EMBEDDED_ACTIVITIES_EXPLORE_ACTIVITIES_SUBHEADER
							})
						]
					})
				}),
				(0, r.jsx)('div', {
					className: eH.activityGrid,
					children: e.map((e) => (0, r.jsx)(eq, { activityItem: e }, e.application.id))
				})
			]
		})
	);
}
function eq(e) {
	var L;
	let { activityItem: a } = e,
		{ analyticsLocations: C } = (0, f.ZP)(),
		t = (0, eL.Z)({
			applicationId: a.application.id,
			size: 512
		}),
		i = (0, V.e7)([u.Z], () => u.Z.useReducedMotion),
		s = (null === (L = a.application.embeddedActivityConfig) || void 0 === L ? void 0 : L.activity_preview_video_asset_id) != null ? (0, $.Z)(a.application.id, a.application.embeddedActivityConfig.activity_preview_video_asset_id) : null,
		[l, H] = n.useState(!1),
		[c, d] = n.useState(l);
	n.useEffect(() => {
		l && d(!0);
	}, [l]);
	let M = () => H(!0),
		_ = () => H(!1),
		E = null == a.application.maxParticipants || -1 === a.application.maxParticipants ? eo.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS : eo.Z.Messages.EMBEDDED_ACTIVITIES_ONE_TO_N_PARTICIPANTS.format({ count: a.application.maxParticipants });
	return (0, r.jsxs)(ei.o, {
		to: {
			pathname: el.Z5c.ACTIVITY_DETAILS(a.application.id),
			state: { analyticsLocations: C }
		},
		className: o()(eH.activityCard, { [eH.activityCardReducedMotion]: i }),
		onMouseEnter: M,
		onFocus: M,
		onMouseLeave: _,
		onBlur: _,
		children: [
			(0, r.jsxs)('div', {
				className: eH.activityCardImageContainer,
				children: [
					(0, r.jsx)('img', {
						src: t.url,
						alt: a.application.name,
						className: eH.activityCardImage
					}),
					!i && null != s && c
						? (0, r.jsx)('div', {
								className: o()(eH.video, { [eH.videoFadeOut]: !l }),
								onAnimationEnd: () => (l ? null : d(!1)),
								children: (0, r.jsx)(x.Z, {
									className: eH.video,
									src: s,
									loop: !0,
									autoPlay: !0,
									muted: !0
								})
							})
						: null
				]
			}),
			(0, r.jsxs)('div', {
				className: eH.activityCardDetails,
				children: [
					(0, r.jsxs)('div', {
						children: [
							(0, r.jsx)(Z.Heading, {
								variant: 'heading-xl/extrabold',
								children: a.application.name
							}),
							(0, r.jsx)(Z.Text, {
								variant: 'text-xs/semibold',
								className: eH.activityCardParticipants,
								children: E
							})
						]
					}),
					a.application.tags.length > 0
						? (0, r.jsx)('div', {
								className: eH.activityCardTagContainer,
								children: a.application.tags.slice(0, 3).map((e) =>
									(0, r.jsx)(
										'div',
										{
											className: eH.activityCardTag,
											children: (0, r.jsx)(Z.Text, {
												variant: 'text-xs/semibold',
												children: e
											})
										},
										e
									)
								)
							})
						: null,
					(0, r.jsxs)('div', {
						className: o()(eH.activityCardHoverHint, { [eH.activityCardHoverHintReducedMotion]: i }),
						children: [
							(0, r.jsx)(Z.Text, {
								variant: 'text-sm/semibold',
								children: eo.Z.Messages.LEARN_MORE
							}),
							(0, r.jsx)(Z.ChevronSmallRightIcon, {
								size: 'xs',
								color: 'currentColor'
							})
						]
					})
				]
			})
		]
	});
}
function e$() {
	return (0, r.jsxs)('div', {
		className: eH.celebrateContainer,
		id: ev,
		children: [
			(0, r.jsx)(Z.Heading, {
				variant: 'heading-lg/bold',
				children: eo.Z.Messages.EMBEDDED_ACTIVITIES_HOW_YOU_CAN_CELEBRATE_WITH_US
			}),
			(0, r.jsxs)('div', {
				className: eH.celebrateCardGrid,
				children: [
					(0, r.jsxs)(Z.Clickable, {
						tag: 'a',
						href: eS,
						target: '_blank',
						className: eH.celebrateCardContainer,
						onClick: () => B.default.track(el.rMx.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, { section: 'share_nitro' }),
						children: [
							(0, r.jsx)('img', {
								src: ep,
								className: eH.celebrateNitroIcon,
								alt: eo.Z.Messages.EMBEDDED_ACTIVITIES_NITRO_ICON_ALT
							}),
							(0, r.jsx)(Z.Heading, {
								variant: 'heading-lg/bold',
								className: eH.celebrateCardHeader,
								children: eo.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_THE_GIFT_OF_NITRO
							}),
							(0, r.jsx)(Z.Heading, {
								variant: 'heading-sm/normal',
								className: eH.celebrateCardSubheader,
								children: eo.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_THREE_TRIALS.format({ nitroLink: eS })
							}),
							(0, r.jsx)('div', { className: eH.celebrateCardFiller }),
							(0, r.jsx)('img', {
								className: eH.celebrateCardImage,
								src: ef,
								alt: eo.Z.Messages.EMBEDDED_ACTIVITIES_SHARE_NITRO_TRIAL_ALT
							})
						]
					}),
					(0, r.jsxs)(Z.Clickable, {
						tag: 'a',
						href: ew,
						target: '_blank',
						className: eH.celebrateCardContainer,
						onClick: () => {
							B.default.track(el.rMx.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, { section: 'disxcore_merch' });
						},
						children: [
							(0, r.jsx)(Z.Heading, {
								variant: 'heading-lg/bold',
								className: eH.celebrateCardHeader,
								children: eo.Z.Messages.EMBEDDED_ACTIVITIES_EXCLUSIVE_BIRTHDAY_MERCH
							}),
							(0, r.jsx)(Z.Heading, {
								variant: 'heading-sm/normal',
								className: eH.celebrateCardSubheader,
								children: eo.Z.Messages.EMBEDDED_ACTIVITIES_VISIT_OUR_MERCH_STORE.format({ merchStoreLink: ew })
							}),
							(0, r.jsx)('div', { className: eH.celebrateCardFiller }),
							(0, r.jsx)('img', {
								className: eH.celebrateCardImage,
								src: eu,
								alt: eo.Z.Messages.EMBEDDED_ACTIVITIES_MERCH_STORE_ALT
							})
						]
					}),
					(0, r.jsxs)(Z.Clickable, {
						tag: 'a',
						href: eb,
						target: '_blank',
						className: eH.celebrateCardContainer,
						onClick: (e) => {
							var L;
							B.default.track(el.rMx.ACTIVITIES_PAGE_CELEBRATE_TILE_CLICKED, { section: 'town_hall' }), null === (L = (0, h.default)(eb)) || void 0 === L || L(e);
						},
						children: [
							(0, r.jsx)(Z.Heading, {
								variant: 'heading-lg/bold',
								className: eH.celebrateCardHeader,
								children: eo.Z.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_TITLE
							}),
							(0, r.jsx)(Z.Heading, {
								variant: 'heading-sm/normal',
								className: eH.celebrateCardSubheader,
								children: eo.Z.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_DESCRIPTION.format({ clickHandler: (0, h.default)(eb) })
							}),
							(0, r.jsx)('div', { className: eH.celebrateCardFiller }),
							(0, r.jsx)('img', {
								className: eH.celebrateCardImage,
								src: eT,
								alt: eo.Z.Messages.EMBEDDED_ACTIVITIES_CELEBRATE_TOWN_HALL_IMG_ALT
							})
						]
					})
				]
			})
		]
	});
}
function e6() {
	return (0, r.jsx)('div', {
		className: eH.kitBashContainer,
		children: (0, r.jsx)(et.i, {})
	});
}
function e4() {
	return (0, r.jsx)(eC.i, { children: (0, r.jsx)(ej, {}) });
}
((s = t || (t = {})).SHARE_NITRO = 'share_nitro'), (s.DISXCORE_MERCH = 'disxcore_merch'), (s.TOWN_HALL = 'town_hall');
