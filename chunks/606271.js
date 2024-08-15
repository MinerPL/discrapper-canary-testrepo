n.d(t, {
	Z: function () {
		return R;
	}
}),
	n(47120);
var i = n(392711),
	a = n.n(i),
	s = n(442837),
	r = n(570140),
	l = n(573979),
	o = n(814443),
	c = n(592125),
	d = n(271383),
	u = n(430824),
	_ = n(131951),
	E = n(158776),
	h = n(19780),
	m = n(699516),
	I = n(944486),
	g = n(594174),
	p = n(979651),
	T = n(626135),
	S = n(823379),
	f = n(358085),
	C = n(914946),
	N = n(238679),
	A = n(863141),
	v = n(981631),
	Z = n(701488),
	L = n(65154);
function O(e, t, n) {
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
class R {
	loadServer() {
		for (let e of (f.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports))
			this.rpcServer.registerTransport(e);
		for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
		for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t);
	}
	init() {
		(this.rpcServer.getCurrentUser = () => g.default.getCurrentUser()),
			(this.rpcServer.onConnect = (e) => {
				r.Z.dispatch({
					type: 'RPC_APP_CONNECTED',
					socketId: e.id,
					application: e.application
				}),
					T.default.track(v.rMx.AUTHORIZED_APP_CONNECTED, {
						app_id: e.application.id,
						transport: e.transport
					});
			}),
			(this.rpcServer.onDisconnect = (e, t) => {
				r.Z.dispatch({
					type: 'RPC_APP_DISCONNECTED',
					socketId: e.id,
					application: e.application,
					reason: t
				});
			});
		let e = [c.Z, d.ZP, E.Z, p.Z, _.Z, h.Z];
		new s.Fh(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach('RPCServerManager'),
			r.Z.subscribe('MESSAGE_CREATE', (e) => this.handleMessage(e)),
			r.Z.subscribe('MESSAGE_UPDATE', (e) => this.handleMessage(e)),
			r.Z.subscribe('MESSAGE_DELETE', (e) => this.handleMessage(e)),
			r.Z.subscribe('SPEAKING', (e) => this.handleSpeaking(e)),
			r.Z.subscribe('OAUTH2_TOKEN_REVOKE', (e) => this.handleOAuth2TokenRevoke(e)),
			r.Z.subscribe('GUILD_CREATE', (e) => this.handleGuildCreate(e)),
			r.Z.subscribe('CHANNEL_CREATE', (e) => this.handleChannelCreate(e)),
			r.Z.subscribe('LOGOUT', () => this.handleLogout()),
			r.Z.subscribe('VOICE_CHANNEL_SELECT', (e) => this.handleVoiceChannelSelect(e)),
			r.Z.subscribe('RPC_NOTIFICATION_CREATE', (e) => this.handleNotificationCreate(e)),
			r.Z.subscribe('ACTIVITY_JOIN', (e) => this.handleActivityJoin(e)),
			r.Z.subscribe('ACTIVITY_LAYOUT_MODE_UPDATE', (e) => this.handleActivityLayoutModeUpdate(e)),
			r.Z.subscribe('THERMAL_STATE_CHANGE', (e) => this.handleThermalStateChange(e)),
			r.Z.subscribe('ACTIVITY_SCREEN_ORIENTATION_UPDATE', (e) => this.handleScreenOrientationUpdate(e)),
			(0, N.HU)((e) => this.rpcServer.dispatchToSubscriptions(v.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e)),
			r.Z.subscribe('RELATIONSHIP_ADD', (e) => this.handleRelationshipAdd(e)),
			r.Z.subscribe('RELATIONSHIP_REMOVE', (e) => this.handleRelationshipRemove(e)),
			r.Z.subscribe('PRESENCE_UPDATES', (e) => this.handlePresenceUpdate(e)),
			r.Z.subscribe('PRESENCES_REPLACE', () => this.handlePresencesReplace()),
			r.Z.subscribe('ENTITLEMENT_CREATE', (e) => this.handleEntitlementCreate(e)),
			r.Z.subscribe('ENTITLEMENT_DELETE', (e) => this.handleEntitlementDelete(e)),
			r.Z.subscribe('USER_ACHIEVEMENT_UPDATE', (e) => this.handleUserAchievementUpdate(e));
	}
	handleMessage(e) {
		let t, n, i;
		if (0 === this.rpcServer.subscriptions.length) return;
		'MESSAGE_CREATE' === e.type && this.handleActivityMessage(e);
		let a = null;
		switch (e.type) {
			case 'MESSAGE_CREATE':
				if ('SENDING' === e.message.state) return;
				(t = v.zMe.MESSAGE_CREATE), (n = e.channelId), (i = e.message), (a = ''.concat(t).concat(e.message.id));
				break;
			case 'MESSAGE_UPDATE':
				(t = v.zMe.MESSAGE_UPDATE), (n = e.message.channel_id), (i = e.message);
				break;
			case 'MESSAGE_DELETE':
				(t = v.zMe.MESSAGE_DELETE), (n = e.channelId), (i = { id: e.id }), (a = ''.concat(t).concat(e.id));
				break;
			default:
				return (0, S.vE)(e);
		}
		null != n &&
			this.rpcServer.dispatchToSubscriptions(
				t,
				{ channel_id: n },
				{
					channel_id: n,
					message: (0, C.Xb)(i)
				},
				a
			);
	}
	handleSpeaking(e) {
		if (0 === this.rpcServer.subscriptions.length) return;
		let t = 0 !== e.speakingFlags ? v.zMe.SPEAKING_START : v.zMe.SPEAKING_STOP;
		if (e.context === L.Yn.DEFAULT) {
			let n = I.Z.getVoiceChannelId();
			if (null != n) {
				let i = c.Z.getChannel(n);
				if (null == i) return;
				let a = p.Z.getVoiceState(i.getGuildId(), e.userId);
				if (null == a) return;
				this.rpcServer.dispatchToSubscriptions(
					t,
					{ channel_id: a.channelId },
					{
						channel_id: a.channelId,
						user_id: e.userId
					}
				);
			}
		}
	}
	handleVoiceChannelSelect(e) {
		let { guildId: t, channelId: n } = e;
		if (0 !== this.rpcServer.subscriptions.length)
			this.rpcServer.dispatchToSubscriptions(
				v.zMe.VOICE_CHANNEL_SELECT,
				{},
				{
					channel_id: n,
					guild_id: t
				}
			);
	}
	handleNotificationCreate(e) {
		let { channelId: t, message: n, icon: i, title: a, body: s } = e;
		if (0 !== this.rpcServer.subscriptions.length)
			this.rpcServer.dispatchToSubscriptions(
				v.zMe.NOTIFICATION_CREATE,
				{},
				{
					channel_id: t,
					message: (0, C.Xb)(n),
					icon_url: null != i ? (0, C.RE)(i) : null,
					title: a,
					body: s
				}
			);
	}
	handleActivityJoin(e) {
		let { applicationId: t, secret: n, intent: i, embedded: a } = e;
		if (0 === this.rpcServer.subscriptions.length) return;
		let s = { secret: n };
		a && (s.intent = i),
			this.rpcServer.dispatchToSubscriptions(v.zMe.ACTIVITY_JOIN, (e) => e.socket.application.id === t, s),
			this.rpcServer.dispatchToSubscriptions(v.zMe.GAME_JOIN, (e) => e.socket.application.id === t, s);
	}
	handleActivityLayoutModeUpdate(e) {
		let { applicationId: t, layoutMode: n } = e;
		if (0 === this.rpcServer.subscriptions.length) return;
		let i = n !== Z.cE.FOCUSED;
		this.rpcServer.dispatchToSubscriptions(v.zMe.ACTIVITY_PIP_MODE_UPDATE, (e) => e.socket.application.id === t, {
			is_pip_mode: i
		});
		this.rpcServer.dispatchToSubscriptions(v.zMe.ACTIVITY_LAYOUT_MODE_UPDATE, (e) => e.socket.application.id === t, {
			layout_mode: n
		});
	}
	handleThermalStateChange(e) {
		let { applicationId: t, rawThermalState: n } = e;
		if (0 === this.rpcServer.subscriptions.length || null == t) return;
		let i = { thermal_state: (0, l.Z)(n) };
		this.rpcServer.dispatchToSubscriptions(v.zMe.THERMAL_STATE_UPDATE, (e) => e.socket.application.id === t, i);
	}
	handleScreenOrientationUpdate(e) {
		let { screenOrientation: t } = e;
		if (0 !== this.rpcServer.subscriptions.length)
			this.rpcServer.dispatchToSubscriptions(v.zMe.ORIENTATION_UPDATE, {}, { screen_orientation: t });
	}
	handleActivityMessage(e) {
		var t;
		let { channelId: n, message: i } = e;
		if (0 === this.rpcServer.subscriptions.length) return;
		let { application: a, activity: s } = i;
		if (null == a || null == s || null == s.party_id) return;
		let r = g.default.getUser(null === (t = i.author) || void 0 === t ? void 0 : t.id);
		if (null == r) return;
		let l = g.default.getCurrentUser();
		if (null == l || r.id === l.id) return;
		let o =
			s.type === v.mFx.JOIN_REQUEST ? E.Z.getApplicationActivity(l.id, a.id) : E.Z.getApplicationActivity(r.id, a.id);
		if (null == o || null == o.party || o.party.id !== s.party_id) return;
		let c = o.application_id;
		switch (s.type) {
			case v.mFx.JOIN:
				this.rpcServer.dispatchToSubscriptions(v.zMe.ACTIVITY_INVITE, (e) => e.socket.application.id === c, {
					user: (0, A.Z)(r),
					activity: o,
					type: s.type,
					channel_id: n,
					message_id: i.id
				});
				break;
			case v.mFx.JOIN_REQUEST:
				this.rpcServer.dispatchToSubscriptions(v.zMe.ACTIVITY_JOIN_REQUEST, (e) => e.socket.application.id === c, {
					user: (0, A.Z)(r)
				});
		}
	}
	handleOAuth2TokenRevoke(e) {
		let { accessToken: t } = e;
		this.rpcServer.sockets.forEach((e) => {
			if (e.authorization.accessToken === t) e.close(v.$VG.TOKEN_REVOKED, 'Token revoked');
		});
	}
	handleGuildCreate(e) {
		let {
				guild: { id: t }
			} = e,
			n = u.Z.getGuild(t);
		if (0 !== this.rpcServer.subscriptions.length && null != n)
			this.rpcServer.dispatchToSubscriptions(
				v.zMe.GUILD_CREATE,
				{},
				{
					id: t,
					name: n.name
				}
			);
	}
	handleChannelCreate(e) {
		let {
			channel: { id: t, name: n, type: i }
		} = e;
		if (0 !== this.rpcServer.subscriptions.length)
			this.rpcServer.dispatchToSubscriptions(
				v.zMe.CHANNEL_CREATE,
				{},
				{
					id: t,
					name: n,
					type: i
				}
			);
	}
	handleLogout() {
		this.rpcServer.sockets.forEach((e) => e.close(v.$VG.CLOSE_NORMAL, 'User logout'));
	}
	handleRelationshipAdd(e) {
		let {
			relationship: { id: t, type: n }
		} = e;
		if (0 !== this.rpcServer.subscriptions.length)
			this.rpcServer.dispatchToSubscriptions(v.zMe.RELATIONSHIP_UPDATE, {}, (0, C.cD)(n, t));
	}
	handleRelationshipRemove(e) {
		let {
			relationship: { id: t }
		} = e;
		if (0 !== this.rpcServer.subscriptions.length)
			this.rpcServer.dispatchToSubscriptions(v.zMe.RELATIONSHIP_UPDATE, {}, (0, C.cD)(v.OGo.NONE, t));
	}
	handlePresenceUpdate(e) {
		let { updates: t } = e;
		if (0 !== this.rpcServer.subscriptions.length)
			t.forEach((e) => {
				let {
					guildId: t,
					user: { id: n }
				} = e;
				if (null != t) return;
				let i = m.Z.getRelationshipType(n);
				i === v.OGo.NONE && o.Z.getUserAffinitiesUserIds().has(n) && (i = v.OGo.IMPLICIT),
					i !== v.OGo.NONE && this.rpcServer.dispatchToSubscriptions(v.zMe.RELATIONSHIP_UPDATE, {}, (0, C.cD)(i, n));
			});
	}
	handlePresencesReplace() {
		if (0 !== this.rpcServer.subscriptions.length)
			a().forEach(m.Z.getRelationships(), (e, t) => {
				this.rpcServer.dispatchToSubscriptions(v.zMe.RELATIONSHIP_UPDATE, {}, (0, C.cD)(e, t));
			});
	}
	handleEntitlementCreate(e) {
		let { entitlement: t } = e;
		if (0 !== this.rpcServer.subscriptions.length)
			this.rpcServer.dispatchToSubscriptions(
				v.zMe.ENTITLEMENT_CREATE,
				(e) => e.socket.application.id === t.application_id,
				{ entitlement: t }
			);
	}
	handleEntitlementDelete(e) {
		let { entitlement: t } = e;
		if (0 !== this.rpcServer.subscriptions.length)
			this.rpcServer.dispatchToSubscriptions(
				v.zMe.ENTITLEMENT_DELETE,
				(e) => e.socket.application.id === t.application_id,
				{ entitlement: t }
			);
	}
	handleUserAchievementUpdate(e) {
		let { userAchievement: t } = e;
		if (0 === this.rpcServer.subscriptions.length) return;
		let { application_id: n } = t;
		this.rpcServer.dispatchToSubscriptions(v.zMe.USER_ACHIEVEMENT_UPDATE, (e) => e.socket.application.id === n, {
			user_achievement: t
		});
	}
	constructor(e) {
		O(this, 'rpcServer', void 0),
			O(this, 'transports', void 0),
			O(this, 'rpcCommandHandlers', void 0),
			O(this, 'rpcEventHandlers', void 0),
			O(this, 'stores', void 0),
			O(this, 'registerTransportsForEmbeddedPlatform', void 0),
			(this.rpcServer = e.server),
			(this.transports = e.transports),
			(this.rpcCommandHandlers = e.commands),
			(this.rpcEventHandlers = e.events),
			(this.stores = e.stores),
			(this.registerTransportsForEmbeddedPlatform = e.registerTransportsForEmbeddedPlatform);
	}
}
