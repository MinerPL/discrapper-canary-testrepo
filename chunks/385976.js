"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ef
  }
}), n("222007"), n("581081"), n("424973"), n("686130"), n("781738"), n("808653");
var i = n("917351"),
  s = n.n(i),
  r = n("866227"),
  a = n.n(r),
  o = n("102053"),
  l = n("446674"),
  u = n("913144"),
  d = n("80507"),
  c = n("802493"),
  f = n("595525"),
  _ = n("629538"),
  h = n("39616"),
  g = n("828674"),
  m = n("153043"),
  E = n("256941"),
  p = n("505985"),
  v = n("166465"),
  S = n("915639"),
  T = n("374363"),
  I = n("26989"),
  C = n("778689"),
  A = n("305961"),
  y = n("677099"),
  N = n("697218"),
  R = n("315102"),
  O = n("718517"),
  D = n("402671"),
  P = n("449008"),
  b = n("655518"),
  L = n("299039"),
  M = n("858619"),
  U = n("867805"),
  k = n("802461"),
  w = n("26430"),
  V = n("958706"),
  G = n("115279"),
  F = n("397336");
let x = [G.EmojiCategories.TOP_GUILD_EMOJI.toString(), G.EmojiCategories.FAVORITES.toString(), G.EmojiCategories.RECENT.toString(), G.EmojiCategories.CUSTOM.toString()].concat(U.default.getCategories()),
  B = {
    pendingUsages: []
  };
class H {
  getEmoji(e) {
    return this.build(), this._emojiMap[e]
  }
  getUsableEmoji(e) {
    let t = this.getEmoji(e);
    return null != t && this.isUsable(t) ? t : null
  }
  isUsable(e) {
    if (0 === e.roles.length) return !0;
    let t = I.default.getMember(this.id, this._userId);
    if (null == t) return !1;
    let n = t.roles.some(t => e.roles.includes(t));
    return !!(n || (0, m.isPurchasableRoleSubscriptionEmoji)(e)) || !1
  }
  get rawEmojis() {
    return this._emojis
  }
  get emojis() {
    return this.build(), this._emojis
  }
  get emoticons() {
    return this.build(), this._emoticons
  }
  get usableEmojis() {
    return this.build(), this._usableEmojis
  }
  build() {
    this._dirty && (this._dirty = !1, this._emojis.forEach(e => {
      e.url = R.default.getEmojiURL({
        id: e.id,
        animated: e.animated,
        size: 48
      }), e.allNamesString = ":".concat(e.name, ":"), e.guildId = this.id, e.type = M.EmojiTypes.GUILD, this._emojiMap[e.id] = e
    }), this._usableEmojis = s.sortBy(this._emojis.filter(e => this.isUsable(e)), e => e.name), this._emoticons = this._usableEmojis.filter(e => !e.require_colons))
  }
  constructor(e, t, n, i = !1) {
    this._dirty = !0, this._emojiMap = {}, this._emoticons = [], this._usableEmojis = [], this._canSeeServerSubIAP = !1, this._totalUsable = 0, this.id = e, this._userId = t, this._emojis = n, this._canSeeServerSubIAP = i
  }
}
let Y = L.default.fromTimestamp(Date.now() - 60 * O.default.Millis.DAY),
  j = [],
  W = 2,
  K = x.slice(0),
  z = {},
  q = new Map,
  X = {},
  Q = null,
  Z = new Map;

function J(e) {
  var t, n, i;
  let s = $()[e];
  return null != s ? null !== (i = null === (t = z[s]) || void 0 === t ? void 0 : t.getUsableEmoji(e)) && void 0 !== i ? i : null === (n = q.get(s)) || void 0 === n ? void 0 : n.emojiById[e] : null
}

function $() {
  if (ee(), null == X) {
    for (let e in X = {}, z) {
      let t = z[e];
      for (let n of t.rawEmojis) X[n.id] = e
    }
    for (let [t, n] of q) {
      var e;
      for (let i of null !== (e = null == n ? void 0 : n.content.emojis) && void 0 !== e ? e : []) X[i.id] = t
    }
  }
  return X
}

function ee() {
  if (0 !== W) return;
  let e = c.default.database();
  if (null == e) return;
  W = 2;
  let t = (0, f.tryLoadOrResetCacheGateway)("EmojiStore.loadSavedEmojis", () => o.default.time("\uD83D\uDCBE", "loadSavedEmojis", () => _.default.getSync(e)));
  if (null != t) {
    for (let [e, n] of t) !Object.hasOwn(z, e) && C.default.isMember(e) && ea(e, n);
    er()
  }
}
class et {
  static get(e) {
    return void 0 === e && (e = null), (null == et._lastInstance || et._lastInstance.guildId !== e) && (et._lastInstance = new et(e)), et._lastInstance
  }
  static reset() {
    et._lastInstance = null
  }
  static resetFrequentlyUsed() {
    null != et._lastInstance && (et._lastInstance.frequentlyUsed = null)
  }
  static resetFavorites() {
    null != et._lastInstance && (et._lastInstance.favorites = null, et._lastInstance.favoriteNamesAndIds = null)
  }
  static clear(e) {
    null != et._lastInstance && et._lastInstance.guildId === e && (et._lastInstance = null)
  }
  ensureDisambiguated() {
    null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji()
  }
  getDisambiguatedEmoji() {
    return null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji(), this.disambiguatedEmoji
  }
  getCustomEmoji() {
    return null == this.customEmojis && this._buildDisambiguatedCustomEmoji(), this.customEmojis
  }
  getGroupedCustomEmoji() {
    return null == this.groupedCustomEmojis && this._buildDisambiguatedCustomEmoji(), this.groupedCustomEmojis
  }
  getByName(e) {
    if ((null == this.emojisByName || null == this.unicodeAliases) && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisByName, e)) return this.emojisByName[e];
    if (Object.prototype.hasOwnProperty.call(this.unicodeAliases, e)) {
      let t = this.unicodeAliases[e];
      if (Object.prototype.hasOwnProperty.call(this.emojisByName, t)) return this.emojisByName[t]
    }
  }
  getEmoticonByName(e) {
    if (null == this.emoticonsByName && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emoticonsByName, e)) return this.emoticonsByName[e]
  }
  getById(e) {
    if (null == this.emojisById && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisById, e)) return this.emojisById[e]
  }
  getCustomEmoticonRegex() {
    return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), null == this.emoticonRegex && null != this.escapedEmoticonNames && "" !== this.escapedEmoticonNames && (this.emoticonRegex = new RegExp("^\\b(".concat(this.escapedEmoticonNames, ")\\b"))), this.emoticonRegex
  }
  getFrequentlyUsedEmojisWithoutFetchingLatest() {
    return this.ensureDisambiguated(), null == this.frequentlyUsed && (this.frequentlyUsed = en.frequently.map(e => null != e.id ? this.getById(e.id) : null != e.name ? U.default.getByName(e.name) : void 0).filter(P.isNotNullish)), this.frequentlyUsed
  }
  rebuildFavoriteEmojisWithoutFetchingLatest() {
    if (this.ensureDisambiguated(), null == this.favorites || null == this.favoriteNamesAndIds) {
      var e, t;
      this.favoriteNamesAndIds = new Set, this.favorites = (null !== (t = null === (e = T.default.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== t ? t : []).map(e => {
        var t;
        null === (t = this.favoriteNamesAndIds) || void 0 === t || t.add(e);
        let n = this.getById(e);
        return null == n && (n = U.default.getByName(e)), n
      }).filter(P.isNotNullish)
    }
    return [this.favorites, this.favoriteNamesAndIds]
  }
  get favoriteEmojisWithoutFetchingLatest() {
    return this.rebuildFavoriteEmojisWithoutFetchingLatest()[0]
  }
  getEmojiInPriorityOrderWithoutFetchingLatest() {
    let e = new Set;
    return this.favoriteEmojisWithoutFetchingLatest.concat(this.getFrequentlyUsedEmojisWithoutFetchingLatest()).filter(t => !e.has(t) && (e.add(t), !0))
  }
  getTopEmojiWithoutFetchingLatest(e) {
    if (this.ensureDisambiguated(), null == this.topEmojis) {
      var t;
      let n = Z.get(e),
        i = w.default.getTopEmojiIdsByGuildId(e);
      if (null == n && null == i) return j;
      let s = null !== (t = null == n ? void 0 : n.emojiIds) && void 0 !== t ? t : i,
        r = s.map(e => {
          var t;
          return null !== (t = this.getById(e)) && void 0 !== t ? t : U.default.getByName(U.default.convertSurrogateToName(e, !1))
        }),
        a = [];
      r.forEach(e => {
        null != e && a.push(e)
      });
      let o = this.getNewlyAddedEmojiForGuild(e).map(e => e.id);
      this.topEmojis = a.filter(e => !o.includes(e.id))
    }
    return this.topEmojis
  }
  getNewlyAddedEmojiForGuild(e) {
    if (this.ensureDisambiguated(), null == this.newlyAddedEmoji) return j;
    let t = this.newlyAddedEmoji[e];
    return null == t ? j : t
  }
  getEscapedCustomEmoticonNames() {
    return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames
  }
  nameMatchesChain(e) {
    return s(this.getDisambiguatedEmoji()).filter(t => {
      let {
        id: n,
        names: i,
        name: r
      } = t, a = null != i && s.some(i, e), o = null != r && e(r), l = null != r && s.some(h.default.getTermsForEmoji(r), e), u = null != n && s.some(k.default.getCaptionsForEmojiById({
        emojiId: n
      }), e);
      return a || o || l || u
    })
  }
  _buildDisambiguatedCustomEmoji() {
    let e = {},
      t = [];
    this.emoticonRegex = null, this.frequentlyUsed = null, this.disambiguatedEmoji = [], this.unicodeAliases = Object.create(null), this.customEmojis = Object.create(null), this.groupedCustomEmojis = Object.create(null), this.emoticonsByName = Object.create(null), this.emojisByName = Object.create(null), this.emojisById = Object.create(null), this.newlyAddedEmoji = Object.create(null);
    let n = t => {
        var n, i;
        let s = t.name,
          r = null !== (n = e[s]) && void 0 !== n ? n : 0;
        if (e[s] = r + 1, r > 0) {
          let e = "".concat(s, "~").concat(r);
          t = {
            ...t,
            name: e,
            originalName: s,
            allNamesString: ":".concat(e, ":")
          }
        }
        if (this.emojisByName[t.name] = t, "names" in t && (null === (i = t.names) || void 0 === i || i.slice(1).forEach(e => this.unicodeAliases[e] = t.name)), null != t.id) {
          let e, n;
          switch (this.emojisById[t.id] = t, this.customEmojis[t.name] = t, t.type) {
            case M.EmojiTypes.GUILD:
              e = t.guildId, n = !0;
              break;
            case M.EmojiTypes.PACK:
              e = t.packId
          }
          null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : this.groupedCustomEmojis[e] = [t], n && L.default.compare(t.id, Y) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : this.newlyAddedEmoji[e] = [t]))
        }
        null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t)
      },
      i = e => {
        !Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) && (t.push(b.default.escape(e.name)), this.emoticonsByName[e.name] = e)
      };
    U.default.forEach(n);
    let r = e => {
      let t = z[null == e ? "null" : e];
      null != t && (s.each(t.usableEmojis, n), s.each(t.emoticons, i))
    };
    r(this.guildId);
    for (let e in this.newlyAddedEmoji) null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => L.default.compare(t.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[e] = [];
    y.default.getFlattenedGuildIds().forEach(e => {
      e !== this.guildId && r(e)
    }), v.default.getPacksForUser().map(e => {
      null != e.content.emojis && s.each(e.content.emojis, n)
    }), this.escapedEmoticonNames = t.join("|")
  }
  constructor(e) {
    this.emoticonRegex = null, this.frequentlyUsed = null, this.favorites = null, this.favoriteNamesAndIds = null, this.topEmojis = null, this.escapedEmoticonNames = null, this.disambiguatedEmoji = null, this.newlyAddedEmoji = null, this.isFavoriteEmojiWithoutFetchingLatest = e => {
      var t;
      if (null == e) return !1;
      let n = this.rebuildFavoriteEmojisWithoutFetchingLatest()[1];
      return null != e.id ? n.has(e.id) : n.has(null !== (t = e.name) && void 0 !== t ? t : "")
    }, this.guildId = e
  }
}
et._lastInstance = null;
let en = new d.default({
  computeBonus: () => 100,
  computeWeight: e => {
    let t = 0;
    return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
  },
  lookupKey: e => {
    var t;
    return null !== (t = U.default.getByName(e)) && void 0 !== t ? t : J(e)
  },
  afterCompute: () => {
    et.resetFrequentlyUsed(), K = x.slice(0), !s.some(z, e => e.usableEmojis.length > 0) && K.splice(x.indexOf(G.EmojiCategories.CUSTOM), 1)
  },
  numFrequentlyItems: 42
});

function ei() {
  z = {}, q.clear(), X = {}, et.reset(), Z.clear(), W = 2
}

function es(e) {
  let t = z[e];
  null != t && delete z[e]
}

function er() {
  X = null, et.reset(), 0 !== W && en.compute()
}

function ea(e, t) {
  if (es(e), et.clear(e), null == t) return;
  let n = N.default.getCurrentUser();
  if (null == n) return;
  let i = (0, p.canUseRoleSubscriptionIAP)(e);
  z[e] = new H(e, n.id, t, i)
}

function eo() {
  var e, t, n, i;
  let r = T.default.settings,
    a = null === (t = r.textAndImages) || void 0 === t ? void 0 : null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
  null != a && U.default.setDefaultDiversitySurrogate(a), et.reset();
  let o = T.default.frecencyWithoutFetchingLatest,
    l = null !== (i = null === (n = o.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== i ? i : {};
  en.overwriteHistory(s.mapValues(l, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), B.pendingUsages), s.isEmpty(l) && s.isEmpty(B.pendingUsages) && T.default.hasLoaded(F.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (en.track("thumbsup"), en.track("thumbsup"), en.track("eyes"), en.track("eyes"), en.track("laughing"), en.track("laughing"), en.track("watermelon"), en.track("fork_and_knife"), en.track("yum"), en.track("weary"), en.track("tired_face"), en.track("poop"), en.track("100"))
}

function el(e) {
  for (let i of e) {
    var t, n;
    let e = null !== (n = null !== (t = i.id) && void 0 !== t ? t : i.uniqueName) && void 0 !== n ? n : i.name;
    null != e && (en.track(e), B.pendingUsages.push({
      key: e,
      timestamp: Date.now()
    }))
  }
  let i = e.length > 0;
  return i && 0 !== W && en.compute(), i
}

function eu(e) {
  let {
    guildId: t,
    role: n
  } = e;
  if (!(0, g.isSubscriptionRole)(n)) return !1;
  {
    let e = z[t];
    ea(t, null == e ? void 0 : e.emojis), er()
  }
}

function ed() {
  q = v.default.getPacksById(), er()
}
class ec extends l.default.PersistedStore {
  initialize(e) {
    this.waitFor(c.default, C.default, I.default, A.default, v.default, S.default, E.default, w.default, N.default), null != e && (B = e), this.syncWith([T.default], eo), this.syncWith([v.default], ed)
  }
  getState() {
    return B
  }
  hasPendingUsage() {
    return B.pendingUsages.length > 0
  }
  get categories() {
    return K
  }
  get diversitySurrogate() {
    var e;
    return null !== (e = U.default.getDefaultDiversitySurrogate()) && void 0 !== e ? e : ""
  }
  get emojiFrecencyWithoutFetchingLatest() {
    return en
  }
  getGuildEmoji(e) {
    var t;
    ee();
    let n = z[e];
    return null !== (t = null == n ? void 0 : n.emojis) && void 0 !== t ? t : []
  }
  getUsableGuildEmoji(e) {
    var t;
    ee();
    let n = z[e];
    return null !== (t = null == n ? void 0 : n.usableEmojis) && void 0 !== t ? t : []
  }
  getGuilds() {
    return z
  }
  getDisambiguatedEmojiContext(e) {
    return ee(), et.get(e)
  }
  getSearchResultsOrder(e, t, n) {
    let i = t.toLowerCase(),
      r = b.default.escape(i);
    if (e.length > 0) {
      let t = RegExp("^".concat(r), "i"),
        n = new RegExp("(^|_|[A-Z])".concat(r, "s?([A-Z]|_|$)")),
        a = n.test.bind(n),
        o = t.test.bind(t),
        l = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
          if (null == e || null == t) return 0;
          let n = e.toLowerCase(),
            s = 1 + (n === i ? 4 : 0) + (a(n) || a(e) ? 2 : 0) + (o(e) ? 1 : 0),
            r = en.getScore(t);
          return null != r && (s *= r / 100), s
        };
      e = s.orderBy(e, [e => null != e.names ? l(e.names[0]) : l(e.name, e.id), e => null != e.names ? e.names[0] : e.name], ["desc", "asc"])
    }
    return n > 0 && (e = e.slice(0, n)), e
  }
  searchWithoutFetchingLatest(e) {
    let t, {
      channel: n,
      query: i,
      count: s = 0,
      intention: r,
      includeExternalGuilds: a = !0,
      canViewAndUsePackEmoji: o,
      matchComparator: l
    } = e;
    ee();
    let u = i.toLowerCase().replaceAll(/[ _]/g, ""),
      d = b.default.escape(u);
    if (null == l) {
      let e = RegExp("".concat(d), "i");
      t = t => e.test(t.replaceAll("_", ""))
    } else t = l;
    let c = null != n ? n.getGuildId() : null,
      f = et.get(c).nameMatchesChain(t).reduce((e, t) => {
        let i = D.default.getEmojiUnavailableReason({
          emoji: t,
          channel: n,
          intention: r,
          canViewAndUsePackEmoji: o,
          forceIncludeExternalGuilds: a
        });
        return i === V.EmojiDisabledReasons.PREMIUM_LOCKED ? e.locked.push(t) : null == i && e.unlocked.push(t), e
      }, {
        unlocked: [],
        locked: []
      });
    return {
      unlocked: this.getSearchResultsOrder(f.unlocked, i, s),
      locked: this.getSearchResultsOrder(f.locked, i, 0)
    }
  }
  getUsableCustomEmojiById(e) {
    return ee(), J(e)
  }
  getCustomEmojiById(e) {
    return ee(),
      function(e) {
        var t, n, i;
        let s = $()[e];
        return null != s ? null !== (i = null === (t = z[s]) || void 0 === t ? void 0 : t.getEmoji(e)) && void 0 !== i ? i : null === (n = q.get(s)) || void 0 === n ? void 0 : n.emojiById[e] : null
      }(e)
  }
  getTopEmoji(e) {
    return null == e ? j : (ee(), et.get(e).getTopEmojiWithoutFetchingLatest(e))
  }
  getNewlyAddedEmoji(e) {
    return null == e ? j : (ee(), et.get(e).getNewlyAddedEmojiForGuild(e))
  }
  getTopEmojisMetadata(e) {
    return Z.get(e)
  }
  getEmojiAutosuggestion(e) {
    if (null != Q && Q.length > 0) {
      let {
        locked: t,
        unlocked: n
      } = this.searchWithoutFetchingLatest({
        channel: e,
        count: 10,
        query: Q,
        intention: V.EmojiIntention.CHAT,
        canViewAndUsePackEmoji: !1
      });
      return [...n.slice(0, 5), ...t.slice(0, 5)].slice(0, 5)
    }
    return []
  }
  hasUsableEmojiInAnyGuild() {
    ee();
    let e = Object.keys(z);
    return e.some(e => z[e].usableEmojis.length > 0)
  }
  hasFavoriteEmojis(e) {
    let t = et.get(e);
    return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0
  }
}
ec.displayName = "EmojiStore", ec.persistKey = "EmojiStoreV2";
var ef = new ec(u.default, {
  BACKGROUND_SYNC: function() {
    ei()
  },
  CONNECTION_OPEN: function(e) {
    for (let t of (ei(), e.guilds)) ea(t.id, t.emojis);
    W = e.guilds.every(e => null != e.emojis) ? 1 : 0, er()
  },
  GUILD_MEMBER_UPDATE: function(e) {
    var t;
    let {
      guildId: n,
      user: i
    } = e;
    if (i.id !== (null === (t = N.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
    let s = z[n];
    ea(n, null == s ? void 0 : s.usableEmojis), er()
  },
  GUILD_CREATE: function(e) {
    0 !== W && null == e.guild.emojis && null != e.guild.emojiUpdates && (W = 0), ea(e.guild.id, e.guild.emojis), er()
  },
  GUILD_UPDATE: function(e) {
    ea(e.guild.id, e.guild.emojis), er()
  },
  GUILD_EMOJIS_UPDATE: function(e) {
    let {
      guildId: t,
      emojis: n
    } = e;
    ea(t, n), er()
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    es(t.id), Z.delete(t.id), er()
  },
  MESSAGE_REACTION_ADD: function(e) {
    if (!e.optimistic) return !1;
    let t = null != e.emoji.id && "0" !== e.emoji.id ? e.emoji : U.default.getByName(U.default.convertSurrogateToName(e.emoji.name, !1));
    if (null == t) return !1;
    el([t])
  },
  EMOJI_TRACK_USAGE: function(e) {
    let {
      emojiUsed: t
    } = e;
    el(t)
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      wasSaved: n
    } = e;
    if (h.default.setEmojiLocale(S.default.locale), t !== F.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    B.pendingUsages = []
  },
  GUILD_ROLE_CREATE: eu,
  GUILD_ROLE_UPDATE: eu,
  TOP_EMOJIS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      topEmojisMetadata: n
    } = e;
    Z.set(t, {
      emojiIds: n.map(e => e.emojiId),
      topEmojisTTL: a(a()).add(1, "days").valueOf()
    })
  },
  INVENTORY_FETCH_SUCCESS: function(e) {
    let {} = e;
    ed()
  },
  INVENTORY_COLLECT_PACK_SUCCESS: function(e) {
    let {} = e;
    er()
  },
  INVENTORY_REMOVE_PACK_SUCCESS: function(e) {
    let {} = e;
    er()
  },
  EMOJI_AUTOSUGGESTION_UPDATE: function(e) {
    let {
      text: t
    } = e;
    Q = t
  },
  LOGOUT: function(e) {
    ei()
  }
})