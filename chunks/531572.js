var i,
    l = n(442837),
    r = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = {};
class o extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && (s = e);
    }
    getState() {
        return s;
    }
    getCountForGuild(e) {
        return s[e];
    }
}
a(o, 'displayName', 'GuildBoostingProgressBarPersistedStore'),
    a(o, 'persistKey', 'PremiumGuildProgressBarPersistedStore'),
    (t.Z = new o(r.Z, {
        APPLIED_GUILD_BOOST_COUNT_UPDATE: (e) => {
            let { guildId: t, premiumCount: n } = e;
            s = {
                ...s,
                [t]: n
            };
        }
    }));
