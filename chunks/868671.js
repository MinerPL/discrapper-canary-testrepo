"use strict";
n.r(t), n.d(t, {
  CONTENT_FEED_SECTION: function() {
    return m
  },
  useInjectContentInventoryFeed: function() {
    return p
  }
}), n("47120"), n("724458");
var a = n("470079"),
  l = n("442837"),
  s = n("439170"),
  i = n("626135"),
  r = n("146282"),
  o = n("590026"),
  u = n("178762"),
  d = n("206583"),
  c = n("809017"),
  f = n("981631"),
  h = n("689938");
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
  } = e, [C, g] = a.useState(!1), {
    requestId: S,
    entries: _
  } = (0, o.default)(p), T = (0, l.useStateFromStores)([r.default], () => r.default.hidden), [I, A, v, N] = a.useMemo(() => {
    let e;
    if (null == _ || 0 === _.length || null == S) return [t, n, m];
    let a = C ? _.length : 3,
      l = _.slice(0, a);
    e = T ? [{
      type: s.MemberListRowTypes.HIDDEN_CONTENT_INVENTORY
    }] : l.map(e => ({
      type: s.MemberListRowTypes.CONTENT_INVENTORY,
      entry: e,
      requestId: S
    }));
    let r = {
        id: c.MEMBER_LIST_CONTENT_GROUP_ID,
        type: s.MemberListRowTypes.CONTENT_INVENTORY_GROUP,
        key: c.MEMBER_LIST_CONTENT_GROUP_ID,
        count: e.length,
        index: n.length,
        title: h.default.Messages.CONTENT_INVENTORY_MEMBERLIST_GROUP_TITLE,
        onToggleExpand: () => {
          g(e => {
            let t = !e;
            return i.default.track(f.AnalyticEvents.MEMBERLIST_CONTENT_FEED_TOGGLED, {
              channel_id: p,
              guild_id: E,
              expanded: t
            }), t
          })
        },
        expanded: C,
        expandedCount: _.length,
        feedHeight: e.map(u.getContentRowHeight).reduce((e, t) => e + t, 0)
      },
      o = [r, ...t],
      d = [...n, r, ...e];
    return [o, d, Math.random(), e]
  }, [p, _, C, t, E, S, n, m, T]), x = a.useRef(0), M = a.useRef(_), R = a.useRef(), L = a.useCallback(e => {
    var t;
    let n = Math.floor(e / u.DEFAULT_CONTENT_ROW_HEIGHT),
      a = Math.min(null !== (t = null == N ? void 0 : N.length) && void 0 !== t ? t : 0, n);
    x.current = Math.max(x.current, a)
  }, [N]);
  return a.useEffect(() => {
    M.current = _
  }, [_]), a.useEffect(() => (x.current = 0, R.current = Date.now(), () => {
    var e, t;
    if (null == S || null == R.current || Date.now() - R.current < 3e3) return;
    let n = null !== (t = null === (e = M.current) || void 0 === e ? void 0 : e.slice(0, x.current).map(e => e.id)) && void 0 !== t ? t : [];
    !T && i.default.track(f.AnalyticEvents.RANKING_ITEMS_SEEN, {
      request_id: S,
      first_shown_at: R.current,
      item_ids: n,
      surface_type: d.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
      channel_id: p,
      guild_id: E
    })
  }), [S, p, E, T]), {
    groups: I,
    rows: A,
    version: v,
    updateMaxRowSeen: L
  }
}