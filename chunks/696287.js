"use strict";
n(47120);
var i = n(846519),
  r = n(147913),
  s = n(77498),
  o = n(19780),
  a = n(626135),
  l = n(70956),
  u = n(581567),
  _ = n(594190),
  d = n(981631);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = 5 * l.Z.Millis.MINUTE;
class I extends r.Z {
  _terminate() {
    this.stopHeartbeat()
  }
  maybeStartHeartbeat() {
    !this.heartbeatInterval.isStarted() && (this.logRunningGameHeartbeats(), this.heartbeatInterval.start(E, this.logRunningGameHeartbeats))
  }
  stopHeartbeat() {
    this.heartbeatInterval.stop(), this.runningGameKeys.clear()
  }
  handlePostConnectionOpen() {
    _.ZP.getRunningGames().length > 0 && this.maybeStartHeartbeat()
  }
  constructor(...e) {
    super(...e), c(this, "heartbeatInterval", new i.Xp), c(this, "runningGameKeys", new Set), c(this, "actions", {
      RUNNING_GAMES_CHANGE: e => this.handleRunningGamesChanged(e),
      LOGOUT: () => this.stopHeartbeat(),
      CONNECTION_CLOSED: () => this.stopHeartbeat(),
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    }), c(this, "handleRunningGamesChanged", e => {
      let {
        games: t
      } = e;
      if (0 === t.length) {
        this.stopHeartbeat();
        return
      }
      this.maybeStartHeartbeat()
    }), c(this, "logRunningGameHeartbeats", () => {
      let e = _.ZP.getRunningGames(),
        t = {
          rtc_connection_id: o.Z.getRTCConnectionId(),
          media_session_id: o.Z.getMediaSessionId()
        },
        n = new Set;
      e.forEach(e => {
        var i, r;
        let o = (0, _.rH)(e),
          l = !this.runningGameKeys.has(o),
          c = null !== (r = e.id) && void 0 !== r ? r : null === (i = s.Z.getGameByName(e.name)) || void 0 === i ? void 0 : i.id;
        a.default.track(d.rMx.RUNNING_GAME_HEARTBEAT, {
          game_id: c,
          game_name: e.name,
          game_distributor: e.distributor,
          game_executable: (0, u.N6)(e.exePath),
          game_detection_enabled: (0, _.ik)(e),
          initial_heartbeat: l,
          ...t
        }), n.add((0, _.rH)(e))
      }), this.runningGameKeys = n
    })
  }
}
t.Z = new I