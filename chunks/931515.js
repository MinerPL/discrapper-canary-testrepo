"use strict";
n.r(t), n.d(t, {
  useAutoFetchClanDiscoveryResults: function() {
    return _
  },
  useClanDiscoveryList: function() {
    return C
  }
});
var a = n("470079"),
  s = n("348327"),
  l = n.n(s),
  i = n("143927"),
  r = n("442837"),
  o = n("224706"),
  u = n("963202"),
  d = n("229765"),
  c = n("10473"),
  f = n("207796"),
  E = n("976757"),
  h = n("308083");

function _() {
  let e = (0, f.useClanDiscoveryUIStore)(e => e.setGame, i.default),
    t = (0, f.useClanDiscoveryUIStore)(e => e.setSelectedGames, i.default),
    n = (0, f.useClanDiscoveryUIStore)(e => e.selectedGames, i.default),
    s = (0, f.useClanDiscoveryUIStore)(f.buildSearchCriteriaFromUIState, l()),
    E = (0, u.useClanPrepilotExperimentDefaultGameId)({
      location: "clan_discovery"
    }),
    {
      defaultGameId: _
    } = (0, u.useClanPilotExperiment)("clan_discovery"),
    C = null != E ? E : _,
    m = function() {
      let e = (0, r.useStateFromStores)([c.default], () => c.default.hasLoadedStaticClanDiscovery());
      return a.useEffect(() => {
        !e && (0, d.loadStaticClanDiscovery)()
      }, [e]), e
    }();
  a.useEffect(() => {
    !(n.length > 0) && (C === h.VALORANT_ID ? (e(f.ClanDiscoveryGame.VALORANT), t([C])) : C === h.GENSHIN_ID && (e(f.ClanDiscoveryGame.GENSHIN), t([C])))
  }, [e, t, C, n]), a.useEffect(() => {
    m && (0, d.searchClanDiscovery)(s)
  }, [s, m]), a.useEffect(() => {
    o.default.getDetectableGames()
  }, [])
}

function C() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
    t = (0, f.useClanDiscoveryUIStore)(f.buildSearchCriteriaFromUIState, l()),
    n = (0, r.useStateFromStores)([c.default], () => c.default.hasLoadedStaticClanDiscovery()),
    s = (0, r.useStateFromStores)([c.default], () => c.default.getSearchResult(t), [t]);
  return {
    loaded: n,
    clans: a.useMemo(() => {
      if ((0, E.isLoadedSearchResult)(s)) {
        let t = s.items;
        return null != e ? t.slice(0, e) : t
      }
      return []
    }, [e, s]),
    searchCriteria: t,
    searchResult: s
  }
}