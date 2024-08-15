n.d(t, {
	Z: function () {
		return eG;
	}
}),
	n(47120),
	n(653041);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(442837),
	o = n(704215),
	c = n(846519),
	d = n(400354),
	u = n(652844),
	_ = n(789639),
	E = n(481060),
	h = n(355467),
	m = n(239091),
	I = n(230711),
	g = n(410575),
	p = n(941129),
	T = n(83200),
	S = n(634894),
	f = n(586902),
	C = n(570928),
	N = n(676742),
	A = n(1585),
	v = n(304761),
	Z = n(865427),
	L = n(571250),
	O = n(628581),
	R = n(55311),
	x = n(575175),
	b = n(64220),
	P = n(377171),
	M = n(600164),
	D = n(676035),
	y = n(427217),
	j = n(605236),
	U = n(243778),
	G = n(730417),
	k = n(524347),
	w = n(853197),
	B = n(810280),
	H = n(60762),
	V = n(258609),
	F = n(278464),
	Y = n(331541),
	W = n(332473),
	z = n(240504),
	K = n(637906),
	q = n(39370),
	Q = n(19199),
	X = n(111653),
	J = n(866483),
	$ = n(14357),
	ee = n(393333),
	et = n(763296),
	en = n(640806),
	ei = n(184301),
	ea = n(584427),
	es = n(52538),
	er = n(331187),
	el = n(879815),
	eo = n(294629),
	ec = n(314897),
	ed = n(592125),
	eu = n(819640),
	e_ = n(131951),
	eE = n(19780),
	eh = n(885110),
	em = n(246946),
	eI = n(594174),
	eg = n(78839),
	ep = n(626135),
	eT = n(768581),
	eS = n(572004),
	ef = n(70956),
	eC = n(374023),
	eN = n(51144),
	eA = n(998502),
	ev = n(870569),
	eZ = n(345243),
	eL = n(115530),
	eO = n(981631),
	eR = n(215023),
	ex = n(288836),
	eb = n(689938),
	eP = n(108079);
function eM(e, t, n) {
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
let eD = eA.ZP.getEnableHardwareAcceleration() ? E.AnimatedAvatar : E.Avatar,
	ey = 30 * ef.Z.Millis.DAY;
function ej(e) {
	let { speaking: t, streaming: n, currentUser: a, status: s, handleMouseLeave: l, renderNameTag: o } = e,
		c = (0, N.Z)(null == a ? void 0 : a.avatarDecoration),
		d = (0, eT.NZ)({
			avatarDecoration: c,
			size: (0, A.y9)(E.AvatarSizes.SIZE_32)
		});
	return null == a
		? null
		: (0, i.jsx)(g.Z, {
				object: eO.qAy.AVATAR,
				children: (0, i.jsx)(E.Popout, {
					renderPopout: (e) => {
						let { closePopout: t, setPopoutRef: n } = e;
						return (0, i.jsx)('div', {
							className: eP.accountProfilePopoutWrapper,
							children: (0, i.jsx)(Y.Z, {
								currentUser: a,
								setPopoutRef: n,
								onClose: () => {
									l(), null == t || t();
								}
							})
						});
					},
					position: 'top',
					align: 'left',
					animation: E.Popout.Animation.FADE,
					spacing: 14,
					fixed: !0,
					preload: () =>
						(0, ei.Z)(a, void 0, {
							withMutualGuilds: !1,
							withMutualFriends: !1
						}),
					children: (e) =>
						(0, i.jsxs)(E.Clickable, {
							...e,
							'aria-label': eb.Z.Messages.SET_STATUS,
							className: eP.avatarWrapper,
							children: [
								(0, i.jsx)(eD, {
									size: E.AvatarSizes.SIZE_32,
									src: a.getAvatarURL(void 0, 32, !1),
									avatarDecoration: d,
									'aria-label': a.username,
									status: n ? eO.Skl.STREAMING : s,
									isSpeaking: t,
									className: eP.avatar
								}),
								(0, i.jsx)('div', {
									className: r()(eP.nameTag, { [eP.canCopy]: eS.wS }),
									children: o()
								})
							]
						})
				})
			});
}
class eU extends a.PureComponent {
	get isCopiedStreakGodlike() {
		let { copiedStreak: e } = this.state;
		return e >= 10;
	}
	componentDidUpdate(e) {
		let { speakingWhileMuted: t, occluded: n } = e,
			{ speakingWhileMuted: i, occluded: a } = this.props;
		a !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged();
	}
	componentWillUnmount() {
		this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
	}
	renderCopiedSuccess() {
		let { copiedStreak: e } = this.state,
			t = [eb.Z.Messages.COPY_SUCCESS_1, eb.Z.Messages.COPY_SUCCESS_2, eb.Z.Messages.COPY_SUCCESS_3, eb.Z.Messages.COPY_SUCCESS_4, eb.Z.Messages.COPY_SUCCESS_5, eb.Z.Messages.COPY_SUCCESS_6, eb.Z.Messages.COPY_SUCCESS_7, eb.Z.Messages.COPY_SUCCESS_8, eb.Z.Messages.COPY_SUCCESS_9, eb.Z.Messages.COPY_SUCCESS_10, eb.Z.Messages.COPY_SUCCESS_11],
			n = Math.min(Math.max(0, e - 1), t.length - 1);
		return (0, i.jsx)(E.Shaker, {
			isShaking: this.isCopiedStreakGodlike,
			children: t[n]
		});
	}
	renderNameTag() {
		let e;
		let { hovered: t } = this.state,
			{ customStatusActivity: n, userTag: a, currentUser: s, status: r } = this.props;
		if (null == s) return null;
		let l = eN.ZP.getName(s),
			o = null != r && r !== eO.Skl.UNKNOWN,
			c = null != n;
		return (
			(c || (o && s.isPomelo())) &&
				(e = (0, i.jsx)(C.Z, {
					hoverText: a,
					forceHover: t,
					children: c
						? (0, i.jsx)(y.Z, {
								activity: n,
								emojiClassName: eP.emoji,
								className: eP.customStatus
							})
						: eN.ZP.humanizeStatus(r)
				})),
			(0, i.jsxs)(i.Fragment, {
				children: [
					(0, i.jsx)('div', {
						className: eP.panelTitleContainer,
						children: (0, i.jsx)(eL.Z, { children: l })
					}),
					(0, i.jsx)('div', {
						className: eP.panelSubtextContainer,
						children: (0, i.jsx)(eZ.Z, { children: null != e ? e : a })
					})
				]
			})
		);
	}
	renderAvatarWithPopout() {
		return (0, i.jsx)(ej, {
			...this.props,
			handleMouseLeave: this.handleMouseLeave,
			renderNameTag: () => this.renderNameTag()
		});
	}
	renderNameZone() {
		let { currentUser: e, dismissibleContents: t } = this.props;
		return null == e
			? null
			: (0, i.jsx)(i.Fragment, {
					children: (0, i.jsx)(U.ZP, {
						contentTypes: t.avatar,
						children: (e) => {
							let { visibleContent: t, markAsDismissed: n } = e;
							if (t === o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)
								return (0, i.jsx)(b.Z, {
									markAsDismissed: n,
									children: () => this.renderAvatarWithPopout()
								});
							return this.renderAvatarWithPopout();
						}
					})
				});
	}
	render() {
		let { currentUser: e, selfDeaf: t, selfMute: n, awaitingRemote: a, serverMute: s, serverDeaf: r, suppress: l, dismissibleContents: c } = this.props,
			{ shouldShowSpeakingWhileMutedTooltip: d } = this.state;
		return null == e
			? null
			: (0, i.jsxs)('div', {
					className: eP.container,
					onMouseEnter: this.handleMouseEnter,
					onMouseLeave: this.handleMouseLeave,
					children: [
						this.renderNameZone(),
						(0, i.jsxs)(M.Z, {
							grow: 0,
							className: eP.buttons,
							children: [
								(0, i.jsx)(ew, {
									selfMute: n,
									serverMute: s,
									suppress: l,
									awaitingRemote: a,
									tooltipText: d ? eb.Z.Messages.ACCOUNT_SPEAKING_WHILE_MUTED : (0, O.Z)(n, s, l, a),
									tooltipColor: d ? E.TooltipColors.GREEN : void 0,
									tooltipForceOpen: d || void 0,
									onMouseEnter: this.handleMouseEnterMute,
									onMouseLeave: this.handleMouseLeaveMute,
									onClick: this.handleToggleSelfMute,
									onContextMenu: this.handleInputAudioContextMenu
								}),
								(0, i.jsx)(eB, {
									selfDeaf: t,
									serverDeaf: r,
									onClick: this.handleToggleSelfDeaf,
									onContextMenu: this.handleOutputAudioContextMenu,
									awaitingRemote: a
								}),
								(0, i.jsx)(U.ZP, {
									contentTypes: c.settings,
									children: (e) => {
										let { visibleContent: t, markAsDismissed: n } = e;
										switch (t) {
											case o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
												return (0, i.jsx)(E.Popout, {
													position: 'top',
													align: 'center',
													shouldShow: !0,
													renderPopout: () => (0, i.jsx)(q.Z, {}),
													children: this.renderSettingsGear
												});
											case o.z.QUEST_2_ENROLLMENT_TOOLTIP:
												return (0, i.jsx)(E.Popout, {
													position: 'top',
													align: 'center',
													shouldShow: !0,
													renderPopout: () =>
														(0, i.jsx)(B.Z, {
															markAsDismissed: n,
															partnerGame: ex.X2.FORTNITE
														}),
													children: this.renderSettingsGear
												});
											case o.z.QUEST_2_COMPLETION_TOOLTIP:
												return (0, i.jsx)(E.Popout, {
													position: 'top',
													align: 'center',
													shouldShow: !0,
													renderPopout: () =>
														(0, i.jsx)(H.Z, {
															markAsDismissed: n,
															partnerGame: ex.X2.FORTNITE
														}),
													children: this.renderSettingsGear
												});
											case o.z.USER_SAFETY_SAFE_DIRECT_MESSAGING:
												return (0, i.jsx)(E.Popout, {
													position: 'top',
													align: 'center',
													shouldShow: !0,
													renderPopout: () => (0, i.jsx)(er.Z, { markAsDismissed: n }),
													children: this.renderSettingsGear
												});
											case o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
												return (0, i.jsx)(E.Popout, {
													position: 'top',
													align: 'center',
													shouldShow: !0,
													renderPopout: () => (0, i.jsx)(J.Z, { markAsDismissed: n }),
													children: this.renderSettingsGear
												});
											case o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
												return (0, i.jsx)(E.Popout, {
													position: 'top',
													align: 'center',
													shouldShow: !0,
													renderPopout: () => (0, i.jsx)($.Z, { markAsDismissed: n }),
													children: this.renderSettingsGear
												});
											case o.z.SOUNDBOARD_VOLUME_EDUCATION:
												return (0, i.jsx)(E.Popout, {
													position: 'top',
													align: 'center',
													shouldShow: !0,
													renderPopout: () => (0, i.jsx)(en.Z, { markAsDismissed: n }),
													children: this.renderSettingsGear
												});
											case o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
												return (0, i.jsx)(E.Popout, {
													position: 'top',
													align: 'center',
													shouldShow: !0,
													renderPopout: () => (0, i.jsx)(ee.P, { markAsDismissed: n }),
													children: this.renderSettingsGear
												});
											case o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
												return (0, i.jsx)(E.Popout, {
													position: 'top',
													align: 'center',
													shouldShow: !0,
													renderPopout: () => (0, i.jsx)(es.Z, {}),
													children: this.renderSettingsGear
												});
											default:
												return this.renderSettingsGear();
										}
									}
								})
							]
						})
					]
				});
	}
	constructor(...e) {
		super(...e),
			eM(this, 'copiedTimeout', new c.V7()),
			eM(this, 'copiedDecayTimeout', new c.V7()),
			eM(this, 'speakingWhileMutedTooltipTimeout', new c.V7()),
			eM(this, 'state', {
				hovered: !1,
				copiedStreak: 0,
				shouldShowNametagTooltip: !1,
				shouldShowCopiedFeedback: !1,
				shouldShowSpeakingWhileMutedTooltip: !1,
				hoveringOnMute: !1
			}),
			eM(this, 'handleToggleSelfMute', () => {
				let { serverMute: e, suppress: t } = this.props;
				(0, x.Z)(e, t);
			}),
			eM(this, 'handleToggleSelfDeaf', () => {
				let { serverDeaf: e } = this.props;
				(0, R.Z)(e);
			}),
			eM(this, 'handleOpenAccountSettings', () => {
				this.handleOpenSettings();
			}),
			eM(this, 'handleOpenSettings', function () {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.oAB.ACCOUNT,
					t = arguments.length > 1 ? arguments[1] : void 0,
					n = arguments.length > 2 ? arguments[2] : void 0;
				I.Z.open(e, t, n);
			}),
			eM(this, 'handleOpenSettingsContextMenu', (e) => {
				let { currentUser: t } = this.props;
				null != t &&
					(0, m.jW)(e, async () => {
						let { default: e } = await Promise.all([n.e('96427'), n.e('35728'), n.e('52249'), n.e('54803'), n.e('15685'), n.e('47006'), n.e('32776'), n.e('18209'), n.e('33053'), n.e('8016'), n.e('37581'), n.e('76540'), n.e('68136'), n.e('87624'), n.e('22646'), n.e('5528'), n.e('43331'), n.e('30419'), n.e('18824'), n.e('52619'), n.e('29291'), n.e('28342')]).then(n.bind(n, 923422));
						return (n) =>
							(0, i.jsx)(e, {
								...n,
								user: t,
								premiumSubscription: this.props.premiumSubscription,
								webBuildOverride: this.props.webBuildOverride
							});
					});
			}),
			eM(this, 'handleInputAudioContextMenu', (e) => {
				(0, m.jW)(e, async () => {
					let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
					return () =>
						(0, i.jsx)(e, {
							onClose: m.Zy,
							renderInputDevices: !0,
							renderInputModes: !0,
							renderInputVolume: !0
						});
				});
			}),
			eM(this, 'handleOutputAudioContextMenu', (e) => {
				(0, m.jW)(e, async () => {
					let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
					return () =>
						(0, i.jsx)(e, {
							onClose: m.Zy,
							renderOutputDevices: !0,
							renderOutputVolume: !0
						});
				});
			}),
			eM(this, 'handleMouseEnter', () => {
				this.setState({ hovered: !0 });
			}),
			eM(this, 'handleMouseLeave', () => {
				this.setState({ hovered: !1 });
			}),
			eM(this, 'handleMouseEnterMute', () => {
				this.setState({
					hoveringOnMute: !0,
					shouldShowSpeakingWhileMutedTooltip: !1
				}),
					this.speakingWhileMutedTooltipTimeout.stop();
			}),
			eM(this, 'handleMouseLeaveMute', () => {
				this.setState({ hoveringOnMute: !1 });
			}),
			eM(this, 'handleCopyTag', () => {
				let { currentUser: e } = this.props,
					{ shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
				if (null == e) return;
				(0, eS.JG)(
					eN.ZP.getUserTag(e, {
						decoration: 'never',
						identifiable: 'always'
					})
				),
					ep.default.track(eO.rMx.TEXT_COPIED, { type: 'User Tag' });
				let i = {
					shouldShowCopiedFeedback: !0,
					shouldShowNametagTooltip: !0
				};
				!t && (i.copiedStreak = n + 1),
					this.setState(i, () => {
						this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
					});
			}),
			eM(this, 'handleOccludedChanged', () => {
				let { occluded: e } = this.props;
				e &&
					this.setState({
						shouldShowNametagTooltip: !1,
						shouldShowSpeakingWhileMutedTooltip: !1
					});
			}),
			eM(this, 'handleSpeakingWhileMutedChanged', () => {
				let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: a } = this.props,
					{ hoveringOnMute: s } = this.state;
				i
					? !s &&
						e &&
						!t &&
						!n &&
						!a &&
						this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
							this.speakingWhileMutedTooltipTimeout.start(2000, () => this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }));
						})
					: (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop());
			}),
			eM(this, 'renderSettingsGear', () =>
				(0, i.jsx)(ek, {
					isEligibleForPomelo: this.props.isEligibleForPomelo,
					webBuildOverride: this.props.webBuildOverride,
					onClick: this.handleOpenAccountSettings,
					onContextMenu: this.handleOpenSettingsContextMenu
				})
			);
	}
}
function eG() {
	var e, t;
	let n = (0, l.e7)([eI.default], () => eI.default.getCurrentUser()),
		s = (0, G._g)(ex.X2.FORTNITE),
		r = (0, l.e7)([ec.default], () => ec.default.getId()),
		c = (0, D.a)(),
		{ streaming: d, status: u } = (0, l.cj)([eh.Z], () => ({
			streaming: null != eh.Z.findActivity((e) => e.type === eO.IIU.STREAMING),
			status: eh.Z.getStatus()
		})),
		_ = (0, f.Z)({ userId: r }),
		m = eN.ZP.useUserTag(n, { decoration: 'never' }),
		I = (0, l.e7)([em.Z], () => em.Z.hidePersonalInformation),
		g = (0, l.e7)([eE.Z, ed.Z], () => {
			let e = eE.Z.getChannelId();
			return null != e ? ed.Z.getChannel(e) : null;
		}),
		{ mute: C, selfMute: N, suppress: A } = (0, eo.Z)(g),
		{ selfDeaf: L, deaf: O } = (0, el.Z)(g),
		R = (0, l.e7)([v.C], () => {
			var e;
			return (0, Z.fD)() ? (null === (e = v.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
		}),
		x = (0, l.e7)([eg.ZP], () => eg.ZP.getPremiumTypeSubscription()),
		b = (0, l.e7)([e_.Z], () => e_.Z.getEverSpeakingWhileMuted()),
		P = (0, l.e7)([eu.Z], () => eu.Z.hasLayers()),
		M = (0, E.useModalsStore)(E.hasAnyModalOpenSelector) || P || eC.s.isDisallowPopupsSet(),
		y = (0, W.b)(),
		U = (0, l.e7)([V.Z], () => null != V.Z.getAwaitingRemoteSessionInfo()),
		B = (0, l.e7)([k.Z], () => k.Z.isCurrentQuestCompleted),
		H = (0, l.e7)([k.Z], () => k.Z.currentDropQuestGameTitle),
		Y = (0, F.n)(),
		q = (0, T.O)(),
		J = (0, Q.D)(),
		$ = (0, p.u)(),
		ee = (0, X.t)(),
		en = (0, ea.Z)(n),
		ei = (null == n ? void 0 : null === (e = n.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eR.rL,
		es = 'account';
	(0, S.j)({
		location: es + ' auto on',
		autoTrackExposure: !0
	}),
		(0, S.j)({
			location: es + ' auto off',
			autoTrackExposure: !1
		}),
		(0, Q.o)();
	let er = (0, l.e7)([et.Z], () => et.Z.hasHadOtherUserPlaySoundInSession()),
		ep = (function () {
			let e = (0, j.wE)(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
				[t, n] = (0, l.Wu)([z.Z], () => [z.Z.hasFetchedRelevance, z.Z.profileThemesRelevanceExceeded]),
				[i, s] = (0, l.Wu)([eg.ZP], () => [eg.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eg.ZP.getMostRecentPremiumTypeSubscription()]),
				{ enabled: r } = K.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
				c = a.useMemo(() => {
					let e = new Date().getTime();
					return null != s && (s.status === eO.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < ey);
				}, [s]);
			return (
				a.useEffect(() => {
					(async () => {
						if (e || null != n || !r) return;
						if (!i) {
							await (0, h.ou)();
							return;
						}
						if (!c) !t && (await (0, h.l0)());
					})();
				}, [r, n, e, i, t, c]),
				!e && !!r && !c && null != n && n
			);
		})(),
		eT = {
			avatar: [],
			settings: []
		};
	return (
		!M && (ep && eT.settings.push(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), s && (eT.settings.push(o.z.QUEST_2_ENROLLMENT_TOOLTIP), B && H === (null === (t = (0, w.BS)(ex.X2.FORTNITE)) || void 0 === t ? void 0 : t.title) && eT.settings.push(o.z.QUEST_2_COMPLETION_TOOLTIP)), Y && q && eT.settings.push(o.z.USER_SAFETY_SAFE_DIRECT_MESSAGING), J && (1 === $ ? eT.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eT.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), er && eT.settings.push(o.z.SOUNDBOARD_VOLUME_EDUCATION), ee && eT.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), en && eT.settings.push(o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), ei && eT.avatar.push(o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
		(0, i.jsx)(eU, {
			currentUser: n,
			customStatusActivity: c,
			dismissibleContents: eT,
			userTag: m,
			hidePrivateData: I,
			occluded: M,
			premiumSubscription: x,
			selfDeaf: L,
			selfMute: N,
			serverDeaf: O,
			serverMute: C,
			speaking: _,
			speakingWhileMuted: b,
			status: u,
			streaming: d,
			suppress: A,
			webBuildOverride: R,
			awaitingRemote: U,
			isEligibleForPomelo: y
		})
	);
}
function ek(e) {
	let { webBuildOverride: t, isEligibleForPomelo: n, onClick: a, onContextMenu: s } = e,
		r = (0, E.useRedesignIconContext)().enabled,
		l = null,
		o = E.SettingsIcon,
		c = (0, _.i)();
	return (
		r
			? (o = null != t ? E.SettingsInfoIcon : n ? E.SettingsCircleIcon : c.Component)
			: null != t
				? (l = (0, i.jsx)(E.CircleInformationIcon, {
						size: 'custom',
						color: 'currentColor',
						width: 9,
						height: 9,
						className: eP.hasBuildOverride,
						'aria-hidden': !0
					}))
				: n &&
					(l = (0, i.jsx)(E.CircleBadge, {
						color: P.Z.STATUS_DANGER,
						className: eP.hasBuildOverride,
						'aria-hidden': !0
					})),
		(0, i.jsx)(ev.Z, {
			tooltipText: null != t ? eb.Z.Messages.USER_SETTINGS_WITH_BUILD_OVERRIDE.format({ webBuildOverride: t.id }) : eb.Z.Messages.USER_SETTINGS,
			onClick: a,
			onContextMenu: s,
			innerClassName: null != t || n ? eP.buildOverrideButton : null,
			icon: o,
			...c.events,
			children: l
		})
	);
}
function ew(e) {
	let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: r, tooltipText: l, tooltipColor: o, tooltipForceOpen: c, onMouseEnter: d, onMouseLeave: _, onClick: h, onContextMenu: m } = e,
		I = t || s || n,
		{ Component: g, play: p, events: T } = (0, u.O)(I ? 'unmute' : 'mute'),
		S = n || s ? E.MicrophoneDenyIcon : g;
	return (
		a.useEffect(() => () => p(), [I, p]),
		(0, i.jsx)(ev.Z, {
			tooltipText: l,
			tooltipColor: o,
			tooltipForceOpen: c,
			onMouseEnter: () => {
				d(), T.onMouseEnter();
			},
			onMouseLeave: () => {
				_(), T.onMouseLeave();
			},
			icon: (0, i.jsx)(S, {
				size: 'custom',
				width: 20,
				height: 20,
				color: I ? E.tokens.colors.STATUS_DANGER : 'currentColor'
			}),
			iconForeground: I ? eP.strikethrough : null,
			onClick: h,
			onContextMenu: m,
			role: 'switch',
			'aria-label': eb.Z.Messages.MUTE,
			'aria-checked': I,
			disabled: r
		})
	);
}
function eB(e) {
	let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o } = e,
		c = t || n,
		{
			Component: u,
			play: _,
			events: { onMouseEnter: h, onMouseLeave: m }
		} = (0, d.l)(c ? 'undeafen' : 'deafen'),
		I = n ? E.HeadphonesDenyIcon : u;
	return (
		a.useEffect(() => () => _(), [c, _]),
		(0, i.jsx)(ev.Z, {
			tooltipText: (0, L.Z)(t, n, s),
			onMouseEnter: h,
			onMouseLeave: m,
			icon: (0, i.jsx)(I, {
				size: 'custom',
				width: 20,
				height: 20,
				color: c ? E.tokens.colors.STATUS_DANGER : 'currentColor'
			}),
			onClick: l,
			onContextMenu: o,
			innerClassName: r()({ [eP.redIcon]: n }),
			iconForeground: c ? eP.strikethrough : null,
			role: 'switch',
			'aria-label': eb.Z.Messages.DEAFEN,
			'aria-checked': c,
			disabled: s
		})
	);
}
