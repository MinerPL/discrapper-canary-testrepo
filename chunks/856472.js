n(47120), n(757143), n(653041), n(627494);
var r = n(710845),
    i = n(287328);
let a = new r.Z('GuildStickers');
t.Z = new (class e {
    async getAsync(e) {
        let t = performance.now(),
            n = await i.Z.stickers(e).getMapEntries(),
            r = performance.now();
        return a.log('asynchronously loaded in '.concat(r - t, 'ms (guilds: ').concat(n.length, ')')), n;
    }
    handleConnectionOpen(e, t) {
        for (let n of e.guilds) this.handleOneGuildCreate(n, t);
    }
    handleGuildCreate(e, t) {
        this.handleOneGuildCreate(e.guild, t);
    }
    handleGuildUpdate(e, t) {
        this.replace(e.guild.id, e.guild.stickers, t);
    }
    handleGuildDelete(e, t) {
        this.delete(e.guild.id, t);
    }
    handleGuildStickersUpdate(e, t) {
        this.replace(e.guildId, e.stickers, t);
    }
    handleBackgroundSync(e, t) {
        e.promisesForBackgroundSyncToWaitOn.push(
            Promise.all(
                e.stickers.map((e) => {
                    if ('unavailable' === e.dataMode) return Promise.resolve();
                    'full' === e.dataMode ? (a.verbose('Replacing '.concat(e.entities.length, ' stickers for ').concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (a.verbose('Updating '.concat(e.updatedEntities.length, ' and deleting ').concat(e.deletedEntityIds.length, ' stickers for ').concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t));
                })
            )
        );
    }
    handleOneGuildCreate(e, t) {
        null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t);
    }
    resetInMemoryState() {}
    replace(e, t, n) {
        i.Z.stickersTransaction(n).replaceAll(e, t);
    }
    delete(e, t) {
        i.Z.stickersTransaction(t).delete(e);
    }
    update(e, t, n, r) {
        let a = i.Z.stickersTransaction(r);
        for (let r of (a.putAll(e, t), n)) a.delete(e, r);
    }
    constructor() {
        var e, t, n;
        (e = this),
            (t = 'actions'),
            (n = {
                BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
            }),
            t in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[t] = n);
    }
})();
