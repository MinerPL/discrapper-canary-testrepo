let r;
n.d(t, {
	U: function () {
		return Z;
	},
	Z: function () {
		return Y;
	}
}),
	n(47120);
var i = n(772848),
	a = n(544891),
	s = n(570140),
	o = n(475179),
	l = n(317770),
	u = n(728345),
	c = n(358221),
	d = n(42352),
	_ = n(233764),
	E = n(131704),
	f = n(314897),
	h = n(592125),
	p = n(19780),
	I = n(944486),
	m = n(594174),
	T = n(626135),
	g = n(585483),
	S = n(358085),
	A = n(24933),
	N = n(115130),
	v = n(566620),
	O = n(317381),
	R = n(969345),
	C = n(148720),
	y = n(122613),
	D = n(782769),
	L = n(964517),
	b = n(761122),
	M = n(983695),
	P = n(917107),
	U = n(981631),
	w = n(689938);
function x(e, t, n) {
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
let G = {},
	k = {};
function B(e) {
	var t;
	return {
		releasePhase:
			null == e
				? void 0
				: null === (t = e.activity) || void 0 === t
					? void 0
					: t.client_platform_config[(0, b.Z)((0, S.getOS)())].release_phase
	};
}
function F(e) {
	let { applicationId: t, analyticsLocations: n } = e;
	null != n && (k[t] = n);
}
async function V(e) {
	var t, n;
	let { channelId: r, applicationId: i, locationId: s, instanceId: o } = e,
		l = G[i],
		u = h.Z.getChannel(r),
		c = O.ZP.getEmbeddedActivityDurationMs(r, i),
		_ = m.default.getCurrentUser(),
		E = null == u ? void 0 : u.getGuildId(),
		p = f.default.getSessionId();
	if (
		(null != s &&
			null != o &&
			null != p &&
			(await a.tn.post({
				url: U.ANM.ACTIVITY_LEAVE(i, s, o),
				body: { session_id: p },
				retries: 2
			})),
		null == l || null == u || null == _)
	)
		return;
	let I = O.ZP.getShelfActivities(E),
		g = (0, R.Z)({
			applicationId: i,
			activityConfigs: I
		}),
		{ releasePhase: S } = B(g),
		A = await (0, d.Z)();
	T.default.track(U.rMx.ACTIVITY_SESSION_LEFT, {
		channel_id: u.id,
		guild_id: u.getGuildId(),
		media_session_id: l.mediaSessionIds[0],
		activity_session_id: l.activitySessionId,
		application_id: i,
		duration_ms: c,
		user_premium_tier: _.premiumType,
		raw_thermal_state: A,
		release_phase: S,
		activity_premium_tier_requirement:
			null == g ? void 0 : null === (t = g.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
		shelf_rank: null == g ? void 0 : null === (n = g.activity) || void 0 === n ? void 0 : n.shelf_rank,
		activity_user_session_id: l.activityUserSessionId,
		channel_type: u.type,
		media_session_ids: l.mediaSessionIds
	}),
		T.default.track(U.rMx.ACTIVITY_IFRAME_UNMOUNT, {
			channel_id: u.id,
			guild_id: u.getGuildId(),
			application_id: i,
			instance_ids: null != l.launchId ? [l.launchId] : void 0,
			media_session_ids: l.mediaSessionIds,
			activity_user_session_id: l.activityUserSessionId,
			raw_thermal_state: A,
			duration_ms: c
		}),
		delete G[i];
}
async function H(e) {
	var t, n, r, a;
	let {
			channelId: s,
			applicationId: l,
			isFirstActivityInChannel: u,
			isStart: _,
			participants: E,
			embeddedActivity: I
		} = e,
		g = f.default.getId(),
		S = E.find((e) => e.userId === g),
		N = h.Z.getChannel(s);
	if (
		(_ &&
			null !== (a = null == N ? void 0 : N.isPrivate()) &&
			void 0 !== a &&
			a &&
			u &&
			null == S &&
			o.Z.selectParticipant(s, null),
		null == S)
	)
		return;
	let v = p.Z.getMediaSessionId(),
		C = (0, L.Z)(I),
		y = null == v && (null == N ? void 0 : N.isVocal()) === !0 && (null == N ? void 0 : N.isPrivate()) === !1;
	if (null == C || y) return;
	let D = (0, i.Z)(),
		b = 'location' in I ? 2 : 1,
		M = null == N ? void 0 : N.getGuildId(),
		P = m.default.getCurrentUser();
	if (null == N || null == P) return;
	let w = O.ZP.getShelfActivities(M),
		x = A.Z.getState().shelfOrder,
		F = (0, R.Z)({
			applicationId: l,
			activityConfigs: w
		}),
		V = 1 + x.findIndex((e) => e === l),
		{ releasePhase: H } = B(F),
		Z = await (0, d.Z)(),
		Y = null != v ? [v] : [],
		j = {
			activitySessionId: C,
			activityUserSessionId: D,
			launchId: I.launchId,
			mediaSessionIds: Y,
			activitiesInfraVersion: b
		};
	(G[l] = j),
		T.default.track(U.rMx.ACTIVITY_SESSION_JOINED, {
			channel_id: N.id,
			guild_id: N.getGuildId(),
			media_session_id: Y[0],
			activity_session_id: C,
			application_id: l,
			location_stack: _ ? void 0 : k[l],
			user_premium_tier: P.premiumType,
			raw_thermal_state: Z,
			n_participants: c.Z.getUserParticipantCount(N.id),
			is_activity_start: _,
			release_phase: H,
			activity_premium_tier_requirement:
				null == F ? void 0 : null === (t = F.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
			shelf_rank: null == F ? void 0 : null === (n = F.activity) || void 0 === n ? void 0 : n.shelf_rank,
			shelf_sorted_rank: V > 0 ? V : null,
			activity_user_session_id: D,
			channel_type: N.type
		}),
		T.default.track(U.rMx.ACTIVITY_IFRAME_MOUNT, {
			location_stack: k[l],
			channel_id: N.id,
			channel_type: N.type,
			guild_id: N.getGuildId(),
			application_id: l,
			instance_id: I.launchId,
			initial_media_session_id: Y[0],
			activity_user_session_id: D,
			raw_thermal_state: Z,
			is_activity_start: _,
			shelf_rank: null == F ? void 0 : null === (r = F.activity) || void 0 === r ? void 0 : r.shelf_rank,
			shelf_sorted_rank: V > 0 ? V : null,
			activities_infra_version: b
		});
}
function Z(e) {
	return G[e];
}
class Y extends l.Z {
	_initialize() {
		I.Z.addChangeListener(this.handleSelectedChannelUpdate),
			g.S.subscribe(U.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
			g.S.subscribe(U.CkL.OPEN_EMBEDDED_ACTIVITY, H),
			s.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail),
			s.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_START', F),
			s.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', V),
			s.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen),
			s.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect),
			s.Z.subscribe('CALL_DELETE', this.handleCallDelete),
			s.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState),
			s.Z.subscribe('GUILD_DELETE', this.handleGuildDelete),
			s.Z.subscribe('CHANNEL_DELETE', this.handleChannelDelete);
	}
	_terminate() {
		I.Z.removeChangeListener(this.handleSelectedChannelUpdate),
			g.S.unsubscribe(U.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease),
			g.S.unsubscribe(U.CkL.OPEN_EMBEDDED_ACTIVITY, H),
			s.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail),
			s.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_START', F),
			s.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', V),
			s.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen),
			s.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect),
			s.Z.unsubscribe('CALL_DELETE', this.handleCallDelete),
			s.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState),
			s.Z.unsubscribe('GUILD_DELETE', this.handleGuildDelete),
			s.Z.unsubscribe('CHANNEL_DELETE', this.handleChannelDelete);
	}
	constructor(...e) {
		super(...e),
			x(this, 'handleSelectedChannelUpdate', () => {
				let e = I.Z.getVoiceChannelId();
				for (let { channelId: t, applicationId: n } of O.ZP.getSelfEmbeddedActivities().values())
					(0, P.Z)(t) &&
						t !== e &&
						this.leaveActivity({
							channelId: t,
							applicationId: n
						});
				if (null != e) {
					let t = O.ZP.getEmbeddedActivitiesForChannel(e),
						n = f.default.getId();
					t.forEach((e) => {
						if (e.userIds.has(n)) {
							let t = O.ZP.getSelfEmbeddedActivityForChannel(e.channelId);
							null == t
								? (0, v.rp)(e.channelId, e.applicationId)
								: null == r &&
									this.hidePIPEmbed({
										channelId: t.channelId,
										applicationId: t.applicationId
									});
						}
					});
				}
				r = null != e ? e : void 0;
			}),
			x(this, 'handleActivityWebViewRelease', () => {
				this.releaseWebView();
			}),
			x(this, 'handleActivityLaunchFail', (e) => {
				let { error: t, applicationId: n } = e,
					r = w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
				if (t instanceof _.Z)
					t.reason === _.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND &&
						N.Z.inDevModeForApplication(n) &&
						(r = w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_MISSING_PRIMARY_APP_COMMAND);
				else
					switch (t.code) {
						case U.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
							r = w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
							break;
						case U.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
							r = w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
							break;
						case U.evJ.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
							r = w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
							break;
						case U.evJ.INVALID_PERMISSIONS:
							r = w.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
							break;
						case U.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
							r = w.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
							break;
						case U.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
							r = w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
							break;
						case U.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
							r = w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GUILD_SIZE;
					}
				this.showLaunchErrorModal(r);
			}),
			x(this, 'superHandleRPCDisconnect', (e) => {
				let { reason: t, application: n } = e,
					r = n.id;
				if (null != r && null != t) {
					for (let { applicationId: e, channelId: t } of O.ZP.getSelfEmbeddedActivities().values())
						e === r &&
							this.leaveActivity({
								channelId: t,
								applicationId: r
							});
					t.code !== U.$VG.CLOSE_NORMAL && this.showErrorModal(t, r);
				}
			}),
			x(this, 'handleCallDelete', (e) => {
				let { channelId: t } = e,
					n = I.Z.getVoiceChannelId();
				null != n && n === t && this.handleCallEnded(t);
			}),
			x(this, 'handleRTCConnectionState', (e) => {
				if (e.state !== U.hes.DISCONNECTED) return;
				let t = e.channelId;
				this.handleCallEnded(t);
			}),
			x(this, 'handleCallEnded', (e) => {
				let t = O.ZP.getSelfEmbeddedActivityForChannel(e);
				null != t &&
					this.leaveActivity({
						channelId: e,
						applicationId: t.applicationId
					});
			}),
			x(this, 'handleDeferredOpen', async (e) => {
				var t, n, r;
				let { channelId: i, applicationId: a, analyticsLocations: s } = e,
					o = h.Z.getChannel(i);
				if (void 0 === o || (E.tx.has(null == o ? void 0 : o.type) && I.Z.getVoiceChannelId() !== i)) return;
				let l = O.ZP.getSelfEmbeddedActivityForChannel(i);
				if ((null == l ? void 0 : l.applicationId) === a) return;
				let c = await u.Z.fetchApplication(a);
				if (!(0, D.a)(o)) {
					this.showLaunchErrorModal(w.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
					return;
				}
				if (
					!(0, M.Z)(
						null == c
							? void 0
							: null === (t = c.embedded_activity_config) || void 0 === t
								? void 0
								: t.supported_platforms
					)
				) {
					this.showLaunchErrorModal(w.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
					return;
				}
				let d = null !== (n = null == o ? void 0 : o.getGuildId()) && void 0 !== n ? n : void 0,
					{ activityConfigs: _, applications: f } = await (0, v.w1)({ guildId: d }),
					p = (0, R.Z)({
						applicationId: a,
						activityConfigs: _,
						applications: f
					});
				if (null == p) {
					let e = await (0, v.w1)({
						guildId: d,
						force: !0
					});
					p = (0, R.Z)({
						applicationId: a,
						activityConfigs: e.activityConfigs,
						applications: e.applications
					});
				}
				let m = O.ZP.getEmbeddedActivitiesForChannel(i).find((e) => e.applicationId === a),
					T = null !== (r = null == m ? void 0 : m.userIds.size) && void 0 !== r ? r : 0;
				T > 0
					? await (0, C.k)({
							channelId: i,
							applicationId: a,
							launchId: null == m ? void 0 : m.launchId,
							inputApplication: null,
							analyticsLocations: s
						})
					: await (0, y.Z)({
							targetApplicationId: a,
							channelId: i,
							analyticsLocations: s
						});
			}),
			x(this, 'handleGuildDelete', (e) => {
				let { guild: t } = e;
				O.ZP.getSelfEmbeddedActivities().forEach((e) => {
					let { channelId: n, applicationId: r, guildId: i } = e;
					t.id === i &&
						this.leaveActivity({
							channelId: n,
							applicationId: r
						});
				});
			}),
			x(this, 'handleChannelDelete', (e) => {
				let { channel: t } = e,
					n = O.ZP.getSelfEmbeddedActivityForChannel(t.id);
				null != n &&
					this.leaveActivity({
						channelId: t.id,
						applicationId: n.applicationId
					});
			});
	}
}
