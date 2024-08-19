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
    E = n(695346),
    f = n(131704),
    h = n(314897),
    p = n(592125),
    m = n(19780),
    I = n(944486),
    T = n(594174),
    g = n(626135),
    S = n(585483),
    A = n(358085),
    N = n(24933),
    v = n(115130),
    O = n(566620),
    R = n(317381),
    C = n(969345),
    y = n(148720),
    D = n(122613),
    L = n(782769),
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
    return { releasePhase: null == e ? void 0 : null === (t = e.activity) || void 0 === t ? void 0 : t.client_platform_config[(0, b.Z)((0, A.getOS)())].release_phase };
}
function F(e) {
    let { applicationId: t, analyticsLocations: n } = e;
    null != n && (k[t] = n);
}
async function V(e) {
    var t, n;
    let { channelId: r, applicationId: i, locationId: s, instanceId: o } = e,
        l = R.ZP.getEmbeddedActivityDurationMs(r, i),
        u = h.default.getSessionId();
    null != s &&
        null != o &&
        null != u &&
        (await a.tn.post({
            url: U.ANM.ACTIVITY_LEAVE(i, s, o),
            body: { session_id: u },
            retries: 2
        }));
    let c = G[i],
        _ = p.Z.getChannel(r),
        E = T.default.getCurrentUser();
    if (null == c || null == _ || null == E) return;
    let f = _.getGuildId(),
        m = R.ZP.getShelfActivities(f),
        I = (0, C.Z)({
            applicationId: i,
            activityConfigs: m
        }),
        { releasePhase: S } = B(I),
        A = await (0, d.Z)();
    g.default.track(U.rMx.ACTIVITY_SESSION_LEFT, {
        channel_id: _.id,
        guild_id: f,
        media_session_id: c.mediaSessionIds[0],
        activity_session_id: c.activitySessionId,
        application_id: i,
        duration_ms: l,
        user_premium_tier: E.premiumType,
        raw_thermal_state: A,
        release_phase: S,
        activity_premium_tier_requirement: null == I ? void 0 : null === (t = I.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
        shelf_rank: null == I ? void 0 : null === (n = I.activity) || void 0 === n ? void 0 : n.shelf_rank,
        activity_user_session_id: c.activityUserSessionId,
        channel_type: _.type,
        media_session_ids: c.mediaSessionIds
    }),
        g.default.track(U.rMx.ACTIVITY_IFRAME_UNMOUNT, {
            channel_id: _.id,
            guild_id: f,
            application_id: i,
            instance_ids: null != c.launchId ? [c.launchId] : void 0,
            media_session_ids: c.mediaSessionIds,
            activity_user_session_id: c.activityUserSessionId,
            raw_thermal_state: A,
            duration_ms: l
        }),
        delete G[i];
}
async function H(e) {
    var t, n, r, a;
    let { channelId: s, applicationId: l, isFirstActivityInChannel: u, isStart: _, participants: E, embeddedActivity: f } = e,
        I = h.default.getId(),
        S = E.find((e) => e.userId === I),
        A = p.Z.getChannel(s);
    if ((_ && null !== (a = null == A ? void 0 : A.isPrivate()) && void 0 !== a && a && u && null == S && o.Z.selectParticipant(s, null), null == S)) return;
    let v = m.Z.getMediaSessionId(),
        O = f.compositeInstanceId,
        y = null == v && (null == A ? void 0 : A.isVocal()) === !0 && (null == A ? void 0 : A.isPrivate()) === !1;
    if (null == O || y) return;
    let D = (0, i.Z)(),
        L = 'location' in f ? 2 : 1,
        b = null == A ? void 0 : A.getGuildId(),
        M = T.default.getCurrentUser();
    if (null == A || null == M) return;
    let P = R.ZP.getShelfActivities(b),
        w = N.Z.getState().shelfOrder,
        x = (0, C.Z)({
            applicationId: l,
            activityConfigs: P
        }),
        F = 1 + w.findIndex((e) => e === l),
        { releasePhase: V } = B(x),
        H = await (0, d.Z)(),
        Z = null != v ? [v] : [],
        Y = {
            activitySessionId: O,
            activityUserSessionId: D,
            launchId: f.launchId,
            mediaSessionIds: Z,
            activitiesInfraVersion: L
        };
    (G[l] = Y),
        g.default.track(U.rMx.ACTIVITY_SESSION_JOINED, {
            channel_id: A.id,
            guild_id: A.getGuildId(),
            media_session_id: Z[0],
            activity_session_id: O,
            application_id: l,
            location_stack: _ ? void 0 : k[l],
            user_premium_tier: M.premiumType,
            raw_thermal_state: H,
            n_participants: c.Z.getUserParticipantCount(A.id),
            is_activity_start: _,
            release_phase: V,
            activity_premium_tier_requirement: null == x ? void 0 : null === (t = x.activity) || void 0 === t ? void 0 : t.premium_tier_requirement,
            shelf_rank: null == x ? void 0 : null === (n = x.activity) || void 0 === n ? void 0 : n.shelf_rank,
            shelf_sorted_rank: F > 0 ? F : null,
            activity_user_session_id: D,
            channel_type: A.type
        }),
        g.default.track(U.rMx.ACTIVITY_IFRAME_MOUNT, {
            location_stack: k[l],
            channel_id: A.id,
            channel_type: A.type,
            guild_id: A.getGuildId(),
            application_id: l,
            instance_id: f.launchId,
            initial_media_session_id: Z[0],
            activity_user_session_id: D,
            raw_thermal_state: H,
            is_activity_start: _,
            shelf_rank: null == x ? void 0 : null === (r = x.activity) || void 0 === r ? void 0 : r.shelf_rank,
            shelf_sorted_rank: F > 0 ? F : null,
            activities_infra_version: L
        });
}
function Z(e) {
    return G[e];
}
class Y extends l.Z {
    _initialize() {
        I.Z.addChangeListener(this.handleSelectedChannelUpdate), S.S.subscribe(U.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), S.S.subscribe(U.CkL.OPEN_EMBEDDED_ACTIVITY, H), s.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), s.Z.subscribe('EMBEDDED_ACTIVITY_LAUNCH_START', F), s.Z.subscribe('EMBEDDED_ACTIVITY_CLOSE', V), s.Z.subscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), s.Z.subscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), s.Z.subscribe('CALL_DELETE', this.handleCallDelete), s.Z.subscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), s.Z.subscribe('GUILD_DELETE', this.handleGuildDelete), s.Z.subscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    _terminate() {
        I.Z.removeChangeListener(this.handleSelectedChannelUpdate), S.S.unsubscribe(U.CkL.RELEASE_ACTIVITY_WEB_VIEW, this.handleActivityWebViewRelease), S.S.unsubscribe(U.CkL.OPEN_EMBEDDED_ACTIVITY, H), s.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_FAIL', this.handleActivityLaunchFail), s.Z.unsubscribe('EMBEDDED_ACTIVITY_LAUNCH_START', F), s.Z.unsubscribe('EMBEDDED_ACTIVITY_CLOSE', V), s.Z.unsubscribe('EMBEDDED_ACTIVITY_DEFERRED_OPEN', this.handleDeferredOpen), s.Z.unsubscribe('RPC_APP_DISCONNECTED', this.handleRPCDisconnect), s.Z.unsubscribe('CALL_DELETE', this.handleCallDelete), s.Z.unsubscribe('RTC_CONNECTION_STATE', this.handleRTCConnectionState), s.Z.unsubscribe('GUILD_DELETE', this.handleGuildDelete), s.Z.unsubscribe('CHANNEL_DELETE', this.handleChannelDelete);
    }
    constructor(...e) {
        super(...e),
            x(this, 'handleSelectedChannelUpdate', () => {
                let e = I.Z.getVoiceChannelId();
                for (let { channelId: t, applicationId: n } of R.ZP.getSelfEmbeddedActivities().values())
                    (0, P.Z)(t) &&
                        t !== e &&
                        this.leaveActivity({
                            channelId: t,
                            applicationId: n
                        });
                if (null != e) {
                    let t = R.ZP.getEmbeddedActivitiesForChannel(e),
                        n = h.default.getId();
                    t.forEach((e) => {
                        if (e.userIds.has(n)) {
                            let t = R.ZP.getSelfEmbeddedActivityForChannel(e.channelId);
                            null == t
                                ? (0, O.rp)(e.channelId, e.applicationId)
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
            x(this, 'handleActivityLaunchFail', async (e) => {
                let { error: t, applicationId: n } = e,
                    r = w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_GENERIC;
                if (t instanceof _.Z) {
                    let e = v.Z.getFetchState();
                    if ((E.Sb.getSetting() && 'loaded' !== e && (await (0, O.$h)()), t.reason === _.Z.Reasons.PRIMARY_APP_COMMAND_NOT_FOUND)) v.Z.inDevModeForApplication(n) && (r = w.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_FAIL_MISSING_PRIMARY_APP_COMMAND);
                } else
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
                    for (let { applicationId: e, channelId: t } of R.ZP.getSelfEmbeddedActivities().values())
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
                let t = R.ZP.getSelfEmbeddedActivityForChannel(e);
                null != t &&
                    this.leaveActivity({
                        channelId: e,
                        applicationId: t.applicationId
                    });
            }),
            x(this, 'handleDeferredOpen', async (e) => {
                var t, n, r;
                let { channelId: i, applicationId: a, analyticsLocations: s } = e,
                    o = p.Z.getChannel(i);
                if (void 0 === o || (f.tx.has(null == o ? void 0 : o.type) && I.Z.getVoiceChannelId() !== i)) return;
                let l = R.ZP.getSelfEmbeddedActivityForChannel(i);
                if ((null == l ? void 0 : l.applicationId) === a) return;
                let c = await u.Z.fetchApplication(a);
                if (!(0, L.a)(o)) {
                    this.showLaunchErrorModal(w.Z.Messages.EMBEDDED_ACTIVITIES_NOT_AVAILABLE_ON_OS);
                    return;
                }
                if (!(0, M.Z)(null == c ? void 0 : null === (t = c.embedded_activity_config) || void 0 === t ? void 0 : t.supported_platforms)) {
                    this.showLaunchErrorModal(w.Z.Messages.EMBEDDED_ACTIVITIES_APPLICATION_UNSUPPORTED_OS);
                    return;
                }
                let d = null !== (n = null == o ? void 0 : o.getGuildId()) && void 0 !== n ? n : void 0,
                    { activityConfigs: _, applications: E } = await (0, O.w1)({ guildId: d }),
                    h = (0, C.Z)({
                        applicationId: a,
                        activityConfigs: _,
                        applications: E
                    });
                if (null == h) {
                    let e = await (0, O.w1)({
                        guildId: d,
                        force: !0
                    });
                    h = (0, C.Z)({
                        applicationId: a,
                        activityConfigs: e.activityConfigs,
                        applications: e.applications
                    });
                }
                let m = R.ZP.getEmbeddedActivitiesForChannel(i).find((e) => e.applicationId === a),
                    T = null !== (r = null == m ? void 0 : m.userIds.size) && void 0 !== r ? r : 0;
                T > 0
                    ? await (0, y.k)({
                          channelId: i,
                          applicationId: a,
                          launchId: null == m ? void 0 : m.launchId,
                          inputApplication: null,
                          analyticsLocations: s
                      })
                    : await (0, D.Z)({
                          targetApplicationId: a,
                          channelId: i,
                          analyticsLocations: s
                      });
            }),
            x(this, 'handleGuildDelete', (e) => {
                let { guild: t } = e;
                R.ZP.getSelfEmbeddedActivities().forEach((e) => {
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
                    n = R.ZP.getSelfEmbeddedActivityForChannel(t.id);
                null != n &&
                    this.leaveActivity({
                        channelId: t.id,
                        applicationId: n.applicationId
                    });
            });
    }
}
