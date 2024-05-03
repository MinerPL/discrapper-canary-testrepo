"use strict";
u.r(t), u.d(t, {
  GuildForumExperiment: function() {
    return H
  },
  getEnableForumPermissions: function() {
    return x
  },
  getForumPostAuthor: function() {
    return ee
  },
  useAppliedTags: function() {
    return X
  },
  useAutomaticForumSearch: function() {
    return ec
  },
  useCanCreateForumChannel: function() {
    return Y
  },
  useCanManageChannel: function() {
    return en
  },
  useCanSearchForumPosts: function() {
    return ed
  },
  useCanViewArchivedPosts: function() {
    return es
  },
  useChannelTemplate: function() {
    return ea
  },
  useDefaultReactionEmoji: function() {
    return J
  },
  useExistingPin: function() {
    return W
  },
  useFacepileUsers: function() {
    return K
  },
  useForumActiveThreadIds: function() {
    return eg
  },
  useForumPostAuthor: function() {
    return $
  },
  useForumPostFirstMessageMarkup: function() {
    return eu
  },
  useForumPostReadStates: function() {
    return er
  },
  useForumSearchState: function() {
    return ef
  },
  useLastActiveTimestamp: function() {
    return q
  },
  useLoadForumUnreadCounts: function() {
    return V
  },
  useMessageCount: function() {
    return Z
  },
  useMostUsedReaction: function() {
    return z
  },
  useSomeAppliedTags: function() {
    return B
  },
  useTypingUserIds: function() {
    return et
  },
  useUnreadThreadsCountForParent: function() {
    return em
  },
  useVisibleAppliedForumTags: function() {
    return eo
  },
  useVisibleForumTags: function() {
    return ei
  }
}), u("47120"), u("724458");
var n = u("470079"),
  l = u("392711"),
  r = u.n(l),
  a = u("683860"),
  i = u("442837"),
  o = u("570140"),
  d = u("45114"),
  s = u("339085"),
  f = u("987170"),
  c = u("937889"),
  m = u("739566"),
  g = u("601070"),
  S = u("344185"),
  T = u("723774"),
  E = u("144140"),
  h = u("91159"),
  _ = u("592125"),
  v = u("720202"),
  A = u("430824"),
  M = u("496675"),
  p = u("306680"),
  C = u("699516"),
  F = u("111583"),
  I = u("594174"),
  N = u("823379"),
  O = u("709054"),
  R = u("883429"),
  P = u("238349"),
  U = u("368844"),
  b = u("660189"),
  y = u("581036"),
  D = u("208970"),
  L = u("882252"),
  w = u("710352"),
  G = u("981631"),
  k = u("176505"),
  j = u("124368");
let H = (0, f.default)({
  id: "2023-01_forums_non_community",
  label: "Forum non-community",
  kind: "guild",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "On",
    config: {
      enabled: !0
    }
  }]
});

function x(e) {
  return H.getCurrentConfig({
    guildId: e,
    location: "553713_2"
  }).enabled
}

function Y(e) {
  return function(e) {
    let t = (0, i.useStateFromStores)([A.default], () => A.default.getGuild(e));
    return H.useExperiment({
      guildId: e,
      location: "553713_1"
    }, {
      autoTrackExposure: !1
    }).enabled || !!((null == t ? void 0 : t.hasFeature(G.GuildFeatures.COMMUNITY)) || (null == t ? void 0 : t.hasFeature(G.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)))
  }(e)
}

function V(e, t, u) {
  let l = (0, i.useStateFromStores)([S.default], () => S.default.hasLoaded(e.guild_id));
  n.useEffect(() => {
    if (!l) return;
    let n = P.default.getThreadIds(e.id, t, u),
      r = y.default.getThreadIdsMissingCounts(e.guild_id, n).filter(e => (0, L.canDisplayPostUnreadMessageCount)(e, [p.default])).slice(0, 180).map(e => ({
        threadId: e,
        ackMessageId: p.default.getTrackedAckMessageId(e)
      }));
    r.length > 0 && o.default.dispatch({
      type: "REQUEST_FORUM_UNREADS",
      guildId: e.guild_id,
      channelId: e.id,
      threads: r
    })
  }, [e.id, e.guild_id, l, u, t])
}

function W(e) {
  return (0, i.useStateFromStores)([S.default, _.default], () => {
    let t = r()(S.default.getThreadsForParent(e.guild_id, e.parent_id)).keys().filter(e => {
      var t;
      return (null === (t = _.default.getChannel(e)) || void 0 === t ? void 0 : t.hasFlag(k.ChannelFlags.PINNED)) === !0
    }).head();
    return _.default.getChannel(t)
  })
}
let Q = [];

function X(e) {
  let t = function(e) {
    let t = null == e ? void 0 : e.parent_id;
    return (0, i.useStateFromStoresObject)([_.default], () => {
      var e;
      let u = _.default.getChannel(t);
      return (null !== (e = null == u ? void 0 : u.availableTags) && void 0 !== e ? e : []).reduce((e, t) => ({
        ...e,
        [t.id]: t
      }), {})
    }, [t])
  }(e);
  return n.useMemo(() => {
    var u, n, l;
    return null !== (l = null == e ? void 0 : null === (n = e.appliedTags) || void 0 === n ? void 0 : null === (u = n.map(e => t[e])) || void 0 === u ? void 0 : u.filter(N.isNotNullish)) && void 0 !== l ? l : Q
  }, [t, null == e ? void 0 : e.appliedTags])
}

function B(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    u = X(e);
  return n.useMemo(() => [u.slice(0, t), Math.max(0, u.length - t)], [u, t])
}

function K(e, t) {
  let u = (0, i.useStateFromStoresArray)([I.default], () => t.map(e => I.default.getUser(e)).filter(N.isNotNullish));
  return n.useEffect(() => {
    u.forEach(t => {
      v.default.requestMember(e.guild_id, t.id)
    })
  }, []), u
}

function q(e, t) {
  let u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : w.ForumTimestampFormats.DURATION_AGO,
    l = n.useMemo(() => O.default.extractTimestamp(e.id), [e.id]),
    r = (0, h.useLastMessageTimestamp)(e),
    i = n.useMemo(() => (0, L.getForumTimestampFormatter)(t, u), [t, u]);
  return n.useMemo(() => t === a.ThreadSortOrder.CREATION_DATE ? (0, h.getTimestampString)(l, i) : (0, h.getTimestampString)(r, i), [r, t, l, i])
}

function z(e) {
  return n.useMemo(() => {
    var t;
    return r().maxBy(null !== (t = null == e ? void 0 : e.reactions) && void 0 !== t ? t : [], e => Math.max(e.burst_count, e.count))
  }, [null == e ? void 0 : e.reactions])
}

function J(e) {
  let t = null == e ? void 0 : e.defaultReactionEmoji,
    u = (0, i.useStateFromStores)([s.default], () => (null == t ? void 0 : t.emojiId) != null ? s.default.getUsableCustomEmojiById(t.emojiId) : null);
  return null == t ? null : null != t.emojiId && null != u ? {
    id: t.emojiId,
    name: u.name,
    animated: u.animated
  } : null != t.emojiName ? {
    id: t.emojiId,
    name: t.emojiName,
    animated: !1
  } : null
}

function Z(e) {
  let t = (0, i.useStateFromStores)([E.default], () => {
      var t;
      return null !== (t = E.default.getCount(e.id)) && void 0 !== t ? t : 0
    }),
    u = (0, T.getMessageCountText)(t, e.id),
    n = (0, i.useStateFromStores)([p.default], () => (0, L.canDisplayPostUnreadMessageCount)(e.id, [p.default])),
    l = (0, i.useStateFromStores)([y.default], () => {
      if (!n) return null;
      let u = y.default.getCount(e.id);
      if (null == u || !(u > 0)) return "1+";
      {
        let e = Math.min(u, t);
        return e >= j.MAX_THREAD_UNREAD_MESSAGE_COUNT ? "".concat(j.MAX_THREAD_UNREAD_MESSAGE_COUNT, "+") : e
      }
    });
  return {
    messageCount: t,
    isMaxMessageCount: null != t && "".concat(t) !== u,
    messageCountText: u,
    unreadCount: l
  }
}

function $(e) {
  var t;
  let u = (0, i.useStateFromStores)([I.default], () => I.default.getUser(e.ownerId)),
    l = (0, i.useStateFromStores)([b.default], () => {
      var t;
      return null === (t = b.default.getMessage(e.id)) || void 0 === t ? void 0 : t.firstMessage
    }),
    r = (0, m.useNullableUserAuthor)(null !== (t = null == l ? void 0 : l.author) && void 0 !== t ? t : u, e);
  return n.useEffect(() => {
    null != e.ownerId && v.default.requestMember(e.guild_id, e.ownerId)
  }, [e.guild_id, e.ownerId]), {
    user: u,
    author: r
  }
}

function ee(e) {
  var t, u;
  let n = I.default.getUser(e.ownerId),
    l = null === (t = b.default.getMessage(e.id)) || void 0 === t ? void 0 : t.firstMessage,
    r = (0, m.getUserAuthor)(null !== (u = null == l ? void 0 : l.author) && void 0 !== u ? u : n, e);
  return {
    user: n,
    author: r
  }
}

function et(e) {
  return (0, i.useStateFromStoresArray)([F.default, I.default, C.default], () => {
    let t = I.default.getCurrentUser();
    return r()(F.default.getTypingUsers(e.id)).keys().filter(e => e !== (null == t ? void 0 : t.id)).reject(e => C.default.isBlocked(e)).map(e => I.default.getUser(e)).filter(N.isNotNullish).map(e => e.id).value()
  })
}

function eu(e) {
  let {
    firstMessage: t,
    formatInline: u = !0,
    noStyleAndInteraction: l = !0
  } = e, {
    hasSpoilerEmbeds: r,
    content: a
  } = n.useMemo(() => (null == t ? void 0 : t.content) != null && "" !== t.content ? (0, c.default)(t, {
    formatInline: u,
    noStyleAndInteraction: l,
    allowHeading: !0,
    allowList: !0
  }) : {
    hasSpoilerEmbeds: !1,
    content: null
  }, [t, u, l]), i = (0, U.useFindFirstMediaProperties)(t, r), o = (0, U.useFirstMediaIsEmbed)(t, r);
  return {
    hasSpoilerEmbeds: r,
    content: a,
    firstMedia: i,
    firstMediaIsEmbed: o
  }
}

function en(e) {
  return (0, i.useStateFromStores)([M.default], () => M.default.can(G.Permissions.MANAGE_CHANNELS, e))
}
let el = {
  isNew: !1,
  hasUnreads: !1
};

function er(e) {
  return (0, i.useStateFromStoresObject)([A.default, p.default], () => {
    var t;
    let u = A.default.getGuild(null !== (t = e.getGuildId()) && void 0 !== t ? t : G.EMPTY_STRING_SNOWFLAKE_ID);
    return null == u ? el : (0, L.getForumPostReadStates)(e, u, [p.default])
  })
}

function ea(e) {
  return n.useMemo(() => null == e ? "" : null == e.template ? "" : e.template.trim(), [e])
}

function ei(e) {
  let t = (0, i.useStateFromStores)([M.default], () => M.default.can(G.Permissions.MANAGE_THREADS, e));
  return n.useMemo(() => {
    var u;
    let n = [...null !== (u = null == e ? void 0 : e.availableTags) && void 0 !== u ? u : []];
    return !t && (n = n.filter(e => !e.moderated)), n
  }, [t, null == e ? void 0 : e.availableTags])
}

function eo(e, t) {
  let u = ei((0, i.useStateFromStores)([_.default], () => _.default.getChannel(null == e ? void 0 : e.parent_id), [e]));
  return n.useMemo(() => t.filter(e => u.includes(e)), [t, u])
}

function ed(e) {
  return (0, i.useStateFromStores)([M.default], () => M.default.can(G.Permissions.READ_MESSAGE_HISTORY, e))
}

function es(e) {
  return (0, i.useStateFromStores)([M.default], () => M.default.can(G.Permissions.READ_MESSAGE_HISTORY, e))
}

function ef(e) {
  let {
    channelId: t
  } = e;
  return (0, i.useStateFromStoresObject)([D.default], () => ({
    isSearchLoading: D.default.getSearchLoading(t),
    searchQuery: D.default.getSearchQuery(t),
    searchResults: D.default.getSearchResults(t)
  }))
}

function ec(e, t) {
  let u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    {
      isSearchLoading: l,
      searchQuery: r
    } = ef({
      channelId: e.id
    }),
    a = ed(e),
    i = n.useRef(null),
    o = n.useRef(new Set);
  n.useEffect(() => {
    if (null == r && null != i.current) {
      R.default.clearForumSearch(e.id), i.current = null;
      return
    }
    if (null == r || 0 === r.length || u) return;
    if (!a) {
      R.default.clearForumSearch(e.id);
      return
    }
    if (i.current === r && o.current === t || l) return;
    let n = setTimeout(async () => {
      i.current = r, o.current = t;
      try {
        await R.default.searchForumPosts(e.guild_id, e.id, r, t)
      } catch {}
    }, 350);
    return () => clearTimeout(n)
  }, [a, e.guild_id, e.id, u, l, r, t])
}

function em(e, t) {
  return (0, i.useStateFromStores)([g.default, p.default, _.default], () => {
    let u = _.default.getChannel(t);
    if (!(null == u ? void 0 : u.isForumLikeChannel())) return 0;
    let n = g.default.getActiveJoinedUnreadThreadsForParent(e, t),
      l = g.default.getActiveUnjoinedUnreadThreadsForParent(e, t),
      r = p.default.ackMessageId(t),
      a = 0;
    if (null == r) return a;
    for (let e in n) {
      let t = n[e],
        u = p.default.lastMessageId(t.channel.id);
      null != u && u > r && a++
    }
    for (let e in l) {
      let t = l[e],
        u = p.default.lastMessageId(t.id);
      null != u && u > r && a++
    }
    return a
  })
}

function eg(e) {
  let {
    channel: t,
    sortOrder: u,
    tagFilter: l,
    shouldAutomaticallyAck: r
  } = e, a = (0, i.useStateFromStoresArray)([P.default], () => P.default.getThreadIds(t.id, u, l)), o = em(t.guild_id, t.id), s = (0, i.useStateFromStores)([P.default], () => r && (o > 0 || P.default.getCanAckThreads()), [r, o]);
  return n.useEffect(() => {
    s && (0, d.ackChannel)(t)
  }, [t, s]), a
}