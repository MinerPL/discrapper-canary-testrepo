"use strict";
n.r(t), n.d(t, {
  CONTENT_FEED_SECTION: function() {
    return p
  },
  useInjectContentInventoryFeed: function() {
    return E
  }
}), n("47120"), n("724458");
var a = n("470079"),
  l = n("442837"),
  s = n("439170"),
  i = n("451478"),
  r = n("626135"),
  o = n("146282"),
  u = n("590026"),
  d = n("178762"),
  c = n("206583"),
  f = n("809017"),
  h = n("981631"),
  m = n("689938");
let p = 0;

function E(e) {
  let {
    memberStoreProps: {
      groups: t,
      rows: n,
      version: p
    },
    channelId: E,
    guildId: C
  } = e, [g, S] = a.useState(!1), {
    requestId: _,
    entries: T
  } = (0, u.default)(E), I = (0, l.useStateFromStores)([o.default], () => o.default.hidden), A = (0, l.useStateFromStores)([i.default], () => i.default.isFocused()), [N, v, x, M] = a.useMemo(() => {
    let e;
    if (null == T || 0 === T.length || null == _) return [t, n, p];
    let a = g ? T.length : 3,
      l = T.slice(0, a);
    e = I ? [{
      type: s.MemberListRowTypes.HIDDEN_CONTENT_INVENTORY
    }] : l.map(e => ({
      type: s.MemberListRowTypes.CONTENT_INVENTORY,
      entry: e,
      requestId: _
    }));
    let i = {
        id: f.MEMBER_LIST_CONTENT_GROUP_ID,
        type: s.MemberListRowTypes.CONTENT_INVENTORY_GROUP,
        key: f.MEMBER_LIST_CONTENT_GROUP_ID,
        count: e.length,
        index: n.length,
        title: m.default.Messages.CONTENT_INVENTORY_MEMBERLIST_GROUP_TITLE,
        onToggleExpand: () => {
          S(e => {
            let t = !e;
            return r.default.track(h.AnalyticEvents.MEMBERLIST_CONTENT_FEED_TOGGLED, {
              channel_id: E,
              guild_id: C,
              expanded: t
            }), t
          })
        },
        expanded: g,
        expandedCount: T.length,
        feedHeight: e.map(d.getContentRowHeight).reduce((e, t) => e + t, 0)
      },
      o = [i, ...t],
      u = [...n, i, ...e];
    return [o, u, Math.random(), e]
  }, [E, T, g, t, C, _, n, p, I]), R = a.useRef(0), L = a.useRef(T), y = a.useRef(), O = a.useCallback(e => {
    var t;
    let n = Math.floor(e / d.DEFAULT_CONTENT_ROW_HEIGHT),
      a = Math.min(null !== (t = null == M ? void 0 : M.length) && void 0 !== t ? t : 0, n);
    R.current = Math.max(R.current, a)
  }, [M]);
  return a.useEffect(() => {
    L.current = T
  }, [T]), a.useEffect(() => (R.current = 0, y.current = Date.now(), () => {
    var e, t;
    if (null == _ || null == y.current || Date.now() - y.current < 3e3) return;
    let n = null !== (t = null === (e = L.current) || void 0 === e ? void 0 : e.map(e => e.id)) && void 0 !== t ? t : [],
      a = n.slice(0, R.current);
    !I && A && r.default.track(h.AnalyticEvents.RANKING_ITEMS_SEEN, {
      request_id: _,
      first_shown_at: y.current,
      item_ids: a,
      surface_type: c.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
      channel_id: E,
      guild_id: C,
      all_item_ids: n
    })
  }), [_, E, C, I, A]), {
    groups: N,
    rows: v,
    version: x,
    updateMaxRowSeen: O
  }
}