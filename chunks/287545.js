let r;
n.d(t, {
    U: function () {
        return j;
    },
    Z: function () {
        return W;
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
    E = n(375824),
    f = n(188597),
    h = n(695346),
    p = n(131704),
    I = n(314897),
    m = n(592125),
    T = n(19780),
    S = n(944486),
    g = n(594174),
    A = n(626135),
    N = n(585483),
    O = n(358085),
    R = n(24933),
    v = n(115130),
    C = n(566620),
    y = n(317381),
    L = n(969345),
    D = n(148720),
    b = n(122613),
    M = n(782769),
    P = n(761122),
    U = n(983695),
    w = n(917107),
    x = n(981631),
    G = n(689938);
function k(e, t, n) {
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
let B = {},
    F = {};
function V(e) {
    var t;
    return { releasePhase: null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, P.Z)((0, O.getOS)())].release_phase };
}
function H(e) {
    let { applicationId: t, analyticsLocations: n, source: r } = e;
    (null != n || null != r) &&
        (F[t] = {
            locations: n,
            source: r
        });
}
async function Z(e) {
    var t, n;
    let { channelId: r, applicationId: i, locationId: s, instanceId: o } = e,
        l = y.ZP.getEmbeddedActivityDurationMs(r, i),
        u = I.default.getSessionId();
    null != s &&
        null != o &&
        null != u &&
        (await a.tn.post({
            url: x.ANM.ACTIVITY_LEAVE(i, s, o),
            body: { session_id: u },
            retries: 2
        }));
    let c = B[i],
        _ = m.Z.getChannel(r),
        E = g.default.getCurrentUser();
    if (null == c || null == _ || null == E) return;
    let f = _.getGuildId(),
        h = y.ZP.getShelfActivities(f),
        p = (0, L.Z)({
            applicationId: i,
            activityConfigs: h
        }),
        { releasePhase: T } = V(p),
        S = await (0, d.Z)();
    A.default.track(x.rMx.ACTIVITY_SESSION_LEFT, {
        channel_id: _.id,
        guild_id: f,
        media_session_id: c.mediaSessionIds[0],
        activity_session_id: c.activitySessionId,
        application_id: i,
        duration_ms: l,
        user_premium_tier: E.premiumType,
        raw_thermal_state: S,
        release_phase: T,
        activity_premium_tier_requirement: null == p ? void 0 : null === (t = p.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
        shelf_rank: null == p ? void 0 : null === (n = p.activity) || void 0 === n ? void 0 : n.shelf_rank,
        activity_user_session_id: c.activityUserSessionId,
        channel_type: _.type,
        media_session_ids: c.mediaSessionIds
    }),
        A.default.track(x.rMx.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: _.id,
            guild_id: f,
            application_id: i,
            instance_ids: null != c.launchId ? [c.launchId] : void 0,
            media_session_ids: c.mediaSessionIds,
            activity_user_session_id: c.activityUserSessionId,
            raw_thermal_state: S,
            duration_ms: l
        }),
        delete B[i];
}
async function Y(e) {
    var t, n, r, a;
    let { channelId: s, applicationId: l, isFirstActivityInChannel: u, isStart: _, participants: E, embeddedActivity: f } = e,
        h = I.default.getId(),
        p = E.find((e) => e.userId === h),
        S = m.Z.getChannel(s);
    if ((_ && null !== (a = null == S ? void 0 : S.isPrivate()) && void 0 !== a && a && u && null == p && o.Z.selectParticipant(s, null), null == p)) return;
    let N = T.Z.getMediaSessionId(),
        O = f.compositeInstanceId,
        v = null == N && (null == S ? void 0 : S.isVocal()) === !0 && (null == S ? void 0 : S.isPrivate()) === !1;
    if (null == O || v) return;
    let C = (0, i.Z)(),
        D = 'location' in f ? 2 : 1,
        b = null == S ? void 0 : S.getGuildId(),
        M = g.default.getCurrentUser();
    if (null == S || null == M) return;
    let P = y.ZP.getShelfActivities(b),
        U = R.Z.getState().shelfOrder,
        w = (0, L.Z)({
            applicationId: l,
            activityConfigs: P
        }),
        G = 1 + U.findIndex((e) => e === l),
        { releasePhase: k } = V(w),
        H = await (0, d.Z)(),
        Z = null != N ? [N] : [],
        Y = {
            activitySessionId: O,
            activityUserSessionId: C,
            launchId: f.launchId,
            mediaSessionIds: Z,
            activitiesInfraVersion: D
        };
    B[l] = Y;
    let j = F[l];
    delete F[l],
        A.default.track(x.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: S.id,
            guild_id: S.getGuildId(),
            media_session_id: Z[0],
            activity_session_id: O,
            application_id: l,
            location_stack: _ ? void 0 : null == j ? void 0 : j.locations,
            user_premium_tier: M.premiumType,
            raw_thermal_state: H,
            n_participants: c.Z.getUserParticipantCount(S.id),
            is_activity_start: _,
            release_phase: k,
            activity_premium_tier_requirement: null == w ? void 0 : null === (t = w.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
            shelf_rank: null == w ? void 0 : null === (n = w.activity) || void 0 === n ? void 0 : n.shelf_rank,
            shelf_sorted_rank: G > 0 ? G : null,
            activity_user_session_id: C,
            channel_type: S.type,
            source: null == j ? void 0 : j.source
        }),
        A.default.track(x.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == j ? void 0 : j.locations,
            channel_id: S.id,
            channel_type: S.type,
            guild_id: S.getGuildId(),
            application_id: l,
            instance_id: f.launchId,
            initial_media_session_id: Z[0],
            activity_user_session_id: C,
            raw_thermal_state: H,
            is_activity_start: _,
            shelf_rank: null == w ? void 0 : null === (r = w.activity) || void 0 === r ? void 0 : r.shelf_rank,
            shelf_sorted_rank: G > 0 ? G : null,
            activities_infra_version: D
        });
}
function j(e) {
    return B[e];
}
class W extends l.Z {
    _initialize() {
        S.Z.addChangeListener(this.handleSelectedChannelUpdate), N.S.subscribe(x.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), N.S.subscribe(x.CkL.OPEN_EMBEDDED_ACTIVITY, Y), s.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), s.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_START', H), s.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', Z), s.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), s.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), s.Z.subscribe('CALL_DELETE', this.handleCallDelete), s.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), s.Z.subscribe('GUILD_DELETE', this.handleGuildDelete), s.Z.subscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    _terminate() {
        S.Z.removeChangeListener(this.handleSelectedChannelUpdate), N.S.unsubscribe(x.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), N.S.unsubscribe(x.CkL.OPEN_EMBEDDED_ACTIVITY, Y), s.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), s.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_START', H), s.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', Z), s.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), s.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), s.Z.unsubscribe('CALL_DELETE', this.handleCallDelete), s.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), s.Z.unsubscribe('GUILD_DELETE', this.handleGuildDelete), s.Z.unsubscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    constructor(...e) {
        super(...e),
            k(this, 'handleSelectedChannelUpdate', () => {
                let e = S.Z.getVoiceChannelId();
                for (let { channelId: t, applicationId: n } of y.ZP.getSelfEmbeddedActivities().values())
                    (0, w.Z)(t) &&
                        t !== e &&
                        this.leaveActivity({
                            channelId: t,
                            applicationId: n
                        });
                if (null != e) {
                    let t = y.ZP.getEmbeddedActivitiesForChannel(e),
                        n = I.default.getId();
                    t.forEach((e) => {
                        if (e.userIds.has(n)) {
                            let t = y.ZP.getSelfEmbeddedActivityForChannel(e.channelId);
                            null == t
                                ? this.leaveActivity({
                                      channelId: e.channelId,
                                      applicationId: e.applicationId
                                  })
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
            k(this, 'handleActivityWebViewRelease', () => {
                this.releaseWebView();
            }),
            k(this, 'handleActivityLaunchFail', async (e) => {
                let { error: t, applicationId: n } = e,
                    r = G.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                if (t instanceof _.Z) {
                    let e = v.Z.getFetchState();
                    if ((h.Sb.getSetting() && 'loaded' !== e && (await (0, C.$h)()), t.reason === _.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND)) v.Z.inDevModeForApplication(n) && (r = G.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_MISSING_PRIMARY_APP_COMMAND);
                } else if (t instanceof E.Z) {
                    var i;
                    r = null !== (i = (0, f.A0)(t.reason, n)) && void 0 !== i ? i : r;
                } else
                    switch (t.code) {
                        case x.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                            r = G.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
                            break;
                        case x.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                            r = G.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
                            break;
                        case x.evJ.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                            r = G.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
                            break;
                        case x.evJ.INVALID_PERMISSIONS:
                            r = G.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                            break;
                        case x.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                            r = G.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                            break;
                        case x.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                            r = G.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
                            break;
                        case x.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                            r = G.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GUILD_SIZE;
                            break;
                        case x.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                            r = G.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS;
                    }
                this.showLaunchErrorModal(r);
            }),
            k(this, 'superHandleRPCDisconnect', (e) => {
                let { reason: t, application: n } = e,
                    r = n.id;
                if (null != r && null != t) {
                    for (let { applicationId: e, channelId: t } of y.ZP.getSelfEmbeddedActivities().values())
                        e === r &&
                            this.leaveActivity({
                                channelId: t,
                                applicationId: r
                            });
                    t.code !== x.$VG.CLOSE_NORMAL && this.showErrorModal(t, r);
                }
            }),
            k(this, 'handleCallDelete', (e) => {
                let { channelId: t } = e,
                    n = S.Z.getVoiceChannelId();
                null != n && n === t && this.handleCallEnded(t);
            }),
            k(this, 'handleRTCConnectionState', (e) => {
                if (e.state !== x.hes.DISCONNECTED) return;
                let t = e.channelId;
                this.handleCallEnded(t);
            }),
            k(this, 'handleCallEnded', (e) => {
                let t = y.ZP.getSelfEmbeddedActivityForChannel(e);
                null != t &&
                    this.leaveActivity({
                        channelId: e,
                        applicationId: t.applicationId
                    });
            }),
            k(this, 'handleDeferredOpen', async (e) => {
                var t, n, r;
                let { channelId: i, applicationId: a, analyticsLocations: s, commandOrigin: o } = e,
                    l = m.Z.getChannel(i);
                if (void 0 === l || (p.tx.has(null == l ? void 0 : l.type) && S.Z.getVoiceChannelId() !== i)) return;
                let c = y.ZP.getSelfEmbeddedActivityForChannel(i);
                if ((null == c ? void 0 : c.applicationId) === a) return;
                let d = await u.Z.fetchApplication(a);
                if (!(0, M.a)(l)) {
                    this.showLaunchErrorModal(G.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                    return;
                }
                if (!(0, U.Z)(null == d ? void 0 : null === (t = d.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
                    this.showLaunchErrorModal(G.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
                    return;
                }
                let _ = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : void 0,
                    { activityConfigs: E, applications: f } = await (0, C.w1)({ guildId: _ }),
                    h = (0, L.Z)({
                        applicationId: a,
                        activityConfigs: E,
                        applications: f
                    });
                if (null == h) {
                    let e = await (0, C.w1)({
                        guildId: _,
                        force: !0
                    });
                    h = (0, L.Z)({
                        applicationId: a,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications
                    });
                }
                let I = y.ZP.getEmbeddedActivitiesForChannel(i).find((e) => e.applicationId === a),
                    T = null !== (r = null == I ? void 0 : I.userIds.size) && void 0 !== r ? r : 0;
                T > 0
                    ? await (0, D.k)({
                          channelId: i,
                          applicationId: a,
                          launchId: null == I ? void 0 : I.launchId,
                          inputApplication: null,
                          analyticsLocations: s,
                          commandOrigin: o
                      })
                    : await (0, b.Z)({
                          targetApplicationId: a,
                          channelId: i,
                          analyticsLocations: s,
                          commandOrigin: o
                      });
            }),
            k(this, 'handleGuildDelete', (e) => {
                let { guild: t } = e;
                y.ZP.getSelfEmbeddedActivities().forEach((e) => {
                    let { channelId: n, applicationId: r, guildId: i } = e;
                    t.id === i &&
                        this.leaveActivity({
                            channelId: n,
                            applicationId: r
                        });
                });
            }),
            k(this, 'handleChannelDelete', (e) => {
                let { channel: t } = e,
                    n = y.ZP.getSelfEmbeddedActivityForChannel(t.id);
                null != n &&
                    this.leaveActivity({
                        channelId: t.id,
                        applicationId: n.applicationId
                    });
            });
    }
}
