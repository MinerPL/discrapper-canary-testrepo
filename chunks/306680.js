let r;
n.d(t, {
  Ex: function() {
return eR;
  }
}), n(47120), n(411104), n(653041), n(789020);
var i, a, s, o = n(512722),
  l = n.n(o),
  u = n(392711),
  c = n(913527),
  d = n.n(c),
  _ = n(442837),
  E = n(544891),
  f = n(846519),
  h = n(283693),
  p = n(570140),
  m = n(317381),
  I = n(358221),
  T = n(702321),
  g = n(430198),
  S = n(710845),
  A = n(353926),
  N = n(924301),
  v = n(57132),
  O = n(355298),
  R = n(869404),
  C = n(333984),
  y = n(572804),
  D = n(140155),
  L = n(398758),
  b = n(725319),
  M = n(344185),
  P = n(569471),
  U = n(195663),
  w = n(581883),
  x = n(131704),
  G = n(386438),
  k = n(70956),
  B = n(630388),
  F = n(823379),
  V = n(931619),
  H = n(709054),
  Z = n(314897),
  Y = n(433355),
  j = n(592125),
  W = n(796974),
  K = n(486472),
  z = n(430824),
  q = n(517100),
  Q = n(375954),
  X = n(496675),
  $ = n(699516),
  J = n(944486),
  ee = n(9156),
  et = n(594174),
  en = n(451478),
  er = n(981631),
  ei = n(918559),
  ea = n(176505),
  es = n(765305),
  eo = n(490897);

function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let eu = new S.Z('ReadStateStore');
__OVERLAY__ && (r = n(237997).Z);
let ec = er.S7T.VIEW_CHANNEL | er.S7T.READ_MESSAGE_HISTORY,
  ed = J.Z.getChannelId(),
  e_ = null,
  eE = null,
  ef = !1,
  eh = [],
  ep = !1,
  em = null,
  eI = {},
  eT = 30 * k.Z.Millis.DAY;

function eg() {
  return H.default.fromTimestamp(Date.now() - eT);
}
let eS = 0,
  eA = 0,
  eN = null;

function ev() {
  eS = Date.now() - 7 * k.Z.Millis.DAY, eA = Date.now() - 3 * k.Z.Millis.DAY, clearTimeout(eN), eN = setTimeout(() => {
p.Z.dispatch({
  type: 'DECAY_READ_STATES'
});
  }, 1 * k.Z.Millis.HOUR);
}

function eO(e) {
  if (null == e)
return 0;
  let t = Date.parse(e);
  return isNaN(t) ? 0 : t;
}

function eR(e, t) {
  let n = j.Z.getChannel(e.channel_id);
  return !(null == n || $.Z.isBlockedForMessage(e)) && (!!((0, y.ZP)({
message: e,
userId: t.id,
suppressEveryone: ee.ZP.isSuppressEveryoneEnabled(n.guild_id),
suppressRoles: ee.ZP.isSuppressRolesEnabled(n.guild_id)
  }) || eC(n)) || !1);
}

function eC(e) {
  return null != e && e.isPrivate() && !ee.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id);
}
async function ey(e) {
  if (0 === eh.length) {
ep = !1, null == e || e();
return;
  }
  ep = !0;
  let t = eh.splice(0, 100);
  await eD(() => E.tn.post({
url: er.ANM.BULK_ACK,
body: {
  read_states: t
},
oldFormErrors: !0
  })), await (0, f.GR)(1000), ey(e);
}
async function eD(e) {
  let t = Z.default.getId();
  for (let n = 0; n < 3; n++)
try {
  return await e();
} catch (e) {
  if (eu.error('', e), n + 1 < 3 && (await (0, f.GR)((n + 1) * 2000), await V.Z.awaitOnline(), t !== Z.default.getId()))
    return Promise.reject(Error('User changed.'));
}
}

function eL(e) {
  if (e.type !== eo.W.CHANNEL)
return !1;
  let t = j.Z.getChannel(e.channelId),
n = null != t && t.isForumPost();
  if (null != m.ZP.getConnectedActivityChannelId() && m.ZP.getActivityPanelMode() === ei.Ez.PANEL && m.ZP.getFocusedLayout() === ei.MI.NO_CHAT || q.Z.isIdle() || !e.canTrackUnreads())
return !1;
  if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
let t = eI[e.channelId],
  n = null != t && en.Z.isFocused(t),
  i = null != r && r.isInstanceFocused() && r.isPinned(er.Odu.TEXT);
if (!n && !i)
  return !1;
  }
  if (n && !e._persisted)
return !0;
  if (!e.hasUnreadOrMentions() || (null == t ? void 0 : t.isForumLikeChannel()) === !0 || !(n && !e._isJoinedThread) && !W.Z.isAtBottom(e.channelId))
return !1;
  let i = I.Z.getLayout(e.channelId),
a = I.Z.getChatOpen(e.channelId);
  if (!a && (i === er.AEg.NO_CHAT || i === er.AEg.FULL_SCREEN) || null == eI[e.channelId])
return !1;
  let s = Q.Z.getMessages(e.channelId);
  return !!(null != s && s.ready && !s.loadingMore && ((0, b.Z)() || a)) || !1;
}
(s = i || (i = {}))[s.IS_GUILD_CHANNEL = 1] = 'IS_GUILD_CHANNEL', s[s.IS_THREAD = 2] = 'IS_THREAD';
class eb {
  static forEach(e) {
for (let n of Object.keys(eb._readStates)) {
  var t;
  let r = null !== (t = eb._readStates[parseInt(n)]) && void 0 !== t ? t : {};
  for (let t of Object.keys(r))
    if (!1 === e(r[t]))
      break;
}
  }
  static get(e) {
var t;
let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL,
  r = null === (t = eb._readStates[n]) || void 0 === t ? void 0 : t[e];
return null == r && (r = new eb(e, n), null == eb._readStates[n] && (eb._readStates[n] = {}), eb._readStates[n][e] = r), r;
  }
  static getGuildSentinels(e) {
return null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = {
  unreadsSentinel: 0
}), this._guildReadStateSentinels[e];
  }
  static resetGuildSentinels() {
this._guildReadStateSentinels = {};
  }
  static getIfExists(e) {
var t;
let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
return null === (t = eb._readStates[n]) || void 0 === t ? void 0 : t[e];
  }
  static getMentionChannelIds() {
let e = [];
for (let t of eb._mentionChannels) {
  let n = eb.getIfExists(t);
  null != n && n.canHaveMentions() ? e.push(t) : eb._mentionChannels.delete(t);
}
return e;
  }
  static getValue(e) {
var t;
let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL,
  r = arguments.length > 2 ? arguments[2] : void 0,
  i = arguments.length > 3 ? arguments[3] : void 0,
  a = null === (t = eb._readStates[n]) || void 0 === t ? void 0 : t[e];
return null == a ? i : r(a);
  }
  static clear(e) {
var t;
let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
return (null === (t = eb._readStates[n]) || void 0 === t ? void 0 : t[e]) != null && (delete eb._readStates[n][e], eb._mentionChannels.delete(e), !0);
  }
  static clearAll() {
eb._readStates = {}, eb._mentionChannels.clear();
  }
  serialize(e) {
let {
  channelId: t,
  type: n,
  _guildId: r,
  _isThread: i,
  _isActiveThread: a,
  _isJoinedThread: s,
  _persisted: o,
  loadedMessages: l,
  _lastMessageId: u,
  _lastMessageTimestamp: c,
  _ackMessageId: d,
  _ackMessageTimestamp: _,
  ackPinTimestamp: E,
  isManualAck: f,
  lastPinTimestamp: h,
  _oldestUnreadMessageId: p,
  oldestUnreadMessageIdStale: m,
  estimated: I,
  _mentionCount: T,
  flags: g,
  lastViewed: S
} = this;
if (e)
  return {
    channelId: t,
    type: n,
    _guildId: r,
    _isThread: i,
    _isActiveThread: a,
    _isJoinedThread: s,
    _persisted: o,
    loadedMessages: l,
    _lastMessageId: u,
    _lastMessageTimestamp: c,
    _ackMessageId: d,
    _ackMessageTimestamp: _,
    ackPinTimestamp: E,
    isManualAck: f,
    lastPinTimestamp: h,
    _oldestUnreadMessageId: p,
    oldestUnreadMessageIdStale: m,
    estimated: I,
    _mentionCount: T,
    flags: g,
    lastViewed: S
  };
let A = {
  channelId: t,
  type: n,
  _guildId: r,
  _persisted: o,
  _lastMessageId: u,
  _lastMessageTimestamp: c,
  _ackMessageId: d,
  _ackMessageTimestamp: _,
  ackPinTimestamp: E,
  lastPinTimestamp: h,
  _mentionCount: T,
  flags: g
};
return null != S && S > 0 && (A.lastViewed = S), i && (A._isThread = i, A._isActiveThread = a, A._isJoinedThread = s), A;
  }
  deserializeForOverlay(e) {
let {
  channelId: t,
  type: n,
  _guildId: r,
  _isThread: i,
  _isActiveJoinedThread: a,
  _isActiveThread: s,
  _isJoinedThread: o,
  _persisted: l,
  loadedMessages: u,
  _lastMessageId: c,
  _lastMessageTimestamp: d,
  _ackMessageId: _,
  _ackMessageTimestamp: E,
  ackPinTimestamp: f,
  isManualAck: h,
  lastPinTimestamp: p,
  _oldestUnreadMessageId: m,
  oldestUnreadMessageIdStale: I,
  estimated: T,
  _unreadCount: g,
  _mentionCount: S,
  flags: A,
  lastViewed: N
} = e;
this.channelId = t, this.type = null != n ? n : eo.W.CHANNEL, this._guildId = r, this._isThread = null != i && i, null != a ? (this._isActiveThread = a, this._isJoinedThread = a) : (this._isActiveThread = null != s && s, this._isJoinedThread = null != o && o), this._persisted = !1 !== l, this.loadedMessages = null != u && u, this._lastMessageId = c, this._lastMessageTimestamp = d, this._ackMessageId = _, this._ackMessageTimestamp = E, this.ackPinTimestamp = f, this.isManualAck = null != h && h, this.lastPinTimestamp = p, this._oldestUnreadMessageId = m, this.oldestUnreadMessageIdStale = null != I && I, this.estimated = null != T && T, this._unreadCount = null != g ? g : 0, this._mentionCount = S, this.flags = A, this.lastViewed = N, eb._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eb._mentionChannels.add(this.channelId);
  }
  incrementGuildUnreadsSentinel() {
if (null != this._guildId)
  eb.getGuildSentinels(this._guildId).unreadsSentinel++;
  }
  get oldestUnreadMessageId() {
return this._oldestUnreadMessageId;
  }
  set oldestUnreadMessageId(e) {
this._oldestUnreadMessageId = e, this.oldestUnreadMessageIdStale = !1;
  }
  get lastMessageId() {
return this._lastMessageId;
  }
  set lastMessageId(e) {
this._lastMessageId = e, this._lastMessageTimestamp = null != e ? H.default.extractTimestamp(e) : 0;
  }
  get lastMessageTimestamp() {
return this._lastMessageTimestamp;
  }
  get ackMessageId() {
return this._ackMessageId;
  }
  set ackMessageId(e) {
this._ackMessageId = e, this._ackMessageTimestamp = null != e ? H.default.extractTimestamp(e) : 0;
  }
  get unreadCount() {
var e;
return null !== (e = this._unreadCount) && void 0 !== e ? e : 0;
  }
  set unreadCount(e) {
(void 0 === this._unreadCount || 0 === this._unreadCount || 0 === e) && this.incrementGuildUnreadsSentinel(), this._unreadCount = e;
  }
  get mentionCount() {
return this._mentionCount;
  }
  set mentionCount(e) {
(0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(), this._mentionCount = e, eb._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eb._mentionChannels.add(this.channelId);
  }
  guessAckMessageId() {
let e = Q.Z.getMessages(this.channelId);
if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter)
  return this.ackMessageId;
if (!this.hasMentions())
  return this.lastMessageId;
let t = null,
  n = this.mentionCount,
  r = et.default.getCurrentUser();
return e.forEach(e => {
  if (n > 0 && e.author.id !== (null == r ? void 0 : r.id))
    --n;
  else if (0 === n)
    return t = e.id, !1;
}, this, !0), t;
  }
  get guildId() {
if (null != this._guildId)
  return this._guildId;
let e = j.Z.getChannel(this.channelId);
return this._guildId = null != e ? e.getGuildId() : null;
  }
  isPrivate() {
if (this.type !== eo.W.CHANNEL)
  return !1;
let e = j.Z.getChannel(this.channelId);
return null != e && e.isPrivate();
  }
  rebuildChannelState(e) {
var t, n;
let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
  i = arguments.length > 2 ? arguments[2] : void 0;
if (this.ackMessageId = null !== (t = null != e ? e : this._ackMessageId) && void 0 !== t ? t : this.guessAckMessageId(), this.isManualAck = null != e, this.oldestUnreadMessageId = null, this.estimated = !1, this.unreadCount = 0, r && (this.mentionCount = 0), this.hasUnread()) {
  let e = et.default.getCurrentUser(),
    t = this.getAckTimestamp(),
    i = !1,
    a = !1,
    s = null,
    o = Q.Z.getMessages(this.channelId);
  o.forAll(n => {
    if (i) {
      var o;
      this.oldestUnreadMessageId = null !== (o = this._oldestUnreadMessageId) && void 0 !== o ? o : n.id;
    } else
      i = n.id === this._ackMessageId;
    H.default.extractTimestamp(n.id) > t ? (this.unreadCount++, r && eR(n, e) && this.mentionCount++, s = null != s ? s : n.id) : a = !0;
  }), this.estimated = !o.hasPresent() || !(i || a) && o.length === this.unreadCount, this.oldestUnreadMessageId = null !== (n = this._oldestUnreadMessageId) && void 0 !== n ? n : s;
}
null != i && (this.mentionCount = i);
  }
  handleGuildEventRemoval(e, t) {
var n;
if (H.default.compare(this.ackMessageId, t) >= 0)
  return;
let r = N.ZP.getGuildScheduledEventsForGuild(e),
  i = this.getAckTimestamp();
if (isNaN(i))
  return;
let a = null !== (n = this._ackMessageId) && void 0 !== n ? n : H.default.fromTimestamp(i),
  s = null,
  o = 0;
r.forEach(e => {
  (0, N.Ld)(e) && (H.default.compare(e.id, s) > 0 && (s = e.id), H.default.compare(e.id, a) > 0 && o++);
}), this.lastMessageId = s, this.mentionCount = o;
  }
  canTrackUnreads() {
if (this.type !== eo.W.CHANNEL)
  return !0;
if (this._isThread && !this._isActiveThread || this._isResourceChannel)
  return !1;
let e = j.Z.getBasicChannel(this.channelId);
return null != e && ('basicPermissions' in e ? G.Z.has(e.basicPermissions, er.S7T.VIEW_CHANNEL) : !g.Z.isChannelGated(this.guildId, this.channelId) || X.Z.can(er.Plq.VIEW_CHANNEL, e));
  }
  canBeUnread() {
return !(this._isThread && !this._isJoinedThread || (0, R.h3)(this.channelId, [
  O.Z,
  C.Z
]) || !this._isThread && (0, L.r1)(this._guildId) && (this._lastMessageTimestamp < eS || !ee.ZP.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())) && this.canTrackUnreads();
  }
  canHaveMentions() {
return !(0 === this.mentionCount || this._isThread && !this._isJoinedThread || (0, R.h3)(this.channelId, [
  O.Z,
  C.Z
]) || (0, L.r1)(this._guildId) && this._lastMessageTimestamp < eS) && this.canTrackUnreads();
  }
  getGuildChannelUnreadState(e, t, n, r, i) {
if (t && (this._lastMessageTimestamp < eS || !ee.ZP.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0))
  return {
    mentionCount: 0,
    unread: !1
  };
if ('basicPermissions' in e) {
  if (!G.Z.has(e.basicPermissions, er.S7T.VIEW_CHANNEL))
    return {
      mentionCount: 0,
      unread: !1
    };
} else if (g.Z.isChannelGated(this.guildId, this.channelId) && !X.Z.can(er.Plq.VIEW_CHANNEL, e))
  return {
    mentionCount: 0,
    unread: !1
  };
return r || i ? {
  mentionCount: this.mentionCount,
  unread: !1
} : {
  mentionCount: this.mentionCount,
  unread: this.getAckTimestamp() < this._lastMessageTimestamp
};
  }
  hasUnread() {
return this.getAckTimestamp() < this._lastMessageTimestamp;
  }
  hasRecentlyVisitedAndRead() {
return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > eA && w.Z.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp();
  }
  isForumPostUnread() {
return !!this._isActiveThread && this.hasUnread();
  }
  hasMentions() {
return this.getMentionCount() > 0;
  }
  getMentionCount() {
return this.mentionCount;
  }
  hasUnreadOrMentions() {
return this.hasMentions() || this.hasUnread();
  }
  ackPins() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
if (this.type !== eo.W.CHANNEL || !this.canTrackUnreads())
  return !1;
if (null == e) {
  if (this.lastPinTimestamp === this.ackPinTimestamp)
    return !1;
  this._persisted = !0, eD(() => E.tn.post({
    url: er.ANM.PINS_ACK(this.channelId),
    oldFormErrors: !0
  }));
}
let t = eO(e);
return this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp, !0;
  }
  ack(e) {
let {
  messageId: t,
  local: n = !1,
  immediate: r = !1,
  force: i = !1,
  isExplicitUserAction: a = !1,
  location: s = {
    section: er.jXE.CHANNEL
  },
  trackAnalytics: o = !0
} = e;
if (!this._shouldAck(i, n, a) || !i && !this.canTrackUnreads())
  return !1;
let l = this.hasMentions();
return this.estimated = !1, this.snapshot = this.takeSnapshot(), this.unreadCount = 0, this.mentionCount = 0, (null != t || null != (t = this.lastMessageId)) && (this.ackMessageId = t, this.isManualAck = !1, this._persisted = !0, ef && (this.ackedWhileCached = !0), function(e) {
  if (null == e)
    return;
  let t = eb.get(e);
  if (t.type !== eo.W.CHANNEL)
    return;
  let n = j.Z.getChannel(t.channelId);
  if (null == n || !n.isForumPost() || null == n.parent_id)
    return;
  let r = n.parent_id,
    i = eb.get(r);
  M.Z.hasLoaded(n.guild_id) && H.default.keys(M.Z.getThreadsForParent(n.guild_id, r)).every(e => e0.hasOpenedThread(e) || 0 > H.default.compare(e, i.ackMessageId)) && i.ack({});
}(this.channelId), n ? this.oldestUnreadMessageId = null : (null == this.outgoingAck && (this.outgoingAckTimer = setTimeout(() => {
  this.type === eo.W.CHANNEL ? this._ack(s, o) : this._nonChannelAck(), this.outgoingAck = null, this.outgoingAckTimer = null;
}, l || r ? 0 : 3000)), this.outgoingAck = t), !0);
  }
  takeSnapshot() {
let {
  default: e
} = n(888369), t = this.guildId;
return {
  unread: this.hasUnread(),
  mentionCount: this.mentionCount,
  guildUnread: null == t ? null : e.hasUnread(t),
  guildMentionCount: null == t ? null : e.getMentionCount(t),
  takenAt: Date.now()
};
  }
  clearOutgoingAck() {
this.outgoingAck = null, null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), this.outgoingAckTimer = null);
  }
  _shouldAck(e, t, n) {
var r;
return !!e || !!n || !!t || !!(!this.isManualAck && (this.type !== eo.W.CHANNEL || this.loadedMessages || (null === (r = j.Z.getChannel(this.channelId)) || void 0 === r ? void 0 : r.isForumLikeChannel()))) || !1;
  }
  _ack(e, t) {
let {
  outgoingAck: r
} = this;
if (null == r)
  return;
let i = Z.default.getId(),
  a = eE;
this._persisted = !0;
let s = this.recalculateFlags(),
  o = s === this.flags ? void 0 : s;
eD(() => E.tn.post({
  url: er.ANM.MESSAGE_ACK(this.channelId, r),
  body: {
    token: eE,
    last_viewed: this.lastViewed,
    flags: o
  },
  oldFormErrors: !0
})).then(e => {
  null != e && (eE === a && i === Z.default.getId() && (eE = e.body.token), p.Z.dispatch({
    type: 'MESSAGE_ACKED'
  }), t && n.e('54076').then(n.bind(n, 189229)).then(e => {
    let {
      default: t
    } = e;
    t(this.channelId);
  }));
});
  }
  recalculateFlags() {
if (this.type !== eo.W.CHANNEL)
  return;
let e = j.Z.getChannel(this.channelId);
if (null != e)
  return e.isThread() ? 2 : null != e.guild_id ? 1 : 0;
  }
  _nonChannelAck() {
let e;
let {
  outgoingAck: t,
  channelId: n,
  type: r
} = this;
if (null != t) {
  switch (r) {
    case eo.W.GUILD_HOME:
    case eo.W.GUILD_EVENT:
    case eo.W.GUILD_ONBOARDING_QUESTION:
      e = er.ANM.GUILD_FEATURE_ACK(n, t, r);
      break;
    case eo.W.NOTIFICATION_CENTER:
    case eo.W.MESSAGE_REQUESTS:
      e = er.ANM.USER_NON_CHANNEL_ACK(t, r);
      break;
    default:
      return;
  }
  this._persisted = !0, eD(() => E.tn.post({
    url: e,
    body: {},
    oldFormErrors: !0
  }));
}
  }
  delete() {
var e;
let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
  n = j.Z.getBasicChannel(this.channelId);
eu.log('Deleting ReadState', this.channelId, this.type, {
  remote: t,
  persisted: this._persisted,
  channelMissing: null == n,
  isOld: eG(this, eg()),
  validType: null != n && x.AW.has(n.type),
  readableType: null != n && (0, x.Em)(n.type),
  oldThreadCutoff: eg(),
  mentionCount: this.mentionCount,
  channelId: this.channelId,
  ackMessageId: this._ackMessageId,
  lastMessageId: this._lastMessageId
}), t && this._persisted && E.tn.del({
  url: er.ANM.CHANNEL_ACK(this.channelId),
  body: {
    version: 2,
    read_state_type: this.type
  },
  oldFormErrors: !0
}), null === (e = eb._readStates[this.type]) || void 0 === e || delete e[this.channelId], eb._mentionChannels.delete(this.channelId);
  }
  shouldDeleteReadState(e) {
if (0 !== K.Z.totalUnavailableGuilds)
  return !1;
if (null != this.type && this.type !== eo.W.CHANNEL)
  return ! function(e) {
    switch (e.type) {
      case eo.W.GUILD_HOME:
      case eo.W.GUILD_EVENT:
      case eo.W.GUILD_ONBOARDING_QUESTION:
        return null != z.Z.getGuild(e.channelId);
      case eo.W.NOTIFICATION_CENTER:
        var t;
        return H.default.cast(null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
      default:
        return !0;
    }
  }(this);
let t = j.Z.getBasicChannel(this.channelId);
if (null == t)
  return !!eG(this, e) || !1;
return !!x.AW.has(t.type) && (!(0, x.Em)(t.type) || !(0, x.hv)(t.type) && (!!(x.Ec.has(t.type) && function(e, t, n) {
  let r = e.guildId;
  return !(null != r && M.Z.isActive(r, t.parent_id, e.channelId)) && eG(e, n);
}(this, t, e)) || !!(this.mentionCount > 0) && !X.Z.canBasicChannel(ec, t) || !1));
  }
  getAckTimestamp() {
let e, t;
if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp))
  return this._ackMessageTimestamp;
if (this._isThread)
  return this._ackMessageTimestamp = ew(this.guildId, this.channelId), this._ackMessageId = H.default.fromTimestamp(this._ackMessageTimestamp), this._ackMessageTimestamp;
if (this.type === eo.W.GUILD_EVENT || this.type === eo.W.GUILD_ONBOARDING_QUESTION)
  e = z.Z.getGuild(this.channelId);
else if ((0, ea.AB)(this.channelId))
  e = z.Z.getGuild(this.guildId);
else {
  let t = j.Z.getChannel(this.channelId);
  if (null != t) {
    let n = t.getGuildId();
    e = z.Z.getGuild(n);
  }
}
return null != e ? isNaN(t = ex(e)) && (t = H.default.extractTimestamp(this.channelId)) : t = H.default.extractTimestamp(this.channelId), this._ackMessageTimestamp = t, t;
  }
  get oldestUnreadTimestamp() {
return null != this.oldestUnreadMessageId ? H.default.extractTimestamp(this.oldestUnreadMessageId) : 0;
  }
  syncThreadSettings() {
this._isThread = !0;
let e = j.Z.getChannel(this.channelId);
if (null == e)
  return eu.warn('syncThreadSettings called with channel not in memory '.concat(this.channelId)), !1;
let t = this.guildId,
  n = null != t && M.Z.isActive(t, e.parent_id, this.channelId),
  r = P.Z.hasJoined(this.channelId);
return (this._isActiveThread !== n || this._isJoinedThread !== r) && (this._isActiveThread = n, this._isJoinedThread = r, !0);
  }
  recordLastViewedTime() {
let e = Math.ceil((Date.now() - H.DISCORD_EPOCH) / k.Z.Millis.DAY);
e !== this.lastViewed && (this.lastViewed = e, this.canTrackUnreads() && !this.hasUnread() && this.ack({
  force: !0,
  trackAnalytics: !1
}));
  }
  constructor(e, t = eo.W.CHANNEL) {
el(this, 'channelId', void 0), el(this, 'type', eo.W.CHANNEL), el(this, '_guildId', void 0), el(this, '_isThread', void 0), el(this, '_isActiveThread', void 0), el(this, '_isJoinedThread', void 0), el(this, '_isResourceChannel', void 0), el(this, '_persisted', void 0), el(this, 'loadedMessages', void 0), el(this, '_lastMessageId', void 0), el(this, '_lastMessageTimestamp', void 0), el(this, '_ackMessageId', void 0), el(this, '_ackMessageTimestamp', void 0), el(this, 'isManualAck', void 0), el(this, 'ackPinTimestamp', void 0), el(this, 'lastPinTimestamp', void 0), el(this, '_oldestUnreadMessageId', void 0), el(this, 'oldestUnreadMessageIdStale', void 0), el(this, 'estimated', void 0), el(this, '_unreadCount', void 0), el(this, '_mentionCount', void 0), el(this, 'flags', void 0), el(this, 'lastViewed', void 0), el(this, 'outgoingAck', void 0), el(this, 'outgoingAckTimer', null), el(this, 'ackMessageIdAtChannelSelect', null), el(this, 'ackedWhileCached', void 0), el(this, 'snapshot', void 0), this.channelId = e, this.type = t, this._guildId = null, this._isThread = !1, this._isActiveThread = !1, this._isJoinedThread = !1, this._isResourceChannel = !1, this._persisted = !1, this.loadedMessages = !1, this._lastMessageId = null, this._lastMessageTimestamp = 0, this._ackMessageId = null, this._ackMessageTimestamp = 0, this.isManualAck = !1, this.ackPinTimestamp = 0, this.lastPinTimestamp = 0, this._oldestUnreadMessageId = null, this.oldestUnreadMessageIdStale = !1, this.estimated = !1, this._unreadCount = 0, this._mentionCount = 0, this.outgoingAck = null;
  }
}

function eM(e) {
  e.forEach(e => {
if ((0, x.Em)(e.type)) {
  let t = eb.get(e.id);
  t._guildId = e.guild_id, t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eO(e.lastPinTimestamp), t._isResourceChannel = e.hasFlag(ea.zZ.IS_GUILD_RESOURCE_CHANNEL), x.Ec.has(e.type) && t.syncThreadSettings();
}
  });
}

function eP(e) {
  e.forEach(e => {
if ((0, x.Em)(e.type)) {
  var t;
  let n = eb.get(e.id);
  n.lastMessageId = e.last_message_id, n.lastPinTimestamp = eO(e.last_pin_timestamp), n._isResourceChannel = (0, B.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, ea.zZ.IS_GUILD_RESOURCE_CHANNEL), x.Ec.has(e.type) && n.syncThreadSettings();
}
  });
}

function eU(e) {
  (function(e) {
var t;
null === (t = e.threads) || void 0 === t || t.forEach(t => {
  if (!x.AW.has(t.type))
    return;
  let n = eb.get(t.id);
  n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eO(t.lastPinTimestamp), n._isThread = !0, n._isActiveThread = !0, n._isJoinedThread = null != t.member, null == n.ackMessageId && (n.ackMessageId = H.default.fromTimestamp(ew(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = ew(e.id, t.id));
});
  }(e), function(e) {
var t, n;
if ((null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) === 0 && null == eb.getIfExists(e.id, eo.W.GUILD_EVENT))
  return;
let r = eb.get(e.id, eo.W.GUILD_EVENT);
r._guildId = e.id;
let i = 0,
  a = null,
  s = null !== (n = r._ackMessageId) && void 0 !== n ? n : H.default.fromTimestamp(r.getAckTimestamp());
e.guild_scheduled_events.forEach(e => {
  H.default.compare(e.id, a) > 0 && (a = e.id), H.default.compare(e.id, s) > 0 && i++;
}), r.lastMessageId = a, r.mentionCount = i;
  }(e), function(e) {
eb.get(e.id, eo.W.GUILD_HOME).lastMessageId = H.default.fromTimestamp(d()(Date.now()).subtract(24, 'h').valueOf());
  }(e), function(e) {
let t = z.Z.getGuild(e.id);
if (null == t)
  return;
let n = null == t ? void 0 : t.latestOnboardingQuestionId;
if (null == n)
  return;
let r = eb.get(t.id, eo.W.GUILD_ONBOARDING_QUESTION);
r._guildId = t.id, r.lastMessageId = n;
  }(e));
}
el(eb, '_guildReadStateSentinels', {}), el(eb, '_readStates', {}), el(eb, '_mentionChannels', new Set());

function ew(e, t) {
  var n, r, i;
  let a = j.Z.getChannel(t),
s = z.Z.getGuild(null != e ? e : null == a ? void 0 : a.guild_id),
o = (null == a ? void 0 : a.isForumPost()) ? 0 : ex(s),
l = (null !== (i = null === (n = P.Z.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== i ? i : 0) - 5000;
  isNaN(l) && (l = -5000);
  let u = null == a ? void 0 : null === (r = a.threadMetadata) || void 0 === r ? void 0 : r.archiveTimestamp,
c = null != u ? new Date(u).getTime() - 1 : 0;
  isNaN(c) && (c = 0);
  let d = Math.max(l, c);
  return d <= 0 && (d = H.default.extractTimestamp(t) - 1), (isNaN(d) || d <= 0) && (d = 0), isNaN(o) ? d : Math.max(o, d);
}

function ex(e) {
  if (null != e && null != e.joinedAt) {
if (e.joinedAt instanceof Date) {
  let t = e.joinedAt.getTime();
  if (!isNaN(t))
    return t;
} else if ('string' == typeof e.joinedAt) {
  let t = new Date(e.joinedAt).getTime();
  if (!isNaN(t))
    return t;
} else if ('number' == typeof e.joinedAt && !isNaN(e.joinedAt))
  return e.joinedAt;
  }
  return Date.now();
}

function eG(e, t) {
  return !!(e.mentionCount > 0) || !(H.default.compare(e.channelId, t) > 0 || null != e._ackMessageId && H.default.compare(e._ackMessageId, t) > 0 || null != e._lastMessageId && H.default.compare(e._lastMessageId, t) > 0) && !0;
}

function ek(e) {
  if (null != e) {
let t = eb.get(e);
if (eL(t))
  return t.ack({});
  }
  return !1;
}

function eB() {
  null != em && clearTimeout(em);
}
let eF = (0, u.throttle)(e => {
  e.delete();
}, 100);

function eV(e) {
  if (null != e.channelUpdates) {
var t;
eM(null === (t = e.channelUpdates) || void 0 === t ? void 0 : t.writes);
  }
  if (null != e.channelTimestampUpdates)
for (let t of e.channelTimestampUpdates) {
  let e = eb.get(t.id);
  null != t.last_message_id && (e.lastMessageId = t.last_message_id), null != t.last_pin_timestamp && (e.lastPinTimestamp = eO(t.last_pin_timestamp));
}
}

function eH(e) {
  let {
channelId: t
  } = e;
  eb.get(t).rebuildChannelState();
}

function eZ(e) {
  let {
threads: t
  } = e;
  eP(t);
}

function eY(e) {
  let {
messages: t,
threads: n
  } = e;
  for (let e of t)
eP(e.map(e => {
  let {
    thread: t
  } = e;
  return t;
}).filter(F.lm));
  eP(n);
}

function ej(e) {
  let t = et.default.getCurrentUser();
  return null != e.creator_id && null != t && e.creator_id === t.id;
}

function eW(e) {
  let {
channel: t
  } = e;
  return eb.clear(t.id);
}

function eK() {
  let e = Y.ZP.getCurrentSidebarChannelId(ed),
t = !1;
  return e_ !== e ? (t = eq(e_), e_ = e) : t = ek(e) || t, t;
}

function ez(e) {
  if (null != e)
eb.get(e).isManualAck = !1;
}

function eq(e) {
  if (null == e)
return !1;
  let t = eb.get(e);
  return !t.hasUnread() && (t.oldestUnreadMessageId = null, !0);
}

function eQ(e) {
  let {
channelId: t,
messageId: n,
manual: r,
newMentionCount: i
  } = e, a = eb.get(t);
  return r ? (a.rebuildChannelState(n, !0, i), !0) : n !== a._ackMessageId && a.ack({
messageId: n,
local: !0
  });
}

function eX(e) {
  let {
id: t,
ackType: n,
ackedId: r,
local: i
  } = e;
  return e$(t, n, r, i);
}

function e$(e, t, n, r) {
  var i;
  let a = eb.get(e, t);
  return n !== a.ackMessageId && a.lastMessageId !== a.ackMessageId && (null != a.lastMessageId || 0 !== a.mentionCount) && (n = null !== (i = null != n ? n : a.lastMessageId) && void 0 !== i ? i : H.default.fromTimestamp(a.getAckTimestamp()), a.ack({
messageId: n,
local: null == r || r
  }));
}
class eJ extends(a = _.ZP.Store) {
  initialize() {
let e = [
  W.Z,
  et.default,
  z.Z,
  K.Z,
  j.Z,
  J.Z,
  Q.Z,
  X.Z,
  I.Z,
  M.Z,
  P.Z,
  Y.ZP,
  N.ZP,
  A.Z,
  g.Z,
  ee.ZP,
  en.Z,
  D.Z,
  O.Z,
  w.Z,
  C.Z
];
this.waitFor(...e), this.syncWith([Y.ZP], eK);
  }
  getReadStatesByChannel() {
var e;
return null !== (e = eb._readStates[eo.W.CHANNEL]) && void 0 !== e ? e : {};
  }
  getForDebugging(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
return eb.getIfExists(e, t);
  }
  getNotifCenterReadState(e) {
var t;
return null === (t = eb._readStates[eo.W.NOTIFICATION_CENTER]) || void 0 === t ? void 0 : t[e];
  }
  hasUnread(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
return eb.getValue(e, t, e => e.canBeUnread() && e.hasUnread(), !1);
  }
  hasUnreadOrMentions(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
return eb.getValue(e, t, e => e.canBeUnread() && e.hasUnreadOrMentions(), !1);
  }
  hasTrackedUnread(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
return eb.getValue(e, t, e => e.canTrackUnreads() && e.hasUnread(), !1);
  }
  isForumPostUnread(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
return eb.getValue(e, t, e => e.isForumPostUnread(), !1);
  }
  getUnreadCount(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
return eb.getValue(e, t, e => e.canBeUnread() ? e.unreadCount : 0, 0);
  }
  getMentionCount(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL,
  n = eb.getValue(e, t, e => e.canHaveMentions() ? e.getMentionCount() : 0, 0);
if ((0, T.Z)(e)) {
  if (n > 0)
    return 1;
}
return n;
  }
  getGuildChannelUnreadState(e, t, n, r, i) {
return eb.getValue(e.id, eo.W.CHANNEL, a => a.getGuildChannelUnreadState(e, t, n, r, i), {
  mentionCount: 0,
  unread: !1
});
  }
  hasRecentlyVisitedAndRead(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
return eb.getValue(e, t, e => e.hasRecentlyVisitedAndRead(), !1);
  }
  ackMessageId(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
return eb.getValue(e, t, e => e.canBeUnread() ? e.ackMessageId : null, null);
  }
  getTrackedAckMessageId(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
return eb.getValue(e, t, e => e.canTrackUnreads() ? e._ackMessageId : null, null);
  }
  lastMessageId(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
return eb.getValue(e, t, e => e.lastMessageId, null);
  }
  lastMessageTimestamp(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
return eb.getValue(e, t, e => e.lastMessageTimestamp, 0);
  }
  lastPinTimestamp(e) {
return eb.getValue(e, eo.W.CHANNEL, e => e.lastPinTimestamp, null);
  }
  getOldestUnreadMessageId(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
return eb.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadMessageId : null, null);
  }
  getOldestUnreadTimestamp(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
return eb.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0, 0);
  }
  isEstimated(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
return eb.getValue(e, t, e => e.estimated, !1);
  }
  hasOpenedThread(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eo.W.CHANNEL;
return eb.getValue(e, t, e => e._persisted, !1);
  }
  hasUnreadPins(e) {
return eb.getValue(e, eo.W.CHANNEL, e => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1);
  }
  isNewForumThread(e, t, n) {
let r = eb.get(t);
if (!0 === eb.get(e)._persisted || null == r.ackMessageIdAtChannelSelect || 0 >= H.default.compare(e, r.ackMessageIdAtChannelSelect))
  return !1;
let i = ex(n);
return H.default.extractTimestamp(e) > i;
  }
  getAllReadStates(e) {
let t = [];
return eb.forEach(n => {
  switch (n.type) {
    case eo.W.GUILD_HOME:
    case eo.W.GUILD_EVENT:
    case eo.W.GUILD_ONBOARDING_QUESTION:
      null != z.Z.getGuild(n.channelId) && t.push(n.serialize(e));
      break;
    case eo.W.NOTIFICATION_CENTER:
    case eo.W.MESSAGE_REQUESTS:
      var r;
      H.default.cast(null === (r = et.default.getCurrentUser()) || void 0 === r ? void 0 : r.id) === n.channelId && t.push(n.serialize(e));
      break;
    default:
      t.push(n.serialize(e));
  }
}), t;
  }
  getGuildUnreadsSentinel(e) {
return eb.getGuildSentinels(e).unreadsSentinel;
  }
  getMentionChannelIds() {
return eb.getMentionChannelIds();
  }
  getNonChannelAckId(e) {
var t;
let n = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
return null == n ? null : eb.get(n, e).ackMessageId;
  }
  getSnapshot(e, t) {
let n = eb.get(e);
return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot;
  }
}
el(eJ, 'displayName', 'ReadStateStore');
let e0 = new eJ(p.Z, {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
let {
  changesByChannelId: t
} = e;
for (let e in t) {
  var n, r;
  let i = t[e],
    a = eb.getIfExists(e);
  if (null != a)
    for (let e of [null === (n = i.new_messages) || void 0 === n ? void 0 : n[0]].concat(null !== (r = i.modified_messages) && void 0 !== r ? r : []).filter(F.lm))
      1 === H.default.compare(e.id, a.lastMessageId) && (a.lastMessageId = e.id);
}
  },
  CONNECTION_OPEN: function(e) {
var t, n;
let {
  guilds: r,
  relationships: i,
  initialPrivateChannels: a,
  readState: s
} = e;
ev(), eE = null, !ef && !s.partial && eb.clearAll(), ef = !1, s.entries.forEach(e => {
  var t, n, r;
  let i = null !== (t = e.read_state_type) && void 0 !== t ? t : eo.W.CHANNEL;
  if (i !== eo.W.CHANNEL) {
    ;
    e = {
      id: (r = e).id,
      read_state_type: r.read_state_type,
      mention_count: r.badge_count,
      last_message_id: r.last_acked_id
    };
  }
  let a = eb.get(e.id, i);
  a._persisted = !0, a._mentionCount = null !== (n = e.mention_count) && void 0 !== n ? n : 0, a.flags = e.flags, a.lastViewed = e.last_viewed;
  let s = j.Z.getBasicChannel(e.id);
  null != s && (0, x.Q5)(s.type) && (null == e.last_message_id || 0 === e.last_message_id) ? a.ackMessageId = H.default.fromTimestamp(ew(s.guild_id, s.id)) : a.ackedWhileCached ? -1 === H.default.compare(a.ackMessageId, e.last_message_id) && (a.ackMessageId = e.last_message_id) : a.ackMessageId = e.last_message_id, a.ackedWhileCached = void 0, a.ackPinTimestamp = eO(e.last_pin_timestamp), eb._mentionChannels.delete(a.channelId), a._mentionCount > 0 && a.canHaveMentions() && eb._mentionChannels.add(a.channelId);
}), eb.resetGuildSentinels();
let o = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
for (let e of (null != o && (eb.get(o, eo.W.NOTIFICATION_CENTER).lastMessageId = H.default.fromTimestamp(Date.now())), function(e) {
    let t = et.default.getCurrentUser();
    if (null == t)
      return 0;
    let n = eb.get(t.id, eo.W.NOTIFICATION_CENTER);
    e.forEach(e => {
      if (null == e.since || e.type !== er.OGo.PENDING_INCOMING)
        return;
      let t = new Date(e.since).getTime();
      (null != n.ackMessageId ? H.default.extractTimestamp(n.ackMessageId) : 0) < t && (n.mentionCount++, n.lastMessageId = H.default.fromTimestamp(t));
    });
  }(i), eM(a), r))
  eM(null !== (n = e.channels) && void 0 !== n ? n : []), eV(e), eU(e);
eB(), em = setTimeout(() => function(e) {
  let t = eg();
  for (let r of e) {
    var n;
    let e = null !== (n = r.read_state_type) && void 0 !== n ? n : eo.W.CHANNEL,
      i = eb.get(r.id, e);
    i.shouldDeleteReadState(t) && eF(i);
  }
}(s.entries), 10 * k.Z.Millis.SECOND);
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
let {
  lazyPrivateChannels: t
} = e;
eM(t);
  },
  LOGOUT: eB,
  OVERLAY_INITIALIZE: function(e) {
let {
  readStates: t,
  selectedChannelId: n
} = e;
ev(), eE = null, ed = n, e_ = Y.ZP.getCurrentSidebarChannelId(ed), eb.clearAll(), t.forEach(e => {
  let t = eb.get(e.channelId);
  t.deserializeForOverlay(e), t.type === eo.W.CHANNEL && t.rebuildChannelState();
});
  },
  CACHE_LOADED: function(e) {
let {
  readStates: t
} = e;
ef = !0, ev(), t.forEach(e => {
  var t;
  let n = null !== (t = e.type) && void 0 !== t ? t : eo.W.CHANNEL;
  e.type = n, null == eb._readStates[n] && (eb._readStates[n] = {}), eb._readStates[n][e.channelId] = (0, h.gh)(e, eb);
});
  },
  GUILD_CREATE: function(e) {
var t;
let {
  guild: n
} = e, r = eg();
eb.forEach(e => {
  e.guildId === n.id && e.shouldDeleteReadState(r) && e.delete(!1);
}), eM(null !== (t = n.channels) && void 0 !== t ? t : []), eV(n), eU(n);
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
let {
  channelId: t,
  isAfter: n,
  messages: r
} = e, i = eb.get(t);
i.loadedMessages = !0;
let a = Q.Z.getMessages(t);
null != a && (r.length > 0 && 1 === H.default.compare(r[0].id, i.ackMessageId) && 0 === i.unreadCount ? i.rebuildChannelState() : a.hasPresent() || a.jumpTargetId === i.ackMessageId ? i.rebuildChannelState() : n && null != i.ackMessageId && a.has(i.ackMessageId, !0) && (i.unreadCount += r.length, null == i.oldestUnreadMessageId && i.rebuildChannelState())), eP(r.map(e => e.thread).filter(F.lm));
  },
  MESSAGE_CREATE: function(e) {
let t, n, {
    channelId: i,
    message: a,
    isPushNotification: s
  } = e,
  o = eb.get(i);
o.lastMessageId = a.id;
let l = et.default.getCurrentUser(),
  u = j.Z.getBasicChannel(i);
if (null != a.author && null != l && a.author.id === l.id && !er.V$x.SELF_MENTIONABLE_SYSTEM.has(a.type))
  return null != o.outgoingAck && o.clearOutgoingAck(), eQ({
    channelId: i,
    messageId: a.id,
    manual: !1
  });
let c = (0, v.PP)();
if ((null == c ? void 0 : c.isReady()) === !0) {
  let e = c.getCurrentRoute();
  if (I.Z.getChatOpen(o.channelId))
    t = o.channelId;
  else if ((null == e ? void 0 : e.name) === 'channel')
    t = e.params.channelId;
  else if ((null == e ? void 0 : e.name) === 'guilds') {
    var d;
    t = null === (d = e.params) || void 0 === d ? void 0 : d.channelId;
  }
} else
  null == c && (t = J.Z.getChannelId(), n = Y.ZP.getCurrentSidebarChannelId(t));
let _ = t === i || n === i;
if (_ && eL(o) && !s || null != r && r.isInstanceFocused() && _ && r.isInstanceUILocked() && r.isPinned(er.Odu.TEXT))
  return o.ack({
    messageId: a.id
  });
(null == o.oldestUnreadMessageId || o.oldestUnreadMessageIdStale) && (o.oldestUnreadMessageId = a.id), o.unreadCount++, !($.Z.isBlockedForMessage(a) || a.type === er.uaV.RECIPIENT_REMOVE && (null == u ? void 0 : u.type) === er.d4z.GROUP_DM) && function(e, t, n) {
  if (null != t && (0, y.Hl)({
      rawMessage: e,
      userId: t.id,
      suppressEveryone: ee.ZP.isSuppressEveryoneEnabled(n.guildId),
      suppressRoles: ee.ZP.isSuppressRolesEnabled(n.guildId)
    }))
    return !0;
  let r = j.Z.getChannel(e.channel_id);
  return !!eC(r) || !!ee.ZP.mentionOnAllMessages && null != r && !r.isVocal() && !ee.ZP.isChannelMuted(r.guild_id, r.id) && ee.ZP.resolvedMessageNotifications(r) === er.bL.ALL_MESSAGES || !1;
}(a, l, o) && o.mentionCount++;
  },
  MESSAGE_DELETE: eH,
  MESSAGE_DELETE_BULK: eH,
  MESSAGE_ACK: eQ,
  CHANNEL_ACK: function(e) {
let {
  channelId: t,
  messageId: n,
  immediate: r = !1,
  force: i = !1,
  context: a,
  location: s
} = e, o = eb.get(t), l = o.ack({
  messageId: n,
  local: a !== er.e3s,
  immediate: r,
  force: i,
  isExplicitUserAction: !0,
  location: s
});
return null != n ? (o.rebuildChannelState(), !0) : l;
  },
  CHANNEL_LOCAL_ACK: function(e) {
let {
  channelId: t
} = e;
return eb.get(t).ack({
  messageId: void 0,
  local: !0,
  immediate: void 0,
  force: void 0,
  isExplicitUserAction: !0
});
  },
  CHANNEL_PINS_ACK: function(e) {
let {
  channelId: t,
  timestamp: n
} = e;
return eb.get(t).ackPins(n);
  },
  CHANNEL_PINS_UPDATE: function(e) {
let {
  channelId: t,
  lastPinTimestamp: n
} = e, r = eb.get(t), i = eO(n);
return r.lastPinTimestamp !== i && (r.lastPinTimestamp = i, !0);
  },
  CHANNEL_SELECT: function(e) {
let {
  channelId: t
} = e, n = Y.ZP.getCurrentSidebarChannelId(t), r = j.Z.getChannel(t);
if (null != r) {
  var i;
  let e = eb.get(r.id);
  e.ackMessageIdAtChannelSelect = null !== (i = e.ackMessageId) && void 0 !== i ? i : H.default.fromTimestamp(e.getAckTimestamp()), e.recordLastViewedTime();
}
ez(ed), ez(e_);
let a = !1;
return ed !== t && (a = eq(ed) || a, a = eq(e_) || a), (ed === t || (null == r ? void 0 : r.type) != null && er.TPd.GUILD_THREADS_ONLY.has(r.type)) && (a = ek(t) || a), ed === t && (a = ek(n) || a), ed = t, e_ = n, a;
  },
  VOICE_CHANNEL_SELECT: function(e) {
let {
  channelId: t
} = e;
if (null == t)
  return;
let n = eb.get(t);
if (!n.hasMentions())
  return n.oldestUnreadMessageId = null, n.ack({
    isExplicitUserAction: !0
  });
  },
  CHANNEL_CREATE: function(e) {
let {
  channel: t
} = e;
if (!(0, x.Em)(t.type))
  return !1;
let n = eb.get(t.id);
n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eO(t.lastPinTimestamp);
  },
  THREAD_CREATE: function(e) {
let {
  channel: t
} = e;
(function(e) {
  if (!x.AW.has(e.type))
    return 0;
  let t = eb.get(e.id);
  t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eO(e.lastPinTimestamp), t.syncThreadSettings(), e.ownerId === Z.default.getId() && (t.loadedMessages = !0);
}(t), function(e) {
  let t = e.parent_id;
  eb.get(t).lastMessageId = e.id;
  let n = et.default.getCurrentUser();
  if (e.ownerId === (null == n ? void 0 : n.id))
    eb.get(e.id)._persisted = !0, eQ({
      channelId: t,
      messageId: e.id,
      manual: !1
    });
}(t));
  },
  THREAD_UPDATE: function(e) {
let {
  channel: t
} = e;
return !!x.AW.has(t.type) && eb.get(t.id).syncThreadSettings();
  },
  THREAD_LIST_SYNC: function(e) {
let {
  threads: t
} = e;
t.forEach(e => {
  if (!x.AW.has(e.type))
    return;
  let t = eb.get(e.id);
  if (t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eO(e.lastPinTimestamp), t._isThread = !0, t._isActiveThread = !0, t._isJoinedThread = P.Z.hasJoined(e.id), e.isForumPost()) {
    let t = eb.get(e.parent_id);
    0 > H.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id);
  }
});
  },
  LOAD_THREADS_SUCCESS: eZ,
  LOAD_ARCHIVED_THREADS_SUCCESS: eZ,
  SEARCH_FINISH: eY,
  MOD_VIEW_SEARCH_FINISH: eY,
  THREAD_MEMBER_UPDATE: function(e) {
let {
  id: t
} = e;
return eb.get(t).syncThreadSettings();
  },
  THREAD_MEMBERS_UPDATE: function(e) {
return (0, U.s)(e) && eb.get(e.id).syncThreadSettings();
  },
  CHANNEL_DELETE: eW,
  THREAD_DELETE: eW,
  WINDOW_FOCUS: function(e) {
let t = !1;
for (let [n, r] of H.default.entries(eI))
  r === e.windowId && (t = function(e, t) {
    if (null == e)
      return !1;
    let n = eb.get(e);
    return !t && !n.hasUnread() && (n.oldestUnreadMessageIdStale = !0), ek(e);
  }(n, e.focused) || t);
return t;
  },
  UPDATE_CHANNEL_DIMENSIONS: function(e) {
let {
  channelId: t
} = e;
return ek(t);
  },
  CURRENT_USER_UPDATE: function() {
eE = null;
  },
  DRAWER_OPEN: function() {
if (null != ed) {
  let e = eb.get(ed);
  !e.hasUnread() && (e.oldestUnreadMessageIdStale = !0);
}
return !1;
  },
  DRAWER_CLOSE: function() {
return ek(ed);
  },
  BULK_ACK: function(e) {
var t, n, r;
let {
  channels: i,
  context: a,
  onFinished: s
} = e;
t = i.filter(e => null != e.messageId && e0.hasUnreadOrMentions(e.channelId, e.readStateType)), n = a, r = s, t.forEach(e => {
  let {
    channelId: t,
    messageId: n,
    readStateType: r
  } = e;
  eb.get(t, r).ack({
    messageId: n,
    local: !0,
    immediate: void 0,
    force: void 0,
    isExplicitUserAction: !0
  });
}), n !== er.e3s || (eh.push(...t.map(e => ({
  channel_id: e.channelId,
  message_id: e.messageId,
  read_state_type: e.readStateType
}))), ep || ey(r));
  },
  ENABLE_AUTOMATIC_ACK: function(e) {
let {
  channelId: t,
  windowId: n
} = e;
return eI[t] !== n && (l()(void 0 === eI[t], 'handleEnableAutomaticAck: channel already visible in another window'), eI[t] = n, ek(t));
  },
  DISABLE_AUTOMATIC_ACK: function(e) {
let {
  channelId: t
} = e;
return eI[t] = void 0, !1;
  },
  GUILD_FEATURE_ACK: eX,
  GUILD_SCHEDULED_EVENT_CREATE: function(e) {
let {
  guildScheduledEvent: t
} = e, n = t.guild_id, r = eb.get(t.guild_id, eo.W.GUILD_EVENT);
if (r.lastMessageId = t.id, ej(t)) {
  eX({
    type: 'GUILD_FEATURE_ACK',
    id: n,
    ackType: eo.W.GUILD_EVENT,
    ackedId: t.id,
    local: !1
  });
  return;
}!ee.ZP.isMuteScheduledEventsEnabled(n) && r.mentionCount++;
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
let {
  guildScheduledEvent: t
} = e, n = t.guild_id;
if (ej(t) || ![
    es.p1.CANCELED,
    es.p1.COMPLETED
  ].includes(t.status))
  return !1;
eb.get(n, eo.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
let {
  guildScheduledEvent: t
} = e, n = t.guild_id;
if (ej(t))
  return !1;
eb.get(t.guild_id, eo.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id);
  },
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
return eb.clear(t.id, eo.W.GUILD_EVENT);
  },
  GUILD_UPDATE: function(e) {
let {
  guild: t
} = e, n = t.latest_onboarding_question_id;
if (null == n)
  return;
let r = eb.get(t.id, eo.W.GUILD_ONBOARDING_QUESTION);
r._guildId = t.id, r.lastMessageId = n;
  },
  RESORT_THREADS: function(e) {
let {
  channelId: t
} = e;
return ek(t);
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
let {
  channelId: t,
  chatOpen: n
} = e;
  },
  DECAY_READ_STATES: ev,
  NOTIFICATION_CENTER_ITEM_CREATE: function(e) {
var t;
let {
  item: n
} = e, r = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
if (null == r)
  return !1;
let i = eb.get(r, eo.W.NOTIFICATION_CENTER);
i.lastMessageId = n.id;
if (0, D.Z.active) {
  e$(r, eo.W.NOTIFICATION_CENTER, n.id, !1);
  return;
}
i.mentionCount++;
  },
  RELATIONSHIP_ADD: function(e) {
let t = et.default.getCurrentUser();
if (null == t || null == e.relationship.since || e.relationship.type !== er.OGo.PENDING_INCOMING && e.relationship.type !== er.OGo.FRIEND)
  return !1;
let n = eb.get(t.id, eo.W.NOTIFICATION_CENTER),
  r = e.relationship.type === er.OGo.FRIEND,
  i = r ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime(),
  a = null != n.ackMessageId ? H.default.extractTimestamp(n.ackMessageId) : 0;
a < i && (n.lastMessageId = H.default.fromTimestamp(i), (0, D.Z.active) ? e$(t.id, eo.W.NOTIFICATION_CENTER, void 0, !1) : r ? n.mentionCount-- : n.mentionCount++);
  },
  RELATIONSHIP_REMOVE: function(e) {
let t = et.default.getCurrentUser();
if (null == t || null == e.relationship.since || e.relationship.type !== er.OGo.PENDING_INCOMING)
  return !1;
let n = eb.get(t.id, eo.W.NOTIFICATION_CENTER),
  r = new Date(e.relationship.since).getTime();
(null != n.ackMessageId ? H.default.extractTimestamp(n.ackMessageId) : 0) <= r && (n.mentionCount = Math.max(0, n.mentionCount - 1));
  },
  NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
var t;
let {
  ids: n,
  optimistic: r
} = e;
if (r || D.Z.active)
  return !1;
let i = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
if (null == i)
  return !1;
let a = eb.get(i, eo.W.NOTIFICATION_CENTER);
n.forEach(e => {
  0 > H.default.compare(a.ackMessageId, e) && (a.mentionCount = Math.max(a.mentionCount - 1, 0));
});
  },
  USER_NON_CHANNEL_ACK: function(e) {
var t;
let {
  ackType: n,
  ackedId: r,
  local: i
} = e, a = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
return null != a && e$(a, n, r, i);
  },
  PASSIVE_UPDATE_V2: function(e) {
let t = !1;
for (let n of e.channels) {
  let e = eb.get(n.id),
    r = eO(n.lastPinTimestamp);
  (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== r) && (t = !0, e.lastMessageId = n.lastMessageId, e.lastPinTimestamp = r);
}
return t;
  },
  CLEAR_OLDEST_UNREAD_MESSAGE: function(e) {
let {
  channelId: t
} = e;
return eq(t);
  },
  TRY_ACK: function(e) {
let {
  channelId: t
} = e;
return ek(t);
  },
  MESSAGE_REQUEST_ACK: function(e) {
var t;
let {
  ackedId: n
} = e, r = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
if (null == r)
  return !1;
let i = eb.get(r, eo.W.MESSAGE_REQUESTS);
if (n === i.ackMessageId)
  return !1;
i.ackMessageId = n, i.ack({
  messageId: n,
  isExplicitUserAction: !0
});
  },
  MESSAGE_REQUEST_CLEAR_ACK: function(e) {
var t;
let n = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
if (null == n)
  return !1;
let r = eb.get(n, eo.W.MESSAGE_REQUESTS);
if (null == r.ackMessageId)
  return !1;
r.ackMessageId = void 0;
  }
});
t.ZP = e0;