"use strict";
var i, r = n(442837),
  s = n(570140);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let a = {
    topEmojisByGuildId: {}
  },
  l = a,
  u = {};
class _ extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    l = null != e ? e : a
  }
  getState() {
    return l
  }
  getTopEmojiIdsByGuildId(e) {
    return l.topEmojisByGuildId[e]
  }
  getIsFetching(e) {
    return u[e]
  }
}
o(_, "displayName", "TopEmojiStore"), o(_, "persistKey", "TopEmojiStore"), t.Z = new _(s.Z, {
  LOGOUT: function() {
    l = a, u = {}
  },
  TOP_EMOJIS_FETCH: function(e) {
    let {
      guildId: t
    } = e;
    u[t] = !0
  },
  TOP_EMOJIS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      topEmojisMetadata: n
    } = e;
    l.topEmojisByGuildId[t] = n.map(e => e.emojiId), u[t] = !1
  }
})