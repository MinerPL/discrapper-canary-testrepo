"use strict";
var n, i, l, a, r = t(442837),
  o = t(570140);
let c = null,
  d = 0,
  u = null,
  E = null;
class _ extends(a = r.ZP.Store) {
  showNotice() {
    return c !== u
  }
  get vanityURLCode() {
    return c
  }
  get originalVanityURLCode() {
    return u
  }
  get vanityURLUses() {
    return d
  }
  hasError() {
    return null != E
  }
  get errorDetails() {
    return E
  }
}
l = "GuildSettingsVanityURLStore", (i = "displayName") in(n = _) ? Object.defineProperty(n, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[i] = l, s.Z = new _(o.Z, {
  GUILD_SETTINGS_SET_VANITY_URL: function(e) {
    var s, t;
    u = c = null !== (s = e.code) && void 0 !== s ? s : "", d = e.uses, E = null !== (t = e.error) && void 0 !== t ? t : null
  },
  GUILD_SETTINGS_VANITY_URL_CLOSE: function() {
    u = c = null, d = 0, E = null
  },
  GUILD_SETTINGS_VANITY_URL_RESET: function() {
    c = u, d = 0
  },
  GUILD_SETTINGS_VANITY_URL_SET: function(e) {
    c = e.code, d = 0
  },
  GUILD_SETTINGS_VANITY_URL_ERROR: function(e) {
    E = e.error
  }
})