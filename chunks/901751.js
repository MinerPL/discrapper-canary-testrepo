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
    f = n(77498),
    _ = n(938475),
    h = n(70956),
    p = n(272008),
    m = n(569984),
    g = n(918701),
    E = n(432945),
    v = n(5881),
    I = n(566078),
    S = n(46140),
    T = n(70722);
function b(e, t, n) {
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
let y = 1 * h.Z.Millis.MINUTE,
    A = 1 * h.Z.Millis.SECOND,
    N = (0, v.T)({ location: S.dr.QUESTS_MANAGER }),
    C = (e) =>
        (0, u.V9)({
            streamType: T.lo.CALL,
            channelId: e,
            ownerId: '1'
        });
function R() {
    let e = c.Z.getStreamerActiveStreamMetadata();
    if ((null == e ? void 0 : e.id) == null) return null;
    let t = f.Z.getDetectableGame(e.id);
    if ((null == t ? void 0 : t.id) == null) return null;
    let n = (0, g.lQ)(m.Z.quests, t.id);
    return null != n && D(n) ? n : null;
}
function O(e) {
    return _.ZP.countVoiceStatesForChannel(e) >= 2;
}
function D(e) {
    return !(0, g.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
((i = r || (r = {})).BEAT = 'BEAT'), (i.STOP = 'STOP'), (i.BEAT_TERMINAL = 'BEAT_TERMINAL');
function L(e) {
    let t = {
        quest: null,
        activity: null
    };
    if (
        !(0, E.S)({
            location: S.dr.QUESTS_MANAGER,
            autoTrackExposure: !1
        })
    )
        return t;
    for (let r of o.ZP.getSelfEmbeddedActivities().values()) {
        var n;
        if (null != e && r.channelId !== e) continue;
        let i = null !== (n = (0, g.lQ)(m.Z.quests, r.applicationId)) && void 0 !== n ? n : null;
        if (null != i && D(i))
            return {
                quest: i,
                activity: r
            };
        t = {
            quest: null,
            activity: r
        };
    }
    return t;
}
class x extends s.Z {
    constructor(...e) {
        super(...e),
            b(this, 'streamKeyToHeartbeatState', new Map()),
            b(this, 'initiateHeartbeat', (e) => {
                let { questId: t, streamKey: n, applicationId: r } = e;
                if (this.streamKeyToHeartbeatState.has(n)) {
                    N.log('~ initiateHeartbeat -> Heartbeat already initiated:', n);
                    return;
                }
                let i = () => {
                    let e = (function (e) {
                        var t;
                        let { questId: n, streamKey: r, applicationId: i } = e,
                            { channelId: a } = (0, u.my)(r),
                            s = O(a),
                            o = m.Z.quests.get(n);
                        if (null == o || !D(o)) return 'STOP';
                        let d = null === (t = R()) || void 0 === t ? void 0 : t.config,
                            f = null != c.Z.getRTCStream(r) && null != d && I.r.build(d).application.id === i && s,
                            { quest: _, activity: h } = L(),
                            p = null != (null == _ ? void 0 : _.config) && (null == _ ? void 0 : _.id) === n && (0, g.UZ)(i, _) && (null == h ? void 0 : h.channelId) === a,
                            E = l.ZP.getRunningGames().map((e) => e.id),
                            v = (0, g.$H)(o) && E.includes(i);
                        return f || p || v ? 'BEAT' : 'BEAT_TERMINAL';
                    })({
                        questId: t,
                        streamKey: n,
                        applicationId: r
                    });
                    if ((N.log('~ initiateHeartbeat -> streamkey '.concat(n, '. heartbeat decision: '), e), 'BEAT' === e)) {
                        (0, p.m0)({
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
            b(this, 'calculateHeartbeatDurationMs', (e) => {
                let t = m.Z.quests.get(e);
                if (null == t || null == t.config || null == t.userStatus) return y;
                let { progressSeconds: n, targetSeconds: r } = (0, g.il)(t, a.T.DESKTOP),
                    i = Math.max(0, (r - n) * h.Z.Millis.SECOND);
                return i <= y ? i + A : y;
            }),
            b(this, 'terminateHeartbeat', (e) => {
                let { streamKey: t, sendTerminalHeartbeat: n } = e,
                    r = this.streamKeyToHeartbeatState.get(t);
                if (null != r) {
                    N.log('~ terminateHeartbeat -> Terminating heartbeat:', {
                        streamKey: t,
                        sendTerminalHeartbeat: n
                    });
                    let { questId: e, heartbeatTimeoutId: i } = r;
                    window.clearTimeout(i),
                        this.streamKeyToHeartbeatState.delete(t),
                        n &&
                            (0, p.m0)({
                                questId: e,
                                streamKey: t,
                                terminal: !0
                            });
                }
            }),
            b(this, 'terminateHeartbeatForQuestId', (e) => {
                let { previewQuestUserStatus: t } = e,
                    { questId: n, enrolledAt: r, completedAt: i } = t;
                (null === r || null === i) &&
                    this.streamKeyToHeartbeatState.forEach((e, t) => {
                        e.questId === n &&
                            (N.log('terminateHeartbeatForQuestId - terminating heartbeat for quest ID '.concat(n)),
                            this.terminateHeartbeat({
                                streamKey: t,
                                sendTerminalHeartbeat: !0
                            }));
                    });
            }),
            b(this, 'handleEnrollmentSuccess', (e) => {
                let {
                        enrolledQuestUserStatus: { questId: t }
                    } = e,
                    n = c.Z.getCurrentUserActiveStream(),
                    r = R();
                if (null != n && null != r && r.id === t && D(r)) {
                    N.log('handleEnrollmentSuccess - initiating heartbeat for stream'),
                        this.initiateHeartbeat({
                            streamKey: (0, u.V9)(n),
                            applicationId: I.r.build(r.config).application.id,
                            questId: r.id
                        });
                    return;
                }
                let { quest: i, activity: a } = L();
                if (null != a && null != i && D(i) && i.id === t) {
                    N.log('handleEnrollmentSuccess - initiating heartbeat for activity'),
                        this.initiateHeartbeat({
                            streamKey: C(a.channelId),
                            applicationId: I.r.build(i.config).application.id,
                            questId: i.id
                        });
                    return;
                }
                l.ZP.getRunningGames().forEach((e) => {
                    if (null == e.id) return;
                    let t = (0, g.CE)(m.Z.quests, e.id);
                    if (null != t && D(t) && (0, g.$H)(t)) {
                        N.log('handleEnrollmentSuccess - initiating heartbeat for playtime task');
                        let e = C(t.id);
                        this.initiateHeartbeat({
                            streamKey: e,
                            applicationId: I.r.build(t.config).application.id,
                            questId: t.id
                        });
                    }
                });
            }),
            b(this, 'handleSendHeartbeatSuccess', (e) => {
                let { streamKey: t, userStatus: n } = e;
                N.log('~ handleSendHeartbeatSuccess -> Heartbeat succeeded:', t),
                    null != n.completedAt &&
                        this.terminateHeartbeat({
                            streamKey: t,
                            sendTerminalHeartbeat: !1
                        });
            }),
            b(this, 'handleSendHeartbeatFailure', (e) => {
                let { streamKey: t } = e;
                N.log('~ handleSendHeartbeatFailure -> Heartbeat failed:', t);
            }),
            b(this, 'handleQuestsFetchCurrentQuestsSuccess', (e) => {
                let { quests: t } = e;
                N.log('~ handleQuestsFetchCurrentQuestsSuccess -> Quests fetched:', t);
                let n = l.ZP.getRunningGames().map((e) => e.id);
                t.forEach((e) => {
                    if (D(e) && (0, g.$H)(e)) {
                        let t = C(e.id),
                            r = n.includes(I.r.build(e.config).application.id),
                            i = !this.streamKeyToHeartbeatState.has(t) && r;
                        this.streamKeyToHeartbeatState.has(t) && !r
                            ? this.terminateHeartbeat({
                                  streamKey: t,
                                  sendTerminalHeartbeat: !0
                              })
                            : i &&
                              (N.log('handleQuestsFetchCurrentQuestsSuccess - initiating heartbeat for playtime task'),
                              this.initiateHeartbeat({
                                  streamKey: t,
                                  applicationId: I.r.build(e.config).application.id,
                                  questId: e.id
                              }));
                    }
                });
            }),
            b(this, 'handleRunningGamesChange', (e) => {
                this._handlePlayOnDesktopQuestsUpdate(e);
            }),
            b(this, '_handlePlayOnDesktopQuestsUpdate', (e) => {
                let { removed: t, games: n } = e;
                N.log('~ handleRunningGamesChange -> Games detected:', {
                    runningGames: n,
                    removedGames: t
                }),
                    n.forEach((e) => {
                        if (null == e.id) return;
                        let t = (0, g.CE)(m.Z.quests, e.id);
                        if (null == t || !D(t)) return;
                        let n = C(t.id);
                        (0, g.$H)(t) &&
                            !this.streamKeyToHeartbeatState.has(n) &&
                            (N.log('handleRunningGamesChange - initiating heartbeat for playtime task'),
                            this.initiateHeartbeat({
                                streamKey: n,
                                applicationId: I.r.build(t.config).application.id,
                                questId: t.id
                            }));
                    }),
                    t.forEach((e) => {
                        if (null == e.id) return;
                        let t = (0, g.CE)(m.Z.quests, e.id);
                        if (null == t || !D(t)) return;
                        let n = C(t.id);
                        (0, g.$H)(t) &&
                            this.streamKeyToHeartbeatState.has(n) &&
                            this.terminateHeartbeat({
                                streamKey: n,
                                sendTerminalHeartbeat: !0
                            });
                    });
            }),
            b(this, 'handleVoiceStateChange', () => {
                let e = c.Z.getCurrentUserActiveStream(),
                    t = R();
                null != e &&
                    this._handleVoiceStateChange({
                        streamKey: (0, u.V9)(e),
                        channelId: e.channelId,
                        quest: t
                    });
            }),
            b(this, '_handleVoiceStateChange', (e) => {
                let { streamKey: t, channelId: n, quest: r } = e,
                    i = null == r || !O(n),
                    a = O(n) && !this.streamKeyToHeartbeatState.has(t) && null != r && D(r) && !(0, g.$H)(r);
                i
                    ? (N.log('handleVoiceStateChange - calling terminateHeartbeat for streamKey '.concat(t)),
                      this.terminateHeartbeat({
                          streamKey: t,
                          sendTerminalHeartbeat: !0
                      }))
                    : a &&
                      (N.log('handleVoiceStateChange - initiating heartbeat for stream task'),
                      this.initiateHeartbeat({
                          streamKey: t,
                          applicationId: I.r.build(r.config).application.id,
                          questId: r.id
                      }));
            }),
            b(this, 'handleEmbeddedActivityUpdate', (e) => {
                let { quest: t, activity: n } = L(e),
                    r = C(e),
                    i = (null == n || null == t) && this.streamKeyToHeartbeatState.has(r),
                    a = null != n && null != t && D(t) && !this.streamKeyToHeartbeatState.has(r);
                i
                    ? (N.log('handleEmbeddedActivityUpdate - terminating heartbeat'),
                      this.terminateHeartbeat({
                          streamKey: r,
                          sendTerminalHeartbeat: !0
                      }))
                    : a &&
                      (N.log('handleEmbeddedActivityUpdate - initiating heartbeat for activity task'),
                      this.initiateHeartbeat({
                          streamKey: r,
                          applicationId: I.r.build(t.config).application.id,
                          questId: t.id
                      }));
            }),
            b(this, 'handleStreamCreate', (e) => {
                let { streamKey: t } = e,
                    { channelId: n, ownerId: r } = (0, u.my)(t);
                if (r !== d.default.getId()) return;
                let i = R();
                if (null == i) {
                    N.log('handleStreamCreate - calling terminateHeartbeat for streamKey '.concat(t)),
                        this.terminateHeartbeat({
                            streamKey: t,
                            sendTerminalHeartbeat: !1
                        });
                    return;
                }
                O(n) &&
                    D(i) &&
                    !(0, g.$H)(i) &&
                    !this.streamKeyToHeartbeatState.has(t) &&
                    (N.log('handleStreamCreate - initiating heartbeat for stream task'),
                    this.initiateHeartbeat({
                        streamKey: t,
                        applicationId: I.r.build(i.config).application.id,
                        questId: i.id
                    }));
            }),
            b(this, 'handleStreamStart', (e) => {
                let { streamType: t, guildId: n, channelId: r } = e,
                    i = R(),
                    a = (0, u.V9)({
                        streamType: t,
                        guildId: n,
                        channelId: r,
                        ownerId: d.default.getId()
                    });
                null == i
                    ? (N.log('handleStreamStart - calling terminateHeartbeat for streamKey '.concat(a)),
                      this.terminateHeartbeat({
                          streamKey: a,
                          sendTerminalHeartbeat: !0
                      }))
                    : O(r) &&
                      D(i) &&
                      !(0, g.$H)(i) &&
                      !this.streamKeyToHeartbeatState.has(a) &&
                      (N.log('handleStreamStart - initiating heartbeat for stream task'),
                      this.initiateHeartbeat({
                          streamKey: a,
                          applicationId: I.r.build(i.config).application.id,
                          questId: i.id
                      }));
            }),
            b(this, 'handleStreamClose', (e) => {
                let { streamKey: t } = e;
                N.log('handleStreamClose - terminating heartbeat'),
                    this.terminateHeartbeat({
                        streamKey: t,
                        sendTerminalHeartbeat: !0
                    });
            }),
            b(this, 'actions', {
                QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: this.handleQuestsFetchCurrentQuestsSuccess,
                QUESTS_ENROLL_SUCCESS: this.handleEnrollmentSuccess,
                QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
                QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
                QUESTS_PREVIEW_UPDATE_SUCCESS: this.terminateHeartbeatForQuestId,
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                STREAM_START: this.handleStreamStart,
                STREAM_CREATE: this.handleStreamCreate,
                STREAM_CLOSE: this.handleStreamClose,
                PASSIVE_UPDATE_V2: this.handleVoiceStateChange,
                VOICE_STATE_UPDATES: this.handleVoiceStateChange,
                EMBEDDED_ACTIVITY_UPDATE_V2: (e) => {
                    let { location: t } = e;
                    return this.handleEmbeddedActivityUpdate(t.channel_id);
                }
            });
    }
}
t.ZP = new x();
