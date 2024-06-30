n(47120);
var r, i, a, o, s = n(392711), l = n.n(s), u = n(442837), c = n(570140), d = n(710845), _ = n(430824);
let E = new d.Z('GuildAvailabilityStore'), f = new Set();
function h(e) {
    f = new Set(e.unavailableGuilds), e.unavailableGuilds.length > 0 && E.warn(''.concat(e.unavailableGuilds.length, ' guilds are unavailable on connection open: ').concat(e.unavailableGuilds));
}
function p(e) {
    if (!f.has(e.guild.id))
        return !1;
    f.delete(e.guild.id), E.info('Guild has become available: '.concat(e.guild.id));
}
class m extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(_.Z);
    }
    isUnavailable(e) {
        return null != e && f.has(e);
    }
    get totalGuilds() {
        return l().size(_.Z.getGuilds()) + f.size;
    }
    get totalUnavailableGuilds() {
        return f.size;
    }
    get unavailableGuilds() {
        return Array.from(f);
    }
}
o = 'GuildAvailabilityStore', (a = 'displayName') in (i = m) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new m(c.Z, {
    CONNECTION_OPEN: h,
    OVERLAY_INITIALIZE: h,
    GUILD_UNAVAILABLE: function (e) {
        if (f.has(e.guildId))
            return !1;
        let t = _.Z.getGuild(e.guildId), n = '???';
        null != t && null != t.name && (n = t.name), E.warn('Guild has gone unavailable: '.concat(e.guildId, ' (').concat(n, ')')), f.add(e.guildId);
    },
    GUILD_DELETE: function (e) {
        !0 !== e.guild.unavailable && f.delete(e.guild.id);
    },
    GUILD_CREATE: p,
    GUILD_UPDATE: p,
    GUILD_GEO_RESTRICTED: function (e) {
        if (!f.has(e.guildId))
            return !1;
        f.delete(e.guildId);
    }
});
