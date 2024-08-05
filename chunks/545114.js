n.d(t, {
  Z: function() {
return C;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(117496),
  l = n(766219),
  o = n(801543),
  c = n(88693),
  d = n(212476),
  u = n(611928),
  _ = n(680180),
  h = n(791734),
  E = n(341789),
  I = n(591433),
  m = n(282773),
  g = n(143021),
  p = n(775260),
  T = n(49898),
  S = n(689938),
  f = n(679199);

function C() {
  let e = a.useRef((0, r.P)()),
{
  tabs: t,
  selectedTab: n,
  onSelectTab: C
} = (0, p.Y)(),
{
  onScroll: N,
  scrollPosition: A
} = (0, d.c)(),
v = (0, l.lg)(n),
{
  searchBarState: Z,
  onTabsAvailableWidthChange: L,
  resetSearchBarState: O,
  onCollapsedSearchBarClick: R,
  tabsClassName: x
} = (0, c.U)(),
{
  searchQuery: b,
  onSearchTextChange: P,
  onClearSearch: M,
  onSearchSubmit: D,
  isSearchVisible: y
} = (0, g.H)({
  loadId: e.current,
  onClear: O,
  categoryId: v
}),
j = a.useMemo(() => y ? t.filter(e => {
  let {
    id: t
  } = e;
  return !T.MU.has(t);
}) : t, [
  t,
  y
]),
U = a.useRef(new o.Z(v)),
{
  onGuildCardSeen: G,
  onGuildCardClick: k
} = (0, m.H)({
  guildDiscoveryCardSeenManager: U.current,
  loadId: e.current
});
  a.useEffect(() => {
U.current.flushSeenGuilds(e.current);
  }, [v]);
  let w = a.useMemo(() => {
switch (n) {
  case T.vf.HUBS:
  case T.vf.GUILDS:
    return null;
  default:
    let e = (0, l.vb)(n);
    return (0, i.jsx)(_.Z, {
      query: b,
      placeholder: S.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({
        title: e
      }),
      onTextChange: P,
      onClear: M,
      onSubmit: D,
      onCollapsedClick: R,
      state: Z
    });
}
  }, [
M,
R,
D,
P,
Z,
b,
n
  ]);
  return (0, i.jsxs)('div', {
className: f.container,
children: [
  (0, i.jsxs)(u.ZP, {
    className: y ? f.search : void 0,
    children: [
      !y && (0, i.jsx)(u.z6, {
        scrollPosition: A
      }),
      (0, i.jsx)(u.aV, {
        icon: y ? s.ArrowLargeLeftIcon : s.ServerIcon,
        onClick: y ? M : void 0
      }),
      (0, i.jsx)(h.Z, {
        className: x,
        tabs: j,
        selectedTab: n,
        onTabSelect: C,
        onAvailableWidthChange: L
      }),
      w
    ]
  }),
  y ? (0, i.jsx)(I.Z, {
    loadId: e.current,
    onGuildCardClick: k,
    onGuildCardSeen: G
  }) : (0, i.jsx)(E.Z, {
    loadId: e.current,
    selectedTab: n,
    onScroll: N,
    onGuildCardClick: k,
    onGuildCardSeen: G
  })
]
  });
}