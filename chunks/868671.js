"use strict";
n.r(t), n.d(t, {
  CONTENT_FEED_SECTION: function() {
    return g
  },
  useInjectContentInventoryFeed: function() {
    return S
  }
}), n("47120"), n("724458");
var a = n("470079"),
  l = n("442837"),
  s = n("570140"),
  i = n("439170"),
  r = n("592125"),
  o = n("451478"),
  u = n("626135"),
  d = n("162461"),
  c = n("146282"),
  f = n("590026"),
  h = n("178762"),
  m = n("206583"),
  p = n("809017"),
  E = n("981631"),
  C = n("689938");
let g = 0;

function S(e) {
  let {
    memberStoreProps: {
      groups: t,
      rows: n,
      version: g
    },
    channelId: S,
    guildId: _
  } = e, [T, I] = a.useState(!1), {
    requestId: A,
    entries: N,
    impressionCappedEntryIds: v
  } = (0, f.default)(S), x = (0, l.useStateFromStores)([c.default], () => c.default.hidden), M = (0, l.useStateFromStores)([o.default], () => o.default.isFocused()), R = (0, l.useStateFromStores)([r.default], () => r.default.getChannel(S)), y = (null == R ? void 0 : R.isForumChannel()) === !1, [L, O, j, P] = a.useMemo(() => {
    let e;
    if (null == N || 0 === N.length || null == A || !y) return [t, n, g];
    let a = T ? N.length : 3,
      l = N.slice(0, a);
    e = x ? [{
      type: i.MemberListRowTypes.HIDDEN_CONTENT_INVENTORY
    }] : l.map(e => ({
      type: i.MemberListRowTypes.CONTENT_INVENTORY,
      entry: e,
      requestId: A
    }));
    let s = {
        id: p.MEMBER_LIST_CONTENT_GROUP_ID,
        type: i.MemberListRowTypes.CONTENT_INVENTORY_GROUP,
        key: p.MEMBER_LIST_CONTENT_GROUP_ID,
        count: e.length,
        index: n.length,
        title: C.default.Messages.CONTENT_INVENTORY_MEMBERLIST_GROUP_TITLE,
        onToggleExpand: () => {
          I(e => {
            let t = !e;
            return u.default.track(E.AnalyticEvents.MEMBERLIST_CONTENT_FEED_TOGGLED, {
              channel_id: S,
              guild_id: _,
              expanded: t
            }), t
          })
        },
        expanded: T,
        expandedCount: N.length,
        feedHeight: e.map(h.getContentRowHeight).reduce((e, t) => e + t, 0)
      },
      r = [s, ...t],
      o = [...n, s, ...e];
    return [r, o, Math.random(), e]
  }, [S, N, T, t, _, A, n, g, x, y]), D = a.useRef(0), b = a.useRef(N), U = a.useRef(), F = a.useRef({
    impressionCappedEntryIds: v
  }), w = a.useCallback(e => {
    var t;
    let n = Math.floor(e / h.DEFAULT_CONTENT_ROW_HEIGHT),
      a = Math.min(null !== (t = null == P ? void 0 : P.length) && void 0 !== t ? t : 0, n);
    D.current = Math.max(D.current, a)
  }, [P]);
  return a.useEffect(() => {
    b.current = N
  }, [N]), a.useEffect(() => {
    F.current = {
      impressionCappedEntryIds: v
    }
  }, [v]), a.useEffect(() => (D.current = 0, U.current = Date.now(), () => {
    var e, t;
    if (null == A || null == U.current || Date.now() - U.current < 3e3) return;
    let n = null !== (t = null === (e = b.current) || void 0 === e ? void 0 : e.map(e => e.id)) && void 0 !== t ? t : [],
      a = n.slice(0, D.current);
    !x && M && y && (u.default.track(E.AnalyticEvents.RANKING_ITEMS_SEEN, {
      request_id: A,
      first_shown_at: U.current,
      item_ids: a,
      surface_type: m.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
      channel_id: S,
      guild_id: _,
      all_item_ids: n,
      impression_capped_item_ids: [...F.current.impressionCappedEntryIds]
    }), (0, d.isEligibleForImpressionCapping)("useInjectContentInventoryFeed") && s.default.dispatch({
      type: "CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS",
      itemIds: a
    }))
  }), [A, S, _, x, M, y]), {
    groups: L,
    rows: O,
    version: j,
    updateMaxRowSeen: w
  }
}