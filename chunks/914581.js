"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("446674"),
  l = s("913144");
let n = null,
  i = 0,
  r = null,
  o = null;
class d extends a.default.Store {
  showNotice() {
    return n !== r
  }
  get vanityURLCode() {
    return n
  }
  get originalVanityURLCode() {
    return r
  }
  get vanityURLUses() {
    return i
  }
  hasError() {
    return null != o
  }
  get errorDetails() {
    return o
  }
}
d.displayName = "GuildSettingsVanityURLStore";
var u = new d(l.default, {
  GUILD_SETTINGS_SET_VANITY_URL: function(e) {
    var t, s;
    r = n = null !== (t = e.code) && void 0 !== t ? t : "", i = e.uses, o = null !== (s = e.error) && void 0 !== s ? s : null
  },
  GUILD_SETTINGS_VANITY_URL_CLOSE: function() {
    r = n = null, i = 0, o = null
  },
  GUILD_SETTINGS_VANITY_URL_RESET: function() {
    n = r, i = 0
  },
  GUILD_SETTINGS_VANITY_URL_SET: function(e) {
    n = e.code, i = 0
  },
  GUILD_SETTINGS_VANITY_URL_ERROR: function(e) {
    o = e.error
  }
})