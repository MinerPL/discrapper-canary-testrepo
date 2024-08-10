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
  S = n(364742),
  A = n(706454),
  N = n(581883),
  v = n(271383),
  O = n(93093),
  R = n(430824),
  C = n(771845),
  y = n(594174),
  D = n(70956),
  L = n(176354),
  b = n(823379),
  M = n(226951),
  P = n(709054),
  U = n(906411),
  w = n(689789),
  x = n(633302),
  G = n(174065),
  k = n(396352),
  B = n(347374),
  F = n(185923),
  V = n(981631),
  H = n(149203),
  Z = n(526761);

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let j = [
H.UX.TOP_GUILD_EMOJI.toString(),
H.UX.FAVORITES.toString(),
H.UX.RECENT.toString(),
H.UX.CUSTOM.toString()
  ].concat(x.ZP.getCategories()),
  W = {
pendingUsages: [],
emojiReactionPendingUsages: []
  };
class K {
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
let t = v.ZP.getMember(this.id, this._userId);
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
    e.allNamesString = ':'.concat(e.name, ':'), e.guildId = this.id, e.type = U.B.GUILD, this._emojiMap[e.id] = e;
  }), this._usableEmojis = a().sortBy(this._emojis.filter(e => this.isUsable(e)), e => e.name), this._emoticons = this._usableEmojis.filter(e => !e.require_colons);
  }
  constructor(e, t, n, r = !1) {
Y(this, 'id', void 0), Y(this, '_userId', void 0), Y(this, '_dirty', !0), Y(this, '_emojis', void 0), Y(this, '_emojiMap', {}), Y(this, '_emoticons', []), Y(this, '_usableEmojis', []), Y(this, '_canSeeServerSubIAP', !1), Y(this, '_totalUsable', 0), this.id = e, this._userId = t, this._emojis = n, this._canSeeServerSubIAP = r;
  }
}
let z = P.default.fromTimestamp(Date.now() - 60 * D.Z.Millis.DAY),
  q = [],
  Q = 2,
  X = j.slice(0),
  $ = {},
  J = {},
  ee = null,
  et = new Map();

function en(e) {
  var t, n;
  let r = er()[e];
  return null != r && null !== (n = null === (t = $[r]) || void 0 === t ? void 0 : t.getUsableEmoji(e)) && void 0 !== n ? n : void 0;
}

function er() {
  if (ei(), null == J)
for (let e in (J = {}, $))
  for (let t of $[e].rawEmojis)
    J[t.id] = e;
  return J;
}
async function ei() {
  if (0 !== Q)
return;
  let e = _.Z.database();
  if (null == e)
return;
  Q = 2;
  let t = await (0, E.gs)('EmojiStore.loadSavedEmojis', () => l.Z.timeAsync('\uD83D\uDCBE', 'loadSavedEmojis', () => f.Z.getAsync(e)));
  if (null != t)
c.Z.dispatch({
  type: 'CACHED_EMOJIS_LOADED',
  emojis: t
});
}

function ea(e) {
  return new d.Z({
computeBonus: () => 100,
computeWeight: e => {
  let t = 1;
  return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t;
},
lookupKey: e => {
  var t;
  return null !== (t = x.ZP.getByName(e)) && void 0 !== t ? t : en(e);
},
afterCompute: () => {
  e(), X = j.slice(0), !a().some($, e => e.usableEmojis.length > 0) && X.splice(j.indexOf(H.UX.CUSTOM), 1);
},
numFrequentlyItems: 42
  });
}
class es {
  static get(e) {
return void 0 === e && (e = null), (null == es._lastInstance || es._lastInstance.guildId !== e) && (es._lastInstance = new es(e)), es._lastInstance;
  }
  static reset() {
es._lastInstance = null;
  }
  static resetFrequentlyUsed() {
null != es._lastInstance && (es._lastInstance.frequentlyUsed = null);
  }
  static resetFrequentlyUsedReactionEmojis() {
null != es._lastInstance && (es._lastInstance.frequentlyUsedReactionEmojis = null);
  }
  static resetFavorites() {
null != es._lastInstance && (es._lastInstance.favorites = null, es._lastInstance.favoriteNamesAndIds = null);
  }
  static clear(e) {
null != es._lastInstance && es._lastInstance.guildId === e && (es._lastInstance = null);
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
let e = eo.frequently.map(e => null != e.id ? this.getById(e.id) : x.ZP.getByName(e.name)).filter(b.lm),
  t = (0, B.Z)(e);
return this.frequentlyUsed = [...t.values()], this.frequentlyUsed;
  }
  getFrequentlyUsedReactionEmojisWithoutFetchingLatest() {
if (this.ensureDisambiguated(), null != this.frequentlyUsedReactionEmojis)
  return this.frequentlyUsedReactionEmojis;
let e = el.frequently.map(e => null != e.id ? this.getById(e.id) : x.ZP.getByName(e.name)).filter(b.lm),
  t = (0, B.Z)(e);
return this.frequentlyUsedReactionEmojis = [...t.values()], this.frequentlyUsedReactionEmojis;
  }
  rebuildFavoriteEmojisWithoutFetchingLatest() {
var e, t;
if (this.ensureDisambiguated(), null != this.favorites && null != this.favoriteNamesAndIds)
  return {
    favorites: this.favorites,
    favoriteNamesAndIds: this.favoriteNamesAndIds
  };
let n = (null !== (t = null === (e = N.Z.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== t ? t : []).map(e => {
    var t;
    return null !== (t = this.getById(e)) && void 0 !== t ? t : x.ZP.getByName(e);
  }).filter(b.lm),
  r = (0, B.Z)(n);
return this.favorites = [...r.values()], this.favoriteNamesAndIds = new Set(r.keys()), {
  favorites: this.favorites,
  favoriteNamesAndIds: this.favoriteNamesAndIds
};
  }
  get favoriteEmojisWithoutFetchingLatest() {
return this.rebuildFavoriteEmojisWithoutFetchingLatest().favorites;
  }
  getEmojiInPriorityOrderWithoutFetchingLatest() {
let {
  canShowReactionsOnMessageHover: e
} = S.Z.getCurrentConfig({
  location: 'getEmojiInPriorityOrderWithoutFetchingLatest'
}, {
  autoTrackExposure: !0
}), {
  canSplitFrecencyList: t
} = w.Z.getCurrentConfig({
  location: 'getEmojiInPriorityOrderWithoutFetchingLatest'
}, {
  autoTrackExposure: !0
}), n = e && t ? this.getFrequentlyUsedReactionEmojisWithoutFetchingLatest() : this.getFrequentlyUsedEmojisWithoutFetchingLatest(), r = new Set();
return this.favoriteEmojisWithoutFetchingLatest.concat(n).filter(e => !r.has(e) && (r.add(e), !0));
  }
  getTopEmojiWithoutFetchingLatest(e) {
if (this.ensureDisambiguated(), null == this.topEmojis) {
  var t;
  let n = et.get(e),
    r = k.Z.getTopEmojiIdsByGuildId(e);
  if (null == n && null == r)
    return q;
  let i = (null !== (t = null == n ? void 0 : n.emojiIds) && void 0 !== t ? t : r).map(e => {
      var t;
      return null !== (t = this.getById(e)) && void 0 !== t ? t : x.ZP.getByName(x.ZP.convertSurrogateToName(e, !1));
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
  return q;
let t = this.newlyAddedEmoji[e];
return null == t ? q : t;
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
  } = t, s = null != r && a().some(r, e), o = null != i && e(i), l = null != i && a().some(h.Z.getTermsForEmoji(i), e), u = null != n && a().some(G.Z.getCaptionsForEmojiById({
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
      if (this.emojisById[t.id] = t, this.customEmojis[t.name] = t, t.type === U.B.GUILD)
        e = t.guildId, n = !0;
      null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : this.groupedCustomEmojis[e] = [t], n && P.default.compare(t.id, z) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : this.newlyAddedEmoji[e] = [t]));
    }
    null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t);
  },
  r = e => {
    if (!Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name))
      t.push(M.Z.escape(e.name)), this.emoticonsByName[e.name] = e;
  };
x.ZP.forEach(n);
let i = e => {
  let t = $[null == e ? V.kod : e];
  null != t && (a().each(t.usableEmojis, n), a().each(t.emoticons, r));
};
for (let e in (i(this.guildId), this.newlyAddedEmoji))
  null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => P.default.compare(t.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[e] = [];
C.ZP.getFlattenedGuildIds().forEach(e => {
  e !== this.guildId && i(e);
}), this.escapedEmoticonNames = t.join('|');
  }
  constructor(e) {
Y(this, 'guildId', void 0), Y(this, 'emoticonRegex', null), Y(this, 'frequentlyUsed', null), Y(this, 'favorites', null), Y(this, 'favoriteNamesAndIds', null), Y(this, 'topEmojis', null), Y(this, 'escapedEmoticonNames', null), Y(this, 'disambiguatedEmoji', null), Y(this, 'customEmojis', void 0), Y(this, 'groupedCustomEmojis', void 0), Y(this, 'emoticonsByName', void 0), Y(this, 'emojisByName', void 0), Y(this, 'emojisById', void 0), Y(this, 'unicodeAliases', void 0), Y(this, 'newlyAddedEmoji', null), Y(this, 'frequentlyUsedReactionEmojis', null), Y(this, 'isFavoriteEmojiWithoutFetchingLatest', e => {
  var t;
  if (null == e)
    return !1;
  let {
    favoriteNamesAndIds: n
  } = this.rebuildFavoriteEmojisWithoutFetchingLatest();
  if (null != e.id)
    return n.has(e.id);
  let r = null !== (t = x.ZP.convertSurrogateToBase(e.surrogates)) && void 0 !== t ? t : e;
  return n.has(r.name);
}), this.guildId = e;
  }
}
Y(es, '_lastInstance', null);
let eo = ea(es.resetFrequentlyUsed),
  el = ea(es.resetFrequentlyUsedReactionEmojis);

function eu() {
  $ = {}, J = {}, es.reset(), et.clear(), Q = 2;
}

function ec(e) {
  if (null != $[e])
delete $[e];
}

function ed() {
  J = null, es.reset(), 0 !== Q && (eo.compute(), el.compute());
}

function e_(e, t) {
  if (ec(e), es.clear(e), null == t)
return;
  let n = y.default.getCurrentUser();
  if (null == n)
return;
  let r = (0, g.r)(e);
  $[e] = new K(e, n.id, t, r);
}

function eE() {
  var e, t, n, r, i, s;
  let o = null === (t = N.Z.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
  null != o && x.ZP.setDefaultDiversitySurrogate(o), es.reset();
  let l = N.Z.frecencyWithoutFetchingLatest,
u = null !== (i = null === (n = l.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== i ? i : {},
c = null !== (s = null === (r = l.emojiReactionFrecency) || void 0 === r ? void 0 : r.emojis) && void 0 !== s ? s : {};
  eo.overwriteHistory(a().mapValues(u, e => ({
...e,
recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), W.pendingUsages), el.overwriteHistory(a().mapValues(c, e => ({
...e,
recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), W.emojiReactionPendingUsages), ! function(e, t) {
let {
  canSplitFrecencyList: n
} = w.Z.getCurrentConfig({
  location: 'populateInitialFrecencyData'
}, {
  autoTrackExposure: !0
});
if (a().isEmpty(e) && a().isEmpty(W.pendingUsages) && N.Z.hasLoaded(Z.yP.FRECENCY_AND_FAVORITES_SETTINGS))
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
    eo.track(e);
if (n && a().isEmpty(t) && a().isEmpty(W.emojiReactionPendingUsages) && N.Z.hasLoaded(Z.yP.FRECENCY_AND_FAVORITES_SETTINGS))
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
    el.track(e);
  }(u, c);
}

function ef(e) {
  if (null == e)
return !1;
  for (let r of e) {
var t, n;
let e = null !== (n = null !== (t = r.id) && void 0 !== t ? t : r.uniqueName) && void 0 !== n ? n : r.name;
null != e && (eo.track(e), W.pendingUsages.push({
  key: e,
  timestamp: Date.now()
}));
  }
  let r = e.length > 0;
  return r && 0 !== Q && eo.compute(), r;
}

function eh(e) {
  let {
guildId: t,
role: n
  } = e;
  if (!(0, m.Z)(n))
return !1;
  {
let e = $[t];
e_(t, null == e ? void 0 : e.emojis), ed();
  }
}
class ep extends(r = u.ZP.PersistedStore) {
  initialize(e) {
this.waitFor(_.Z, O.Z, v.ZP, R.Z, A.default, T.Z, k.Z, y.default, p.Z), null != e && (null != e.pendingUsages && (W.pendingUsages = e.pendingUsages), null != e.emojiReactionPendingUsages && (W.emojiReactionPendingUsages = e.emojiReactionPendingUsages)), this.syncWith([N.Z], eE);
  }
  getState() {
return W;
  }
  get loadState() {
return Q;
  }
  hasPendingUsage() {
return W.pendingUsages.length > 0 || W.emojiReactionPendingUsages.length > 0;
  }
  get categories() {
return X;
  }
  get diversitySurrogate() {
var e;
return null !== (e = x.ZP.getDefaultDiversitySurrogate()) && void 0 !== e ? e : '';
  }
  get emojiFrecencyWithoutFetchingLatest() {
return eo;
  }
  get emojiReactionFrecencyWithoutFetchingLatest() {
return el;
  }
  getGuildEmoji(e) {
var t;
ei();
let n = $[e];
return null !== (t = null == n ? void 0 : n.emojis) && void 0 !== t ? t : [];
  }
  getUsableGuildEmoji(e) {
var t;
ei();
let n = $[e];
return null !== (t = null == n ? void 0 : n.usableEmojis) && void 0 !== t ? t : [];
  }
  getGuilds() {
return $;
  }
  getDisambiguatedEmojiContext(e) {
return ei(), es.get(e);
  }
  getSearchResultsOrder(e, t, n, r) {
let i = t.toLowerCase(),
  s = M.Z.escape(i),
  {
    canSplitFrecencyList: o
  } = w.Z.getCurrentConfig({
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
        s = r === F.Hz.REACTION && o ? el.getScore(t) : eo.getScore(t);
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
ei();
let l = r.toLowerCase().replaceAll(/[ _]/g, ''),
  u = M.Z.escape(l);
if (null == o) {
  let e = RegExp(''.concat(u), 'i');
  t = t => e.test(t.replaceAll('_', ''));
} else
  t = o;
let c = null != n ? n.getGuildId() : null,
  d = es.get(c).nameMatchesChain(t).reduce((e, t) => {
    let r = L.ZP.getEmojiUnavailableReason({
      emoji: t,
      channel: n,
      intention: a,
      forceIncludeExternalGuilds: s
    });
    return r === F.Z5.PREMIUM_LOCKED ? e.locked.push(t) : null == r && e.unlocked.push(t), e;
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
return ei(), en(e);
  }
  getCustomEmojiById(e) {
return ei(),
  function(e) {
    var t, n;
    let r = er()[e];
    return null != r && null !== (n = null === (t = $[r]) || void 0 === t ? void 0 : t.getEmoji(e)) && void 0 !== n ? n : void 0;
  }(e);
  }
  getTopEmoji(e) {
return null == e ? q : (ei(), es.get(e).getTopEmojiWithoutFetchingLatest(e));
  }
  getNewlyAddedEmoji(e) {
return null == e ? q : (ei(), es.get(e).getNewlyAddedEmojiForGuild(e));
  }
  getTopEmojisMetadata(e) {
return et.get(e);
  }
  getEmojiAutosuggestion(e) {
if (null != ee && ee.length > 0) {
  let {
    locked: t,
    unlocked: n
  } = this.searchWithoutFetchingLatest({
    channel: e,
    count: 10,
    query: ee,
    intention: F.Hz.CHAT
  });
  return [
    ...n.slice(0, 5),
    ...t.slice(0, 5)
  ].slice(0, 5);
}
return [];
  }
  hasUsableEmojiInAnyGuild() {
return ei(), P.default.keys($).some(e => $[e].usableEmojis.length > 0);
  }
  hasFavoriteEmojis(e) {
let t = es.get(e);
return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0;
  }
}
Y(ep, 'displayName', 'EmojiStore'), Y(ep, 'persistKey', 'EmojiStoreV2'), Y(ep, 'migrations', [e => ({
  ...e
})]), t.Z = new ep(c.Z, {
  LOGOUT: function() {
W.pendingUsages = [], W.emojiReactionPendingUsages = [];
  },
  BACKGROUND_SYNC: function() {
eu();
  },
  CONNECTION_OPEN: function(e) {
for (let t of (eu(), e.guilds))
  e_(t.id, t.emojis);
Q = e.guilds.every(e => null != e.emojis) ? 1 : 0, ed();
  },
  CACHED_EMOJIS_LOADED: function(e) {
let {
  emojis: t
} = e;
for (let [e, n] of t)
  !Object.hasOwn($, e) && O.Z.isMember(e) && e_(e, n);
ed();
  },
  GUILD_MEMBER_UPDATE: function(e) {
var t;
let {
  guildId: n,
  user: r
} = e;
if (r.id !== (null === (t = y.default.getCurrentUser()) || void 0 === t ? void 0 : t.id))
  return;
let i = $[n];
e_(n, null == i ? void 0 : i.usableEmojis), ed();
  },
  GUILD_CREATE: function(e) {
0 !== Q && null == e.guild.emojis && null != e.guild.emojiUpdates && (Q = 0), e_(e.guild.id, e.guild.emojis), ed();
  },
  GUILD_UPDATE: function(e) {
e_(e.guild.id, e.guild.emojis), ed();
  },
  GUILD_EMOJIS_UPDATE: function(e) {
let {
  guildId: t,
  emojis: n
} = e;
e_(t, n), ed();
  },
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
ec(t.id), et.delete(t.id), ed();
  },
  MESSAGE_REACTION_ADD: function(e) {
if (!e.optimistic)
  return !1;
let t = null != e.emoji.id && '0' !== e.emoji.id ? e.emoji : x.ZP.getByName(x.ZP.convertSurrogateToName(e.emoji.name, !1));
if (null == t)
  return !1;
(function(e) {
  if (null == e)
    return 0;
  for (let r of e) {
    var t, n;
    let e = null !== (n = null !== (t = r.id) && void 0 !== t ? t : r.uniqueName) && void 0 !== n ? n : r.name;
    null != e && (el.track(e), W.emojiReactionPendingUsages.push({
      key: e,
      timestamp: Date.now()
    }));
  }
  let r = e.length > 0;
  r && 0 !== Q && el.compute();
}([t]), ef([t]));
  },
  EMOJI_TRACK_USAGE: function(e) {
let {
  emojiUsed: t
} = e;
ef(t);
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
let {
  settings: {
    type: t
  },
  wasSaved: n
} = e;
if (h.Z.setEmojiLocale(A.default.locale), t !== Z.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n)
  return !1;
W.pendingUsages = [], W.emojiReactionPendingUsages = [];
  },
  GUILD_ROLE_CREATE: eh,
  GUILD_ROLE_UPDATE: eh,
  TOP_EMOJIS_FETCH_SUCCESS: function(e) {
let {
  guildId: t,
  topEmojisMetadata: n
} = e;
et.set(t, {
  emojiIds: n.map(e => e.emojiId),
  topEmojisTTL: o()(o()()).add(1, 'days').valueOf()
});
  },
  EMOJI_AUTOSUGGESTION_UPDATE: function(e) {
let {
  text: t
} = e;
ee = t;
  }
});