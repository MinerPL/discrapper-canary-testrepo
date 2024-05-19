"use strict";
n.r(t), n.d(t, {
  generatePsuedoStreamKey: function() {
    return y
  },
  getPlaytimeQuestForActiveGames: function() {
    return U
  }
}), n("47120");
var i = n("147913"),
  r = n("317381"),
  a = n("594190"),
  s = n("569545"),
  o = n("199902"),
  l = n("314897"),
  u = n("77498"),
  d = n("938475"),
  _ = n("70956"),
  c = n("272008"),
  E = n("569984"),
  I = n("918701"),
  T = n("242755"),
  f = n("432945"),
  S = n("977156"),
  h = n("5881"),
  A = n("46140"),
  m = n("70722");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = 12 * _.default.Millis.HOUR,
  O = 1 * _.default.Millis.MINUTE,
  C = 1 * _.default.Millis.SECOND,
  R = 5 * _.default.Millis.SECOND,
  g = 1 * _.default.Millis.SECOND,
  L = _.default.Millis.DAY,
  v = 30 * _.default.Millis.MINUTE,
  D = 5 * _.default.Millis.MINUTE,
  M = (0, h.getQuestLogger)({
    location: A.QuestsExperimentLocations.QUESTS_MANAGER
  }),
  y = e => (0, s.encodeStreamKey)({
    streamType: m.StreamTypes.CALL,
    channelId: e,
    ownerId: "1"
  });

function P() {
  var e, t;
  let n = o.default.getStreamerActiveStreamMetadata();
  if ((null == n ? void 0 : n.id) == null) return null;
  let i = u.default.getGameById(n.id);
  if ((null == i ? void 0 : i.id) == null) return null;
  let r = (0, I.getQuestByApplicationId)(E.default.quests, i.id);
  return (null == r ? void 0 : null === (e = r.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null || (null == r ? void 0 : null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null ? null : r
}
let U = () => {
  for (let n of a.default.getRunningGames().map(e => e.id)) {
    var e, t;
    if (null == n) continue;
    let i = (0, I.getPlaytimeQuestByApplicationId)(E.default.quests, n);
    if (null != i && (null === (e = i.userStatus) || void 0 === e ? void 0 : e.enrolledAt) != null && (null === (t = i.userStatus) || void 0 === t ? void 0 : t.completedAt) == null) return i
  }
};

function b(e) {
  return null != e && (0, I.hasPlaytimeTaskVariant)({
    quest: e
  }) && (0, T.isEligibleForQuestPlaytime)({
    location: A.QuestsExperimentLocations.QUESTS_MANAGER
  })
}

function G(e) {
  return d.default.countVoiceStatesForChannel(e) >= 2
}

function w(e) {
  var t, n;
  let {
    questId: i,
    streamKey: r,
    applicationId: a
  } = e, {
    channelId: l
  } = (0, s.decodeStreamKey)(r), d = G(l), _ = E.default.quests.get(i);
  if ((null == _ ? void 0 : null === (t = _.userStatus) || void 0 === t ? void 0 : t.enrolledAt) == null) return !1;
  let c = null != o.default.getRTCStream(r) && (null === (n = P()) || void 0 === n ? void 0 : n.config.applicationId) === a && d && null != _ && !(0, I.isQuestExpired)(_),
    {
      quest: T,
      activity: f
    } = k(),
    S = (null == T ? void 0 : T.id) === i && (null == T ? void 0 : T.config.applicationId) === a && d && (null == f ? void 0 : f.channelId) === l && !(0, I.isQuestExpired)(T),
    h = u.default.getGameById(a),
    A = null != _ && b(_) && h.id === a;
  return c || S || A
}

function k(e) {
  let t = {
    quest: null,
    activity: null
  };
  if (!(0, f.getIsEligibleForActivityQuest)({
      location: A.QuestsExperimentLocations.QUESTS_MANAGER,
      autoTrackExposure: !1
    })) return t;
  for (let s of r.default.getSelfEmbeddedActivities().values()) {
    var n, i, a;
    if (null != e && s.channelId !== e) continue;
    let r = null !== (a = (0, I.getQuestByApplicationId)(E.default.quests, s.applicationId)) && void 0 !== a ? a : null;
    if (null != r && (null == r ? void 0 : null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && (null == r ? void 0 : null === (i = r.userStatus) || void 0 === i ? void 0 : i.completedAt) == null) return {
      quest: r,
      activity: s
    };
    t = {
      quest: null,
      activity: s
    }
  }
  return t
}
class B extends i.default {
  maybeFetchCurrentQuests() {
    (0, S.getIsEligibleForQuests)({
      location: A.QuestsExperimentLocations.QUESTS_MANAGER
    }) && !E.default.isFetchingCurrentQuests && (0, c.fetchCurrentQuests)()
  }
  constructor(...e) {
    super(...e), N(this, "instantiatedAt", Date.now()), N(this, "streamKeyToHeartbeatState", new Map), N(this, "optimisticProgressUpdateIntervalIds", new Map), N(this, "lastOptimisticallyUpdatedProgressMap", new Map), N(this, "questsInitialFetchTimerId", null), N(this, "questsRecurringFetchTimerId", null), N(this, "questsLastFetchAttemptedAt", 0), N(this, "lastFetchedQuestForLocaleChangeAt", 0), N(this, "initiateHeartbeat", e => {
      let {
        questId: t,
        streamKey: n,
        applicationId: i
      } = e;
      if (this.streamKeyToHeartbeatState.has(n)) {
        M.log("~ initiateHeartbeat -> Heartbeat already initiated:", n);
        return
      }
      let r = () => {
        if (w({
            questId: t,
            streamKey: n,
            applicationId: i
          })) {
          M.log("~ initiateHeartbeat -> Initiating heartbeat for Quest:", t), (0, c.sendHeartbeat)({
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
          sendTerminalHeartbeat: !0
        })
      };
      r()
    }), N(this, "calculateHeartbeatDurationMs", e => {
      let t = E.default.quests.get(e);
      if (null == t || null == t.config || null == t.userStatus) return O;
      let {
        streamProgressSeconds: n
      } = t.userStatus, i = (60 * t.config.streamDurationRequirementMinutes - n) * _.default.Millis.SECOND;
      return i <= O ? i + C : O
    }), N(this, "terminateHeartbeat", e => {
      let {
        streamKey: t,
        sendTerminalHeartbeat: n
      } = e;
      M.log("~ terminateHeartbeat -> Terminating heartbeat:", {
        streamKey: t,
        sendTerminalHeartbeat: n
      }), this.terminateOptimisticProgressUpdateInterval(t);
      let i = this.streamKeyToHeartbeatState.get(t);
      if (null != i) {
        let {
          questId: e,
          heartbeatTimeoutId: r
        } = i;
        window.clearTimeout(r), this.streamKeyToHeartbeatState.delete(t), n && (0, c.sendHeartbeat)({
          questId: e,
          streamKey: t,
          terminal: !0
        })
      }
    }), N(this, "initiateOptimisticProgressUpdateInterval", e => {
      this.terminateOptimisticProgressUpdateInterval(e), this.optimisticProgressUpdateIntervalIds.set(e, window.setInterval(() => {
        var t, n;
        let i = P(),
          r = U(),
          {
            quest: a
          } = k(),
          s = null !== (n = null !== (t = null != i ? i : a) && void 0 !== t ? t : r) && void 0 !== n ? n : null;
        if (null == s) {
          this.terminateOptimisticProgressUpdateInterval(e);
          return
        }
        let o = s.userStatus,
          l = s.config.streamDurationRequirementMinutes * _.default.Seconds.MINUTE,
          u = this.lastOptimisticallyUpdatedProgressMap.get(e);
        if (!w({
            questId: s.id,
            streamKey: e,
            applicationId: s.config.applicationId
          })) {
          this.terminateOptimisticProgressUpdateInterval(e);
          return
        }
        if (null == u) this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now());
        else if (null != o) {
          let t = (Date.now() - u) / _.default.Millis.SECOND,
            n = o.streamProgressSeconds,
            i = n + t;
          if (M.log("~ initiateOptimisticProgressUpdateInterval -> Updating optimistic progress:", {
              streamKey: e,
              progressToAdd: t,
              existingProgress: n,
              newProgress: i
            }), i <= l) {
            let t = {
              ...o,
              streamProgressSeconds: i
            };
            (0, c.optimisticallyUpdateQuestProgress)(t), this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now())
          }
        }
      }, g))
    }), N(this, "terminateOptimisticProgressUpdateInterval", e => {
      M.log("~ terminateOptimisticProgressUpdateInterval -> Terminating/Resetting Interval", e), window.clearInterval(this.optimisticProgressUpdateIntervalIds.get(e)), this.optimisticProgressUpdateIntervalIds.delete(e), this.lastOptimisticallyUpdatedProgressMap.delete(e)
    }), N(this, "handleEnrollmentSuccess", e => {
      let {
        enrolledQuestUserStatus: {
          questId: t
        }
      } = e, n = o.default.getCurrentUserActiveStream(), i = P();
      if (null != n && (null == i ? void 0 : i.id) === t) {
        this.initiateHeartbeat({
          streamKey: (0, s.encodeStreamKey)(n),
          applicationId: i.config.applicationId,
          questId: i.id
        });
        return
      }
      let {
        quest: r,
        activity: l
      } = k();
      if (null != l && null != r && r.id === t) {
        this.initiateHeartbeat({
          streamKey: y(l.channelId),
          applicationId: r.config.applicationId,
          questId: r.id
        });
        return
      }
      a.default.getRunningGames().forEach(e => {
        if (null == e.id) return;
        let t = (0, I.getPlaytimeQuestByApplicationId)(E.default.quests, e.id);
        if (null != t && b(t)) {
          M.log("~ handleEnrollmentSuccess -> Quest accepted, initializing...");
          let e = y(t.id);
          this.initiateHeartbeat({
            streamKey: e,
            applicationId: t.config.applicationId,
            questId: t.id
          })
        }
      })
    }), N(this, "handleLogout", () => {
      window.clearTimeout(this.questsInitialFetchTimerId), window.clearTimeout(this.questsRecurringFetchTimerId), this.questsLastFetchAttemptedAt = 0, this.lastFetchedQuestForLocaleChangeAt = 0
    }), N(this, "handleQuestsFetchCurrentQuestsBegin", () => {
      this.questsLastFetchAttemptedAt = Date.now()
    }), N(this, "handlePostConnectionOpen", () => {
      window.clearTimeout(this.questsInitialFetchTimerId), window.clearTimeout(this.questsRecurringFetchTimerId), this.questsRecurringFetchTimerId = window.setInterval(() => {
        Date.now() - this.questsLastFetchAttemptedAt > L && (this.questsLastFetchAttemptedAt = Date.now(), this.maybeFetchCurrentQuests())
      }, v), this.questsInitialFetchTimerId = window.setTimeout(() => {
        0 === E.default.lastFetchedCurrentQuests && this.maybeFetchCurrentQuests()
      }, Math.floor(Math.random() * R))
    }), N(this, "handleSendHeartbeatSuccess", e => {
      let {
        streamKey: t,
        userStatus: n
      } = e;
      M.log("~ handleSendHeartbeatSuccess -> Heartbeat succeeded:", t), this.terminateOptimisticProgressUpdateInterval(t), null != n.completedAt ? (this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !1
      }), this.terminateOptimisticProgressUpdateInterval(t)) : this.initiateOptimisticProgressUpdateInterval(t)
    }), N(this, "handleSendHeartbeatFailure", e => {
      let {
        streamKey: t
      } = e;
      M.log("~ handleSendHeartbeatFailure -> Heartbeat failed:", t), this.terminateOptimisticProgressUpdateInterval(t)
    }), N(this, "handleQuestsFetchCurrentQuestsSuccess", e => {
      let {
        quests: t
      } = e;
      M.log("~ handleQuestsFetchCurrentQuestsSuccess -> Quests fetched:", t);
      let n = a.default.getRunningGames().map(e => e.id);
      t.forEach(e => {
        if (b(e)) {
          let t = y(e.id),
            i = n.includes(e.config.applicationId),
            r = !this.streamKeyToHeartbeatState.has(t) && i;
          this.streamKeyToHeartbeatState.has(t) && !i ? this.terminateHeartbeat({
            streamKey: t,
            sendTerminalHeartbeat: !0
          }) : r && this.initiateHeartbeat({
            streamKey: t,
            applicationId: e.config.applicationId,
            questId: e.id
          })
        }
      })
    }), N(this, "handleRunningGamesChange", e => {
      (0, T.isEligibleForQuestPlaytime)({
        location: A.QuestsExperimentLocations.QUESTS_MANAGER
      }) && this._handlePlaytimeQuestsUpdate(e), !(this.instantiatedAt + p > Date.now() || E.default.lastFetchedCurrentQuests + p > Date.now()) && this.maybeFetchCurrentQuests()
    }), N(this, "_handlePlaytimeQuestsUpdate", e => {
      let {
        removed: t,
        games: n
      } = e;
      M.log("~ handleRunningGamesChange -> Games detected:", {
        runningGames: n,
        removedGames: t
      }), n.forEach(e => {
        if (null == e.id) return;
        let t = (0, I.getPlaytimeQuestByApplicationId)(E.default.quests, e.id);
        if (null == t) return;
        let n = y(t.id);
        b(t) && !this.streamKeyToHeartbeatState.has(n) && this.initiateHeartbeat({
          streamKey: n,
          applicationId: t.config.applicationId,
          questId: t.id
        })
      }), t.forEach(e => {
        if (null == e.id) return;
        let t = (0, I.getPlaytimeQuestByApplicationId)(E.default.quests, e.id);
        if (null == t) return;
        let n = y(t.id);
        b(t) && this.streamKeyToHeartbeatState.has(n) && this.terminateHeartbeat({
          streamKey: n,
          sendTerminalHeartbeat: !0
        })
      })
    }), N(this, "handleVoiceStateChange", () => {
      let e = o.default.getCurrentUserActiveStream(),
        t = P();
      null != e && this._handleVoiceStateChange({
        streamKey: (0, s.encodeStreamKey)(e),
        channelId: e.channelId,
        quest: t
      });
      let {
        quest: n,
        activity: i
      } = k();
      null != i && this._handleVoiceStateChange({
        streamKey: y(i.channelId),
        channelId: i.channelId,
        quest: n
      })
    }), N(this, "_handleVoiceStateChange", e => {
      let {
        streamKey: t,
        channelId: n,
        quest: i
      } = e, r = null == i || !G(n), a = G(n) && !this.streamKeyToHeartbeatState.has(t) && null != i && !b(i);
      r ? this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !0
      }) : a && this.initiateHeartbeat({
        streamKey: t,
        applicationId: i.config.applicationId,
        questId: i.id
      })
    }), N(this, "handleEmbeddedActivityUpdate", e => {
      let {
        quest: t,
        activity: n
      } = k(e), i = y(e), r = (null == n || null == t) && this.streamKeyToHeartbeatState.has(i), a = null != n && null != t && G(e) && !this.streamKeyToHeartbeatState.has(i);
      r ? this.terminateHeartbeat({
        streamKey: i,
        sendTerminalHeartbeat: !0
      }) : a && this.initiateHeartbeat({
        streamKey: i,
        applicationId: t.config.applicationId,
        questId: t.id
      })
    }), N(this, "handleStreamCreate", e => {
      let {
        streamKey: t
      } = e, {
        channelId: n,
        ownerId: i
      } = (0, s.decodeStreamKey)(t);
      if (i !== l.default.getId()) return;
      let r = P();
      if (null == r) {
        this.terminateHeartbeat({
          streamKey: t,
          sendTerminalHeartbeat: !1
        });
        return
      }
      G(n) && !this.streamKeyToHeartbeatState.has(t) && !b(r) && this.initiateHeartbeat({
        streamKey: t,
        applicationId: r.config.applicationId,
        questId: r.id
      })
    }), N(this, "handleStreamStart", e => {
      let {
        streamType: t,
        guildId: n,
        channelId: i
      } = e, r = P(), a = (0, s.encodeStreamKey)({
        streamType: t,
        guildId: n,
        channelId: i,
        ownerId: l.default.getId()
      });
      null == r ? this.terminateHeartbeat({
        streamKey: a,
        sendTerminalHeartbeat: !0
      }) : G(i) && !this.streamKeyToHeartbeatState.has(a) && !b(r) && this.initiateHeartbeat({
        streamKey: a,
        applicationId: r.config.applicationId,
        questId: r.id
      })
    }), N(this, "handleStreamClose", e => {
      let {
        streamKey: t
      } = e;
      this.terminateHeartbeat({
        streamKey: t,
        sendTerminalHeartbeat: !0
      })
    }), N(this, "handleUserSettingsProtoUpdate", e => {
      let {
        partial: t,
        settings: n,
        wasSaved: i
      } = e;
      if ("localization" in n.proto && !!t && !i) !(Date.now() - this.lastFetchedQuestForLocaleChangeAt <= D) && (this.lastFetchedQuestForLocaleChangeAt = Date.now(), this.maybeFetchCurrentQuests())
    }), N(this, "actions", {
      QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
      QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: this.handleQuestsFetchCurrentQuestsSuccess,
      QUESTS_ENROLL_SUCCESS: this.handleEnrollmentSuccess,
      QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
      QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      STREAM_START: this.handleStreamStart,
      STREAM_CREATE: this.handleStreamCreate,
      STREAM_CLOSE: this.handleStreamClose,
      PASSIVE_UPDATE_V1: this.handleVoiceStateChange,
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
      },
      USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
      LOGOUT: this.handleLogout
    })
  }
}
t.default = new B