n(47120);
var s = n(392711),
    a = n.n(s),
    r = n(710845),
    i = n(9156),
    l = n(287328);
let o = new r.Z('ReadStates');
t.Z = new (class e {
    async getAll(e) {
        let t = performance.now(),
            n = await l.Z.userGuildSettings(e).getMany(),
            s = performance.now();
        return o.log('asynchronously loaded in '.concat(s - t, 'ms (userGuildSettings: ').concat(n.length, ')')), n;
    }
    resetInMemoryState() {}
    handleConnectionOpen(e, t) {
        !e.userGuildSettings.partial && l.Z.userGuildSettingsTransaction(t).delete(), this.write(e.userGuildSettings.entries, e.userGuildSettings.version, t);
    }
    handleUserGuildSettingsUpdate(e, t) {
        let n = a().max(
            e.userGuildSettings.map((e) => {
                var t;
                return null !== (t = e.version) && void 0 !== t ? t : -1;
            })
        );
        null != n && this.write(e.userGuildSettings, n, t);
    }
    write(e, t, n) {
        let s = l.Z.userGuildSettingsTransaction(n);
        for (let t of e) {
            var a;
            let e = {
                ...(0, i.wL)(t.guild_id),
                ...t,
                channel_overrides: (0, i.U2)(t.channel_overrides)
            };
            s.put(null !== (a = t.guild_id) && void 0 !== a ? a : 'dm-sentinel', e);
        }
        l.Z.nonGuildVersionsTransaction(n).put({
            id: 'user_guild_settings_version',
            version: t
        });
    }
    constructor() {
        var e, t, n;
        (e = this),
            (t = 'actions'),
            (n = {
                CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                USER_GUILD_SETTINGS_FULL_UPDATE: (e, t) => this.handleUserGuildSettingsUpdate(e, t)
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
