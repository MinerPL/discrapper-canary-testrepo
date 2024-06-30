n(47120);
var r = n(442837), i = n(570140);
class a extends r.yh {
    allGuildIds() {
        return this.guildIds;
    }
    isMember(e) {
        return this.guildIds.has(e);
    }
    handleConnectionOpen(e) {
        this.guildIds = new Set([
            ...e.guilds.map(e => e.id),
            ...e.unavailableGuilds
        ]);
    }
    handleCacheLoaded(e) {
        this.guildIds = new Set(e.guilds.map(e => e.id));
    }
    handleCacheLoadedLazy(e) {
        for (let t of e.guilds)
            this.guildIds.add(t.id);
    }
    handleGuildCreate(e) {
        this.guildIds.add(e.guild.id);
    }
    handleGuildDelete(e) {
        !0 !== e.guild.unavailable && this.guildIds.delete(e.guild.id);
    }
    constructor() {
        var e, t, n;
        super(i.Z, {
            CACHE_LOADED: e => this.handleCacheLoaded(e),
            CACHE_LOADED_LAZY: e => this.handleCacheLoadedLazy(e),
            CONNECTION_OPEN: e => this.handleConnectionOpen(e),
            GUILD_CREATE: e => this.handleGuildCreate(e),
            GUILD_DELETE: e => this.handleGuildDelete(e)
        }, i.c.Early), e = this, t = 'guildIds', n = new Set(), t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n;
    }
}
t.Z = new a();
