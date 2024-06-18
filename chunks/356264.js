"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140);
let u = 0,
  _ = {};
class d extends(o = a.ZP.Store) {
  getGuild(e) {
    return _[e]
  }
  getVersion() {
    return u
  }
}
s = "BasicGuildStore", (r = "displayName") in(i = d) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new d(l.Z, {
  BASIC_GUILD_FETCH: function(e) {},
  BASIC_GUILD_FETCH_SUCCESS: function(e) {
    _[e.guildId] = e.guildInfo, u++
  },
  BASIC_GUILD_FETCH_FAILURE: function(e) {}
})