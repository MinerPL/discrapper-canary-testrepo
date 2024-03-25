"use strict";
n.r(t), n.d(t, {
  useTrackThreadBrowserTab: function() {
    return x
  },
  useActiveThreads: function() {
    return N
  },
  useActiveGuildThreads: function() {
    return S
  },
  useArchivedThreads: function() {
    return T
  }
}), n("222007");
var l = n("884691"),
  a = n("917351"),
  r = n.n(a),
  s = n("446674"),
  i = n("404607"),
  u = n("42203"),
  o = n("957255"),
  d = n("660478"),
  c = n("449008"),
  f = n("299039"),
  C = n("689275"),
  h = n("821343"),
  m = n("755624"),
  v = n("263024"),
  p = n("487269"),
  g = n("843455");

function x() {
  l.useEffect(() => {
    (0, p.trackThreadBrowserTab)()
  }, [])
}

function N(e) {
  let t = function(e) {
      let t = (0, s.useStateFromStoresArray)([o.default, C.default, u.default], () => r(C.default.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
        let {
          id: t
        } = e;
        return u.default.getChannel(t)
      }).filter(c.isNotNullish).filter(e => o.default.can(g.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e.guild_id, e.id]);
      return l.useMemo(() => r(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
    }(e),
    [n, a] = (0, s.useStateFromStores)([m.default], () => r.partition(t, e => m.default.hasJoined(e)), [t], s.statesWillNeverBeEqual);
  return {
    joinedThreadIds: n,
    unjoinedThreadIds: a
  }
}

function S(e) {
  let t = (0, s.useStateFromStoresArray)([o.default, C.default, u.default], () => r(C.default.getThreadsForGuild(e)).values().map(e => r.values(e)).flatten().map(e => {
    let {
      id: t
    } = e;
    return u.default.getChannel(t)
  }).filter(c.isNotNullish).filter(e => o.default.can(g.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
  return l.useMemo(() => r(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
}

function T(e, t, n) {
  let {
    canLoadMore: a,
    loading: d,
    nextOffset: c,
    isInitialLoad: f
  } = (0, s.useStateFromStoresObject)([h.default], () => ({
    loading: h.default.isLoading(e.id, t, n),
    isInitialLoad: h.default.isInitialLoad,
    canLoadMore: h.default.canLoadMore,
    nextOffset: h.default.nextOffset
  })), C = l.useCallback(() => {
    o.default.can(g.Permissions.READ_MESSAGE_HISTORY, e) && v.default.loadArchivedThreads(e.guild_id, e.id, t, n, c)
  }, [e, t, n, c]);
  l.useEffect(() => {
    f && C()
  }, [e.id, t, n, f]), l.useEffect(() => {
    i.default.resort(e.id)
  }, [e.id]);
  let m = (0, s.useStateFromStoresArray)([h.default, u.default, o.default], () => r(h.default.getThreads(e.id, t, n)).filter(e => {
    let t = u.default.getChannel(e);
    return null != t && o.default.can(g.Permissions.VIEW_CHANNEL, t)
  }).value());
  return {
    threadIds: m,
    canLoadMore: a,
    loading: d || f,
    loadMore: C
  }
}