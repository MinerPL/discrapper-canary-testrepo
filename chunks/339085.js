n(47120), n(51350), n(653041), n(627494), n(757143), n(724458);
var r, i = n(392711), a = n.n(i), o = n(913527), s = n.n(o), l = n(956067), u = n(442837), c = n(570140), d = n(704907), _ = n(287328), E = n(86670), f = n(489033), h = n(188742), p = n(973542), m = n(889564), I = n(687476), T = n(978519), g = n(706454), S = n(581883), A = n(271383), N = n(93093), v = n(430824), O = n(771845), R = n(594174), C = n(70956), y = n(176354), D = n(823379), L = n(226951), b = n(709054), M = n(906411), P = n(633302), U = n(174065), w = n(396352), x = n(347374), G = n(185923), k = n(981631), B = n(149203), F = n(526761);
function V(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let H = [
        B.UX.TOP_GUILD_EMOJI.toString(),
        B.UX.FAVORITES.toString(),
        B.UX.RECENT.toString(),
        B.UX.CUSTOM.toString()
    ].concat(P.ZP.getCategories()), Z = { pendingUsages: [] };
class Y {
    getEmoji(e) {
        return this.build(), this._emojiMap[e];
    }
    getUsableEmoji(e) {
        let t = this.getEmoji(e);
        return null != t && this.isUsable(t) ? t : null;
    }
    isUsable(e) {
        if (0 === e.roles.length)
            return !0;
        let t = A.ZP.getMember(this.id, this._userId);
        return null != t && (!!(t.roles.some(t => e.roles.includes(t)) || (0, m.yH)(e)) || !1);
    }
    get rawEmojis() {
        return this._emojis;
    }
    get emojis() {
        return this.build(), this._emojis;
    }
    get emoticons() {
        return this.build(), this._emoticons;
    }
    get usableEmojis() {
        return this.build(), this._usableEmojis;
    }
    build() {
        if (!!this._dirty)
            this._dirty = !1, this._emojis.forEach(e => {
                e.allNamesString = ':'.concat(e.name, ':'), e.guildId = this.id, e.type = M.B.GUILD, this._emojiMap[e.id] = e;
            }), this._usableEmojis = a().sortBy(this._emojis.filter(e => this.isUsable(e)), e => e.name), this._emoticons = this._usableEmojis.filter(e => !e.require_colons);
    }
    constructor(e, t, n, r = !1) {
        V(this, 'id', void 0), V(this, '_userId', void 0), V(this, '_dirty', !0), V(this, '_emojis', void 0), V(this, '_emojiMap', {}), V(this, '_emoticons', []), V(this, '_usableEmojis', []), V(this, '_canSeeServerSubIAP', !1), V(this, '_totalUsable', 0), this.id = e, this._userId = t, this._emojis = n, this._canSeeServerSubIAP = r;
    }
}
let j = b.default.fromTimestamp(Date.now() - 60 * C.Z.Millis.DAY), W = [], K = 2, z = H.slice(0), q = {}, Q = {}, X = null, $ = new Map();
function J(e) {
    var t, n;
    let r = ee()[e];
    return null != r && null !== (n = null === (t = q[r]) || void 0 === t ? void 0 : t.getUsableEmoji(e)) && void 0 !== n ? n : void 0;
}
function ee() {
    if (et(), null == Q)
        for (let e in (Q = {}, q))
            for (let t of q[e].rawEmojis)
                Q[t.id] = e;
    return Q;
}
async function et() {
    if (0 !== K)
        return;
    let e = _.Z.database();
    if (null == e)
        return;
    K = 2;
    let t = await (0, E.gs)('EmojiStore.loadSavedEmojis', () => l.Z.timeAsync('\uD83D\uDCBE', 'loadSavedEmojis', () => f.Z.getAsync(e)));
    if (null != t)
        c.Z.dispatch({
            type: 'CACHED_EMOJIS_LOADED',
            emojis: t
        });
}
class en {
    static get(e) {
        return void 0 === e && (e = null), (null == en._lastInstance || en._lastInstance.guildId !== e) && (en._lastInstance = new en(e)), en._lastInstance;
    }
    static reset() {
        en._lastInstance = null;
    }
    static resetFrequentlyUsed() {
        null != en._lastInstance && (en._lastInstance.frequentlyUsed = null);
    }
    static resetFavorites() {
        null != en._lastInstance && (en._lastInstance.favorites = null, en._lastInstance.favoriteNamesAndIds = null);
    }
    static clear(e) {
        null != en._lastInstance && en._lastInstance.guildId === e && (en._lastInstance = null);
    }
    ensureDisambiguated() {
        null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji();
    }
    getDisambiguatedEmoji() {
        return null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji(), this.disambiguatedEmoji;
    }
    getCustomEmoji() {
        return null == this.customEmojis && this._buildDisambiguatedCustomEmoji(), this.customEmojis;
    }
    getGroupedCustomEmoji() {
        return null == this.groupedCustomEmojis && this._buildDisambiguatedCustomEmoji(), this.groupedCustomEmojis;
    }
    getByName(e) {
        if ((null == this.emojisByName || null == this.unicodeAliases) && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisByName, e))
            return this.emojisByName[e];
        if (Object.prototype.hasOwnProperty.call(this.unicodeAliases, e)) {
            let t = this.unicodeAliases[e];
            if (Object.prototype.hasOwnProperty.call(this.emojisByName, t))
                return this.emojisByName[t];
        }
    }
    getEmoticonByName(e) {
        if (null == this.emoticonsByName && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emoticonsByName, e))
            return this.emoticonsByName[e];
    }
    getById(e) {
        if (null == this.emojisById && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisById, e))
            return this.emojisById[e];
    }
    getCustomEmoticonRegex() {
        return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), null == this.emoticonRegex && null != this.escapedEmoticonNames && '' !== this.escapedEmoticonNames && (this.emoticonRegex = new RegExp('^\\b('.concat(this.escapedEmoticonNames, ')\\b'))), this.emoticonRegex;
    }
    getFrequentlyUsedEmojisWithoutFetchingLatest() {
        if (this.ensureDisambiguated(), null != this.frequentlyUsed)
            return this.frequentlyUsed;
        let e = er.frequently.map(e => null != e.id ? this.getById(e.id) : P.ZP.getByName(e.name)).filter(D.lm), t = (0, x.Z)(e);
        return this.frequentlyUsed = [...t.values()], this.frequentlyUsed;
    }
    rebuildFavoriteEmojisWithoutFetchingLatest() {
        var e, t;
        if (this.ensureDisambiguated(), null != this.favorites && null != this.favoriteNamesAndIds)
            return {
                favorites: this.favorites,
                favoriteNamesAndIds: this.favoriteNamesAndIds
            };
        let n = (null !== (t = null === (e = S.Z.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== t ? t : []).map(e => {
                var t;
                return null !== (t = this.getById(e)) && void 0 !== t ? t : P.ZP.getByName(e);
            }).filter(D.lm), r = (0, x.Z)(n);
        return this.favorites = [...r.values()], this.favoriteNamesAndIds = new Set(r.keys()), {
            favorites: this.favorites,
            favoriteNamesAndIds: this.favoriteNamesAndIds
        };
    }
    get favoriteEmojisWithoutFetchingLatest() {
        return this.rebuildFavoriteEmojisWithoutFetchingLatest().favorites;
    }
    getEmojiInPriorityOrderWithoutFetchingLatest() {
        let e = new Set();
        return this.favoriteEmojisWithoutFetchingLatest.concat(this.getFrequentlyUsedEmojisWithoutFetchingLatest()).filter(t => !e.has(t) && (e.add(t), !0));
    }
    getTopEmojiWithoutFetchingLatest(e) {
        if (this.ensureDisambiguated(), null == this.topEmojis) {
            var t;
            let n = $.get(e), r = w.Z.getTopEmojiIdsByGuildId(e);
            if (null == n && null == r)
                return W;
            let i = (null !== (t = null == n ? void 0 : n.emojiIds) && void 0 !== t ? t : r).map(e => {
                    var t;
                    return null !== (t = this.getById(e)) && void 0 !== t ? t : P.ZP.getByName(P.ZP.convertSurrogateToName(e, !1));
                }), a = [];
            i.forEach(e => {
                null != e && a.push(e);
            });
            let o = this.getNewlyAddedEmojiForGuild(e).map(e => e.id);
            this.topEmojis = a.filter(e => !o.includes(e.id));
        }
        return this.topEmojis;
    }
    getNewlyAddedEmojiForGuild(e) {
        if (this.ensureDisambiguated(), null == this.newlyAddedEmoji)
            return W;
        let t = this.newlyAddedEmoji[e];
        return null == t ? W : t;
    }
    getEscapedCustomEmoticonNames() {
        return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames;
    }
    nameMatchesChain(e) {
        return a()(this.getDisambiguatedEmoji()).filter(t => {
            let {
                    id: n,
                    names: r,
                    name: i
                } = t, o = null != r && a().some(r, e), s = null != i && e(i), l = null != i && a().some(h.Z.getTermsForEmoji(i), e), u = null != n && a().some(U.Z.getCaptionsForEmojiById({ emojiId: n }), e);
            return o || s || l || u;
        });
    }
    _buildDisambiguatedCustomEmoji() {
        let e = {}, t = [];
        this.emoticonRegex = null, this.frequentlyUsed = null, this.disambiguatedEmoji = [], this.unicodeAliases = Object.create(null), this.customEmojis = Object.create(null), this.groupedCustomEmojis = Object.create(null), this.emoticonsByName = Object.create(null), this.emojisByName = Object.create(null), this.emojisById = Object.create(null), this.newlyAddedEmoji = Object.create(null);
        let n = t => {
                var n, r;
                let i = t.name, a = null !== (n = e[i]) && void 0 !== n ? n : 0;
                if (e[i] = a + 1, a > 0) {
                    let e = ''.concat(i, '~').concat(a);
                    t = {
                        ...t,
                        name: e,
                        originalName: i,
                        allNamesString: ':'.concat(e, ':')
                    };
                }
                if (this.emojisByName[t.name] = t, 'names' in t && (null === (r = t.names) || void 0 === r || r.slice(1).forEach(e => this.unicodeAliases[e] = t.name)), null != t.id) {
                    let e, n;
                    if (this.emojisById[t.id] = t, this.customEmojis[t.name] = t, t.type === M.B.GUILD)
                        e = t.guildId, n = !0;
                    null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : this.groupedCustomEmojis[e] = [t], n && b.default.compare(t.id, j) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : this.newlyAddedEmoji[e] = [t]));
                }
                null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t);
            }, r = e => {
                if (!Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name))
                    t.push(L.Z.escape(e.name)), this.emoticonsByName[e.name] = e;
            };
        P.ZP.forEach(n);
        let i = e => {
            let t = q[null == e ? k.kod : e];
            null != t && (a().each(t.usableEmojis, n), a().each(t.emoticons, r));
        };
        for (let e in (i(this.guildId), this.newlyAddedEmoji))
            null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => b.default.compare(t.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[e] = [];
        O.ZP.getFlattenedGuildIds().forEach(e => {
            e !== this.guildId && i(e);
        }), this.escapedEmoticonNames = t.join('|');
    }
    constructor(e) {
        V(this, 'guildId', void 0), V(this, 'emoticonRegex', null), V(this, 'frequentlyUsed', null), V(this, 'favorites', null), V(this, 'favoriteNamesAndIds', null), V(this, 'topEmojis', null), V(this, 'escapedEmoticonNames', null), V(this, 'disambiguatedEmoji', null), V(this, 'customEmojis', void 0), V(this, 'groupedCustomEmojis', void 0), V(this, 'emoticonsByName', void 0), V(this, 'emojisByName', void 0), V(this, 'emojisById', void 0), V(this, 'unicodeAliases', void 0), V(this, 'newlyAddedEmoji', null), V(this, 'isFavoriteEmojiWithoutFetchingLatest', e => {
            var t;
            if (null == e)
                return !1;
            let {favoriteNamesAndIds: n} = this.rebuildFavoriteEmojisWithoutFetchingLatest();
            if (null != e.id)
                return n.has(e.id);
            let r = null !== (t = P.ZP.convertSurrogateToBase(e.surrogates)) && void 0 !== t ? t : e;
            return n.has(r.name);
        }), this.guildId = e;
    }
}
V(en, '_lastInstance', null);
let er = new d.Z({
    computeBonus: () => 100,
    computeWeight: e => {
        let t = 1;
        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t;
    },
    lookupKey: e => {
        var t;
        return null !== (t = P.ZP.getByName(e)) && void 0 !== t ? t : J(e);
    },
    afterCompute: () => {
        en.resetFrequentlyUsed(), z = H.slice(0), !a().some(q, e => e.usableEmojis.length > 0) && z.splice(H.indexOf(B.UX.CUSTOM), 1);
    },
    numFrequentlyItems: 42
});
function ei() {
    q = {}, Q = {}, en.reset(), $.clear(), K = 2;
}
function ea(e) {
    if (null != q[e])
        delete q[e];
}
function eo() {
    Q = null, en.reset(), 0 !== K && er.compute();
}
function es(e, t) {
    if (ea(e), en.clear(e), null == t)
        return;
    let n = R.default.getCurrentUser();
    if (null == n)
        return;
    let r = (0, T.r)(e);
    q[e] = new Y(e, n.id, t, r);
}
function el() {
    var e, t, n, r;
    let i = null === (t = S.Z.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
    null != i && P.ZP.setDefaultDiversitySurrogate(i), en.reset();
    let o = null !== (r = null === (n = S.Z.frecencyWithoutFetchingLatest.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== r ? r : {};
    er.overwriteHistory(a().mapValues(o, e => ({
        ...e,
        recentUses: e.recentUses.map(Number).filter(e => e > 0)
    })), Z.pendingUsages), a().isEmpty(o) && a().isEmpty(Z.pendingUsages) && S.Z.hasLoaded(F.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (er.track('thumbsup'), er.track('thumbsup'), er.track('eyes'), er.track('eyes'), er.track('laughing'), er.track('laughing'), er.track('watermelon'), er.track('fork_and_knife'), er.track('yum'), er.track('weary'), er.track('tired_face'), er.track('poop'), er.track('100'));
}
function eu(e) {
    if (null == e)
        return !1;
    for (let r of e) {
        var t, n;
        let e = null !== (n = null !== (t = r.id) && void 0 !== t ? t : r.uniqueName) && void 0 !== n ? n : r.name;
        null != e && (er.track(e), Z.pendingUsages.push({
            key: e,
            timestamp: Date.now()
        }));
    }
    let r = e.length > 0;
    return r && 0 !== K && er.compute(), r;
}
function ec(e) {
    let {
        guildId: t,
        role: n
    } = e;
    if (!(0, p.Z)(n))
        return !1;
    {
        let e = q[t];
        es(t, null == e ? void 0 : e.emojis), eo();
    }
}
class ed extends (r = u.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(_.Z, N.Z, A.ZP, v.Z, g.default, I.Z, w.Z, R.default), null != e && (Z = e), this.syncWith([S.Z], el);
    }
    getState() {
        return Z;
    }
    get loadState() {
        return K;
    }
    hasPendingUsage() {
        return Z.pendingUsages.length > 0;
    }
    get categories() {
        return z;
    }
    get diversitySurrogate() {
        var e;
        return null !== (e = P.ZP.getDefaultDiversitySurrogate()) && void 0 !== e ? e : '';
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return er;
    }
    getGuildEmoji(e) {
        var t;
        et();
        let n = q[e];
        return null !== (t = null == n ? void 0 : n.emojis) && void 0 !== t ? t : [];
    }
    getUsableGuildEmoji(e) {
        var t;
        et();
        let n = q[e];
        return null !== (t = null == n ? void 0 : n.usableEmojis) && void 0 !== t ? t : [];
    }
    getGuilds() {
        return q;
    }
    getDisambiguatedEmojiContext(e) {
        return et(), en.get(e);
    }
    getSearchResultsOrder(e, t, n) {
        let r = t.toLowerCase(), i = L.Z.escape(r);
        if (e.length > 0) {
            let t = RegExp('^'.concat(i), 'i'), n = new RegExp('(^|_|[A-Z])'.concat(i, 's?([A-Z]|_|$)')), o = n.test.bind(n), s = t.test.bind(t), l = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                    if (null == e || null == t)
                        return 0;
                    let n = e.toLowerCase(), i = 1 + (n === r ? 4 : 0) + (o(n) || o(e) ? 2 : 0) + (s(e) ? 1 : 0), a = er.getScore(t);
                    return null != a && (i *= a / 100), i;
                };
            e = a().orderBy(e, [
                e => null != e.names ? l(e.names[0]) : l(e.name, e.id),
                e => null != e.names ? e.names[0] : e.name
            ], [
                'desc',
                'asc'
            ]);
        }
        return n > 0 && (e = e.slice(0, n)), e;
    }
    searchWithoutFetchingLatest(e) {
        let t, {
                channel: n,
                query: r,
                count: i = 0,
                intention: a,
                includeExternalGuilds: o = !0,
                matchComparator: s
            } = e;
        et();
        let l = r.toLowerCase().replaceAll(/[ _]/g, ''), u = L.Z.escape(l);
        if (null == s) {
            let e = RegExp(''.concat(u), 'i');
            t = t => e.test(t.replaceAll('_', ''));
        } else
            t = s;
        let c = null != n ? n.getGuildId() : null, d = en.get(c).nameMatchesChain(t).reduce((e, t) => {
                let r = y.ZP.getEmojiUnavailableReason({
                    emoji: t,
                    channel: n,
                    intention: a,
                    forceIncludeExternalGuilds: o
                });
                return r === G.Z5.PREMIUM_LOCKED ? e.locked.push(t) : null == r && e.unlocked.push(t), e;
            }, {
                unlocked: [],
                locked: []
            });
        return {
            unlocked: this.getSearchResultsOrder(d.unlocked, r, i),
            locked: this.getSearchResultsOrder(d.locked, r, 0)
        };
    }
    getUsableCustomEmojiById(e) {
        return et(), J(e);
    }
    getCustomEmojiById(e) {
        return et(), function (e) {
            var t, n;
            let r = ee()[e];
            return null != r && null !== (n = null === (t = q[r]) || void 0 === t ? void 0 : t.getEmoji(e)) && void 0 !== n ? n : void 0;
        }(e);
    }
    getTopEmoji(e) {
        return null == e ? W : (et(), en.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? W : (et(), en.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return $.get(e);
    }
    getEmojiAutosuggestion(e) {
        if (null != X && X.length > 0) {
            let {
                locked: t,
                unlocked: n
            } = this.searchWithoutFetchingLatest({
                channel: e,
                count: 10,
                query: X,
                intention: G.Hz.CHAT
            });
            return [
                ...n.slice(0, 5),
                ...t.slice(0, 5)
            ].slice(0, 5);
        }
        return [];
    }
    hasUsableEmojiInAnyGuild() {
        return et(), b.default.keys(q).some(e => q[e].usableEmojis.length > 0);
    }
    hasFavoriteEmojis(e) {
        let t = en.get(e);
        return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
V(ed, 'displayName', 'EmojiStore'), V(ed, 'persistKey', 'EmojiStoreV2'), t.Z = new ed(c.Z, {
    BACKGROUND_SYNC: function () {
        ei();
    },
    CONNECTION_OPEN: function (e) {
        for (let t of (ei(), e.guilds))
            es(t.id, t.emojis);
        K = e.guilds.every(e => null != e.emojis) ? 1 : 0, eo();
    },
    CACHED_EMOJIS_LOADED: function (e) {
        let {emojis: t} = e;
        for (let [e, n] of t)
            !Object.hasOwn(q, e) && N.Z.isMember(e) && es(e, n);
        eo();
    },
    GUILD_MEMBER_UPDATE: function (e) {
        var t;
        let {
            guildId: n,
            user: r
        } = e;
        if (r.id !== (null === (t = R.default.getCurrentUser()) || void 0 === t ? void 0 : t.id))
            return;
        let i = q[n];
        es(n, null == i ? void 0 : i.usableEmojis), eo();
    },
    GUILD_CREATE: function (e) {
        0 !== K && null == e.guild.emojis && null != e.guild.emojiUpdates && (K = 0), es(e.guild.id, e.guild.emojis), eo();
    },
    GUILD_UPDATE: function (e) {
        es(e.guild.id, e.guild.emojis), eo();
    },
    GUILD_EMOJIS_UPDATE: function (e) {
        let {
            guildId: t,
            emojis: n
        } = e;
        es(t, n), eo();
    },
    GUILD_DELETE: function (e) {
        let {guild: t} = e;
        ea(t.id), $.delete(t.id), eo();
    },
    MESSAGE_REACTION_ADD: function (e) {
        if (!e.optimistic)
            return !1;
        let t = null != e.emoji.id && '0' !== e.emoji.id ? e.emoji : P.ZP.getByName(P.ZP.convertSurrogateToName(e.emoji.name, !1));
        if (null == t)
            return !1;
        eu([t]);
    },
    EMOJI_TRACK_USAGE: function (e) {
        let {emojiUsed: t} = e;
        eu(t);
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: {type: t},
            wasSaved: n
        } = e;
        if (h.Z.setEmojiLocale(g.default.locale), t !== F.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n)
            return !1;
        Z.pendingUsages = [];
    },
    GUILD_ROLE_CREATE: ec,
    GUILD_ROLE_UPDATE: ec,
    TOP_EMOJIS_FETCH_SUCCESS: function (e) {
        let {
            guildId: t,
            topEmojisMetadata: n
        } = e;
        $.set(t, {
            emojiIds: n.map(e => e.emojiId),
            topEmojisTTL: s()(s()()).add(1, 'days').valueOf()
        });
    },
    EMOJI_AUTOSUGGESTION_UPDATE: function (e) {
        let {text: t} = e;
        X = t;
    }
});
