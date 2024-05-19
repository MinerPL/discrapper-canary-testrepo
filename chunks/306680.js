"use strict";
let i;
n.r(t), n.d(t, {
  shouldBadgeMessage: function() {
    return eg
  }
}), n("47120"), n("411104"), n("653041"), n("789020");
var r, a, s, o = n("512722"),
  l = n.n(o),
  u = n("913527"),
  d = n.n(u),
  _ = n("442837"),
  c = n("544891"),
  E = n("846519"),
  I = n("283693"),
  T = n("570140"),
  f = n("317381"),
  S = n("358221"),
  h = n("702321"),
  A = n("430198"),
  m = n("710845"),
  N = n("924301"),
  p = n("57132"),
  O = n("355298"),
  C = n("869404"),
  R = n("333984"),
  g = n("572804"),
  L = n("140155"),
  v = n("178480"),
  D = n("398758"),
  M = n("344185"),
  y = n("569471"),
  P = n("195663"),
  U = n("581883"),
  b = n("131704"),
  G = n("386438"),
  w = n("70956"),
  k = n("630388"),
  B = n("823379"),
  V = n("931619"),
  x = n("709054"),
  F = n("314897"),
  H = n("433355"),
  Y = n("592125"),
  j = n("796974"),
  W = n("828695"),
  K = n("486472"),
  z = n("430824"),
  Z = n("517100"),
  X = n("375954"),
  Q = n("496675"),
  q = n("699516"),
  J = n("944486"),
  $ = n("9156"),
  ee = n("594174"),
  et = n("451478"),
  en = n("981631"),
  ei = n("918559"),
  er = n("176505"),
  ea = n("765305"),
  es = n("490897");

function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let el = new m.default("ReadStateStore");
__OVERLAY__ && (i = n("237997").default);
let eu = en.BasicPermissions.VIEW_CHANNEL | en.BasicPermissions.READ_MESSAGE_HISTORY,
  ed = null,
  e_ = null,
  ec = null,
  eE = !1,
  eI = [],
  eT = !1,
  ef = null,
  eS = {},
  eh = !1,
  eA = 30 * w.default.Millis.DAY;

function em() {
  return x.default.fromTimestamp(Date.now() - eA)
}
let eN = 0,
  ep = 0,
  eO = null;

function eC() {
  eN = Date.now() - 7 * w.default.Millis.DAY, ep = Date.now() - 3 * w.default.Millis.DAY, clearTimeout(eO), eO = setTimeout(() => {
    T.default.dispatch({
      type: "DECAY_READ_STATES"
    })
  }, 1 * w.default.Millis.HOUR)
}

function eR(e) {
  if (null == e) return 0;
  let t = Date.parse(e);
  return isNaN(t) ? 0 : t
}

function eg(e, t) {
  let n = Y.default.getChannel(e.channel_id);
  return !(null == n || q.default.isBlocked(e.author.id)) && (!!((0, g.default)({
    message: e,
    userId: t.id,
    suppressEveryone: $.default.isSuppressEveryoneEnabled(n.guild_id),
    suppressRoles: $.default.isSuppressRolesEnabled(n.guild_id)
  }) || eL(n)) || !1)
}

function eL(e) {
  return null != e && e.isPrivate() && !$.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
}
async function ev(e) {
  if (0 === eI.length) {
    eT = !1, null == e || e();
    return
  }
  eT = !0;
  let t = eI.splice(0, 100);
  await eD(() => c.HTTP.post({
    url: en.Endpoints.BULK_ACK,
    body: {
      read_states: t
    },
    oldFormErrors: !0
  })), await (0, E.timeoutPromise)(1e3), ev(e)
}
async function eD(e) {
  let t = F.default.getId();
  for (let n = 0; n < 3; n++) try {
    return await e()
  } catch (e) {
    if (el.error("", e), n + 1 < 3 && (await (0, E.timeoutPromise)((n + 1) * 2e3), await V.default.awaitOnline(), t !== F.default.getId())) return Promise.reject(Error("User changed."))
  }
}

function eM(e) {
  if (e.type !== es.ReadStateTypes.CHANNEL) return !1;
  let t = Y.default.getChannel(e.channelId),
    n = null != t && t.isForumPost();
  if (null != f.default.getConnectedActivityChannelId() && f.default.getActivityPanelMode() === ei.ActivityPanelModes.PANEL && f.default.getFocusedLayout() === ei.FocusedActivityLayouts.NO_CHAT || Z.default.isIdle() || !e.canTrackUnreads()) return !1;
  if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
    let t = eS[e.channelId],
      n = null != t && et.default.isFocused(t),
      r = null != i && i.isInstanceFocused() && i.isPinned(en.OverlayWidgets.TEXT);
    if (!n && !r) return !1
  }
  if (n && !e._persisted) return !0;
  if (!e.hasUnreadOrMentions() || (null == t ? void 0 : t.isForumLikeChannel()) === !0 || !(n && !e._isJoinedThread) && !j.default.isAtBottom(e.channelId)) return !1;
  let r = S.default.getLayout(e.channelId),
    a = S.default.getChatOpen(e.channelId);
  if (!a && (r === en.ChannelLayouts.NO_CHAT || r === en.ChannelLayouts.FULL_SCREEN) || null == eS[e.channelId]) return !1;
  let s = X.default.getMessages(e.channelId);
  return null != s && !!s.ready && !s.loadingMore && (!eh || !!a) && !0
}(s = r || (r = {}))[s.IS_GUILD_CHANNEL = 1] = "IS_GUILD_CHANNEL", s[s.IS_THREAD = 2] = "IS_THREAD";
class ey {
  static forEach(e) {
    for (let n of Object.keys(ey._readStates)) {
      var t;
      let i = null !== (t = ey._readStates[parseInt(n)]) && void 0 !== t ? t : {};
      for (let t of Object.keys(i))
        if (!1 === e(i[t])) break
    }
  }
  static get(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL,
      i = null === (t = ey._readStates[n]) || void 0 === t ? void 0 : t[e];
    return null == i && (i = new ey(e, n), null == ey._readStates[n] && (ey._readStates[n] = {}), ey._readStates[n][e] = i), i
  }
  static getGuildSentinels(e) {
    return null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = {
      unreadsSentinel: 0
    }), this._guildReadStateSentinels[e]
  }
  static resetGuildSentinels() {
    this._guildReadStateSentinels = {}
  }
  static getIfExists(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
    return null === (t = ey._readStates[n]) || void 0 === t ? void 0 : t[e]
  }
  static getMentionChannelIds() {
    let e = [];
    for (let t of ey._mentionChannels) {
      let n = ey.getIfExists(t);
      null != n && n.canHaveMentions() ? e.push(t) : ey._mentionChannels.delete(t)
    }
    return e
  }
  static getValue(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL,
      i = arguments.length > 2 ? arguments[2] : void 0,
      r = arguments.length > 3 ? arguments[3] : void 0,
      a = null === (t = ey._readStates[n]) || void 0 === t ? void 0 : t[e];
    return null == a ? r : i(a)
  }
  static clear(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
    return (null === (t = ey._readStates[n]) || void 0 === t ? void 0 : t[e]) != null && (delete ey._readStates[n][e], ey._mentionChannels.delete(e), !0)
  }
  static clearAll() {
    ey._readStates = {}, ey._mentionChannels.clear()
  }
  serialize(e) {
    let {
      channelId: t,
      type: n,
      _guildId: i,
      _isThread: r,
      _isActiveThread: a,
      _isJoinedThread: s,
      _persisted: o,
      loadedMessages: l,
      _lastMessageId: u,
      _lastMessageTimestamp: d,
      _ackMessageId: _,
      _ackMessageTimestamp: c,
      ackPinTimestamp: E,
      isManualAck: I,
      lastPinTimestamp: T,
      _oldestUnreadMessageId: f,
      oldestUnreadMessageIdStale: S,
      estimated: h,
      _mentionCount: A,
      flags: m,
      lastViewed: N
    } = this;
    if (e) return {
      channelId: t,
      type: n,
      _guildId: i,
      _isThread: r,
      _isActiveThread: a,
      _isJoinedThread: s,
      _persisted: o,
      loadedMessages: l,
      _lastMessageId: u,
      _lastMessageTimestamp: d,
      _ackMessageId: _,
      _ackMessageTimestamp: c,
      ackPinTimestamp: E,
      isManualAck: I,
      lastPinTimestamp: T,
      _oldestUnreadMessageId: f,
      oldestUnreadMessageIdStale: S,
      estimated: h,
      _mentionCount: A,
      flags: m,
      lastViewed: N
    };
    let p = {
      channelId: t,
      type: n,
      _guildId: i,
      _persisted: o,
      _lastMessageId: u,
      _lastMessageTimestamp: d,
      _ackMessageId: _,
      _ackMessageTimestamp: c,
      ackPinTimestamp: E,
      lastPinTimestamp: T,
      _mentionCount: A,
      flags: m
    };
    return null != N && N > 0 && (p.lastViewed = N), r && (p._isThread = r, p._isActiveThread = a, p._isJoinedThread = s), p
  }
  deserializeForOverlay(e) {
    let {
      channelId: t,
      type: n,
      _guildId: i,
      _isThread: r,
      _isActiveJoinedThread: a,
      _isActiveThread: s,
      _isJoinedThread: o,
      _persisted: l,
      loadedMessages: u,
      _lastMessageId: d,
      _lastMessageTimestamp: _,
      _ackMessageId: c,
      _ackMessageTimestamp: E,
      ackPinTimestamp: I,
      isManualAck: T,
      lastPinTimestamp: f,
      _oldestUnreadMessageId: S,
      oldestUnreadMessageIdStale: h,
      estimated: A,
      _unreadCount: m,
      _mentionCount: N,
      flags: p,
      lastViewed: O
    } = e;
    this.channelId = t, this.type = null != n ? n : es.ReadStateTypes.CHANNEL, this._guildId = i, this._isThread = null != r && r, null != a ? (this._isActiveThread = a, this._isJoinedThread = a) : (this._isActiveThread = null != s && s, this._isJoinedThread = null != o && o), this._persisted = !1 !== l, this.loadedMessages = null != u && u, this._lastMessageId = d, this._lastMessageTimestamp = _, this._ackMessageId = c, this._ackMessageTimestamp = E, this.ackPinTimestamp = I, this.isManualAck = null != T && T, this.lastPinTimestamp = f, this._oldestUnreadMessageId = S, this.oldestUnreadMessageIdStale = null != h && h, this.estimated = null != A && A, this._unreadCount = null != m ? m : 0, this._mentionCount = N, this.flags = p, this.lastViewed = O, ey._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && ey._mentionChannels.add(this.channelId)
  }
  incrementGuildUnreadsSentinel() {
    null != this._guildId && ey.getGuildSentinels(this._guildId).unreadsSentinel++
  }
  get oldestUnreadMessageId() {
    return this._oldestUnreadMessageId
  }
  set oldestUnreadMessageId(e) {
    this._oldestUnreadMessageId = e, this.oldestUnreadMessageIdStale = !1
  }
  get lastMessageId() {
    return this._lastMessageId
  }
  set lastMessageId(e) {
    this._lastMessageId = e, this._lastMessageTimestamp = null != e ? x.default.extractTimestamp(e) : 0
  }
  get lastMessageTimestamp() {
    return this._lastMessageTimestamp
  }
  get ackMessageId() {
    return this._ackMessageId
  }
  set ackMessageId(e) {
    this._ackMessageId = e, this._ackMessageTimestamp = null != e ? x.default.extractTimestamp(e) : 0
  }
  get unreadCount() {
    var e;
    return null !== (e = this._unreadCount) && void 0 !== e ? e : 0
  }
  set unreadCount(e) {
    (void 0 === this._unreadCount || 0 === this._unreadCount || 0 === e) && this.incrementGuildUnreadsSentinel(), this._unreadCount = e
  }
  get mentionCount() {
    return this._mentionCount
  }
  set mentionCount(e) {
    (0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(), this._mentionCount = e, ey._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && ey._mentionChannels.add(this.channelId)
  }
  guessAckMessageId() {
    let e = X.default.getMessages(this.channelId);
    if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
    if (!this.hasMentions()) return this.lastMessageId;
    let t = null,
      n = this.mentionCount,
      i = ee.default.getCurrentUser();
    return e.forEach(e => {
      if (n > 0 && e.author.id !== (null == i ? void 0 : i.id)) --n;
      else if (0 === n) return t = e.id, !1
    }, this, !0), t
  }
  get guildId() {
    if (null != this._guildId) return this._guildId;
    let e = Y.default.getChannel(this.channelId);
    return this._guildId = null != e ? e.getGuildId() : null
  }
  isPrivate() {
    if (this.type !== es.ReadStateTypes.CHANNEL) return !1;
    let e = Y.default.getChannel(this.channelId);
    return null != e && e.isPrivate()
  }
  rebuildChannelState(e) {
    var t, n;
    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      r = arguments.length > 2 ? arguments[2] : void 0;
    if (this.ackMessageId = null !== (t = null != e ? e : this._ackMessageId) && void 0 !== t ? t : this.guessAckMessageId(), this.isManualAck = null != e, this.oldestUnreadMessageId = null, this.estimated = !1, this.unreadCount = 0, i && (this.mentionCount = 0), this.hasUnread()) {
      let e = ee.default.getCurrentUser(),
        t = this.getAckTimestamp(),
        r = !1,
        a = !1,
        s = null,
        o = X.default.getMessages(this.channelId);
      o.forAll(n => {
        if (r) {
          var o;
          this.oldestUnreadMessageId = null !== (o = this._oldestUnreadMessageId) && void 0 !== o ? o : n.id
        } else r = n.id === this._ackMessageId;
        x.default.extractTimestamp(n.id) > t ? (this.unreadCount++, i && eg(n, e) && this.mentionCount++, s = null != s ? s : n.id) : a = !0
      }), this.estimated = !o.hasPresent() || !(r || a) && o.length === this.unreadCount, this.oldestUnreadMessageId = null !== (n = this._oldestUnreadMessageId) && void 0 !== n ? n : s
    }
    null != r && (this.mentionCount = r)
  }
  handleGuildEventRemoval(e, t) {
    var n;
    if (x.default.compare(this.ackMessageId, t) >= 0) return;
    let i = N.default.getGuildScheduledEventsForGuild(e),
      r = this.getAckTimestamp();
    if (isNaN(r)) return;
    let a = null !== (n = this._ackMessageId) && void 0 !== n ? n : x.default.fromTimestamp(r),
      s = null,
      o = 0;
    i.forEach(e => {
      (0, N.isEventUpcoming)(e) && (x.default.compare(e.id, s) > 0 && (s = e.id), x.default.compare(e.id, a) > 0 && o++)
    }), this.lastMessageId = s, this.mentionCount = o
  }
  canTrackUnreads() {
    if (this.type !== es.ReadStateTypes.CHANNEL) return !0;
    if (this._isThread && !this._isActiveThread || this._isResourceChannel) return !1;
    let e = Y.default.getBasicChannel(this.channelId);
    return null != e && ("basicPermissions" in e ? G.default.has(e.basicPermissions, en.BasicPermissions.VIEW_CHANNEL) : !A.default.isChannelGated(this.guildId, this.channelId) || Q.default.can(en.Permissions.VIEW_CHANNEL, e))
  }
  canBeUnread() {
    return !(this._isThread && !this._isJoinedThread || (0, C.isMessageRequestOrSpamRequest)(this.channelId, [O.default, R.default]) || !this._isThread && (0, D.isOptInEnabledForGuild)(this._guildId) && (this._lastMessageTimestamp < eN || !$.default.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())) && this.canTrackUnreads()
  }
  canHaveMentions() {
    return !(0 === this.mentionCount || this._isThread && !this._isJoinedThread || (0, C.isMessageRequestOrSpamRequest)(this.channelId, [O.default, R.default]) || (0, D.isOptInEnabledForGuild)(this._guildId) && this._lastMessageTimestamp < eN) && this.canTrackUnreads()
  }
  getGuildChannelUnreadState(e, t, n, i, r) {
    if (t && (this._lastMessageTimestamp < eN || !$.default.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)) return {
      mentionCount: 0,
      unread: !1
    };
    if ("basicPermissions" in e) {
      if (!G.default.has(e.basicPermissions, en.BasicPermissions.VIEW_CHANNEL)) return {
        mentionCount: 0,
        unread: !1
      }
    } else if (A.default.isChannelGated(this.guildId, this.channelId) && !Q.default.can(en.Permissions.VIEW_CHANNEL, e)) return {
      mentionCount: 0,
      unread: !1
    };
    return i || r ? {
      mentionCount: this.mentionCount,
      unread: !1
    } : {
      mentionCount: this.mentionCount,
      unread: this.getAckTimestamp() < this._lastMessageTimestamp
    }
  }
  hasUnread() {
    return this.getAckTimestamp() < this._lastMessageTimestamp
  }
  hasRecentlyVisitedAndRead() {
    return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > ep && U.default.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
  }
  isForumPostUnread() {
    return !!this._isActiveThread && this.hasUnread()
  }
  hasMentions() {
    return this.getMentionCount() > 0
  }
  getMentionCount() {
    return this.mentionCount
  }
  hasUnreadOrMentions() {
    return this.hasMentions() || this.hasUnread()
  }
  ackPins() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    if (this.type !== es.ReadStateTypes.CHANNEL || !this.canTrackUnreads()) return !1;
    if (null == e) {
      if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
      this._persisted = !0, eD(() => c.HTTP.post({
        url: en.Endpoints.PINS_ACK(this.channelId),
        oldFormErrors: !0
      }))
    }
    let t = eR(e);
    return this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp, !0
  }
  ack(e) {
    let {
      messageId: t,
      local: n = !1,
      immediate: i = !1,
      force: r = !1,
      isExplicitUserAction: a = !1,
      location: s = {
        section: en.AnalyticsSections.CHANNEL
      },
      trackAnalytics: o = !0
    } = e;
    if (!this._shouldAck(r, n, a) || !r && !this.canTrackUnreads()) return !1;
    let l = this.hasMentions();
    return this.estimated = !1, this.snapshot = this.takeSnapshot(), this.unreadCount = 0, this.mentionCount = 0, (null != t || null != (t = this.lastMessageId)) && (this.ackMessageId = t, this.isManualAck = !1, this._persisted = !0, eE && (this.ackedWhileCached = !0), function(e) {
      if (null == e) return;
      let t = ey.get(e);
      if (t.type !== es.ReadStateTypes.CHANNEL) return;
      let n = Y.default.getChannel(t.channelId);
      if (null == n || !n.isForumPost() || null == n.parent_id) return;
      let i = n.parent_id,
        r = ey.get(i);
      M.default.hasLoaded(n.guild_id) && x.default.keys(M.default.getThreadsForParent(n.guild_id, i)).every(e => e$.hasOpenedThread(e) || 0 > x.default.compare(e, r.ackMessageId)) && r.ack({})
    }(this.channelId), n ? this.oldestUnreadMessageId = null : (null == this.outgoingAck && (this.outgoingAckTimer = setTimeout(() => {
      this.type === es.ReadStateTypes.CHANNEL ? this._ack(s, o) : this._nonChannelAck(), this.outgoingAck = null, this.outgoingAckTimer = null
    }, l || i ? 0 : 3e3)), this.outgoingAck = t), !0)
  }
  takeSnapshot() {
    let {
      default: e
    } = n("888369"), t = this.guildId;
    return {
      unread: this.hasUnread(),
      mentionCount: this.mentionCount,
      guildUnread: null == t ? null : e.hasUnread(t),
      guildMentionCount: null == t ? null : e.getMentionCount(t),
      takenAt: Date.now()
    }
  }
  clearOutgoingAck() {
    this.outgoingAck = null, null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), this.outgoingAckTimer = null)
  }
  _shouldAck(e, t, n) {
    var i;
    return !!e || !!n || !!t || !!(!this.isManualAck && (this.type !== es.ReadStateTypes.CHANNEL || this.loadedMessages || (null === (i = Y.default.getChannel(this.channelId)) || void 0 === i ? void 0 : i.isForumLikeChannel()))) || !1
  }
  _ack(e, t) {
    let {
      outgoingAck: i
    } = this;
    if (null == i) return;
    let r = F.default.getId(),
      a = ec;
    this._persisted = !0;
    let s = this.recalculateFlags(),
      o = s === this.flags ? void 0 : s;
    eD(() => c.HTTP.post({
      url: en.Endpoints.MESSAGE_ACK(this.channelId, i),
      body: {
        token: ec,
        last_viewed: this.lastViewed,
        flags: o
      },
      oldFormErrors: !0
    })).then(e => {
      null != e && (ec === a && r === F.default.getId() && (ec = e.body.token), T.default.dispatch({
        type: "MESSAGE_ACKED"
      }), t && n.e("54076").then(n.bind(n, "189229")).then(e => {
        let {
          default: t
        } = e;
        t(this.channelId)
      }))
    })
  }
  recalculateFlags() {
    if (this.type !== es.ReadStateTypes.CHANNEL) return;
    let e = Y.default.getChannel(this.channelId);
    if (null != e) return e.isThread() ? 2 : null != e.guild_id ? 1 : 0
  }
  _nonChannelAck() {
    let e;
    let {
      outgoingAck: t,
      channelId: n,
      type: i
    } = this;
    if (null != t) {
      switch (i) {
        case es.ReadStateTypes.GUILD_HOME:
        case es.ReadStateTypes.GUILD_EVENT:
        case es.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
          e = en.Endpoints.GUILD_FEATURE_ACK(n, t, i);
          break;
        case es.ReadStateTypes.NOTIFICATION_CENTER:
          e = en.Endpoints.USER_NON_CHANNEL_ACK(t, i);
          break;
        default:
          return
      }
      this._persisted = !0, eD(() => c.HTTP.post({
        url: e,
        body: {},
        oldFormErrors: !0
      }))
    }
  }
  delete() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      n = Y.default.getBasicChannel(this.channelId);
    el.log("Deleting ReadState", this.channelId, this.type, {
      remote: t,
      persisted: this._persisted,
      channelMissing: null == n,
      isOld: ek(this, em()),
      validType: null != n && b.ALL_CHANNEL_TYPES.has(n.type),
      readableType: null != n && (0, b.isReadableType)(n.type),
      oldThreadCutoff: em(),
      mentionCount: this.mentionCount,
      channelId: this.channelId,
      ackMessageId: this._ackMessageId,
      lastMessageId: this._lastMessageId
    }), t && this._persisted && c.HTTP.del({
      url: en.Endpoints.CHANNEL_ACK(this.channelId),
      body: {
        version: 2,
        read_state_type: this.type
      },
      oldFormErrors: !0
    }), null === (e = ey._readStates[this.type]) || void 0 === e || delete e[this.channelId], ey._mentionChannels.delete(this.channelId)
  }
  shouldDeleteReadState(e) {
    if (0 !== K.default.totalUnavailableGuilds) return !1;
    if (null != this.type && this.type !== es.ReadStateTypes.CHANNEL) return ! function(e) {
      switch (e.type) {
        case es.ReadStateTypes.GUILD_HOME:
        case es.ReadStateTypes.GUILD_EVENT:
        case es.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
          return null != z.default.getGuild(e.channelId);
        case es.ReadStateTypes.NOTIFICATION_CENTER:
          var t;
          return x.default.cast(null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
        default:
          return !0
      }
    }(this);
    let t = Y.default.getBasicChannel(this.channelId);
    if (null == t) return !!ek(this, e) || !1;
    return !!b.ALL_CHANNEL_TYPES.has(t.type) && (!(0, b.isReadableType)(t.type) || !(0, b.isPrivate)(t.type) && (!!(b.THREAD_CHANNEL_TYPES.has(t.type) && function(e, t, n) {
      let i = e.guildId;
      return !(null != i && M.default.isActive(i, t.parent_id, e.channelId)) && ek(e, n)
    }(this, t, e)) || !!(this.mentionCount > 0) && !Q.default.canBasicChannel(eu, t) || !1))
  }
  getAckTimestamp() {
    let e, t;
    if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
    if (this._isThread) return this._ackMessageTimestamp = eG(this.guildId, this.channelId), this._ackMessageId = x.default.fromTimestamp(this._ackMessageTimestamp), this._ackMessageTimestamp;
    if (this.type === es.ReadStateTypes.GUILD_EVENT || this.type === es.ReadStateTypes.GUILD_ONBOARDING_QUESTION) e = z.default.getGuild(this.channelId);
    else if ((0, er.isStaticChannelRoute)(this.channelId)) e = z.default.getGuild(this.guildId);
    else {
      let t = Y.default.getChannel(this.channelId);
      if (null != t) {
        let n = t.getGuildId();
        e = z.default.getGuild(n)
      }
    }
    return null != e ? isNaN(t = ew(e)) && (t = x.default.extractTimestamp(this.channelId)) : t = x.default.extractTimestamp(this.channelId), this._ackMessageTimestamp = t, t
  }
  get oldestUnreadTimestamp() {
    return null != this.oldestUnreadMessageId ? x.default.extractTimestamp(this.oldestUnreadMessageId) : 0
  }
  syncThreadSettings() {
    this._isThread = !0;
    let e = Y.default.getChannel(this.channelId);
    if (null == e) return el.warn("syncThreadSettings called with channel not in memory ".concat(this.channelId)), !1;
    let t = this.guildId,
      n = null != t && M.default.isActive(t, e.parent_id, this.channelId),
      i = y.default.hasJoined(this.channelId);
    return (this._isActiveThread !== n || this._isJoinedThread !== i) && (this._isActiveThread = n, this._isJoinedThread = i, !0)
  }
  recordLastViewedTime() {
    let e = Math.ceil((Date.now() - x.DISCORD_EPOCH) / w.default.Millis.DAY);
    e !== this.lastViewed && (this.lastViewed = e, this.canTrackUnreads() && !this.hasUnread() && this.ack({
      force: !0,
      trackAnalytics: !1
    }))
  }
  constructor(e, t = es.ReadStateTypes.CHANNEL) {
    eo(this, "channelId", void 0), eo(this, "type", es.ReadStateTypes.CHANNEL), eo(this, "_guildId", void 0), eo(this, "_isThread", void 0), eo(this, "_isActiveThread", void 0), eo(this, "_isJoinedThread", void 0), eo(this, "_isResourceChannel", void 0), eo(this, "_persisted", void 0), eo(this, "loadedMessages", void 0), eo(this, "_lastMessageId", void 0), eo(this, "_lastMessageTimestamp", void 0), eo(this, "_ackMessageId", void 0), eo(this, "_ackMessageTimestamp", void 0), eo(this, "isManualAck", void 0), eo(this, "ackPinTimestamp", void 0), eo(this, "lastPinTimestamp", void 0), eo(this, "_oldestUnreadMessageId", void 0), eo(this, "oldestUnreadMessageIdStale", void 0), eo(this, "estimated", void 0), eo(this, "_unreadCount", void 0), eo(this, "_mentionCount", void 0), eo(this, "flags", void 0), eo(this, "lastViewed", void 0), eo(this, "outgoingAck", void 0), eo(this, "outgoingAckTimer", null), eo(this, "ackMessageIdAtChannelSelect", null), eo(this, "ackedWhileCached", void 0), eo(this, "snapshot", void 0), this.channelId = e, this.type = t, this._guildId = null, this._isThread = !1, this._isActiveThread = !1, this._isJoinedThread = !1, this._isResourceChannel = !1, this._persisted = !1, this.loadedMessages = !1, this._lastMessageId = null, this._lastMessageTimestamp = 0, this._ackMessageId = null, this._ackMessageTimestamp = 0, this.isManualAck = !1, this.ackPinTimestamp = 0, this.lastPinTimestamp = 0, this._oldestUnreadMessageId = null, this.oldestUnreadMessageIdStale = !1, this.estimated = !1, this._unreadCount = 0, this._mentionCount = 0, this.outgoingAck = null
  }
}

function eP(e) {
  e.forEach(e => {
    if ((0, b.isReadableType)(e.type)) {
      let t = ey.get(e.id);
      t._guildId = e.guild_id, t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eR(e.lastPinTimestamp), t._isResourceChannel = e.hasFlag(er.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), b.THREAD_CHANNEL_TYPES.has(e.type) && t.syncThreadSettings()
    }
  })
}

function eU(e) {
  e.forEach(e => {
    if ((0, b.isReadableType)(e.type)) {
      var t;
      let n = ey.get(e.id);
      n.lastMessageId = e.last_message_id, n.lastPinTimestamp = eR(e.last_pin_timestamp), n._isResourceChannel = (0, k.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, er.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), b.THREAD_CHANNEL_TYPES.has(e.type) && n.syncThreadSettings()
    }
  })
}

function eb(e) {
  (function(e) {
    var t;
    null === (t = e.threads) || void 0 === t || t.forEach(t => {
      if (!b.ALL_CHANNEL_TYPES.has(t.type)) return;
      let n = ey.get(t.id);
      n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eR(t.lastPinTimestamp), n._isThread = !0, n._isActiveThread = !0, n._isJoinedThread = null != t.member, null == n.ackMessageId && (n.ackMessageId = x.default.fromTimestamp(eG(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = eG(e.id, t.id))
    })
  })(e),
  function(e) {
    var t, n;
    if ((null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) === 0 && null == ey.getIfExists(e.id, es.ReadStateTypes.GUILD_EVENT)) return;
    let i = ey.get(e.id, es.ReadStateTypes.GUILD_EVENT);
    i._guildId = e.id;
    let r = 0,
      a = null,
      s = null !== (n = i._ackMessageId) && void 0 !== n ? n : x.default.fromTimestamp(i.getAckTimestamp());
    e.guild_scheduled_events.forEach(e => {
      x.default.compare(e.id, a) > 0 && (a = e.id), x.default.compare(e.id, s) > 0 && r++
    }), i.lastMessageId = a, i.mentionCount = r
  }(e),
  function(e) {
    ey.get(e.id, es.ReadStateTypes.GUILD_HOME).lastMessageId = x.default.fromTimestamp(d()(Date.now()).subtract(24, "h").valueOf())
  }(e),
  function(e) {
    let t = z.default.getGuild(e.id);
    if (null == t) return;
    let n = null == t ? void 0 : t.latestOnboardingQuestionId;
    if (null == n) return;
    let i = ey.get(t.id, es.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
    i._guildId = t.id, i.lastMessageId = n
  }(e)
}
eo(ey, "_guildReadStateSentinels", {}), eo(ey, "_readStates", {}), eo(ey, "_mentionChannels", new Set);

function eG(e, t) {
  var n, i, r;
  let a = Y.default.getChannel(t),
    s = z.default.getGuild(null != e ? e : null == a ? void 0 : a.guild_id),
    o = (null == a ? void 0 : a.isForumPost()) ? 0 : ew(s),
    l = (null !== (r = null === (n = y.default.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 0) - 5e3;
  isNaN(l) && (l = -5e3);
  let u = null == a ? void 0 : null === (i = a.threadMetadata) || void 0 === i ? void 0 : i.archiveTimestamp,
    d = null != u ? new Date(u).getTime() - 1 : 0;
  isNaN(d) && (d = 0);
  let _ = Math.max(l, d);
  return _ <= 0 && (_ = x.default.extractTimestamp(t) - 1), (isNaN(_) || _ <= 0) && (_ = 0), isNaN(o) ? _ : Math.max(o, _)
}

function ew(e) {
  if (null != e && null != e.joinedAt) {
    if (e.joinedAt instanceof Date) isNaN(e.joinedAt.getTime());
    else if ("string" == typeof e.joinedAt) isNaN(new Date(e.joinedAt).getTime());
    else if ("number" == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt
  }
  return Date.now()
}

function ek(e, t) {
  return !!(e.mentionCount > 0) || !(x.default.compare(e.channelId, t) > 0 || null != e._ackMessageId && x.default.compare(e._ackMessageId, t) > 0 || null != e._lastMessageId && x.default.compare(e._lastMessageId, t) > 0) && !0
}

function eB(e) {
  if (null != e) {
    let t = ey.get(e);
    if (eM(t)) return t.ack({})
  }
  return !1
}

function eV() {
  null != ef && clearTimeout(ef)
}

function ex(e) {
  if (null != e.channelUpdates) {
    var t;
    eP(null === (t = e.channelUpdates) || void 0 === t ? void 0 : t.writes)
  }
  if (null != e.channelTimestampUpdates)
    for (let t of e.channelTimestampUpdates) {
      let e = ey.get(t.id);
      null != t.last_message_id && (e.lastMessageId = t.last_message_id), null != t.last_pin_timestamp && (e.lastPinTimestamp = eR(t.last_pin_timestamp))
    }
}

function eF(e) {
  let {
    channelId: t
  } = e;
  ey.get(t).rebuildChannelState()
}

function eH(e) {
  let {
    threads: t
  } = e;
  eU(t)
}

function eY(e) {
  let {
    messages: t,
    threads: n
  } = e;
  for (let e of t) eU(e.map(e => {
    let {
      thread: t
    } = e;
    return t
  }).filter(B.isNotNullish));
  eU(n)
}

function ej(e) {
  let t = ee.default.getCurrentUser();
  return null != e.creator_id && null != t && e.creator_id === t.id
}

function eW(e) {
  let {
    channel: t
  } = e;
  return ey.clear(t.id)
}

function eK() {
  let e = H.default.getCurrentSidebarChannelId(ed),
    t = !1;
  return e_ !== e ? (t = eZ(e_), e_ = e) : t = eB(e) || t, t
}

function ez(e) {
  if (null != e) ey.get(e).isManualAck = !1
}

function eZ(e) {
  if (null == e) return !1;
  let t = ey.get(e);
  return !t.hasUnread() && (t.oldestUnreadMessageId = null, !0)
}

function eX(e) {
  let {
    channelId: t,
    messageId: n,
    manual: i,
    newMentionCount: r
  } = e, a = ey.get(t);
  return i ? (a.rebuildChannelState(n, !0, r), !0) : n !== a._ackMessageId && a.ack({
    messageId: n,
    local: !0
  })
}

function eQ(e) {
  let {
    id: t,
    ackType: n,
    ackedId: i,
    local: r
  } = e;
  return eq(t, n, i, r)
}

function eq(e, t, n, i) {
  var r;
  let a = ey.get(e, t);
  return n !== a.ackMessageId && a.lastMessageId !== a.ackMessageId && (null != a.lastMessageId || 0 !== a.mentionCount) && (n = null !== (r = null != n ? n : a.lastMessageId) && void 0 !== r ? r : x.default.fromTimestamp(a.getAckTimestamp()), a.ack({
    messageId: n,
    local: null == i || i
  }))
}
class eJ extends(a = _.default.Store) {
  initialize() {
    this.waitFor(j.default, ee.default, z.default, K.default, Y.default, J.default, X.default, Q.default, S.default, M.default, y.default, H.default, N.default, W.default, A.default, $.default, et.default, L.default, O.default, U.default, R.default), this.syncWith([H.default], eK)
  }
  getReadStatesByChannel() {
    var e;
    return null !== (e = ey._readStates[es.ReadStateTypes.CHANNEL]) && void 0 !== e ? e : {}
  }
  getForDebugging(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
    return ey.getIfExists(e, t)
  }
  getNotifCenterReadState(e) {
    var t;
    return null === (t = ey._readStates[es.ReadStateTypes.NOTIFICATION_CENTER]) || void 0 === t ? void 0 : t[e]
  }
  hasUnread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
    return ey.getValue(e, t, e => e.canBeUnread() && e.hasUnread(), !1)
  }
  hasTrackedUnread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
    return ey.getValue(e, t, e => e.canTrackUnreads() && e.hasUnread(), !1)
  }
  isForumPostUnread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
    return ey.getValue(e, t, e => e.isForumPostUnread(), !1)
  }
  getUnreadCount(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
    return ey.getValue(e, t, e => e.canBeUnread() ? e.unreadCount : 0, 0)
  }
  getMentionCount(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL,
      n = ey.getValue(e, t, e => e.canHaveMentions() ? e.getMentionCount() : 0, 0);
    if ((0, h.default)(e)) {
      if (n > 0) return 1
    }
    return n
  }
  getGuildChannelUnreadState(e, t, n, i, r) {
    return ey.getValue(e.id, es.ReadStateTypes.CHANNEL, a => a.getGuildChannelUnreadState(e, t, n, i, r), {
      mentionCount: 0,
      unread: !1
    })
  }
  hasRecentlyVisitedAndRead(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
    return ey.getValue(e, t, e => e.hasRecentlyVisitedAndRead(), !1)
  }
  ackMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
    return ey.getValue(e, t, e => e.canBeUnread() ? e.ackMessageId : null, null)
  }
  getTrackedAckMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
    return ey.getValue(e, t, e => e.canTrackUnreads() ? e._ackMessageId : null, null)
  }
  lastMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
    return ey.getValue(e, t, e => e.lastMessageId, null)
  }
  lastMessageTimestamp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
    return ey.getValue(e, t, e => e.lastMessageTimestamp, 0)
  }
  lastPinTimestamp(e) {
    return ey.getValue(e, es.ReadStateTypes.CHANNEL, e => e.lastPinTimestamp, null)
  }
  getOldestUnreadMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
    return ey.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadMessageId : null, null)
  }
  getOldestUnreadTimestamp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
    return ey.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0, 0)
  }
  isEstimated(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
    return ey.getValue(e, t, e => e.estimated, !1)
  }
  hasOpenedThread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : es.ReadStateTypes.CHANNEL;
    return ey.getValue(e, t, e => e._persisted, !1)
  }
  hasUnreadPins(e) {
    return ey.getValue(e, es.ReadStateTypes.CHANNEL, e => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1)
  }
  isNewForumThread(e, t, n) {
    let i = ey.get(t);
    if (!0 === ey.get(e)._persisted || null == i.ackMessageIdAtChannelSelect || 0 >= x.default.compare(e, i.ackMessageIdAtChannelSelect)) return !1;
    let r = ew(n);
    return x.default.extractTimestamp(e) > r
  }
  getAllReadStates(e) {
    let t = [];
    return ey.forEach(n => {
      switch (n.type) {
        case es.ReadStateTypes.GUILD_HOME:
        case es.ReadStateTypes.GUILD_EVENT:
        case es.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
          null != z.default.getGuild(n.channelId) && t.push(n.serialize(e));
          break;
        case es.ReadStateTypes.NOTIFICATION_CENTER:
          var i;
          x.default.cast(null === (i = ee.default.getCurrentUser()) || void 0 === i ? void 0 : i.id) === n.channelId && t.push(n.serialize(e));
          break;
        default:
          t.push(n.serialize(e))
      }
    }), t
  }
  getGuildUnreadsSentinel(e) {
    return ey.getGuildSentinels(e).unreadsSentinel
  }
  getMentionChannelIds() {
    return ey.getMentionChannelIds()
  }
  getSnapshot(e, t) {
    let n = ey.get(e);
    return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot
  }
}
eo(eJ, "displayName", "ReadStateStore");
let e$ = new eJ(T.default, {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
    let {
      changesByChannelId: t
    } = e;
    for (let e in t) {
      var n, i;
      let r = t[e],
        a = ey.getIfExists(e);
      if (null != a)
        for (let e of [null === (n = r.new_messages) || void 0 === n ? void 0 : n[0]].concat(null !== (i = r.modified_messages) && void 0 !== i ? i : []).filter(B.isNotNullish)) 1 === x.default.compare(e.id, a.lastMessageId) && (a.lastMessageId = e.id)
    }
  },
  CONNECTION_OPEN: function(e) {
    var t, n;
    let {
      guilds: i,
      relationships: r,
      initialPrivateChannels: a,
      readState: s
    } = e;
    eC(), ec = null, !eE && !s.partial && ey.clearAll(), eE = !1, s.entries.forEach(e => {
      var t, n, i;
      let r = null !== (t = e.read_state_type) && void 0 !== t ? t : es.ReadStateTypes.CHANNEL;
      if (r !== es.ReadStateTypes.CHANNEL) {
        ;
        e = {
          id: (i = e).id,
          read_state_type: i.read_state_type,
          mention_count: i.badge_count,
          last_message_id: i.last_acked_id
        }
      }
      let a = ey.get(e.id, r);
      a._persisted = !0, a._mentionCount = null !== (n = e.mention_count) && void 0 !== n ? n : 0, a.flags = e.flags, a.lastViewed = e.last_viewed;
      let s = Y.default.getBasicChannel(e.id);
      null != s && (0, b.isThread)(s.type) && (null == e.last_message_id || 0 === e.last_message_id) ? a.ackMessageId = x.default.fromTimestamp(eG(s.guild_id, s.id)) : a.ackedWhileCached ? -1 === x.default.compare(a.ackMessageId, e.last_message_id) && (a.ackMessageId = e.last_message_id) : a.ackMessageId = e.last_message_id, a.ackedWhileCached = void 0, a.ackPinTimestamp = eR(e.last_pin_timestamp), ey._mentionChannels.delete(a.channelId), a._mentionCount > 0 && a.canHaveMentions() && ey._mentionChannels.add(a.channelId)
    }), ey.resetGuildSentinels();
    let o = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    for (let e of (null != o && (ey.get(o, es.ReadStateTypes.NOTIFICATION_CENTER).lastMessageId = x.default.fromTimestamp(Date.now())), function(e) {
        let t = ee.default.getCurrentUser();
        if (!(0, v.inNotificationCenterEnabled)() || null == t) return 0;
        let n = ey.get(t.id, es.ReadStateTypes.NOTIFICATION_CENTER);
        e.forEach(e => {
          if (null == e.since || e.type !== en.RelationshipTypes.PENDING_INCOMING) return;
          let t = new Date(e.since).getTime();
          (null != n.ackMessageId ? x.default.extractTimestamp(n.ackMessageId) : 0) < t && (n.mentionCount++, n.lastMessageId = x.default.fromTimestamp(t))
        })
      }(r), eP(a), i)) eP(null !== (n = e.channels) && void 0 !== n ? n : []), ex(e), eb(e);
    eV(), ef = setTimeout(() => (function(e) {
      let t = em();
      for (let i of e) {
        var n;
        let e = null !== (n = i.read_state_type) && void 0 !== n ? n : es.ReadStateTypes.CHANNEL,
          r = ey.get(i.id, e);
        r.shouldDeleteReadState(t) && r.delete()
      }
    })(s.entries), 10 * w.default.Millis.SECOND)
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      lazyPrivateChannels: t
    } = e;
    eP(t)
  },
  LOGOUT: eV,
  OVERLAY_INITIALIZE: function(e) {
    let {
      readStates: t,
      selectedChannelId: n
    } = e;
    eC(), ec = null, ed = n, e_ = H.default.getCurrentSidebarChannelId(ed), ey.clearAll(), t.forEach(e => {
      let t = ey.get(e.channelId);
      t.deserializeForOverlay(e), t.type === es.ReadStateTypes.CHANNEL && t.rebuildChannelState()
    })
  },
  CACHE_LOADED: function(e) {
    let {
      readStates: t
    } = e;
    eE = !0, eC(), t.forEach(e => {
      var t;
      let n = null !== (t = e.type) && void 0 !== t ? t : es.ReadStateTypes.CHANNEL;
      e.type = n, null == ey._readStates[n] && (ey._readStates[n] = {}), ey._readStates[n][e.channelId] = (0, I.dangerouslyCast)(e, ey)
    })
  },
  GUILD_CREATE: function(e) {
    var t;
    let {
      guild: n
    } = e, i = em();
    ey.forEach(e => {
      e.guildId === n.id && e.shouldDeleteReadState(i) && e.delete(!1)
    }), eP(null !== (t = n.channels) && void 0 !== t ? t : []), ex(n), eb(n)
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let {
      channelId: t,
      isAfter: n,
      messages: i
    } = e, r = ey.get(t);
    r.loadedMessages = !0;
    let a = X.default.getMessages(t);
    null != a && (i.length > 0 && 1 === x.default.compare(i[0].id, r.ackMessageId) && 0 === r.unreadCount ? r.rebuildChannelState() : a.hasPresent() || a.jumpTargetId === r.ackMessageId ? r.rebuildChannelState() : n && null != r.ackMessageId && a.has(r.ackMessageId, !0) && (r.unreadCount += i.length, null == r.oldestUnreadMessageId && r.rebuildChannelState())), eU(i.map(e => e.thread).filter(B.isNotNullish))
  },
  MESSAGE_CREATE: function(e) {
    let t, n, {
        channelId: r,
        message: a,
        isPushNotification: s
      } = e,
      o = ey.get(r);
    o.lastMessageId = a.id;
    let l = ee.default.getCurrentUser(),
      u = Y.default.getBasicChannel(r);
    if (null != a.author && null != l && a.author.id === l.id && !en.MessageTypesSets.SELF_MENTIONABLE_SYSTEM.has(a.type)) return null != o.outgoingAck && o.clearOutgoingAck(), eX({
      channelId: r,
      messageId: a.id,
      manual: !1
    });
    let d = (0, p.getRootNavigationRefIfInExperiment)();
    if ((null == d ? void 0 : d.isReady()) === !0) {
      let e = d.getCurrentRoute();
      if (S.default.getChatOpen(o.channelId)) t = o.channelId;
      else if ((null == e ? void 0 : e.name) === "channel") t = e.params.channelId;
      else if ((null == e ? void 0 : e.name) === "guilds") {
        var _;
        t = null === (_ = e.params) || void 0 === _ ? void 0 : _.channelId
      }
    } else null == d && (t = J.default.getChannelId(), n = H.default.getCurrentSidebarChannelId(t));
    let c = t === r || n === r;
    if (c && eM(o) && !s || null != i && i.isInstanceFocused() && c && i.isInstanceUILocked() && i.isPinned(en.OverlayWidgets.TEXT)) return o.ack({
      messageId: a.id
    });
    (null == o.oldestUnreadMessageId || o.oldestUnreadMessageIdStale) && (o.oldestUnreadMessageId = a.id), o.unreadCount++, !(null != a.author && q.default.isBlocked(a.author.id) || a.type === en.MessageTypes.RECIPIENT_REMOVE && (null == u ? void 0 : u.type) === en.ChannelTypes.GROUP_DM) && function(e, t, n) {
      if (null != t && (0, g.isRawMessageMentioned)({
          rawMessage: e,
          userId: t.id,
          suppressEveryone: $.default.isSuppressEveryoneEnabled(n.guildId),
          suppressRoles: $.default.isSuppressRolesEnabled(n.guildId)
        })) return !0;
      let i = Y.default.getChannel(e.channel_id);
      return !!eL(i) || !!$.default.mentionOnAllMessages && null != i && !i.isVocal() && !$.default.isChannelMuted(i.guild_id, i.id) && $.default.resolvedMessageNotifications(i) === en.UserNotificationSettings.ALL_MESSAGES || !1
    }(a, l, o) && o.mentionCount++
  },
  MESSAGE_DELETE: eF,
  MESSAGE_DELETE_BULK: eF,
  MESSAGE_ACK: eX,
  CHANNEL_ACK: function(e) {
    let {
      channelId: t,
      messageId: n,
      immediate: i = !1,
      force: r = !1,
      context: a,
      location: s
    } = e, o = ey.get(t), l = o.ack({
      messageId: n,
      local: a !== en.CURRENT_APP_CONTEXT,
      immediate: i,
      force: r,
      isExplicitUserAction: !0,
      location: s
    });
    return null != n ? (o.rebuildChannelState(), !0) : l
  },
  CHANNEL_LOCAL_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return ey.get(t).ack({
      messageId: void 0,
      local: !0,
      immediate: void 0,
      force: void 0,
      isExplicitUserAction: !0
    })
  },
  CHANNEL_PINS_ACK: function(e) {
    let {
      channelId: t,
      timestamp: n
    } = e;
    return ey.get(t).ackPins(n)
  },
  CHANNEL_PINS_UPDATE: function(e) {
    let {
      channelId: t,
      lastPinTimestamp: n
    } = e, i = ey.get(t), r = eR(n);
    return i.lastPinTimestamp !== r && (i.lastPinTimestamp = r, !0)
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e, n = H.default.getCurrentSidebarChannelId(t), i = Y.default.getChannel(t);
    if (null != i) {
      var r;
      let e = ey.get(i.id);
      e.ackMessageIdAtChannelSelect = null !== (r = e.ackMessageId) && void 0 !== r ? r : x.default.fromTimestamp(e.getAckTimestamp()), e.recordLastViewedTime()
    }
    ez(ed), ez(e_);
    let a = !1;
    return ed !== t && (a = eZ(ed) || a, a = eZ(e_) || a), (ed === t || (null == i ? void 0 : i.type) != null && en.ChannelTypesSets.GUILD_THREADS_ONLY.has(i.type)) && (a = eB(t) || a), ed === t && (a = eB(n) || a), ed = t, e_ = n, a
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t) return;
    let n = ey.get(t);
    if (!n.hasMentions()) return n.oldestUnreadMessageId = null, n.ack({
      isExplicitUserAction: !0
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, b.isReadableType)(t.type)) return !1;
    let n = ey.get(t.id);
    n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eR(t.lastPinTimestamp)
  },
  THREAD_CREATE: function(e) {
    let {
      channel: t
    } = e;
    (function(e) {
      if (!b.ALL_CHANNEL_TYPES.has(e.type)) return 0;
      let t = ey.get(e.id);
      t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eR(e.lastPinTimestamp), t.syncThreadSettings(), e.ownerId === F.default.getId() && (t.loadedMessages = !0)
    })(t),
    function(e) {
      let t = e.parent_id;
      ey.get(t).lastMessageId = e.id;
      let n = ee.default.getCurrentUser();
      if (e.ownerId === (null == n ? void 0 : n.id)) ey.get(e.id)._persisted = !0, eX({
        channelId: t,
        messageId: e.id,
        manual: !1
      })
    }(t)
  },
  THREAD_UPDATE: function(e) {
    let {
      channel: t
    } = e;
    return !!b.ALL_CHANNEL_TYPES.has(t.type) && ey.get(t.id).syncThreadSettings()
  },
  THREAD_LIST_SYNC: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      if (!b.ALL_CHANNEL_TYPES.has(e.type)) return;
      let t = ey.get(e.id);
      if (t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eR(e.lastPinTimestamp), t._isThread = !0, t._isActiveThread = !0, t._isJoinedThread = y.default.hasJoined(e.id), e.isForumPost()) {
        let t = ey.get(e.parent_id);
        0 > x.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id)
      }
    })
  },
  LOAD_THREADS_SUCCESS: eH,
  LOAD_ARCHIVED_THREADS_SUCCESS: eH,
  SEARCH_FINISH: eY,
  MOD_VIEW_SEARCH_FINISH: eY,
  THREAD_MEMBER_UPDATE: function(e) {
    let {
      id: t
    } = e;
    return ey.get(t).syncThreadSettings()
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    return (0, P.doesThreadMembersActionAffectMe)(e) && ey.get(e.id).syncThreadSettings()
  },
  CHANNEL_DELETE: eW,
  THREAD_DELETE: eW,
  WINDOW_FOCUS: function(e) {
    let t = !1;
    for (let [n, i] of x.default.entries(eS)) i === e.windowId && (t = function(e, t) {
      if (null == e) return !1;
      let n = ey.get(e);
      return !t && !n.hasUnread() && (n.oldestUnreadMessageIdStale = !0), eB(e)
    }(n, e.focused) || t);
    return t
  },
  UPDATE_CHANNEL_DIMENSIONS: function(e) {
    let {
      channelId: t
    } = e;
    return eB(t)
  },
  CURRENT_USER_UPDATE: function() {
    ec = null
  },
  DRAWER_OPEN: function(e) {
    let {
      drawer: t
    } = e;
    if (null != ed) {
      let e = ey.get(ed);
      !e.hasUnread() && (e.oldestUnreadMessageIdStale = !0)
    }
    return eh = null != t, !1
  },
  DRAWER_CLOSE: function() {
    return eh = !1, eB(ed)
  },
  BULK_ACK: function(e) {
    var t, n, i;
    let {
      channels: r,
      context: a,
      onFinished: s
    } = e;
    t = r.filter(e => null != e.messageId && e$.hasUnread(e.channelId, e.readStateType)), n = a, i = s, t.forEach(e => {
      let {
        channelId: t,
        messageId: n,
        readStateType: i
      } = e;
      ey.get(t, i).ack({
        messageId: n,
        local: !0,
        immediate: void 0,
        force: void 0,
        isExplicitUserAction: !0
      })
    }), n !== en.CURRENT_APP_CONTEXT || (eI.push(...t.map(e => ({
      channel_id: e.channelId,
      message_id: e.messageId,
      read_state_type: e.readStateType
    }))), eT || ev(i))
  },
  ENABLE_AUTOMATIC_ACK: function(e) {
    let {
      channelId: t,
      windowId: n
    } = e;
    return eS[t] !== n && (l()(void 0 === eS[t], "handleEnableAutomaticAck: channel already visible in another window"), eS[t] = n, eB(t))
  },
  DISABLE_AUTOMATIC_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return eS[t] = void 0, !1
  },
  GUILD_FEATURE_ACK: eQ,
  GUILD_SCHEDULED_EVENT_CREATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = t.guild_id, i = ey.get(t.guild_id, es.ReadStateTypes.GUILD_EVENT);
    if (i.lastMessageId = t.id, ej(t)) {
      eQ({
        type: "GUILD_FEATURE_ACK",
        id: n,
        ackType: es.ReadStateTypes.GUILD_EVENT,
        ackedId: t.id,
        local: !1
      });
      return
    }!$.default.isMuteScheduledEventsEnabled(n) && i.mentionCount++
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = t.guild_id;
    if (ej(t) || ![ea.GuildScheduledEventStatus.CANCELED, ea.GuildScheduledEventStatus.COMPLETED].includes(t.status)) return !1;
    ey.get(n, es.ReadStateTypes.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = t.guild_id;
    if (ej(t)) return !1;
    ey.get(t.guild_id, es.ReadStateTypes.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    return ey.clear(t.id, es.ReadStateTypes.GUILD_EVENT)
  },
  GUILD_UPDATE: function(e) {
    let {
      guild: t
    } = e, n = t.latest_onboarding_question_id;
    if (null == n) return;
    let i = ey.get(t.id, es.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
    i._guildId = t.id, i.lastMessageId = n
  },
  RESORT_THREADS: function(e) {
    let {
      channelId: t
    } = e;
    return eB(t)
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
    let {
      channelId: t,
      chatOpen: n
    } = e
  },
  DECAY_READ_STATES: eC,
  NOTIFICATION_CENTER_ITEM_CREATE: function(e) {
    var t;
    let {
      item: n
    } = e;
    if (!(0, v.inNotificationCenterEnabled)()) return !1;
    let i = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == i) return !1;
    let r = ey.get(i, es.ReadStateTypes.NOTIFICATION_CENTER);
    r.lastMessageId = n.id;
    if (0, L.default.active) {
      eq(i, es.ReadStateTypes.NOTIFICATION_CENTER, n.id, !1);
      return
    }
    r.mentionCount++
  },
  RELATIONSHIP_ADD: function(e) {
    let t = ee.default.getCurrentUser();
    if (!(0, v.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== en.RelationshipTypes.PENDING_INCOMING && e.relationship.type !== en.RelationshipTypes.FRIEND) return !1;
    let n = ey.get(t.id, es.ReadStateTypes.NOTIFICATION_CENTER),
      i = e.relationship.type === en.RelationshipTypes.FRIEND,
      r = i ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime(),
      a = null != n.ackMessageId ? x.default.extractTimestamp(n.ackMessageId) : 0;
    a < r && (n.lastMessageId = x.default.fromTimestamp(r), (0, L.default.active) ? eq(t.id, es.ReadStateTypes.NOTIFICATION_CENTER, void 0, !1) : i ? n.mentionCount-- : n.mentionCount++)
  },
  RELATIONSHIP_REMOVE: function(e) {
    let t = ee.default.getCurrentUser();
    if (!(0, v.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== en.RelationshipTypes.PENDING_INCOMING) return !1;
    let n = ey.get(t.id, es.ReadStateTypes.NOTIFICATION_CENTER),
      i = new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? x.default.extractTimestamp(n.ackMessageId) : 0) <= i && (n.mentionCount = Math.max(0, n.mentionCount - 1))
  },
  NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
    var t;
    let {
      ids: n,
      optimistic: i
    } = e;
    if (i || !(0, v.inNotificationCenterEnabled)() || L.default.active) return !1;
    let r = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == r) return !1;
    let a = ey.get(r, es.ReadStateTypes.NOTIFICATION_CENTER);
    n.forEach(e => {
      0 > x.default.compare(a.ackMessageId, e) && (a.mentionCount = Math.max(a.mentionCount - 1, 0))
    })
  },
  USER_NON_CHANNEL_ACK: function(e) {
    var t;
    let {
      ackType: n,
      ackedId: i,
      local: r
    } = e, a = null === (t = ee.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    return null != a && eq(a, n, i, r)
  },
  PASSIVE_UPDATE_V1: function(e) {
    var t;
    let n = !1;
    for (let i of null !== (t = e.channels) && void 0 !== t ? t : []) {
      let e = ey.get(i.id),
        t = eR(i.lastPinTimestamp);
      (e.lastMessageId !== i.lastMessageId || e.lastPinTimestamp !== t) && (n = !0, e.lastMessageId = i.lastMessageId, e.lastPinTimestamp = t)
    }
    return n
  },
  CLEAR_OLDEST_UNREAD_MESSAGE: function(e) {
    let {
      channelId: t
    } = e;
    return eZ(t)
  },
  TRY_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return eB(t)
  }
});
t.default = e$