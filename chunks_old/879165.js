"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("917351"),
  i = n.n(s),
  r = n("446674"),
  o = n("913144"),
  u = n("267363"),
  d = n("152637"),
  c = n("578198"),
  f = n("689275"),
  h = n("967241"),
  E = n("42203"),
  m = n("449008"),
  p = n("299039"),
  S = n("648564"),
  g = n("278301");

function N(e) {
  let {
    channel: t,
    channelRecord: n,
    deleteChannel: s
  } = e, N = (0, r.useStateFromStoresArray)([f.default, E.default], () => i(f.default.getThreadsForParent(n.guild_id, n.id)).values().filter(e => {
    let {
      id: n
    } = e;
    return p.default.compare(n, t.oldestReadMessageId) > 0
  }).map(e => {
    let {
      id: t
    } = e;
    return E.default.getChannel(t)
  }).filter(m.isNotNullish).sort((e, t) => p.default.compare(e.id, t.id)).value(), [t.oldestReadMessageId, n.guild_id, n.id]), _ = l.useCallback((e, t) => {
    (0, h.openThreadSidebarForViewing)(e, t, S.OpenThreadAnalyticsLocations.INBOX)
  }, []);
  return l.useEffect(() => {
    null != n && t.isFullyLoaded && !t.hasError && !t.collapsed && 0 === N.length && o.default.wait(() => {
      (0, u.ack)(t.channelId, !0), s(t.channelId)
    })
  }), (0, a.jsx)("div", {
    className: g.container,
    children: N.map(e => (0, a.jsx)(c.ForumPostComposerStoreProvider, {
      createStore: () => (0, c.createForumPostComposerStore)(n),
      children: (0, a.jsx)(d.default, {
        className: g.forumPost,
        threadId: e.id,
        goToThread: _
      })
    }, e.id))
  })
}