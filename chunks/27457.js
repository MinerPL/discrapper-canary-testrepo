n.d(t, {
	BP: function () {
		return eo;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(848246),
	o = n(442837),
	c = n(692547),
	u = n(481060),
	d = n(846027),
	h = n(410575),
	m = n(812206),
	p = n(835473),
	_ = n(414910),
	f = n(415635),
	E = n(925329),
	C = n(649739),
	g = n(574176),
	I = n(833858),
	x = n(223135),
	T = n(37091),
	N = n(6572),
	v = n(352978),
	S = n(535400),
	Z = n(512384),
	A = n(6242),
	M = n(757692),
	b = n(386542),
	R = n(746599),
	j = n(231664),
	L = n(614011),
	P = n(210975),
	O = n(937995),
	y = n(456631),
	D = n(274459),
	k = n(314897),
	U = n(77498),
	w = n(131951),
	B = n(158776),
	H = n(594174),
	G = n(979651),
	V = n(374129),
	F = n(639351),
	W = n(74538),
	z = n(584729),
	Y = n(849171),
	K = n(607187),
	q = n(833519),
	X = n(462061),
	Q = n(623825),
	J = n(839662),
	$ = n(981631),
	ee = n(354459),
	et = n(524484),
	en = n(65154),
	ei = n(689938),
	ea = n(149050);
let es = a.memo((e) => {
	var t, n, s, c, E;
	let { participant: I, onDoubleClick: x, onContextMenu: V, onClick: F, onMouseDown: Q, onKeyDown: es, className: el, style: eo, channel: ec, width: eu, inPopout: ed, onVideoResize: eh, inCall: em = !1, selected: ep = !1, noBorder: e_ = !1, noVideoRender: ef = !1, focused: eE = !1, blocked: eC = !1, fit: eg = v.L.CONTAIN, paused: eI = !1, pulseSpeakingIndicator: ex = !1 } = e,
		eT = a.useContext(O.h9),
		[eN, ev] = a.useState(!1),
		eS = (0, o.e7)([k.default], () => k.default.getId()),
		eZ = (0, o.e7)([H.default], () => H.default.getCurrentUser()),
		eA = I.type === ee.fO.ACTIVITY ? null : null === (t = I.user) || void 0 === t ? void 0 : t.id,
		[eM] = (0, p.Z)(I.type === ee.fO.ACTIVITY ? [I.id] : []),
		eb = (0, o.e7)([T.Z], () => T.Z.getEnabled()),
		eR = (0, o.e7)([w.Z], () => null != eA && w.Z.isLocalVideoDisabled(eA, (0, _.Z)(I.type)), [eA, I.type]),
		ej = (0, o.e7)([w.Z], () => (null != eA ? w.Z.getVideoToggleState(eA, (0, _.Z)(I.type)) : $.ZUi.NONE), [eA, I.type]),
		eL = ej === $.ZUi.AUTO_PROBING,
		{ speaking: eP, ringing: eO, hasVideo: ey } = (0, J.Z)(I, eS),
		eD = (function (e, t, n) {
			var i, a, s, l;
			let r = (0, o.cj)([G.Z], () => {
					var e, i, a;
					let s = G.Z.getVoiceState(n, t.id);
					return {
						muted: null !== (e = null == s ? void 0 : s.mute) && void 0 !== e && e,
						deafened: null !== (i = null == s ? void 0 : s.deaf) && void 0 !== i && i,
						suppressed: null !== (a = null == s ? void 0 : s.suppress) && void 0 !== a && a,
						voiceChannelId: null == s ? void 0 : s.channelId
					};
				}),
				c = (0, o.cj)(
					[w.Z],
					() => {
						let n = (0, _.Z)(t.type),
							i = t.type !== ee.fO.ACTIVITY ? t.user.id : t.id;
						return e === i
							? {
									muted: !1,
									deafened: !1
								}
							: {
									muted: w.Z.isLocalMute(i, n),
									localVideoDisabled: w.Z.isLocalVideoDisabled(i, n),
									localVideoAutoDisabled: w.Z.isLocalVideoAutoDisabled(i, n)
								};
					},
					[e, t]
				);
			return {
				serverMuted: r.muted,
				serverDeafened: r.deafened,
				suppressed: r.suppressed,
				localMuted: c.muted,
				muted: null !== (s = t.type === ee.fO.USER && (null === (i = t.voiceState) || void 0 === i ? void 0 : i.isVoiceMuted())) && void 0 !== s && s,
				deafened: null !== (l = t.type === ee.fO.USER && (null === (a = t.voiceState) || void 0 === a ? void 0 : a.isVoiceDeafened())) && void 0 !== l && l
			};
		})(eS, I, ec.getGuildId()),
		ek = I.type === ee.fO.STREAM && eA === eS,
		eU = (0, W.So)(r.q.STREAM_HIGH_QUALITY),
		{ hqStreamingState: ew } = (0, b.k)(r.q.STREAM_HIGH_QUALITY),
		eB = (0, j.Z)(),
		eH = eU && ek && null != eB,
		eG = (0, M.o)(I, eZ),
		eV = (0, A.lL)('CallTile', !0, eZ, eG),
		eF = (0, o.e7)([y.Z], () => (null != eA ? y.Z.getEffectForUserId(eA) : null)),
		eW = (0, o.e7)([G.Z], () => G.Z.getVoicePlatformForChannel(ec.id, null != eA ? eA : $.lds)),
		{ enableHangStatus: ez } = g.n.useExperiment({
			guildId: ec.guild_id,
			location: 'VoiceUsers'
		}),
		{ showGameIcon: eY } = C.ZP.useExperiment({ location: 'voice_users' }, { autoTrackExposure: !1 }),
		eK = eY || ez,
		{ hangStatusActivity: eq, gameActivity: eX } = (0, o.cj)(
			[B.Z],
			() => ({
				hangStatusActivity: ez && null != eA ? B.Z.findActivity(eA, (e) => e.type === $.IIU.HANG_STATUS) : null,
				gameActivity: eK && null != eA ? B.Z.findActivity(eA, (e) => null != e.application_id && e.type === $.IIU.PLAYING) : null
			}),
			[ez, eA, eK]
		),
		eQ = (0, o.e7)([U.Z], () => ((null == eX ? void 0 : eX.application_id) != null ? U.Z.getDetectableGame(eX.application_id) : null)),
		eJ = (0, o.e7)([m.Z], () => (null != eQ && (null == eX ? void 0 : eX.application_id) != null ? m.Z.getApplication(null == eX ? void 0 : eX.application_id) : void 0)),
		e$ = (0, P.wV)({
			userId: eA,
			channelId: ec.id,
			location: 'CallTile'
		});
	a.useEffect(() => {
		ev(eE);
	}, [eE]);
	let e0 = a.useCallback(() => {
			null != eA && d.Z.toggleLocalMute(eA, en.Yn.STREAM);
		}, [eA]),
		e1 = a.useCallback(() => {
			(0, R.hP)();
		}, []),
		e2 = a.useCallback(
			(e) => {
				null == F || F(I, e);
			},
			[F, I]
		),
		e7 = a.useCallback(
			(e) => {
				null == x || x(I, e);
			},
			[x, I]
		),
		e4 = a.useCallback(
			(e) => {
				null == V || V(I, e);
			},
			[V, I]
		),
		e3 = eT;
	eH && (e3 = !1);
	let e5 = null,
		e6 = null,
		e9 = '';
	switch (I.type) {
		case ee.fO.STREAM:
			(e5 = (0, i.jsx)(q.Z, {
				participant: I,
				selected: ep,
				width: eu,
				fit: eg,
				onVideoResize: eh,
				paused: eI,
				inPopout: ed,
				focused: eE
			})),
				(e6 = (0, i.jsx)(q._, {
					participant: I,
					selected: ep,
					width: eu,
					focused: eE,
					idle: e3,
					premiumIndicator: eH || eV.enabled
				})),
				(e9 = ei.Z.Messages.CALL_TILE_A11Y_LABEL_STREAM.format({ streamerName: I.user.username }));
			break;
		case ee.fO.USER:
			(e5 = (0, i.jsx)(X.Z, {
				channel: ec,
				inCall: em,
				participant: I,
				fit: eg,
				onVideoResize: eh,
				paused: eI,
				selected: ep,
				width: eu,
				blocked: eC,
				noVideoRender: ef || eL,
				pulseSpeakingIndicator: ex
			})),
				(e6 = (0, i.jsx)(X.T, {
					userId: I.user.id,
					channelId: ec.id
				})),
				(e9 = ei.Z.Messages.CALL_TILE_A11Y_LABEL_USER.format({ username: I.user.username }));
			break;
		case ee.fO.ACTIVITY:
			(e5 = (0, i.jsx)(Y.ZP, {
				interactible: eE,
				participant: I,
				selected: ep,
				channel: ec,
				width: eu
			})),
				(e9 = ei.Z.Messages.CALL_TILE_A11Y_LABEL_ACTIVITY.format({ activityName: null == eM ? void 0 : eM.name }));
			break;
		case ee.fO.HIDDEN_STREAM:
			e5 = (0, i.jsx)(q.Z, {
				participant: I,
				selected: ep,
				width: eu,
				fit: eg,
				onVideoResize: eh,
				paused: eI,
				inPopout: ed,
				focused: eE
			});
	}
	let e8 = a.useRef(null),
		te = I.type === ee.fO.STREAM ? u.ScreenIcon : u.VideoIcon;
	return (0, i.jsx)(h.Z, {
		section: $.jXE.VOICE_CHANNEL_TILE,
		children: (0, i.jsx)('div', {
			className: l()(ea.wrapper, { [ea.ringing]: eO }, el),
			children: (0, i.jsxs)(Z.Z, {
				shakeLocation: et.oZ.VOICE_USER,
				isShaking: eP,
				className: ea.tile,
				children: [
					(0, i.jsx)(K.Z, {
						ref: e8,
						className: l()(ea.tile, {
							[ea.noBorder]: e_,
							[ea.noInteraction]: null == F,
							[ea.idle]: eT
						}),
						noBorder: e_,
						style: eo,
						participantUserId: eA,
						children: (0, i.jsxs)(u.ClickableContainer, {
							'aria-label': e9,
							className: ea.tileChild,
							onDoubleClick: e7,
							onContextMenu: e4,
							onClick: e2,
							onMouseDown: Q,
							onKeyDown: es,
							focusProps: { offset: 1 },
							children: [
								I.type === ee.fO.USER && null != eA && null != eF
									? (0, i.jsx)(D.Z, {
											voiceChannelEffect: eF,
											onComplete: () => (0, y.H)(eA),
											userId: eA
										})
									: null,
								I.type === ee.fO.USER
									? (0, i.jsx)('div', {
											className: ea.voiceChannelEffectsContainer,
											children: (0, i.jsx)(f.Z, {
												userId: eA,
												channelId: ec.id,
												guildId: ec.getGuildId(),
												containerDimensions: {
													width: null !== (c = null == e8 ? void 0 : null === (n = e8.current) || void 0 === n ? void 0 : n.clientWidth) && void 0 !== c ? c : 0,
													height: null !== (E = null == e8 ? void 0 : null === (s = e8.current) || void 0 === s ? void 0 : s.clientHeight) && void 0 !== E ? E : 0
												}
											})
										})
									: null,
								e5,
								eH
									? (0, i.jsx)(L.W, {
											onPlayed: e1,
											played: ew.hqStreamingFrameAnimationPlayed
										})
									: null,
								e_
									? null
									: (0, i.jsx)('div', {
											className: ea.indicators,
											children: e6
										}),
								ep
									? (0, i.jsx)('div', {
											className: ea.selectedScreen,
											children: (0, i.jsx)(te, {
												size: 'md',
												color: 'currentColor',
												className: ea.selectedIcon
											})
										})
									: null,
								I.type !== ee.fO.ACTIVITY
									? (0, i.jsx)(er, {
											focused: eE,
											width: eu,
											inCall: em,
											participantType: I.type,
											hasVideo: null != ey && ey,
											...eD,
											idle: eT,
											platform: eW,
											title: (0, z.Z)(ec, I),
											blocked: eC,
											localVideoDisabled: eR,
											videoToggleState: ej,
											hideAudioIcon: ek,
											onContextMenu: e4,
											onToggleMute: e0,
											participantUserId: eA,
											hangStatusActivity: eq,
											application: eJ,
											speaking: eP,
											secureFramesVerified: e$
										})
									: null,
								I.type === ee.fO.USER && eb
									? (0, i.jsx)(N.Z, {
											userId: I.id,
											channelId: ec.id
										})
									: null,
								em && !e_
									? (0, i.jsx)('div', {
											className: l()(ea.border, {
												[ea.voiceChannelEffect]: !eE && null != eF,
												[ea.speaking]: eP && !eE
											})
										})
									: null
							]
						})
					}),
					(0, i.jsx)(S.Z, {
						isFiring: eN,
						callTileRef: e8.current
					})
				]
			})
		})
	});
});
function el(e) {
	let { participantType: t, platform: n, className: a } = e;
	if (t === ee.fO.STREAM)
		return n === ee.wR.XBOX
			? (0, i.jsx)(F.Z, { className: a })
			: (0, i.jsx)(u.ScreenIcon, {
					size: 'md',
					color: 'currentColor',
					className: a
				});
	switch (n) {
		case ee.wR.MOBILE:
			return (0, i.jsx)(u.MobilePhoneIcon, {
				size: 'xs',
				color: 'currentColor',
				className: a
			});
		case ee.wR.XBOX:
			return (0, i.jsx)(F.Z, { className: a });
		case ee.wR.PLAYSTATION:
			return (0, i.jsx)(V.Z, { className: a });
		default:
			return null;
	}
}
es.displayName = 'CallTile';
let er = a.memo((e) => {
	let { muted: t, deafened: n, localMuted: a, serverMuted: s, serverDeafened: r, idle: d, title: h, width: m, hasVideo: p, inCall: f, localVideoDisabled: C, videoToggleState: g, focused: T, blocked: N, hideAudioIcon: v, participantType: S, participantUserId: Z, onContextMenu: A, onToggleMute: M, platform: b, hangStatusActivity: R, application: j, speaking: L, secureFramesVerified: P } = e,
		O = null,
		y = null,
		D = null,
		k = null,
		U = (0, Q.K)(m),
		B = (0, Q.N)(m),
		H = (0, o.e7)([w.Z], () => null != Z && w.Z.isLocalVideoAutoDisabled(Z, (0, _.Z)(S)), [Z, S]),
		G = (0, u.useRedesignIconContext)().enabled;
	if (!v) {
		if (a && S === ee.fO.STREAM && p && !T)
			O = (0, i.jsx)(u.Tooltip, {
				text: ei.Z.Messages.UNMUTE,
				children: (e) => {
					let { onClick: t, ...n } = e;
					return (0, i.jsx)(u.Clickable, {
						...n,
						onClick: (e) => {
							e.stopPropagation(), null == t || t(), M();
						},
						className: l()(ea.interactive, ea.toggleMute),
						children: (0, i.jsx)(u.VoiceXIcon, {
							size: 'md',
							color: 'currentColor'
						})
					});
				}
			});
		else if (a || S !== ee.fO.STREAM || !p || U || T) {
			if (G) {
				let e;
				r ? (e = u.HeadphonesDenyIcon) : s ? (e = u.MicrophoneDenyIcon) : n ? (e = u.HeadphonesSlashIcon) : a ? (e = u.MicrophoneDenyIcon) : t && (e = u.MicrophoneSlashIcon), (O = null != e ? (0, i.jsx)(e, { color: c.Z.colors.WHITE }) : null);
			} else if (n || t || a) {
				let e = n ? u.HeadphonesSlashIcon : u.MicrophoneSlashIcon;
				O = (0, i.jsx)(e, { color: 'currentColor' });
			}
		} else
			O = (0, i.jsx)(u.Tooltip, {
				text: ei.Z.Messages.MUTE,
				children: (e) => {
					let { onClick: t, ...n } = e;
					return (0, i.jsx)(u.Clickable, {
						...n,
						onClick: (e) => {
							e.stopPropagation(), null == t || t(), M();
						},
						className: l()(ea.interactive, ea.toggleMute),
						children: (0, i.jsx)(u.VoiceNormalIcon, {
							size: 'md',
							color: 'currentColor'
						})
					});
				}
			});
	}
	return (
		(f && w.Z.supports(en.AN.VIDEO)) || !p
			? f &&
				p &&
				C &&
				!H &&
				(y = (0, i.jsx)(u.VideoSlashIcon, {
					size: 'md',
					color: 'currentColor',
					colorClass: ea.localMuteStrikethrough
				}))
			: (y = (0, i.jsx)(u.VideoIcon, {
					size: 'md',
					color: 'currentColor'
				})),
		S === ee.fO.STREAM &&
			!T &&
			p &&
			(D = (0, i.jsx)(u.Tooltip, {
				text: ei.Z.Messages.OPTIONS,
				children: (e) => {
					let { onClick: t, ...n } = e;
					return (0, i.jsx)(u.Clickable, {
						...n,
						onClick: (e) => {
							e.stopPropagation(), null == t || t(), A(e);
						},
						className: l()(ea.status, ea.interactive),
						children: (0, i.jsx)(u.MoreHorizontalIcon, {
							size: 'md',
							color: 'currentColor'
						})
					});
				}
			})),
		S === ee.fO.USER && null != R
			? (k = (0, i.jsx)(u.Tooltip, {
					text: (0, I.O8)(R),
					children: (e) =>
						(0, i.jsx)('div', {
							...e,
							className: l()(ea.hangStatusContainer, { [ea.hangStatusSmall]: m < 500 }),
							children: (0, i.jsx)(x.Z, {
								hangStatusActivity: R,
								className: ea.hangStatusIcon,
								animate: L
							})
						})
				}))
			: S === ee.fO.USER &&
				null != j &&
				(k = (0, i.jsx)(u.Tooltip, {
					text: ei.Z.Messages.UNFORMATTED_PLAYING_GAME.format({ game: j.name }),
					children: (e) =>
						(0, i.jsx)('div', {
							...e,
							className: l()(ea.hangStatusContainer, { [ea.hangStatusSmall]: m < 500 }),
							children: (0, i.jsx)(E.Z, {
								className: ea.hangStatusIcon,
								game: j,
								size: E.Z.Sizes.SMALL
							})
						})
				})),
		(0, i.jsxs)('div', {
			className: ea.overlayContainer,
			children: [
				(0, i.jsx)('div', {
					className: l()(ea.overlayTop, { [ea.small]: m < 195 }),
					children:
						H || g === $.ZUi.AUTO_PROBING
							? d
								? (0, i.jsx)('div', {
										className: ea.status,
										children: (0, i.jsx)(u.VideoSlashIcon, {
											size: 'md',
											color: 'currentColor'
										})
									})
								: (0, i.jsxs)('div', {
										className: l()(ea.overlayTitle, ea.videoDisabledTitle),
										children: [
											(0, i.jsx)('div', {
												className: ea.status,
												children: (0, i.jsx)(u.VideoSlashIcon, {
													size: 'md',
													color: 'currentColor'
												})
											}),
											(0, i.jsx)(u.Text, {
												variant: 'text-sm/normal',
												className: ea.overlayTitleText,
												children: ei.Z.Messages.UNSTABLE_CONNECTION
											})
										]
									})
							: null
				}),
				(0, i.jsxs)('div', {
					className: l()(ea.overlayBottom, { [ea.small]: m < 195 }),
					children: [
						B
							? (0, i.jsx)('div', {})
							: (0, i.jsxs)(u.Text, {
									className: l()(ea.overlayTitle, { [ea.idle]: d }),
									color: 'none',
									variant: 'text-md/normal',
									children: [
										N
											? (0, i.jsx)('div', {
													className: ea.blocked,
													children: (0, i.jsx)(u.DenyIcon, {
														size: 'lg',
														className: ea.blockedIcon,
														color: c.Z.unsafe_rawColors.RED_400.css
													})
												})
											: null,
										(0, i.jsx)(el, {
											participantType: S,
											platform: b,
											className: ea.titleIcon
										}),
										null != h && '' !== h
											? (0, i.jsx)('span', {
													className: ea.overlayTitleText,
													children: h
												})
											: null,
										P &&
											(0, i.jsx)(u.Tooltip, {
												text: ei.Z.Messages.E2EE_USER_VERIFIED_TOOLTIP,
												children: (e) =>
													(0, i.jsx)(u.ShieldLockIcon, {
														...e,
														className: ea.secureFramesIcon,
														size: 'xxs',
														color: c.Z.colors.HEADER_PRIMARY,
														'aria-label': ei.Z.Messages.E2EE_USER_VERIFIED_A11Y
													})
											})
									]
								}),
						(0, i.jsxs)('div', {
							className: ea.statusContainer,
							children: [
								null != y &&
									(0, i.jsx)('div', {
										className: ea.status,
										children: y
									}),
								null != O &&
									(0, i.jsx)('div', {
										className: ea.status,
										children: O
									}),
								D,
								k
							]
						})
					]
				})
			]
		})
	);
});
er.displayName = 'CallTileOverlay';
let eo = v.L;
t.ZP = es;
