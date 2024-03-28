"use strict";
a.r(t), a.d(t, {
  useActiveGuildThreads: function() {
    return x
  },
  useActiveThreads: function() {
    return v
  },
  useArchivedThreads: function() {
    return N
  },
  useTrackThreadBrowserTab: function() {
    return S
  }
}), a("47120");
var s = a("470079"),
  l = a("392711"),
  r = a.n(l),
  n = a("442837"),
  u = a("883429"),
  d = a("592125"),
  i = a("496675"),
  o = a("306680"),
  c = a("823379"),
  f = a("709054"),
  h = a("344185"),
  m = a("920303"),
  T = a("569471"),
  g = a("346479"),
  C = a("91159"),
  E = a("231338");

function S() {
  s.useEffect(() => {
    (0, C.trackThreadBrowserTab)()
  }, [])
}

function v(e) {
  let t = function(e) {
      let t = (0, n.useStateFromStoresArray)([i.default, h.default, d.default], () => r()(h.default.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
        let {
          id: t
        } = e;
        return d.default.getChannel(t)
      }).filter(c.isNotNullish).filter(e => i.default.can(E.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e.guild_id, e.id]);
      return s.useMemo(() => r()(t).sort((e, t) => f.default.compare(o.default.lastMessageId(e), o.default.lastMessageId(t))).reverse().value(), [t])
    }(e),
    [a, l] = (0, n.useStateFromStores)([T.default], () => r().partition(t, e => T.default.hasJoined(e)), [t], n.statesWillNeverBeEqual);
  return {
    joinedThreadIds: a,
    unjoinedThreadIds: l
  }
}

function x(e) {
  let t = (0, n.useStateFromStoresArray)([i.default, h.default, d.default], () => r()(h.default.getThreadsForGuild(e)).values().map(e => r().values(e)).flatten().map(e => {
    let {
      id: t
    } = e;
    return d.default.getChannel(t)
  }).filter(c.isNotNullish).filter(e => i.default.can(E.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
  return s.useMemo(() => r()(t).sort((e, t) => f.default.compare(o.default.lastMessageId(e), o.default.lastMessageId(t))).reverse().value(), [t])
}

function N(e, t, a) {
  let {
    canLoadMore: l,
    loading: o,
    nextOffset: c,
    isInitialLoad: f
  } = (0, n.useStateFromStoresObject)([m.default], () => ({
    loading: m.default.isLoading(e.id, t, a),
    isInitialLoad: m.default.isInitialLoad,
    canLoadMore: m.default.canLoadMore,
    nextOffset: m.default.nextOffset
  })), h = s.useCallback(() => {
    i.default.can(E.Permissions.READ_MESSAGE_HISTORY, e) && g.default.loadArchivedThreads(e.guild_id, e.id, t, a, c)
  }, [e, t, a, c]);
  return s.useEffect(() => {
    f && h()
  }, [e.id, t, a, f]), s.useEffect(() => {
    u.default.resort(e.id)
  }, [e.id]), {
    threadIds: (0, n.useStateFromStoresArray)([m.default, d.default, i.default], () => r()(m.default.getThreads(e.id, t, a)).filter(e => {
      let t = d.default.getChannel(e);
      return null != t && i.default.can(E.Permissions.VIEW_CHANNEL, t)
    }).value()),
    canLoadMore: l,
    loading: o || f,
    loadMore: h
  }
}