"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryTopPicks: function() {
    return L
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("348327"),
  i = n.n(l),
  r = n("718017"),
  o = n("143927"),
  u = n("71970"),
  d = n("481060"),
  c = n("442837"),
  f = n("224706"),
  E = n("963202"),
  h = n("229765"),
  _ = n("231467"),
  C = n("480222"),
  S = n("807933"),
  m = n("10473"),
  p = n("702646"),
  I = n("207796"),
  T = n("543550"),
  g = n("976757"),
  A = n("308083"),
  N = n("689938"),
  v = n("548290");
let R = {
  [I.ClanDiscoveryMode.PLAYSTYLE]: S.PlayStyleSelector,
  [I.ClanDiscoveryMode.TRAITS]: S.TraitSelector,
  [I.ClanDiscoveryMode.GAMES]: S.GameSelector
};

function L(e) {
  let {
    limit: t
  } = e, n = (0, I.useClanDiscoveryUIStore)(I.buildSearchCriteriaFromUIState, i()), l = (0, I.useClanDiscoveryUIStore)(e => e.selectedTraits, o.default), r = (0, c.useStateFromStores)([m.default], () => m.default.getSearchResult(n), [n]), f = s.useMemo(() => {
    if ((0, g.isLoadedSearchResult)(r)) {
      let e = r.items;
      return null != t ? e.slice(0, t) : e
    }
    return null
  }, [t, r]);
  return null == f ? null : (0, a.jsxs)("div", {
    className: v.topPicks,
    children: [(0, a.jsxs)("div", {
      className: v.topPicksHeader,
      children: [(0, a.jsxs)("div", {
        className: v.topPicksTitle,
        children: [(0, a.jsx)(u.TrophyIcon, {
          color: "currentColor"
        }), (0, a.jsx)(d.Heading, {
          variant: "heading-md/medium",
          color: "header-primary",
          children: N.default.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE
        })]
      }), (0, a.jsx)("div", {
        className: v.topPicksSpacer
      }), (0, a.jsx)(d.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: N.default.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
      })]
    }), (0, a.jsx)("div", {
      className: v.topPicksContent,
      children: f.map((e, t) => (0, a.jsx)(_.default, {
        clan: e,
        affinity: (0, g.getClanDiscoveryAffinity)(e, n),
        traitsToHighlight: l,
        className: v.card,
        index: t
      }, e.id))
    })]
  })
}
let O = s.memo(function() {
  let e = (0, I.useClanDiscoveryUIStore)(e => e.mode, o.default),
    [, t] = s.useState(0),
    n = (0, r.useTransition)([e], {
      key: e => e,
      config: {
        mass: 1,
        tension: 280,
        friction: 20,
        clamp: !0
      },
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      },
      onRest: () => t(e => e + 1)
    }),
    l = s.useCallback(e => {
      let t = R[e];
      return null == t ? null : (0, a.jsx)(C.default, {
        children: (0, a.jsx)(t, {})
      })
    }, []);
  switch (e) {
    case I.ClanDiscoveryMode.ADMIN_UPSELL:
      return (0, a.jsx)(T.ClanDiscoveryAdminContainer, {});
    case I.ClanDiscoveryMode.GET_STARTED:
      return (0, a.jsx)(T.ClanDiscoveryUserContainer, {});
    case I.ClanDiscoveryMode.DISCOVERY:
    case I.ClanDiscoveryMode.GAMES:
    case I.ClanDiscoveryMode.PLAYSTYLE:
    case I.ClanDiscoveryMode.TRAITS:
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(d.ScrollerAuto, {
          fade: !0,
          className: v.scroller,
          children: [(0, a.jsx)(p.default, {}), (0, a.jsx)("div", {
            className: v.content,
            children: (0, a.jsx)(L, {})
          })]
        }), (0, a.jsx)("div", {
          children: n((e, t) => (0, a.jsx)(r.animated.div, {
            style: e,
            children: l(t)
          }, t))
        })]
      })
  }
});
t.default = s.memo(function() {
  return ! function() {
    let e = (0, I.useClanDiscoveryUIStore)(e => e.game, o.default),
      t = (0, I.useClanDiscoveryUIStore)(e => e.setGame, o.default),
      n = (0, I.useClanDiscoveryUIStore)(e => e.setSelectedGames, o.default),
      a = (0, I.useClanDiscoveryUIStore)(e => e.selectedGames, o.default),
      l = (0, I.useClanDiscoveryUIStore)(I.buildSearchCriteriaFromUIState, i()),
      r = (0, E.useClanPrepilotExperimentDefaultGameId)("clan_discovery"),
      {
        defaultGameId: u
      } = (0, E.useClanPilotExperiment)("clan_discovery"),
      d = null != r ? r : u,
      _ = (0, c.useStateFromStores)([m.default], () => m.default.hasLoadedStaticClanDiscovery(e));
    s.useEffect(() => {
      !(a.length > 0) && (d === A.VALORANT_ID ? (t(I.ClanDiscoveryGame.VALORANT), n([d])) : d === A.GENSHIN_ID && (t(I.ClanDiscoveryGame.GENSHIN), n([d])))
    }, [t, n, d, a]), s.useEffect(() => {
      !_ && (0, h.loadStaticClanDiscovery)(e)
    }, [e, _]), s.useEffect(() => {
      _ && (0, h.searchClanDiscovery)(e, l)
    }, [e, l, _]), s.useEffect(() => {
      f.default.getDetectableGames()
    }, [])
  }(), (0, a.jsx)("main", {
    className: v.container,
    children: (0, a.jsx)(O, {})
  })
})