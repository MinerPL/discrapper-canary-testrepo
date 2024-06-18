"use strict";
n(47120);
var i, r, s, o, a = n(442837),
  l = n(570140);
let u = new Set,
  _ = {};

function d(e) {
  let {
    applicationId: t
  } = e;
  u.add(t)
}

function c(e) {
  let {
    applicationId: t
  } = e;
  u.delete(t)
}
class E extends(i = a.ZP.Store) {
  get launchingGames() {
    return u
  }
  get launchableGames() {
    return _
  }
  isLaunchable(e) {
    return null != _[e] ? _[e] : (_[e] = !1, l.Z.dispatch({
      type: "CHECK_LAUNCHABLE_GAME",
      gameId: e
    }), !1)
  }
}
o = "LaunchableGameStore", (s = "displayName") in(r = E) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new E(l.Z, {
  GAME_LAUNCHABLE_UPDATE: function(e) {
    let {
      gameId: t,
      isLaunchable: n
    } = e;
    _[t] = n
  },
  GAME_CLOUD_SYNC_START: d,
  GAME_LAUNCH_START: d,
  GAME_LAUNCH_SUCCESS: c,
  GAME_LAUNCH_FAIL: c,
  GAME_CLOUD_SYNC_CONFLICT: c,
  GAME_CLOUD_SYNC_ERROR: c,
  GAME_CLOUD_SYNC_COMPLETE: c
})