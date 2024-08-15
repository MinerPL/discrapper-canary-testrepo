n(47120);
var i = n(735250),
	l = n(470079),
	r = n(120356),
	a = n.n(r),
	s = n(512722),
	o = n.n(s),
	c = n(442837),
	u = n(704215),
	d = n(692547),
	h = n(481060),
	p = n(988298),
	_ = n(475179),
	f = n(925549),
	g = n(872810),
	m = n(438139),
	C = n(730749),
	I = n(607070),
	E = n(566620),
	N = n(317381),
	x = n(620662),
	S = n(513202),
	v = n(835473),
	Z = n(67212),
	T = n(757454),
	L = n(552740),
	A = n(933557),
	b = n(194082),
	M = n(311352),
	R = n(436774),
	O = n(730417),
	P = n(524347),
	y = n(853197),
	j = n(616360),
	D = n(858064),
	w = n(594190),
	U = n(925329),
	G = n(810568),
	k = n(168524),
	B = n(569545),
	H = n(382182),
	V = n(74299),
	F = n(914923),
	W = n(165393),
	z = n(989941),
	Y = n(803647),
	K = n(690221),
	q = n(231664),
	Q = n(759198),
	X = n(131704),
	J = n(199902),
	$ = n(314897),
	ee = n(592125),
	et = n(984933),
	en = n(430824),
	ei = n(131951),
	el = n(496675),
	er = n(158776),
	ea = n(699516),
	es = n(944486),
	eo = n(885110),
	ec = n(594174),
	eu = n(449224),
	ed = n(626135),
	eh = n(358085),
	ep = n(870569),
	e_ = n(345243),
	ef = n(115530),
	eg = n(793224),
	em = n(978769),
	eC = n(981631),
	eI = n(918559),
	eE = n(288836),
	eN = n(689938),
	ex = n(207923);
function eS(e, t, n) {
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
let ev = (0, m.Z)(function (e) {
	let { message: t } = e;
	return (0, i.jsx)(e_.Z, { children: t });
});
class eZ extends l.PureComponent {
	componentDidUpdate(e) {
		!e.dropsActivityPanelExperienceBlocked &&
			this.props.dropsActivityPanelExperienceBlocked &&
			this.setState({ isDropsActivityPanelTooltipOpen: !1 });
	}
	isJoinableActivity() {
		let { application: e, activity: t, embeddedActivity: n } = this.props;
		return (
			null != e &&
			(null != n
				? n.applicationId === e.id
				: null != t && t.application_id === e.id && t.type === eC.IIU.PLAYING && (0, x.Z)(t, eC.xjy.JOIN))
		);
	}
	renderGoLiveButton() {
		let e, t, n, l;
		let {
			canGoLive: r,
			guildId: a,
			isStreaming: s,
			channel: o,
			canStream: c,
			runningGame: u,
			embeddedActivity: d
		} = this.props;
		return (null != u || null == d) && (s || (r && null != u))
			? (s
					? ((e = !1),
						(t = this.handleClickStopStreamingButton),
						(n = h.ScreenXIcon),
						(l = eN.Z.Messages.STOP_STREAMING))
					: c
						? ((e = !1),
							(t = this.handleClickGoLiveButton),
							(n = h.ScreenArrowIcon),
							(l =
								null != u
									? eN.Z.Messages.ACTIVITY_PANEL_GO_LIVE_STREAM_GAME.format({ game: u.name })
									: eN.Z.Messages.ACTIVITY_PANEL_GO_LIVE))
						: ((e = !0),
							(t = null),
							(n = h.ScreenArrowIcon),
							(l =
								null != o && (0, X.vd)(o.type)
									? eN.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_VOICE
									: null != a
										? eN.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NO_PERMISSION_IN_GUILD
										: eN.Z.Messages.ACTIVITY_PANEL_GO_LIVE_TOOLTIP_NOT_IN_GUILD)),
				(0, i.jsx)('div', {
					className: ex.panelButtonContainer,
					children: (0, i.jsx)(ep.Z, {
						tooltipText: l,
						disabled: e,
						onClick: t,
						icon: n
					})
				}))
			: null;
	}
	renderInviteButton() {
		let { embeddedActivity: e } = this.props;
		return this.isJoinableActivity() && null == e
			? (0, i.jsx)(ep.Z, {
					tooltipText: eN.Z.Messages.INVITE_EMBED_INVITE_TO_JOIN,
					onClick: this.handleClickInviteButton,
					icon: h.GroupPlusIcon,
					iconForeground: ex.__invalid_actionIcon
				})
			: null;
	}
	renderDropsButton() {
		let { dropsTooltipAction: e, dropsPartnerGame: t } = this.props;
		if (null == t) return null;
		let n = this.state.isDropsActivityPanelTooltipOpen,
			l = () => this.setState({ isDropsActivityPanelTooltipOpen: !1 });
		return (0, i.jsx)(h.Popout, {
			shouldShow: n,
			position: 'top',
			align: 'center',
			onRequestClose: l,
			renderPopout: () =>
				(0, i.jsx)(D.Z, {
					partnerGame: t,
					tooltipAction: e,
					onClose: l
				}),
			children: () =>
				(0, i.jsxs)(i.Fragment, {
					children: [
						this.state.showDropsSparkles && this.renderSparkles(),
						(0, i.jsx)(ep.Z, {
							'aria-label': eN.Z.Messages.DROPS_ENABLED,
							tooltipText: n ? null : eN.Z.Messages.DROPS_ENABLED,
							onClick: this.handleClickDropsButton,
							icon: j.Z
						})
					]
				})
		});
	}
	renderLeaveEmbeddedActivityButton() {
		let { embeddedActivity: e, channel: t } = this.props;
		return null == e || null == t
			? null
			: (0, i.jsx)(ep.Z, {
					tooltipText: eN.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY,
					onClick: this.handleClickLeaveEmbeddedActivityButton(e.applicationId, t),
					icon: h.DoorExitIcon,
					iconForeground: ex.__invalid_actionIcon
				});
	}
	renderBroadcastButton() {
		let { channel: e } = this.props;
		return null != e && (0, X.vd)(e.type) ? null : (0, i.jsx)(eg.Z, {});
	}
	renderBroadcastSettingsButton() {
		let { broadcast: e } = this.props;
		return null == e ? null : (0, i.jsx)(em.Z, {});
	}
	renderSparkles() {
		let { useReducedMotion: e } = this.props;
		async function t() {
			let { default: e } = await n.e('5217').then(n.t.bind(n, 801048, 19));
			return e;
		}
		return (0, i.jsx)('div', {
			className: ex.sparkleContainer,
			children: (0, i.jsx)(h.LottieAnimation, {
				importData: t,
				shouldAnimate: !e,
				className: ex.sparkles
			})
		});
	}
	renderActions() {
		let e = this.renderGoLiveButton(),
			t = this.renderDropsButton(),
			n = this.renderInviteButton(),
			l = this.renderLeaveEmbeddedActivityButton(),
			r = this.renderClipsButton(),
			a = this.renderBroadcastButton(),
			s = this.renderBroadcastSettingsButton();
		return null == e && null == n && null == l
			? null
			: (0, i.jsxs)('div', {
					className: ex.actions,
					children: [a, e, s, n, null == e ? l : r, t]
				});
	}
	getGameName() {
		let { runningGame: e, application: t } = this.props;
		return null != t ? t.name : null != e ? e.name : eN.Z.Messages.STATUS_UNKNOWN;
	}
	renderGame() {
		let { isStreaming: e, dropsPartnerGame: t, application: n, runningGame: l } = this.props,
			r = this.getGameName();
		return (0, i.jsxs)('div', {
			className: ex.gameWrapper,
			children: [
				(0, i.jsxs)('div', {
					className: ex.gameIconWrapper,
					children: [
						(0, i.jsx)(U.Z, {
							className: ex.gameIcon,
							game: n,
							pid: null == l ? void 0 : l.pid
						}),
						e
							? (0, i.jsx)(h.VideoIcon, {
									size: 'md',
									color: 'currentColor',
									className: ex.liveBadge
								})
							: null
					]
				}),
				(0, i.jsx)('div', {
					className: a()(ex.info, { [ex.infoWithDrops]: null != t }),
					children:
						null != r
							? (0, i.jsxs)(i.Fragment, {
									children: [
										(0, i.jsx)(eT, {
											name: r,
											applicationId: null == n ? void 0 : n.id
										}),
										null != t &&
											(0, i.jsx)('div', {
												className: ex.dropsBadgeWrapper,
												children: (0, i.jsx)(h.TextBadge, {
													text: eN.Z.Messages.DROPS_AVAILABLE,
													color: d.Z.unsafe_rawColors.BRAND_500.css,
													className: ex.dropsBadge
												})
											})
									]
								})
							: null
				})
			]
		});
	}
	renderScreenshare() {
		let { isStreaming: e, dropsPartnerGame: t, streamMetadata: n, streamQualityIndicator: l } = this.props,
			{ title: r, sanitizedTitle: s } = (0, F.Z)(n);
		return (0, i.jsxs)('div', {
			className: ex.gameWrapper,
			children: [
				e
					? (0, i.jsx)(W.Z, { title: s })
					: (0, i.jsx)(b.ZP, {
							look: b.ZP.Looks.GRAY,
							size: b.ZP.Sizes.SMALL,
							className: ex.liveIndicator
						}),
				(0, i.jsxs)('div', {
					className: a()(ex.info, { [ex.infoWithDrops]: null != t }),
					children: [
						(0, i.jsx)(ef.Z, { children: r }),
						null != l &&
							(0, i.jsxs)('div', {
								className: ex.perksDemoContainer,
								children: [
									(0, i.jsx)(h.NitroWheelIcon, {
										size: 'xxs',
										color: R.JX.PREMIUM_TIER_2
									}),
									(0, i.jsx)(Q.Z, {
										className: ex.perksDemoText,
										variant: 'text-xxs/semibold',
										children: l
									})
								]
							}),
						null != t &&
							(0, i.jsx)('div', {
								className: ex.dropsBadgeWrapper,
								children: (0, i.jsx)(h.TextBadge, {
									text: eN.Z.Messages.DROPS_AVAILABLE,
									color: d.Z.unsafe_rawColors.BRAND_500.css,
									className: ex.dropsBadge
								})
							})
					]
				})
			]
		});
	}
	renderEmbeddedActivity() {
		let e;
		let { application: t, embeddedActivity: n, channel: l, channelName: r, guildForConnectedChannel: a } = this.props;
		if (null == n || null == l || null == t) return null;
		let s = { start: n.connectedSince },
			o = r;
		null != a
			? ((e = eC.Z5c.CHANNEL(a.id, l.id)), (o = ''.concat(o, ' / ').concat(a.name)))
			: (e = eC.Z5c.CHANNEL(eC.ME, l.id));
		let c = (0, i.jsx)(K.Z, {
			href: e,
			onClick: this.handleApplicationLinkClick,
			children: (0, i.jsx)(e_.Z, {
				className: ex.channel,
				children: o
			})
		});
		return (0, i.jsxs)('div', {
			className: ex.gameWrapper,
			children: [
				(0, i.jsx)(U.Z, {
					className: ex.gameIcon,
					game: t,
					size: U.Z.Sizes.SMALL
				}),
				(0, i.jsxs)('div', {
					className: ex.info,
					children: [
						(0, i.jsx)(K.Z, {
							href: e,
							onClick: this.handleApplicationLinkClick,
							children: (0, i.jsx)(ef.Z, {
								className: ex.activityName,
								children: t.name
							})
						}),
						(0, X.Qm)(l.type) ? c : (0, i.jsx)(ev, { timestamps: s })
					]
				})
			]
		});
	}
	render() {
		let {
			canGoLive: e,
			embeddedActivity: t,
			runningGame: n,
			isStreaming: l,
			streamMetadata: r,
			className: s
		} = this.props;
		return l || ((this.isJoinableActivity() || e) && (null != n || null != t))
			? (0, i.jsx)('div', {
					className: a()(ex.panel, s),
					children: (0, i.jsxs)('div', {
						className: ex.body,
						children: [
							(() =>
								null == n || (l && (null == r ? void 0 : r.pid) == null)
									? null != t
										? this.renderEmbeddedActivity()
										: this.renderScreenshare()
									: this.renderGame())(),
							this.renderActions()
						]
					})
				})
			: null;
	}
	constructor(...e) {
		super(...e),
			eS(this, 'modalKey', void 0),
			eS(this, 'state', {
				isDropsActivityPanelTooltipOpen: !1,
				showDropsSparkles: this.props.showDropsSparkles
			}),
			eS(this, 'startBroadcast', () => {
				let { stream: e, channel: t, runningGame: n } = this.props,
					i = null != t && (0, X.vd)(t.type) ? t : null;
				null != i &&
					null != n &&
					(null == e
						? (0, g.tE)({
								channelId: i.id,
								pid: n.pid
							})
						: (0, Z.v$)((0, B.V9)(e), n.pid));
			}),
			eS(this, 'handleClickGoLiveButton', () => {
				let { guildId: e, channel: t, canStartBroadcast: l } = this.props,
					r = null != t && (0, X.vd)(t.type) ? t : null,
					a = null != r ? r.getGuildId() : e;
				if ((null == r ? void 0 : r.isBroadcastChannel()) && l) {
					(0, L.D)(this.startBroadcast);
					return;
				}
				(0, h.openModalLazy)(async () => {
					let { default: e } = await Promise.all([n.e('79477'), n.e('14676')]).then(n.bind(n, 60594));
					return (t) =>
						(0, i.jsx)(e, {
							...t,
							selectSource: !1,
							guildId: a,
							analyticsLocation: eC.Sbl.ACTIVITY_PANEL
						});
				}).then((e) => {
					null != e && (this.modalKey = e);
				});
			}),
			eS(this, 'handleClickStopStreamingButton', () => {
				let { stream: e, channel: t, userId: n } = this.props,
					i = null != t && (0, X.vd)(t.type) ? t : null;
				if ((null == i ? void 0 : i.isBroadcastChannel()) && (null == i ? void 0 : i.isOwner(n))) {
					(0, L.Z)(() => (0, Y.Z)(e));
					return;
				}
				(0, Y.Z)(e);
			}),
			eS(this, 'handleClickInviteButton', () => {
				let { activity: e, analyticsContext: t } = this.props;
				o()(null != e, 'Received null activity'),
					ed.default.track(eC.rMx.OPEN_MODAL, {
						type: 'Send Join Invite',
						application_id: e.application_id,
						location: t.location
					}),
					(0, p.h7)(e, !1);
			}),
			eS(this, 'handleClickDropsButton', () => {
				let { dropsPartnerGame: e, dropsTooltipAction: t, userId: n } = this.props;
				if (null == e) return;
				let i = (0, y.BS)(e);
				null != i &&
					(ed.default.track(eC.rMx.DROPS_ACTIVITY_PANEL_BUTTON_CLICK, {
						user_id: n,
						drops_quest_id: i.dropsQuestId,
						game_id: i.dropsGameId,
						game_name: i.title.toLowerCase(),
						show_sparkles: this.state.showDropsSparkles,
						tooltip_action: t
					}),
					this.setState({
						isDropsActivityPanelTooltipOpen: !this.state.isDropsActivityPanelTooltipOpen,
						showDropsSparkles: !1
					}));
			}),
			eS(this, 'handleClickLeaveEmbeddedActivityButton', (e, t) => () => {
				S.Z.leaveActivity({
					channelId: t.id,
					applicationId: e,
					showFeedback: !0
				});
			}),
			eS(this, 'renderClipsButton', () => {
				let { stream: e } = this.props;
				return null == e ? null : (0, i.jsx)(M.Z, {});
			}),
			eS(this, 'handleApplicationLinkClick', () => {
				var e;
				let { channel: t, embeddedActivity: n } = this.props;
				o()(null != t, 'Channel is null during navigation click'),
					o()(null != n, 'Activity null during navigation click'),
					(0, X.vd)(t.type) && _.Z.selectParticipant(t.id, n.applicationId),
					f.Z.channelListScrollTo(null !== (e = t.guild_id) && void 0 !== e ? e : eC.ME, t.id),
					(0, X.Qm)(t.type) && (0, E.tg)(eI.Ez.PANEL);
			});
	}
}
function eT(e) {
	let { name: t, applicationId: n } = e,
		l = (0, k.Z)({
			location: 'ActivityPanelGameCard',
			applicationId: n,
			source: G.m1.RtcPanel,
			trackEntryPointImpression: !0
		});
	return (0, i.jsx)(h.Clickable, {
		onClick: l,
		className: a()(null != l && ex.clickableGameName),
		children: (0, i.jsx)(ef.Z, {
			className: ex.gameName,
			children: t
		})
	});
}
t.Z = (0, C.Z)(function (e) {
	var t;
	let { guildId: n, ...l } = e,
		r = (0, c.e7)([$.default], () => $.default.getId()),
		a = (0, c.e7)([w.ZP, eu.Z], () => (0, z.Z)(w.ZP, eu.Z)),
		s = (0, c.e7)([es.Z, ee.Z], () => ee.Z.getChannel(es.Z.getVoiceChannelId())),
		o = (0, c.e7)([N.ZP], () => N.ZP.getConnectedActivityChannelId()),
		d = (0, c.e7)([ee.Z], () => ee.Z.getChannel(o)),
		h = (0, c.e7)([en.Z], () => en.Z.getGuild(null == d ? void 0 : d.guild_id)),
		[p, _] = (0, c.Wu)([J.Z], () => [J.Z.getCurrentUserActiveStream(), J.Z.getStreamerActiveStreamMetadata()]),
		f = (0, c.e7)([I.Z], () => I.Z.useReducedMotion),
		g = (0, c.e7)([P.Z], () => P.Z.getActivityPanelTooltipAction()),
		{
			partnerGame: m,
			dropsActivityPanelExperienceBlocked: C,
			showDropsSparkles: E
		} = (0, O.c)(eE.X2.FORTNITE, a, u.z.QUEST_2_ENROLLMENT_TOOLTIP, u.z.QUEST_2_COMPLETION_TOOLTIP),
		x = (0, c.e7)([N.ZP], () => (null != d ? N.ZP.getSelfEmbeddedActivityForChannel(d.id) : null)),
		S = (0, c.e7)([en.Z, el.Z, et.ZP], () =>
			null != s ? H.JL(s, en.Z, el.Z, !1) : null != n && H.h_(et.ZP.getChannels(n), en.Z, el.Z).length > 0
		),
		[Z] = (0, v.Z)([
			null !==
				(t = (function () {
					if (null != _ && null != _.id) return _.id;
					if (null != a && null != a.id) return a.id;
					if (null != x) return x.applicationId;
				})()) && void 0 !== t
				? t
				: ''
		]),
		L = (0, c.e7)([ei.Z], () => (0, V.Z)(ei.Z) && (0, eh.isWindows)()),
		b = (0, c.e7)([er.Z], () => (null != r ? er.Z.findActivity(r, (e) => e.type === eC.IIU.PLAYING) : null)),
		M = null != p && p.ownerId === r && p.state !== eC.jm8.ENDED,
		R = (0, c.e7)([eo.Z], () => eo.Z.getBroadcast()),
		y = (0, T.Z)() && null != a,
		j = (0, c.e7)([ec.default, ea.Z], () => (null != d ? (0, A.F6)(d, ec.default, ea.Z) : void 0)),
		D = (0, q.Z)();
	return (0, i.jsx)(eZ, {
		...l,
		guildId: n,
		canGoLive: L,
		activity: b,
		embeddedActivity: x,
		showDropsSparkles: E,
		dropsPartnerGame: m,
		dropsActivityPanelExperienceBlocked: C,
		userId: r,
		runningGame: a,
		application: Z,
		useReducedMotion: f,
		isStreaming: M,
		channel: d,
		canStream: S,
		dropsTooltipAction: g,
		stream: p,
		streamMetadata: _,
		broadcast: R,
		canStartBroadcast: y,
		channelName: j,
		guildForConnectedChannel: h,
		streamQualityIndicator: D
	});
});
