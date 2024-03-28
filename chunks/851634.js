"use strict";
let l, a;
n.r(t);
var s, i, r, o, u = n("392711"),
  d = n.n(u),
  c = n("442837"),
  f = n("570140"),
  h = n("189786");
let C = Object.freeze({}),
  p = {};

function m(e) {
  let {
    lobbyId: t
  } = e;
  delete p[t]
}
class g extends(o = c.default.Store) {
  getAllVoiceStates() {
    return p
  }
  getVoiceStates(e) {
    var t;
    return null !== (t = p[e]) && void 0 !== t ? t : C
  }
  getVoiceState(e, t) {
    return this.getVoiceStates(e)[t]
  }
  getLobbyIdsForUser(e) {
    return Object.keys(p).filter(t => null != p[t][e])
  }
}
r = "LobbyVoiceStateStore", (i = "displayName") in(s = g) ? Object.defineProperty(s, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = r, t.default = new g(f.default, {
  CONNECTION_OPEN: function(e) {
    let {
      user: t,
      sessionId: n
    } = e;
    p = {}, l = t.id, a = n
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      lobbyVoiceStates: t,
      user: n,
      sessionId: s
    } = e;
    p = {}, d().each(t, (e, t) => {
      p[t] = {}, d().each(e, (e, n) => {
        p[t][n] = new h.default(e)
      })
    }), l = n.id, a = s
  },
  LOBBY_VOICE_STATE_UPDATE: function(e) {
    var t;
    let n, {
        sessionId: s,
        userId: i,
        lobbyId: r,
        channelId: o,
        mute: u,
        deaf: d,
        selfMute: c,
        selfDeaf: f
      } = e,
      C = i === l && s !== a,
      m = null !== (t = p[r]) && void 0 !== t ? t : {},
      g = m[i];
    if (null != o && !C && (n = null == g ? new h.default({
        userId: i,
        sessionId: s,
        channelId: o,
        mute: u,
        deaf: d,
        selfMute: c,
        selfDeaf: f
      }) : g.merge({
        userId: i,
        sessionId: s,
        channelId: o,
        mute: u,
        deaf: d,
        selfMute: c,
        selfDeaf: f
      })), g === n) return !1;
    null == n ? (m = {
      ...m
    }, delete m[i]) : m = {
      ...m,
      [i]: n
    }, p[r] = m
  },
  LOBBY_DELETE: m,
  LOBBY_DISCONNECT: m
})