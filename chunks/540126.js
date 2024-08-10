n.d(t, {
  Bz: function() {
return ep;
  },
  Cb: function() {
return W;
  },
  VR: function() {
return es;
  },
  ZP: function() {
return $;
  },
  p2: function() {
return K;
  },
  wF: function() {
return q;
  },
  wZ: function() {
return J;
  },
  wd: function() {
return X;
  },
  zR: function() {
return ef;
  }
}), n(47120), n(411104), n(653041), n(390547), n(724458), n(733860);
var i, s, l, r, a = n(512722),
  d = n.n(a),
  h = n(392711),
  o = n.n(h),
  u = n(317381),
  c = n(812206),
  C = n(12498),
  g = n(430198),
  p = n(931261),
  f = n(924301),
  v = n(160404),
  I = n(57132),
  E = n(798423),
  S = n(18036),
  y = n(798379),
  w = n(398758),
  _ = n(22082),
  m = n(601070),
  A = n(569471),
  N = n(131704),
  L = n(680089),
  R = n(592125),
  Z = n(58468),
  O = n(430824),
  P = n(496675),
  T = n(306680),
  b = n(944486),
  D = n(9156),
  G = n(979651),
  M = n(938475),
  V = n(823379),
  U = n(709054),
  F = n(968358),
  B = n(203818),
  H = n(443063),
  z = n(981631),
  x = n(176505),
  Y = n(231338);

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let j = 'placeholder-channel-id',
  W = 2;
(l = i || (i = {}))[l.CannotShow = 1] = 'CannotShow', l[l.DoNotShow = 2] = 'DoNotShow', l[l.WouldShowIfUncollapsed = 3] = 'WouldShowIfUncollapsed', l[l.Show = 4] = 'Show', (r = s || (s = {}))[r.GUILD_ACTIONS = 0] = 'GUILD_ACTIONS', r[r.FAVORITES = 1] = 'FAVORITES', r[r.RECENTS = 2] = 'RECENTS', r[r.UNCATEGORIZED_CHANNELS = 3] = 'UNCATEGORIZED_CHANNELS', r[r.FIRST_NAMED_CATEGORY = 4] = 'FIRST_NAMED_CATEGORY';
let J = 0,
  K = 1,
  X = 3,
  q = 4,
  Q = new Set([String(H.z.GUILD_DIRECTORY)]);
class $ {
  getGuild(e, t) {
var n;
return (!(e in this.guilds) || !o().isEqual(null === (n = this.guilds[e]) || void 0 === n ? void 0 : n.getGuildActionSection().getRows().filter(e => !Q.has(e)), t)) && (this.guilds[e] = new ee(e, t)), this.guilds[e];
  }
  getGuildChannelRowsOnly(e) {
return !(e in this.guilds) && (this.guilds[e] = new ee(e, [])), this.guilds[e];
  }
  clear() {
this.guilds = {};
  }
  clearGuildId(e) {
return null != e && e in this.guilds && (delete this.guilds[e], !0);
  }
  updateRecentsCategory(e) {
var t, n;
if (null == e || !(e in this.guilds))
  return !1;
return null !== (n = null === (t = this.guilds[e]) || void 0 === t ? void 0 : t.updateRecentsCategory()) && void 0 !== n && n;
  }
  nonPositionalChannelIdUpdate(e) {
let t = R.Z.getBasicChannel(e);
return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof N.Sf || null != (t = R.Z.getChannel(e))) && this.nonPositionalChannelUpdate(t);
  }
  nonPositionalChannelUpdate(e) {
if (null == e.guild_id)
  return !1;
let t = this.guilds[e.guild_id];
if (null == t)
  return !1;
let n = !1;
return e.isThread() && (n = this.nonPositionalChannelIdUpdate(e.parent_id)), t.nonPositionalChannelUpdate(e) || n;
  }
  updateSubtitles(e, t) {
(null == e ? Object.values(this.guilds) : e in this.guilds ? [this.guilds[e]] : []).forEach(e => e.updateSubtitles(t));
  }
  constructor() {
k(this, 'guilds', {});
  }
}
class ee {
  get initializationData() {
return {
  selectedChannel: R.Z.getChannel(b.Z.getChannelId()),
  selectedVoiceChannelId: b.Z.getVoiceChannelId(),
  activeJoinedRelevantThreads: m.Z.getActiveJoinedRelevantThreadsForGuild(this.id),
  activeJoinedUnreadThreads: m.Z.getActiveJoinedUnreadThreadsForGuild(this.id)
};
  }
  invalidate() {
this.sections = null, this.rows = null, this.sortedNamedCategories = null, this.firstVoiceChannel = void 0, this.version++;
  }
  getSortedNamedCategories() {
return null == this.sortedNamedCategories && this.getRows(), this.sortedNamedCategories;
  }
  getSortedCategories() {
return [
  this.favoritesCategory,
  this.recentsCategory,
  this.noParentCategory,
  ...this.getSortedNamedCategories(),
  this.voiceChannelsCategory
];
  }
  getSections() {
let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
return (null == this.sections && (this.sections = this.getRows().map(e => e.length)), e) ? [...this.sections] : this.sections;
  }
  getRows() {
if (null == this.rows) {
  this.sortedNamedCategories = o().sortBy(Object.values(this.categories), e => e.record.position), this.rows = [
    this.guildActionSection,
    this.favoritesCategory,
    this.recentsCategory,
    this.noParentCategory,
    ...this.sortedNamedCategories,
    this.voiceChannelsCategory
  ].map(e => e.getRows());
  let e = 0;
  for (let t of [
      this.noParentCategory,
      ...this.sortedNamedCategories
    ])
    for (let n of (t.position = ++e, t.getShownChannelIds()))
      t.channels[n].position = ++e;
}
return this.rows;
  }
  getCategoryFromSection(e) {
switch (e) {
  case J:
    throw Error('Invalid section. Use getGuildActionSection instead');
  case K:
    return this.favoritesCategory;
  case X:
    return this.noParentCategory;
  case this.recentsSectionNumber:
    return this.recentsCategory;
  case this.voiceChannelsSectionNumber:
    return this.voiceChannelsCategory;
  default:
    return this.getSortedNamedCategories()[e - q];
}
  }
  getNamedCategoryFromSection(e) {
return e -= q, d()(e >= 0 && e < this.getSortedNamedCategories().length, 'invalid section index '.concat(e)), this.getSortedNamedCategories()[e];
  }
  getGuildActionSection() {
return this.guildActionSection;
  }
  getChannelFromSectionRow(e, t) {
let n = this.getCategoryFromSection(e);
if (null == n)
  return null;
let i = n.channels[n.getShownChannelIds()[t]];
return null == i ? null : {
  category: n,
  channel: i
};
  }
  isPlaceholderRow(e, t) {
return d()(e > J, 'Invalid section'), e !== this.recentsSectionNumber && this.getRows()[e][t] === j;
  }
  getFirstVoiceChannel(e) {
if (void 0 === this.firstVoiceChannel) {
  if (this.firstVoiceChannel = this.favoritesCategory.getFirstVoiceChannel(e), null != this.firstVoiceChannel)
    return this.firstVoiceChannel;
  if (this.firstVoiceChannel = this.noParentCategory.getFirstVoiceChannel(e), null != this.firstVoiceChannel)
    return this.firstVoiceChannel;
  for (let t of this.getSortedNamedCategories())
    if (null != t.getFirstVoiceChannel(e)) {
      this.firstVoiceChannel = t.getFirstVoiceChannel(e);
      break;
    }
}
return this.firstVoiceChannel;
  }
  getSectionRowsFromChannel(e) {
if (function(e) {
    return null != e && ey.has(e);
  }(e))
  return [{
    row: this.getGuildActionSection().getRows().indexOf(e),
    section: J
  }];
let t = [],
  n = R.Z.getChannel(e);
if (null == n || null == e)
  return t;
let i = n.isThread();
if (i && (n = R.Z.getChannel(n.parent_id)), null == n)
  return t;
let s = this.favoritesCategory.getShownChannelIds().indexOf(n.id);
s >= 0 && t.push({
  section: K,
  row: s
});
let l = this.recentsCategory.getShownChannelIds().indexOf(n.id);
if (l >= 0 && t.push({
    section: this.recentsSectionNumber,
    row: l
  }), n.type === z.d4z.GUILD_CATEGORY)
  return [{
    section: o().findIndex(this.getSortedNamedCategories(), e => e.id === (null == n ? void 0 : n.id)) + q
  }];
let r = this.getCategory(n),
  a = r instanceof en ? X : this.getSortedNamedCategories().indexOf(r) + q,
  d = r.getShownChannelIds().indexOf(n.id);
if (a >= 0 && d >= 0) {
  let s = i ? r.channels[n.id].threadIds.indexOf(e) : 0;
  t.push({
    section: a,
    row: d,
    threadOffset: s
  });
}
let h = this.voiceChannelsCategory.getShownChannelIds().indexOf(n.id);
return h >= 0 && t.push({
  section: this.voiceChannelsSectionNumber,
  row: h
}), t;
  }
  getCategory(e) {
return null != e.parent_id && e.parent_id in this.categories ? this.categories[e.parent_id] : this.noParentCategory;
  }
  updateRecentsCategory() {
let e = this.recentsCategory.updateAllChannels(this.initializationData);
return e && this.invalidate(), e;
  }
  nonPositionalChannelUpdate(e) {
let t = this.initializationData,
  n = this.getCategory(e).updateChannel(e, t);
return this.favoritesCategory.updateChannel(e, t) && (n = !0), this.recentsCategory.updateChannel(e, t) && (n = !0), this.voiceChannelsCategory.updateChannel(e, t) && (n = !0), n && this.invalidate(), n;
  }
  getSlicedChannels(e, t) {
d()(e.length > 0, 'must have at least one channel in the slice');
let n = e[0],
  i = e[e.length - 1],
  s = !0,
  l = !1,
  r = [],
  a = [];
for (let e of this.getSortedCategories()) {
  let d = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
  for (let t of e.getShownChannelIds()) {
    let h = e.channels[t];
    s && (h.id === n.id ? s = !1 : !d && r.push(h)), l && !d && a.push(h), !s && !l && h.id === i.id && (l = !0);
  }
}
return [
  r,
  e,
  a
];
  }
  getChannels(e) {
let t = [];
if (null == this.allChannelsById)
  for (let e of (this.allChannelsById = {}, this.getSortedCategories()))
    for (let t in e.channels)
      this.allChannelsById[t] = e.channels[t];
for (let n of e)
  null != this.allChannelsById[n] && t.push(this.allChannelsById[n]);
return t;
  }
  updateSubtitles(e) {
let t = [];
if (null != e) {
  let n = R.Z.getChannel(e);
  if (null != n) {
    if (n.id in this.favoritesCategory.channels)
      t = [this.favoritesCategory.channels[n.id]];
    else if (n.id in this.recentsCategory.channels)
      t = [this.recentsCategory.channels[n.id]];
    else {
      let i = this.getCategory(n);
      null != i && null != i.channels[e] && (t = [i.channels[e]]);
    }
  }
} else
  t = o()(this.getSortedCategories()).map(e => Object.values(e.channels)).flatten().value();
let n = !1;
return t.forEach(e => {
  e.updateSubtitle() && (n = !0);
}), n && this.version++, n;
  }
  forEachShownChannel(e, t) {
for (let n of this.getSortedCategories()) {
  if ((null == t ? !void 0 : !t.ignoreRecents) || n !== this.recentsCategory)
    for (let t of n.getShownChannelIds()) {
      let i = n.channels[t];
      for (let t of (e(i.record), i.threadIds)) {
        let n = R.Z.getChannel(t);
        null != n && e(n);
      }
    }
}
  }
  forEachChannel(e, t) {
for (let n of this.getSortedCategories()) {
  if ((null == t ? !void 0 : !t.ignoreRecents) || n !== this.recentsCategory)
    for (let t of n.getChannelRecords())
      e(t);
}
  }
  constructor(e, t) {
var n, i;
k(this, 'id', void 0), k(this, 'hideMutedChannels', void 0), k(this, 'favoritesSectionNumber', void 0), k(this, 'recentsSectionNumber', void 0), k(this, 'voiceChannelsSectionNumber', void 0), k(this, 'mutedChannelIds', void 0), k(this, 'optedInChannels', void 0), k(this, 'optInEnabled', void 0), k(this, 'hideResourceChannels', void 0), k(this, 'favoriteChannelIds', void 0), k(this, 'suggestedFavoriteChannelId', void 0), k(this, 'collapsedCategoryIds', void 0), k(this, 'categories', void 0), k(this, 'noParentCategory', void 0), k(this, 'favoritesCategory', void 0), k(this, 'recentsCategory', void 0), k(this, 'voiceChannelsCategory', void 0), k(this, 'guildActionSection', void 0), k(this, 'sortedNamedCategories', void 0), k(this, 'sections', void 0), k(this, 'rows', void 0), k(this, 'firstVoiceChannel', void 0), k(this, 'allChannelsById', void 0), k(this, 'version', void 0), this.id = e, this.sortedNamedCategories = null, this.sections = null, this.rows = null, this.firstVoiceChannel = void 0, this.allChannelsById = null, this.version = 0, this.hideMutedChannels = D.ZP.isGuildCollapsed(this.id), this.mutedChannelIds = D.ZP.getMutedChannels(this.id), this.optedInChannels = null !== (n = D.ZP.getOptedInChannelsWithPendingUpdates(this.id)) && void 0 !== n ? n : D.ZP.getOptedInChannels(this.id), this.optInEnabled = (0, w.r1)(this.id), this.hideResourceChannels = (0, p.s)(this.id), this.favoriteChannelIds = new Set(null !== (i = D.ZP.getGuildFavorites(this.id)) && void 0 !== i ? i : []), this.suggestedFavoriteChannelId = S.Z.getSuggestedChannelId(this.id), this.collapsedCategoryIds = L.Z.getCollapsedCategories();
let s = R.Z.getMutableGuildChannelsForGuild(this.id),
  l = O.Z.getGuild(this.id),
  r = {},
  a = [],
  h = {};
for (let e in s) {
  let t = s[e];
  t.type === z.d4z.GUILD_CATEGORY && (r[t.id] = t, h[t.id] = []);
}
let u = [],
  c = [],
  C = [],
  g = this.initializationData;
for (let e in s) {
  let t = s[e];
  if (t.type !== z.d4z.GUILD_CATEGORY) {
    if (t.type === z.d4z.GUILD_DIRECTORY) {
      null != l && !l.hasFeature(z.oNc.HUB) && C.push(t);
      continue;
    }
    eS(this, t, g) ? u.push(t) : (t.type === z.d4z.GUILD_VOICE || t.type === z.d4z.GUILD_STAGE_VOICE) && (null != t.parent_id && null != r[t.parent_id] && c.push(r[t.parent_id]), c.push(t)), null != t.parent_id && t.parent_id in h ? h[t.parent_id].push(t) : a.push(t);
  }
}
for (let e in (this.categories = {}, h))
  this.categories[e] = new ei(this, r[e], h[e], g);
this.recentsSectionNumber = 2, this.favoritesSectionNumber = K, this.noParentCategory = new en(this, a, g), this.favoritesCategory = new es(this, g), this.recentsCategory = (0, E.Q)() ? new el(this, s, g) : new er(this, u, g), this.voiceChannelsCategory = new ea(this, c, r, g), this.guildActionSection = new ed(t, C.length > 0), d()(!('null' in this.categories), 'somehow a null got into categories'), this.voiceChannelsSectionNumber = q + o().size(this.categories);
  }
}
class et {
  updateChannel(e, t) {
return !!(e.id in this.channels && this.channels[e.id].updateChannel(e, t)) && (this.invalidate(), !0);
  }
  invalidate() {
this.shownChannelIds = null;
  }
  getRows() {
let e = this.getShownChannelIds();
return 0 === e.length && this.shouldShowEmptyCategory() ? [j] : e;
  }
  shouldShowEmptyCategory() {
return o().some(this.channels, e => e.renderLevel >= 3);
  }
  getShownChannelIds() {
return null == this.shownChannelIds && (this.shownChannelIds = o()(this.channels).values().filter(e => 4 === e.renderLevel).sortBy(e => {
  let {
    record: t
  } = e;
  return t.isGuildVocal() ? t.position + 10000 : t.position;
}).map(e => e.id).value()), this.shownChannelIds;
  }
  getShownChannelAndThreadIds() {
let e = o()(this.channels).values().flatMap(e => e.threadIds).value();
return this.getShownChannelIds().concat(e);
  }
  isEmpty() {
return 0 === this.getShownChannelIds().length;
  }
  getChannelRecords() {
return o()(this.channels).values().filter(e => e.renderLevel > 1).map(e => e.record).value();
  }
  getFirstVoiceChannel(e) {
for (let t of this.getShownChannelIds()) {
  if (e && this.channels[t].record.isGuildStageVoice())
    return this.channels[t];
  if (!e && this.channels[t].record.isGuildVocal())
    return this.channels[t];
}
return null;
  }
  constructor(e) {
k(this, 'guild', void 0), k(this, 'isMuted', void 0), k(this, 'isCollapsed', void 0), k(this, 'position', void 0), k(this, 'channels', void 0), k(this, 'shownChannelIds', void 0), this.guild = e, this.isMuted = !1, this.isCollapsed = !1, this.position = -1, this.channels = {}, this.shownChannelIds = null;
  }
}
class en extends et {
  constructor(e, t, n) {
super(e), this.channels = o()(t).map(e => new eo(this, e, n)).keyBy(e => e.id).value();
  }
}
class ei extends et {
  shouldShowEmptyCategory() {
return !!(super.shouldShowEmptyCategory() || P.Z.can(Y.Pl.MANAGE_CHANNELS, this.record) && P.Z.can(Y.Pl.VIEW_CHANNEL, this.record) && o().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id))) || !1;
  }
  constructor(e, t, n, i) {
for (let s of (super(e), k(this, 'id', void 0), k(this, 'record', void 0), this.record = t, this.id = t.id, this.isCollapsed = !0 === e.collapsedCategoryIds[t.id], this.isMuted = e.mutedChannelIds.has(t.id), this.channels = {}, n))
  this.channels[s.id] = new eo(this, s, i);
  }
}
class es extends et {
  updateChannel(e, t) {
let n = e.id in this.channels && D.ZP.isFavorite(e.guild_id, e.id),
  i = S.Z.getSuggestedChannelId(e.guild_id);
return (e.id === i && !n && (t = {
  ...t,
  activeJoinedRelevantThreads: {},
  activeJoinedUnreadThreads: {}
}), e.id in this.channels && this.channels[e.id].updateChannel(e, t)) ? (this.invalidate(), !0) : e.id in this.channels && e.id !== i && !n && (delete this.channels[e.id], this.invalidate(), !0);
  }
  getFirstVoiceChannel(e) {
return null;
  }
  constructor(e, t) {
var n;
if (super(e), !e.optInEnabled && ! function() {
    return !1;
  }())
  return;
this.channels = o()(null !== (n = D.ZP.getGuildFavorites(e.id)) && void 0 !== n ? n : []).map(e => R.Z.getChannel(e)).filter(V.lm).map(e => new eu(this, e, t)).keyBy(e => e.id).value();
let i = S.Z.getSuggestedChannelId(e.id),
  s = R.Z.getChannel(i);
null != s && null != i && (this.channels[i] = new eu(this, s, {
  ...t,
  activeJoinedRelevantThreads: {},
  activeJoinedUnreadThreads: {}
}));
  }
}
class el extends et {
  shouldShowEmptyCategory() {
return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory();
  }
  updateAllChannels(e) {
return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, !1);
  }
  updateChannel(e, t) {
if (!this.enabled)
  return !1;
if ((0, N.Q5)(e.type)) {
  let t = this.channels[e.parent_id];
  return null != t && this.updateShownChannelIds(t);
}
if (!(0, N.vc)(e.type))
  return !1;
let n = super.updateChannel(e, t),
  i = this.channels[e.id];
return null == i ? (i = new eC(this, e, t), this.channels[e.id] = i, this.invalidate(), !0) : this.updateShownChannelIds(i) || n;
  }
  getFirstVoiceChannel(e) {
return null;
  }
  getShownChannelIds() {
if (null == this.shownChannelIds) {
  let e = this.isCollapsed ? 4 : 3;
  this.shownChannelIds = this.enabled ? o()(this.channels).filter(t => t.renderLevel >= e).map(e => [
    e.id,
    e.lastMessageTimestamp,
    e.renderLevel
  ]).filter(e => {
    let [, t, n] = e;
    return 4 === n || t > 0 && Date.now() - t < el.MAX_TIMESTAMP_DELTA;
  }).sortBy(e => {
    let [, t, n] = e;
    return -(t - (4 === n ? 0 : U.DISCORD_EPOCH));
  }).take(el.MAX_RECENT_CHANNELS).sortBy(e => {
    let [, t] = e;
    return -t;
  }).map(e => {
    let [t] = e;
    return t;
  }).value() : [];
}
return this.shownChannelIds;
  }
  updateShownChannelIds(e) {
var t;
let n = this.isCollapsed ? 4 : 3;
if (null == this.shownChannelIds || e.renderLevel < n)
  return !1;
if (e.lastMessageTimestamp > (null === (t = this.channels[this.shownChannelIds[0]]) || void 0 === t ? void 0 : t.lastMessageTimestamp)) {
  let t = this.shownChannelIds.indexOf(e.id);
  return t > -1 && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > el.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, el.MAX_RECENT_CHANNELS)), !0;
}
return !1;
  }
  constructor(e, t, n) {
if (super(e), k(this, 'enabled', !1), this.isCollapsed = y.Z.isCollapsed(e.id), this.enabled = function() {
    return !1;
  }() && Object.keys(t).length >= el.MIN_READABLE_CHANNELS, this.enabled)
  for (let e of Object.values(t))
    (0, N.vc)(e.type) && !(0, N.Q5)(e.type) && (this.channels[e.id] = new eC(this, e, n));
  }
}
k(el, 'MIN_READABLE_CHANNELS', 7), k(el, 'MAX_RECENT_CHANNELS', 10), k(el, 'MAX_TIMESTAMP_DELTA', 604800000);
class er extends et {
  updateAllChannels(e) {
let t = !1;
return U.default.keys(this.channels).forEach(n => {
  this.updateChannel(this.channels[n].record, e) && (t = !0);
}), t;
  }
  updateChannel(e, t) {
let n = super.updateChannel(e, t);
if (this.guild.optInEnabled) {
  let n = this.channels[e.id],
    i = eS(this.guild, e, t);
  if (i && null == n)
    return this.channels[e.id] = new ec(this, e, t), this.invalidate(), !0;
  if (!i && null != n)
    return delete this.channels[e.id], this.invalidate(), !0;
}
return n;
  }
  getFirstVoiceChannel(e) {
return null;
  }
  getShownChannelIds() {
if (null == this.shownChannelIds) {
  let e = o()(this.channels).values().filter(e => 4 === e.renderLevel || 3 === e.renderLevel).filter(e => !e.record.isGuildVocal()),
    t = e.sortBy(e => {
      let {
        record: t
      } = e;
      return t.position;
    }).take(5).value(),
    n = new Set([
      ...e.filter(e => 4 === e.renderLevel).value(),
      ...t
    ]);
  this.shownChannelIds = o()([...n]).sortBy(e => {
    let {
      record: t
    } = e;
    return t.position;
  }).map(e => e.id).value();
}
return this.shownChannelIds;
  }
  constructor(e, t, n) {
if (super(e), !e.optInEnabled || v.Z.isFullServerPreview(e.id))
  return;
this.isCollapsed = !1, this.isMuted = !1, this.channels = o()(t).map(e => new ec(this, e, n)).keyBy(e => e.id).value();
  }
}
class ea extends et {
  invalidate() {
super.invalidate(), this.hiddenChannelIds = null;
  }
  getHiddenChannelIds() {
if (!this.guild.optInEnabled)
  return [];
if (null == this.hiddenChannelIds) {
  let e = o()(this.channels).filter(e => 3 === e.renderLevel).value();
  if (e.every(e => e.record.isCategory()))
    return this.hiddenChannelIds = [], this.hiddenChannelIds;
  this.hiddenChannelIds = e.map(e => e.id);
}
return this.hiddenChannelIds;
  }
  getRows() {
if (!this.guild.optInEnabled)
  return [];
let e = this.getShownChannelIds();
return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [j] : e;
  }
  getShownChannelIds() {
if (!this.guild.optInEnabled)
  return [];
if (null == this.shownChannelIds) {
  let t = o()(this.channels).filter(e => 4 === e.renderLevel).orderBy([
    e => function(e, t) {
      if (e.record.type === z.d4z.GUILD_CATEGORY)
        return e.record.position;
      if (null != e.record.parent_id) {
        var n, i;
        return null !== (i = null === (n = t[e.record.parent_id]) || void 0 === n ? void 0 : n.position) && void 0 !== i ? i : -1;
      }
      return -1;
    }(e, this.categoriesById),
    e => e.record.type === z.d4z.GUILD_CATEGORY ? -1 : e.record.position
  ], [
    'asc',
    'asc'
  ]).value();
  this.shownChannelIds = [];
  for (let n = 0; n < t.length; n++) {
    var e;
    let i = t[n];
    if ((!(n < t.length - 1) || i.record.type !== z.d4z.GUILD_CATEGORY || (null === (e = t[n + 1]) || void 0 === e ? void 0 : e.record.type) !== z.d4z.GUILD_CATEGORY) && (n !== t.length - 1 || i.record.type !== z.d4z.GUILD_CATEGORY))
      this.shownChannelIds.push(i.id);
  }
}
return this.shownChannelIds;
  }
  getFirstVoiceChannel(e) {
return null;
  }
  constructor(e, t, n, i) {
if (super(e), k(this, 'categoriesById', void 0), k(this, 'hiddenChannelIds', void 0), this.categoriesById = n, this.hiddenChannelIds = null, !e.optInEnabled)
  return;
this.isCollapsed = B.Z.isVoiceCategoryCollapsed(e.id), this.isMuted = !1, this.categoriesById = n, this.channels = o()(t).map(e => new eg(this, e, i)).keyBy(e => e.id).value();
  }
}
class ed {
  isEmpty() {
return 0 === this.guildActionRows.length;
  }
  getRows() {
return this.guildActionRows;
  }
  getRow(e) {
return this.guildActionRows[e];
  }
  constructor(e, t) {
k(this, 'guildActionRows', void 0), this.guildActionRows = e.map(String), t && this.guildActionRows.push(String(H.z.GUILD_DIRECTORY));
  }
}
class eh {
  get isMuted() {
return this.category.guild.mutedChannelIds.has(this.id);
  }
  get isCollapsed() {
return Z.Z.isCollapsed(this.id);
  }
  get isFirstVoiceChannel() {
return this.category.getFirstVoiceChannel() === this;
  }
  get lastMessageTimestamp() {
return Math.max(T.ZP.lastMessageTimestamp(this.id), ...this.threadIds.map(T.ZP.lastMessageTimestamp));
  }
  updateChannel(e, t) {
let n = !1;
null != e && e !== this.record && (this.record = e, n = !0);
let i = this.computeState(t);
return (i.renderLevel !== this.renderLevel || !o().isEqual(i.threadIds, this.threadIds)) && (this.renderLevel = i.renderLevel, this.threadIds = i.threadIds, this.threadCount = o().size(i.threadIds), n = !0), 4 === this.renderLevel && this.updateSubtitle() && (n = !0), n;
  }
  updateSubtitle() {
let e = this.computeSubtitle();
return !o().isEqual(this.subtitle, e) && (this.subtitle = e, !0);
  }
  computeSubtitle() {
return ep(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled);
  }
  constructor(e, t, n) {
k(this, 'category', void 0), k(this, 'record', void 0), k(this, 'id', void 0), k(this, 'position', void 0), k(this, 'threadIds', void 0), k(this, 'threadCount', void 0), k(this, 'subtitle', void 0), k(this, 'renderLevel', void 0), this.category = e, this.record = t, this.position = -1, this.threadIds = [], this.threadCount = 0, this.subtitle = null, this.renderLevel = 1, this.id = t.id;
let {
  renderLevel: i,
  threadIds: s
} = this.computeState(n);
this.renderLevel = i, this.threadCount = o().size(s), this.threadIds = s, 4 === i && (this.subtitle = this.computeSubtitle());
  }
}
class eo extends eh {
  computeState(e) {
var t;
let {
  selectedChannel: n,
  selectedVoiceChannelId: i,
  activeJoinedRelevantThreads: s,
  activeJoinedUnreadThreads: l
} = e;
if (!P.Z.can(Y.Pl.VIEW_CHANNEL, this.record)) {
  if (this.id === i)
    return {
      renderLevel: 4,
      threadIds: []
    };
  if (!g.Z.isChannelGatedAndVisible(this.record.guild_id, this.record.id))
    return {
      renderLevel: 1,
      threadIds: []
    };
}
let r = this.record.parent_id,
  a = this.category.guild;
if (eI(a, this.record))
  return {
    renderLevel: 1,
    threadIds: []
  };
let d = (null == n ? void 0 : n.id) === this.id || i === this.id,
  h = null != n && n.isThread() && n.parent_id === this.id,
  u = null !== (t = d || h || !this.category.isCollapsed && !this.isMuted ? s[this.id] : l[this.id]) && void 0 !== t ? t : {},
  c = ef(this.record, u, n, i, a.hideMutedChannels);
return a.optInEnabled && a.hideResourceChannels && this.record.hasFlag(x.zZ.IS_GUILD_RESOURCE_CHANNEL) ? {
  renderLevel: d ? 4 : 1,
  threadIds: c
} : !a.optInEnabled || a.optedInChannels.has(this.id) || null != r && a.optedInChannels.has(r) ? d || h || !o().isEmpty(c) || T.ZP.getMentionCount(this.id) > 0 ? {
  renderLevel: 4,
  threadIds: c
} : a.hideMutedChannels && a.mutedChannelIds.has(this.id) ? {
  renderLevel: 2,
  threadIds: c
} : this.category.isCollapsed && (a.mutedChannelIds.has(this.id) || null != r && a.mutedChannelIds.has(r) || this.record.isGuildVocal() || this.record.type === z.d4z.GUILD_STORE || (0, N.vc)(this.record.type) && !T.ZP.hasUnread(this.record.id)) ? {
  renderLevel: 3,
  threadIds: c
} : {
  renderLevel: 4,
  threadIds: c
} : {
  renderLevel: 2,
  threadIds: c
};
  }
}
class eu extends eh {
  computeState(e) {
var t;
let {
  selectedChannel: n,
  selectedVoiceChannelId: i,
  activeJoinedRelevantThreads: s
} = e;
return P.Z.can(Y.Pl.VIEW_CHANNEL, this.record) ? {
  renderLevel: 4,
  threadIds: ef(this.record, null !== (t = s[this.id]) && void 0 !== t ? t : {}, n, i, !1)
} : {
  renderLevel: 1,
  threadIds: []
};
  }
}
class ec extends eh {
  computeState(e) {
var t;
let {
  selectedChannel: n,
  selectedVoiceChannelId: i,
  activeJoinedRelevantThreads: s
} = e;
return P.Z.can(Y.Pl.VIEW_CHANNEL, this.record) ? {
  renderLevel: eE(this, e) ? 4 : 3,
  threadIds: ef(this.record, null !== (t = s[this.id]) && void 0 !== t ? t : {}, n, i, !1)
} : {
  renderLevel: 1,
  threadIds: []
};
  }
}
class eC extends eo {
  computeState(e) {
let {
  renderLevel: t,
  threadIds: n
} = super.computeState(e);
if (t > 1) {
  let i = this.record.parent_id,
    s = this.category.guild;
  s.mutedChannelIds.has(this.id) || null != i && s.mutedChannelIds.has(i) ? t = 2 : 4 === t ? t = 3 : 2 === t && eS(this.category.guild, this.record, e) && (t = 3), 3 === t && eE(this, e) && (t = 4), n = o().sortBy(n, e => -T.ZP.lastMessageTimestamp(e));
}
return {
  renderLevel: t,
  threadIds: n
};
  }
}
class eg extends eo {
  getRenderLevel(e) {
let t = this.category.guild;
return !P.Z.can(Y.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || eI(t, this.record) ? 1 : this.category.isCollapsed ? o().some(G.Z.getVoiceStatesForChannel(this.record.id)) ? 4 : 3 : 4;
  }
  computeState(e) {
let t = super.computeState(e),
  n = this.getRenderLevel(t.renderLevel);
return 4 === n && (this.subtitle = ep(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)), {
  threadIds: [],
  renderLevel: n
};
  }
}

function ep(e, t, n) {
  if (e.type === z.d4z.GUILD_VOICE) {
let i = f.ZP.getActiveEventByChannel(e.id);
if (null != i)
  return {
    type: 'event',
    name: i.name
  };
let s = M.ZP.getVoiceStatesForChannel(e);
if (n && t && (0, F.a)(s))
  return {
    type: 'go-live'
  };
let l = C.Z.getChannelStatus(e);
if (null != l && l.length > 0)
  return {
    type: 'voice',
    text: l
  };
let r = u.ZP.getEmbeddedActivitiesForChannel(e.id),
  a = (null != r ? r : []).map(e => {
    var t;
    return null === (t = c.Z.getApplication(e.applicationId)) || void 0 === t ? void 0 : t.name;
  }).filter(V.lm);
return a.length > 0 ? {
  type: 'embedded-activities',
  name: a.join(', ')
} : null;
  }
  return null;
}

function ef(e, t, n, i, s) {
  let l = null != n && (n.id === e.id || i === e.id),
r = null != n && n.isThread() && n.parent_id === e.id;
  if (N.uC.has(e.type)) {
let e = o().sortBy(Object.values(t), e => -e.joinTimestamp).map(e => e.channel.id);
if (l)
  return e;
if (r)
  return !(n.id in t) && !(0, I.cn)() && e.unshift(n.id), e;
else if (s)
  return e.filter(e => !A.Z.isMuted(e) || T.ZP.getMentionCount(e) > 0);
else
  return e;
  }
  return [];
}

function ev() {
  return !1;
}

function eI(e, t) {
  return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1);
}

function eE(e, t) {
  let {
selectedChannel: n,
activeJoinedRelevantThreads: i
  } = t;
  if (T.ZP.getMentionCount(e.id) > 0)
return !0;
  for (let t in i[e.id])
if (T.ZP.getMentionCount(t) > 0)
  return !0;
  if (null != n && (n.id === e.id || n.isThread() && n.parent_id === e.id))
return true;
  let s = _.Z.getNewChannelIds(e.category.guild.id);
  if (s.size > W);
  else if (s.has(e.id))
return !0;
  return !1;
}

function eS(e, t, n) {
  let {
selectedChannel: i,
activeJoinedRelevantThreads: s
  } = n;
  if (t.type === z.d4z.GUILD_DIRECTORY || !e.optInEnabled || t.isGuildVocal() || e.optedInChannels.has(t.id) || t.isThread() || null != t.parent_id && e.optedInChannels.has(t.parent_id) || e.hideResourceChannels && t.hasFlag(x.zZ.IS_GUILD_RESOURCE_CHANNEL))
return !1;
  if (null != i && !(0, I.cn)() && (i.id === t.id || i.isThread() && i.parent_id === t.id) || T.ZP.getMentionCount(t.id) > 0)
return !0;
  let l = _.Z.getNewChannelIds(e.id),
r = Array.from(l).sort((e, t) => U.default.compare(t, e));
  if (l.has(t.id) && r.indexOf(t.id) < W)
return !0;
  for (let e in s[t.id])
if (T.ZP.getMentionCount(e) > 0 || T.ZP.hasUnread(e) || T.ZP.hasRecentlyVisitedAndRead(e))
  return !0;
  return !(e.mutedChannelIds.has(t.id) || null != t.parent_id && e.mutedChannelIds.has(t.parent_id)) && (!!T.ZP.hasRecentlyVisitedAndRead(t.id) || !1);
}
let ey = new Set(Object.values(H.z));