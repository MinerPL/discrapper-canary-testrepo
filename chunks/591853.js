n.d(t, {
	Ll: function () {
		return ex;
	},
	St: function () {
		return ep;
	},
	WT: function () {
		return e_;
	},
	jL: function () {
		return eI;
	},
	wG: function () {
		return eC;
	},
	yR: function () {
		return ed;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(512722),
	o = n.n(r);
n(699581);
var c = n(442837),
	u = n(704215),
	d = n(692547),
	h = n(481060),
	m = n(493683),
	p = n(475179),
	_ = n(287734),
	f = n(872810),
	E = n(607070),
	g = n(220779),
	C = n(201133),
	I = n(557135),
	x = n(194082),
	T = n(605236),
	N = n(543241),
	v = n(318374),
	S = n(258609),
	Z = n(810568),
	A = n(168524),
	M = n(382182),
	b = n(871118),
	R = n(565138),
	j = n(66999),
	L = n(790642),
	P = n(359110),
	O = n(171368),
	y = n(12168),
	D = n(237583),
	k = n(592125),
	U = n(430824),
	w = n(496675),
	B = n(699516),
	H = n(9156),
	G = n(594174),
	V = n(979651),
	F = n(938475),
	W = n(626135),
	z = n(768581),
	Y = n(5192),
	K = n(792125),
	q = n(26033),
	X = n(656709),
	Q = n(192918),
	J = n(22211),
	$ = n(571243),
	ee = n(69259),
	et = n(206295),
	en = n(111386),
	ei = n(797342),
	ea = n(43205),
	es = n(896449),
	el = n(469153),
	er = n(206583),
	eo = n(981631),
	ec = n(689938),
	eu = n(164384);
function ed(e) {
	let { children: t } = e,
		n = a.useRef(null);
	return (
		(0, h.useFocusLock)(n),
		(0, i.jsx)('div', {
			className: eu.popout,
			ref: n,
			children: t
		})
	);
}
function eh(e) {
	let { children: t, backgroundImgSrc: n, className: a, style: s = {} } = e,
		{ primaryColor: r, secondaryColor: o } = (0, et.Z)(n);
	return (
		null != n && (s.background = 'linear-gradient(45deg, '.concat(r, ', ').concat(o, ')')),
		(0, i.jsx)('div', {
			'data-disable-adaptive-theme': !0,
			className: l()(eu.hero, (0, K.Q)(eo.BRd.DARK), a),
			style: s,
			children: t
		})
	);
}
let em = a.createContext(null);
function ep(e) {
	let { children: t } = e,
		n = a.useRef(null);
	return (0, i.jsxs)(i.Fragment, {
		children: [
			(0, i.jsx)('div', {
				className: eu.interactionsContainerHeader,
				ref: (e) => (n.current = e)
			}),
			(0, i.jsx)('div', {
				className: eu.interactionsContainer,
				children: (0, i.jsx)(em.Provider, {
					value: n.current,
					children: t
				})
			})
		]
	});
}
function e_(e) {
	let {
			channel: t,
			user: n,
			generateReactionImage: s,
			reactionImageAltText: l,
			closePopout: r,
			entry: _,
			requestId: f,
			buttons: E = [],
			header: x
		} = e,
		[N, v] = a.useState(!1),
		[S, Z] = a.useState(null),
		A = (0, c.e7)([w.Z], () => w.Z.can(eo.Plq.SEND_MESSAGES, t)),
		M = (0, $.a)({ location: 'PopoutReactor' }),
		[b, O] = a.useState(!1),
		[y, G] = a.useState(!1),
		{ voiceBar: z, joinVoiceButton: K } = (function (e) {
			let { channel: t, entry: n, requestId: s } = e,
				{ streamPreviewUrl: l, channel: r } = (0, J.Z)(n),
				{ isRich: o, appName: u } = (0, ei.n)(n),
				{ needSubscriptionToAccess: m } = (0, j.Z)(t.id),
				_ = (0, c.e7)([U.Z], () => (null != r ? U.Z.getGuild(r.guild_id) : void 0)),
				f = (0, c.Wu)([F.ZP], () => (null != r ? F.ZP.getVoiceStatesForChannel(r) : []), [r]),
				E = (0, c.e7)([V.Z], () => V.Z.isInChannel(null == r ? void 0 : r.id)),
				g = a.useMemo(() => {
					for (let e of f) {
						let t = k.Z.getDMFromUserId(e.user.id),
							n = null != t && H.ZP.isChannelMuted(null, t),
							i = B.Z.isBlocked(e.user.id);
						if (n || i) return !0;
					}
					return !1;
				}, [f]);
			if (null == r || null == _)
				return {
					voiceBar: void 0,
					joinVoiceButton: void 0
				};
			let C = null != l,
				x = () => {
					p.Z.updateChatOpen(r.id, !0),
						(0, P.Kh)(r.id),
						(0, ee.L)(er.xP.VOICE_CHANNEL_PREVIEWED, {
							entry: n,
							channelId: t.id,
							guildId: t.guild_id,
							requestId: s,
							destinationChannelId: r.id,
							destinationGuildId: r.guild_id,
							richPresenceName: o ? u : void 0
						});
				},
				T = () => {
					I.Z.handleVoiceConnect({
						channel: r,
						connected: E,
						needSubscriptionToAccess: m,
						routeDirectlyToChannel: !0
					});
				},
				N = (e) => {
					let { children: t, text: n, hasBlockedOrMutedVCParticipant: a } = e,
						s = a
							? (0, i.jsxs)(i.Fragment, {
									children: [
										a &&
											(0, i.jsx)(h.WarningIcon, {
												size: 'custom',
												width: 13,
												height: 13,
												className: eu.popoutBlockedWarningIcon
											}),
										ec.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING
									]
								})
							: n;
					return (0, i.jsx)(
						h.Tooltip,
						{
							'aria-label': a ? ec.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_BLOCKED_USER_WARNING : null != n && n,
							text: s,
							shouldShow: !0,
							children: t
						},
						'voice-preview'
					);
				},
				v = (0, i.jsxs)(i.Fragment, {
					children: [
						(0, i.jsxs)('div', {
							className: eu.voiceChannelPopoutReactorHeader,
							children: [
								(0, i.jsx)(N, {
									text: ec.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
									hasBlockedOrMutedVCParticipant: g,
									children: (e) =>
										(0, i.jsxs)(h.Clickable, {
											...e,
											'aria-label': ec.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_PREVIEW_VOICE_CHANNEL,
											onClick: x,
											className: eu.voiceChannelPopoutReactorChannel,
											children: [
												(0, i.jsx)(R.Z, {
													guild: _,
													size: R.Z.Sizes.SMOL,
													className: eu.voiceChannelGuildIcon,
													active: !0
												}),
												(0, i.jsx)(h.ChevronSmallRightIcon, {
													size: 'xxs',
													color: d.Z.colors.INTERACTIVE_NORMAL
												}),
												(0, i.jsx)(h.VoiceNormalIcon, {
													size: 'xs',
													color: d.Z.colors.TEXT_NORMAL
												}),
												(0, i.jsx)(h.Text, {
													variant: 'text-sm/medium',
													color: 'text-normal',
													className: eu.voiceChannelName,
													children: r.name
												})
											]
										})
								}),
								(0, i.jsx)(D.Z, {
									guildId: _.id,
									users: f,
									max: 3,
									renderUser: (e, t) =>
										(0, i.jsx)(h.Avatar, {
											src: e.user.getAvatarURL(_.id, 16),
											size: h.AvatarSizes.SIZE_16,
											'aria-label': 'avatar',
											className: t
										}),
									renderMoreUsers: (e) =>
										(0, i.jsx)('div', {
											className: eu.voiceChannelAdditionalParticipants,
											children: (0, i.jsx)(h.Text, {
												variant: 'text-xxs/semibold',
												color: 'text-normal',
												children: e
											})
										})
								})
							]
						}),
						(0, i.jsx)('div', { className: eu.primaryActionPopoutDivider })
					]
				});
			return {
				voiceBar: v,
				joinVoiceButton: E
					? null
					: (0, i.jsx)(N, {
							hasBlockedOrMutedVCParticipant: g,
							children: (e) =>
								(0, i.jsx)(ex, {
									...e,
									color: h.Button.Colors.GREEN,
									onClick: T,
									IconComponent: C ? h.ScreenIcon : h.VoiceNormalIcon,
									children: C ? ec.Z.Messages.WATCH : ec.Z.Messages.JOIN
								})
						})
			};
		})({
			channel: t,
			entry: _,
			requestId: f
		}),
		q = null != K && 0 === E.length ? [K] : E,
		Q = q.length > 0,
		et = q.length >= 2,
		[ea, es] = a.useState(!Q),
		ed = '#'.concat(t.name),
		eh = Y.ZP.getName(t.guild_id, t.id, n),
		em = N
			? ec.Z.Messages.CONTENT_INVENTORY_SWITCH_SEND_MESSAGE_TO_USER
			: ec.Z.Messages.CONTENT_INVENTORY_SWITCH_SHARE_TO_CHANNEL,
		ep = async (e) => {
			if (null != e) {
				if (
					(W.default.track(eo.rMx.CONTENT_POPOUT_EMOJI_CLICKED, {
						surface_type: er.Kd.GUILD_MEMBER_LIST,
						channel_id: t.id,
						guild_id: t.guild_id
					}),
					M)
				) {
					let a;
					if (((0, T.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), O(!0), G(!1), N)) a = t;
					else {
						var i;
						let e = await m.Z.getOrEnsurePrivateChannel(n.id);
						a = null !== (i = k.Z.getChannel(e)) && void 0 !== i ? i : null;
					}
					return (
						o()(null != a, 'Send channel must be defined'),
						eE({
							reply: ':'.concat(e.name, ':'),
							sendToChannel: a,
							onComplete: () => {
								G(!0),
									setTimeout(() => {
										O(!1), r();
									}, 600);
							},
							interactionType: er.xP.REACTION_EMOJI_REACT_SENT
						})
					);
				}
				es(!0), null != S && (S.insertEmoji(e, !1, !1), S.focus());
			}
		},
		e_ = async (e) => {
			let i;
			if ((M && (0, T.EW)(u.z.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), N)) i = t;
			else {
				let e = await m.Z.openPrivateChannel(n.id, !1, !1),
					t = k.Z.getChannel(e);
				o()(null != t, 'DM channel must be defined'), (i = t);
			}
			let a = i.type === eo.d4z.DM ? er.xP.DM_REACTION_MESSAGE_SENT : er.xP.CHANNEL_REACTION_MESSAGE_SENT;
			return eE({
				reply: e,
				sendToChannel: i,
				onComplete: r,
				interactionType: a
			});
		},
		eE = async (e) => {
			let { reply: n, sendToChannel: i, onComplete: a, interactionType: r } = e;
			if ((0, L.Io)('ContentPopout Reactor'))
				await (0, X.p)({
					channel: i,
					content: n,
					entry: _
				});
			else {
				var c;
				let e = await ((c = s),
				async function () {
					for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					try {
						return await c(...t);
					} catch (e) {
						throw e;
					}
				})(i.id);
				o()(null != e, 'Reaction image must be defined'),
					await (0, C.B)({
						file: e,
						channel: i,
						altText: l,
						reply: n
					});
			}
			(0, ee.L)(r, {
				entry: _,
				channelId: t.id,
				guildId: t.guild_id,
				requestId: f,
				destinationChannelId: i.id,
				destinationGuildId: i.guild_id
			}),
				null == a || a();
		},
		eg = null != x ? x : null != z ? z : void 0;
	return (0, i.jsxs)('div', {
		style: { pointerEvents: b ? 'none' : 'all' },
		children: [
			(0, i.jsx)(el.Z, {
				sent: y,
				shown: b,
				className: eu.toastContainer
			}),
			null != eg
				? eg
				: M
					? (0, i.jsx)(en.Z, {
							children: (0, i.jsxs)('div', {
								className: eu.emojiHotrailShareToChannel,
								children: [
									(0, i.jsx)(ef, {
										channel: t,
										onClickSuggestion: ep
									}),
									(0, i.jsx)(g.dE, { onSelectEmoji: ep })
								]
							})
						})
					: (0, i.jsx)('div', {
							className: eu.emojiHotrailShareToChannel,
							children: (0, i.jsx)(ef, {
								channel: t,
								onClickSuggestion: ep
							})
						}),
			(0, i.jsxs)('div', {
				className: ea ? eu.inputContainerShareToChannel : eu.hiddenButRenderedInputField,
				children: [
					(0, i.jsx)(g.A7, {
						placeholder: ec.Z.Messages.TEXTAREA_PLACEHOLDER.format({ channel: N ? ed : '@'.concat(eh) }),
						onEnter: e_,
						setEditorRef: (e) => Z(e),
						channel: N ? t : void 0,
						showEmojiButton: null != eg,
						renderAttachButton: A
							? () =>
									(0, i.jsx)(h.Tooltip, {
										text: em,
										children: (e) =>
											(0, i.jsx)(h.Clickable, {
												...e,
												className: eu.shareToChannelButton,
												onClick: () => v((e) => !e),
												children: N
													? (0, i.jsx)(h.TextIcon, {
															size: 'custom',
															width: 20,
															height: 20
														})
													: (0, i.jsx)(h.AtIcon, {
															size: 'custom',
															width: 20,
															height: 20
														})
											})
									})
							: void 0
					}),
					Q &&
						(0, i.jsx)(h.Clickable, {
							onClick: () => es(!1),
							className: eu.primaryActionPopoutMessageCloseIcon,
							children: (0, i.jsx)(h.XSmallIcon, {
								size: 'custom',
								width: 20,
								height: 20,
								color: d.Z.colors.ICON_PRIMARY
							})
						})
				]
			}),
			!1 === ea &&
				(0, i.jsxs)('div', {
					className: eu.primaryActionPopoutActionButtons,
					children: [
						(0, i.jsxs)(
							h.Button,
							{
								className: eu.secondaryButton,
								color: h.Button.Colors.CUSTOM,
								onClick: () => es(!0),
								innerClassName: eu.iconButton,
								size: et ? h.Button.Sizes.MIN : h.Button.Sizes.LARGE,
								children: [
									(0, i.jsx)(h.ChatIcon, {
										size: 'custom',
										width: 20,
										height: 20,
										colorClass: eu.secondaryText
									}),
									!et &&
										(0, i.jsx)(h.Text, {
											variant: 'text-md/semibold',
											className: eu.secondaryText,
											children: ec.Z.Messages.USER_POPOUT_MESSAGE
										})
								]
							},
							'toggleMessageMode'
						),
						q
					]
				})
		]
	});
}
let ef = (e) => {
	let { channel: t, onClickSuggestion: n } = e,
		[s, l] = a.useState(!1);
	a.useEffect(() => {
		l(!0);
	}, []);
	let r = !!E.Z.keyboardModeEnabled && !s,
		o = (0, N.wC)(t.guild_id)
			.slice(0, 5)
			.map((e) =>
				null == e.id
					? {
							emoji: e,
							url: e.url
						}
					: {
							emoji: e,
							url: (0, z.gT)({
								id: e.id,
								animated: e.animated,
								size: 58
							})
						}
			);
	return (0, i.jsx)(i.Fragment, {
		children: o.map((e) => {
			let { emoji: t, url: a } = e;
			return null != a
				? (0, i.jsx)(
						'div',
						{
							children: (0, i.jsx)(h.TooltipContainer, {
								text: ec.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: t.name }),
								position: 'top',
								'aria-label': ec.Z.Messages.CONTENT_INVENTORY_REPLY_WITH_EMOJI.format({ emojiName: t.name }),
								color: h.Tooltip.Colors.PRIMARY,
								shouldShow: !r && void 0,
								children: (0, i.jsx)(y.u, {
									emoji: t,
									isDisabled: !s,
									onClick: () => n(t),
									className: eu.emoji
								})
							})
						},
						t.name
					)
				: null;
		})
	});
};
function eE(e) {
	let { channel: t, userDescription: n, entry: a } = e,
		s = t.guild_id,
		{ displayParticipants: r, participant1: o, participant2: u, numOtherParticipants: d } = (0, Q.Z)(a, 3),
		m = (0, c.e7)([G.default], () => G.default.getUser(a.author_id)),
		{ streamPreviewUrl: p } = (0, J.Z)(a),
		_ = [o, u];
	return (0, i.jsxs)('div', {
		className: eu.popoutContentHeader,
		children: [
			(0, i.jsxs)('div', {
				className: eu.popoutUserContainer,
				children: [
					(0, i.jsx)(v.Z, {
						maxUsers: 3,
						users: r,
						size: h.AvatarSizes.SIZE_24,
						avatarClassName: eu.popoutStackedAvatar,
						hideOverflowCount: !0,
						disableUsernameTooltip: !0
					}),
					(0, i.jsx)(h.Spacer, {
						size: 8,
						horizontal: !0
					}),
					(0, i.jsx)(h.Heading, {
						variant: 'heading-sm/normal',
						className: eu.popoutTextSecondary,
						children: n.format({
							user1: Y.ZP.getName(s, t.id, _[0]),
							user2: Y.ZP.getName(s, t.id, _[1]),
							countOthers: d,
							nameHook: (e, t) =>
								(0, i.jsx)(h.Clickable, {
									tag: 'span',
									onClick: () => (0, O.openUserProfileModal)({ userId: _[parseInt(t)].id }),
									className: eu.maybeClickable,
									children: (0, i.jsx)(
										h.Text,
										{
											variant: 'text-sm/medium',
											className: l()(eu.popoutUsername, eu.popoutTextPrimary),
											children: e
										},
										t
									)
								})
						})
					})
				]
			}),
			null != p && (0, i.jsx)(x.ZP, { size: x.ZP.Sizes.SMALL }),
			null != m &&
				(0, i.jsx)(es.Z, {
					user: m,
					channel: t,
					guildId: s,
					entry: a
				})
		]
	});
}
function eg(e) {
	let { children: t, onClick: n } = e;
	return null == n
		? (0, i.jsx)(i.Fragment, { children: t })
		: (0, i.jsx)(h.Clickable, {
				className: eu.maybeClickable,
				onClick: n,
				children: t
			});
}
function eC(e) {
	var t;
	let {
			thumbnailSrc: n,
			thumbnailFallbackSrc: a,
			thumbnailTitle: s,
			title: r,
			subtitle: o,
			badges: c,
			children: u,
			onClickThumbnail: d,
			onClickTitle: m,
			onClickSubtitle: p,
			headerIcons: _,
			...f
		} = e,
		{ entry: E } = f,
		g = (0, q.dX)(E),
		C = (0, A.Z)({
			location: 'ContentPopout',
			applicationId: g ? (null === (t = E.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
			source: Z.m1.ActivityCard,
			trackEntryPointImpression: !0,
			sourceUserId: E.author_id
		}),
		I = g ? C : void 0;
	return (0, i.jsxs)('div', {
		className: eu.popoutContentWrapper,
		children: [
			(0, i.jsx)(eE, { ...f }),
			(0, i.jsxs)(eh, {
				backgroundImgSrc: n,
				children: [
					(0, i.jsxs)('div', {
						className: eu.popoutHeroInner,
						children: [
							(0, i.jsx)('div', {
								className: eu.popoutThumbnailContainer,
								children: (0, i.jsx)(eg, {
									onClick: null != d ? d : I,
									children: (0, i.jsx)(ea.f, {
										size: 72,
										constrain: 'width',
										alt: s,
										src: n,
										fallbackSrc: a,
										className: eu.contentImage,
										showTooltip: null != s
									})
								})
							}),
							(0, i.jsxs)('div', {
								className: eu.popoutHeroBody,
								children: [
									(0, i.jsx)(eg, {
										onClick: null != m ? m : I,
										children: (0, i.jsx)(h.Heading, {
											variant: 'heading-md/medium',
											className: l()(eu.popoutHeroTextPrimary, { [eu.popoutHeroTextPrimaryShort]: null != _ }),
											lineClamp: 3,
											children: r
										})
									}),
									null != o
										? (0, i.jsx)(eg, {
												onClick: null != p ? p : I,
												children: (0, i.jsx)(h.Text, {
													variant: 'text-sm/normal',
													className: eu.popoutHeroTextSecondary,
													children: o
												})
											})
										: null,
									(0, i.jsx)(h.Spacer, { size: 8 }),
									c
								]
							}),
							(0, i.jsx)('div', {
								className: eu.popoutHeaderIcons,
								children: _
							})
						]
					}),
					u
				]
			})
		]
	});
}
function eI(e) {
	var t;
	let {
			title: n,
			subtitle: s,
			badges: l,
			stream: r,
			thumbnailSrc: o,
			thumbnailFallbackSrc: u,
			thumbnailTitle: d,
			onClickThumbnail: m,
			onClickTitle: p,
			onClickSubtitle: E,
			...g
		} = e,
		C = (0, c.e7)([k.Z], () => k.Z.getChannel(null == r ? void 0 : r.channelId)),
		[I] = a.useMemo(() => (0, M.p9)(C, V.Z, U.Z, w.Z, S.Z), [C]),
		{ entry: x } = g,
		T = (0, q.dX)(x),
		N = (0, A.Z)({
			location: 'ContentPopout',
			applicationId: T ? (null === (t = x.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
			source: Z.m1.ActivityCard,
			trackEntryPointImpression: !0,
			sourceUserId: x.author_id
		}),
		v = T ? N : void 0;
	return null == r
		? null
		: (0, i.jsxs)('div', {
				className: eu.popoutContentWrapper,
				children: [
					(0, i.jsx)(eE, { ...g }),
					(0, i.jsxs)('div', {
						className: eu.streamingPopoutHero,
						children: [
							(0, i.jsxs)('div', {
								className: eu.streamingPopoutHeader,
								children: [
									null != o &&
										(0, i.jsx)('div', {
											className: eu.popoutThumbnailContainer,
											children: (0, i.jsx)(eg, {
												onClick: null != m ? m : v,
												children: (0, i.jsx)(ea.f, {
													size: 72,
													constrain: 'width',
													alt: d,
													src: o,
													fallbackSrc: u,
													className: eu.contentImage
												})
											})
										}),
									(0, i.jsxs)('div', {
										className: eu.streamingPopoutHeaderText,
										children: [
											(0, i.jsx)(eg, {
												onClick: null != p ? p : v,
												children: (0, i.jsx)(h.Heading, {
													variant: 'heading-md/semibold',
													className: eu.popoutTextPrimary,
													lineClamp: 3,
													children: n
												})
											}),
											null != s
												? (0, i.jsx)(eg, {
														onClick: null != E ? E : v,
														children: (0, i.jsx)(h.Text, {
															variant: 'text-sm/normal',
															className: eu.popoutHeroTextSecondary,
															children: s
														})
													})
												: null,
											(0, i.jsx)(h.Spacer, { size: 8 }),
											l
										]
									})
								]
							}),
							(0, i.jsx)(eg, {
								onClick: I
									? () => {
											_.default.selectVoiceChannel(r.channelId), (0, f.iV)(r);
										}
									: void 0,
								children: (0, i.jsxs)('div', {
									style: { position: 'relative' },
									children: [
										(0, i.jsx)(b.Z, {
											className: eu.streamingPopoutImg,
											stream: r
										}),
										I &&
											(0, i.jsx)('div', {
												className: eu.streamCTA,
												children: (0, i.jsx)(h.Text, {
													variant: 'text-md/normal',
													children: ec.Z.Messages.WATCH_STREAM
												})
											})
									]
								})
							})
						]
					})
				]
			});
}
function ex(e) {
	let { IconComponent: t, children: n, className: a, ...s } = e;
	return (0, i.jsxs)(h.Button, {
		...s,
		className: l()(a, eu.primaryButton),
		innerClassName: null != t ? eu.iconButton : void 0,
		size: h.Button.Sizes.LARGE,
		children: [
			null != t
				? (0, i.jsx)(t, {
						size: 'custom',
						width: 20,
						height: 20,
						color: d.Z.colors.WHITE
					})
				: null,
			(0, i.jsx)(h.Text, {
				variant: 'text-md/semibold',
				color: 'always-white',
				children: n
			})
		]
	});
}
