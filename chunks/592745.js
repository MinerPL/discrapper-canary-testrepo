n(47120);
var r, i, a, s, o = n(442837),
  l = n(570140);
let u = new Set(),
  c = {};

function d(e) {
  let {
applicationId: t
  } = e;
  u.add(t);
}

function _(e) {
  let {
applicationId: t
  } = e;
  u.delete(t);
}
class E extends(r = o.ZP.Store) {
  get launchingGames() {
return u;
  }
  get launchableGames() {
return c;
  }
  isLaunchable(e) {
return null != c[e] ? c[e] : (c[e] = !1, l.Z.dispatch({
  type: 'CHECK_LAUNCHABLE_GAME',
  gameId: e
}), !1);
  }
}
s = 'LaunchableGameStore', (a = 'displayName') in(i = E) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new E(l.Z, {
  GAME_LAUNCHABLE_UPDATE: function(e) {
let {
  gameId: t,
  isLaunchable: n
} = e;
c[t] = n;
  },
  GAME_CLOUD_SYNC_START: d,
  GAME_LAUNCH_START: d,
  GAME_LAUNCH_SUCCESS: _,
  GAME_LAUNCH_FAIL: _,
  GAME_CLOUD_SYNC_CONFLICT: _,
  GAME_CLOUD_SYNC_ERROR: _,
  GAME_CLOUD_SYNC_COMPLETE: _
});