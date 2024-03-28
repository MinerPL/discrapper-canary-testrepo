"use strict";
n.r(t), n("47120"), n("724458");
var a, l, s, i, r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("570140"),
  c = n("872810"),
  f = n("569545"),
  h = n("70722");
let m = {},
  p = {},
  E = new Set;

function C() {
  m = {}, p = {}
}
class g extends(a = u.default.Store) {
  getPreviewURL(e, t, n) {
    let a = (0, f.encodeStreamKey)({
        streamType: null != e ? h.StreamTypes.GUILD : h.StreamTypes.CALL,
        guildId: e,
        channelId: t,
        ownerId: n
      }),
      l = m[a];
    return null == l || Date.now() > l.expires ? (!E.has(a) && (E.add(a), Promise.resolve().then(() => {
      (0, c.fetchStreamPreview)(e, t, n)
    })), null) : l.url
  }
  getPreviewURLForStreamKey(e) {
    let {
      guildId: t,
      channelId: n,
      ownerId: a
    } = (0, f.decodeStreamKey)(e);
    return this.getPreviewURL(t, n, a)
  }
  getIsPreviewLoading(e, t, n) {
    let a = (0, f.encodeStreamKey)({
      streamType: null != e ? h.StreamTypes.GUILD : h.StreamTypes.CALL,
      guildId: e,
      channelId: t,
      ownerId: n
    });
    return E.has(a)
  }
}
i = "ApplicationStreamPreviewStore", (s = "displayName") in(l = g) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i, t.default = new g(d.default, {
  CONNECTION_OPEN: C,
  LOGOUT: C,
  STREAM_PREVIEW_FETCH_START: function(e) {
    var t;
    let {
      streamKey: n
    } = e;
    p[n] = (null !== (t = p[n]) && void 0 !== t ? t : 0) + 1, E.add(n)
  },
  STREAM_PREVIEW_FETCH_SUCCESS: function(e) {
    let {
      streamKey: t,
      previewURL: n
    } = e;
    m[t] = {
      url: n,
      expires: Date.now() + 12e4
    }, p[t] = 0, E.delete(t)
  },
  STREAM_PREVIEW_FETCH_FAIL: function(e) {
    let {
      streamKey: t,
      retryAfter: n
    } = e;
    m[t] = {
      url: null,
      expires: Date.now() + (null != n ? n : 1e4 * p[t])
    }, E.delete(t)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return !(o().isEmpty(m) && o().isEmpty(p)) && t.reduce((e, t) => {
      let {
        userId: n,
        guildId: a,
        channelId: l,
        selfStream: s
      } = t;
      if (s) return e;
      let i = (0, f.encodeStreamKey)({
        streamType: null != a ? h.StreamTypes.GUILD : h.StreamTypes.CALL,
        guildId: a,
        channelId: l,
        ownerId: n
      });
      return delete m[i], delete p[i], !0
    }, !1)
  }
})