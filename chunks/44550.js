"use strict";
s.r(t);
var a, l, n, i, r = s("442837"),
  o = s("570140");
let d = null,
  u = 0,
  c = null,
  E = null;
class _ extends(i = r.default.Store) {
  showNotice() {
    return d !== c
  }
  get vanityURLCode() {
    return d
  }
  get originalVanityURLCode() {
    return c
  }
  get vanityURLUses() {
    return u
  }
  hasError() {
    return null != E
  }
  get errorDetails() {
    return E
  }
}
n = "GuildSettingsVanityURLStore", (l = "displayName") in(a = _) ? Object.defineProperty(a, l, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = n, t.default = new _(o.default, {
  GUILD_SETTINGS_SET_VANITY_URL: function(e) {
    var t, s;
    c = d = null !== (t = e.code) && void 0 !== t ? t : "", u = e.uses, E = null !== (s = e.error) && void 0 !== s ? s : null
  },
  GUILD_SETTINGS_VANITY_URL_CLOSE: function() {
    c = d = null, u = 0, E = null
  },
  GUILD_SETTINGS_VANITY_URL_RESET: function() {
    d = c, u = 0
  },
  GUILD_SETTINGS_VANITY_URL_SET: function(e) {
    d = e.code, u = 0
  },
  GUILD_SETTINGS_VANITY_URL_ERROR: function(e) {
    E = e.error
  }
})