n.d(t, {
  x: function() {
return E;
  }
});
var i = n(735250),
  s = n(399606),
  a = n(481060),
  r = n(410030),
  l = n(650394),
  o = n(683301),
  c = n(900849),
  d = n(402691),
  u = n(689938),
  _ = n(45304);
let h = [];

function E(e) {
  var t, n;
  let {
searchQuery: E,
categoryId: I,
onSearchClear: m
  } = e, g = (0, s.e7)([o.ZP], () => o.ZP.isFetchingSearch()), p = (0, s.e7)([o.ZP], () => o.ZP.getDiscoverableGuilds().search), T = (0, s.e7)([o.ZP], () => o.ZP.getLoadId()), S = null !== (n = null === (t = p[E]) || void 0 === t ? void 0 : t[I]) && void 0 !== n ? n : h, C = (0, r.ZP)(), {
handleViewGuild: f,
onGuildCardSeen: N
  } = (0, d.g)(I, T);
  return (0, i.jsxs)('section', {
className: _.searchResults,
children: [
  (0, i.jsxs)('div', {
    className: _.searchResultsHeader,
    children: [
      (0, i.jsxs)(a.Button, {
        look: a.ButtonLooks.OUTLINED,
        color: a.ButtonColors.PRIMARY,
        onClick: m,
        innerClassName: _.searchResultsBackButton,
        children: [
          (0, i.jsx)(a.ArrowLargeLeftIcon, {}),
          (0, i.jsx)(a.Text, {
            variant: 'text-md/semibold',
            children: u.Z.Messages.BACK
          })
        ]
      }),
      (0, i.jsx)(a.Heading, {
        variant: 'heading-xl/bold',
        children: u.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({
          query: E
        })
      })
    ]
  }),
  (0, i.jsx)(l.Z, {
    guilds: S.guilds,
    loading: g,
    loadingPlaceholderCount: 12,
    onViewGuild: f,
    loadingGuildId: null,
    theme: C,
    analyticsContext: c.P1.SEARCH,
    onGuildCardSeen: N
  })
]
  });
}