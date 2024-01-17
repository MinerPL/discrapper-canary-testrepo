"use strict";
E.r(_), E.d(_, {
  default: function() {
    return N
  }
}), E("222007");
var t = E("689988"),
  o = E("374014"),
  n = E("373469"),
  r = E("271938"),
  i = E("568307"),
  a = E("448881"),
  I = E("374023"),
  s = E("2973"),
  T = E("227231");
class S extends t.default {
  maybeFetchCurrentQuests() {
    I.default.getCurrentConfig({
      location: "maybeFetchCurrentQuests"
    }, {
      autoTrackExposure: !1
    }).enabled && !s.default.isFetchingCurrentQuests && (0, a.fetchCurrentQuests)()
  }
  constructor(...e) {
    super(...e), this.instantiatedAt = Date.now(), this.sendHeartbeatIntervalIds = new Map, this.initiateHeartbeat = e => {
      let {
        questId: _,
        streamKey: E,
        applicationId: t
      } = e;

      function o() {
        null != n.default.getRTCStream(E) && 0 !== n.default.getViewerIds(E).length && (0, a.sendHeartbeat)({
          questId: _,
          streamKey: E,
          applicationId: t
        })
      }
      window.clearInterval(this.sendHeartbeatIntervalIds.get(E)), o(), this.sendHeartbeatIntervalIds.set(E, window.setInterval(o, 6e4))
    }, this.terminateHeartbeat = e => {
      window.clearInterval(this.sendHeartbeatIntervalIds.get(e)), this.sendHeartbeatIntervalIds.delete(e)
    }, this.handleEnrollmentSuccess = e => {
      let {
        enrolledQuestUserStatus: {
          questId: _
        }
      } = e, E = n.default.getStreamerActiveStreamMetadata();
      if (null == E || null == E.pid) return;
      let t = i.default.getGameForPID(E.pid);
      if (null == t || null == t.id) return;
      let r = (0, T.getQuestByApplicationId)(t.id);
      if (null == r || r.id !== _) return;
      let a = n.default.getCurrentUserActiveStream();
      null != a && this.initiateHeartbeat({
        streamKey: (0, o.encodeStreamKey)(a),
        applicationId: r.config.applicationId,
        questId: r.id
      })
    }, this.handlePostConnectionOpen = () => {
      window.setTimeout(this.maybeFetchCurrentQuests, Math.floor(5e3 * Math.random()))
    }, this.handleSendHeartbeatSuccess = e => {
      let {
        streamKey: _,
        userStatus: E
      } = e;
      null != E.completedAt && this.terminateHeartbeat(_)
    }, this.handleRunningGamesChange = () => {
      !(this.instantiatedAt + 432e5 > Date.now() || s.default.lastFetchedCurrentQuests + 432e5 > Date.now()) && this.maybeFetchCurrentQuests()
    }, this.handleStreamStart = e => {
      var _, E;
      let {
        streamType: t,
        guildId: n,
        channelId: a,
        pid: I
      } = e, s = null != I ? i.default.getGameForPID(I) : null;
      if (null == s) return;
      let S = null != s.id ? (0, T.getQuestByApplicationId)(s.id) : null;
      if ((null == S ? void 0 : null === (_ = S.userStatus) || void 0 === _ ? void 0 : _.enrolledAt) != null && (null == S ? void 0 : null === (E = S.userStatus) || void 0 === E ? void 0 : E.completedAt) == null) !(0, T.isQuestExpired)(S) && this.initiateHeartbeat({
        streamKey: (0, o.encodeStreamKey)({
          streamType: t,
          guildId: n,
          channelId: a,
          ownerId: r.default.getId()
        }),
        applicationId: S.config.applicationId,
        questId: S.id
      })
    }, this.handleStreamClose = e => {
      let {
        streamKey: _
      } = e;
      this.terminateHeartbeat(_)
    }, this.actions = {
      QUESTS_ENROLL_SUCCESS: this.handleEnrollmentSuccess,
      QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      STREAM_START: this.handleStreamStart,
      STREAM_CLOSE: this.handleStreamClose
    }
  }
}
var N = new S