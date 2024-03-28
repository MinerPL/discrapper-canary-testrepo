"use strict";
s.r(t);
var a, l, n, i, r = s("442837"),
  o = s("570140"),
  d = s("40572"),
  u = s("914010");
let c = {},
  E = {},
  _ = 0;
class I extends(i = r.default.Store) {
  initialize() {
    this.waitFor(u.default)
  }
  isUploadingEmoji() {
    return _ > 0
  }
  getEmojiRevision(e) {
    var t;
    return null !== (t = c[e]) && void 0 !== t ? t : 0
  }
  getEmojis(e) {
    return E[e]
  }
}
n = "GuildSettingsEmojiStore", (l = "displayName") in(a = I) ? Object.defineProperty(a, l, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = n, t.default = new I(o.default, {
  EMOJI_DELETE: function(e) {
    let {
      guildId: t,
      emojiId: s
    } = e;
    E[t] = E[t].filter(e => e.id !== s)
  },
  EMOJI_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      emojis: s
    } = e;
    E[t] = s.map(e => new d.default(e))
  },
  EMOJI_FETCH_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    E[t] = []
  },
  EMOJI_UPLOAD_START: function() {
    _++
  },
  EMOJI_UPLOAD_STOP: function() {
    _--
  },
  GUILD_EMOJIS_UPDATE: function(e) {
    var t;
    let {
      guildId: s
    } = e;
    c[s] = (null !== (t = c[s]) && void 0 !== t ? t : 0) + 1
  }
})