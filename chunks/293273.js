"use strict";
n.r(t), n("653041"), n("47120");
var i, r, a, s, o = n("348327"),
  l = n.n(o),
  u = n("392711"),
  d = n.n(u),
  _ = n("442837"),
  c = n("570140"),
  E = n("317381"),
  I = n("812206"),
  T = n("676035"),
  f = n("594190"),
  S = n("106301"),
  h = n("406066"),
  A = n("768419"),
  m = n("695346"),
  N = n("581883"),
  p = n("199902"),
  O = n("272053"),
  C = n("77498"),
  R = n("981631"),
  g = n("689938");
let L = [],
  v = {};

function D() {
  let e = [],
    t = m.CustomStatusSetting.getSetting();
  null != t && ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, T.getActivityFromCustomStatus)(t));
  let n = h.default.getActivities();
  e.push(...n);
  let i = O.default.getStream();
  null != i && e.push({
    type: R.ActivityTypes.STREAMING,
    ...i
  });
  let r = new Set,
    a = new Set;
  d().forEach(v, t => {
    null != t.application_id && (r.add(t.name), a.add(t.application_id), e.push(t))
  }), E.default.getSelfEmbeddedActivities().forEach(t => {
    var n;
    let {
      applicationId: i
    } = t;
    if (a.has(i)) return;
    let r = null === (n = I.default.getApplication(i)) || void 0 === n ? void 0 : n.name;
    e.push({
      type: R.ActivityTypes.PLAYING,
      name: null != r ? r : g.default.Messages.EMBEDDED_ACTIVITIES_LAUNCHING_ACTIVITY,
      application_id: i,
      flags: R.ActivityFlags.EMBEDDED
    })
  });
  let s = f.default.getVisibleGame(),
    o = null != s && null != s.name && r.has(s.name),
    u = null != s && s.isLauncher,
    _ = p.default.getCurrentUserActiveStream();
  if (null != s && null != s.name && !(o || u && !(null != _))) {
    var c, N;
    e.push({
      type: R.ActivityTypes.PLAYING,
      name: s.name,
      application_id: null !== (N = s.id) && void 0 !== N ? N : null === (c = C.default.getGameByName(s.name)) || void 0 === c ? void 0 : c.id,
      timestamps: {
        start: s.start
      }
    })
  }
  let D = A.default.getActivity();
  null != D && e.push({
    type: R.ActivityTypes.LISTENING,
    ...D
  });
  let M = S.default.getCurrentHangStatus();
  if (null != M) {
    let t = S.default.getCustomHangStatus();
    e.push({
      type: R.ActivityTypes.HANG_STATUS,
      name: "Hang Status",
      state: M,
      details: null == t ? void 0 : t.status,
      emoji: null == t ? void 0 : t.emoji
    })
  }!l()(L, e) && (L = e)
}
class M extends(i = _.default.Store) {
  initialize() {
    this.waitFor(f.default, E.default, O.default, p.default, A.default, N.default, S.default, C.default), this.syncWith([h.default, S.default], () => D())
  }
  getActivities() {
    return L
  }
  getPrimaryActivity() {
    return L[0]
  }
  getApplicationActivity(e) {
    return this.findActivity(t => t.application_id === e)
  }
  getCustomStatusActivity() {
    return this.findActivity(e => e.type === R.ActivityTypes.CUSTOM_STATUS)
  }
  findActivity(e) {
    return L.find(e)
  }
  getApplicationActivities() {
    return v
  }
}
s = "LocalActivityStore", (a = "displayName") in(r = M) ? Object.defineProperty(r, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[a] = s, t.default = new M(c.default, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      localActivities: t
    } = e;
    v = {
      ...t
    }, D()
  },
  START_SESSION: function() {
    v = {}, D()
  },
  LOCAL_ACTIVITY_UPDATE: function(e) {
    let {
      socketId: t,
      activity: n
    } = e;
    if (l()(v[t], n)) return !1;
    null != n ? v[t] = n : delete v[t], D()
  },
  RPC_APP_DISCONNECTED: function(e) {
    let {
      socketId: t
    } = e;
    delete v[t], D()
  },
  RUNNING_GAMES_CHANGE: D,
  LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS: D,
  SPOTIFY_PLAYER_STATE: D,
  SPOTIFY_PLAYER_PLAY: D,
  STREAMING_UPDATE: D,
  USER_CONNECTIONS_UPDATE: D,
  STREAM_START: D,
  STREAM_STOP: D,
  USER_SETTINGS_PROTO_UPDATE: D,
  EMBEDDED_ACTIVITY_OPEN: D,
  EMBEDDED_ACTIVITY_CLOSE: D,
  UPDATE_HANG_STATUS: D
})