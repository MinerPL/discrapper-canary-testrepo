n.d(t, {
  GN: function() {
return _;
  },
  PJ: function() {
return E;
  },
  fH: function() {
return h;
  },
  hz: function() {
return l;
  },
  o2: function() {
return o;
  },
  t1: function() {
return I;
  },
  v0: function() {
return r;
  }
});
var i, s, a, r, l, o, c = n(652874),
  d = n(868888),
  u = n(433517);
(i = r || (r = {})).ADMIN_UPSELL = 'admin_upsell', i.GET_STARTED = 'get_started', i.DISCOVERY = 'discovery', i.PLAYSTYLE = 'playstyle', i.TRAITS = 'traits', i.GAMES = 'games', (s = l || (l = {})).VALORANT = 'valorant', s.GENSHIN = 'genshin', (a = o || (o = {})).USER_UPSELL = 'user_upsell', a.USER_ONBOARDING = 'user_onboarding';
let _ = (0, c.Z)((0, d.tJ)(e => ({
  mode: 'admin_upsell',
  previousMode: 'admin_upsell',
  game: 'valorant',
  started: !1,
  userUpsellScreen: 'user_upsell',
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
  name: 'clan-discovery',
  getStorage: () => ({
getItem: e => {
  var t;
  return null !== (t = u.K.get(e)) && void 0 !== t ? t : null;
},
setItem: (e, t) => u.K.set(e, t),
removeItem: e => u.K.remove(e)
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

function h(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
n = _.getState().mode,
i = _.getState().started;
  _.setState({
mode: e,
previousMode: n,
started: t || i
  });
}

function E() {
  _.setState({
started: !1,
mode: 'admin_upsell',
previousMode: 'admin_upsell',
game: 'valorant',
userUpsellScreen: 'user_upsell',
selectedGames: [],
selectedPlaystyle: null,
selectedTraits: []
  });
}

function I(e) {
  var t;
  let n = e.selectedGames,
i = null !== (t = e.selectedPlaystyle) && void 0 !== t ? t : void 0;
  return {
games: n,
playstyle: i,
traits: e.selectedTraits
  };
}