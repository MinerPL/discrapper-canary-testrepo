"use strict";
n(47120), n(51350), n(653041), n(627494), n(757143), n(724458);
var i, r = n(392711),
  s = n.n(r),
  o = n(913527),
  a = n.n(o),
  l = n(956067),
  u = n(442837),
  _ = n(570140),
  d = n(704907),
  c = n(287328),
  E = n(86670),
  I = n(489033),
  T = n(188742),
  h = n(973542),
  S = n(889564),
  f = n(687476),
  N = n(978519),
  A = n(706454),
  m = n(581883),
  O = n(271383),
  R = n(93093),
  C = n(430824),
  p = n(771845),
  g = n(594174),
  L = n(70956),
  v = n(176354),
  D = n(823379),
  M = n(226951),
  P = n(709054),
  y = n(906411),
  U = n(633302),
  b = n(174065),
  G = n(396352),
  w = n(347374),
  k = n(185923),
  B = n(981631),
  x = n(149203),
  V = n(526761);

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let H = [x.UX.TOP_GUILD_EMOJI.toString(), x.UX.FAVORITES.toString(), x.UX.RECENT.toString(), x.UX.CUSTOM.toString()].concat(U.ZP.getCategories()),
  F = {
    pendingUsages: []
  };
class Y {
  getEmoji(e) {
    return this.build(), this._emojiMap[e]
  }
  getUsableEmoji(e) {
    let t = this.getEmoji(e);
    return null != t && this.isUsable(t) ? t : null
  }
  isUsable(e) {
    if (0 === e.roles.length) return !0;
    let t = O.ZP.getMember(this.id, this._userId);
    return null != t && (!!(t.roles.some(t => e.roles.includes(t)) || (0, S.yH)(e)) || !1)
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
    if (!!this._dirty) this._dirty = !1, this._emojis.forEach(e => {
      e.allNamesString = ":".concat(e.name, ":"), e.guildId = this.id, e.type = y.B.GUILD, this._emojiMap[e.id] = e
    }), this._usableEmojis = s().sortBy(this._emojis.filter(e => this.isUsable(e)), e => e.name), this._emoticons = this._usableEmojis.filter(e => !e.require_colons)
  }
  constructor(e, t, n, i = !1) {
    Z(this, "id", void 0), Z(this, "_userId", void 0), Z(this, "_dirty", !0), Z(this, "_emojis", void 0), Z(this, "_emojiMap", {}), Z(this, "_emoticons", []), Z(this, "_usableEmojis", []), Z(this, "_canSeeServerSubIAP", !1), Z(this, "_totalUsable", 0), this.id = e, this._userId = t, this._emojis = n, this._canSeeServerSubIAP = i
  }
}
let j = P.default.fromTimestamp(Date.now() - 60 * L.Z.Millis.DAY),
  W = [],
  K = 2,
  z = H.slice(0),
  q = {},
  X = {},
  Q = null,
  J = new Map;

function $(e) {
  var t, n;
  let i = ee()[e];
  return null != i && null !== (n = null === (t = q[i]) || void 0 === t ? void 0 : t.getUsableEmoji(e)) && void 0 !== n ? n : void 0
}

function ee() {
  if (et(), null == X)
    for (let e in X = {}, q)
      for (let t of q[e].rawEmojis) X[t.id] = e;
  return X
}
async function et() {
  if (0 !== K) return;
  let e = c.Z.database();
  if (null == e) return;
  K = 2;
  let t = await (0, E.gs)("EmojiStore.loadSavedEmojis", () => l.Z.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => I.Z.getAsync(e)));
  if (null != t) _.Z.dispatch({
    type: "CACHED_EMOJIS_LOADED",
    emojis: t
  })
}
class en {
  static get(e) {
    return void 0 === e && (e = null), (null == en._lastInstance || en._lastInstance.guildId !== e) && (en._lastInstance = new en(e)), en._lastInstance
  }
  static reset() {
    en._lastInstance = null
  }
  static resetFrequentlyUsed() {
    null != en._lastInstance && (en._lastInstance.frequentlyUsed = null)
  }
  static resetFavorites() {
    null != en._lastInstance && (en._lastInstance.favorites = null, en._lastInstance.favoriteNamesAndIds = null)
  }
  static clear(e) {
    null != en._lastInstance && en._lastInstance.guildId === e && (en._lastInstance = null)
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
    if (this.ensureDisambiguated(), null != this.frequentlyUsed) return this.frequentlyUsed;
    let e = ei.frequently.map(e => null != e.id ? this.getById(e.id) : U.ZP.getByName(e.name)).filter(D.lm),
      t = (0, w.Z)(e);
    return this.frequentlyUsed = [...t.values()], this.frequentlyUsed
  }
  rebuildFavoriteEmojisWithoutFetchingLatest() {
    var e, t;
    if (this.ensureDisambiguated(), null != this.favorites && null != this.favoriteNamesAndIds) return {
      favorites: this.favorites,
      favoriteNamesAndIds: this.favoriteNamesAndIds
    };
    let n = (null !== (t = null === (e = m.Z.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== t ? t : []).map(e => {
        var t;
        return null !== (t = this.getById(e)) && void 0 !== t ? t : U.ZP.getByName(e)
      }).filter(D.lm),
      i = (0, w.Z)(n);
    return this.favorites = [...i.values()], this.favoriteNamesAndIds = new Set(i.keys()), {
      favorites: this.favorites,
      favoriteNamesAndIds: this.favoriteNamesAndIds
    }
  }
  get favoriteEmojisWithoutFetchingLatest() {
    return this.rebuildFavoriteEmojisWithoutFetchingLatest().favorites
  }
  getEmojiInPriorityOrderWithoutFetchingLatest() {
    let e = new Set;
    return this.favoriteEmojisWithoutFetchingLatest.concat(this.getFrequentlyUsedEmojisWithoutFetchingLatest()).filter(t => !e.has(t) && (e.add(t), !0))
  }
  getTopEmojiWithoutFetchingLatest(e) {
    if (this.ensureDisambiguated(), null == this.topEmojis) {
      var t;
      let n = J.get(e),
        i = G.Z.getTopEmojiIdsByGuildId(e);
      if (null == n && null == i) return W;
      let r = (null !== (t = null == n ? void 0 : n.emojiIds) && void 0 !== t ? t : i).map(e => {
          var t;
          return null !== (t = this.getById(e)) && void 0 !== t ? t : U.ZP.getByName(U.ZP.convertSurrogateToName(e, !1))
        }),
        s = [];
      r.forEach(e => {
        null != e && s.push(e)
      });
      let o = this.getNewlyAddedEmojiForGuild(e).map(e => e.id);
      this.topEmojis = s.filter(e => !o.includes(e.id))
    }
    return this.topEmojis
  }
  getNewlyAddedEmojiForGuild(e) {
    if (this.ensureDisambiguated(), null == this.newlyAddedEmoji) return W;
    let t = this.newlyAddedEmoji[e];
    return null == t ? W : t
  }
  getEscapedCustomEmoticonNames() {
    return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames
  }
  nameMatchesChain(e) {
    return s()(this.getDisambiguatedEmoji()).filter(t => {
      let {
        id: n,
        names: i,
        name: r
      } = t, o = null != i && s().some(i, e), a = null != r && e(r), l = null != r && s().some(T.Z.getTermsForEmoji(r), e), u = null != n && s().some(b.Z.getCaptionsForEmojiById({
        emojiId: n
      }), e);
      return o || a || l || u
    })
  }
  _buildDisambiguatedCustomEmoji() {
    let e = {},
      t = [];
    this.emoticonRegex = null, this.frequentlyUsed = null, this.disambiguatedEmoji = [], this.unicodeAliases = Object.create(null), this.customEmojis = Object.create(null), this.groupedCustomEmojis = Object.create(null), this.emoticonsByName = Object.create(null), this.emojisByName = Object.create(null), this.emojisById = Object.create(null), this.newlyAddedEmoji = Object.create(null);
    let n = t => {
        var n, i;
        let r = t.name,
          s = null !== (n = e[r]) && void 0 !== n ? n : 0;
        if (e[r] = s + 1, s > 0) {
          let e = "".concat(r, "~").concat(s);
          t = {
            ...t,
            name: e,
            originalName: r,
            allNamesString: ":".concat(e, ":")
          }
        }
        if (this.emojisByName[t.name] = t, "names" in t && (null === (i = t.names) || void 0 === i || i.slice(1).forEach(e => this.unicodeAliases[e] = t.name)), null != t.id) {
          let e, n;
          if (this.emojisById[t.id] = t, this.customEmojis[t.name] = t, t.type === y.B.GUILD) e = t.guildId, n = !0;
          null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : this.groupedCustomEmojis[e] = [t], n && P.default.compare(t.id, j) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : this.newlyAddedEmoji[e] = [t]))
        }
        null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t)
      },
      i = e => {
        if (!Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name)) t.push(M.Z.escape(e.name)), this.emoticonsByName[e.name] = e
      };
    U.ZP.forEach(n);
    let r = e => {
      let t = q[null == e ? B.kod : e];
      null != t && (s().each(t.usableEmojis, n), s().each(t.emoticons, i))
    };
    for (let e in r(this.guildId), this.newlyAddedEmoji) null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => P.default.compare(t.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[e] = [];
    p.ZP.getFlattenedGuildIds().forEach(e => {
      e !== this.guildId && r(e)
    }), this.escapedEmoticonNames = t.join("|")
  }
  constructor(e) {
    Z(this, "guildId", void 0), Z(this, "emoticonRegex", null), Z(this, "frequentlyUsed", null), Z(this, "favorites", null), Z(this, "favoriteNamesAndIds", null), Z(this, "topEmojis", null), Z(this, "escapedEmoticonNames", null), Z(this, "disambiguatedEmoji", null), Z(this, "customEmojis", void 0), Z(this, "groupedCustomEmojis", void 0), Z(this, "emoticonsByName", void 0), Z(this, "emojisByName", void 0), Z(this, "emojisById", void 0), Z(this, "unicodeAliases", void 0), Z(this, "newlyAddedEmoji", null), Z(this, "isFavoriteEmojiWithoutFetchingLatest", e => {
      var t;
      if (null == e) return !1;
      let {
        favoriteNamesAndIds: n
      } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
      if (null != e.id) return n.has(e.id);
      let i = null !== (t = U.ZP.convertSurrogateToBase(e.surrogates)) && void 0 !== t ? t : e;
      return n.has(i.name)
    }), this.guildId = e
  }
}
Z(en, "_lastInstance", null);
let ei = new d.Z({
  computeBonus: () => 100,
  computeWeight: e => {
    let t = 0;
    return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
  },
  lookupKey: e => {
    var t;
    return null !== (t = U.ZP.getByName(e)) && void 0 !== t ? t : $(e)
  },
  afterCompute: () => {
    en.resetFrequentlyUsed(), z = H.slice(0), !s().some(q, e => e.usableEmojis.length > 0) && z.splice(H.indexOf(x.UX.CUSTOM), 1)
  },
  numFrequentlyItems: 42
});

function er() {
  q = {}, X = {}, en.reset(), J.clear(), K = 2
}

function es(e) {
  if (null != q[e]) delete q[e]
}

function eo() {
  X = null, en.reset(), 0 !== K && ei.compute()
}

function ea(e, t) {
  if (es(e), en.clear(e), null == t) return;
  let n = g.default.getCurrentUser();
  if (null == n) return;
  let i = (0, N.r)(e);
  q[e] = new Y(e, n.id, t, i)
}

function el() {
  var e, t, n, i;
  let r = null === (t = m.Z.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
  null != r && U.ZP.setDefaultDiversitySurrogate(r), en.reset();
  let o = null !== (i = null === (n = m.Z.frecencyWithoutFetchingLatest.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== i ? i : {};
  ei.overwriteHistory(s().mapValues(o, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), F.pendingUsages), s().isEmpty(o) && s().isEmpty(F.pendingUsages) && m.Z.hasLoaded(V.yP.FRECENCY_AND_FAVORITES_SETTINGS) && (ei.track("thumbsup"), ei.track("thumbsup"), ei.track("eyes"), ei.track("eyes"), ei.track("laughing"), ei.track("laughing"), ei.track("watermelon"), ei.track("fork_and_knife"), ei.track("yum"), ei.track("weary"), ei.track("tired_face"), ei.track("poop"), ei.track("100"))
}

function eu(e) {
  if (null == e) return !1;
  for (let i of e) {
    var t, n;
    let e = null !== (n = null !== (t = i.id) && void 0 !== t ? t : i.uniqueName) && void 0 !== n ? n : i.name;
    null != e && (ei.track(e), F.pendingUsages.push({
      key: e,
      timestamp: Date.now()
    }))
  }
  let i = e.length > 0;
  return i && 0 !== K && ei.compute(), i
}

function e_(e) {
  let {
    guildId: t,
    role: n
  } = e;
  if (!(0, h.Z)(n)) return !1;
  {
    let e = q[t];
    ea(t, null == e ? void 0 : e.emojis), eo()
  }
}
class ed extends(i = u.ZP.PersistedStore) {
  initialize(e) {
    this.waitFor(c.Z, R.Z, O.ZP, C.Z, A.default, f.Z, G.Z, g.default), null != e && (F = e), this.syncWith([m.Z], el)
  }
  getState() {
    return F
  }
  get loadState() {
    return K
  }
  hasPendingUsage() {
    return F.pendingUsages.length > 0
  }
  get categories() {
    return z
  }
  get diversitySurrogate() {
    var e;
    return null !== (e = U.ZP.getDefaultDiversitySurrogate()) && void 0 !== e ? e : ""
  }
  get emojiFrecencyWithoutFetchingLatest() {
    return ei
  }
  getGuildEmoji(e) {
    var t;
    et();
    let n = q[e];
    return null !== (t = null == n ? void 0 : n.emojis) && void 0 !== t ? t : []
  }
  getUsableGuildEmoji(e) {
    var t;
    et();
    let n = q[e];
    return null !== (t = null == n ? void 0 : n.usableEmojis) && void 0 !== t ? t : []
  }
  getGuilds() {
    return q
  }
  getDisambiguatedEmojiContext(e) {
    return et(), en.get(e)
  }
  getSearchResultsOrder(e, t, n) {
    let i = t.toLowerCase(),
      r = M.Z.escape(i);
    if (e.length > 0) {
      let t = RegExp("^".concat(r), "i"),
        n = new RegExp("(^|_|[A-Z])".concat(r, "s?([A-Z]|_|$)")),
        o = n.test.bind(n),
        a = t.test.bind(t),
        l = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
          if (null == e || null == t) return 0;
          let n = e.toLowerCase(),
            r = 1 + (n === i ? 4 : 0) + (o(n) || o(e) ? 2 : 0) + (a(e) ? 1 : 0),
            s = ei.getScore(t);
          return null != s && (r *= s / 100), r
        };
      e = s().orderBy(e, [e => null != e.names ? l(e.names[0]) : l(e.name, e.id), e => null != e.names ? e.names[0] : e.name], ["desc", "asc"])
    }
    return n > 0 && (e = e.slice(0, n)), e
  }
  searchWithoutFetchingLatest(e) {
    let t, {
      channel: n,
      query: i,
      count: r = 0,
      intention: s,
      includeExternalGuilds: o = !0,
      matchComparator: a
    } = e;
    et();
    let l = i.toLowerCase().replaceAll(/[ _]/g, ""),
      u = M.Z.escape(l);
    if (null == a) {
      let e = RegExp("".concat(u), "i");
      t = t => e.test(t.replaceAll("_", ""))
    } else t = a;
    let _ = null != n ? n.getGuildId() : null,
      d = en.get(_).nameMatchesChain(t).reduce((e, t) => {
        let i = v.ZP.getEmojiUnavailableReason({
          emoji: t,
          channel: n,
          intention: s,
          forceIncludeExternalGuilds: o
        });
        return i === k.Z5.PREMIUM_LOCKED ? e.locked.push(t) : null == i && e.unlocked.push(t), e
      }, {
        unlocked: [],
        locked: []
      });
    return {
      unlocked: this.getSearchResultsOrder(d.unlocked, i, r),
      locked: this.getSearchResultsOrder(d.locked, i, 0)
    }
  }
  getUsableCustomEmojiById(e) {
    return et(), $(e)
  }
  getCustomEmojiById(e) {
    return et(),
      function(e) {
        var t, n;
        let i = ee()[e];
        return null != i && null !== (n = null === (t = q[i]) || void 0 === t ? void 0 : t.getEmoji(e)) && void 0 !== n ? n : void 0
      }(e)
  }
  getTopEmoji(e) {
    return null == e ? W : (et(), en.get(e).getTopEmojiWithoutFetchingLatest(e))
  }
  getNewlyAddedEmoji(e) {
    return null == e ? W : (et(), en.get(e).getNewlyAddedEmojiForGuild(e))
  }
  getTopEmojisMetadata(e) {
    return J.get(e)
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
        intention: k.Hz.CHAT
      });
      return [...n.slice(0, 5), ...t.slice(0, 5)].slice(0, 5)
    }
    return []
  }
  hasUsableEmojiInAnyGuild() {
    return et(), P.default.keys(q).some(e => q[e].usableEmojis.length > 0)
  }
  hasFavoriteEmojis(e) {
    let t = en.get(e);
    return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0
  }
}
Z(ed, "displayName", "EmojiStore"), Z(ed, "persistKey", "EmojiStoreV2"), t.Z = new ed(_.Z, {
  BACKGROUND_SYNC: function() {
    er()
  },
  CONNECTION_OPEN: function(e) {
    for (let t of (er(), e.guilds)) ea(t.id, t.emojis);
    K = e.guilds.every(e => null != e.emojis) ? 1 : 0, eo()
  },
  CACHED_EMOJIS_LOADED: function(e) {
    let {
      emojis: t
    } = e;
    for (let [e, n] of t) !Object.hasOwn(q, e) && R.Z.isMember(e) && ea(e, n);
    eo()
  },
  GUILD_MEMBER_UPDATE: function(e) {
    var t;
    let {
      guildId: n,
      user: i
    } = e;
    if (i.id !== (null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
    let r = q[n];
    ea(n, null == r ? void 0 : r.usableEmojis), eo()
  },
  GUILD_CREATE: function(e) {
    0 !== K && null == e.guild.emojis && null != e.guild.emojiUpdates && (K = 0), ea(e.guild.id, e.guild.emojis), eo()
  },
  GUILD_UPDATE: function(e) {
    ea(e.guild.id, e.guild.emojis), eo()
  },
  GUILD_EMOJIS_UPDATE: function(e) {
    let {
      guildId: t,
      emojis: n
    } = e;
    ea(t, n), eo()
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    es(t.id), J.delete(t.id), eo()
  },
  MESSAGE_REACTION_ADD: function(e) {
    if (!e.optimistic) return !1;
    let t = null != e.emoji.id && "0" !== e.emoji.id ? e.emoji : U.ZP.getByName(U.ZP.convertSurrogateToName(e.emoji.name, !1));
    if (null == t) return !1;
    eu([t])
  },
  EMOJI_TRACK_USAGE: function(e) {
    let {
      emojiUsed: t
    } = e;
    eu(t)
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      wasSaved: n
    } = e;
    if (T.Z.setEmojiLocale(A.default.locale), t !== V.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    F.pendingUsages = []
  },
  GUILD_ROLE_CREATE: e_,
  GUILD_ROLE_UPDATE: e_,
  TOP_EMOJIS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      topEmojisMetadata: n
    } = e;
    J.set(t, {
      emojiIds: n.map(e => e.emojiId),
      topEmojisTTL: a()(a()()).add(1, "days").valueOf()
    })
  },
  EMOJI_AUTOSUGGESTION_UPDATE: function(e) {
    let {
      text: t
    } = e;
    Q = t
  }
})