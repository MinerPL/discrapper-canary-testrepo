"use strict";
var n, i, l, a, r = t(442837),
  o = t(570140),
  c = t(40572),
  d = t(914010);
let u = {},
  E = {},
  _ = 0;
class I extends(a = r.ZP.Store) {
  initialize() {
    this.waitFor(d.Z)
  }
  isUploadingEmoji() {
    return _ > 0
  }
  getEmojiRevision(e) {
    var s;
    return null !== (s = u[e]) && void 0 !== s ? s : 0
  }
  getEmojis(e) {
    return E[e]
  }
}
l = "GuildSettingsEmojiStore", (i = "displayName") in(n = I) ? Object.defineProperty(n, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[i] = l, s.Z = new I(o.Z, {
  EMOJI_DELETE: function(e) {
    let {
      guildId: s,
      emojiId: t
    } = e;
    E[s] = E[s].filter(e => e.id !== t)
  },
  EMOJI_FETCH_SUCCESS: function(e) {
    let {
      guildId: s,
      emojis: t
    } = e;
    E[s] = t.map(e => new c.Z(e))
  },
  EMOJI_FETCH_FAILURE: function(e) {
    let {
      guildId: s
    } = e;
    E[s] = []
  },
  EMOJI_UPLOAD_START: function() {
    _++
  },
  EMOJI_UPLOAD_STOP: function() {
    _--
  },
  GUILD_EMOJIS_UPDATE: function(e) {
    var s;
    let {
      guildId: t
    } = e;
    u[t] = (null !== (s = u[t]) && void 0 !== s ? s : 0) + 1
  }
})