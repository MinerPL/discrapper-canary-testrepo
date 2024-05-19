"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryGame: function() {
    return r
  },
  ClanDiscoveryMode: function() {
    return i
  },
  ClanDiscoveryUserScreens: function() {
    return o
  },
  buildSearchCriteriaFromUIState: function() {
    return _
  },
  resetClanDiscovery: function() {
    return h
  },
  setClanDiscoveryMode: function() {
    return E
  },
  useClanDiscoveryUIStore: function() {
    return f
  }
});
var a, s, l, i, r, o, u = n("652874"),
  d = n("868888"),
  c = n("433517");
(a = i || (i = {})).ADMIN_UPSELL = "admin_upsell", a.GET_STARTED = "get_started", a.DISCOVERY = "discovery", a.PLAYSTYLE = "playstyle", a.TRAITS = "traits", a.GAMES = "games", (s = r || (r = {})).VALORANT = "valorant", s.GENSHIN = "genshin", (l = o || (o = {})).USER_UPSELL = "user_upsell", l.USER_ONBOARDING = "user_onboarding";
let f = (0, u.default)((0, d.persist)(e => ({
  mode: "admin_upsell",
  previousMode: "admin_upsell",
  game: "valorant",
  started: !1,
  userUpsellScreen: "user_upsell",
  selectedGames: [],
  selectedPlaystyle: null,
  selectedTraits: [],
  setGame: t => e({
    game: t
  }),
  setSelectedGames: t => e({
    selectedGames: t
  }),
  setSelectedPlaystyle: t => e({
    selectedPlaystyle: t,
    started: !0
  }),
  setSelectedTraits: t => e({
    selectedTraits: t,
    started: !0
  }),
  setUserUpsellScreen: t => e({
    userUpsellScreen: t
  })
}), {
  name: "clan-discovery",
  getStorage: () => ({
    getItem: e => {
      var t;
      return null !== (t = c.Storage.get(e)) && void 0 !== t ? t : null
    },
    setItem: (e, t) => c.Storage.set(e, t),
    removeItem: e => c.Storage.remove(e)
  }),
  partialize: e => ({
    mode: e.mode,
    game: e.game,
    started: e.started,
    selectedGames: e.selectedGames,
    selectedPlaystyle: e.selectedPlaystyle,
    selectedTraits: e.selectedTraits
  })
}));

function E(e) {
  let t = f.getState().mode;
  f.setState({
    mode: e,
    previousMode: t
  })
}

function h() {
  f.setState({
    started: !1,
    mode: "admin_upsell",
    previousMode: "admin_upsell",
    game: "valorant",
    userUpsellScreen: "user_upsell",
    selectedGames: [],
    selectedPlaystyle: null,
    selectedTraits: []
  })
}

function _(e) {
  var t;
  let n = e.selectedGames,
    a = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
  return {
    games: n,
    playstyle: a,
    traits: e.selectedTraits
  }
}