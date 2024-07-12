n(47120);
var r = n(846519),
  i = n(147913),
  a = n(77498),
  o = n(19780),
  s = n(626135),
  l = n(70956),
  u = n(581567),
  c = n(594190),
  d = n(981631);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let E = 5 * l.Z.Millis.MINUTE;
class f extends i.Z {
  _terminate() {
this.stopHeartbeat();
  }
  maybeStartHeartbeat() {
!this.heartbeatInterval.isStarted() && (this.logRunningGameHeartbeats(), this.heartbeatInterval.start(E, this.logRunningGameHeartbeats));
  }
  stopHeartbeat() {
this.heartbeatInterval.stop(), this.runningGameKeys.clear();
  }
  handlePostConnectionOpen() {
c.ZP.getRunningGames().length > 0 && this.maybeStartHeartbeat();
  }
  constructor(...e) {
super(...e), _(this, 'heartbeatInterval', new r.Xp()), _(this, 'runningGameKeys', new Set()), _(this, 'actions', {
  RUNNING_GAMES_CHANGE: e => this.handleRunningGamesChanged(e),
  LOGOUT: () => this.stopHeartbeat(),
  CONNECTION_CLOSED: () => this.stopHeartbeat(),
  POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
}), _(this, 'handleRunningGamesChanged', e => {
  let {
    games: t
  } = e;
  if (0 === t.length) {
    this.stopHeartbeat();
    return;
  }
  this.maybeStartHeartbeat();
}), _(this, 'logRunningGameHeartbeats', () => {
  let e = c.ZP.getRunningGames(),
    t = {
      rtc_connection_id: o.Z.getRTCConnectionId(),
      media_session_id: o.Z.getMediaSessionId()
    },
    n = new Set();
  e.forEach(e => {
    var r, i;
    let o = (0, c.rH)(e),
      l = !this.runningGameKeys.has(o),
      _ = null !== (i = e.id) && void 0 !== i ? i : null === (r = a.Z.getGameByName(e.name)) || void 0 === r ? void 0 : r.id;
    s.default.track(d.rMx.RUNNING_GAME_HEARTBEAT, {
      game_id: _,
      game_name: e.name,
      game_distributor: e.distributor,
      game_executable: (0, u.N6)(e.exePath),
      game_detection_enabled: (0, c.ik)(e),
      initial_heartbeat: l,
      ...t
    }), n.add((0, c.rH)(e));
  }), this.runningGameKeys = n;
});
  }
}
t.Z = new f();