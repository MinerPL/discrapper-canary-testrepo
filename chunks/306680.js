"use strict";
let i;
n.d(t, {
  Ex: function() {
    return eg
  }
}), n(47120), n(411104), n(653041), n(789020);
var r, s, o, a = n(512722),
  l = n.n(a),
  u = n(913527),
  _ = n.n(u),
  d = n(442837),
  c = n(544891),
  E = n(846519),
  I = n(283693),
  T = n(570140),
  h = n(317381),
  S = n(358221),
  f = n(702321),
  N = n(430198),
  A = n(710845),
  m = n(353926),
  O = n(924301),
  R = n(57132),
  C = n(355298),
  p = n(869404),
  g = n(333984),
  L = n(572804),
  v = n(140155),
  D = n(178480),
  M = n(398758),
  P = n(725319),
  y = n(344185),
  U = n(569471),
  b = n(195663),
  G = n(581883),
  w = n(131704),
  k = n(386438),
  B = n(70956),
  x = n(630388),
  V = n(823379),
  Z = n(931619),
  H = n(709054),
  F = n(314897),
  Y = n(433355),
  j = n(592125),
  W = n(796974),
  K = n(486472),
  z = n(430824),
  q = n(517100),
  X = n(375954),
  Q = n(496675),
  J = n(699516),
  $ = n(944486),
  ee = n(9156),
  et = n(594174),
  en = n(451478),
  ei = n(981631),
  er = n(918559),
  es = n(176505),
  eo = n(765305),
  ea = n(490897);

function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eu = new A.Z("ReadStateStore");
__OVERLAY__ && (i = n(237997).Z);
let e_ = ei.S7T.VIEW_CHANNEL | ei.S7T.READ_MESSAGE_HISTORY,
  ed = $.Z.getChannelId(),
  ec = null,
  eE = null,
  eI = !1,
  eT = [],
  eh = !1,
  eS = null,
  ef = {},
  eN = 30 * B.Z.Millis.DAY;

function eA() {
  return H.default.fromTimestamp(Date.now() - eN)
}
let em = 0,
  eO = 0,
  eR = null;

function eC() {
  em = Date.now() - 7 * B.Z.Millis.DAY, eO = Date.now() - 3 * B.Z.Millis.DAY, clearTimeout(eR), eR = setTimeout(() => {
    T.Z.dispatch({
      type: "DECAY_READ_STATES"
    })
  }, 1 * B.Z.Millis.HOUR)
}

function ep(e) {
  if (null == e) return 0;
  let t = Date.parse(e);
  return isNaN(t) ? 0 : t
}

function eg(e, t) {
  let n = j.Z.getChannel(e.channel_id);
  return !(null == n || J.Z.isBlocked(e.author.id)) && (!!((0, L.ZP)({
    message: e,
    userId: t.id,
    suppressEveryone: ee.ZP.isSuppressEveryoneEnabled(n.guild_id),
    suppressRoles: ee.ZP.isSuppressRolesEnabled(n.guild_id)
  }) || eL(n)) || !1)
}

function eL(e) {
  return null != e && e.isPrivate() && !ee.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
}
async function ev(e) {
  if (0 === eT.length) {
    eh = !1, null == e || e();
    return
  }
  eh = !0;
  let t = eT.splice(0, 100);
  await eD(() => c.tn.post({
    url: ei.ANM.BULK_ACK,
    body: {
      read_states: t
    },
    oldFormErrors: !0
  })), await (0, E.GR)(1e3), ev(e)
}
async function eD(e) {
  let t = F.default.getId();
  for (let n = 0; n < 3; n++) try {
    return await e()
  } catch (e) {
    if (eu.error("", e), n + 1 < 3 && (await (0, E.GR)((n + 1) * 2e3), await Z.Z.awaitOnline(), t !== F.default.getId())) return Promise.reject(Error("User changed."))
  }
}

function eM(e) {
  if (e.type !== ea.W.CHANNEL) return !1;
  let t = j.Z.getChannel(e.channelId),
    n = null != t && t.isForumPost();
  if (null != h.ZP.getConnectedActivityChannelId() && h.ZP.getActivityPanelMode() === er.Ez.PANEL && h.ZP.getFocusedLayout() === er.MI.NO_CHAT || q.Z.isIdle() || !e.canTrackUnreads()) return !1;
  if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
    let t = ef[e.channelId],
      n = null != t && en.Z.isFocused(t),
      r = null != i && i.isInstanceFocused() && i.isPinned(ei.Odu.TEXT);
    if (!n && !r) return !1
  }
  if (n && !e._persisted) return !0;
  if (!e.hasUnreadOrMentions() || (null == t ? void 0 : t.isForumLikeChannel()) === !0 || !(n && !e._isJoinedThread) && !W.Z.isAtBottom(e.channelId)) return !1;
  let r = S.Z.getLayout(e.channelId),
    s = S.Z.getChatOpen(e.channelId);
  if (!s && (r === ei.AEg.NO_CHAT || r === ei.AEg.FULL_SCREEN) || null == ef[e.channelId]) return !1;
  let o = X.Z.getMessages(e.channelId);
  return !!(null != o && o.ready && !o.loadingMore && ((0, P.Z)() || s)) || !1
}(o = r || (r = {}))[o.IS_GUILD_CHANNEL = 1] = "IS_GUILD_CHANNEL", o[o.IS_THREAD = 2] = "IS_THREAD";
class eP {
  static forEach(e) {
    for (let n of Object.keys(eP._readStates)) {
      var t;
      let i = null !== (t = eP._readStates[parseInt(n)]) && void 0 !== t ? t : {};
      for (let t of Object.keys(i))
        if (!1 === e(i[t])) break
    }
  }
  static get(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL,
      i = null === (t = eP._readStates[n]) || void 0 === t ? void 0 : t[e];
    return null == i && (i = new eP(e, n), null == eP._readStates[n] && (eP._readStates[n] = {}), eP._readStates[n][e] = i), i
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
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL;
    return null === (t = eP._readStates[n]) || void 0 === t ? void 0 : t[e]
  }
  static getMentionChannelIds() {
    let e = [];
    for (let t of eP._mentionChannels) {
      let n = eP.getIfExists(t);
      null != n && n.canHaveMentions() ? e.push(t) : eP._mentionChannels.delete(t)
    }
    return e
  }
  static getValue(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL,
      i = arguments.length > 2 ? arguments[2] : void 0,
      r = arguments.length > 3 ? arguments[3] : void 0,
      s = null === (t = eP._readStates[n]) || void 0 === t ? void 0 : t[e];
    return null == s ? r : i(s)
  }
  static clear(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL;
    return (null === (t = eP._readStates[n]) || void 0 === t ? void 0 : t[e]) != null && (delete eP._readStates[n][e], eP._mentionChannels.delete(e), !0)
  }
  static clearAll() {
    eP._readStates = {}, eP._mentionChannels.clear()
  }
  serialize(e) {
    let {
      channelId: t,
      type: n,
      _guildId: i,
      _isThread: r,
      _isActiveThread: s,
      _isJoinedThread: o,
      _persisted: a,
      loadedMessages: l,
      _lastMessageId: u,
      _lastMessageTimestamp: _,
      _ackMessageId: d,
      _ackMessageTimestamp: c,
      ackPinTimestamp: E,
      isManualAck: I,
      lastPinTimestamp: T,
      _oldestUnreadMessageId: h,
      oldestUnreadMessageIdStale: S,
      estimated: f,
      _mentionCount: N,
      flags: A,
      lastViewed: m
    } = this;
    if (e) return {
      channelId: t,
      type: n,
      _guildId: i,
      _isThread: r,
      _isActiveThread: s,
      _isJoinedThread: o,
      _persisted: a,
      loadedMessages: l,
      _lastMessageId: u,
      _lastMessageTimestamp: _,
      _ackMessageId: d,
      _ackMessageTimestamp: c,
      ackPinTimestamp: E,
      isManualAck: I,
      lastPinTimestamp: T,
      _oldestUnreadMessageId: h,
      oldestUnreadMessageIdStale: S,
      estimated: f,
      _mentionCount: N,
      flags: A,
      lastViewed: m
    };
    let O = {
      channelId: t,
      type: n,
      _guildId: i,
      _persisted: a,
      _lastMessageId: u,
      _lastMessageTimestamp: _,
      _ackMessageId: d,
      _ackMessageTimestamp: c,
      ackPinTimestamp: E,
      lastPinTimestamp: T,
      _mentionCount: N,
      flags: A
    };
    return null != m && m > 0 && (O.lastViewed = m), r && (O._isThread = r, O._isActiveThread = s, O._isJoinedThread = o), O
  }
  deserializeForOverlay(e) {
    let {
      channelId: t,
      type: n,
      _guildId: i,
      _isThread: r,
      _isActiveJoinedThread: s,
      _isActiveThread: o,
      _isJoinedThread: a,
      _persisted: l,
      loadedMessages: u,
      _lastMessageId: _,
      _lastMessageTimestamp: d,
      _ackMessageId: c,
      _ackMessageTimestamp: E,
      ackPinTimestamp: I,
      isManualAck: T,
      lastPinTimestamp: h,
      _oldestUnreadMessageId: S,
      oldestUnreadMessageIdStale: f,
      estimated: N,
      _unreadCount: A,
      _mentionCount: m,
      flags: O,
      lastViewed: R
    } = e;
    this.channelId = t, this.type = null != n ? n : ea.W.CHANNEL, this._guildId = i, this._isThread = null != r && r, null != s ? (this._isActiveThread = s, this._isJoinedThread = s) : (this._isActiveThread = null != o && o, this._isJoinedThread = null != a && a), this._persisted = !1 !== l, this.loadedMessages = null != u && u, this._lastMessageId = _, this._lastMessageTimestamp = d, this._ackMessageId = c, this._ackMessageTimestamp = E, this.ackPinTimestamp = I, this.isManualAck = null != T && T, this.lastPinTimestamp = h, this._oldestUnreadMessageId = S, this.oldestUnreadMessageIdStale = null != f && f, this.estimated = null != N && N, this._unreadCount = null != A ? A : 0, this._mentionCount = m, this.flags = O, this.lastViewed = R, eP._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eP._mentionChannels.add(this.channelId)
  }
  incrementGuildUnreadsSentinel() {
    if (null != this._guildId) eP.getGuildSentinels(this._guildId).unreadsSentinel++
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
    this._lastMessageId = e, this._lastMessageTimestamp = null != e ? H.default.extractTimestamp(e) : 0
  }
  get lastMessageTimestamp() {
    return this._lastMessageTimestamp
  }
  get ackMessageId() {
    return this._ackMessageId
  }
  set ackMessageId(e) {
    this._ackMessageId = e, this._ackMessageTimestamp = null != e ? H.default.extractTimestamp(e) : 0
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
    (0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(), this._mentionCount = e, eP._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eP._mentionChannels.add(this.channelId)
  }
  guessAckMessageId() {
    let e = X.Z.getMessages(this.channelId);
    if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
    if (!this.hasMentions()) return this.lastMessageId;
    let t = null,
      n = this.mentionCount,
      i = et.default.getCurrentUser();
    return e.forEach(e => {
      if (n > 0 && e.author.id !== (null == i ? void 0 : i.id)) --n;
      else if (0 === n) return t = e.id, !1
    }, this, !0), t
  }
  get guildId() {
    if (null != this._guildId) return this._guildId;
    let e = j.Z.getChannel(this.channelId);
    return this._guildId = null != e ? e.getGuildId() : null
  }
  isPrivate() {
    if (this.type !== ea.W.CHANNEL) return !1;
    let e = j.Z.getChannel(this.channelId);
    return null != e && e.isPrivate()
  }
  rebuildChannelState(e) {
    var t, n;
    let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      r = arguments.length > 2 ? arguments[2] : void 0;
    if (this.ackMessageId = null !== (t = null != e ? e : this._ackMessageId) && void 0 !== t ? t : this.guessAckMessageId(), this.isManualAck = null != e, this.oldestUnreadMessageId = null, this.estimated = !1, this.unreadCount = 0, i && (this.mentionCount = 0), this.hasUnread()) {
      let e = et.default.getCurrentUser(),
        t = this.getAckTimestamp(),
        r = !1,
        s = !1,
        o = null,
        a = X.Z.getMessages(this.channelId);
      a.forAll(n => {
        if (r) {
          var a;
          this.oldestUnreadMessageId = null !== (a = this._oldestUnreadMessageId) && void 0 !== a ? a : n.id
        } else r = n.id === this._ackMessageId;
        H.default.extractTimestamp(n.id) > t ? (this.unreadCount++, i && eg(n, e) && this.mentionCount++, o = null != o ? o : n.id) : s = !0
      }), this.estimated = !a.hasPresent() || !(r || s) && a.length === this.unreadCount, this.oldestUnreadMessageId = null !== (n = this._oldestUnreadMessageId) && void 0 !== n ? n : o
    }
    null != r && (this.mentionCount = r)
  }
  handleGuildEventRemoval(e, t) {
    var n;
    if (H.default.compare(this.ackMessageId, t) >= 0) return;
    let i = O.ZP.getGuildScheduledEventsForGuild(e),
      r = this.getAckTimestamp();
    if (isNaN(r)) return;
    let s = null !== (n = this._ackMessageId) && void 0 !== n ? n : H.default.fromTimestamp(r),
      o = null,
      a = 0;
    i.forEach(e => {
      (0, O.Ld)(e) && (H.default.compare(e.id, o) > 0 && (o = e.id), H.default.compare(e.id, s) > 0 && a++)
    }), this.lastMessageId = o, this.mentionCount = a
  }
  canTrackUnreads() {
    if (this.type !== ea.W.CHANNEL) return !0;
    if (this._isThread && !this._isActiveThread || this._isResourceChannel) return !1;
    let e = j.Z.getBasicChannel(this.channelId);
    return null != e && ("basicPermissions" in e ? k.Z.has(e.basicPermissions, ei.S7T.VIEW_CHANNEL) : !N.Z.isChannelGated(this.guildId, this.channelId) || Q.Z.can(ei.Plq.VIEW_CHANNEL, e))
  }
  canBeUnread() {
    return !(this._isThread && !this._isJoinedThread || (0, p.h3)(this.channelId, [C.Z, g.Z]) || !this._isThread && (0, M.r1)(this._guildId) && (this._lastMessageTimestamp < em || !ee.ZP.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())) && this.canTrackUnreads()
  }
  canHaveMentions() {
    return !(0 === this.mentionCount || this._isThread && !this._isJoinedThread || (0, p.h3)(this.channelId, [C.Z, g.Z]) || (0, M.r1)(this._guildId) && this._lastMessageTimestamp < em) && this.canTrackUnreads()
  }
  getGuildChannelUnreadState(e, t, n, i, r) {
    if (t && (this._lastMessageTimestamp < em || !ee.ZP.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)) return {
      mentionCount: 0,
      unread: !1
    };
    if ("basicPermissions" in e) {
      if (!k.Z.has(e.basicPermissions, ei.S7T.VIEW_CHANNEL)) return {
        mentionCount: 0,
        unread: !1
      }
    } else if (N.Z.isChannelGated(this.guildId, this.channelId) && !Q.Z.can(ei.Plq.VIEW_CHANNEL, e)) return {
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
    return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > eO && G.Z.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
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
    if (this.type !== ea.W.CHANNEL || !this.canTrackUnreads()) return !1;
    if (null == e) {
      if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
      this._persisted = !0, eD(() => c.tn.post({
        url: ei.ANM.PINS_ACK(this.channelId),
        oldFormErrors: !0
      }))
    }
    let t = ep(e);
    return this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp, !0
  }
  ack(e) {
    let {
      messageId: t,
      local: n = !1,
      immediate: i = !1,
      force: r = !1,
      isExplicitUserAction: s = !1,
      location: o = {
        section: ei.jXE.CHANNEL
      },
      trackAnalytics: a = !0
    } = e;
    if (!this._shouldAck(r, n, s) || !r && !this.canTrackUnreads()) return !1;
    let l = this.hasMentions();
    return this.estimated = !1, this.snapshot = this.takeSnapshot(), this.unreadCount = 0, this.mentionCount = 0, (null != t || null != (t = this.lastMessageId)) && (this.ackMessageId = t, this.isManualAck = !1, this._persisted = !0, eI && (this.ackedWhileCached = !0), function(e) {
      if (null == e) return;
      let t = eP.get(e);
      if (t.type !== ea.W.CHANNEL) return;
      let n = j.Z.getChannel(t.channelId);
      if (null == n || !n.isForumPost() || null == n.parent_id) return;
      let i = n.parent_id,
        r = eP.get(i);
      y.Z.hasLoaded(n.guild_id) && H.default.keys(y.Z.getThreadsForParent(n.guild_id, i)).every(e => e$.hasOpenedThread(e) || 0 > H.default.compare(e, r.ackMessageId)) && r.ack({})
    }(this.channelId), n ? this.oldestUnreadMessageId = null : (null == this.outgoingAck && (this.outgoingAckTimer = setTimeout(() => {
      this.type === ea.W.CHANNEL ? this._ack(o, a) : this._nonChannelAck(), this.outgoingAck = null, this.outgoingAckTimer = null
    }, l || i ? 0 : 3e3)), this.outgoingAck = t), !0)
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
    }
  }
  clearOutgoingAck() {
    this.outgoingAck = null, null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), this.outgoingAckTimer = null)
  }
  _shouldAck(e, t, n) {
    var i;
    return !!e || !!n || !!t || !!(!this.isManualAck && (this.type !== ea.W.CHANNEL || this.loadedMessages || (null === (i = j.Z.getChannel(this.channelId)) || void 0 === i ? void 0 : i.isForumLikeChannel()))) || !1
  }
  _ack(e, t) {
    let {
      outgoingAck: i
    } = this;
    if (null == i) return;
    let r = F.default.getId(),
      s = eE;
    this._persisted = !0;
    let o = this.recalculateFlags(),
      a = o === this.flags ? void 0 : o;
    eD(() => c.tn.post({
      url: ei.ANM.MESSAGE_ACK(this.channelId, i),
      body: {
        token: eE,
        last_viewed: this.lastViewed,
        flags: a
      },
      oldFormErrors: !0
    })).then(e => {
      null != e && (eE === s && r === F.default.getId() && (eE = e.body.token), T.Z.dispatch({
        type: "MESSAGE_ACKED"
      }), t && n.e("54076").then(n.bind(n, 189229)).then(e => {
        let {
          default: t
        } = e;
        t(this.channelId)
      }))
    })
  }
  recalculateFlags() {
    if (this.type !== ea.W.CHANNEL) return;
    let e = j.Z.getChannel(this.channelId);
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
        case ea.W.GUILD_HOME:
        case ea.W.GUILD_EVENT:
        case ea.W.GUILD_ONBOARDING_QUESTION:
          e = ei.ANM.GUILD_FEATURE_ACK(n, t, i);
          break;
        case ea.W.NOTIFICATION_CENTER:
        case ea.W.MESSAGE_REQUESTS:
          e = ei.ANM.USER_NON_CHANNEL_ACK(t, i);
          break;
        default:
          return
      }
      this._persisted = !0, eD(() => c.tn.post({
        url: e,
        body: {},
        oldFormErrors: !0
      }))
    }
  }
  delete() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      n = j.Z.getBasicChannel(this.channelId);
    eu.log("Deleting ReadState", this.channelId, this.type, {
      remote: t,
      persisted: this._persisted,
      channelMissing: null == n,
      isOld: ek(this, eA()),
      validType: null != n && w.AW.has(n.type),
      readableType: null != n && (0, w.Em)(n.type),
      oldThreadCutoff: eA(),
      mentionCount: this.mentionCount,
      channelId: this.channelId,
      ackMessageId: this._ackMessageId,
      lastMessageId: this._lastMessageId
    }), t && this._persisted && c.tn.del({
      url: ei.ANM.CHANNEL_ACK(this.channelId),
      body: {
        version: 2,
        read_state_type: this.type
      },
      oldFormErrors: !0
    }), null === (e = eP._readStates[this.type]) || void 0 === e || delete e[this.channelId], eP._mentionChannels.delete(this.channelId)
  }
  shouldDeleteReadState(e) {
    if (0 !== K.Z.totalUnavailableGuilds) return !1;
    if (null != this.type && this.type !== ea.W.CHANNEL) return ! function(e) {
      switch (e.type) {
        case ea.W.GUILD_HOME:
        case ea.W.GUILD_EVENT:
        case ea.W.GUILD_ONBOARDING_QUESTION:
          return null != z.Z.getGuild(e.channelId);
        case ea.W.NOTIFICATION_CENTER:
          var t;
          return H.default.cast(null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
        default:
          return !0
      }
    }(this);
    let t = j.Z.getBasicChannel(this.channelId);
    if (null == t) return !!ek(this, e) || !1;
    return !!w.AW.has(t.type) && (!(0, w.Em)(t.type) || !(0, w.hv)(t.type) && (!!(w.Ec.has(t.type) && function(e, t, n) {
      let i = e.guildId;
      return !(null != i && y.Z.isActive(i, t.parent_id, e.channelId)) && ek(e, n)
    }(this, t, e)) || !!(this.mentionCount > 0) && !Q.Z.canBasicChannel(e_, t) || !1))
  }
  getAckTimestamp() {
    let e, t;
    if (0 !== this._ackMessageTimestamp && !isNaN(this._ackMessageTimestamp)) return this._ackMessageTimestamp;
    if (this._isThread) return this._ackMessageTimestamp = eG(this.guildId, this.channelId), this._ackMessageId = H.default.fromTimestamp(this._ackMessageTimestamp), this._ackMessageTimestamp;
    if (this.type === ea.W.GUILD_EVENT || this.type === ea.W.GUILD_ONBOARDING_QUESTION) e = z.Z.getGuild(this.channelId);
    else if ((0, es.AB)(this.channelId)) e = z.Z.getGuild(this.guildId);
    else {
      let t = j.Z.getChannel(this.channelId);
      if (null != t) {
        let n = t.getGuildId();
        e = z.Z.getGuild(n)
      }
    }
    return null != e ? isNaN(t = ew(e)) && (t = H.default.extractTimestamp(this.channelId)) : t = H.default.extractTimestamp(this.channelId), this._ackMessageTimestamp = t, t
  }
  get oldestUnreadTimestamp() {
    return null != this.oldestUnreadMessageId ? H.default.extractTimestamp(this.oldestUnreadMessageId) : 0
  }
  syncThreadSettings() {
    this._isThread = !0;
    let e = j.Z.getChannel(this.channelId);
    if (null == e) return eu.warn("syncThreadSettings called with channel not in memory ".concat(this.channelId)), !1;
    let t = this.guildId,
      n = null != t && y.Z.isActive(t, e.parent_id, this.channelId),
      i = U.Z.hasJoined(this.channelId);
    return (this._isActiveThread !== n || this._isJoinedThread !== i) && (this._isActiveThread = n, this._isJoinedThread = i, !0)
  }
  recordLastViewedTime() {
    let e = Math.ceil((Date.now() - H.DISCORD_EPOCH) / B.Z.Millis.DAY);
    e !== this.lastViewed && (this.lastViewed = e, this.canTrackUnreads() && !this.hasUnread() && this.ack({
      force: !0,
      trackAnalytics: !1
    }))
  }
  constructor(e, t = ea.W.CHANNEL) {
    el(this, "channelId", void 0), el(this, "type", ea.W.CHANNEL), el(this, "_guildId", void 0), el(this, "_isThread", void 0), el(this, "_isActiveThread", void 0), el(this, "_isJoinedThread", void 0), el(this, "_isResourceChannel", void 0), el(this, "_persisted", void 0), el(this, "loadedMessages", void 0), el(this, "_lastMessageId", void 0), el(this, "_lastMessageTimestamp", void 0), el(this, "_ackMessageId", void 0), el(this, "_ackMessageTimestamp", void 0), el(this, "isManualAck", void 0), el(this, "ackPinTimestamp", void 0), el(this, "lastPinTimestamp", void 0), el(this, "_oldestUnreadMessageId", void 0), el(this, "oldestUnreadMessageIdStale", void 0), el(this, "estimated", void 0), el(this, "_unreadCount", void 0), el(this, "_mentionCount", void 0), el(this, "flags", void 0), el(this, "lastViewed", void 0), el(this, "outgoingAck", void 0), el(this, "outgoingAckTimer", null), el(this, "ackMessageIdAtChannelSelect", null), el(this, "ackedWhileCached", void 0), el(this, "snapshot", void 0), this.channelId = e, this.type = t, this._guildId = null, this._isThread = !1, this._isActiveThread = !1, this._isJoinedThread = !1, this._isResourceChannel = !1, this._persisted = !1, this.loadedMessages = !1, this._lastMessageId = null, this._lastMessageTimestamp = 0, this._ackMessageId = null, this._ackMessageTimestamp = 0, this.isManualAck = !1, this.ackPinTimestamp = 0, this.lastPinTimestamp = 0, this._oldestUnreadMessageId = null, this.oldestUnreadMessageIdStale = !1, this.estimated = !1, this._unreadCount = 0, this._mentionCount = 0, this.outgoingAck = null
  }
}

function ey(e) {
  e.forEach(e => {
    if ((0, w.Em)(e.type)) {
      let t = eP.get(e.id);
      t._guildId = e.guild_id, t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = ep(e.lastPinTimestamp), t._isResourceChannel = e.hasFlag(es.zZ.IS_GUILD_RESOURCE_CHANNEL), w.Ec.has(e.type) && t.syncThreadSettings()
    }
  })
}

function eU(e) {
  e.forEach(e => {
    if ((0, w.Em)(e.type)) {
      var t;
      let n = eP.get(e.id);
      n.lastMessageId = e.last_message_id, n.lastPinTimestamp = ep(e.last_pin_timestamp), n._isResourceChannel = (0, x.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, es.zZ.IS_GUILD_RESOURCE_CHANNEL), w.Ec.has(e.type) && n.syncThreadSettings()
    }
  })
}

function eb(e) {
  (function(e) {
    var t;
    null === (t = e.threads) || void 0 === t || t.forEach(t => {
      if (!w.AW.has(t.type)) return;
      let n = eP.get(t.id);
      n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = ep(t.lastPinTimestamp), n._isThread = !0, n._isActiveThread = !0, n._isJoinedThread = null != t.member, null == n.ackMessageId && (n.ackMessageId = H.default.fromTimestamp(eG(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = eG(e.id, t.id))
    })
  })(e),
  function(e) {
    var t, n;
    if ((null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) === 0 && null == eP.getIfExists(e.id, ea.W.GUILD_EVENT)) return;
    let i = eP.get(e.id, ea.W.GUILD_EVENT);
    i._guildId = e.id;
    let r = 0,
      s = null,
      o = null !== (n = i._ackMessageId) && void 0 !== n ? n : H.default.fromTimestamp(i.getAckTimestamp());
    e.guild_scheduled_events.forEach(e => {
      H.default.compare(e.id, s) > 0 && (s = e.id), H.default.compare(e.id, o) > 0 && r++
    }), i.lastMessageId = s, i.mentionCount = r
  }(e),
  function(e) {
    eP.get(e.id, ea.W.GUILD_HOME).lastMessageId = H.default.fromTimestamp(_()(Date.now()).subtract(24, "h").valueOf())
  }(e),
  function(e) {
    let t = z.Z.getGuild(e.id);
    if (null == t) return;
    let n = null == t ? void 0 : t.latestOnboardingQuestionId;
    if (null == n) return;
    let i = eP.get(t.id, ea.W.GUILD_ONBOARDING_QUESTION);
    i._guildId = t.id, i.lastMessageId = n
  }(e)
}
el(eP, "_guildReadStateSentinels", {}), el(eP, "_readStates", {}), el(eP, "_mentionChannels", new Set);

function eG(e, t) {
  var n, i, r;
  let s = j.Z.getChannel(t),
    o = z.Z.getGuild(null != e ? e : null == s ? void 0 : s.guild_id),
    a = (null == s ? void 0 : s.isForumPost()) ? 0 : ew(o),
    l = (null !== (r = null === (n = U.Z.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== r ? r : 0) - 5e3;
  isNaN(l) && (l = -5e3);
  let u = null == s ? void 0 : null === (i = s.threadMetadata) || void 0 === i ? void 0 : i.archiveTimestamp,
    _ = null != u ? new Date(u).getTime() - 1 : 0;
  isNaN(_) && (_ = 0);
  let d = Math.max(l, _);
  return d <= 0 && (d = H.default.extractTimestamp(t) - 1), (isNaN(d) || d <= 0) && (d = 0), isNaN(a) ? d : Math.max(a, d)
}

function ew(e) {
  if (null != e && null != e.joinedAt) {
    if (e.joinedAt instanceof Date) {
      let t = e.joinedAt.getTime();
      if (!isNaN(t)) return t
    } else if ("string" == typeof e.joinedAt) {
      let t = new Date(e.joinedAt).getTime();
      if (!isNaN(t)) return t
    } else if ("number" == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt
  }
  return Date.now()
}

function ek(e, t) {
  return !!(e.mentionCount > 0) || !(H.default.compare(e.channelId, t) > 0 || null != e._ackMessageId && H.default.compare(e._ackMessageId, t) > 0 || null != e._lastMessageId && H.default.compare(e._lastMessageId, t) > 0) && !0
}

function eB(e) {
  if (null != e) {
    let t = eP.get(e);
    if (eM(t)) return t.ack({})
  }
  return !1
}

function ex() {
  null != eS && clearTimeout(eS)
}

function eV(e) {
  if (null != e.channelUpdates) {
    var t;
    ey(null === (t = e.channelUpdates) || void 0 === t ? void 0 : t.writes)
  }
  if (null != e.channelTimestampUpdates)
    for (let t of e.channelTimestampUpdates) {
      let e = eP.get(t.id);
      null != t.last_message_id && (e.lastMessageId = t.last_message_id), null != t.last_pin_timestamp && (e.lastPinTimestamp = ep(t.last_pin_timestamp))
    }
}

function eZ(e) {
  let {
    channelId: t
  } = e;
  eP.get(t).rebuildChannelState()
}

function eH(e) {
  let {
    threads: t
  } = e;
  eU(t)
}

function eF(e) {
  let {
    messages: t,
    threads: n
  } = e;
  for (let e of t) eU(e.map(e => {
    let {
      thread: t
    } = e;
    return t
  }).filter(V.lm));
  eU(n)
}

function eY(e) {
  let t = et.default.getCurrentUser();
  return null != e.creator_id && null != t && e.creator_id === t.id
}

function ej(e) {
  let {
    channel: t
  } = e;
  return eP.clear(t.id)
}

function eW() {
  let e = Y.ZP.getCurrentSidebarChannelId(ed),
    t = !1;
  return ec !== e ? (t = ez(ec), ec = e) : t = eB(e) || t, t
}

function eK(e) {
  if (null != e) eP.get(e).isManualAck = !1
}

function ez(e) {
  if (null == e) return !1;
  let t = eP.get(e);
  return !t.hasUnread() && (t.oldestUnreadMessageId = null, !0)
}

function eq(e) {
  let {
    channelId: t,
    messageId: n,
    manual: i,
    newMentionCount: r
  } = e, s = eP.get(t);
  return i ? (s.rebuildChannelState(n, !0, r), !0) : n !== s._ackMessageId && s.ack({
    messageId: n,
    local: !0
  })
}

function eX(e) {
  let {
    id: t,
    ackType: n,
    ackedId: i,
    local: r
  } = e;
  return eQ(t, n, i, r)
}

function eQ(e, t, n, i) {
  var r;
  let s = eP.get(e, t);
  return n !== s.ackMessageId && s.lastMessageId !== s.ackMessageId && (null != s.lastMessageId || 0 !== s.mentionCount) && (n = null !== (r = null != n ? n : s.lastMessageId) && void 0 !== r ? r : H.default.fromTimestamp(s.getAckTimestamp()), s.ack({
    messageId: n,
    local: null == i || i
  }))
}
class eJ extends(s = d.ZP.Store) {
  initialize() {
    let e = [W.Z, et.default, z.Z, K.Z, j.Z, $.Z, X.Z, Q.Z, S.Z, y.Z, U.Z, Y.ZP, O.ZP, m.Z, N.Z, ee.ZP, en.Z, v.Z, C.Z, G.Z, g.Z];
    this.waitFor(...e), this.syncWith([Y.ZP], eW)
  }
  getReadStatesByChannel() {
    var e;
    return null !== (e = eP._readStates[ea.W.CHANNEL]) && void 0 !== e ? e : {}
  }
  getForDebugging(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL;
    return eP.getIfExists(e, t)
  }
  getNotifCenterReadState(e) {
    var t;
    return null === (t = eP._readStates[ea.W.NOTIFICATION_CENTER]) || void 0 === t ? void 0 : t[e]
  }
  hasUnread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL;
    return eP.getValue(e, t, e => e.canBeUnread() && e.hasUnread(), !1)
  }
  hasUnreadOrMentions(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL;
    return eP.getValue(e, t, e => e.canBeUnread() && e.hasUnreadOrMentions(), !1)
  }
  hasTrackedUnread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL;
    return eP.getValue(e, t, e => e.canTrackUnreads() && e.hasUnread(), !1)
  }
  isForumPostUnread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL;
    return eP.getValue(e, t, e => e.isForumPostUnread(), !1)
  }
  getUnreadCount(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL;
    return eP.getValue(e, t, e => e.canBeUnread() ? e.unreadCount : 0, 0)
  }
  getMentionCount(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL,
      n = eP.getValue(e, t, e => e.canHaveMentions() ? e.getMentionCount() : 0, 0);
    if ((0, f.Z)(e)) {
      if (n > 0) return 1
    }
    return n
  }
  getGuildChannelUnreadState(e, t, n, i, r) {
    return eP.getValue(e.id, ea.W.CHANNEL, s => s.getGuildChannelUnreadState(e, t, n, i, r), {
      mentionCount: 0,
      unread: !1
    })
  }
  hasRecentlyVisitedAndRead(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL;
    return eP.getValue(e, t, e => e.hasRecentlyVisitedAndRead(), !1)
  }
  ackMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL;
    return eP.getValue(e, t, e => e.canBeUnread() ? e.ackMessageId : null, null)
  }
  getTrackedAckMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL;
    return eP.getValue(e, t, e => e.canTrackUnreads() ? e._ackMessageId : null, null)
  }
  lastMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL;
    return eP.getValue(e, t, e => e.lastMessageId, null)
  }
  lastMessageTimestamp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL;
    return eP.getValue(e, t, e => e.lastMessageTimestamp, 0)
  }
  lastPinTimestamp(e) {
    return eP.getValue(e, ea.W.CHANNEL, e => e.lastPinTimestamp, null)
  }
  getOldestUnreadMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL;
    return eP.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadMessageId : null, null)
  }
  getOldestUnreadTimestamp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL;
    return eP.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0, 0)
  }
  isEstimated(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL;
    return eP.getValue(e, t, e => e.estimated, !1)
  }
  hasOpenedThread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ea.W.CHANNEL;
    return eP.getValue(e, t, e => e._persisted, !1)
  }
  hasUnreadPins(e) {
    return eP.getValue(e, ea.W.CHANNEL, e => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1)
  }
  isNewForumThread(e, t, n) {
    let i = eP.get(t);
    if (!0 === eP.get(e)._persisted || null == i.ackMessageIdAtChannelSelect || 0 >= H.default.compare(e, i.ackMessageIdAtChannelSelect)) return !1;
    let r = ew(n);
    return H.default.extractTimestamp(e) > r
  }
  getAllReadStates(e) {
    let t = [];
    return eP.forEach(n => {
      switch (n.type) {
        case ea.W.GUILD_HOME:
        case ea.W.GUILD_EVENT:
        case ea.W.GUILD_ONBOARDING_QUESTION:
          null != z.Z.getGuild(n.channelId) && t.push(n.serialize(e));
          break;
        case ea.W.NOTIFICATION_CENTER:
        case ea.W.MESSAGE_REQUESTS:
          var i;
          H.default.cast(null === (i = et.default.getCurrentUser()) || void 0 === i ? void 0 : i.id) === n.channelId && t.push(n.serialize(e));
          break;
        default:
          t.push(n.serialize(e))
      }
    }), t
  }
  getGuildUnreadsSentinel(e) {
    return eP.getGuildSentinels(e).unreadsSentinel
  }
  getMentionChannelIds() {
    return eP.getMentionChannelIds()
  }
  getNonChannelAckId(e) {
    var t;
    let n = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    return null == n ? null : eP.get(n, e).ackMessageId
  }
  getSnapshot(e, t) {
    let n = eP.get(e);
    return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot
  }
}
el(eJ, "displayName", "ReadStateStore");
let e$ = new eJ(T.Z, {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function(e) {
    let {
      changesByChannelId: t
    } = e;
    for (let e in t) {
      var n, i;
      let r = t[e],
        s = eP.getIfExists(e);
      if (null != s)
        for (let e of [null === (n = r.new_messages) || void 0 === n ? void 0 : n[0]].concat(null !== (i = r.modified_messages) && void 0 !== i ? i : []).filter(V.lm)) 1 === H.default.compare(e.id, s.lastMessageId) && (s.lastMessageId = e.id)
    }
  },
  CONNECTION_OPEN: function(e) {
    var t, n;
    let {
      guilds: i,
      relationships: r,
      initialPrivateChannels: s,
      readState: o
    } = e;
    eC(), eE = null, !eI && !o.partial && eP.clearAll(), eI = !1, o.entries.forEach(e => {
      var t, n, i;
      let r = null !== (t = e.read_state_type) && void 0 !== t ? t : ea.W.CHANNEL;
      if (r !== ea.W.CHANNEL) {
        ;
        e = {
          id: (i = e).id,
          read_state_type: i.read_state_type,
          mention_count: i.badge_count,
          last_message_id: i.last_acked_id
        }
      }
      let s = eP.get(e.id, r);
      s._persisted = !0, s._mentionCount = null !== (n = e.mention_count) && void 0 !== n ? n : 0, s.flags = e.flags, s.lastViewed = e.last_viewed;
      let o = j.Z.getBasicChannel(e.id);
      null != o && (0, w.Q5)(o.type) && (null == e.last_message_id || 0 === e.last_message_id) ? s.ackMessageId = H.default.fromTimestamp(eG(o.guild_id, o.id)) : s.ackedWhileCached ? -1 === H.default.compare(s.ackMessageId, e.last_message_id) && (s.ackMessageId = e.last_message_id) : s.ackMessageId = e.last_message_id, s.ackedWhileCached = void 0, s.ackPinTimestamp = ep(e.last_pin_timestamp), eP._mentionChannels.delete(s.channelId), s._mentionCount > 0 && s.canHaveMentions() && eP._mentionChannels.add(s.channelId)
    }), eP.resetGuildSentinels();
    let a = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    for (let e of (null != a && (eP.get(a, ea.W.NOTIFICATION_CENTER).lastMessageId = H.default.fromTimestamp(Date.now())), function(e) {
        let t = et.default.getCurrentUser();
        if (!(0, D.$N)() || null == t) return 0;
        let n = eP.get(t.id, ea.W.NOTIFICATION_CENTER);
        e.forEach(e => {
          if (null == e.since || e.type !== ei.OGo.PENDING_INCOMING) return;
          let t = new Date(e.since).getTime();
          (null != n.ackMessageId ? H.default.extractTimestamp(n.ackMessageId) : 0) < t && (n.mentionCount++, n.lastMessageId = H.default.fromTimestamp(t))
        })
      }(r), ey(s), i)) ey(null !== (n = e.channels) && void 0 !== n ? n : []), eV(e), eb(e);
    ex(), eS = setTimeout(() => (function(e) {
      let t = eA();
      for (let i of e) {
        var n;
        let e = null !== (n = i.read_state_type) && void 0 !== n ? n : ea.W.CHANNEL,
          r = eP.get(i.id, e);
        r.shouldDeleteReadState(t) && r.delete()
      }
    })(o.entries), 10 * B.Z.Millis.SECOND)
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      lazyPrivateChannels: t
    } = e;
    ey(t)
  },
  LOGOUT: ex,
  OVERLAY_INITIALIZE: function(e) {
    let {
      readStates: t,
      selectedChannelId: n
    } = e;
    eC(), eE = null, ed = n, ec = Y.ZP.getCurrentSidebarChannelId(ed), eP.clearAll(), t.forEach(e => {
      let t = eP.get(e.channelId);
      t.deserializeForOverlay(e), t.type === ea.W.CHANNEL && t.rebuildChannelState()
    })
  },
  CACHE_LOADED: function(e) {
    let {
      readStates: t
    } = e;
    eI = !0, eC(), t.forEach(e => {
      var t;
      let n = null !== (t = e.type) && void 0 !== t ? t : ea.W.CHANNEL;
      e.type = n, null == eP._readStates[n] && (eP._readStates[n] = {}), eP._readStates[n][e.channelId] = (0, I.gh)(e, eP)
    })
  },
  GUILD_CREATE: function(e) {
    var t;
    let {
      guild: n
    } = e, i = eA();
    eP.forEach(e => {
      e.guildId === n.id && e.shouldDeleteReadState(i) && e.delete(!1)
    }), ey(null !== (t = n.channels) && void 0 !== t ? t : []), eV(n), eb(n)
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let {
      channelId: t,
      isAfter: n,
      messages: i
    } = e, r = eP.get(t);
    r.loadedMessages = !0;
    let s = X.Z.getMessages(t);
    null != s && (i.length > 0 && 1 === H.default.compare(i[0].id, r.ackMessageId) && 0 === r.unreadCount ? r.rebuildChannelState() : s.hasPresent() || s.jumpTargetId === r.ackMessageId ? r.rebuildChannelState() : n && null != r.ackMessageId && s.has(r.ackMessageId, !0) && (r.unreadCount += i.length, null == r.oldestUnreadMessageId && r.rebuildChannelState())), eU(i.map(e => e.thread).filter(V.lm))
  },
  MESSAGE_CREATE: function(e) {
    let t, n, {
        channelId: r,
        message: s,
        isPushNotification: o
      } = e,
      a = eP.get(r);
    a.lastMessageId = s.id;
    let l = et.default.getCurrentUser(),
      u = j.Z.getBasicChannel(r);
    if (null != s.author && null != l && s.author.id === l.id && !ei.V$x.SELF_MENTIONABLE_SYSTEM.has(s.type)) return null != a.outgoingAck && a.clearOutgoingAck(), eq({
      channelId: r,
      messageId: s.id,
      manual: !1
    });
    let _ = (0, R.PP)();
    if ((null == _ ? void 0 : _.isReady()) === !0) {
      let e = _.getCurrentRoute();
      if (S.Z.getChatOpen(a.channelId)) t = a.channelId;
      else if ((null == e ? void 0 : e.name) === "channel") t = e.params.channelId;
      else if ((null == e ? void 0 : e.name) === "guilds") {
        var d;
        t = null === (d = e.params) || void 0 === d ? void 0 : d.channelId
      }
    } else null == _ && (t = $.Z.getChannelId(), n = Y.ZP.getCurrentSidebarChannelId(t));
    let c = t === r || n === r;
    if (c && eM(a) && !o || null != i && i.isInstanceFocused() && c && i.isInstanceUILocked() && i.isPinned(ei.Odu.TEXT)) return a.ack({
      messageId: s.id
    });
    (null == a.oldestUnreadMessageId || a.oldestUnreadMessageIdStale) && (a.oldestUnreadMessageId = s.id), a.unreadCount++, !(null != s.author && J.Z.isBlocked(s.author.id) || s.type === ei.uaV.RECIPIENT_REMOVE && (null == u ? void 0 : u.type) === ei.d4z.GROUP_DM) && function(e, t, n) {
      if (null != t && (0, L.Hl)({
          rawMessage: e,
          userId: t.id,
          suppressEveryone: ee.ZP.isSuppressEveryoneEnabled(n.guildId),
          suppressRoles: ee.ZP.isSuppressRolesEnabled(n.guildId)
        })) return !0;
      let i = j.Z.getChannel(e.channel_id);
      return !!eL(i) || !!ee.ZP.mentionOnAllMessages && null != i && !i.isVocal() && !ee.ZP.isChannelMuted(i.guild_id, i.id) && ee.ZP.resolvedMessageNotifications(i) === ei.bL.ALL_MESSAGES || !1
    }(s, l, a) && a.mentionCount++
  },
  MESSAGE_DELETE: eZ,
  MESSAGE_DELETE_BULK: eZ,
  MESSAGE_ACK: eq,
  CHANNEL_ACK: function(e) {
    let {
      channelId: t,
      messageId: n,
      immediate: i = !1,
      force: r = !1,
      context: s,
      location: o
    } = e, a = eP.get(t), l = a.ack({
      messageId: n,
      local: s !== ei.e3s,
      immediate: i,
      force: r,
      isExplicitUserAction: !0,
      location: o
    });
    return null != n ? (a.rebuildChannelState(), !0) : l
  },
  CHANNEL_LOCAL_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return eP.get(t).ack({
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
    return eP.get(t).ackPins(n)
  },
  CHANNEL_PINS_UPDATE: function(e) {
    let {
      channelId: t,
      lastPinTimestamp: n
    } = e, i = eP.get(t), r = ep(n);
    return i.lastPinTimestamp !== r && (i.lastPinTimestamp = r, !0)
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e, n = Y.ZP.getCurrentSidebarChannelId(t), i = j.Z.getChannel(t);
    if (null != i) {
      var r;
      let e = eP.get(i.id);
      e.ackMessageIdAtChannelSelect = null !== (r = e.ackMessageId) && void 0 !== r ? r : H.default.fromTimestamp(e.getAckTimestamp()), e.recordLastViewedTime()
    }
    eK(ed), eK(ec);
    let s = !1;
    return ed !== t && (s = ez(ed) || s, s = ez(ec) || s), (ed === t || (null == i ? void 0 : i.type) != null && ei.TPd.GUILD_THREADS_ONLY.has(i.type)) && (s = eB(t) || s), ed === t && (s = eB(n) || s), ed = t, ec = n, s
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t) return;
    let n = eP.get(t);
    if (!n.hasMentions()) return n.oldestUnreadMessageId = null, n.ack({
      isExplicitUserAction: !0
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, w.Em)(t.type)) return !1;
    let n = eP.get(t.id);
    n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = ep(t.lastPinTimestamp)
  },
  THREAD_CREATE: function(e) {
    let {
      channel: t
    } = e;
    (function(e) {
      if (!w.AW.has(e.type)) return 0;
      let t = eP.get(e.id);
      t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = ep(e.lastPinTimestamp), t.syncThreadSettings(), e.ownerId === F.default.getId() && (t.loadedMessages = !0)
    })(t),
    function(e) {
      let t = e.parent_id;
      eP.get(t).lastMessageId = e.id;
      let n = et.default.getCurrentUser();
      if (e.ownerId === (null == n ? void 0 : n.id)) eP.get(e.id)._persisted = !0, eq({
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
    return !!w.AW.has(t.type) && eP.get(t.id).syncThreadSettings()
  },
  THREAD_LIST_SYNC: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      if (!w.AW.has(e.type)) return;
      let t = eP.get(e.id);
      if (t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = ep(e.lastPinTimestamp), t._isThread = !0, t._isActiveThread = !0, t._isJoinedThread = U.Z.hasJoined(e.id), e.isForumPost()) {
        let t = eP.get(e.parent_id);
        0 > H.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id)
      }
    })
  },
  LOAD_THREADS_SUCCESS: eH,
  LOAD_ARCHIVED_THREADS_SUCCESS: eH,
  SEARCH_FINISH: eF,
  MOD_VIEW_SEARCH_FINISH: eF,
  THREAD_MEMBER_UPDATE: function(e) {
    let {
      id: t
    } = e;
    return eP.get(t).syncThreadSettings()
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    return (0, b.s)(e) && eP.get(e.id).syncThreadSettings()
  },
  CHANNEL_DELETE: ej,
  THREAD_DELETE: ej,
  WINDOW_FOCUS: function(e) {
    let t = !1;
    for (let [n, i] of H.default.entries(ef)) i === e.windowId && (t = function(e, t) {
      if (null == e) return !1;
      let n = eP.get(e);
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
    eE = null
  },
  DRAWER_OPEN: function() {
    if (null != ed) {
      let e = eP.get(ed);
      !e.hasUnread() && (e.oldestUnreadMessageIdStale = !0)
    }
    return !1
  },
  DRAWER_CLOSE: function() {
    return eB(ed)
  },
  BULK_ACK: function(e) {
    var t, n, i;
    let {
      channels: r,
      context: s,
      onFinished: o
    } = e;
    t = r.filter(e => null != e.messageId && e$.hasUnreadOrMentions(e.channelId, e.readStateType)), n = s, i = o, t.forEach(e => {
      let {
        channelId: t,
        messageId: n,
        readStateType: i
      } = e;
      eP.get(t, i).ack({
        messageId: n,
        local: !0,
        immediate: void 0,
        force: void 0,
        isExplicitUserAction: !0
      })
    }), n !== ei.e3s || (eT.push(...t.map(e => ({
      channel_id: e.channelId,
      message_id: e.messageId,
      read_state_type: e.readStateType
    }))), eh || ev(i))
  },
  ENABLE_AUTOMATIC_ACK: function(e) {
    let {
      channelId: t,
      windowId: n
    } = e;
    return ef[t] !== n && (l()(void 0 === ef[t], "handleEnableAutomaticAck: channel already visible in another window"), ef[t] = n, eB(t))
  },
  DISABLE_AUTOMATIC_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return ef[t] = void 0, !1
  },
  GUILD_FEATURE_ACK: eX,
  GUILD_SCHEDULED_EVENT_CREATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = t.guild_id, i = eP.get(t.guild_id, ea.W.GUILD_EVENT);
    if (i.lastMessageId = t.id, eY(t)) {
      eX({
        type: "GUILD_FEATURE_ACK",
        id: n,
        ackType: ea.W.GUILD_EVENT,
        ackedId: t.id,
        local: !1
      });
      return
    }!ee.ZP.isMuteScheduledEventsEnabled(n) && i.mentionCount++
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = t.guild_id;
    if (eY(t) || ![eo.p1.CANCELED, eo.p1.COMPLETED].includes(t.status)) return !1;
    eP.get(n, ea.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = t.guild_id;
    if (eY(t)) return !1;
    eP.get(t.guild_id, ea.W.GUILD_EVENT).handleGuildEventRemoval(n, t.id)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    return eP.clear(t.id, ea.W.GUILD_EVENT)
  },
  GUILD_UPDATE: function(e) {
    let {
      guild: t
    } = e, n = t.latest_onboarding_question_id;
    if (null == n) return;
    let i = eP.get(t.id, ea.W.GUILD_ONBOARDING_QUESTION);
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
    if (!(0, D.$N)()) return !1;
    let i = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == i) return !1;
    let r = eP.get(i, ea.W.NOTIFICATION_CENTER);
    r.lastMessageId = n.id;
    if (0, v.Z.active) {
      eQ(i, ea.W.NOTIFICATION_CENTER, n.id, !1);
      return
    }
    r.mentionCount++
  },
  RELATIONSHIP_ADD: function(e) {
    let t = et.default.getCurrentUser();
    if (!(0, D.$N)() || null == t || null == e.relationship.since || e.relationship.type !== ei.OGo.PENDING_INCOMING && e.relationship.type !== ei.OGo.FRIEND) return !1;
    let n = eP.get(t.id, ea.W.NOTIFICATION_CENTER),
      i = e.relationship.type === ei.OGo.FRIEND,
      r = i ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime(),
      s = null != n.ackMessageId ? H.default.extractTimestamp(n.ackMessageId) : 0;
    s < r && (n.lastMessageId = H.default.fromTimestamp(r), (0, v.Z.active) ? eQ(t.id, ea.W.NOTIFICATION_CENTER, void 0, !1) : i ? n.mentionCount-- : n.mentionCount++)
  },
  RELATIONSHIP_REMOVE: function(e) {
    let t = et.default.getCurrentUser();
    if (!(0, D.$N)() || null == t || null == e.relationship.since || e.relationship.type !== ei.OGo.PENDING_INCOMING) return !1;
    let n = eP.get(t.id, ea.W.NOTIFICATION_CENTER),
      i = new Date(e.relationship.since).getTime();
    (null != n.ackMessageId ? H.default.extractTimestamp(n.ackMessageId) : 0) <= i && (n.mentionCount = Math.max(0, n.mentionCount - 1))
  },
  NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
    var t;
    let {
      ids: n,
      optimistic: i
    } = e;
    if (i || !(0, D.$N)() || v.Z.active) return !1;
    let r = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == r) return !1;
    let s = eP.get(r, ea.W.NOTIFICATION_CENTER);
    n.forEach(e => {
      0 > H.default.compare(s.ackMessageId, e) && (s.mentionCount = Math.max(s.mentionCount - 1, 0))
    })
  },
  USER_NON_CHANNEL_ACK: function(e) {
    var t;
    let {
      ackType: n,
      ackedId: i,
      local: r
    } = e, s = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    return null != s && eQ(s, n, i, r)
  },
  PASSIVE_UPDATE_V2: function(e) {
    let t = !1;
    for (let n of e.channels) {
      let e = eP.get(n.id),
        i = ep(n.lastPinTimestamp);
      (e.lastMessageId !== n.lastMessageId || e.lastPinTimestamp !== i) && (t = !0, e.lastMessageId = n.lastMessageId, e.lastPinTimestamp = i)
    }
    return t
  },
  CLEAR_OLDEST_UNREAD_MESSAGE: function(e) {
    let {
      channelId: t
    } = e;
    return ez(t)
  },
  TRY_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return eB(t)
  },
  MESSAGE_REQUEST_ACK: function(e) {
    var t;
    let {
      ackedId: n
    } = e, i = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == i) return !1;
    let r = eP.get(i, ea.W.MESSAGE_REQUESTS);
    if (n === r.ackMessageId) return !1;
    r.ackMessageId = n, r.ack({
      messageId: n,
      isExplicitUserAction: !0
    })
  },
  MESSAGE_REQUEST_CLEAR_ACK: function(e) {
    var t;
    let n = null === (t = et.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == n) return !1;
    let i = eP.get(n, ea.W.MESSAGE_REQUESTS);
    if (null == i.ackMessageId) return !1;
    i.ackMessageId = void 0
  }
});
t.ZP = e$