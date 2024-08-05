var r, i = n(442837),
  a = n(570140);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let o = {
topEmojisByGuildId: {}
  },
  l = o,
  u = {};
class c extends(r = i.ZP.PersistedStore) {
  initialize(e) {
l = null != e ? e : o;
  }
  getState() {
return l;
  }
  getTopEmojiIdsByGuildId(e) {
return l.topEmojisByGuildId[e];
  }
  getIsFetching(e) {
return u[e];
  }
}
s(c, 'displayName', 'TopEmojiStore'), s(c, 'persistKey', 'TopEmojiStore'), t.Z = new c(a.Z, {
  LOGOUT: function() {
l = o, u = {};
  },
  TOP_EMOJIS_FETCH: function(e) {
let {
  guildId: t
} = e;
u[t] = !0;
  },
  TOP_EMOJIS_FETCH_SUCCESS: function(e) {
let {
  guildId: t,
  topEmojisMetadata: n
} = e;
l.topEmojisByGuildId[t] = n.map(e => e.emojiId), u[t] = !1;
  }
});