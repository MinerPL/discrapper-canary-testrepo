var r, i, a, s, o, l, u, c, d, _, E, f, h, p;
function m(e, t) {
    let { sound_id: n, emoji_id: r, emoji_name: i, user_id: a, available: s, ...o } = e;
    return {
        ...o,
        soundId: n,
        guildId: t,
        emojiId: r,
        emojiName: i,
        userId: a,
        available: null == s || s
    };
}
function I(e) {
    let { soundId: t, guildId: n, emojiId: r, emojiName: i, userId: a, ...s } = e;
    return {
        ...s,
        sound_id: t,
        guild_id: n,
        emoji_id: r,
        emoji_name: i,
        user_id: a
    };
}
n.d(t, {
    H$: function () {
        return s;
    },
    MW: function () {
        return a;
    },
    Pb: function () {
        return r;
    },
    QL: function () {
        return I;
    },
    YQ: function () {
        return u;
    },
    bg: function () {
        return o;
    },
    jy: function () {
        return i;
    },
    o3: function () {
        return m;
    },
    vB: function () {
        return l;
    }
}),
    ((c = r || (r = {}))[(c.PLAY = 0)] = 'PLAY'),
    (c[(c.ADD = 1)] = 'ADD'),
    ((d = i || (i = {})).ENTRY = 'entry_sound'),
    (d.EXIT = 'exit_sound'),
    (d.DEFAULT = 'default'),
    ((_ = a || (a = {})).ADDED = 'added'),
    (_.UPDATED = 'updated'),
    (_.REMOVED = 'removed'),
    ((E = s || (s = {})).DEFAULT = 'default'),
    (E.CUSTOM = 'custom'),
    ((f = o || (o = {}))[(f.FAVORITES = 0)] = 'FAVORITES'),
    (f[(f.RECENTLY_HEARD = 1)] = 'RECENTLY_HEARD'),
    (f[(f.FREQUENTLY_USED = 2)] = 'FREQUENTLY_USED'),
    (f[(f.GUILD = 3)] = 'GUILD'),
    (f[(f.DEFAULTS = 4)] = 'DEFAULTS'),
    (f[(f.SEARCH = 5)] = 'SEARCH'),
    ((h = l || (l = {}))[(h.SOUND = 0)] = 'SOUND'),
    (h[(h.ADD_SOUND = 1)] = 'ADD_SOUND'),
    ((p = u || (u = {}))[(p.GIFT_CODE = 0)] = 'GIFT_CODE'),
    (p[(p.SOUNDBOARD = 1)] = 'SOUNDBOARD'),
    (p[(p.JOINED_VOICE_CHANNEL = 2)] = 'JOINED_VOICE_CHANNEL');
