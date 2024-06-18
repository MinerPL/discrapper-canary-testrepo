"use strict";
n(47120), n(724458);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  d = n(872810),
  c = n(569545),
  E = n(70722);
let I = {},
  T = {},
  h = new Set;

function S() {
  I = {}, T = {}
}
class f extends(i = u.ZP.Store) {
  getPreviewURL(e, t, n) {
    let i = (0, c.V9)({
        streamType: null != e ? E.lo.GUILD : E.lo.CALL,
        guildId: e,
        channelId: t,
        ownerId: n
      }),
      r = I[i];
    return null == r || Date.now() > r.expires ? (!h.has(i) && (h.add(i), Promise.resolve().then(() => {
      (0, d.n9)(e, t, n)
    })), null) : r.url
  }
  getPreviewURLForStreamKey(e) {
    let {
      guildId: t,
      channelId: n,
      ownerId: i
    } = (0, c.my)(e);
    return this.getPreviewURL(t, n, i)
  }
  getIsPreviewLoading(e, t, n) {
    let i = (0, c.V9)({
      streamType: null != e ? E.lo.GUILD : E.lo.CALL,
      guildId: e,
      channelId: t,
      ownerId: n
    });
    return h.has(i)
  }
}
o = "ApplicationStreamPreviewStore", (s = "displayName") in(r = f) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new f(_.Z, {
  CONNECTION_OPEN: S,
  LOGOUT: S,
  STREAM_PREVIEW_FETCH_START: function(e) {
    var t;
    let {
      streamKey: n
    } = e;
    T[n] = (null !== (t = T[n]) && void 0 !== t ? t : 0) + 1, h.add(n)
  },
  STREAM_PREVIEW_FETCH_SUCCESS: function(e) {
    let {
      streamKey: t,
      previewURL: n
    } = e;
    I[t] = {
      url: n,
      expires: Date.now() + 12e4
    }, T[t] = 0, h.delete(t)
  },
  STREAM_PREVIEW_FETCH_FAIL: function(e) {
    let {
      streamKey: t,
      retryAfter: n
    } = e;
    I[t] = {
      url: null,
      expires: Date.now() + (null != n ? n : 1e4 * T[t])
    }, h.delete(t)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return !(l().isEmpty(I) && l().isEmpty(T)) && t.reduce((e, t) => {
      let {
        userId: n,
        guildId: i,
        channelId: r,
        selfStream: s
      } = t;
      if (s) return e;
      let o = (0, c.V9)({
        streamType: null != i ? E.lo.GUILD : E.lo.CALL,
        guildId: i,
        channelId: r,
        ownerId: n
      });
      return delete I[o], delete T[o], !0
    }, !1)
  }
})