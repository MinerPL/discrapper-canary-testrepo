"use strict";
n.r(t), n.d(t, {
  LoadState: function() {
    return a
  },
  MAX_SHOWN_MESSAGES: function() {
    return H
  },
  SortOrder: function() {
    return s
  },
  default: function() {
    return q
  }
}), n("653041"), n("47120");
var s, a, l, i, r = n("470079"),
  o = n("836560"),
  u = n("512722"),
  d = n.n(u),
  c = n("392711"),
  f = n.n(c),
  E = n("570140"),
  _ = n("904245"),
  T = n("45114"),
  m = n("607070"),
  I = n("853856"),
  p = n("181945"),
  h = n("220444"),
  N = n("601070"),
  S = n("344185"),
  C = n("569471"),
  A = n("723170"),
  g = n("675478"),
  M = n("581883"),
  R = n("131704"),
  O = n("592125"),
  v = n("984933"),
  L = n("731290"),
  x = n("430824"),
  D = n("375954"),
  P = n("496675"),
  y = n("306680"),
  U = n("771845"),
  b = n("9156"),
  j = n("70956"),
  G = n("823379"),
  B = n("709054"),
  F = n("981631"),
  k = n("124368");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(l = s || (s = {}))[l.Favorite = 0] = "Favorite", l[l.PrivateChannel = 1] = "PrivateChannel", l[l.Mentioned = 2] = "Mentioned", l[l.AllMessagesNotifications = 3] = "AllMessagesNotifications", l[l.GuildChannel = 4] = "GuildChannel", l[l.OldChannel = 5] = "OldChannel", l[l.NoNotifications = 6] = "NoNotifications", l[l.ReallyOldChannel = 7] = "ReallyOldChannel", (i = a || (a = {})).Loading = "loading", i.Loaded = "loaded", i.Done = "done";
let H = 25;
class V extends o.EventEmitter {
  loadMore() {
    let {
      loadState: e,
      channels: t
    } = this.state;
    if ("loaded" !== e) return;
    let n = !1,
      s = t.map(e => {
        if (e.isFullyLoaded || e.deleted || n) return e;
        if (e.collapsed) return e.hasLoadedAnything ? e : {
          ...e,
          hasLoadedAnything: !0
        };
        return (e = this.populateInitialStateFromStore(e)).isFullyLoaded ? e : (d()("nsfw" !== e.type, "this channel should already be loaded"), "messages" === e.type && this.loadChannelMessages(e) && (n = !0), e)
      });
    (!n || s.some((e, n) => e !== t[n])) && this.setState({
      channels: s,
      loadState: n ? this.state.loadState : "done"
    })
  }
  populateInitialStateFromStore(e) {
    if ("messages" === e.type) return Y(e, !1);
    if ("nsfw" === e.type) return {
      ...e,
      isFullyLoaded: !0,
      hasLoadedAnything: !0
    };
    if ("forum" === e.type) {
      let t = S.default.hasLoaded(e.guildId);
      return {
        ...e,
        isFullyLoaded: t,
        hasLoadedAnything: t
      }
    } else(0, G.assertNever)(e)
  }
  clearScrollToChannelIndex() {
    this.setState({
      scrollToChannelIndex: null
    })
  }
  loadChannelMessages(e) {
    _.default.clearChannel(e.channelId);
    let t = _.default.fetchMessages({
      channelId: e.channelId,
      limit: F.MAX_MESSAGES_PER_CHANNEL,
      jump: {
        messageId: e.oldestReadMessageId,
        flash: !0
      }
    });
    return null != t && !1 !== t && (this.setState({
      loadState: "loading"
    }), t.then(t => {
      this.setState({
        loadState: "loaded",
        channels: this.updateChannel(e.channelId, e => {
          d()("messages" === e.type, "channel cannot change type");
          let n = Y(e, !0);
          return (0 === n.messages.length || n.messages.length === e.messages.length) && (n = {
            ...n,
            hasLoadedAnything: !0,
            isFullyLoaded: !0,
            hasError: !t
          }), n
        })
      })
    }, () => {
      this.setState({
        loadState: "loaded",
        channels: this.updateChannel(e.channelId, e => {
          var t;
          return d()("messages" === e.type, "channel cannot change type"), {
            ...Y(e, !0),
            isFullyLoaded: !0,
            hasError: !0,
            hasLoadedAnything: !0,
            newestUnreadMessageId: null === (t = e.messages[e.messages.length - 1]) || void 0 === t ? void 0 : t.id
          }
        })
      })
    }), !0)
  }
  updateChannel(e, t) {
    return this.state.channels.map(n => n.channelId === e ? t(n) : n)
  }
  setState(e) {
    for (let t in e)
      if (e[t] !== this.state[t]) {
        this.state = {
          ...this.state,
          ...e
        }, this.emit("change", this.state);
        return
      }
  }
  constructor(e, t) {
    super(), w(this, "state", void 0), w(this, "scrollerRef", void 0), w(this, "maybeLoadMore", void 0), w(this, "reloadMessages", void 0), w(this, "getNumUnreadChannels", void 0), w(this, "markChannelRead", void 0), w(this, "markGuildRead", void 0), w(this, "deleteChannel", void 0), w(this, "markAllRead", void 0), w(this, "toggle", void 0), w(this, "handleUserGuildSettingsStoreChange", void 0), w(this, "handleJoinedThreadsStoreChange", void 0), w(this, "handleActiveThreadsStoreChange", void 0), this.state = e, this.scrollerRef = t, this.maybeLoadMore = () => {
      var e;
      let t = null === (e = this.scrollerRef.current) || void 0 === e ? void 0 : e.getScrollerState();
      if (null != t) t.scrollHeight - t.scrollTop - t.offsetHeight < 2e3 && this.loadMore()
    }, this.reloadMessages = () => {
      this.setState({
        channels: this.state.channels.map(e => "messages" === e.type && e.hasLoadedAnything ? Y(e, !1, !0) : e)
      })
    }, this.getNumUnreadChannels = () => this.state.channels.length, this.markChannelRead = e => {
      let {
        channelId: t,
        newestUnreadMessageId: n
      } = e;
      if (E.default.wait(() => T.ack(t, !0, void 0, n, {
          section: F.AnalyticsSections.INBOX
        })), 1 === this.state.channels.length) {
        this.deleteChannel(t);
        return
      }
      this.setState({
        channels: this.updateChannel(t, e => ({
          ...e,
          deleted: !0
        }))
      }), m.default.useReducedMotion && this.deleteChannel(t), this.maybeLoadMore()
    }, this.markGuildRead = e => {
      E.default.wait(() => (0, p.default)([e], F.AnalyticsSections.INBOX)), this.setState({
        channels: this.state.channels.filter(t => t.guildId !== e)
      }), this.maybeLoadMore()
    }, this.deleteChannel = e => {
      this.setState({
        scrollToChannelIndex: f().findIndex(this.state.channels, t => t.channelId === e),
        channels: this.state.channels.filter(t => t.channelId !== e)
      }), this.maybeLoadMore()
    }, this.markAllRead = () => {
      T.bulkAck(this.state.channels.map(e => ({
        channelId: e.channelId,
        messageId: e.newestUnreadMessageId
      }))), this.setState({
        channels: []
      })
    }, this.toggle = e => {
      let {
        channelId: t,
        guildId: n
      } = e, {
        channels: s,
        collapsedChannels: a,
        loadState: l
      } = this.state, i = f().findIndex(s, e => e.channelId === t), r = s[i], o = !r.collapsed;
      a[t] = o, (0, g.updateUserChannelSettings)(n, t, e => {
        e.collapsedInInbox = o
      }, g.UserSettingsDelay.FREQUENT_USER_ACTION), this.setState({
        scrollToChannelIndex: i,
        collapsedChannels: a,
        loadState: "done" !== l || o || r.isFullyLoaded ? l : "loaded",
        channels: this.updateChannel(t, e => ({
          ...e,
          collapsed: o
        }))
      }), r.collapsed ? !r.isFullyLoaded && this.loadMore() : this.maybeLoadMore()
    }, this.handleUserGuildSettingsStoreChange = () => {
      let e = this.state.channels.filter(e => !b.default.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
      e.length !== this.state.channels.length && this.setState({
        channels: e
      })
    }, this.handleJoinedThreadsStoreChange = () => {
      let e = this.state.channels.filter(e => !C.default.isMuted(e.channelId));
      e.length !== this.state.channels.length && this.setState({
        channels: e
      })
    }, this.handleActiveThreadsStoreChange = () => {
      let e = this.state.channels.map(e => {
        if ("forum" !== e.type) return e;
        {
          let t = S.default.hasLoaded(e.guildId);
          return {
            ...e,
            isFullyLoaded: t,
            hasLoadedAnything: t
          }
        }
      });
      this.setState({
        channels: e
      })
    }
  }
}

function Y(e, t) {
  var n;
  let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    a = D.default.getMessages(e.channelId),
    l = a.toArray().filter(t => B.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= B.default.compare(t.id, e.newestUnreadMessageId));
  if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && s) return e;
  let i = null != a.getAfter(e.oldestReadMessageId) || (null === (n = l[0]) || void 0 === n ? void 0 : n.id) === e.oldestUnreadMessageId,
    r = l[l.length - 1],
    o = B.default.compare(null == r ? void 0 : r.id, e.newestUnreadMessageId) >= 0 || l.length >= H;
  return {
    ...e,
    messages: l,
    hasLoadedAnything: e.hasLoadedAnything || i || t,
    hasLoadedFirst: e.hasLoadedFirst || i || t,
    isFullyLoaded: e.isFullyLoaded || i && o || t && !a.hasMoreAfter
  }
}

function K() {
  let e = function() {
      var e, t;
      let n = {},
        s = null !== (t = null === (e = M.default.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {};
      for (let e in s)
        for (let t in s[e].channels) {
          let a = O.default.getChannel(t);
          (!(t in n) || (null == a ? void 0 : a.guild_id) === e) && (n[t] = s[e].channels[t].collapsedInInbox)
        }
      return n
    }(),
    t = function(e) {
      let t = [];
      return O.default.getSortedPrivateChannels().forEach(n => W(e, t, null, n.id)), U.default.getFlattenedGuildIds().forEach(n => {
        if (null == n) return;
        let s = v.default.getSelectableChannelIds(n),
          a = N.default.getActiveJoinedUnreadThreadsForGuild(n);
        s.forEach(s => {
          var l;
          W(e, t, n, s);
          let i = null !== (l = a[s]) && void 0 !== l ? l : {};
          for (let s in i) W(e, t, n, s)
        })
      }), f().sortBy(t, e => e.sortOrder)
    }(e),
    n = f().uniq(t.map(e => e.guildId)).filter(G.isNotNullish);
  return E.default.dispatch({
    type: "INBOX_OPEN",
    guildIds: n
  }), {
    collapsedChannels: e,
    loadState: "loaded",
    channels: t,
    scrollToChannelIndex: null
  }
}

function W(e, t, n, s) {
  if (null == s) return;
  let a = O.default.getChannel(s);
  if (null == a || !R.THREAD_CHANNEL_TYPES.has(a.type) && b.default.isGuildOrCategoryOrChannelMuted(n, a.id)) return;
  if (a.isPrivate()) {
    if (0 === y.default.getMentionCount(s)) return
  } else if (!(0, h.getHasImportantUnread)(a) && 0 === y.default.getMentionCount(s)) return;
  if (!a.isPrivate() && !P.default.can(F.Permissions.READ_MESSAGE_HISTORY, a)) return;
  let l = y.default.ackMessageId(s);
  if (null == l) {
    let e = x.default.getGuild(a.guild_id);
    if (null == e || null == e.joinedAt) return;
    l = B.default.fromTimestamp(e.joinedAt.getTime())
  }
  let i = y.default.getOldestUnreadMessageId(s),
    r = y.default.lastMessageId(s),
    o = y.default.getMentionCount(s),
    u = o > 0 || a.isPrivate();
  if (null == r || B.default.compare(l, r) >= 0) return;
  let d = {
    guildId: n,
    channelId: s,
    oldestReadMessageId: l,
    oldestUnreadMessageId: i,
    newestUnreadMessageId: r,
    collapsed: !0 === e[s],
    hasLoadedAnything: !1,
    hasLoadedFirst: !1,
    isFullyLoaded: !1,
    hasError: !1,
    hasMentionsOrUnreads: u,
    mentionCount: o,
    sortOrder: function(e, t, n) {
      let s = O.default.getChannel(t);
      if (I.default.isFavorite(t)) return 0;
      if (s.isPrivate()) return 1;
      if (y.default.getMentionCount(t) > 0) return 2;
      if (null != n) {
        let e = B.default.extractTimestamp(n);
        if (Date.now() - e > Q) return 7;
        if (Date.now() - e > z) return 5
      }
      if (s.isThread()) {
        let e = (0, A.computeThreadNotificationSetting)(s);
        return e === k.ThreadMemberFlags.ALL_MESSAGES ? 3 : e === k.ThreadMemberFlags.NO_MESSAGES ? 6 : 4
      } {
        let n = b.default.getChannelMessageNotifications(e, t),
          s = n === F.UserNotificationSettings.NULL ? b.default.getMessageNotifications(e) : n;
        return s === F.UserNotificationSettings.ALL_MESSAGES ? 3 : s === F.UserNotificationSettings.NO_MESSAGES ? 6 : 4
      }
    }(n, s, r)
  };
  a.isNSFW() && !L.default.didAgree(a.guild_id) ? t.push({
    ...d,
    type: "nsfw"
  }) : a.isForumLikeChannel() ? t.push({
    ...d,
    type: "forum"
  }) : t.push({
    ...d,
    type: "messages",
    messages: []
  })
}
let z = 2 * j.default.Millis.DAY,
  Q = 10 * j.default.Millis.DAY;

function q(e) {
  let [t, n] = r.useState(() => new V(K(), e)), [s, a] = r.useState(!1), l = r.useRef(Date.now()), [i, o] = r.useState(() => K());
  return r.useEffect(() => {
    let e = e => o(e);
    return t.on("change", e), o(t.state), () => {
      t.off("change", e)
    }
  }, [t]), r.useEffect(() => {
    if (null == i || i.channels.length > 0 || s) return;
    let t = Date.now(),
      r = K();
    0 === r.channels.length || t - l.current < 10 * j.default.Millis.SECOND ? a(!0) : (l.current = Date.now(), n(new V(r, e)))
  }, [i, s, e]), r.useLayoutEffect(t.maybeLoadMore, [null == i ? void 0 : i.channels, null == i ? void 0 : i.loadState]), r.useEffect(() => (D.default.addChangeListener(t.reloadMessages), () => D.default.removeChangeListener(t.reloadMessages)), [t.reloadMessages]), r.useEffect(() => (b.default.addChangeListener(t.handleUserGuildSettingsStoreChange), () => b.default.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]), r.useEffect(() => (C.default.addChangeListener(t.handleJoinedThreadsStoreChange), () => C.default.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]), r.useEffect(() => (S.default.addChangeListener(t.handleActiveThreadsStoreChange), () => S.default.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]), [i, t]
}