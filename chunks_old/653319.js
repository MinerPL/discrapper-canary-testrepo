"use strict";
n.r(t), n.d(t, {
  CONTENT_FEED_SECTION: function() {
    return m
  },
  useInjectContentInventoryFeed: function() {
    return p
  }
}), n("222007"), n("808653");
var a = n("884691"),
  l = n("446674"),
  s = n("19766"),
  i = n("599110"),
  r = n("265596"),
  u = n("205343"),
  o = n("346967"),
  d = n("709377"),
  c = n("447313"),
  f = n("49111"),
  h = n("782340");
let m = 0;

function p(e) {
  let {
    memberStoreProps: {
      groups: t,
      rows: n,
      version: m
    },
    channelId: p,
    guildId: E
  } = e, [g, S] = a.useState(!1), {
    requestId: C,
    entries: _
  } = (0, u.default)(p), I = (0, l.useStateFromStores)([r.default], () => r.default.hidden), [T, v, x, N] = a.useMemo(() => {
    let e;
    if (null == _ || 0 === _.length || null == C) return [t, n, m];
    let a = g ? _.length : 3,
      l = _.slice(0, a);
    e = I ? [{
      type: s.MemberListRowTypes.HIDDEN_CONTENT_INVENTORY
    }] : l.map(e => ({
      type: s.MemberListRowTypes.CONTENT_INVENTORY,
      entry: e,
      requestId: C
    }));
    let r = {
        id: c.MEMBER_LIST_CONTENT_GROUP_ID,
        type: s.MemberListRowTypes.CONTENT_INVENTORY_GROUP,
        key: c.MEMBER_LIST_CONTENT_GROUP_ID,
        count: e.length,
        index: n.length,
        title: h.default.Messages.CONTENT_INVENTORY_MEMBERLIST_GROUP_TITLE,
        onToggleExpand: () => {
          S(e => {
            let t = !e;
            return i.default.track(f.AnalyticEvents.MEMBERLIST_CONTENT_FEED_TOGGLED, {
              channel_id: p,
              guild_id: E,
              expanded: t
            }), t
          })
        },
        expanded: g,
        expandedCount: _.length,
        feedHeight: e.map(o.getContentRowHeight).reduce((e, t) => e + t, 0)
      },
      u = [r, ...t],
      d = [...n, r, ...e];
    return [u, d, Math.random(), e]
  }, [p, _, g, t, E, C, n, m, I]), A = a.useRef(0), M = a.useRef(_), R = a.useRef(), j = a.useCallback(e => {
    var t;
    let n = Math.floor(e / o.DEFAULT_CONTENT_ROW_HEIGHT),
      a = Math.min(null !== (t = null == N ? void 0 : N.length) && void 0 !== t ? t : 0, n);
    A.current = Math.max(A.current, a)
  }, [N]);
  return a.useEffect(() => {
    M.current = _
  }, [_]), a.useEffect(() => (A.current = 0, R.current = Date.now(), () => {
    var e, t;
    if (null == C || null == R.current) return;
    let n = Date.now() - R.current;
    if (n < 3e3) return;
    let a = null !== (t = null === (e = M.current) || void 0 === e ? void 0 : e.slice(0, A.current).map(e => e.id)) && void 0 !== t ? t : [];
    !I && i.default.track(f.AnalyticEvents.RANKING_ITEMS_SEEN, {
      request_id: C,
      first_shown_at: R.current,
      item_ids: a,
      surface_type: d.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
      channel_id: p,
      guild_id: E
    })
  }), [C, p, E, I]), {
    groups: T,
    rows: v,
    version: x,
    updateMaxRowSeen: j
  }
}