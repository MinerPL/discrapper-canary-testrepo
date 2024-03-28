"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("392711"),
  i = n.n(l),
  r = n("442837"),
  o = n("570140"),
  u = n("45114"),
  d = n("404616"),
  c = n("470623"),
  f = n("344185"),
  E = n("488131"),
  _ = n("592125"),
  T = n("823379"),
  m = n("709054"),
  I = n("124368"),
  p = n("223763");

function h(e) {
  let {
    channel: t,
    channelRecord: n,
    deleteChannel: l
  } = e, h = (0, r.useStateFromStoresArray)([f.default, _.default], () => i()(f.default.getThreadsForParent(n.guild_id, n.id)).values().filter(e => {
    let {
      id: n
    } = e;
    return m.default.compare(n, t.oldestReadMessageId) > 0
  }).map(e => {
    let {
      id: t
    } = e;
    return _.default.getChannel(t)
  }).filter(T.isNotNullish).sort((e, t) => m.default.compare(e.id, t.id)).value(), [t.oldestReadMessageId, n.guild_id, n.id]), N = a.useCallback((e, t) => {
    (0, E.openThreadSidebarForViewing)(e, t, I.OpenThreadAnalyticsLocations.INBOX)
  }, []);
  return a.useEffect(() => {
    null != n && t.isFullyLoaded && !t.hasError && !t.collapsed && 0 === h.length && o.default.wait(() => {
      (0, u.ack)(t.channelId, !0), l(t.channelId)
    })
  }), (0, s.jsx)("div", {
    className: p.container,
    children: h.map(e => (0, s.jsx)(c.ForumPostComposerStoreProvider, {
      createStore: () => (0, c.createForumPostComposerStore)(n),
      children: (0, s.jsx)(d.default, {
        className: p.forumPost,
        threadId: e.id,
        goToThread: N
      })
    }, e.id))
  })
}