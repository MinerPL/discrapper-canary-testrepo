"use strict";
n(653041), n(47120);
var i, r, s, o, a = n(348327),
  l = n.n(a),
  u = n(392711),
  _ = n.n(u),
  d = n(442837),
  c = n(570140),
  E = n(317381),
  I = n(812206),
  T = n(676035),
  h = n(594190),
  S = n(106301),
  f = n(406066),
  N = n(768419),
  A = n(695346),
  m = n(581883),
  O = n(199902),
  R = n(272053),
  C = n(77498),
  p = n(981631),
  g = n(689938);
let L = [],
  v = {};

function D() {
  let e = [],
    t = A.Ok.getSetting();
  null != t && ("0" === t.expiresAtMs || new Date(Number(t.expiresAtMs)).getTime() - new Date().getTime() > 0) && e.push((0, T.I)(t));
  let n = f.Z.getActivities();
  e.push(...n);
  let i = R.Z.getStream();
  null != i && e.push({
    type: p.IIU.STREAMING,
    ...i
  });
  let r = new Set,
    s = new Set;
  _().forEach(v, t => {
    null != t.application_id && (r.add(t.name), s.add(t.application_id), e.push(t))
  }), E.ZP.getSelfEmbeddedActivities().forEach(t => {
    var n;
    let {
      applicationId: i
    } = t;
    if (s.has(i)) return;
    let r = null === (n = I.Z.getApplication(i)) || void 0 === n ? void 0 : n.name;
    e.push({
      type: p.IIU.PLAYING,
      name: null != r ? r : g.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCHING_ACTIVITY,
      application_id: i,
      flags: p.xjy.EMBEDDED
    })
  });
  let o = h.ZP.getVisibleGame(),
    a = null != o && null != o.name && r.has(o.name),
    u = null != o && o.isLauncher,
    d = O.Z.getCurrentUserActiveStream();
  if (null != o && null != o.name && !(a || u && !(null != d))) {
    var c, m;
    e.push({
      type: p.IIU.PLAYING,
      name: o.name,
      application_id: null !== (m = o.id) && void 0 !== m ? m : null === (c = C.Z.getGameByName(o.name)) || void 0 === c ? void 0 : c.id,
      timestamps: {
        start: o.start
      }
    })
  }
  let D = N.Z.getActivity();
  null != D && e.push({
    type: p.IIU.LISTENING,
    ...D
  });
  let M = S.Z.getCurrentHangStatus();
  if (null != M) {
    let t = S.Z.getCustomHangStatus();
    e.push({
      type: p.IIU.HANG_STATUS,
      name: "Hang Status",
      state: M,
      details: null == t ? void 0 : t.status,
      emoji: null == t ? void 0 : t.emoji
    })
  }!l()(L, e) && (L = e)
}
class M extends(i = d.ZP.Store) {
  initialize() {
    this.waitFor(h.ZP, E.ZP, R.Z, O.Z, N.Z, m.Z, S.Z, C.Z), this.syncWith([f.Z, S.Z], () => D())
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
    return this.findActivity(e => e.type === p.IIU.CUSTOM_STATUS)
  }
  findActivity(e) {
    return L.find(e)
  }
  getApplicationActivities() {
    return v
  }
}
o = "LocalActivityStore", (s = "displayName") in(r = M) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new M(c.Z, {
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