var s, a, i, r, l = n(442837), o = n(570140);
let c = null, d = 0, u = null, _ = null;
class E extends (r = l.ZP.Store) {
    showNotice() {
        return c !== u;
    }
    get vanityURLCode() {
        return c;
    }
    get originalVanityURLCode() {
        return u;
    }
    get vanityURLUses() {
        return d;
    }
    hasError() {
        return null != _;
    }
    get errorDetails() {
        return _;
    }
}
i = 'GuildSettingsVanityURLStore', (a = 'displayName') in (s = E) ? Object.defineProperty(s, a, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : s[a] = i, t.Z = new E(o.Z, {
    GUILD_SETTINGS_SET_VANITY_URL: function (e) {
        var t, n;
        u = c = null !== (t = e.code) && void 0 !== t ? t : '', d = e.uses, _ = null !== (n = e.error) && void 0 !== n ? n : null;
    },
    GUILD_SETTINGS_VANITY_URL_CLOSE: function () {
        u = c = null, d = 0, _ = null;
    },
    GUILD_SETTINGS_VANITY_URL_RESET: function () {
        c = u, d = 0;
    },
    GUILD_SETTINGS_VANITY_URL_SET: function (e) {
        c = e.code, d = 0;
    },
    GUILD_SETTINGS_VANITY_URL_ERROR: function (e) {
        _ = e.error;
    }
});
