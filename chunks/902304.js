n(47120);
var r = n(512722),
	i = n.n(r),
	a = n(846519),
	s = n(668781),
	o = n(846027),
	l = n(147913),
	u = n(710845),
	c = n(314897),
	d = n(131951),
	_ = n(19780),
	E = n(797258),
	f = n(979651),
	h = n(823379),
	p = n(254238),
	I = n(607214),
	m = n(258609),
	T = n(565473),
	g = n(444092),
	S = n(927923),
	A = n(65154),
	N = n(689938);
function v(e, t, n) {
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
let O = new u.Z('GameConsoleManager');
async function R(e) {
	let t = _.Z.getChannelId();
	i()(null == t, 'Syncing to remote while in voice!'),
		e.selfMute !== d.Z.isSelfMute() && (await o.Z.toggleSelfMute({ syncRemote: !1 })),
		e.selfDeaf !== d.Z.isSelfDeaf() && o.Z.toggleSelfDeaf({ syncRemote: !1 });
}
class C extends l.Z {
	constructor(...e) {
		super(...e),
			v(this, 'rollbackCommandTimeout', new a.V7()),
			v(this, 'awaitRemoteTimeout', new a.V7()),
			v(this, 'actions', {
				WAIT_FOR_REMOTE_SESSION: () => this.handleWaitForRemoteSession(),
				POST_CONNECTION_OPEN: () => this.handleSessionsChanged(),
				SESSIONS_REPLACE: () => this.handleSessionsChanged(),
				AUDIO_TOGGLE_SELF_DEAF: (e) => this.handleAudioStateToggle(e),
				AUDIO_TOGGLE_SELF_MUTE: (e) => this.handleAudioStateToggle(e),
				VOICE_STATE_UPDATES: (e) => this.handleVoiceStateUpdates(e),
				CONSOLE_COMMAND_UPDATE: (e) => this.handleConsoleCommandUpdate(e),
				PASSIVE_UPDATE_V2: (e) => this.handleVoiceStateUpdates(e),
				REMOTE_SESSION_DISCONNECT: () => this.handleRemoteSessionDisconnect()
			}),
			v(this, 'maybeConnect', (e) => {
				let t = (function (e) {
					let t = m.Z.getAwaitingRemoteSessionInfo();
					return e.find((e) => {
						let n = S.al.has(e.clientInfo.os),
							r = null != f.Z.getVoiceStateForSession(c.default.getId(), e.sessionId),
							i = null == t || (0, T.y)(t.type) === e.clientInfo.os;
						return n && i && r;
					});
				})(e);
				if (null == t) return null;
				this.awaitRemoteTimeout.stop(), (0, p.ef)(t.sessionId);
				let n = f.Z.getVoiceStateForSession(c.default.getId(), t.sessionId);
				null != n && R(n);
			}),
			v(this, 'handleAudioStateToggle', (e) => {
				let { syncRemote: t, context: n } = e;
				if (!t || n !== A.Yn.DEFAULT) return;
				let r = d.Z.isSelfDeaf(),
					i = d.Z.isSelfMute(),
					a = c.default.getId(),
					s = m.Z.getRemoteSessionId();
				if (null == s) return;
				let o = f.Z.getVoiceStateForSession(a, s);
				if (null != o)
					(o.selfDeaf !== r || o.selfMute !== i) &&
						((0, p.Vv)(s, {
							selfDeaf: r,
							selfMute: i
						}),
						this.rollbackCommandTimeout.start(3000, () => {
							R(o);
						}));
			}),
			v(this, 'handleVoiceStateUpdates', (e) => {
				let t = e.voiceStates,
					n = m.Z.getRemoteSessionId();
				if (null == n) {
					let e = t
						.map((e) => {
							let { sessionId: t } = e;
							return null != t ? E.Z.getSessionById(t) : null;
						})
						.filter(h.lm);
					return this.maybeConnect(e);
				}
				let r = t.find((e) => {
					let { sessionId: t } = e;
					return t === n;
				});
				null != r && (this.rollbackCommandTimeout.stop(), R(r));
			}),
			v(this, 'handleSessionsChanged', () => {
				let e = m.Z.getRemoteSessionId();
				null != e && null == E.Z.getSessionById(e) && (0, p.s6)(),
					null == e && this.maybeConnect(Object.values(E.Z.getSessions()));
			}),
			v(this, 'handleWaitForRemoteSession', () => {
				this.awaitRemoteTimeout.start(60000, () => {
					(0, p.s6)(),
						s.Z.show({
							title: N.Z.Messages.GAME_CONSOLE_TRANSFER_TIMEOUT_TITLE,
							body: N.Z.Messages.GAME_CONSOLE_TRANSFER_TIMEOUT_BODY
						});
				});
			}),
			v(this, 'handleConsoleCommandUpdate', (e) => {
				var t;
				let { id: n, result: r, error: i } = e;
				if (('failed' !== r && 'n/a' !== r) || null == i) return;
				O.info('Console command Error result:', r, i);
				let a = m.Z.getAwaitingRemoteSessionInfo();
				if ((null == a ? void 0 : a.commandId) !== n) return;
				let s = m.Z.getDevice(a.type, null !== (t = a.deviceId) && void 0 !== t ? t : ''),
					o = (0, g.Z)(
						null != s
							? s
							: {
									id: 'id',
									platform: N.Z.Messages.STATUS_UNKNOWN,
									name: N.Z.Messages.STATUS_UNKNOWN
								},
						r,
						i
					);
				null != o &&
					I.Z.showSelfDismissableAlert({
						title: o.title,
						body: o.body,
						errorCodeMessage: o.errorCodeMessage,
						reconnectPlatformType: o.isAccountLinkError ? a.type : void 0
					}),
					S.e8.has(i.code) && this.awaitRemoteTimeout.isStarted()
						? this.awaitRemoteTimeout.start(180000, () => (0, p.s6)(), !0)
						: 'failed' === r && (0, p.s6)();
			}),
			v(this, 'handleRemoteSessionDisconnect', () => {
				this.awaitRemoteTimeout.stop();
			});
	}
}
t.Z = new C();
