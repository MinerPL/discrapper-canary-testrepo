"use strict";
n(47120);
var i, r = n(442837),
  s = n(570140),
  o = n(70956);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let l = {
    captionsById: new Map
  },
  u = l,
  _ = !1,
  d = null;
class c extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    u = null != e ? {
      captionsById: new Map(e.captionsById)
    } : l
  }
  getState() {
    return u
  }
  getCaptionsForEmojiById(e) {
    var t;
    let {
      emojiId: n
    } = e;
    return null !== (t = u.captionsById.get(n)) && void 0 !== t ? t : []
  }
  getIsFetching() {
    return _
  }
  getEmojiCaptionsTTL() {
    return d
  }
  hasPersistedState() {
    return u.captionsById.size > 0
  }
  clear() {
    u = l, _ = !1, d = null
  }
}
a(c, "displayName", "EmojiCaptionsStore"), a(c, "persistKey", "EmojiCaptionsStore"), t.Z = new c(s.Z, {
  LOGOUT: function() {
    u = l, _ = !1, d = null
  },
  EMOJI_CAPTIONS_FETCH: function(e) {
    let {} = e;
    !_ && (_ = !0)
  },
  EMOJI_CAPTIONS_FETCH_SUCCESS: function(e) {
    let {
      emojiCaptions: t
    } = e;
    u.captionsById = new Map(Object.entries(t)), _ = !1, d = Date.now() + 360 * o.Z.Millis.MINUTE
  },
  EMOJI_CAPTIONS_FETCH_ERROR: function(e) {
    let {
      is4XXError: t
    } = e;
    _ = !1;
    d = Date.now() + (t ? 10 : 1) * o.Z.Millis.MINUTE
  },
  POST_CONNECTION_OPEN: function(e) {
    let {} = e;
    _ = !1
  }
})