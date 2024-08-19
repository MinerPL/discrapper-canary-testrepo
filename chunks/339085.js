n(47120), n(51350), n(653041), n(627494), n(757143), n(724458);
var r,
    i,
    a,
    s = n(392711),
    o = n.n(s),
    l = n(913527),
    u = n.n(l),
    c = n(956067),
    d = n(442837),
    _ = n(570140),
    E = n(704907),
    f = n(287328),
    h = n(86670),
    p = n(489033),
    m = n(188742),
    I = n(353926),
    T = n(973542),
    g = n(889564),
    S = n(687476),
    A = n(978519),
    N = n(364742),
    v = n(706454),
    O = n(581883),
    R = n(271383),
    C = n(93093),
    y = n(430824),
    D = n(771845),
    L = n(594174),
    b = n(70956),
    M = n(176354),
    P = n(823379),
    U = n(226951),
    w = n(709054),
    x = n(906411),
    G = n(689789),
    k = n(407477),
    B = n(633302),
    F = n(174065),
    V = n(396352),
    H = n(347374),
    Z = n(185923),
    Y = n(981631),
    j = n(149203),
    W = n(526761);
function K(e, t, n) {
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
let z = 'original',
    q = [j.UX.TOP_GUILD_EMOJI.toString(), j.UX.FAVORITES.toString(), j.UX.RECENT.toString(), j.UX.CUSTOM.toString()].concat(B.ZP.getCategories()),
    Q = {
        pendingUsages: [],
        emojiReactionPendingUsages: [],
        expandedSectionsByGuildIds: new Set()
    };
class X {
    getEmoji(e) {
        return this.build(), this._emojiMap[e];
    }
    getUsableEmoji(e) {
        let t = this.getEmoji(e);
        return null != t && this.isUsable(t) ? t : null;
    }
    isUsable(e) {
        if (0 === e.roles.length) return !0;
        let t = R.ZP.getMember(this.id, this._userId);
        return null != t && (!!(t.roles.some((t) => e.roles.includes(t)) || (0, g.yH)(e)) || !1);
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
            (this._dirty = !1),
                this._emojis.forEach((e) => {
                    (e.allNamesString = ':'.concat(e.name, ':')), (e.guildId = this.id), (e.type = x.B.GUILD), (this._emojiMap[e.id] = e);
                }),
                (this._usableEmojis = o().sortBy(
                    this._emojis.filter((e) => this.isUsable(e)),
                    (e) => e.name
                )),
                (this._emoticons = this._usableEmojis.filter((e) => !e.require_colons));
    }
    constructor(e, t, n, r = !1) {
        K(this, 'id', void 0), K(this, '_userId', void 0), K(this, '_dirty', !0), K(this, '_emojis', void 0), K(this, '_emojiMap', {}), K(this, '_emoticons', []), K(this, '_usableEmojis', []), K(this, '_canSeeServerSubIAP', !1), K(this, '_totalUsable', 0), (this.id = e), (this._userId = t), (this._emojis = n), (this._canSeeServerSubIAP = r);
    }
}
let $ = w.default.fromTimestamp(Date.now() - 60 * b.Z.Millis.DAY),
    J = [];
((a = r || (r = {}))[(a.Unloaded = 0)] = 'Unloaded'), (a[(a.MaybeLoaded = 1)] = 'MaybeLoaded'), (a[(a.Loading = 2)] = 'Loading'), (a[(a.Loaded = 3)] = 'Loaded');
let ee = 3,
    et = q.slice(0),
    en = {},
    er = {},
    ei = null,
    ea = new Map();
function es(e) {
    var t, n;
    let r = eo()[e];
    return null != r && null !== (n = null === (t = en[r]) || void 0 === t ? void 0 : t.getUsableEmoji(e)) && void 0 !== n ? n : void 0;
}
function eo() {
    if ((el(), null == er)) for (let e in ((er = {}), en)) for (let t of en[e].rawEmojis) er[t.id] = e;
    return er;
}
async function el() {
    if (0 !== ee) return;
    let e = f.Z.database();
    if (null == e) return;
    ee = 2;
    let t = await (0, h.gs)('EmojiStore.loadSavedEmojis', () => c.Z.timeAsync('\uD83D\uDCBE', 'loadSavedEmojis', () => p.Z.getAsync(e)));
    if (((ee = 3), null != t))
        _.Z.dispatch({
            type: 'CACHED_EMOJIS_LOADED',
            emojis: t
        });
}
function eu(e) {
    return new E.ZP({
        computeBonus: () => 100,
        computeWeight: (e) => {
            let t = 1;
            return e <= 3 ? (t = 100) : e <= 15 ? (t = 70) : e <= 30 ? (t = 50) : e <= 45 ? (t = 30) : e <= 80 && (t = 10), t;
        },
        lookupKey: (e) => {
            var t;
            return null !== (t = B.ZP.getByName(e)) && void 0 !== t ? t : es(e);
        },
        afterCompute: () => {
            e(), (et = q.slice(0)), !o().some(en, (e) => e.usableEmojis.length > 0) && et.splice(q.indexOf(j.UX.CUSTOM), 1);
        },
        numFrequentlyItems: 42
    });
}
class ec {
    static get(e) {
        return void 0 === e && (e = null), (null == ec._lastInstance || ec._lastInstance.guildId !== e) && (ec._lastInstance = new ec(e)), ec._lastInstance;
    }
    static reset() {
        ec._lastInstance = null;
    }
    static resetFrequentlyUsed() {
        null != ec._lastInstance && (ec._lastInstance.frequentlyUsed = null);
    }
    static resetFrequentlyUsedReactionEmojis() {
        null != ec._lastInstance && (ec._lastInstance.frequentlyUsedReactionEmojis = null);
    }
    static resetFavorites() {
        null != ec._lastInstance && ((ec._lastInstance.favorites = null), (ec._lastInstance.favoriteNamesAndIds = null));
    }
    static clear(e) {
        null != ec._lastInstance && ec._lastInstance.guildId === e && (ec._lastInstance = null);
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
        if (((null == this.emojisByName || null == this.unicodeAliases) && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisByName, e))) return this.emojisByName[e];
        if (Object.prototype.hasOwnProperty.call(this.unicodeAliases, e)) {
            let t = this.unicodeAliases[e];
            if (Object.prototype.hasOwnProperty.call(this.emojisByName, t)) return this.emojisByName[t];
        }
    }
    getEmoticonByName(e) {
        if ((null == this.emoticonsByName && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emoticonsByName, e))) return this.emoticonsByName[e];
    }
    getById(e) {
        if ((null == this.emojisById && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisById, e))) return this.emojisById[e];
    }
    getCustomEmoticonRegex() {
        return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), null == this.emoticonRegex && null != this.escapedEmoticonNames && '' !== this.escapedEmoticonNames && (this.emoticonRegex = new RegExp('^\\b('.concat(this.escapedEmoticonNames, ')\\b'))), this.emoticonRegex;
    }
    getFrequentlyUsedEmojisWithoutFetchingLatest() {
        if ((this.ensureDisambiguated(), null != this.frequentlyUsed)) return this.frequentlyUsed;
        let e = ed.frequently.map((e) => (null != e.id ? this.getById(e.id) : B.ZP.getByName(e.name))).filter(P.lm),
            t = (0, H.Z)(e);
        return (this.frequentlyUsed = [...t.values()]), this.frequentlyUsed;
    }
    getFrequentlyUsedReactionEmojisWithoutFetchingLatest() {
        if ((this.ensureDisambiguated(), null != this.frequentlyUsedReactionEmojis)) return this.frequentlyUsedReactionEmojis;
        let e = e_.frequently.map((e) => (null != e.id ? this.getById(e.id) : B.ZP.getByName(e.name))).filter(P.lm),
            t = (0, H.Z)(e);
        return (this.frequentlyUsedReactionEmojis = [...t.values()]), this.frequentlyUsedReactionEmojis;
    }
    rebuildFavoriteEmojisWithoutFetchingLatest() {
        var e, t;
        if ((this.ensureDisambiguated(), null != this.favorites && null != this.favoriteNamesAndIds))
            return {
                favorites: this.favorites,
                favoriteNamesAndIds: this.favoriteNamesAndIds
            };
        let n = (null !== (t = null === (e = O.Z.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== t ? t : [])
                .map((e) => {
                    var t;
                    return null !== (t = this.getById(e)) && void 0 !== t ? t : B.ZP.getByName(e);
                })
                .filter(P.lm),
            r = (0, H.Z)(n);
        return (
            (this.favorites = [...r.values()]),
            (this.favoriteNamesAndIds = new Set(r.keys())),
            {
                favorites: this.favorites,
                favoriteNamesAndIds: this.favoriteNamesAndIds
            }
        );
    }
    get favoriteEmojisWithoutFetchingLatest() {
        return this.rebuildFavoriteEmojisWithoutFetchingLatest().favorites;
    }
    getEmojiInPriorityOrderWithoutFetchingLatest() {
        let { canShowReactionsOnMessageHover: e } = N.Z.getCurrentConfig({ location: 'getEmojiInPriorityOrderWithoutFetchingLatest' }, { autoTrackExposure: !0 }),
            { frecencyAlgorithm: t } = k.Z.getCurrentConfig({ location: 'getEmojiInPriorityOrderWithoutFetchingLatest' }, { autoTrackExposure: !0 }),
            n = e || 'original' !== t ? this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest() : this.getFrequentlyUsedEmojisWithoutFetchingLatest(),
            r = new Set();
        return this.favoriteEmojisWithoutFetchingLatest.concat(n).filter((e) => !r.has(e) && (r.add(e), !0));
    }
    getTopEmojiWithoutFetchingLatest(e) {
        if ((this.ensureDisambiguated(), null == this.topEmojis)) {
            var t;
            let n = ea.get(e),
                r = V.Z.getTopEmojiIdsByGuildId(e);
            if (null == n && null == r) return J;
            let i = (null !== (t = null == n ? void 0 : n.emojiIds) && void 0 !== t ? t : r).map((e) => {
                    var t;
                    return null !== (t = this.getById(e)) && void 0 !== t ? t : B.ZP.getByName(B.ZP.convertSurrogateToName(e, !1));
                }),
                a = [];
            i.forEach((e) => {
                null != e && a.push(e);
            });
            let s = this.getNewlyAddedEmojiForGuild(e).map((e) => e.id);
            this.topEmojis = a.filter((e) => !s.includes(e.id));
        }
        return this.topEmojis;
    }
    getNewlyAddedEmojiForGuild(e) {
        if ((this.ensureDisambiguated(), null == this.newlyAddedEmoji)) return J;
        let t = this.newlyAddedEmoji[e];
        return null == t ? J : t;
    }
    getEscapedCustomEmoticonNames() {
        return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames;
    }
    nameMatchesChain(e) {
        return o()(this.getDisambiguatedEmoji()).filter((t) => {
            let { id: n, names: r, name: i } = t,
                a = null != r && o().some(r, e),
                s = null != i && e(i),
                l = null != i && o().some(m.Z.getTermsForEmoji(i), e),
                u = null != n && o().some(F.Z.getCaptionsForEmojiById({ emojiId: n }), e);
            return a || s || l || u;
        });
    }
    _buildDisambiguatedCustomEmoji() {
        let e = {},
            t = [];
        (this.emoticonRegex = null), (this.frequentlyUsed = null), (this.frequentlyUsedReactionEmojis = null), (this.disambiguatedEmoji = []), (this.unicodeAliases = Object.create(null)), (this.customEmojis = Object.create(null)), (this.groupedCustomEmojis = Object.create(null)), (this.emoticonsByName = Object.create(null)), (this.emojisByName = Object.create(null)), (this.emojisById = Object.create(null)), (this.newlyAddedEmoji = Object.create(null));
        let n = (t) => {
                var n, r;
                let i = t.name,
                    a = null !== (n = e[i]) && void 0 !== n ? n : 0;
                if (((e[i] = a + 1), a > 0)) {
                    let e = ''.concat(i, '~').concat(a);
                    t = {
                        ...t,
                        name: e,
                        originalName: i,
                        allNamesString: ':'.concat(e, ':')
                    };
                }
                if (((this.emojisByName[t.name] = t), 'names' in t && (null === (r = t.names) || void 0 === r || r.slice(1).forEach((e) => (this.unicodeAliases[e] = t.name))), null != t.id)) {
                    let e, n;
                    if (((this.emojisById[t.id] = t), (this.customEmojis[t.name] = t), t.type === x.B.GUILD)) (e = t.guildId), (n = !0);
                    null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : (this.groupedCustomEmojis[e] = [t]), n && w.default.compare(t.id, $) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : (this.newlyAddedEmoji[e] = [t])));
                }
                null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t);
            },
            r = (e) => {
                if (!Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name)) t.push(U.Z.escape(e.name)), (this.emoticonsByName[e.name] = e);
            };
        B.ZP.forEach(n);
        let i = (e) => {
            let t = en[null == e ? Y.kod : e];
            null != t && (o().each(t.usableEmojis, n), o().each(t.emoticons, r));
        };
        for (let e in (i(this.guildId), this.newlyAddedEmoji)) null != this.newlyAddedEmoji[e] ? (this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => w.default.compare(t.id, e.id)).slice(0, 3)) : (this.newlyAddedEmoji[e] = []);
        D.ZP.getFlattenedGuildIds().forEach((e) => {
            e !== this.guildId && i(e);
        }),
            (this.escapedEmoticonNames = t.join('|'));
    }
    constructor(e) {
        K(this, 'guildId', void 0),
            K(this, 'emoticonRegex', null),
            K(this, 'frequentlyUsed', null),
            K(this, 'favorites', null),
            K(this, 'favoriteNamesAndIds', null),
            K(this, 'topEmojis', null),
            K(this, 'escapedEmoticonNames', null),
            K(this, 'disambiguatedEmoji', null),
            K(this, 'customEmojis', void 0),
            K(this, 'groupedCustomEmojis', void 0),
            K(this, 'emoticonsByName', void 0),
            K(this, 'emojisByName', void 0),
            K(this, 'emojisById', void 0),
            K(this, 'unicodeAliases', void 0),
            K(this, 'newlyAddedEmoji', null),
            K(this, 'frequentlyUsedReactionEmojis', null),
            K(this, 'isFavoriteEmojiWithoutFetchingLatest', (e) => {
                var t;
                if (null == e) return !1;
                let { favoriteNamesAndIds: n } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
                if (null != e.id) return n.has(e.id);
                let r = null !== (t = B.ZP.convertSurrogateToBase(e.surrogates)) && void 0 !== t ? t : e;
                return n.has(r.name);
            }),
            (this.guildId = e);
    }
}
K(ec, '_lastInstance', null);
let ed = eu(ec.resetFrequentlyUsed),
    e_ = eu(ec.resetFrequentlyUsedReactionEmojis);
function eE() {
    (en = {}), (er = {}), ec.reset(), ea.clear(), (ee = 3);
}
function ef(e) {
    if (null != en[e]) delete en[e];
}
function eh() {
    (er = null), ec.reset(), (3 === ee || 1 === ee) && (ed.compute(), e_.compute());
}
function ep(e, t) {
    if ((ef(e), ec.clear(e), null == t)) return;
    let n = L.default.getCurrentUser();
    if (null == n) return;
    let r = (0, A.r)(e);
    en[e] = new X(e, n.id, t, r);
}
function em() {
    var e, t, n, r, i, a;
    let s = null === (t = O.Z.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
    null != s && B.ZP.setDefaultDiversitySurrogate(s), ec.reset();
    let l = O.Z.frecencyWithoutFetchingLatest,
        u = null !== (i = null === (n = l.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== i ? i : {},
        c = null !== (a = null === (r = l.emojiReactionFrecency) || void 0 === r ? void 0 : r.emojis) && void 0 !== a ? a : {};
    ed.overwriteHistory(
        o().mapValues(u, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        Q.pendingUsages
    ),
        e_.overwriteHistory(
            o().mapValues(c, (e) => ({
                ...e,
                recentUses: e.recentUses.map(Number).filter((e) => e > 0)
            })),
            Q.emojiReactionPendingUsages
        ),
        !(function (e, t) {
            let { canSplitFrecencyList: n } = G.Z.getCurrentConfig({ location: 'populateInitialFrecencyData' }, { autoTrackExposure: !0 });
            if (o().isEmpty(e) && o().isEmpty(Q.pendingUsages) && O.Z.hasLoaded(W.yP.FRECENCY_AND_FAVORITES_SETTINGS)) for (let e of ['thumbsup', 'thumbsup', 'eyes', 'eyes', 'laughing', 'laughing', 'watermelon', 'fork_and_knife', 'yum', 'weary', 'tired_face', 'poop', '100']) ed.track(e);
            if (n && o().isEmpty(t) && o().isEmpty(Q.emojiReactionPendingUsages) && O.Z.hasLoaded(W.yP.FRECENCY_AND_FAVORITES_SETTINGS)) for (let e of ['100', '100', 'thumbsup', 'thumbsup', 'thumbsdown', 'thumbsdown', 'heart', 'point_up', 'eyes', 'weary', 'laughing', 'white_check_mark', 'x']) e_.track(e);
        })(u, c);
}
function eI() {
    if (!I.Z.hasLoadedExperiments) return;
    let { frecencyAlgorithm: e } = k.Z.getCurrentConfig({ location: 'handleExperimentsChange' }, { autoTrackExposure: !0 }),
        t = E.M$[e],
        n = E.KX[e];
    e !== z && e_.replaceEntryComputeFunctions(t, n, 'original' !== e), (z = e);
}
function eT(e) {
    if (null == e) return !1;
    for (let r of e) {
        var t, n;
        let e = null !== (n = null !== (t = r.id) && void 0 !== t ? t : r.uniqueName) && void 0 !== n ? n : r.name;
        null != e &&
            (ed.track(e),
            Q.pendingUsages.push({
                key: e,
                timestamp: Date.now()
            }));
    }
    let r = e.length > 0;
    return r && (3 === ee || 1 === ee) && ed.compute(), r;
}
function eg(e) {
    let { guildId: t, role: n } = e;
    if (!(0, T.Z)(n)) return !1;
    {
        let e = en[t];
        ep(t, null == e ? void 0 : e.emojis), eh();
    }
}
class eS extends (i = d.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(f.Z, C.Z, R.ZP, y.Z, v.default, S.Z, V.Z, L.default, I.Z), null != e && (null != e.pendingUsages && (Q.pendingUsages = e.pendingUsages), null != e.emojiReactionPendingUsages && (Q.emojiReactionPendingUsages = e.emojiReactionPendingUsages), null != e.expandedSectionsByGuildIds && (Q.expandedSectionsByGuildIds = new Set(e.expandedSectionsByGuildIds))), this.syncWith([O.Z], em), this.syncWith([I.Z], eI);
    }
    getState() {
        return Q;
    }
    get loadState() {
        return ee;
    }
    hasPendingUsage() {
        return Q.pendingUsages.length > 0 || Q.emojiReactionPendingUsages.length > 0;
    }
    get expandedSectionsByGuildIds() {
        return Q.expandedSectionsByGuildIds;
    }
    get categories() {
        return et;
    }
    get diversitySurrogate() {
        var e;
        return null !== (e = B.ZP.getDefaultDiversitySurrogate()) && void 0 !== e ? e : '';
    }
    get emojiFrecencyWithoutFetchingLatest() {
        return ed;
    }
    get emojiReactionFrecencyWithoutFetchingLatest() {
        return e_;
    }
    getGuildEmoji(e) {
        var t;
        el();
        let n = en[e];
        return null !== (t = null == n ? void 0 : n.emojis) && void 0 !== t ? t : [];
    }
    getUsableGuildEmoji(e) {
        var t;
        el();
        let n = en[e];
        return null !== (t = null == n ? void 0 : n.usableEmojis) && void 0 !== t ? t : [];
    }
    getGuilds() {
        return en;
    }
    getDisambiguatedEmojiContext(e) {
        return el(), ec.get(e);
    }
    getSearchResultsOrder(e, t, n, r) {
        let i = t.toLowerCase(),
            a = U.Z.escape(i),
            { canSplitFrecencyList: s } = G.Z.getCurrentConfig({ location: 'getSearchResultsOrder' }, { autoTrackExposure: !0 });
        if (e.length > 0) {
            let t = RegExp('^'.concat(a), 'i'),
                n = new RegExp('(^|_|[A-Z])'.concat(a, 's?([A-Z]|_|$)')),
                l = n.test.bind(n),
                u = t.test.bind(t),
                c = function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                    if (null == e || null == t) return 0;
                    let n = e.toLowerCase(),
                        a = 1 + (n === i ? 4 : 0) + (l(n) || l(e) ? 2 : 0) + (u(e) ? 1 : 0),
                        o = r === Z.Hz.REACTION && s ? e_.getScore(t) : ed.getScore(t);
                    return null != o && (a *= o / 100), a;
                };
            e = o().orderBy(e, [(e) => (null != e.names ? c(e.names[0]) : c(e.name, e.id)), (e) => (null != e.names ? e.names[0] : e.name)], ['desc', 'asc']);
        }
        return n > 0 && (e = e.slice(0, n)), e;
    }
    searchWithoutFetchingLatest(e) {
        let t,
            { channel: n, query: r, count: i = 0, intention: a, includeExternalGuilds: s = !0, matchComparator: o } = e;
        el();
        let l = r.toLowerCase().replaceAll(/[ _]/g, ''),
            u = U.Z.escape(l);
        if (null == o) {
            let e = RegExp(''.concat(u), 'i');
            t = (t) => e.test(t.replaceAll('_', ''));
        } else t = o;
        let c = null != n ? n.getGuildId() : null,
            d = ec
                .get(c)
                .nameMatchesChain(t)
                .reduce(
                    (e, t) => {
                        let r = M.ZP.getEmojiUnavailableReason({
                            emoji: t,
                            channel: n,
                            intention: a,
                            forceIncludeExternalGuilds: s
                        });
                        return r === Z.Z5.PREMIUM_LOCKED ? e.locked.push(t) : null == r && e.unlocked.push(t), e;
                    },
                    {
                        unlocked: [],
                        locked: []
                    }
                );
        return {
            unlocked: this.getSearchResultsOrder(d.unlocked, r, i, a),
            locked: this.getSearchResultsOrder(d.locked, r, 0, a)
        };
    }
    getUsableCustomEmojiById(e) {
        return el(), es(e);
    }
    getCustomEmojiById(e) {
        return (
            el(),
            (function (e) {
                var t, n;
                let r = eo()[e];
                return null != r && null !== (n = null === (t = en[r]) || void 0 === t ? void 0 : t.getEmoji(e)) && void 0 !== n ? n : void 0;
            })(e)
        );
    }
    getTopEmoji(e) {
        return null == e ? J : (el(), ec.get(e).getTopEmojiWithoutFetchingLatest(e));
    }
    getNewlyAddedEmoji(e) {
        return null == e ? J : (el(), ec.get(e).getNewlyAddedEmojiForGuild(e));
    }
    getTopEmojisMetadata(e) {
        return ea.get(e);
    }
    getEmojiAutosuggestion(e) {
        if (null != ei && ei.length > 0) {
            let { locked: t, unlocked: n } = this.searchWithoutFetchingLatest({
                channel: e,
                count: 10,
                query: ei,
                intention: Z.Hz.CHAT
            });
            return [...n.slice(0, 5), ...t.slice(0, 5)].slice(0, 5);
        }
        return [];
    }
    hasUsableEmojiInAnyGuild() {
        return el(), w.default.keys(en).some((e) => en[e].usableEmojis.length > 0);
    }
    hasFavoriteEmojis(e) {
        let t = ec.get(e);
        return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
    }
}
K(eS, 'displayName', 'EmojiStore'),
    K(eS, 'persistKey', 'EmojiStoreV2'),
    K(eS, 'migrations', [(e) => ({ ...e })]),
    (t.ZP = new eS(_.Z, {
        LOGOUT: function () {
            (Q.pendingUsages = []), (Q.emojiReactionPendingUsages = []);
        },
        BACKGROUND_SYNC: function () {
            eE();
        },
        CONNECTION_OPEN: function (e) {
            for (let t of (eE(), e.guilds)) ep(t.id, t.emojis);
            (ee = e.guilds.every((e) => null != e.emojis) ? 1 : 0), eh();
        },
        CACHED_EMOJIS_LOADED: function (e) {
            let { emojis: t } = e;
            for (let [e, n] of t) !Object.hasOwn(en, e) && C.Z.isMember(e) && ep(e, n);
            eh();
        },
        GUILD_MEMBER_UPDATE: function (e) {
            var t;
            let { guildId: n, user: r } = e;
            if (r.id !== (null === (t = L.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
            let i = en[n];
            ep(n, null == i ? void 0 : i.usableEmojis), eh();
        },
        GUILD_CREATE: function (e) {
            1 === ee && null == e.guild.emojis && null != e.guild.emojiUpdates && (ee = 0), ep(e.guild.id, e.guild.emojis), eh();
        },
        GUILD_UPDATE: function (e) {
            ep(e.guild.id, e.guild.emojis), eh();
        },
        GUILD_EMOJIS_UPDATE: function (e) {
            let { guildId: t, emojis: n } = e;
            ep(t, n), eh();
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            ef(t.id), ea.delete(t.id), eh();
        },
        MESSAGE_REACTION_ADD: function (e) {
            if (!e.optimistic) return !1;
            let t = null != e.emoji.id && '0' !== e.emoji.id ? e.emoji : B.ZP.getByName(B.ZP.convertSurrogateToName(e.emoji.name, !1));
            if (null == t) return !1;
            (function (e) {
                if (null == e) return 0;
                for (let r of e) {
                    var t, n;
                    let e = null !== (n = null !== (t = r.id) && void 0 !== t ? t : r.uniqueName) && void 0 !== n ? n : r.name;
                    null != e &&
                        (e_.track(e),
                        Q.emojiReactionPendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        }));
                }
                let r = e.length > 0;
                r && (3 === ee || 1 === ee) && e_.compute();
            })([t]),
                eT([t]);
        },
        EMOJI_TRACK_USAGE: function (e) {
            let { emojiUsed: t } = e;
            eT(t);
        },
        USER_SETTINGS_PROTO_UPDATE: function (e) {
            let {
                settings: { type: t },
                wasSaved: n
            } = e;
            if ((m.Z.setEmojiLocale(v.default.locale), t !== W.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n)) return !1;
            (Q.pendingUsages = []), (Q.emojiReactionPendingUsages = []);
        },
        GUILD_ROLE_CREATE: eg,
        GUILD_ROLE_UPDATE: eg,
        TOP_EMOJIS_FETCH_SUCCESS: function (e) {
            let { guildId: t, topEmojisMetadata: n } = e;
            ea.set(t, {
                emojiIds: n.map((e) => e.emojiId),
                topEmojisTTL: u()(u()()).add(1, 'days').valueOf()
            });
        },
        EMOJI_AUTOSUGGESTION_UPDATE: function (e) {
            let { text: t } = e;
            ei = t;
        },
        TOGGLE_GUILD_EXPANDED_STATE: function (e) {
            let { guildId: t } = e,
                n = new Set(Q.expandedSectionsByGuildIds);
            Q.expandedSectionsByGuildIds.has(t) ? n.delete(t) : n.add(t),
                (Q = {
                    ...Q,
                    expandedSectionsByGuildIds: n
                });
        }
    }));
