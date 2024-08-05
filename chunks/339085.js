n(47120), n(51350), n(653041), n(627494), n(757143), n(724458);
var r, i = n(392711),
  a = n.n(i),
  s = n(913527),
  o = n.n(s),
  l = n(956067),
  u = n(442837),
  c = n(570140),
  d = n(704907),
  _ = n(287328),
  E = n(86670),
  f = n(489033),
  h = n(188742),
  p = n(353926),
  m = n(973542),
  I = n(889564),
  T = n(687476),
  g = n(978519),
  S = n(706454),
  A = n(581883),
  N = n(271383),
  v = n(93093),
  O = n(430824),
  R = n(771845),
  C = n(594174),
  y = n(70956),
  D = n(176354),
  L = n(823379),
  b = n(226951),
  M = n(709054),
  P = n(906411),
  U = n(689789),
  w = n(633302),
  x = n(174065),
  G = n(396352),
  k = n(347374),
  B = n(185923),
  F = n(981631),
  V = n(149203),
  H = n(526761);

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let Y = [
V.UX.TOP_GUILD_EMOJI.toString(),
V.UX.FAVORITES.toString(),
V.UX.RECENT.toString(),
V.UX.CUSTOM.toString()
  ].concat(w.ZP.getCategories()),
  j = {
pendingUsages: [],
emojiReactionPendingUsages: []
  };
class W {
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
let t = N.ZP.getMember(this.id, this._userId);
return null != t && (!!(t.roles.some(t => e.roles.includes(t)) || (0, I.yH)(e)) || !1);
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
    e.allNamesString = ':'.concat(e.name, ':'), e.guildId = this.id, e.type = P.B.GUILD, this._emojiMap[e.id] = e;
  }), this._usableEmojis = a().sortBy(this._emojis.filter(e => this.isUsable(e)), e => e.name), this._emoticons = this._usableEmojis.filter(e => !e.require_colons);
  }
  constructor(e, t, n, r = !1) {
Z(this, 'id', void 0), Z(this, '_userId', void 0), Z(this, '_dirty', !0), Z(this, '_emojis', void 0), Z(this, '_emojiMap', {}), Z(this, '_emoticons', []), Z(this, '_usableEmojis', []), Z(this, '_canSeeServerSubIAP', !1), Z(this, '_totalUsable', 0), this.id = e, this._userId = t, this._emojis = n, this._canSeeServerSubIAP = r;
  }
}
let K = M.default.fromTimestamp(Date.now() - 60 * y.Z.Millis.DAY),
  z = [],
  q = 2,
  Q = Y.slice(0),
  X = {},
  $ = {},
  J = null,
  ee = new Map();

function et(e) {
  var t, n;
  let r = en()[e];
  return null != r && null !== (n = null === (t = X[r]) || void 0 === t ? void 0 : t.getUsableEmoji(e)) && void 0 !== n ? n : void 0;
}

function en() {
  if (er(), null == $)
for (let e in ($ = {}, X))
  for (let t of X[e].rawEmojis)
    $[t.id] = e;
  return $;
}
async function er() {
  if (0 !== q)
return;
  let e = _.Z.database();
  if (null == e)
return;
  q = 2;
  let t = await (0, E.gs)('EmojiStore.loadSavedEmojis', () => l.Z.timeAsync('\uD83D\uDCBE', 'loadSavedEmojis', () => f.Z.getAsync(e)));
  if (null != t)
c.Z.dispatch({
  type: 'CACHED_EMOJIS_LOADED',
  emojis: t
});
}

function ei(e) {
  return new d.Z({
computeBonus: () => 100,
computeWeight: e => {
  let t = 1;
  return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t;
},
lookupKey: e => {
  var t;
  return null !== (t = w.ZP.getByName(e)) && void 0 !== t ? t : et(e);
},
afterCompute: () => {
  e(), Q = Y.slice(0), !a().some(X, e => e.usableEmojis.length > 0) && Q.splice(Y.indexOf(V.UX.CUSTOM), 1);
},
numFrequentlyItems: 42
  });
}
class ea {
  static get(e) {
return void 0 === e && (e = null), (null == ea._lastInstance || ea._lastInstance.guildId !== e) && (ea._lastInstance = new ea(e)), ea._lastInstance;
  }
  static reset() {
ea._lastInstance = null;
  }
  static resetFrequentlyUsed() {
null != ea._lastInstance && (ea._lastInstance.frequentlyUsed = null);
  }
  static resetFrequentlyUsedReactionEmojis() {
null != ea._lastInstance && (ea._lastInstance.frequentlyUsedReactionEmojis = null);
  }
  static resetFavorites() {
null != ea._lastInstance && (ea._lastInstance.favorites = null, ea._lastInstance.favoriteNamesAndIds = null);
  }
  static clear(e) {
null != ea._lastInstance && ea._lastInstance.guildId === e && (ea._lastInstance = null);
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
let e = es.frequently.map(e => null != e.id ? this.getById(e.id) : w.ZP.getByName(e.name)).filter(L.lm),
  t = (0, k.Z)(e);
return this.frequentlyUsed = [...t.values()], this.frequentlyUsed;
  }
  getFrequentlyUsedReactionEmojisWithoutFetchingLatest() {
if (this.ensureDisambiguated(), null != this.frequentlyUsedReactionEmojis)
  return this.frequentlyUsedReactionEmojis;
let e = eo.frequently.map(e => null != e.id ? this.getById(e.id) : w.ZP.getByName(e.name)).filter(L.lm),
  t = (0, k.Z)(e);
return this.frequentlyUsedReactionEmojis = [...t.values()], this.frequentlyUsedReactionEmojis;
  }
  rebuildFavoriteEmojisWithoutFetchingLatest() {
var e, t;
if (this.ensureDisambiguated(), null != this.favorites && null != this.favoriteNamesAndIds)
  return {
    favorites: this.favorites,
    favoriteNamesAndIds: this.favoriteNamesAndIds
  };
let n = (null !== (t = null === (e = A.Z.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== t ? t : []).map(e => {
    var t;
    return null !== (t = this.getById(e)) && void 0 !== t ? t : w.ZP.getByName(e);
  }).filter(L.lm),
  r = (0, k.Z)(n);
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
  let n = ee.get(e),
    r = G.Z.getTopEmojiIdsByGuildId(e);
  if (null == n && null == r)
    return z;
  let i = (null !== (t = null == n ? void 0 : n.emojiIds) && void 0 !== t ? t : r).map(e => {
      var t;
      return null !== (t = this.getById(e)) && void 0 !== t ? t : w.ZP.getByName(w.ZP.convertSurrogateToName(e, !1));
    }),
    a = [];
  i.forEach(e => {
    null != e && a.push(e);
  });
  let s = this.getNewlyAddedEmojiForGuild(e).map(e => e.id);
  this.topEmojis = a.filter(e => !s.includes(e.id));
}
return this.topEmojis;
  }
  getNewlyAddedEmojiForGuild(e) {
if (this.ensureDisambiguated(), null == this.newlyAddedEmoji)
  return z;
let t = this.newlyAddedEmoji[e];
return null == t ? z : t;
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
  } = t, s = null != r && a().some(r, e), o = null != i && e(i), l = null != i && a().some(h.Z.getTermsForEmoji(i), e), u = null != n && a().some(x.Z.getCaptionsForEmojiById({
    emojiId: n
  }), e);
  return s || o || l || u;
});
  }
  _buildDisambiguatedCustomEmoji() {
let e = {},
  t = [];
this.emoticonRegex = null, this.frequentlyUsed = null, this.frequentlyUsedReactionEmojis = null, this.disambiguatedEmoji = [], this.unicodeAliases = Object.create(null), this.customEmojis = Object.create(null), this.groupedCustomEmojis = Object.create(null), this.emoticonsByName = Object.create(null), this.emojisByName = Object.create(null), this.emojisById = Object.create(null), this.newlyAddedEmoji = Object.create(null);
let n = t => {
    var n, r;
    let i = t.name,
      a = null !== (n = e[i]) && void 0 !== n ? n : 0;
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
      if (this.emojisById[t.id] = t, this.customEmojis[t.name] = t, t.type === P.B.GUILD)
        e = t.guildId, n = !0;
      null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : this.groupedCustomEmojis[e] = [t], n && M.default.compare(t.id, K) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : this.newlyAddedEmoji[e] = [t]));
    }
    null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t);
  },
  r = e => {
    if (!Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name))
      t.push(b.Z.escape(e.name)), this.emoticonsByName[e.name] = e;
  };
w.ZP.forEach(n);
let i = e => {
  let t = X[null == e ? F.kod : e];
  null != t && (a().each(t.usableEmojis, n), a().each(t.emoticons, r));
};
for (let e in (i(this.guildId), this.newlyAddedEmoji))
  null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => M.default.compare(t.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[e] = [];
R.ZP.getFlattenedGuildIds().forEach(e => {
  e !== this.guildId && i(e);
}), this.escapedEmoticonNames = t.join('|');
  }
  constructor(e) {
Z(this, 'guildId', void 0), Z(this, 'emoticonRegex', null), Z(this, 'frequentlyUsed', null), Z(this, 'favorites', null), Z(this, 'favoriteNamesAndIds', null), Z(this, 'topEmojis', null), Z(this, 'escapedEmoticonNames', null), Z(this, 'disambiguatedEmoji', null), Z(this, 'customEmojis', void 0), Z(this, 'groupedCustomEmojis', void 0), Z(this, 'emoticonsByName', void 0), Z(this, 'emojisByName', void 0), Z(this, 'emojisById', void 0), Z(this, 'unicodeAliases', void 0), Z(this, 'newlyAddedEmoji', null), Z(this, 'frequentlyUsedReactionEmojis', null), Z(this, 'isFavoriteEmojiWithoutFetchingLatest', e => {
  var t;
  if (null == e)
    return !1;
  let {
    favoriteNamesAndIds: n
  } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
  if (null != e.id)
    return n.has(e.id);
  let r = null !== (t = w.ZP.convertSurrogateToBase(e.surrogates)) && void 0 !== t ? t : e;
  return n.has(r.name);
}), this.guildId = e;
  }
}
Z(ea, '_lastInstance', null);
let es = ei(ea.resetFrequentlyUsed),
  eo = ei(ea.resetFrequentlyUsedReactionEmojis);

function el() {
  X = {}, $ = {}, ea.reset(), ee.clear(), q = 2;
}

function eu(e) {
  if (null != X[e])
delete X[e];
}

function ec() {
  $ = null, ea.reset(), 0 !== q && (es.compute(), eo.compute());
}

function ed(e, t) {
  if (eu(e), ea.clear(e), null == t)
return;
  let n = C.default.getCurrentUser();
  if (null == n)
return;
  let r = (0, g.r)(e);
  X[e] = new W(e, n.id, t, r);
}

function e_() {
  var e, t, n, r, i, s;
  let o = null === (t = A.Z.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
  null != o && w.ZP.setDefaultDiversitySurrogate(o), ea.reset();
  let l = A.Z.frecencyWithoutFetchingLatest,
u = null !== (i = null === (n = l.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== i ? i : {},
c = null !== (s = null === (r = l.emojiReactionFrecency) || void 0 === r ? void 0 : r.emojis) && void 0 !== s ? s : {};
  es.overwriteHistory(a().mapValues(u, e => ({
...e,
recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), j.pendingUsages), eo.overwriteHistory(a().mapValues(c, e => ({
...e,
recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), j.emojiReactionPendingUsages), ! function(e, t) {
let {
  canSplitFrecencyList: n
} = U.Z.getCurrentConfig({
  location: 'populateInitialFrecencyData'
}, {
  autoTrackExposure: !0
});
if (a().isEmpty(e) && a().isEmpty(j.pendingUsages) && A.Z.hasLoaded(H.yP.FRECENCY_AND_FAVORITES_SETTINGS))
  for (let e of [
      'thumbsup',
      'thumbsup',
      'eyes',
      'eyes',
      'laughing',
      'laughing',
      'watermelon',
      'fork_and_knife',
      'yum',
      'weary',
      'tired_face',
      'poop',
      '100'
    ])
    es.track(e);
if (n && a().isEmpty(t) && a().isEmpty(j.emojiReactionPendingUsages) && A.Z.hasLoaded(H.yP.FRECENCY_AND_FAVORITES_SETTINGS))
  for (let e of [
      '100',
      '100',
      'thumbsup',
      'thumbsup',
      'thumbsdown',
      'thumbsdown',
      'heart',
      'point_up',
      'eyes',
      'weary',
      'laughing',
      'white_check_mark',
      'x'
    ])
    eo.track(e);
  }(u, c);
}

function eE(e) {
  if (null == e)
return !1;
  for (let r of e) {
var t, n;
let e = null !== (n = null !== (t = r.id) && void 0 !== t ? t : r.uniqueName) && void 0 !== n ? n : r.name;
null != e && (es.track(e), j.pendingUsages.push({
  key: e,
  timestamp: Date.now()
}));
  }
  let r = e.length > 0;
  return r && 0 !== q && es.compute(), r;
}

function ef(e) {
  let {
guildId: t,
role: n
  } = e;
  if (!(0, m.Z)(n))
return !1;
  {
let e = X[t];
ed(t, null == e ? void 0 : e.emojis), ec();
  }
}
class eh extends(r = u.ZP.PersistedStore) {
  initialize(e) {
this.waitFor(_.Z, v.Z, N.ZP, O.Z, S.default, T.Z, G.Z, C.default, p.Z), null != e && (null != e.pendingUsages && (j.pendingUsages = e.pendingUsages), null != e.emojiReactionPendingUsages && (j.emojiReactionPendingUsages = e.emojiReactionPendingUsages)), this.syncWith([A.Z], e_);
  }
  getState() {
return j;
  }
  get loadState() {
return q;
  }
  hasPendingUsage() {
return j.pendingUsages.length > 0 || j.emojiReactionPendingUsages.length > 0;
  }
  get categories() {
return Q;
  }
  get diversitySurrogate() {
var e;
return null !== (e = w.ZP.getDefaultDiversitySurrogate()) && void 0 !== e ? e : '';
  }
  get emojiFrecencyWithoutFetchingLatest() {
return es;
  }
  get emojiReactionFrecencyWithoutFetchingLatest() {
return eo;
  }
  getGuildEmoji(e) {
var t;
er();
let n = X[e];
return null !== (t = null == n ? void 0 : n.emojis) && void 0 !== t ? t : [];
  }
  getUsableGuildEmoji(e) {
var t;
er();
let n = X[e];
return null !== (t = null == n ? void 0 : n.usableEmojis) && void 0 !== t ? t : [];
  }
  getGuilds() {
return X;
  }
  getDisambiguatedEmojiContext(e) {
return er(), ea.get(e);
  }
  getSearchResultsOrder(e, t, n, r) {
let i = t.toLowerCase(),
  s = b.Z.escape(i),
  {
    canSplitFrecencyList: o
  } = U.Z.getCurrentConfig({
    location: 'getSearchResultsOrder'
  }, {
    autoTrackExposure: !0
  });
if (e.length > 0) {
  let t = RegExp('^'.concat(s), 'i'),
    n = new RegExp('(^|_|[A-Z])'.concat(s, 's?([A-Z]|_|$)')),
    l = n.test.bind(n),
    u = t.test.bind(t),
    c = function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
      if (null == e || null == t)
        return 0;
      let n = e.toLowerCase(),
        a = 1 + (n === i ? 4 : 0) + (l(n) || l(e) ? 2 : 0) + (u(e) ? 1 : 0),
        s = r === B.Hz.REACTION && o ? eo.getScore(t) : es.getScore(t);
      return null != s && (a *= s / 100), a;
    };
  e = a().orderBy(e, [
    e => null != e.names ? c(e.names[0]) : c(e.name, e.id),
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
  includeExternalGuilds: s = !0,
  matchComparator: o
} = e;
er();
let l = r.toLowerCase().replaceAll(/[ _]/g, ''),
  u = b.Z.escape(l);
if (null == o) {
  let e = RegExp(''.concat(u), 'i');
  t = t => e.test(t.replaceAll('_', ''));
} else
  t = o;
let c = null != n ? n.getGuildId() : null,
  d = ea.get(c).nameMatchesChain(t).reduce((e, t) => {
    let r = D.ZP.getEmojiUnavailableReason({
      emoji: t,
      channel: n,
      intention: a,
      forceIncludeExternalGuilds: s
    });
    return r === B.Z5.PREMIUM_LOCKED ? e.locked.push(t) : null == r && e.unlocked.push(t), e;
  }, {
    unlocked: [],
    locked: []
  });
return {
  unlocked: this.getSearchResultsOrder(d.unlocked, r, i, a),
  locked: this.getSearchResultsOrder(d.locked, r, 0, a)
};
  }
  getUsableCustomEmojiById(e) {
return er(), et(e);
  }
  getCustomEmojiById(e) {
return er(),
  function(e) {
    var t, n;
    let r = en()[e];
    return null != r && null !== (n = null === (t = X[r]) || void 0 === t ? void 0 : t.getEmoji(e)) && void 0 !== n ? n : void 0;
  }(e);
  }
  getTopEmoji(e) {
return null == e ? z : (er(), ea.get(e).getTopEmojiWithoutFetchingLatest(e));
  }
  getNewlyAddedEmoji(e) {
return null == e ? z : (er(), ea.get(e).getNewlyAddedEmojiForGuild(e));
  }
  getTopEmojisMetadata(e) {
return ee.get(e);
  }
  getEmojiAutosuggestion(e) {
if (null != J && J.length > 0) {
  let {
    locked: t,
    unlocked: n
  } = this.searchWithoutFetchingLatest({
    channel: e,
    count: 10,
    query: J,
    intention: B.Hz.CHAT
  });
  return [
    ...n.slice(0, 5),
    ...t.slice(0, 5)
  ].slice(0, 5);
}
return [];
  }
  hasUsableEmojiInAnyGuild() {
return er(), M.default.keys(X).some(e => X[e].usableEmojis.length > 0);
  }
  hasFavoriteEmojis(e) {
let t = ea.get(e);
return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
  }
}
Z(eh, 'displayName', 'EmojiStore'), Z(eh, 'persistKey', 'EmojiStoreV2'), Z(eh, 'migrations', [e => ({
  ...e
})]), t.Z = new eh(c.Z, {
  LOGOUT: function() {
j.pendingUsages = [], j.emojiReactionPendingUsages = [];
  },
  BACKGROUND_SYNC: function() {
el();
  },
  CONNECTION_OPEN: function(e) {
for (let t of (el(), e.guilds))
  ed(t.id, t.emojis);
q = e.guilds.every(e => null != e.emojis) ? 1 : 0, ec();
  },
  CACHED_EMOJIS_LOADED: function(e) {
let {
  emojis: t
} = e;
for (let [e, n] of t)
  !Object.hasOwn(X, e) && v.Z.isMember(e) && ed(e, n);
ec();
  },
  GUILD_MEMBER_UPDATE: function(e) {
var t;
let {
  guildId: n,
  user: r
} = e;
if (r.id !== (null === (t = C.default.getCurrentUser()) || void 0 === t ? void 0 : t.id))
  return;
let i = X[n];
ed(n, null == i ? void 0 : i.usableEmojis), ec();
  },
  GUILD_CREATE: function(e) {
0 !== q && null == e.guild.emojis && null != e.guild.emojiUpdates && (q = 0), ed(e.guild.id, e.guild.emojis), ec();
  },
  GUILD_UPDATE: function(e) {
ed(e.guild.id, e.guild.emojis), ec();
  },
  GUILD_EMOJIS_UPDATE: function(e) {
let {
  guildId: t,
  emojis: n
} = e;
ed(t, n), ec();
  },
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
eu(t.id), ee.delete(t.id), ec();
  },
  MESSAGE_REACTION_ADD: function(e) {
if (!e.optimistic)
  return !1;
let t = null != e.emoji.id && '0' !== e.emoji.id ? e.emoji : w.ZP.getByName(w.ZP.convertSurrogateToName(e.emoji.name, !1));
if (null == t)
  return !1;
(function(e) {
  if (null == e)
    return 0;
  for (let r of e) {
    var t, n;
    let e = null !== (n = null !== (t = r.id) && void 0 !== t ? t : r.uniqueName) && void 0 !== n ? n : r.name;
    null != e && (eo.track(e), j.emojiReactionPendingUsages.push({
      key: e,
      timestamp: Date.now()
    }));
  }
  let r = e.length > 0;
  r && 0 !== q && eo.compute();
}([t]), eE([t]));
  },
  EMOJI_TRACK_USAGE: function(e) {
let {
  emojiUsed: t
} = e;
eE(t);
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
let {
  settings: {
    type: t
  },
  wasSaved: n
} = e;
if (h.Z.setEmojiLocale(S.default.locale), t !== H.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n)
  return !1;
j.pendingUsages = [], j.emojiReactionPendingUsages = [];
  },
  GUILD_ROLE_CREATE: ef,
  GUILD_ROLE_UPDATE: ef,
  TOP_EMOJIS_FETCH_SUCCESS: function(e) {
let {
  guildId: t,
  topEmojisMetadata: n
} = e;
ee.set(t, {
  emojiIds: n.map(e => e.emojiId),
  topEmojisTTL: o()(o()()).add(1, 'days').valueOf()
});
  },
  EMOJI_AUTOSUGGESTION_UPDATE: function(e) {
let {
  text: t
} = e;
J = t;
  }
});