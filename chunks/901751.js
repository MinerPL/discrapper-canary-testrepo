"use strict";
n(47120);
var i, r, s = n(147913),
  o = n(317381),
  a = n(594190),
  l = n(569545),
  u = n(199902),
  _ = n(314897),
  d = n(77498),
  c = n(938475),
  E = n(70956),
  I = n(272008),
  T = n(569984),
  h = n(918701),
  S = n(242755),
  f = n(432945),
  N = n(5881),
  A = n(566078),
  m = n(46140),
  O = n(70722);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let C = 1 * E.Z.Millis.MINUTE,
  p = 1 * E.Z.Millis.SECOND,
  g = 1 * E.Z.Millis.SECOND,
  L = (0, N.T)({
    location: m.dr.QUESTS_MANAGER
  }),
  v = e => (0, l.V9)({
    streamType: O.lo.CALL,
    channelId: e,
    ownerId: "1"
  });

function D() {
  let e = u.Z.getStreamerActiveStreamMetadata();
  if ((null == e ? void 0 : e.id) == null) return null;
  let t = d.Z.getDetectableGame(e.id);
  if ((null == t ? void 0 : t.id) == null) return null;
  let n = (0, h.lQ)(T.Z.quests, t.id);
  return null != n && y(n) ? n : null
}
let M = () => {
  for (let e of a.ZP.getRunningGames().map(e => e.id)) {
    if (null == e) continue;
    let t = (0, h.CE)(T.Z.quests, e);
    if (null != t && y(t)) return t
  }
};

function P(e) {
  return c.ZP.countVoiceStatesForChannel(e) >= 2
}

function y(e) {
  return !(0, h.zi)(e) && null != e.userStatus && null != e.userStatus.enrolledAt && null == e.userStatus.completedAt
}

function U(e) {
  var t;
  let {
    questId: n,
    streamKey: i,
    applicationId: r
  } = e, {
    channelId: s
  } = (0, l.my)(i), o = P(s), _ = T.Z.quests.get(n);
  if (null == _ || !y(_)) return "STOP";
  let d = null === (t = D()) || void 0 === t ? void 0 : t.config,
    c = null != u.Z.getRTCStream(i) && null != d && A.r.build(d).application.id === r && o,
    {
      quest: E,
      activity: I
    } = b(),
    S = null == E ? void 0 : E.config,
    f = null != S && (null == E ? void 0 : E.id) === n && A.r.build(S).application.id === r && o && (null == I ? void 0 : I.channelId) === s,
    N = a.ZP.getRunningGames().map(e => e.id),
    O = (0, h.$H)({
      quest: _,
      location: m.dr.QUESTS_MANAGER
    }) && N.includes(r);
  return c || f || O ? "BEAT" : "BEAT_TERMINAL"
}

function b(e) {
  let t = {
    quest: null,
    activity: null
  };
  if (!(0, f.S)({
      location: m.dr.QUESTS_MANAGER,
      autoTrackExposure: !1
    })) return t;
  for (let i of o.ZP.getSelfEmbeddedActivities().values()) {
    var n;
    if (null != e && i.channelId !== e) continue;
    let r = null !== (n = (0, h.lQ)(T.Z.quests, i.applicationId)) && void 0 !== n ? n : null;
    if (null != r && y(r)) return {
      quest: r,
      activity: i
    };
    t = {
      quest: null,
      activity: i
    }
  }
  return t
}(r = i || (i = {})).BEAT = "BEAT", r.STOP = "STOP", r.BEAT_TERMINAL = "BEAT_TERMINAL";
class G extends s.Z {
  constructor(...e) {
    super(...e), R(this, "streamKeyToHeartbeatState", new Map), R(this, "optimisticProgressUpdateIntervalIds", new Map), R(this, "lastOptimisticallyUpdatedProgressMap", new Map), R(this, "initiateHeartbeat", e => {
      let {
        questId: t,
        streamKey: n,
        applicationId: i
      } = e;
      if (this.streamKeyToHeartbeatState.has(n)) {
        L.log("~ initiateHeartbeat -> Heartbeat already initiated:", n);
        return
      }
      let r = () => {
        let e = U({
          questId: t,
          streamKey: n,
          applicationId: i
        });
        if (L.log("~ initiateHeartbeat -> heartbeat decision: ", e), "BEAT" === e) {
          (0, I.m0)({
            questId: t,
            streamKey: n
          });
          let e = this.calculateHeartbeatDurationMs(t),
            i = window.setTimeout(r, e);
          this.streamKeyToHeartbeatState.set(n, {
            heartbeatTimeoutId: i,
            questId: t
          })
        } else this.terminateHeartbeat({
          streamKey: n,
          sendTerminalHeartbeat: "BEAT_TERMINAL" === e
        })
      };
      r()
    }), R(this, "calculateHeartbeatDurationMs", e => {
      let t = T.Z.quests.get(e);
      if (null == t || null == t.config || null == t.userStatus) return C;
      let {
        progressSeconds: n,
        targetSeconds: i
      } = (0, h.il)({
        quest: t,
        location: m.dr.QUESTS_MANAGER
      }), r = Math.max(0, (i - n) * E.Z.Millis.SECOND);
      return r <= C ? r + p : C
    }), R(this, "terminateHeartbeat", e => {
      let {
        streamKey: t,
        sendTerminalHeartbeat: n
      } = e;
      this.terminateOptimisticProgressUpdateInterval(t);
      let i = this.streamKeyToHeartbeatState.get(t);
      if (null != i) {
        L.log("~ terminateHeartbeat -> Terminating heartbeat:", {
          streamKey: t,
          sendTerminalHeartbeat: n
        });
        let {
          questId: e,
          heartbeatTimeoutId: r
        } = i;
        window.clearTimeout(r), this.streamKeyToHeartbeatState.delete(t), n && (0, I.m0)({
          questId: e,
          streamKey: t,
          terminal: !0
        })
      }
    }), R(this, "initiateOptimisticProgressUpdateInterval", e => {
      this.terminateOptimisticProgressUpdateInterval(e), this.optimisticProgressUpdateIntervalIds.set(e, window.setInterval(() => {
        var t, n;
        let i = D(),
          r = M(),
          {
            quest: s
          } = b(),
          o = null !== (n = null !== (t = null != i ? i : s) && void 0 !== t ? t : r) && void 0 !== n ? n : null;
        if (null == o) {
          this.terminateOptimisticProgressUpdateInterval(e);
          return
        }
        let a = A.r.build(o.config),
          l = o.userStatus,
          u = this.lastOptimisticallyUpdatedProgressMap.get(e);
        if ("BEAT" !== U({
            questId: o.id,
            streamKey: e,
            applicationId: a.application.id
          })) {
          this.terminateOptimisticProgressUpdateInterval(e);
          return
        }
        if (null == u) this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now());
        else if (null != l) {
          let {
            progressSeconds: t,
            targetSeconds: n,
            taskType: i
          } = (0, h.il)({
            quest: o,
            location: m.dr.QUESTS_MANAGER
          }), r = (Date.now() - u) / E.Z.Millis.SECOND, s = t + r;
          if (L.log("~ initiateOptimisticProgressUpdateInterval -> Updating optimistic progress:", {
              streamKey: e,
              progressToAdd: r,
              existingProgress: t,
              newProgress: s
            }), s <= n) {
            let t = {
              ...l,
              streamProgressSeconds: s
            };
            t.progress[i] = {
              ...t.progress[i],
              eventName: i,
              value: s
            }, (0, I.kP)(t), this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now())
          }
        }
      }, g))
    }), R(this, "terminateOptimisticProgressUpdateInterval", e => {
      L.log("~ terminateOptimisticProgressUpdateInterval -> Terminating/Resetting Interval", e), window.clearInterval(this.optimisticProgressUpdateIntervalIds.get(e)), this.optimisticProgressUpdateIntervalIds.delete(e), this.lastOptimisticallyUpdatedProgressMap.delete(e)
    }), R(this, "handleEnrollmentSuccess", e => {
      let {
        enrolledQuestUserStatus: {
          questId: t
        }
      } = e, n = u.Z.getCurrentUserActiveStream(), i = D();
      if (null != n && null != i && i.id === t && y(i)) {
        L.log("handleEnrollmentSuccess - initiating heartbeat for stream"), this.initiateHeartbeat({
          streamKey: (0, l.V9)(n),
          applicationId: A.r.build(i.config).application.id,
          questId: i.id
        });
        return
      }
      let {
        quest: r,
        activity: s
      } = b();
      if (null != s && null != r && y(r) && r.id === t) {
        L.log("handleEnrollmentSuccess - initiating heartbeat for activity"), this.initiateHeartbeat({
          streamKey: v(s.channelId),
          applicationId: A.r.build(r.config).application.id,
          questId: r.id
        });
        return
      }
      a.ZP.getRunningGames().forEach(e => {
        if (null == e.id) return;
        let t = (0, h.CE)(T.Z.quests, e.id);
        if (null != t && y(t) && (0, h.$H)({
            quest: t,
            location: m.dr.QUESTS_MANAGER
          })) {
          L.log("handleEnrollmentSuccess - initiating heartbeat for playtime task");
          let e = v(t.id);
          this.initiateHeartbeat({
            streamKey: e,
            applicationId: A.r.build(t.config).application.id,
            questId: t.id
          })
        }
      })
    }), R(this, "handleSendHeartbeatSuccess", e => {
      let {
        streamKey: t,
        userStatus: n
      } = e;
      L.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded:", t), this.terminateOptimisticProgressUpdateInterval(t), null != n.completedAt ? (this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !1
      }), this.terminateOptimisticProgressUpdateInterval(t)) : this.initiateOptimisticProgressUpdateInterval(t)
    }), R(this, "handleSendHeartbeatFailure", e => {
      let {
        streamKey: t
      } = e;
      L.log("~ handleSendHeartbeatFailure -> Heartbeat failed:", t), this.terminateOptimisticProgressUpdateInterval(t)
    }), R(this, "handleQuestsFetchCurrentQuestsSuccess", e => {
      let {
        quests: t
      } = e;
      L.log("~ handleQuestsFetchCurrentQuestsSuccess -> Quests fetched:", t);
      let n = a.ZP.getRunningGames().map(e => e.id);
      t.forEach(e => {
        if (y(e) && (0, h.$H)({
            quest: e,
            location: m.dr.QUESTS_MANAGER
          })) {
          let t = v(e.id),
            i = n.includes(A.r.build(e.config).application.id),
            r = !this.streamKeyToHeartbeatState.has(t) && i;
          this.streamKeyToHeartbeatState.has(t) && !i ? this.terminateHeartbeat({
            streamKey: t,
            sendTerminalHeartbeat: !0
          }) : r && (L.log("handleQuestsFetchCurrentQuestsSuccess - initiating heartbeat for playtime task"), this.initiateHeartbeat({
            streamKey: t,
            applicationId: A.r.build(e.config).application.id,
            questId: e.id
          }))
        }
      })
    }), R(this, "handleRunningGamesChange", e => {
      (0, S.J)({
        location: m.dr.QUESTS_MANAGER
      }) && this._handlePlayOnDesktopQuestsUpdate(e)
    }), R(this, "_handlePlayOnDesktopQuestsUpdate", e => {
      let {
        removed: t,
        games: n
      } = e;
      L.log("~ handleRunningGamesChange -> Games detected:", {
        runningGames: n,
        removedGames: t
      }), n.forEach(e => {
        if (null == e.id) return;
        let t = (0, h.CE)(T.Z.quests, e.id);
        if (null == t || !y(t)) return;
        let n = v(t.id);
        (0, h.$H)({
          quest: t,
          location: m.dr.QUESTS_MANAGER
        }) && !this.streamKeyToHeartbeatState.has(n) && (L.log("handleRunningGamesChange - initiating heartbeat for playtime task"), this.initiateHeartbeat({
          streamKey: n,
          applicationId: A.r.build(t.config).application.id,
          questId: t.id
        }))
      }), t.forEach(e => {
        if (null == e.id) return;
        let t = (0, h.CE)(T.Z.quests, e.id);
        if (null == t || !y(t)) return;
        let n = v(t.id);
        (0, h.$H)({
          quest: t,
          location: m.dr.QUESTS_MANAGER
        }) && this.streamKeyToHeartbeatState.has(n) && this.terminateHeartbeat({
          streamKey: n,
          sendTerminalHeartbeat: !0
        })
      })
    }), R(this, "handleVoiceStateChange", () => {
      let e = u.Z.getCurrentUserActiveStream(),
        t = D();
      null != e && this._handleVoiceStateChange({
        streamKey: (0, l.V9)(e),
        channelId: e.channelId,
        quest: t
      });
      let {
        quest: n,
        activity: i
      } = b();
      null != i && this._handleVoiceStateChange({
        streamKey: v(i.channelId),
        channelId: i.channelId,
        quest: n
      })
    }), R(this, "_handleVoiceStateChange", e => {
      let {
        streamKey: t,
        channelId: n,
        quest: i
      } = e, r = null == i || !P(n), s = P(n) && !this.streamKeyToHeartbeatState.has(t) && null != i && y(i) && !(0, h.$H)({
        quest: i,
        location: m.dr.QUESTS_MANAGER
      });
      r ? this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !0
      }) : s && (L.log("handleVoiceStateChange - initiating heartbeat for stream task"), this.initiateHeartbeat({
        streamKey: t,
        applicationId: A.r.build(i.config).application.id,
        questId: i.id
      }))
    }), R(this, "handleEmbeddedActivityUpdate", e => {
      let {
        quest: t,
        activity: n
      } = b(e), i = v(e), r = (null == n || null == t) && this.streamKeyToHeartbeatState.has(i), s = null != n && null != t && y(t) && P(e) && !this.streamKeyToHeartbeatState.has(i);
      r ? this.terminateHeartbeat({
        streamKey: i,
        sendTerminalHeartbeat: !0
      }) : s && (L.log("handleRunningGamesChange - initiating heartbeat for activity task"), this.initiateHeartbeat({
        streamKey: i,
        applicationId: A.r.build(t.config).application.id,
        questId: t.id
      }))
    }), R(this, "handleStreamCreate", e => {
      let {
        streamKey: t
      } = e, {
        channelId: n,
        ownerId: i
      } = (0, l.my)(t);
      if (i !== _.default.getId()) return;
      let r = D();
      if (null == r) {
        this.terminateHeartbeat({
          streamKey: t,
          sendTerminalHeartbeat: !1
        });
        return
      }
      P(n) && y(r) && !(0, h.$H)({
        quest: r,
        location: m.dr.QUESTS_MANAGER
      }) && !this.streamKeyToHeartbeatState.has(t) && (L.log("handleStreamCreate - initiating heartbeat for stream task"), this.initiateHeartbeat({
        streamKey: t,
        applicationId: A.r.build(r.config).application.id,
        questId: r.id
      }))
    }), R(this, "handleStreamStart", e => {
      let {
        streamType: t,
        guildId: n,
        channelId: i
      } = e, r = D(), s = (0, l.V9)({
        streamType: t,
        guildId: n,
        channelId: i,
        ownerId: _.default.getId()
      });
      null == r ? this.terminateHeartbeat({
        streamKey: s,
        sendTerminalHeartbeat: !0
      }) : P(i) && y(r) && !(0, h.$H)({
        quest: r,
        location: m.dr.QUESTS_MANAGER
      }) && !this.streamKeyToHeartbeatState.has(s) && (L.log("handleStreamStart - initiating heartbeat for stream task"), this.initiateHeartbeat({
        streamKey: s,
        applicationId: A.r.build(r.config).application.id,
        questId: r.id
      }))
    }), R(this, "handleStreamClose", e => {
      let {
        streamKey: t
      } = e;
      this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !0
      })
    }), R(this, "actions", {
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
        let {
          channelId: t
        } = e;
        return this.handleEmbeddedActivityUpdate(t)
      },
      EMBEDDED_ACTIVITY_UPDATE_V2: e => {
        let {
          location: t
        } = e;
        return this.handleEmbeddedActivityUpdate(t.channel_id)
      }
    })
  }
}
t.ZP = new G