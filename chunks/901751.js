n(47120);
var r,
	i,
	a = n(754700),
	s = n(147913),
	o = n(317381),
	l = n(594190),
	u = n(569545),
	c = n(199902),
	d = n(314897),
	_ = n(77498),
	E = n(938475),
	f = n(70956),
	h = n(272008),
	p = n(569984),
	I = n(918701),
	m = n(432945),
	T = n(5881),
	g = n(566078),
	S = n(46140),
	A = n(70722);
function N(e, t, n) {
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
let v = 1 * f.Z.Millis.MINUTE,
	O = 1 * f.Z.Millis.SECOND,
	R = (0, T.T)({ location: S.dr.QUESTS_MANAGER }),
	C = (e) =>
		(0, u.V9)({
			streamType: A.lo.CALL,
			channelId: e,
			ownerId: '1'
		});
function y() {
	let e = c.Z.getStreamerActiveStreamMetadata();
	if ((null == e ? void 0 : e.id) == null) return null;
	let t = _.Z.getDetectableGame(e.id);
	if ((null == t ? void 0 : t.id) == null) return null;
	let n = (0, I.lQ)(p.Z.quests, t.id);
	return null != n && L(n) ? n : null;
}
function D(e) {
	return E.ZP.countVoiceStatesForChannel(e) >= 2;
}
function L(e) {
	return !(0, I.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
((i = r || (r = {})).BEAT = 'BEAT'), (i.STOP = 'STOP'), (i.BEAT_TERMINAL = 'BEAT_TERMINAL');
function b(e) {
	let t = (function (e) {
		let t, n;
		for (let [e, n] of p.Z.quests)
			if ((0, I.KM)(n)) {
				t = n;
				break;
			}
		if (null == t) return;
		for (let t of o.ZP.getSelfEmbeddedActivities().values())
			if (null == e || t.channelId === e) {
				n = t;
				break;
			}
		if (null != n)
			return {
				quest: t,
				activity: n
			};
	})(e);
	if (null != t) return t;
	let n = {
		quest: null,
		activity: null
	};
	if (
		!(0, m.S)({
			location: S.dr.QUESTS_MANAGER,
			autoTrackExposure: !1
		})
	)
		return n;
	for (let t of o.ZP.getSelfEmbeddedActivities().values()) {
		var r;
		if (null != e && t.channelId !== e) continue;
		let i = null !== (r = (0, I.lQ)(p.Z.quests, t.applicationId)) && void 0 !== r ? r : null;
		if (null != i && L(i))
			return {
				quest: i,
				activity: t
			};
		n = {
			quest: null,
			activity: t
		};
	}
	return n;
}
class M extends s.Z {
	constructor(...e) {
		super(...e),
			N(this, 'streamKeyToHeartbeatState', new Map()),
			N(this, 'initiateHeartbeat', (e) => {
				let { questId: t, streamKey: n, applicationId: r } = e;
				if (this.streamKeyToHeartbeatState.has(n)) {
					R.log('~ initiateHeartbeat -> Heartbeat already initiated:', n);
					return;
				}
				let i = () => {
					let e = (function (e) {
						var t;
						let { questId: n, streamKey: r, applicationId: i } = e,
							{ channelId: a } = (0, u.my)(r),
							s = D(a),
							o = p.Z.quests.get(n);
						if (null == o || !L(o)) return 'STOP';
						let d = null === (t = y()) || void 0 === t ? void 0 : t.config,
							_ = null != c.Z.getRTCStream(r) && null != d && g.r.build(d).application.id === i && s,
							{ quest: E, activity: f } = b(),
							h =
								null != (null == E ? void 0 : E.config) &&
								(null == E ? void 0 : E.id) === n &&
								(0, I.UZ)(i, E) &&
								(null == f ? void 0 : f.channelId) === a,
							m = l.ZP.getRunningGames().map((e) => e.id),
							T = (0, I.$H)(o) && m.includes(i);
						return _ || h || T ? 'BEAT' : 'BEAT_TERMINAL';
					})({
						questId: t,
						streamKey: n,
						applicationId: r
					});
					if ((R.log('~ initiateHeartbeat -> heartbeat decision: ', e), 'BEAT' === e)) {
						(0, h.m0)({
							questId: t,
							streamKey: n
						});
						let e = this.calculateHeartbeatDurationMs(t),
							r = window.setTimeout(i, e);
						this.streamKeyToHeartbeatState.set(n, {
							heartbeatTimeoutId: r,
							questId: t
						});
					} else
						this.terminateHeartbeat({
							streamKey: n,
							sendTerminalHeartbeat: 'BEAT_TERMINAL' === e
						});
				};
				i();
			}),
			N(this, 'calculateHeartbeatDurationMs', (e) => {
				let t = p.Z.quests.get(e);
				if (null == t || null == t.config || null == t.userStatus) return v;
				let { progressSeconds: n, targetSeconds: r } = (0, I.il)(t, a.T.DESKTOP),
					i = Math.max(0, (r - n) * f.Z.Millis.SECOND);
				return i <= v ? i + O : v;
			}),
			N(this, 'terminateHeartbeat', (e) => {
				let { streamKey: t, sendTerminalHeartbeat: n } = e,
					r = this.streamKeyToHeartbeatState.get(t);
				if (null != r) {
					R.log('~ terminateHeartbeat -> Terminating heartbeat:', {
						streamKey: t,
						sendTerminalHeartbeat: n
					});
					let { questId: e, heartbeatTimeoutId: i } = r;
					window.clearTimeout(i),
						this.streamKeyToHeartbeatState.delete(t),
						n &&
							(0, h.m0)({
								questId: e,
								streamKey: t,
								terminal: !0
							});
				}
			}),
			N(this, 'handleEnrollmentSuccess', (e) => {
				let {
						enrolledQuestUserStatus: { questId: t }
					} = e,
					n = c.Z.getCurrentUserActiveStream(),
					r = y();
				if (null != n && null != r && r.id === t && L(r)) {
					R.log('handleEnrollmentSuccess - initiating heartbeat for stream'),
						this.initiateHeartbeat({
							streamKey: (0, u.V9)(n),
							applicationId: g.r.build(r.config).application.id,
							questId: r.id
						});
					return;
				}
				let { quest: i, activity: a } = b();
				if (null != a && null != i && L(i) && i.id === t) {
					R.log('handleEnrollmentSuccess - initiating heartbeat for activity'),
						this.initiateHeartbeat({
							streamKey: C(a.channelId),
							applicationId: g.r.build(i.config).application.id,
							questId: i.id
						});
					return;
				}
				l.ZP.getRunningGames().forEach((e) => {
					if (null == e.id) return;
					let t = (0, I.CE)(p.Z.quests, e.id);
					if (null != t && L(t) && (0, I.$H)(t)) {
						R.log('handleEnrollmentSuccess - initiating heartbeat for playtime task');
						let e = C(t.id);
						this.initiateHeartbeat({
							streamKey: e,
							applicationId: g.r.build(t.config).application.id,
							questId: t.id
						});
					}
				});
			}),
			N(this, 'handleSendHeartbeatSuccess', (e) => {
				let { streamKey: t, userStatus: n } = e;
				R.log('~ handleSendHeartbeatSuccess -> Heartbeat succeeded:', t),
					null != n.completedAt &&
						this.terminateHeartbeat({
							streamKey: t,
							sendTerminalHeartbeat: !1
						});
			}),
			N(this, 'handleSendHeartbeatFailure', (e) => {
				let { streamKey: t } = e;
				R.log('~ handleSendHeartbeatFailure -> Heartbeat failed:', t);
			}),
			N(this, 'handleQuestsFetchCurrentQuestsSuccess', (e) => {
				let { quests: t } = e;
				R.log('~ handleQuestsFetchCurrentQuestsSuccess -> Quests fetched:', t);
				let n = l.ZP.getRunningGames().map((e) => e.id);
				t.forEach((e) => {
					if (L(e) && (0, I.$H)(e)) {
						let t = C(e.id),
							r = n.includes(g.r.build(e.config).application.id),
							i = !this.streamKeyToHeartbeatState.has(t) && r;
						this.streamKeyToHeartbeatState.has(t) && !r
							? this.terminateHeartbeat({
									streamKey: t,
									sendTerminalHeartbeat: !0
								})
							: i &&
								(R.log('handleQuestsFetchCurrentQuestsSuccess - initiating heartbeat for playtime task'),
								this.initiateHeartbeat({
									streamKey: t,
									applicationId: g.r.build(e.config).application.id,
									questId: e.id
								}));
					}
				});
			}),
			N(this, 'handleRunningGamesChange', (e) => {
				this._handlePlayOnDesktopQuestsUpdate(e);
			}),
			N(this, '_handlePlayOnDesktopQuestsUpdate', (e) => {
				let { removed: t, games: n } = e;
				R.log('~ handleRunningGamesChange -> Games detected:', {
					runningGames: n,
					removedGames: t
				}),
					n.forEach((e) => {
						if (null == e.id) return;
						let t = (0, I.CE)(p.Z.quests, e.id);
						if (null == t || !L(t)) return;
						let n = C(t.id);
						(0, I.$H)(t) &&
							!this.streamKeyToHeartbeatState.has(n) &&
							(R.log('handleRunningGamesChange - initiating heartbeat for playtime task'),
							this.initiateHeartbeat({
								streamKey: n,
								applicationId: g.r.build(t.config).application.id,
								questId: t.id
							}));
					}),
					t.forEach((e) => {
						if (null == e.id) return;
						let t = (0, I.CE)(p.Z.quests, e.id);
						if (null == t || !L(t)) return;
						let n = C(t.id);
						(0, I.$H)(t) &&
							this.streamKeyToHeartbeatState.has(n) &&
							this.terminateHeartbeat({
								streamKey: n,
								sendTerminalHeartbeat: !0
							});
					});
			}),
			N(this, 'handleVoiceStateChange', () => {
				let e = c.Z.getCurrentUserActiveStream(),
					t = y();
				null != e &&
					this._handleVoiceStateChange({
						streamKey: (0, u.V9)(e),
						channelId: e.channelId,
						quest: t
					});
				let { quest: n, activity: r } = b();
				null != r &&
					this._handleVoiceStateChange({
						streamKey: C(r.channelId),
						channelId: r.channelId,
						quest: n
					});
			}),
			N(this, '_handleVoiceStateChange', (e) => {
				let { streamKey: t, channelId: n, quest: r } = e,
					i = null == r || !D(n),
					a = D(n) && !this.streamKeyToHeartbeatState.has(t) && null != r && L(r) && !(0, I.$H)(r);
				i
					? this.terminateHeartbeat({
							streamKey: t,
							sendTerminalHeartbeat: !0
						})
					: a &&
						(R.log('handleVoiceStateChange - initiating heartbeat for stream task'),
						this.initiateHeartbeat({
							streamKey: t,
							applicationId: g.r.build(r.config).application.id,
							questId: r.id
						}));
			}),
			N(this, 'handleEmbeddedActivityUpdate', (e) => {
				let { quest: t, activity: n } = b(e),
					r = C(e),
					i = (null == n || null == t) && this.streamKeyToHeartbeatState.has(r),
					a = null != n && null != t && L(t) && !this.streamKeyToHeartbeatState.has(r);
				i
					? this.terminateHeartbeat({
							streamKey: r,
							sendTerminalHeartbeat: !0
						})
					: a &&
						(R.log('handleRunningGamesChange - initiating heartbeat for activity task'),
						this.initiateHeartbeat({
							streamKey: r,
							applicationId: g.r.build(t.config).application.id,
							questId: t.id
						}));
			}),
			N(this, 'handleStreamCreate', (e) => {
				let { streamKey: t } = e,
					{ channelId: n, ownerId: r } = (0, u.my)(t);
				if (r !== d.default.getId()) return;
				let i = y();
				if (null == i) {
					this.terminateHeartbeat({
						streamKey: t,
						sendTerminalHeartbeat: !1
					});
					return;
				}
				D(n) &&
					L(i) &&
					!(0, I.$H)(i) &&
					!this.streamKeyToHeartbeatState.has(t) &&
					(R.log('handleStreamCreate - initiating heartbeat for stream task'),
					this.initiateHeartbeat({
						streamKey: t,
						applicationId: g.r.build(i.config).application.id,
						questId: i.id
					}));
			}),
			N(this, 'handleStreamStart', (e) => {
				let { streamType: t, guildId: n, channelId: r } = e,
					i = y(),
					a = (0, u.V9)({
						streamType: t,
						guildId: n,
						channelId: r,
						ownerId: d.default.getId()
					});
				null == i
					? this.terminateHeartbeat({
							streamKey: a,
							sendTerminalHeartbeat: !0
						})
					: D(r) &&
						L(i) &&
						!(0, I.$H)(i) &&
						!this.streamKeyToHeartbeatState.has(a) &&
						(R.log('handleStreamStart - initiating heartbeat for stream task'),
						this.initiateHeartbeat({
							streamKey: a,
							applicationId: g.r.build(i.config).application.id,
							questId: i.id
						}));
			}),
			N(this, 'handleStreamClose', (e) => {
				let { streamKey: t } = e;
				this.terminateHeartbeat({
					streamKey: t,
					sendTerminalHeartbeat: !0
				});
			}),
			N(this, 'actions', {
				QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: this.handleQuestsFetchCurrentQuestsSuccess,
				QUESTS_ENROLL_SUCCESS: this.handleEnrollmentSuccess,
				QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
				QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
				RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
				STREAM_START: this.handleStreamStart,
				STREAM_CREATE: this.handleStreamCreate,
				STREAM_CLOSE: this.handleStreamClose,
				PASSIVE_UPDATE_V2: this.handleVoiceStateChange,
				VOICE_STATE_UPDATES: this.handleVoiceStateChange,
				EMBEDDED_ACTIVITY_UPDATE: (e) => {
					let { channelId: t } = e;
					return this.handleEmbeddedActivityUpdate(t);
				},
				EMBEDDED_ACTIVITY_UPDATE_V2: (e) => {
					let { location: t } = e;
					return this.handleEmbeddedActivityUpdate(t.channel_id);
				}
			});
	}
}
t.ZP = new M();
