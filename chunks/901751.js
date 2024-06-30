n(47120);
var r, i, a = n(147913), o = n(317381), s = n(594190), l = n(569545), u = n(199902), c = n(314897), d = n(77498), _ = n(938475), E = n(70956), f = n(272008), h = n(569984), p = n(918701), m = n(432945), I = n(5881), T = n(566078), g = n(46140), S = n(70722);
function A(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let N = 1 * E.Z.Millis.MINUTE, v = 1 * E.Z.Millis.SECOND, O = 1 * E.Z.Millis.SECOND, R = (0, I.T)({ location: g.dr.QUESTS_MANAGER }), C = e => (0, l.V9)({
        streamType: S.lo.CALL,
        channelId: e,
        ownerId: '1'
    });
function y() {
    let e = u.Z.getStreamerActiveStreamMetadata();
    if ((null == e ? void 0 : e.id) == null)
        return null;
    let t = d.Z.getDetectableGame(e.id);
    if ((null == t ? void 0 : t.id) == null)
        return null;
    let n = (0, p.lQ)(h.Z.quests, t.id);
    return null != n && b(n) ? n : null;
}
let D = () => {
    for (let e of s.ZP.getRunningGames().map(e => e.id)) {
        if (null == e)
            continue;
        let t = (0, p.CE)(h.Z.quests, e);
        if (null != t && b(t))
            return t;
    }
};
function L(e) {
    return _.ZP.countVoiceStatesForChannel(e) >= 2;
}
function b(e) {
    return !(0, p.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt;
}
function M(e) {
    var t;
    let {
            questId: n,
            streamKey: r,
            applicationId: i
        } = e, {channelId: a} = (0, l.my)(r), o = L(a), c = h.Z.quests.get(n);
    if (null == c || !b(c))
        return 'STOP';
    let d = null === (t = y()) || void 0 === t ? void 0 : t.config, _ = null != u.Z.getRTCStream(r) && null != d && T.r.build(d).application.id === i && o, {
            quest: E,
            activity: f
        } = P(), m = null == E ? void 0 : E.config, I = null != m && (null == E ? void 0 : E.id) === n && T.r.build(m).application.id === i && o && (null == f ? void 0 : f.channelId) === a, g = s.ZP.getRunningGames().map(e => e.id), S = (0, p.$H)(c) && g.includes(i);
    return _ || I || S ? 'BEAT' : 'BEAT_TERMINAL';
}
function P(e) {
    let t = {
        quest: null,
        activity: null
    };
    if (!(0, m.S)({
            location: g.dr.QUESTS_MANAGER,
            autoTrackExposure: !1
        }))
        return t;
    for (let r of o.ZP.getSelfEmbeddedActivities().values()) {
        var n;
        if (null != e && r.channelId !== e)
            continue;
        let i = null !== (n = (0, p.lQ)(h.Z.quests, r.applicationId)) && void 0 !== n ? n : null;
        if (null != i && b(i))
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
(i = r || (r = {})).BEAT = 'BEAT', i.STOP = 'STOP', i.BEAT_TERMINAL = 'BEAT_TERMINAL';
class U extends a.Z {
    constructor(...e) {
        super(...e), A(this, 'streamKeyToHeartbeatState', new Map()), A(this, 'optimisticProgressUpdateIntervalIds', new Map()), A(this, 'lastOptimisticallyUpdatedProgressMap', new Map()), A(this, 'initiateHeartbeat', e => {
            let {
                questId: t,
                streamKey: n,
                applicationId: r
            } = e;
            if (this.streamKeyToHeartbeatState.has(n)) {
                R.log('~ initiateHeartbeat -> Heartbeat already initiated:', n);
                return;
            }
            let i = () => {
                let e = M({
                    questId: t,
                    streamKey: n,
                    applicationId: r
                });
                if (R.log('~ initiateHeartbeat -> heartbeat decision: ', e), 'BEAT' === e) {
                    (0, f.m0)({
                        questId: t,
                        streamKey: n
                    });
                    let e = this.calculateHeartbeatDurationMs(t), r = window.setTimeout(i, e);
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
        }), A(this, 'calculateHeartbeatDurationMs', e => {
            let t = h.Z.quests.get(e);
            if (null == t || null == t.config || null == t.userStatus)
                return N;
            let {
                    progressSeconds: n,
                    targetSeconds: r
                } = (0, p.il)(t), i = Math.max(0, (r - n) * E.Z.Millis.SECOND);
            return i <= N ? i + v : N;
        }), A(this, 'terminateHeartbeat', e => {
            let {
                streamKey: t,
                sendTerminalHeartbeat: n
            } = e;
            this.terminateOptimisticProgressUpdateInterval(t);
            let r = this.streamKeyToHeartbeatState.get(t);
            if (null != r) {
                R.log('~ terminateHeartbeat -> Terminating heartbeat:', {
                    streamKey: t,
                    sendTerminalHeartbeat: n
                });
                let {
                    questId: e,
                    heartbeatTimeoutId: i
                } = r;
                window.clearTimeout(i), this.streamKeyToHeartbeatState.delete(t), n && (0, f.m0)({
                    questId: e,
                    streamKey: t,
                    terminal: !0
                });
            }
        }), A(this, 'initiateOptimisticProgressUpdateInterval', e => {
            this.terminateOptimisticProgressUpdateInterval(e), this.optimisticProgressUpdateIntervalIds.set(e, window.setInterval(() => {
                var t, n;
                let r = y(), i = D(), {quest: a} = P(), o = null !== (n = null !== (t = null != r ? r : a) && void 0 !== t ? t : i) && void 0 !== n ? n : null;
                if (null == o) {
                    this.terminateOptimisticProgressUpdateInterval(e);
                    return;
                }
                let s = T.r.build(o.config), l = o.userStatus, u = this.lastOptimisticallyUpdatedProgressMap.get(e);
                if ('BEAT' !== M({
                        questId: o.id,
                        streamKey: e,
                        applicationId: s.application.id
                    })) {
                    this.terminateOptimisticProgressUpdateInterval(e);
                    return;
                }
                if (null == u)
                    this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now());
                else if (null != l) {
                    let {
                            progressSeconds: t,
                            targetSeconds: n,
                            taskType: r
                        } = (0, p.il)(o), i = (Date.now() - u) / E.Z.Millis.SECOND, a = t + i;
                    if (R.log('~ initiateOptimisticProgressUpdateInterval -> Updating optimistic progress:', {
                            streamKey: e,
                            progressToAdd: i,
                            existingProgress: t,
                            newProgress: a
                        }), a <= n) {
                        let t = {
                            ...l,
                            streamProgressSeconds: a
                        };
                        t.progress[r] = {
                            ...t.progress[r],
                            eventName: r,
                            value: a
                        }, (0, f.kP)(t), this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now());
                    }
                }
            }, O));
        }), A(this, 'terminateOptimisticProgressUpdateInterval', e => {
            R.log('~ terminateOptimisticProgressUpdateInterval -> Terminating/Resetting Interval', e), window.clearInterval(this.optimisticProgressUpdateIntervalIds.get(e)), this.optimisticProgressUpdateIntervalIds.delete(e), this.lastOptimisticallyUpdatedProgressMap.delete(e);
        }), A(this, 'handleEnrollmentSuccess', e => {
            let {
                    enrolledQuestUserStatus: {questId: t}
                } = e, n = u.Z.getCurrentUserActiveStream(), r = y();
            if (null != n && null != r && r.id === t && b(r)) {
                R.log('handleEnrollmentSuccess - initiating heartbeat for stream'), this.initiateHeartbeat({
                    streamKey: (0, l.V9)(n),
                    applicationId: T.r.build(r.config).application.id,
                    questId: r.id
                });
                return;
            }
            let {
                quest: i,
                activity: a
            } = P();
            if (null != a && null != i && b(i) && i.id === t) {
                R.log('handleEnrollmentSuccess - initiating heartbeat for activity'), this.initiateHeartbeat({
                    streamKey: C(a.channelId),
                    applicationId: T.r.build(i.config).application.id,
                    questId: i.id
                });
                return;
            }
            s.ZP.getRunningGames().forEach(e => {
                if (null == e.id)
                    return;
                let t = (0, p.CE)(h.Z.quests, e.id);
                if (null != t && b(t) && (0, p.$H)(t)) {
                    R.log('handleEnrollmentSuccess - initiating heartbeat for playtime task');
                    let e = C(t.id);
                    this.initiateHeartbeat({
                        streamKey: e,
                        applicationId: T.r.build(t.config).application.id,
                        questId: t.id
                    });
                }
            });
        }), A(this, 'handleSendHeartbeatSuccess', e => {
            let {
                streamKey: t,
                userStatus: n
            } = e;
            R.log('~ handleSendHeartbeatSuccess -> Heartbeat succeeded:', t), this.terminateOptimisticProgressUpdateInterval(t), null != n.completedAt ? (this.terminateHeartbeat({
                streamKey: t,
                sendTerminalHeartbeat: !1
            }), this.terminateOptimisticProgressUpdateInterval(t)) : this.initiateOptimisticProgressUpdateInterval(t);
        }), A(this, 'handleSendHeartbeatFailure', e => {
            let {streamKey: t} = e;
            R.log('~ handleSendHeartbeatFailure -> Heartbeat failed:', t), this.terminateOptimisticProgressUpdateInterval(t);
        }), A(this, 'handleQuestsFetchCurrentQuestsSuccess', e => {
            let {quests: t} = e;
            R.log('~ handleQuestsFetchCurrentQuestsSuccess -> Quests fetched:', t);
            let n = s.ZP.getRunningGames().map(e => e.id);
            t.forEach(e => {
                if (b(e) && (0, p.$H)(e)) {
                    let t = C(e.id), r = n.includes(T.r.build(e.config).application.id), i = !this.streamKeyToHeartbeatState.has(t) && r;
                    this.streamKeyToHeartbeatState.has(t) && !r ? this.terminateHeartbeat({
                        streamKey: t,
                        sendTerminalHeartbeat: !0
                    }) : i && (R.log('handleQuestsFetchCurrentQuestsSuccess - initiating heartbeat for playtime task'), this.initiateHeartbeat({
                        streamKey: t,
                        applicationId: T.r.build(e.config).application.id,
                        questId: e.id
                    }));
                }
            });
        }), A(this, 'handleRunningGamesChange', e => {
            this._handlePlayOnDesktopQuestsUpdate(e);
        }), A(this, '_handlePlayOnDesktopQuestsUpdate', e => {
            let {
                removed: t,
                games: n
            } = e;
            R.log('~ handleRunningGamesChange -> Games detected:', {
                runningGames: n,
                removedGames: t
            }), n.forEach(e => {
                if (null == e.id)
                    return;
                let t = (0, p.CE)(h.Z.quests, e.id);
                if (null == t || !b(t))
                    return;
                let n = C(t.id);
                (0, p.$H)(t) && !this.streamKeyToHeartbeatState.has(n) && (R.log('handleRunningGamesChange - initiating heartbeat for playtime task'), this.initiateHeartbeat({
                    streamKey: n,
                    applicationId: T.r.build(t.config).application.id,
                    questId: t.id
                }));
            }), t.forEach(e => {
                if (null == e.id)
                    return;
                let t = (0, p.CE)(h.Z.quests, e.id);
                if (null == t || !b(t))
                    return;
                let n = C(t.id);
                (0, p.$H)(t) && this.streamKeyToHeartbeatState.has(n) && this.terminateHeartbeat({
                    streamKey: n,
                    sendTerminalHeartbeat: !0
                });
            });
        }), A(this, 'handleVoiceStateChange', () => {
            let e = u.Z.getCurrentUserActiveStream(), t = y();
            null != e && this._handleVoiceStateChange({
                streamKey: (0, l.V9)(e),
                channelId: e.channelId,
                quest: t
            });
            let {
                quest: n,
                activity: r
            } = P();
            null != r && this._handleVoiceStateChange({
                streamKey: C(r.channelId),
                channelId: r.channelId,
                quest: n
            });
        }), A(this, '_handleVoiceStateChange', e => {
            let {
                    streamKey: t,
                    channelId: n,
                    quest: r
                } = e, i = null == r || !L(n), a = L(n) && !this.streamKeyToHeartbeatState.has(t) && null != r && b(r) && !(0, p.$H)(r);
            i ? this.terminateHeartbeat({
                streamKey: t,
                sendTerminalHeartbeat: !0
            }) : a && (R.log('handleVoiceStateChange - initiating heartbeat for stream task'), this.initiateHeartbeat({
                streamKey: t,
                applicationId: T.r.build(r.config).application.id,
                questId: r.id
            }));
        }), A(this, 'handleEmbeddedActivityUpdate', e => {
            let {
                    quest: t,
                    activity: n
                } = P(e), r = C(e), i = (null == n || null == t) && this.streamKeyToHeartbeatState.has(r), a = null != n && null != t && b(t) && L(e) && !this.streamKeyToHeartbeatState.has(r);
            i ? this.terminateHeartbeat({
                streamKey: r,
                sendTerminalHeartbeat: !0
            }) : a && (R.log('handleRunningGamesChange - initiating heartbeat for activity task'), this.initiateHeartbeat({
                streamKey: r,
                applicationId: T.r.build(t.config).application.id,
                questId: t.id
            }));
        }), A(this, 'handleStreamCreate', e => {
            let {streamKey: t} = e, {
                    channelId: n,
                    ownerId: r
                } = (0, l.my)(t);
            if (r !== c.default.getId())
                return;
            let i = y();
            if (null == i) {
                this.terminateHeartbeat({
                    streamKey: t,
                    sendTerminalHeartbeat: !1
                });
                return;
            }
            L(n) && b(i) && !(0, p.$H)(i) && !this.streamKeyToHeartbeatState.has(t) && (R.log('handleStreamCreate - initiating heartbeat for stream task'), this.initiateHeartbeat({
                streamKey: t,
                applicationId: T.r.build(i.config).application.id,
                questId: i.id
            }));
        }), A(this, 'handleStreamStart', e => {
            let {
                    streamType: t,
                    guildId: n,
                    channelId: r
                } = e, i = y(), a = (0, l.V9)({
                    streamType: t,
                    guildId: n,
                    channelId: r,
                    ownerId: c.default.getId()
                });
            null == i ? this.terminateHeartbeat({
                streamKey: a,
                sendTerminalHeartbeat: !0
            }) : L(r) && b(i) && !(0, p.$H)(i) && !this.streamKeyToHeartbeatState.has(a) && (R.log('handleStreamStart - initiating heartbeat for stream task'), this.initiateHeartbeat({
                streamKey: a,
                applicationId: T.r.build(i.config).application.id,
                questId: i.id
            }));
        }), A(this, 'handleStreamClose', e => {
            let {streamKey: t} = e;
            this.terminateHeartbeat({
                streamKey: t,
                sendTerminalHeartbeat: !0
            });
        }), A(this, 'actions', {
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
            EMBEDDED_ACTIVITY_UPDATE: e => {
                let {channelId: t} = e;
                return this.handleEmbeddedActivityUpdate(t);
            },
            EMBEDDED_ACTIVITY_UPDATE_V2: e => {
                let {location: t} = e;
                return this.handleEmbeddedActivityUpdate(t.channel_id);
            }
        });
    }
}
t.ZP = new U();
