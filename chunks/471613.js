var s, a, i, r, l = n(442837), o = n(570140), c = n(40572), d = n(914010);
let u = {}, _ = {}, E = 0;
class I extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(d.Z);
    }
    isUploadingEmoji() {
        return E > 0;
    }
    getEmojiRevision(e) {
        var t;
        return null !== (t = u[e]) && void 0 !== t ? t : 0;
    }
    getEmojis(e) {
        return _[e];
    }
}
i = 'GuildSettingsEmojiStore', (a = 'displayName') in (s = I) ? Object.defineProperty(s, a, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : s[a] = i, t.Z = new I(o.Z, {
    EMOJI_DELETE: function (e) {
        let {
            guildId: t,
            emojiId: n
        } = e;
        _[t] = _[t].filter(e => e.id !== n);
    },
    EMOJI_FETCH_SUCCESS: function (e) {
        let {
            guildId: t,
            emojis: n
        } = e;
        _[t] = n.map(e => new c.Z(e));
    },
    EMOJI_FETCH_FAILURE: function (e) {
        let {guildId: t} = e;
        _[t] = [];
    },
    EMOJI_UPLOAD_START: function () {
        E++;
    },
    EMOJI_UPLOAD_STOP: function () {
        E--;
    },
    GUILD_EMOJIS_UPDATE: function (e) {
        var t;
        let {guildId: n} = e;
        u[n] = (null !== (t = u[n]) && void 0 !== t ? t : 0) + 1;
    }
});
