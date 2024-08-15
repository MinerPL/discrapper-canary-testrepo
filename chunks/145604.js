n.d(t, {
	Z: function () {
		return z;
	}
}),
	n(789020),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(442837),
	r = n(224706),
	l = n(593472),
	o = n(603113),
	c = n(367907),
	d = n(731429),
	u = n(188471),
	_ = n(176881),
	E = n(318885),
	h = n(358221),
	m = n(710845),
	I = n(581567),
	g = n(594190),
	p = n(38618),
	T = n(501640),
	S = n(924301),
	f = n(734307),
	C = n(355298),
	N = n(427679),
	A = n(695346),
	v = n(592125),
	Z = n(77498),
	L = n(271383),
	O = n(430824),
	R = n(131951),
	x = n(375954),
	b = n(19780),
	P = n(944486),
	M = n(914010),
	D = n(885110),
	y = n(9156),
	j = n(594174),
	U = n(774343),
	G = n(974042),
	k = n(808506),
	w = n(626135),
	B = n(630388),
	H = n(823379),
	V = n(998502),
	F = n(981631),
	Y = n(987650);
class W extends a.PureComponent {
	componentDidMount() {
		let { selectedChannelId: e, connected: t, isNSFWChannel: n, isTextInVoice: i } = this.props;
		t &&
			null != e &&
			((0, c.yw)(F.rMx.CHANNEL_OPENED, { ...(0, c.$H)(e) }),
			(0, u.a)(F.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: e }),
			i && (0, c.yw)(F.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: n }));
	}
	componentDidUpdate(e) {
		var t, n, i;
		let {
			voiceChannelId: a,
			voiceChannelGuildId: s,
			voiceChannelType: o,
			voiceChannelBitrate: p,
			videoEnabled: T,
			isScreenSharing: C,
			runningGame: L,
			runningGamePid: R,
			selectedChannelId: P,
			selectedGuildId: j,
			connected: U,
			homeLink: G,
			friendsTabSection: W,
			isNSFWChannel: z,
			isMemberPending: K,
			hasPreviewEnabled: q,
			postableChannelCount: Q,
			isTextInVoice: X,
			numMessageRequests: J
		} = this.props;
		if (e.voiceChannelId !== a && null != e.voiceChannelId) {
			let t = g.ZP.getCurrentGameForAnalytics(),
				n = null != t ? t.name : '',
				i = N.Z.getStageInstanceByChannel(e.voiceChannelId),
				a = S.ZP.getActiveEventByChannel(e.voiceChannelId);
			w.default.track(F.rMx.LEAVE_VOICE_CHANNEL, {
				channel_id: e.voiceChannelId,
				channel_type: e.voiceChannelType,
				channel_bitrate: e.voiceChannelBitrate,
				guild_id: e.voiceChannelGuildId,
				rtc_connection_id: b.Z.getRTCConnectionId(),
				game_name: n,
				duration: b.Z.getDuration(),
				game_platform: this.props.gamePlatform,
				game_id: this.props.gameId,
				media_session_id: b.Z.getMediaSessionId(),
				stage_instance_id: null == i ? void 0 : i.id,
				guild_scheduled_event_id: null == a ? void 0 : a.id,
				...(0, c.kO)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
				...b.Z.getVoiceStateStats(),
				...h.Z.getSelectedParticipantStats(e.voiceChannelId)
			});
		}
		if (e.voiceChannelId !== a && null != a) {
			let e = g.ZP.getCurrentGameForAnalytics(),
				t = null != e ? e.name : '',
				n = N.Z.getStageInstanceByChannel(a),
				i = S.ZP.getActiveEventByChannel(a);
			(0, c.yw)(F.rMx.CHANNEL_OPENED, { ...(0, c.$H)(a) }),
				(0, u.a)(F.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: a }),
				w.default.track(F.rMx.JOIN_VOICE_CHANNEL, {
					channel_id: a,
					channel_type: o,
					channel_bitrate: p,
					guild_id: s,
					game_name: t,
					game_platform: this.props.gamePlatform,
					game_id: this.props.gameId,
					stage_instance_id: null == n ? void 0 : n.id,
					guild_scheduled_event_id: null == i ? void 0 : i.id,
					...(0, c.oG)(s, a),
					...(0, c.kO)(s, a, T)
				});
		}
		if (e.runningGame !== L && null != L && !L.isLauncher) {
			let e = Z.Z.getGameByName(L.name),
				t = g.ZP.getOverrideForGame(L),
				n = O.Z.getGuildIds(),
				i = A.SE.getSetting(),
				c = n.filter((e) => !i.includes(e)).slice(0, 200),
				d = null;
			d = null != t ? 'custom_override' : null != e ? 'verified_game' : 'launcher';
			let u = (0, g.jk)(L);
			if (
				(setTimeout(() => {
					var t;
					let n = V.ZP.GetWindowFullscreenTypeByPid(L.pid, L.name, L.fullscreenType),
						{ gameName: i, gameId: r, exe: _, distributor: E } = (0, I.G8)(L);
					w.default.track(F.rMx.LAUNCH_GAME, {
						game: i,
						game_id: r,
						verified: null != e && (0, I.vp)(_, null == e ? void 0 : e.executables),
						elevated: L.elevated,
						is_launcher: null !== (t = null == L ? void 0 : L.isLauncher) && void 0 !== t && t,
						game_platform: F.M7m.DESKTOP,
						detection_method: d,
						distributor: E,
						is_overlay_enabled: k.Z.enabled,
						is_overlay_game_enabled: u.enabled,
						is_overlay_game_source: u.source,
						fullscreen_type: l.Jx[n],
						overlay_method: Y.gl[u.overlayMethod],
						activity_status_enabled: A.G6.getSetting(),
						activity_status_shared_guilds: c,
						current_user_status: D.Z.getStatus(),
						game_detection_enabled: (0, g.ik)(L),
						executable_path: _,
						voice_channel_id: a,
						voice_channel_type: o,
						voice_channel_bitrate: p,
						voice_channel_guild_id: s
					}),
						null != _ && g.ZP.addExecutableTrackedByAnalytics(_);
				}, 10000),
				null != L.name && null != R && Z.Z.shouldReport(L.name))
			) {
				let e = L.name;
				r.Z.identifyGame(R, e)
					.then((e) => r.Z.reportUnverifiedGame(e))
					.catch((e) => new m.Z('AutoAnalytics').error('Cannot identify game', e));
			}
		}
		if ((e.videoEnabled !== T || e.isScreenSharing !== C) && null != a) {
			let e = 'none',
				t = [C ? 'screen' : null, T ? 'camera' : null].filter(H.lm),
				n = null;
			C ? ((e = 'screen'), (n = (0, E.t)())) : T && (e = 'camera'),
				w.default.track(F.rMx.VIDEO_INPUT_TOGGLED, {
					video_input_type: e,
					video_toggle_source: __OVERLAY__ ? 'overlay' : 'app',
					enabled_inputs: t,
					preview_enabled: A.qF.getSetting(),
					...n,
					...this.getGameMetadata(),
					...(0, c.AB)(a)
				});
		}
		if (U && null != j && (j !== e.selectedGuildId || !e.connected || (K && !e.isMemberPending))) {
			let e = {
				...(K
					? {
							is_pending: K,
							preview_enabled: q
						}
					: {}),
				postable_channels: Q,
				premium_progress_bar_enabled:
					null !==
						(n =
							null === (t = O.Z.getGuild(M.Z.getGuildId())) || void 0 === t ? void 0 : t.premiumProgressBarEnabled) &&
					void 0 !== n &&
					n,
				viewing_all_channels: !y.ZP.isOptInEnabled(j),
				num_recent_channels: f.Z.recentsChannelCount(j)
			};
			(0, c.yw)(F.rMx.GUILD_VIEWED, e), (0, u.a)(F.rMx.GUILD_VIEWED_CLICKSTREAM, { guildId: j });
		} else
			U && null == j && G === F.Z5c.FRIENDS && (!e.connected || W !== e.friendsTabSection || G !== e.homeLink)
				? (0, _.Z)({ tab_opened: W })
				: U &&
					null == j &&
					G === F.Z5c.MESSAGE_REQUESTS &&
					(!e.connected || G !== e.homeLink) &&
					!this.isMessageRequestsInitialized &&
					((this.isMessageRequestsInitialized = !0),
					w.default.track(F.rMx.MESSAGE_REQUESTS_INITIALIZED, { num_message_requests: J }));
		if (U && null != P && (!e.connected || P !== e.selectedChannelId || j !== e.selectedGuildId)) {
			let t = e.selectedChannelId,
				n = v.Z.getChannel(t),
				a = O.Z.getGuild(null == n ? void 0 : n.getGuildId());
			if (null != t && null != n && null != a && a.publicUpdatesChannelId === t) {
				let e = x.Z.getMessages(t),
					s = e
						.toArray()
						.reverse()
						.find((e) => {
							var t;
							return (
								(0, B.yE)(e.flags, F.iLy.IS_CROSSPOST) &&
								(null === (t = e.messageReference) || void 0 === t ? void 0 : t.guild_id) === '667560445975986187'
							);
						});
				w.default.track(F.rMx.ACK_COMMUNITY_MESSAGES, {
					last_message_id: null == s ? void 0 : s.id,
					last_message_reference_message_id:
						null == s ? void 0 : null === (i = s.messageReference) || void 0 === i ? void 0 : i.message_id,
					messages_loaded: e.hasFetched,
					...(0, c.v_)(n),
					...(0, c.hH)(a.id)
				});
			}
			let s = (0, d.K)(v.Z.getChannel(P), !0);
			(0, c.yw)(F.rMx.CHANNEL_OPENED, {
				...s,
				...(0, c.$H)(P)
			}),
				(0, u.a)(F.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: P }),
				X && (0, c.yw)(F.rMx.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: z });
		}
	}
	getGameMetadata() {
		return {
			game_platform: this.props.gamePlatform,
			game_name: this.props.gameName,
			game_exe_name: this.props.gameExeName,
			game_id: this.props.gameId
		};
	}
	render() {
		return null;
	}
	constructor(...e) {
		var t, n, i;
		super(...e),
			(t = this),
			(i = !1),
			(n = 'isMessageRequestsInitialized') in t
				? Object.defineProperty(t, n, {
						value: i,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (t[n] = i);
	}
}
function z() {
	let [e, t] = (0, s.Wu)([P.Z], () => [P.Z.getVoiceChannelId(), P.Z.getChannelId()], []),
		n = (0, s.e7)([v.Z], () => v.Z.getChannel(t), [t]),
		a = (0, s.e7)([h.Z], () => (null == n ? void 0 : n.id) != null && h.Z.getChatOpen(n.id), [n]),
		r = null == n ? void 0 : n.nsfw,
		l = (0, s.e7)([v.Z], () => v.Z.getChannel(e), [e]),
		c = (0, s.e7)([M.Z], () => M.Z.getGuildId(), []),
		d = (0, s.e7)([O.Z], () => O.Z.getGuild(c), [c]),
		u = (0, s.e7)([j.default], () => j.default.getCurrentUser(), []),
		_ = (0, s.e7)(
			[L.ZP],
			() => {
				var e, t;
				return (
					null != u &&
					null != c &&
					null !== (t = null === (e = L.ZP.getMember(c, u.id)) || void 0 === e ? void 0 : e.isPending) &&
					void 0 !== t &&
					t
				);
			},
			[u, c]
		),
		E = (0, s.e7)([G.ZP], () => G.ZP.getState().section, []),
		m = (0, s.e7)([U.Z], () => U.Z.getHomeLink(), []),
		I = (0, s.e7)([p.Z], () => p.Z.isConnected(), []),
		[S, f] = (0, s.Wu)([R.Z], () => [R.Z.isVideoEnabled(), R.Z.isScreenSharing()], []),
		N = (0, s.e7)([D.Z], () => D.Z.getPrimaryActivity(), []),
		A = (0, s.e7)([g.ZP], () => g.ZP.getCurrentGameForAnalytics(), []),
		Z = (0, T.Z)(c),
		x = (0, s.e7)([C.Z], () => C.Z.getMessageRequestsCount(), []),
		b = {
			selectedChannelId: t,
			isNSFWChannel: r,
			selectedGuildId: c,
			friendsTabSection: E,
			homeLink: m,
			connected: I,
			videoEnabled: S,
			isScreenSharing: f,
			voiceChannelId: null == l ? void 0 : l.id,
			voiceChannelGuildId: null == l ? void 0 : l.getGuildId(),
			voiceChannelType: null == l ? void 0 : l.type,
			voiceChannelBitrate: null == l ? void 0 : l.bitrate,
			runningGame: A,
			runningGamePid: null != A ? A.pid : null,
			gamePlatform: (0, o.Z)(N),
			gameName: null != N ? N.name : null,
			gameId: null != N ? N.application_id : null,
			gameExeName: null != A ? A.exeName : null,
			hasPreviewEnabled: null == d ? void 0 : d.features.has(F.oNc.PREVIEW_ENABLED),
			isMemberPending: _,
			postableChannelCount: Z,
			isTextInVoice: a,
			numMessageRequests: x
		};
	return (0, i.jsx)(W, { ...b });
}
