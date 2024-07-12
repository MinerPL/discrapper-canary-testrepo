n.d(t, {
  H: function() {
return x;
  },
  T: function() {
return I;
  }
}), n(47120), n(724458);
var i = n(470079),
  a = n(442837),
  l = n(570140),
  s = n(439170),
  r = n(592125),
  o = n(430824),
  c = n(451478),
  d = n(626135),
  u = n(162461),
  h = n(146282),
  p = n(34586),
  m = n(590026),
  _ = n(178762),
  f = n(206583),
  E = n(809017),
  C = n(981631),
  g = n(689938);
let I = 0;

function x(e) {
  let {
memberStoreProps: {
  groups: t,
  rows: n,
  version: I
},
channelId: x,
guildId: T
  } = e, [v, N] = i.useState(!1), {
requestId: S,
entries: Z,
impressionCappedEntryIds: A
  } = (0, m.Z)(x), M = (0, a.e7)([h.Z], () => h.Z.hidden), b = (0, a.e7)([c.Z], () => c.Z.isFocused()), R = (0, a.e7)([r.Z], () => r.Z.getChannel(x)), j = (0, a.e7)([o.Z], () => o.Z.getGuild(T), [T]), L = (0, p.E)(j), P = null != L && L && (null == R ? void 0 : R.isForumChannel()) === !1, [O, y, D, k] = i.useMemo(() => {
let e;
if (null == Z || 0 === Z.length || null == S || !P)
  return [
    t,
    n,
    I
  ];
let i = v ? Z.length : 3,
  a = Z.slice(0, i);
e = M ? [{
  type: s.so.HIDDEN_CONTENT_INVENTORY
}] : a.map(e => ({
  type: s.so.CONTENT_INVENTORY,
  entry: e,
  requestId: S
}));
let l = {
  id: E.G,
  type: s.so.CONTENT_INVENTORY_GROUP,
  key: E.G,
  count: e.length,
  index: n.length,
  title: g.Z.Messages.CONTENT_INVENTORY_MEMBERLIST_GROUP_TITLE,
  onToggleExpand: () => {
    N(e => {
      let t = !e;
      return d.default.track(C.rMx.MEMBERLIST_CONTENT_FEED_TOGGLED, {
        channel_id: x,
        guild_id: T,
        expanded: t
      }), t;
    });
  },
  expanded: v,
  expandedCount: Z.length,
  feedHeight: e.map(_.iZ).reduce((e, t) => e + t, 0)
};
return [
  [
    l,
    ...t
  ],
  [
    ...n,
    l,
    ...e
  ],
  Math.random(),
  e
];
  }, [
x,
Z,
v,
t,
T,
S,
n,
I,
M,
P
  ]), U = i.useRef(0), w = i.useRef(Z), B = i.useRef(), H = i.useRef({
impressionCappedEntryIds: A
  }), G = i.useCallback(e => {
var t;
let n = Math.floor(e / _.YN),
  i = Math.min(null !== (t = null == k ? void 0 : k.length) && void 0 !== t ? t : 0, n);
U.current = Math.max(U.current, i);
  }, [k]);
  return i.useEffect(() => {
w.current = Z;
  }, [Z]), i.useEffect(() => {
H.current = {
  impressionCappedEntryIds: A
};
  }, [A]), i.useEffect(() => (U.current = 0, B.current = Date.now(), () => {
var e, t;
if (null == S || null == B.current || Date.now() - B.current < 3000)
  return;
let n = null !== (t = null === (e = w.current) || void 0 === e ? void 0 : e.map(e => e.id)) && void 0 !== t ? t : [],
  i = n.slice(0, U.current);
if (!M && !!b && !!P)
  d.default.track(C.rMx.RANKING_ITEMS_SEEN, {
    request_id: S,
    first_shown_at: B.current,
    item_ids: i,
    surface_type: f.Kd.GUILD_MEMBER_LIST,
    channel_id: x,
    guild_id: T,
    all_item_ids: n,
    impression_capped_item_ids: [...H.current.impressionCappedEntryIds]
  }), (0, u.wm)('useInjectContentInventoryFeed') && l.Z.dispatch({
    type: 'CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS',
    itemIds: i
  });
  }), [
S,
x,
T,
M,
b,
P
  ]), {
groups: O,
rows: y,
version: D,
updateMaxRowSeen: G
  };
}