n.d(t, {
  Bz: function() {
return eC;
  },
  Cb: function() {
return k;
  },
  VR: function() {
return en;
  },
  ZP: function() {
return q;
  },
  p2: function() {
return W;
  },
  wF: function() {
return K;
  },
  wd: function() {
return J;
  },
  zR: function() {
return eg;
  },
  zm: function() {
return j;
  }
}), n(47120), n(411104), n(653041), n(390547), n(724458), n(733860);
var i, s, l = n(512722),
  r = n.n(l),
  a = n(392711),
  d = n.n(a),
  h = n(317381),
  o = n(812206),
  u = n(12498),
  c = n(430198),
  C = n(931261),
  g = n(924301),
  f = n(160404),
  p = n(57132),
  v = n(798423),
  I = n(18036),
  E = n(798379),
  S = n(398758),
  y = n(22082),
  m = n(601070),
  w = n(569471),
  _ = n(131704),
  L = n(680089),
  N = n(592125),
  Z = n(58468),
  A = n(430824),
  R = n(496675),
  P = n(306680),
  b = n(944486),
  O = n(9156),
  T = n(979651),
  D = n(938475),
  G = n(823379),
  M = n(709054),
  V = n(968358),
  U = n(203818),
  F = n(443063),
  B = n(981631),
  H = n(176505),
  z = n(231338);

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let Y = 'placeholder-channel-id',
  k = 2;
(s = i || (i = {}))[s.CannotShow = 1] = 'CannotShow', s[s.DoNotShow = 2] = 'DoNotShow', s[s.WouldShowIfUncollapsed = 3] = 'WouldShowIfUncollapsed', s[s.Show = 4] = 'Show';
let j = 0,
  W = 1,
  J = 3,
  K = 4,
  X = new Set([String(F.f.GUILD_DIRECTORY)]);
class q {
  getGuild(e, t) {
var n;
return (!(e in this.guilds) || !d().isEqual(null === (n = this.guilds[e]) || void 0 === n ? void 0 : n.getCommunitySection().getRows().filter(e => !X.has(e)), t)) && (this.guilds[e] = new Q(e, t)), this.guilds[e];
  }
  getGuildWithoutCommunityRows(e) {
return !(e in this.guilds) && (this.guilds[e] = new Q(e, [])), this.guilds[e];
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
let t = N.Z.getBasicChannel(e);
return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof _.Sf || null != (t = N.Z.getChannel(e))) && this.nonPositionalChannelUpdate(t);
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
x(this, 'guilds', {});
  }
}
class Q {
  get initializationData() {
return {
  selectedChannel: N.Z.getChannel(b.Z.getChannelId()),
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
let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
return (null == this.sections && (this.sections = this.getRows().map(e => e.length)), e) ? [...this.sections] : this.sections;
  }
  getRows() {
if (null == this.rows) {
  this.sortedNamedCategories = d().sortBy(Object.values(this.categories), e => e.record.position), this.rows = [
    this.communitySection,
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
  case j:
    throw Error('Invalid section. Use getCommunitySection instead');
  case W:
    return this.favoritesCategory;
  case J:
    return this.noParentCategory;
  case this.recentsSectionNumber:
    return this.recentsCategory;
  case this.voiceChannelsSectionNumber:
    return this.voiceChannelsCategory;
  default:
    return this.getSortedNamedCategories()[e - K];
}
  }
  getNamedCategoryFromSection(e) {
return e -= K, r()(e >= 0 && e < this.getSortedNamedCategories().length, 'invalid section index '.concat(e)), this.getSortedNamedCategories()[e];
  }
  getCommunitySection() {
return this.communitySection;
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
return r()(e > j, 'Invalid section'), e !== this.recentsSectionNumber && this.getRows()[e][t] === Y;
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
    return null != e && eE.has(e);
  }(e))
  return [{
    row: this.getCommunitySection().getRows().indexOf(e),
    section: j
  }];
let t = [],
  n = N.Z.getChannel(e);
if (null == n || null == e)
  return t;
let i = n.isThread();
if (i && (n = N.Z.getChannel(n.parent_id)), null == n)
  return t;
let s = this.favoritesCategory.getShownChannelIds().indexOf(n.id);
s >= 0 && t.push({
  section: W,
  row: s
});
let l = this.recentsCategory.getShownChannelIds().indexOf(n.id);
if (l >= 0 && t.push({
    section: this.recentsSectionNumber,
    row: l
  }), n.type === B.d4z.GUILD_CATEGORY)
  return [{
    section: d().findIndex(this.getSortedNamedCategories(), e => e.id === (null == n ? void 0 : n.id)) + K
  }];
let r = this.getCategory(n),
  a = r instanceof ee ? J : this.getSortedNamedCategories().indexOf(r) + K,
  h = r.getShownChannelIds().indexOf(n.id);
if (a >= 0 && h >= 0) {
  let s = i ? r.channels[n.id].threadIds.indexOf(e) : 0;
  t.push({
    section: a,
    row: h,
    threadOffset: s
  });
}
let o = this.voiceChannelsCategory.getShownChannelIds().indexOf(n.id);
return o >= 0 && t.push({
  section: this.voiceChannelsSectionNumber,
  row: o
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
r()(e.length > 0, 'must have at least one channel in the slice');
let n = e[0],
  i = e[e.length - 1],
  s = !0,
  l = !1,
  a = [],
  d = [];
for (let e of this.getSortedCategories()) {
  let r = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
  for (let t of e.getShownChannelIds()) {
    let h = e.channels[t];
    s && (h.id === n.id ? s = !1 : !r && a.push(h)), l && !r && d.push(h), !s && !l && h.id === i.id && (l = !0);
  }
}
return [
  a,
  e,
  d
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
  let n = N.Z.getChannel(e);
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
  t = d()(this.getSortedCategories()).map(e => Object.values(e.channels)).flatten().value();
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
        let n = N.Z.getChannel(t);
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
x(this, 'id', void 0), x(this, 'hideMutedChannels', void 0), x(this, 'favoritesSectionNumber', void 0), x(this, 'recentsSectionNumber', void 0), x(this, 'voiceChannelsSectionNumber', void 0), x(this, 'mutedChannelIds', void 0), x(this, 'optedInChannels', void 0), x(this, 'optInEnabled', void 0), x(this, 'hideResourceChannels', void 0), x(this, 'favoriteChannelIds', void 0), x(this, 'suggestedFavoriteChannelId', void 0), x(this, 'collapsedCategoryIds', void 0), x(this, 'categories', void 0), x(this, 'noParentCategory', void 0), x(this, 'favoritesCategory', void 0), x(this, 'recentsCategory', void 0), x(this, 'voiceChannelsCategory', void 0), x(this, 'communitySection', void 0), x(this, 'sortedNamedCategories', void 0), x(this, 'sections', void 0), x(this, 'rows', void 0), x(this, 'firstVoiceChannel', void 0), x(this, 'allChannelsById', void 0), x(this, 'version', void 0), this.id = e, this.sortedNamedCategories = null, this.sections = null, this.rows = null, this.firstVoiceChannel = void 0, this.allChannelsById = null, this.version = 0, this.hideMutedChannels = O.ZP.isGuildCollapsed(this.id), this.mutedChannelIds = O.ZP.getMutedChannels(this.id), this.optedInChannels = null !== (n = O.ZP.getOptedInChannelsWithPendingUpdates(this.id)) && void 0 !== n ? n : O.ZP.getOptedInChannels(this.id), this.optInEnabled = (0, S.r1)(this.id), this.hideResourceChannels = (0, C.s)(this.id), this.favoriteChannelIds = new Set(null !== (i = O.ZP.getGuildFavorites(this.id)) && void 0 !== i ? i : []), this.suggestedFavoriteChannelId = I.Z.getSuggestedChannelId(this.id), this.collapsedCategoryIds = L.Z.getCollapsedCategories();
let s = N.Z.getMutableGuildChannelsForGuild(this.id),
  l = A.Z.getGuild(this.id),
  a = {},
  h = [],
  o = {};
for (let e in s) {
  let t = s[e];
  t.type === B.d4z.GUILD_CATEGORY && (a[t.id] = t, o[t.id] = []);
}
let u = [],
  c = [],
  g = [],
  f = this.initializationData;
for (let e in s) {
  let t = s[e];
  if (t.type !== B.d4z.GUILD_CATEGORY) {
    if (t.type === B.d4z.GUILD_DIRECTORY) {
      null != l && !l.hasFeature(B.oNc.HUB) && g.push(t);
      continue;
    }
    eI(this, t, f) ? u.push(t) : (t.type === B.d4z.GUILD_VOICE || t.type === B.d4z.GUILD_STAGE_VOICE) && (null != t.parent_id && null != a[t.parent_id] && c.push(a[t.parent_id]), c.push(t)), null != t.parent_id && t.parent_id in o ? o[t.parent_id].push(t) : h.push(t);
  }
}
for (let e in (this.categories = {}, o))
  this.categories[e] = new et(this, a[e], o[e], f);
this.recentsSectionNumber = 2, this.favoritesSectionNumber = W, this.noParentCategory = new ee(this, h, f), this.favoritesCategory = new en(this, f), this.recentsCategory = (0, v.Q)() ? new ei(this, s, f) : new es(this, u, f), this.voiceChannelsCategory = new el(this, c, a, f), this.communitySection = new er(t, g.length > 0), r()(!('null' in this.categories), 'somehow a null got into categories'), this.voiceChannelsSectionNumber = K + d().size(this.categories);
  }
}
class $ {
  updateChannel(e, t) {
return !!(e.id in this.channels && this.channels[e.id].updateChannel(e, t)) && (this.invalidate(), !0);
  }
  invalidate() {
this.shownChannelIds = null;
  }
  getRows() {
let e = this.getShownChannelIds();
return 0 === e.length && this.shouldShowEmptyCategory() ? [Y] : e;
  }
  shouldShowEmptyCategory() {
return d().some(this.channels, e => e.renderLevel >= 3);
  }
  getShownChannelIds() {
return null == this.shownChannelIds && (this.shownChannelIds = d()(this.channels).values().filter(e => 4 === e.renderLevel).sortBy(e => {
  let {
    record: t
  } = e;
  return t.isGuildVocal() ? t.position + 10000 : t.position;
}).map(e => e.id).value()), this.shownChannelIds;
  }
  getShownChannelAndThreadIds() {
let e = d()(this.channels).values().flatMap(e => e.threadIds).value();
return this.getShownChannelIds().concat(e);
  }
  isEmpty() {
return 0 === this.getShownChannelIds().length;
  }
  getChannelRecords() {
return d()(this.channels).values().filter(e => e.renderLevel > 1).map(e => e.record).value();
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
x(this, 'guild', void 0), x(this, 'isMuted', void 0), x(this, 'isCollapsed', void 0), x(this, 'position', void 0), x(this, 'channels', void 0), x(this, 'shownChannelIds', void 0), this.guild = e, this.isMuted = !1, this.isCollapsed = !1, this.position = -1, this.channels = {}, this.shownChannelIds = null;
  }
}
class ee extends $ {
  constructor(e, t, n) {
super(e), this.channels = d()(t).map(e => new ed(this, e, n)).keyBy(e => e.id).value();
  }
}
class et extends $ {
  shouldShowEmptyCategory() {
return !!(super.shouldShowEmptyCategory() || R.Z.can(z.Pl.MANAGE_CHANNELS, this.record) && R.Z.can(z.Pl.VIEW_CHANNEL, this.record) && d().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id))) || !1;
  }
  constructor(e, t, n, i) {
for (let s of (super(e), x(this, 'id', void 0), x(this, 'record', void 0), this.record = t, this.id = t.id, this.isCollapsed = !0 === e.collapsedCategoryIds[t.id], this.isMuted = e.mutedChannelIds.has(t.id), this.channels = {}, n))
  this.channels[s.id] = new ed(this, s, i);
  }
}
class en extends $ {
  updateChannel(e, t) {
let n = e.id in this.channels && O.ZP.isFavorite(e.guild_id, e.id),
  i = I.Z.getSuggestedChannelId(e.guild_id);
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
this.channels = d()(null !== (n = O.ZP.getGuildFavorites(e.id)) && void 0 !== n ? n : []).map(e => N.Z.getChannel(e)).filter(G.lm).map(e => new eh(this, e, t)).keyBy(e => e.id).value();
let i = I.Z.getSuggestedChannelId(e.id),
  s = N.Z.getChannel(i);
null != s && null != i && (this.channels[i] = new eh(this, s, {
  ...t,
  activeJoinedRelevantThreads: {},
  activeJoinedUnreadThreads: {}
}));
  }
}
class ei extends $ {
  shouldShowEmptyCategory() {
return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory();
  }
  updateAllChannels(e) {
return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, !1);
  }
  updateChannel(e, t) {
if (!this.enabled)
  return !1;
if ((0, _.Q5)(e.type)) {
  let t = this.channels[e.parent_id];
  return null != t && this.updateShownChannelIds(t);
}
if (!(0, _.vc)(e.type))
  return !1;
let n = super.updateChannel(e, t),
  i = this.channels[e.id];
return null == i ? (i = new eu(this, e, t), this.channels[e.id] = i, this.invalidate(), !0) : this.updateShownChannelIds(i) || n;
  }
  getFirstVoiceChannel(e) {
return null;
  }
  getShownChannelIds() {
if (null == this.shownChannelIds) {
  let e = this.isCollapsed ? 4 : 3;
  this.shownChannelIds = this.enabled ? d()(this.channels).filter(t => t.renderLevel >= e).map(e => [
    e.id,
    e.lastMessageTimestamp,
    e.renderLevel
  ]).filter(e => {
    let [, t, n] = e;
    return 4 === n || t > 0 && Date.now() - t < ei.MAX_TIMESTAMP_DELTA;
  }).sortBy(e => {
    let [, t, n] = e;
    return -(t - (4 === n ? 0 : M.DISCORD_EPOCH));
  }).take(ei.MAX_RECENT_CHANNELS).sortBy(e => {
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
  return t > -1 && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > ei.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, ei.MAX_RECENT_CHANNELS)), !0;
}
return !1;
  }
  constructor(e, t, n) {
if (super(e), x(this, 'enabled', !1), this.isCollapsed = E.Z.isCollapsed(e.id), this.enabled = function() {
    return !1;
  }() && Object.keys(t).length >= ei.MIN_READABLE_CHANNELS, this.enabled)
  for (let e of Object.values(t))
    (0, _.vc)(e.type) && !(0, _.Q5)(e.type) && (this.channels[e.id] = new eu(this, e, n));
  }
}
x(ei, 'MIN_READABLE_CHANNELS', 7), x(ei, 'MAX_RECENT_CHANNELS', 10), x(ei, 'MAX_TIMESTAMP_DELTA', 604800000);
class es extends $ {
  updateAllChannels(e) {
let t = !1;
return M.default.keys(this.channels).forEach(n => {
  this.updateChannel(this.channels[n].record, e) && (t = !0);
}), t;
  }
  updateChannel(e, t) {
let n = super.updateChannel(e, t);
if (this.guild.optInEnabled) {
  let n = this.channels[e.id],
    i = eI(this.guild, e, t);
  if (i && null == n)
    return this.channels[e.id] = new eo(this, e, t), this.invalidate(), !0;
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
  let e = d()(this.channels).values().filter(e => 4 === e.renderLevel || 3 === e.renderLevel).filter(e => !e.record.isGuildVocal()),
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
  this.shownChannelIds = d()([...n]).sortBy(e => {
    let {
      record: t
    } = e;
    return t.position;
  }).map(e => e.id).value();
}
return this.shownChannelIds;
  }
  constructor(e, t, n) {
if (super(e), !e.optInEnabled || f.Z.isFullServerPreview(e.id))
  return;
this.isCollapsed = !1, this.isMuted = !1, this.channels = d()(t).map(e => new eo(this, e, n)).keyBy(e => e.id).value();
  }
}
class el extends $ {
  invalidate() {
super.invalidate(), this.hiddenChannelIds = null;
  }
  getHiddenChannelIds() {
if (!this.guild.optInEnabled)
  return [];
if (null == this.hiddenChannelIds) {
  let e = d()(this.channels).filter(e => 3 === e.renderLevel).value();
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
return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [Y] : e;
  }
  getShownChannelIds() {
if (!this.guild.optInEnabled)
  return [];
if (null == this.shownChannelIds) {
  let t = d()(this.channels).filter(e => 4 === e.renderLevel).orderBy([
    e => function(e, t) {
      if (e.record.type === B.d4z.GUILD_CATEGORY)
        return e.record.position;
      if (null != e.record.parent_id) {
        var n, i;
        return null !== (i = null === (n = t[e.record.parent_id]) || void 0 === n ? void 0 : n.position) && void 0 !== i ? i : -1;
      }
      return -1;
    }(e, this.categoriesById),
    e => e.record.type === B.d4z.GUILD_CATEGORY ? -1 : e.record.position
  ], [
    'asc',
    'asc'
  ]).value();
  this.shownChannelIds = [];
  for (let n = 0; n < t.length; n++) {
    var e;
    let i = t[n];
    if ((!(n < t.length - 1) || i.record.type !== B.d4z.GUILD_CATEGORY || (null === (e = t[n + 1]) || void 0 === e ? void 0 : e.record.type) !== B.d4z.GUILD_CATEGORY) && (n !== t.length - 1 || i.record.type !== B.d4z.GUILD_CATEGORY))
      this.shownChannelIds.push(i.id);
  }
}
return this.shownChannelIds;
  }
  getFirstVoiceChannel(e) {
return null;
  }
  constructor(e, t, n, i) {
if (super(e), x(this, 'categoriesById', void 0), x(this, 'hiddenChannelIds', void 0), this.categoriesById = n, this.hiddenChannelIds = null, !e.optInEnabled)
  return;
this.isCollapsed = U.Z.isVoiceCategoryCollapsed(e.id), this.isMuted = !1, this.categoriesById = n, this.channels = d()(t).map(e => new ec(this, e, i)).keyBy(e => e.id).value();
  }
}
class er {
  isEmpty() {
return 0 === this.communityRows.length;
  }
  getRows() {
return this.communityRows;
  }
  getRow(e) {
return this.communityRows[e];
  }
  constructor(e, t) {
x(this, 'communityRows', void 0), this.communityRows = e.map(String), t && this.communityRows.push(String(F.f.GUILD_DIRECTORY));
  }
}
class ea {
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
return Math.max(P.ZP.lastMessageTimestamp(this.id), ...this.threadIds.map(P.ZP.lastMessageTimestamp));
  }
  updateChannel(e, t) {
let n = !1;
null != e && e !== this.record && (this.record = e, n = !0);
let i = this.computeState(t);
return (i.renderLevel !== this.renderLevel || !d().isEqual(i.threadIds, this.threadIds)) && (this.renderLevel = i.renderLevel, this.threadIds = i.threadIds, this.threadCount = d().size(i.threadIds), n = !0), 4 === this.renderLevel && this.updateSubtitle() && (n = !0), n;
  }
  updateSubtitle() {
let e = this.computeSubtitle();
return !d().isEqual(this.subtitle, e) && (this.subtitle = e, !0);
  }
  computeSubtitle() {
return eC(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled);
  }
  constructor(e, t, n) {
x(this, 'category', void 0), x(this, 'record', void 0), x(this, 'id', void 0), x(this, 'position', void 0), x(this, 'threadIds', void 0), x(this, 'threadCount', void 0), x(this, 'subtitle', void 0), x(this, 'renderLevel', void 0), this.category = e, this.record = t, this.position = -1, this.threadIds = [], this.threadCount = 0, this.subtitle = null, this.renderLevel = 1, this.id = t.id;
let {
  renderLevel: i,
  threadIds: s
} = this.computeState(n);
this.renderLevel = i, this.threadCount = d().size(s), this.threadIds = s, 4 === i && (this.subtitle = this.computeSubtitle());
  }
}
class ed extends ea {
  computeState(e) {
var t;
let {
  selectedChannel: n,
  selectedVoiceChannelId: i,
  activeJoinedRelevantThreads: s,
  activeJoinedUnreadThreads: l
} = e;
if (!R.Z.can(z.Pl.VIEW_CHANNEL, this.record)) {
  if (this.id === i)
    return {
      renderLevel: 4,
      threadIds: []
    };
  if (!c.Z.isChannelGatedAndVisible(this.record.guild_id, this.record.id))
    return {
      renderLevel: 1,
      threadIds: []
    };
}
let r = this.record.parent_id,
  a = this.category.guild;
if (ep(a, this.record))
  return {
    renderLevel: 1,
    threadIds: []
  };
let h = (null == n ? void 0 : n.id) === this.id || i === this.id,
  o = null != n && n.isThread() && n.parent_id === this.id,
  u = null !== (t = h || o || !this.category.isCollapsed && !this.isMuted ? s[this.id] : l[this.id]) && void 0 !== t ? t : {},
  C = eg(this.record, u, n, i, a.hideMutedChannels);
return a.optInEnabled && a.hideResourceChannels && this.record.hasFlag(H.zZ.IS_GUILD_RESOURCE_CHANNEL) ? {
  renderLevel: h ? 4 : 1,
  threadIds: C
} : !a.optInEnabled || a.optedInChannels.has(this.id) || null != r && a.optedInChannels.has(r) ? h || o || !d().isEmpty(C) || P.ZP.getMentionCount(this.id) > 0 ? {
  renderLevel: 4,
  threadIds: C
} : a.hideMutedChannels && a.mutedChannelIds.has(this.id) ? {
  renderLevel: 2,
  threadIds: C
} : this.category.isCollapsed && (a.mutedChannelIds.has(this.id) || null != r && a.mutedChannelIds.has(r) || this.record.isGuildVocal() || this.record.type === B.d4z.GUILD_STORE || (0, _.vc)(this.record.type) && !P.ZP.hasUnread(this.record.id)) ? {
  renderLevel: 3,
  threadIds: C
} : {
  renderLevel: 4,
  threadIds: C
} : {
  renderLevel: 2,
  threadIds: C
};
  }
}
class eh extends ea {
  computeState(e) {
var t;
let {
  selectedChannel: n,
  selectedVoiceChannelId: i,
  activeJoinedRelevantThreads: s
} = e;
return R.Z.can(z.Pl.VIEW_CHANNEL, this.record) ? {
  renderLevel: 4,
  threadIds: eg(this.record, null !== (t = s[this.id]) && void 0 !== t ? t : {}, n, i, !1)
} : {
  renderLevel: 1,
  threadIds: []
};
  }
}
class eo extends ea {
  computeState(e) {
var t;
let {
  selectedChannel: n,
  selectedVoiceChannelId: i,
  activeJoinedRelevantThreads: s
} = e;
return R.Z.can(z.Pl.VIEW_CHANNEL, this.record) ? {
  renderLevel: ev(this, e) ? 4 : 3,
  threadIds: eg(this.record, null !== (t = s[this.id]) && void 0 !== t ? t : {}, n, i, !1)
} : {
  renderLevel: 1,
  threadIds: []
};
  }
}
class eu extends ed {
  computeState(e) {
let {
  renderLevel: t,
  threadIds: n
} = super.computeState(e);
if (t > 1) {
  let i = this.record.parent_id,
    s = this.category.guild;
  s.mutedChannelIds.has(this.id) || null != i && s.mutedChannelIds.has(i) ? t = 2 : 4 === t ? t = 3 : 2 === t && eI(this.category.guild, this.record, e) && (t = 3), 3 === t && ev(this, e) && (t = 4), n = d().sortBy(n, e => -P.ZP.lastMessageTimestamp(e));
}
return {
  renderLevel: t,
  threadIds: n
};
  }
}
class ec extends ed {
  getRenderLevel(e) {
let t = this.category.guild;
return !R.Z.can(z.Pl.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || ep(t, this.record) ? 1 : this.category.isCollapsed ? d().some(T.Z.getVoiceStatesForChannel(this.record.id)) ? 4 : 3 : 4;
  }
  computeState(e) {
let t = super.computeState(e),
  n = this.getRenderLevel(t.renderLevel);
return 4 === n && (this.subtitle = eC(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)), {
  threadIds: [],
  renderLevel: n
};
  }
}

function eC(e, t, n) {
  if (e.type === B.d4z.GUILD_VOICE) {
let i = g.ZP.getActiveEventByChannel(e.id);
if (null != i)
  return {
    type: 'event',
    name: i.name
  };
let s = D.ZP.getVoiceStatesForChannel(e);
if (n && t && (0, V.a)(s))
  return {
    type: 'go-live'
  };
let l = u.Z.getChannelStatus(e);
if (null != l && l.length > 0)
  return {
    type: 'voice',
    text: l
  };
let r = h.ZP.getEmbeddedActivitiesForChannel(e.id),
  a = (null != r ? r : []).map(e => {
    var t;
    return null === (t = o.Z.getApplication(e.applicationId)) || void 0 === t ? void 0 : t.name;
  }).filter(G.lm);
return a.length > 0 ? {
  type: 'embedded-activities',
  name: a.join(', ')
} : null;
  }
  return null;
}

function eg(e, t, n, i, s) {
  let l = null != n && (n.id === e.id || i === e.id),
r = null != n && n.isThread() && n.parent_id === e.id;
  if (_.uC.has(e.type)) {
let e = d().sortBy(Object.values(t), e => -e.joinTimestamp).map(e => e.channel.id);
if (l)
  return e;
if (r)
  return !(n.id in t) && !(0, p.cn)() && e.unshift(n.id), e;
else if (s)
  return e.filter(e => !w.Z.isMuted(e) || P.ZP.getMentionCount(e) > 0);
else
  return e;
  }
  return [];
}

function ef() {
  return !1;
}

function ep(e, t) {
  return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1);
}

function ev(e, t) {
  let {
selectedChannel: n,
activeJoinedRelevantThreads: i
  } = t;
  if (P.ZP.getMentionCount(e.id) > 0)
return !0;
  for (let t in i[e.id])
if (P.ZP.getMentionCount(t) > 0)
  return !0;
  if (null != n && (n.id === e.id || n.isThread() && n.parent_id === e.id))
return true;
  let s = y.Z.getNewChannelIds(e.category.guild.id);
  if (s.size > k);
  else if (s.has(e.id))
return !0;
  return !1;
}

function eI(e, t, n) {
  let {
selectedChannel: i,
activeJoinedRelevantThreads: s
  } = n;
  if (t.type === B.d4z.GUILD_DIRECTORY || !e.optInEnabled || t.isGuildVocal() || e.optedInChannels.has(t.id) || t.isThread() || null != t.parent_id && e.optedInChannels.has(t.parent_id) || e.hideResourceChannels && t.hasFlag(H.zZ.IS_GUILD_RESOURCE_CHANNEL))
return !1;
  if (null != i && !(0, p.cn)() && (i.id === t.id || i.isThread() && i.parent_id === t.id) || P.ZP.getMentionCount(t.id) > 0)
return !0;
  let l = y.Z.getNewChannelIds(e.id),
r = Array.from(l).sort((e, t) => M.default.compare(t, e));
  if (l.has(t.id) && r.indexOf(t.id) < k)
return !0;
  for (let e in s[t.id])
if (P.ZP.getMentionCount(e) > 0 || P.ZP.hasUnread(e) || P.ZP.hasRecentlyVisitedAndRead(e))
  return !0;
  return !(e.mutedChannelIds.has(t.id) || null != t.parent_id && e.mutedChannelIds.has(t.parent_id)) && (!!P.ZP.hasRecentlyVisitedAndRead(t.id) || !1);
}
let eE = new Set(Object.values(F.f));