n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(512722),
	o = n.n(l),
	c = n(613828),
	d = n(442837),
	u = n(592471),
	_ = n(749280),
	E = n(864094),
	h = n(75735),
	m = n(382600),
	I = n(481060),
	g = n(846027),
	p = n(239091),
	T = n(925549),
	S = n(284056),
	f = n(730749),
	C = n(2052),
	N = n(40851),
	A = n(317381),
	v = n(596040),
	Z = n(588580),
	L = n(374065),
	O = n(451576),
	R = n(938655),
	x = n(403404),
	b = n(100527),
	P = n(906732),
	M = n(424602),
	D = n(158631),
	y = n(793865),
	j = n(933557),
	U = n(600164),
	G = n(258609),
	k = n(446226),
	w = n(935261),
	B = n(74299),
	H = n(803647),
	V = n(142497),
	F = n(810788),
	Y = n(160404),
	W = n(703656),
	z = n(917405),
	K = n(641015),
	q = n(848543),
	Q = n(565799),
	X = n(501655),
	J = n(71275),
	$ = n(600518),
	ee = n(485287),
	et = n(754277),
	en = n(590415),
	ei = n(695346),
	ea = n(923973),
	es = n(829750),
	er = n(189771),
	el = n(544384),
	eo = n(560688),
	ec = n(127608),
	ed = n(76021),
	eu = n(173507),
	e_ = n(25827),
	eE = n(199902),
	eh = n(314897),
	em = n(592125),
	eI = n(430824),
	eg = n(819640),
	ep = n(131951),
	eT = n(496675),
	eS = n(19780),
	ef = n(699516),
	eC = n(594174),
	eN = n(979651),
	eA = n(938475),
	ev = n(626135),
	eZ = n(63063),
	eL = n(51144),
	eO = n(870569),
	eR = n(345243),
	ex = n(594117),
	eb = n(226323),
	eP = n(981631),
	eM = n(190378),
	eD = n(689938),
	ey = n(532140),
	ej = n(224499);
function eU(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
function eG(e) {
	let t = e.currentTarget;
	ev.default.track(eP.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
		text: t.text,
		href: t.href,
		location: { section: eP.jXE.NOISE_CANCELLATION_POPOUT }
	});
}
function ek() {
	let e = a.useRef(null);
	(0, I.useFocusLock)(e),
		a.useEffect(() => {
			ev.default.track(eP.rMx.OPEN_POPOUT, { type: eP.jXE.NOISE_CANCELLATION_POPOUT });
		}, []);
	let t = (0, d.e7)([ep.Z], () => ep.Z.getNoiseCancellation());
	return (0, i.jsxs)('div', {
		ref: e,
		className: ey.noiseCancellationPopout,
		children: [
			(0, i.jsx)(I.FormSwitch, {
				hideBorder: !0,
				className: ej.marginBottom4,
				value: t,
				onChange: () => g.Z.setNoiseCancellation(!t, { section: eP.jXE.NOISE_CANCELLATION_POPOUT }),
				note: eD.Z.Messages.NOISE_CANCELLATION_POPOUT_DESCRIPTION,
				children: eD.Z.Messages.NOISE_CANCELLATION_POPOUT_HEADER
			}),
			(0, i.jsx)(S.Z, {
				title: eD.Z.Messages.NOISE_CANCELLATION_POPOUT_MIC_TEST_TITLE,
				notchBackground: S._.BLACK,
				buttonTest: eD.Z.Messages.NOISE_CANCELLATION_POPOUT_TEST,
				buttonStop: eD.Z.Messages.NOISE_CANCELLATION_POPOUT_STOP,
				buttonClassName: ey.micTestButton,
				buttonColor: I.Button.Colors.PRIMARY,
				location: { section: eP.jXE.NOISE_CANCELLATION_POPOUT }
			}),
			(0, i.jsx)(I.FormTitle, {
				tag: I.FormTitleTags.H5,
				className: r()(ej.marginBottom8, ej.marginTop20),
				children: eD.Z.Messages.NOISE_CANCELLATION_POPOUT_FOOTER
			}),
			(0, i.jsxs)(U.Z, {
				justify: U.Z.Justify.BETWEEN,
				className: ey.__invalid_footer,
				children: [
					(0, i.jsx)(I.Anchor, {
						href: eP.EYA.KRISP,
						onClick: (e) => eG(e),
						children: (0, i.jsx)('div', { className: ey.krispLogo })
					}),
					(0, i.jsx)(I.Anchor, {
						href: eZ.Z.getArticleURL(eP.BhN.NOISE_SUPPRESSION),
						className: ey.krispLink,
						onClick: (e) => eG(e),
						children: eD.Z.Messages.LEARN_MORE
					})
				]
			})
		]
	});
}
function ew() {
	let e = (0, d.e7)([et.Z], () => et.Z.isMuted()),
		t = e ? eD.Z.Messages.STAGE_MUSIC_UNMUTE : eD.Z.Messages.STAGE_MUSIC_MUTE;
	return (0, i.jsx)(eO.Z, {
		'aria-label': t,
		tooltipText: t,
		icon: e ? I.MusicSlashIcon : I.MusicIcon,
		onClick: () => (0, $.v)(!e)
	});
}
function eB(e) {
	let { channel: t, enableActivities: n, disabled: s } = e,
		l = (0, ea.Z)(),
		o = (0, er.Z)(t),
		c = (0, d.cj)([A.ZP], () => null != A.ZP.getSelfEmbeddedActivityForChannel(t.id)),
		u = (0, K.Z)(t),
		{ reachedLimit: _, limit: E } = (0, es.Z)(t),
		m = a.useCallback(() => {
			(0, eo.Z)();
		}, []),
		p = (0, N.bp)(),
		T = a.useCallback(
			(e) => {
				if (ep.Z.isVideoEnabled() === e) return;
				let n = () => {
					var n;
					g.Z.setVideoEnabled(e),
						e && (0, W.uL)(eP.Z5c.CHANNEL(null !== (n = t.getGuildId()) && void 0 !== n ? n : eP.ME, t.id));
				};
				e ? (0, eu.Z)(n, p) : n();
			},
			[t, p]
		),
		S = c || n || u,
		{ Component: f, play: C, events: v } = (0, h.o)(l.enabled ? 'disable' : 'enable');
	return (
		a.useEffect(() => () => C(), [l.enabled, C]),
		(0, i.jsx)(e_.Z, {
			onChange: T,
			onCameraUnavailable: m,
			hasPermission: o,
			channelLimit: E,
			channelLimitReached: _,
			...l,
			enabled: !s && l.enabled,
			children: (e) => {
				let { unavailable: t, active: n, label: a, iconComponent: s, ...l } = e,
					o = (0, i.jsx)(f, {
						size: 'custom',
						width: 20,
						height: 20,
						className: r()(ey.buttonIcon, { [ey.withText]: !S }),
						color: 'currentColor'
					});
				return (0, i.jsx)(I.Popout, {
					renderPopout: (e) => {
						let { closePopout: t } = e;
						return (0, i.jsx)(y.Z, { onClose: t });
					},
					position: 'top',
					align: 'center',
					animation: I.Popout.Animation.FADE,
					children: (e, s) => {
						let { onClick: c, ...d } = e,
							{ isShown: u } = s;
						return (0, i.jsx)(I.Tooltip, {
							text: a,
							children: (e) =>
								(0, i.jsx)(I.Button, {
									...l,
									...e,
									...d,
									onClick: (t) => {
										var n;
										l.onClick(t), null === (n = e.onClick) || void 0 === n || n.call(e), u && c(t);
									},
									onMouseEnter: () => {
										var t, n;
										null === (t = e.onMouseEnter) || void 0 === t || t.call(e),
											null === (n = d.onMouseEnter) || void 0 === n || n.call(d),
											v.onMouseEnter();
									},
									onMouseLeave: () => {
										var t;
										null === (t = e.onMouseLeave) || void 0 === t || t.call(e), v.onMouseLeave();
									},
									onContextMenu: (t) => {
										var n;
										c(t), null === (n = e.onContextMenu) || void 0 === n || n.call(e);
									},
									size: I.Button.Sizes.SMALL,
									className: r()(ey.button, ey.buttonColor, {
										[ey.buttonActive]: n,
										[ey.fauxDisabled]: t,
										[ey.disabled]: l.disabled
									}),
									innerClassName: ey.buttonContents,
									wrapperClassName: ey.button,
									fullWidth: !0,
									children: S
										? o
										: (0, i.jsxs)(U.Z, {
												align: U.Z.Align.CENTER,
												children: [o, eD.Z.Messages.VIDEO]
											})
								})
						});
					}
				});
			}
		})
	);
}
function eH(e) {
	let t,
		n,
		{ channel: a, enableActivities: s } = e,
		l = (0, N.bp)(),
		{ analyticsLocations: o } = (0, P.ZP)(),
		c = l === eP.IlC.POPOUT,
		E = (0, L.KF)(a.id),
		h = (0, L.g5)(E),
		[m] = (0, d.e7)([A.ZP], () => (null != a.id && '' !== a.id ? A.ZP.getEmbeddedActivitiesForChannel(a.id) : A.i6)),
		{ userInActivity: g } = (0, d.cj)([A.ZP], () => ({
			userInActivity: null != A.ZP.getSelfEmbeddedActivityForChannel(a.id)
		})),
		p = (0, C.O)(),
		T = (0, Z.a)(),
		S = E !== L.jy.CAN_LAUNCH,
		{ enabled: f } = M.nS.useExperiment({ location: 'RTCConnection' }, { autoTrackExposure: !0 }),
		{ Component: v, events: O, play: b } = (0, u.s)(),
		{ Component: D, events: y, play: j } = (0, _.w)();
	return (f ? ((t = y), (n = j)) : ((t = O), (n = b)), s)
		? (0, i.jsx)(I.Tooltip, {
				text: h,
				children: (e) =>
					(0, i.jsxs)(I.Button, {
						...e,
						fullWidth: !0,
						size: I.Button.Sizes.SMALL,
						...t,
						onClick: () => {
							var t;
							n(),
								(0, x.Z)({
									channel: a,
									guildId: a.guild_id,
									locationObject: p.location,
									openInPopout: c,
									analyticsLocations: o,
									opensAppLauncherModal: !0
								}),
								null === (t = e.onClick) || void 0 === t || t.call(e);
						},
						onMouseEnter: () => {
							var n;
							t.onMouseEnter(), null == e || null === (n = e.onMouseEnter) || void 0 === n || n.call(e);
						},
						onMouseLeave: () => {
							var n;
							t.onMouseLeave(), null == e || null === (n = e.onMouseLeave) || void 0 === n || n.call(e);
						},
						disabled: S,
						className: r()(ey.button, ey.buttonColor, {
							[ey.buttonActive]: g || null != m,
							[ey.disabled]: S
						}),
						innerClassName: ey.buttonContents,
						wrapperClassName: ey.button,
						children: [
							T
								? (0, i.jsx)(R.A, {
										top: -1,
										right: -1
									})
								: null,
							f
								? (0, i.jsx)(D, {
										size: 'sm',
										color: 'currentColor',
										className: ey.buttonIcon
									})
								: (0, i.jsx)(v, {
										size: 'sm',
										color: 'currentColor',
										className: ey.buttonIcon
									})
						]
					})
			})
		: null;
}
function eV(e) {
	let t,
		{ channel: n, canGoLive: s, enableActivities: l, disabled: o } = e,
		c = (0, d.e7)([eC.default], () => eC.default.getCurrentUser()),
		u = (0, d.Wu)([eE.Z], () => eE.Z.getAllActiveStreams()),
		_ = (0, er.Z)(n),
		h = n.getGuildId(),
		m = (0, d.cj)([A.ZP], () => null != A.ZP.getSelfEmbeddedActivityForChannel(n.id)),
		g = (0, K.Z)(n),
		p = a.useCallback(() => {
			(0, ed.Z)(h, n.id, eP.jXE.ACTIVITY_PANEL);
		}, [h, n.id]),
		T = u.find((e) => e.ownerId === (null == c ? void 0 : c.id)),
		S = (0, el.E)(n, c, u);
	t = null == T ? (s ? p : ec.Z) : () => (0, H.Z)(T);
	let f = null != T || S.length > 0,
		C = _ ? eD.Z.Messages.SHARE_YOUR_SCREEN : eD.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE,
		N = m || l || g,
		v = null != T,
		{ Component: Z, events: L, play: O } = (0, E.P)(v ? 'disable' : 'enable');
	a.useEffect(() => () => O(), [O, v]);
	let R = (0, i.jsx)(Z, {
		color: 'currentColor',
		className: r()(ey.buttonIcon, { [ey.withText]: !N })
	});
	return (0, i.jsx)(I.Popout, {
		renderPopout: (e) => {
			let { closePopout: t } = e;
			return (0, i.jsx)(el.Z, {
				channel: n,
				currentUser: c,
				activeStreams: u,
				onClose: t,
				handleGoLive: s ? p : ec.Z
			});
		},
		position: 'top',
		align: 'center',
		animation: I.Popout.Animation.FADE,
		children: (e) => {
			let { onClick: n, onMouseEnter: a, ...s } = e;
			return (0, i.jsx)(I.Tooltip, {
				text: C,
				children: (e) =>
					(0, i.jsx)(I.Button, {
						...e,
						size: I.Button.Sizes.SMALL,
						onClick: (i) => {
							var a;
							f ? n(i) : t(), null === (a = e.onClick) || void 0 === a || a.call(e);
						},
						disabled: !_ || o,
						className: r()(ey.button, ey.buttonColor, {
							[ey.buttonActive]: null != T,
							[ey.disabled]: !_ || o
						}),
						...(f ? s : null),
						onMouseEnter: () => {
							var t;
							null == a || a(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), L.onMouseEnter();
						},
						onMouseLeave: () => {
							var t;
							null === (t = e.onMouseLeave) || void 0 === t || t.call(e), L.onMouseLeave();
						},
						innerClassName: ey.buttonContents,
						wrapperClassName: ey.button,
						children: N
							? R
							: (0, i.jsxs)(U.Z, {
									align: U.Z.Align.CENTER,
									children: [R, eD.Z.Messages.GO_LIVE_SHARE_SCREEN]
								})
					})
			});
		}
	});
}
class eF extends a.PureComponent {
	renderConnectionStatus() {
		let e;
		let {
			channel: t,
			guild: n,
			rtcConnectionQuality: a,
			rtcConnectionState: s,
			rtcConnectionLastPing: r,
			hasVideo: l,
			isBroadcasting: o
		} = this.props;
		if (null == t) return null;
		let d = (0, j.F6)(t, eC.default, ef.Z);
		return (
			null != n
				? ((e = eP.Z5c.CHANNEL(n.id, t.id)), (d = ''.concat(d, ' / ').concat(n.name)))
				: (e = eP.Z5c.CHANNEL(eP.ME, t.id)),
			o && t.isBroadcastChannel() && (d = eD.Z.Messages.BROADCASTING),
			(0, i.jsx)(z.Z, {
				channelId: t.id,
				quality: a,
				state: s,
				lastPing: r,
				hasVideo: l,
				children: (0, i.jsx)(I.FocusRing, {
					children: (0, i.jsx)(c.rU, {
						to: e,
						onClick: this.handleChannelLinkClick,
						onContextMenu: this.handleChannelLinkContextMenu,
						children: (0, i.jsx)(eR.Z, {
							className: ey.channel,
							children: d
						})
					})
				})
			})
		);
	}
	renderNoiseCancellation() {
		let {
			noiseCancellationActive: e,
			noiseCancellationError: t,
			hasLayers: n,
			remoteVoiceState: a,
			channel: s,
			voiceStates: r
		} = this.props;
		return null != a
			? null
			: (null == s ? void 0 : s.isGuildStageVoice()) &&
				  !(null != r.find((e) => e.user.id === eh.default.getId() && (0, en.gf)(e.voiceState) === en.xO.ON_STAGE)) &&
				  (0, ee.U5)(s.id)
				? (0, i.jsx)(ew, {})
				: !n && t
					? (0, i.jsx)(I.Tooltip, {
							text: eD.Z.Messages.NOISE_CANCELLATION_CPU_OVERUSE,
							tooltipClassName: ey.noiseCancellationTooltip,
							forceOpen: !0,
							children: (e) => {
								let { 'aria-label': t } = e;
								return (0, i.jsx)(eO.Z, {
									'aria-label': t,
									tooltipText: null,
									disabled: !0,
									icon: I.WaveformSlashIcon
								});
							}
						})
					: (0, i.jsx)(
							I.Popout,
							{
								position: 'top',
								align: 'center',
								renderPopout: () => (0, i.jsx)(ek, {}),
								children: (t, n) => {
									let { isShown: a } = n;
									return (0, i.jsx)(eY, {
										popoutProps: t,
										isShown: a,
										noiseCancellationActive: e
									});
								}
							},
							'krisp-popout'
						);
	}
	renderVoiceStates() {
		let { channel: e, voiceStates: t, showVoiceStates: n } = this.props;
		return null != e && n && 0 !== t.length
			? (0, i.jsx)(eb.Z, {
					voiceStates: t,
					channel: e,
					className: ey.voiceUsers
				})
			: null;
	}
	renderChannelButtons() {
		let {
			channel: e,
			canGoLive: t,
			remoteVoiceState: n,
			enableActivities: a,
			voiceStates: s,
			selfStream: l,
			isPrivateChannelWithEnabledActivities: o
		} = this.props;
		if (null == e || null != n) return null;
		let c = eh.default.getId();
		if (e.isGuildStageVoice()) {
			if (!(0, J.tu)(e.guild_id) || !t) return null;
			let n = s.find((e) => e.user.id === c);
			if (null == n || n.voiceState.suppress) return null;
		}
		let d = (e.isGuildVoice() || o) && a,
			{ reachedLimit: u } = (0, es.t)(e),
			_ = (0, J.xJ)(e.id);
		return (0, i.jsxs)('div', {
			className: ey.actionButtons,
			children: [
				(0, i.jsx)(eB, {
					channel: e,
					enableActivities: d,
					disabled: !_ && u
				}),
				(0, i.jsx)(eV, {
					channel: e,
					canGoLive: t,
					enableActivities: d,
					disabled: e.isGuildStageVoice() && ((_ && null == l) || (!_ && u))
				}),
				(0, i.jsxs)(i.Fragment, {
					children: [
						d
							? (0, i.jsx)(eH, {
									channel: e,
									enableActivities: a
								})
							: null,
						(0, K.Z)(e)
							? (0, i.jsx)(q.Z, {
									className: r()(ey.button, ey.buttonColor),
									innerClassName: ey.buttonContents,
									iconClassName: ey.buttonIcon,
									channel: e
								})
							: null
					]
				})
			]
		});
	}
	render() {
		let { channel: e, noiseCancellationSupported: t, shouldShowVoicePanelIntroduction: n } = this.props;
		return null == e
			? null
			: (0, i.jsx)(I.Popout, {
					renderPopout: this.renderVoicePanelIntroduction,
					position: 'top',
					align: 'center',
					animation: I.Popout.Animation.TRANSLATE,
					shouldShow: n,
					children: () =>
						(0, i.jsxs)('div', {
							className: ey.container,
							children: [
								(0, i.jsxs)(U.Z, {
									className: ey.connection,
									align: U.Z.Align.CENTER,
									children: [
										(0, i.jsx)('div', {
											className: ey.inner,
											children: this.renderConnectionStatus()
										}),
										(0, i.jsxs)(U.Z, {
											grow: 0,
											shrink: 0,
											children: [t ? this.renderNoiseCancellation() : null, (0, i.jsx)(ex.Z, { channel: e })]
										})
									]
								}),
								this.renderVoiceStates(),
								this.renderChannelButtons()
							]
						})
				});
	}
	constructor(...e) {
		super(...e),
			eU(this, 'canScreenshare', () => {
				let { channel: e, canGoLive: t } = this.props;
				return t && null != e && null != e.getGuildId();
			}),
			eU(this, 'handleNoiseCancellationClicked', () => {
				let { noiseCancellationActive: e } = this.props;
				g.Z.setNoiseCancellation(!e, { section: eP.jXE.NOISE_CANCELLATION_POPOUT });
			}),
			eU(this, 'handleGoLive', () => {
				let { guild: e, channel: t } = this.props,
					n = null != t ? t.getGuildId() : null != e ? e.id : null;
				if (null != n) (0, ed.Z)(n, t.id, eP.Sbl.VOICE_PANEL);
			}),
			eU(this, 'handleChannelLinkClick', (e) => {
				var t;
				let { guild: n, channel: i } = this.props;
				o()(null != i, 'Channel is null during navigation click'),
					e.stopPropagation(),
					T.Z.channelListScrollTo(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : eP.ME, i.id);
			}),
			eU(this, 'handleChannelLinkContextMenu', (e) => {
				let { channel: t } = this.props;
				(0, p.jW)(e, async () => {
					let { default: e } = await n.e('56944').then(n.bind(n, 600830));
					return (n) =>
						(0, i.jsx)(e, {
							...n,
							channel: t
						});
				});
			}),
			eU(this, 'handleCloseVoicePanelIntroduction', () => {
				V.Kw(eM.v.VOICE_PANEL_INTRODUCTION);
			}),
			eU(this, 'renderVoicePanelIntroduction', () =>
				(0, i.jsxs)('div', {
					className: r()(ey.voicePanelIntroductionWrapper, 'theme-light'),
					children: [
						(0, i.jsx)(I.Heading, {
							className: ey.voicePanelIntroductionHeader,
							variant: 'heading-md/semibold',
							children: eD.Z.Messages.VOICE_PANEL_INTRODUCTION_HEADER
						}),
						(0, i.jsx)(I.Text, {
							className: ey.voicePanelIntroductionText,
							variant: 'text-sm/normal',
							children: eD.Z.Messages.VOICE_PANEL_INTRODUCTION_TEXT
						}),
						(0, i.jsx)(I.Button, {
							className: ey.voicePanelIntroductionButton,
							color: I.Button.Colors.BRAND,
							onClick: this.handleCloseVoicePanelIntroduction,
							children: eD.Z.Messages.VOICE_PANEL_INTRODUCTION_CLOSE
						})
					]
				})
			);
	}
}
function eY(e) {
	let { popoutProps: t, isShown: n, noiseCancellationActive: s } = e,
		{ play: r, Component: l, events: o } = (0, m.P)(s ? 'disable' : 'enable');
	return (
		a.useEffect(() => () => r(), [s, r]),
		(0, i.jsx)(eO.Z, {
			...t,
			onMouseEnter: () => {
				var e;
				null === (e = t.onMouseEnter) || void 0 === e || e.call(t), o.onMouseEnter();
			},
			onMouseLeave: () => {
				o.onMouseLeave();
			},
			tooltipClassName: ey.noiseCancellationTooltip,
			tooltipText: n ? null : eD.Z.Messages.NOISE_CANCELLATION_TOOLTIP,
			icon: l
		})
	);
}
t.Z = (0, f.Z)(function (e) {
	let t = (0, k.Z)(),
		n = (0, d.e7)([G.Z], () => G.Z.getAwaitingRemoteSessionInfo()),
		s = (0, d.e7)([eC.default], () => eC.default.getCurrentUser()),
		{ channelId: r, ...l } = (0, d.cj)([eS.Z], () =>
			null != t
				? {
						channelId: t.channelId,
						rtcConnectionQuality: eP.IE4.FINE,
						rtcConnectionState: eP.hes.RTC_CONNECTED,
						rtcConnectionLastPing: 0
					}
				: {
						channelId: eS.Z.getChannelId(),
						rtcConnectionQuality: eS.Z.getQuality(),
						rtcConnectionState: eS.Z.getState(),
						rtcConnectionLastPing: eS.Z.getLastPing()
					}
		),
		o = (0, d.e7)([em.Z], () => em.Z.getChannel(r), [r]),
		c = null == o ? void 0 : o.getGuildId(),
		u = (0, d.e7)([eI.Z], () => eI.Z.getGuild(c), [c]),
		_ = (0, d.cj)([ep.Z], () => ({
			noiseCancellationSupported: ep.Z.isNoiseCancellationSupported(),
			noiseCancellationActive: ep.Z.getNoiseCancellation(),
			noiseCancellationError: ep.Z.isNoiseCancellationError(),
			canGoLive: (0, B.Z)(ep.Z)
		})),
		E = (0, d.e7)(
			[ep.Z, F.Z],
			() =>
				F.Z.hasHotspot(eM.v.VOICE_PANEL_INTRODUCTION) &&
				(0, eL.EO)(s) &&
				!ep.Z.isInteractionRequired() &&
				!(null == o ? void 0 : o.isGuildStageVoice())
		),
		h = (0, d.e7)([eN.Z], () => null != r && eN.Z.hasVideo(r), [r]),
		m = (0, d.e7)([eE.Z], () => eE.Z.getCurrentUserActiveStream()),
		g = (0, d.e7)([eg.Z], () => eg.Z.hasLayers()),
		p = (0, d.e7)([Y.Z], () => Y.Z.isViewingRoles(c)),
		T = (0, d.e7)([eT.Z], () => p && !eT.Z.can(eP.Plq.VIEW_CHANNEL, o), [p, o]),
		S = ei.Fg.useSetting(),
		[f, C, N] = (0, d.Wu)(
			[eA.ZP, Q.Z],
			() =>
				(null == o ? void 0 : o.isGuildStageVoice())
					? [Q.Z.getMutableParticipants(o.id, X.pV.SPEAKER), Q.Z.getParticipantsVersion(o.id), null]
					: [null, null, null != o ? eA.ZP.getVoiceStatesForChannel(o) : null],
			[o]
		),
		A = a.useMemo(() => {
			var e, t;
			return null !==
				(t =
					null !==
						(e =
							null == f
								? void 0
								: f.map((e) => {
										let { user: t, userNick: n, voiceState: i } = e;
										return {
											user: t,
											nick: n,
											voiceState: i
										};
									})) && void 0 !== e
						? e
						: N) && void 0 !== t
				? t
				: [];
		}, [f, C, N]),
		[Z, L] = a.useState(!1);
	a.useEffect(() => {
		(p || T) && L(!1);
	}, [p, T, L]);
	let { analyticsLocations: R } = (0, P.ZP)(b.Z.RTC_PANEL),
		x = (0, v.Z)(null != c ? c : eP.lds, null == o ? void 0 : o.id),
		M = (0, O.Z)(null == o ? void 0 : o.id),
		y = (0, D.ZP)();
	return (0, i.jsx)(P.Gt, {
		value: R,
		children: (0, i.jsxs)('div', {
			className: ey.wrapper,
			children: [
				null != t || null != n
					? (0, i.jsx)(w.Z, {
							voiceState: t,
							awaitingRemoteSessionInfo: n
						})
					: null,
				(0, i.jsx)(eF, {
					...e,
					..._,
					...l,
					enableActivities: x,
					remoteVoiceState: t,
					guild: u,
					channel: o,
					hasVideo: h,
					selfStream: m,
					hasLayers: g,
					voiceStates: A,
					showVoiceStates: S,
					shouldShowVoicePanelIntroduction: E,
					isPrivateChannelWithEnabledActivities: M,
					isBroadcasting: y
				}),
				!Z && p && null != c
					? (0, i.jsxs)('div', {
							className: ey.viewAsRolesWarning,
							children: [
								(0, i.jsx)(I.Text, {
									variant: 'text-sm/normal',
									className: ey.viewAsRolesWarningText,
									children: T
										? eD.Z.Messages.VIEW_AS_ROLES_HIDDEN_VC_WARNING
										: eD.Z.Messages.VIEW_AS_ROLES_VOICE_WARNING
								}),
								(0, i.jsx)(I.Button, {
									className: ey.viewAsRolesWarningButton,
									size: I.Button.Sizes.MIN,
									onClick: () => {
										L(!0);
									},
									children: eD.Z.Messages.DISMISS
								})
							]
						})
					: null
			]
		})
	});
});
