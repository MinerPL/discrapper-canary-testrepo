"use strict";
n(47120);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(570140),
  d = n(710845),
  c = n(430824);
let E = new d.Z("GuildAvailabilityStore"),
  I = new Set;

function T(e) {
  I = new Set(e.unavailableGuilds), e.unavailableGuilds.length > 0 && E.warn("".concat(e.unavailableGuilds.length, " guilds are unavailable on connection open: ").concat(e.unavailableGuilds))
}

function h(e) {
  if (!I.has(e.guild.id)) return !1;
  I.delete(e.guild.id), E.info("Guild has become available: ".concat(e.guild.id))
}
class S extends(i = u.ZP.Store) {
  initialize() {
    this.waitFor(c.Z)
  }
  isUnavailable(e) {
    return null != e && I.has(e)
  }
  get totalGuilds() {
    return l().size(c.Z.getGuilds()) + I.size
  }
  get totalUnavailableGuilds() {
    return I.size
  }
  get unavailableGuilds() {
    return Array.from(I)
  }
}
o = "GuildAvailabilityStore", (s = "displayName") in(r = S) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new S(_.Z, {
  CONNECTION_OPEN: T,
  OVERLAY_INITIALIZE: T,
  GUILD_UNAVAILABLE: function(e) {
    if (I.has(e.guildId)) return !1;
    let t = c.Z.getGuild(e.guildId),
      n = "???";
    null != t && null != t.name && (n = t.name), E.warn("Guild has gone unavailable: ".concat(e.guildId, " (").concat(n, ")")), I.add(e.guildId)
  },
  GUILD_DELETE: function(e) {
    !0 !== e.guild.unavailable && I.delete(e.guild.id)
  },
  GUILD_CREATE: h,
  GUILD_UPDATE: h,
  GUILD_GEO_RESTRICTED: function(e) {
    if (!I.has(e.guildId)) return !1;
    I.delete(e.guildId)
  }
})