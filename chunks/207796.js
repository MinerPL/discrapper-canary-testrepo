n.d(t, {
  GN: function() {
return E;
  },
  PJ: function() {
return p;
  },
  fH: function() {
return f;
  },
  hz: function() {
return i;
  },
  o2: function() {
return a;
  },
  qQ: function() {
return h;
  },
  t1: function() {
return m;
  },
  v0: function() {
return r;
  }
}), n(47120);
var r, i, a, s, o, l, u = n(652874),
  c = n(868888),
  d = n(731965),
  _ = n(433517);
(s = r || (r = {})).ADMIN_UPSELL = 'admin_upsell', s.GET_STARTED = 'get_started', s.DISCOVERY = 'discovery', s.PLAYSTYLE = 'playstyle', s.TRAITS = 'traits', s.GAMES = 'games', s.SAVED_GUILDS = 'saved_guilds', s.PREFERENCES = 'preferences', (o = i || (i = {})).NONE = 'none', o.VALORANT = 'valorant', o.GENSHIN = 'genshin', (l = a || (a = {})).USER_UPSELL = 'user_upsell', l.USER_ONBOARDING = 'user_onboarding';
let E = (0, u.Z)((0, c.tJ)(e => ({
  mode: 'admin_upsell',
  previousMode: 'admin_upsell',
  game: 'none',
  started: !1,
  userUpsellScreen: 'user_upsell',
  savedGuildIds: [],
  selectedGames: [],
  selectedPlaystyle: null,
  selectedTraits: [],
  setSavedGuildIds: t => (0, d.j)(() => e({
savedGuildIds: t
  })),
  setGame: t => (0, d.j)(() => e({
game: t
  })),
  setSelectedGames: t => (0, d.j)(() => e({
selectedGames: t
  })),
  setSelectedPlaystyle: t => (0, d.j)(() => e({
selectedPlaystyle: t,
started: !0
  })),
  setSelectedTraits: t => (0, d.j)(() => e({
selectedTraits: t,
started: !0
  })),
  setUserUpsellScreen: t => (0, d.j)(() => e({
userUpsellScreen: t
  }))
}), {
  name: 'clan-discovery',
  getStorage: () => ({
getItem: e => {
  var t;
  return null !== (t = _.K.get(e)) && void 0 !== t ? t : null;
},
setItem: (e, t) => _.K.set(e, t),
removeItem: e => _.K.remove(e)
  }),
  partialize: e => ({
mode: e.mode,
game: e.game,
started: e.started,
savedGuildIds: e.savedGuildIds,
selectedGames: e.selectedGames,
selectedPlaystyle: e.selectedPlaystyle,
selectedTraits: e.selectedTraits
  })
}));

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
n = E.getState().mode,
r = E.getState().started;
  (0, d.j)(() => E.setState({
mode: e,
previousMode: n,
started: t || r
  }));
}

function h(e, t) {
  let n = E.getState().savedGuildIds,
r = t ? [
  ...n,
  e
] : n.filter(t => t !== e);
  (0, d.j)(() => E.setState({
savedGuildIds: r
  }));
}

function p() {
  (0, d.j)(() => {
E.setState({
  started: !1,
  mode: 'admin_upsell',
  previousMode: 'admin_upsell',
  game: 'none',
  userUpsellScreen: 'user_upsell',
  savedGuildIds: [],
  selectedGames: [],
  selectedPlaystyle: null,
  selectedTraits: []
});
  });
}

function m(e) {
  var t;
  let n = e.selectedGames,
r = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
  return {
games: n,
playstyle: r,
traits: e.selectedTraits
  };
}