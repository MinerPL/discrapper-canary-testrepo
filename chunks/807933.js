n(47120);
var i = n(735250),
  a = n(470079),
  s = n(348327),
  r = n.n(s),
  l = n(338545),
  o = n(143927),
  c = n(481060),
  d = n(950279),
  u = n(741595),
  _ = n(359380),
  h = n(480222),
  E = n(207796),
  m = n(558831),
  I = n(689938);
let g = {
mass: 1,
tension: 280,
friction: 20,
clamp: !0
  },
  p = {
[E.v0.PLAYSTYLE]: function() {
  let e = (0, E.GN)(e => e.selectedPlaystyle, o.Z),
    [t, n] = a.useState(E.GN.getState().selectedPlaystyle),
    s = a.useCallback(() => {
      E.GN.getState().setSelectedPlaystyle(t);
    }, [t]),
    l = a.useCallback(() => {
      n(e);
    }, [e]),
    c = a.useMemo(() => !r()(t, e), [
      t,
      e
    ]);
  return (0, i.jsx)(h.Z, {
    hasChanges: c,
    onSave: s,
    onReset: l,
    children: (0, i.jsx)(u.Z, {
      title: I.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
      description: I.Z.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
      onUpdatePlaystyle: n,
      playstyle: t
    })
  });
},
[E.v0.TRAITS]: function() {
  let e = (0, E.GN)(e => e.selectedTraits, o.Z),
    [t, n] = a.useState(new Set(e)),
    s = a.useCallback(() => {
      E.GN.getState().setSelectedTraits(Array.from(t));
    }, [t]),
    l = a.useCallback(() => {
      n(new Set(e));
    }, [e]),
    c = a.useMemo(() => !r()(t, e), [
      t,
      e
    ]);
  return (0, i.jsx)(h.Z, {
    hasChanges: c,
    onSave: s,
    onReset: l,
    children: (0, i.jsx)(_.Z, {
      title: I.Z.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
      description: I.Z.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
      onUpdateTraits: n,
      traits: t,
      hidePreview: !0
    })
  });
},
[E.v0.GAMES]: function() {
  let e = (0, E.GN)(e => e.selectedGames, o.Z),
    [t, n] = a.useState(new Set(e)),
    s = a.useCallback(() => {
      E.GN.getState().setSelectedGames(Array.from(t));
    }, [t]),
    l = a.useCallback(() => {
      n(new Set(e));
    }, [e]),
    c = a.useMemo(() => !r()(t, e), [
      t,
      e
    ]);
  return (0, i.jsx)(h.Z, {
    hasChanges: c,
    onSave: s,
    onReset: l,
    children: (0, i.jsx)(d.Z, {
      title: I.Z.Messages.CLAN_DISCOVERY_GAME_TITLE,
      description: I.Z.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
      onUpdateGames: n,
      gameApplicationIds: t
    })
  });
},
[E.v0.PREFERENCES]: function() {
  let e = (0, E.GN)(e => e.selectedGames, o.Z),
    t = (0, E.GN)(e => e.selectedPlaystyle, o.Z),
    n = (0, E.GN)(e => e.selectedTraits, o.Z),
    [s, l] = a.useState(new Set(e)),
    [c, d] = a.useState(t),
    [u, _] = a.useState(new Set(n)),
    I = a.useMemo(() => ({
      games: Array.from(s),
      playstyle: c,
      traits: Array.from(u)
    }), [
      s,
      c,
      u
    ]),
    g = a.useMemo(() => ({
      games: e,
      playstyle: t,
      traits: n
    }), [
      e,
      t,
      n
    ]),
    p = a.useMemo(() => !r()(I, g), [
      g,
      I
    ]),
    T = a.useCallback(() => {
      var e;
      E.GN.getState().setSelectedGames(I.games), E.GN.getState().setSelectedPlaystyle(null !== (e = I.playstyle) && void 0 !== e ? e : null), E.GN.getState().setSelectedTraits(I.traits);
    }, [
      I.games,
      I.playstyle,
      I.traits
    ]),
    S = a.useCallback(() => {
      l(new Set(g.games)), d(g.playstyle), _(new Set(g.traits));
    }, [
      g.games,
      g.playstyle,
      g.traits
    ]);
  return (0, i.jsx)(h.Z, {
    hasChanges: p,
    onSave: T,
    onReset: S,
    children: (0, i.jsx)(m.Z, {
      traits: u,
      gameApplicationIds: s,
      playstyle: c,
      onUpdateGames: l,
      onUpdateTraits: _,
      onUpdatePlaystyle: d
    })
  });
}
  };

function T(e) {
  let {
item: t,
state: n,
cleanUp: s
  } = e, r = a.useMemo(() => {
let e = p[t];
return null == e ? null : (0, i.jsx)(e, {});
  }, [t]), o = (0, c.useSpring)({
from: {
  opacity: 0
},
to: {
  opacity: n === c.TransitionStates.YEETED ? 0 : 1
},
config: g,
onRest: () => {
  n === c.TransitionStates.YEETED && s();
}
  });
  return (0, i.jsx)(l.animated.div, {
style: o,
children: r
  });
}

function S(e) {
  return e;
}

function f(e, t, n, a) {
  return (0, i.jsx)(T, {
item: t,
state: n,
cleanUp: a
  }, e);
}
t.Z = a.memo(function(e) {
  let {
mode: t
  } = e, n = a.useMemo(() => null != p[t] ? [t] : [], [t]);
  return (0, i.jsx)(c.TransitionGroup, {
items: n,
renderItem: f,
getItemKey: S
  });
});