let r;
n.d(t, {
    U: function () {
        return z;
    },
    Z: function () {
        return q;
    }
}),
    n(47120);
var i,
    a,
    s = n(772848),
    o = n(544891),
    l = n(570140),
    u = n(475179),
    c = n(317770),
    d = n(728345),
    _ = n(358221),
    E = n(42352),
    f = n(233764),
    h = n(375824),
    p = n(188597),
    I = n(695346),
    m = n(131704),
    T = n(314897),
    S = n(592125),
    g = n(19780),
    A = n(944486),
    N = n(594174),
    O = n(626135),
    R = n(585483),
    v = n(358085),
    C = n(624138),
    L = n(24933),
    y = n(115130),
    D = n(566620),
    b = n(317381),
    M = n(969345),
    P = n(148720),
    U = n(122613),
    w = n(782769),
    x = n(761122),
    G = n(983695),
    k = n(917107),
    B = n(981631),
    F = n(689938);
function V(e, t, n) {
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
((a = i || (i = {}))[(a.ClientError = 0)] = 'ClientError'), (a[(a.CallbackError = 1)] = 'CallbackError'), (a[(a.ApiError = 2)] = 'ApiError');
let H = {},
    Z = {};
function Y(e) {
    var t;
    return { releasePhase: null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, x.Z)((0, v.getOS)())].release_phase };
}
function j(e) {
    let { applicationId: t, nonce: n, analyticsLocations: r, source: i } = e;
    (null != r || null != i) &&
        (Z[t] = {
            nonce: n,
            locations: r,
            source: i
        });
}
async function W(e) {
    var t, n;
    let { channelId: r, applicationId: i, locationId: a, instanceId: s } = e,
        l = b.ZP.getEmbeddedActivityDurationMs(r, i),
        u = T.default.getSessionId();
    null != a &&
        null != s &&
        null != u &&
        (await o.tn.post({
            url: B.ANM.ACTIVITY_LEAVE(i, a, s),
            body: { session_id: u },
            retries: 2
        }));
    let c = H[i],
        d = S.Z.getChannel(r),
        _ = N.default.getCurrentUser();
    if (null == c || null == d || null == _) return;
    let f = d.getGuildId(),
        h = b.ZP.getShelfActivities(f),
        p = (0, M.Z)({
            applicationId: i,
            activityConfigs: h
        }),
        { releasePhase: I } = Y(p),
        m = await (0, E.Z)();
    O.default.track(B.rMx.ACTIVITY_SESSION_LEFT, {
        channel_id: d.id,
        guild_id: f,
        media_session_id: c.mediaSessionIds[0],
        activity_session_id: c.activitySessionId,
        application_id: i,
        duration_ms: l,
        user_premium_tier: _.premiumType,
        raw_thermal_state: m,
        release_phase: I,
        activity_premium_tier_requirement: null == p ? void 0 : null === (t = p.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
        shelf_rank: null == p ? void 0 : null === (n = p.activity) || void 0 === n ? void 0 : n.shelf_rank,
        activity_user_session_id: c.activityUserSessionId,
        channel_type: d.type,
        media_session_ids: c.mediaSessionIds
    }),
        O.default.track(B.rMx.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: d.id,
            guild_id: f,
            application_id: i,
            instance_ids: null != c.launchId ? [c.launchId] : void 0,
            media_session_ids: c.mediaSessionIds,
            activity_user_session_id: c.activityUserSessionId,
            raw_thermal_state: m,
            duration_ms: l
        }),
        delete H[i];
}
async function K(e) {
    var t, n, r, i;
    let { channelId: a, applicationId: o, isFirstActivityInChannel: l, isStart: c, participants: d, embeddedActivity: f } = e,
        h = T.default.getId(),
        p = d.find((e) => e.userId === h),
        I = S.Z.getChannel(a);
    if ((c && null !== (i = null == I ? void 0 : I.isPrivate()) && void 0 !== i && i && l && null == p && u.Z.selectParticipant(a, null), null == p)) return;
    let m = g.Z.getMediaSessionId(),
        A = f.compositeInstanceId,
        R = null == m && (null == I ? void 0 : I.isVocal()) === !0 && (null == I ? void 0 : I.isPrivate()) === !1;
    if (null == A || R) return;
    let v = (0, s.Z)(),
        y = 'location' in f ? 2 : 1,
        D = null == I ? void 0 : I.getGuildId(),
        P = N.default.getCurrentUser();
    if (null == I || null == P) return;
    let U = b.ZP.getShelfActivities(D),
        w = L.Z.getState().shelfOrder,
        x = (0, M.Z)({
            applicationId: o,
            activityConfigs: U
        }),
        G = 1 + w.findIndex((e) => e === o),
        { releasePhase: k } = Y(x),
        F = await (0, E.Z)(),
        V = null != m ? [m] : [],
        j = {
            activitySessionId: A,
            activityUserSessionId: v,
            launchId: f.launchId,
            mediaSessionIds: V,
            activitiesInfraVersion: y
        };
    H[o] = j;
    let W = Z[o];
    !(0, C.Ew)(p.nonce) && p.nonce !== (null == W ? void 0 : W.nonce) && (W = void 0),
        O.default.track(B.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: I.id,
            guild_id: I.getGuildId(),
            media_session_id: V[0],
            activity_session_id: A,
            application_id: o,
            location_stack: null == W ? void 0 : W.locations,
            user_premium_tier: P.premiumType,
            raw_thermal_state: F,
            n_participants: _.Z.getUserParticipantCount(I.id),
            is_activity_start: c,
            release_phase: k,
            activity_premium_tier_requirement: null == x ? void 0 : null === (t = x.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
            shelf_rank: null == x ? void 0 : null === (n = x.activity) || void 0 === n ? void 0 : n.shelf_rank,
            shelf_sorted_rank: G > 0 ? G : null,
            activity_user_session_id: v,
            channel_type: I.type,
            source: null == W ? void 0 : W.source
        }),
        O.default.track(B.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: null == W ? void 0 : W.locations,
            channel_id: I.id,
            channel_type: I.type,
            guild_id: I.getGuildId(),
            application_id: o,
            instance_id: f.launchId,
            initial_media_session_id: V[0],
            activity_user_session_id: v,
            raw_thermal_state: F,
            is_activity_start: c,
            shelf_rank: null == x ? void 0 : null === (r = x.activity) || void 0 === r ? void 0 : r.shelf_rank,
            shelf_sorted_rank: G > 0 ? G : null,
            activities_infra_version: y
        });
}
function z(e) {
    return H[e];
}
class q extends c.Z {
    _initialize() {
        A.Z.addChangeListener(this.handleSelectedChannelUpdate), R.S.subscribe(B.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), R.S.subscribe(B.CkL.OPEN_EMBEDDED_ACTIVITY, K), l.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_START', j), l.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), l.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), l.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', W), l.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), l.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), l.Z.subscribe('CALL_DELETE', this.handleCallDelete), l.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), l.Z.subscribe('GUILD_DELETE', this.handleGuildDelete), l.Z.subscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    _terminate() {
        A.Z.removeChangeListener(this.handleSelectedChannelUpdate), R.S.unsubscribe(B.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), R.S.unsubscribe(B.CkL.OPEN_EMBEDDED_ACTIVITY, K), l.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_START', j), l.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_SUCCESS', this.handleActivityLaunchSuccess), l.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), l.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', W), l.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), l.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), l.Z.unsubscribe('CALL_DELETE', this.handleCallDelete), l.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), l.Z.unsubscribe('GUILD_DELETE', this.handleGuildDelete), l.Z.unsubscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    constructor(...e) {
        super(...e),
            V(this, 'handleSelectedChannelUpdate', () => {
                let e = A.Z.getVoiceChannelId();
                for (let { channelId: t, applicationId: n } of b.ZP.getSelfEmbeddedActivities().values())
                    (0, k.Z)(t) &&
                        t !== e &&
                        this.leaveActivity({
                            channelId: t,
                            applicationId: n
                        });
                if (null != e) {
                    let t = b.ZP.getEmbeddedActivitiesForChannel(e),
                        n = T.default.getId();
                    t.forEach((e) => {
                        if (e.userIds.has(n)) {
                            let t = b.ZP.getSelfEmbeddedActivityForChannel(e.channelId);
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
            V(this, 'handleActivityWebViewRelease', () => {
                this.releaseWebView();
            }),
            V(this, 'handleActivityLaunchSuccess', (e) => {
                let { nonce: t, applicationId: n } = e;
                setTimeout(() => {
                    let e = Z[n];
                    null != e && e.nonce === t && delete Z[n];
                }, 2000);
            }),
            V(this, 'handleActivityLaunchFail', async (e) => {
                let t,
                    n,
                    r,
                    { error: i, nonce: a, channelId: s, guildId: o, applicationId: l, isStart: u } = e,
                    c = Z[l];
                null != c && c.nonce === a ? delete Z[l] : (c = void 0);
                let d = F.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                if (i instanceof f.Z) {
                    (t = 0), (r = i.reason);
                    let e = y.Z.getFetchState();
                    switch ((I.Sb.getSetting() && e !== y.O.LOADED && (await (0, D.$h)()), i.reason)) {
                        case f.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND:
                            y.Z.inDevModeForApplication(l) && (d = F.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_MISSING_PRIMARY_APP_COMMAND);
                            break;
                        case f.Z.Reasons.INVALID_CHANNEL:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                    }
                } else if (i instanceof h.Z) {
                    var _;
                    (t = 1), (r = i.reason), (d = null !== (_ = (0, p.A0)(i.reason, l)) && void 0 !== _ ? _ : d);
                } else
                    switch (((t = 2), (n = i.status), (r = i.code), i.code)) {
                        case B.evJ.INVALID_ACTIVITY_LAUNCH_NO_ACCESS:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_ACCESS;
                            break;
                        case B.evJ.INVALID_ACTIVITY_LAUNCH_PREMIUM_TIER:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_PREMIUM;
                            break;
                        case B.evJ.INVALID_ACTIVITY_LAUNCH_CONCURRENT_ACTIVITIES:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_CONCURRENT;
                            break;
                        case B.evJ.INVALID_PERMISSIONS:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
                            break;
                        case B.evJ.INVALID_ACTIVITY_LAUNCH_AFK_CHANNEL:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
                            break;
                        case B.evJ.INVALID_ACTIVITY_LAUNCH_AGE_GATED:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_AGE_GATE;
                            break;
                        case B.evJ.INVALID_ACTIVITY_LAUNCH_DEV_PREVIEW_GUILD_SIZE:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_USER_INSTALL_IN_LARGE_GUILD;
                            break;
                        case B.evJ.ACTIVITY_CONFIGURATION_DOES_NOT_SUPPORT_PLATFORM:
                            d = F.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS;
                    }
                this.showLaunchErrorModal(d);
                let m = S.Z.getChannel(s),
                    T = await (0, E.Z)();
                O.default.track(B.rMx.ACTIVITY_SESSION_JOIN_FAILED, {
                    channel_id: s,
                    guild_id: o,
                    application_id: l,
                    raw_thermal_state: T,
                    is_activity_start: u,
                    channel_type: null == m ? void 0 : m.type,
                    location_stack: null == c ? void 0 : c.locations,
                    error_type: t,
                    error_status: n,
                    error_code: r,
                    source: null == c ? void 0 : c.source
                });
            }),
            V(this, 'superHandleRPCDisconnect', (e) => {
                let { reason: t, application: n } = e,
                    r = n.id;
                if (null != r && null != t) {
                    for (let { applicationId: e, channelId: t } of b.ZP.getSelfEmbeddedActivities().values())
                        e === r &&
                            this.leaveActivity({
                                channelId: t,
                                applicationId: r
                            });
                    t.code !== B.$VG.CLOSE_NORMAL && this.showErrorModal(t, r);
                }
            }),
            V(this, 'handleCallDelete', (e) => {
                let { channelId: t } = e,
                    n = A.Z.getVoiceChannelId();
                null != n && n === t && this.handleCallEnded(t);
            }),
            V(this, 'handleRTCConnectionState', (e) => {
                if (e.state !== B.hes.DISCONNECTED) return;
                let t = e.channelId;
                this.handleCallEnded(t);
            }),
            V(this, 'handleCallEnded', (e) => {
                let t = b.ZP.getSelfEmbeddedActivityForChannel(e);
                null != t &&
                    this.leaveActivity({
                        channelId: e,
                        applicationId: t.applicationId
                    });
            }),
            V(this, 'handleDeferredOpen', async (e) => {
                var t, n, r;
                let { channelId: i, applicationId: a, analyticsLocations: s, commandOrigin: o } = e,
                    l = S.Z.getChannel(i);
                if (void 0 === l || (m.tx.has(null == l ? void 0 : l.type) && A.Z.getVoiceChannelId() !== i)) return;
                let u = b.ZP.getSelfEmbeddedActivityForChannel(i);
                if ((null == u ? void 0 : u.applicationId) === a) return;
                let c = await d.ZP.fetchApplication(a);
                if (!(0, w.a)(l)) {
                    this.showLaunchErrorModal(F.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                    return;
                }
                if (!(0, G.Z)(null == c ? void 0 : null === (t = c.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
                    this.showLaunchErrorModal(F.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
                    return;
                }
                let _ = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : void 0,
                    { activityConfigs: E, applications: f } = await (0, D.w1)({ guildId: _ }),
                    h = (0, M.Z)({
                        applicationId: a,
                        activityConfigs: E,
                        applications: f
                    });
                if (null == h) {
                    let e = await (0, D.w1)({
                        guildId: _,
                        force: !0
                    });
                    h = (0, M.Z)({
                        applicationId: a,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications
                    });
                }
                let p = b.ZP.getEmbeddedActivitiesForChannel(i).find((e) => e.applicationId === a),
                    I = null !== (r = null == p ? void 0 : p.userIds.size) && void 0 !== r ? r : 0;
                I > 0
                    ? await (0, P.k)({
                          channelId: i,
                          applicationId: a,
                          launchId: null == p ? void 0 : p.launchId,
                          inputApplication: null,
                          analyticsLocations: s
                      })
                    : await (0, U.Z)({
                          targetApplicationId: a,
                          channelId: i,
                          analyticsLocations: s,
                          commandOrigin: o
                      });
            }),
            V(this, 'handleGuildDelete', (e) => {
                let { guild: t } = e;
                b.ZP.getSelfEmbeddedActivities().forEach((e) => {
                    let { channelId: n, applicationId: r, guildId: i } = e;
                    t.id === i &&
                        this.leaveActivity({
                            channelId: n,
                            applicationId: r
                        });
                });
            }),
            V(this, 'handleChannelDelete', (e) => {
                let { channel: t } = e,
                    n = b.ZP.getSelfEmbeddedActivityForChannel(t.id);
                null != n &&
                    this.leaveActivity({
                        channelId: t.id,
                        applicationId: n.applicationId
                    });
            });
    }
}
