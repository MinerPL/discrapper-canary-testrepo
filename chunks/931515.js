n.d(t, {
  LE: function() {
return m;
  },
  Qc: function() {
return g;
  }
});
var i = n(470079),
  a = n(348327),
  s = n.n(a),
  r = n(143927),
  l = n(442837),
  o = n(224706),
  c = n(963202),
  d = n(229765),
  u = n(10473),
  _ = n(207796),
  h = n(976757),
  E = n(308083);

function I() {
  return (0, _.GN)(_.t1, s());
}

function m() {
  let e = (0, _.GN)(e => e.setGame, r.Z),
t = (0, _.GN)(e => e.setSelectedGames, r.Z),
n = (0, _.GN)(e => e.selectedGames, r.Z),
a = I(),
s = (0, c.An)({
  location: 'clan_discovery'
}),
{
  defaultGameId: h
} = (0, c.nk)('clan_discovery'),
m = null != s ? s : h,
g = function() {
  let e = (0, l.e7)([u.Z], () => u.Z.hasLoadedStaticClanDiscovery());
  return i.useEffect(() => {
    !e && (0, d.X)();
  }, [e]), e;
}(),
p = (0, l.e7)([u.Z], () => u.Z.isLoading());
  return i.useEffect(() => {
!(n.length > 0) && (m === E.nJ ? (e(_.hz.VALORANT), t([m])) : m === E.xn && (e(_.hz.GENSHIN), t([m])));
  }, [
e,
t,
m,
n
  ]), i.useEffect(() => {
g && (0, d.j)(a);
  }, [
a,
g
  ]), i.useEffect(() => {
o.Z.getDetectableGames();
  }, []), {
loading: p
  };
}

function g() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
n = (0, _.GN)(e => e.savedGuildIds, r.Z),
a = I(),
s = (0, l.e7)([u.Z], () => u.Z.hasLoadedStaticClanDiscovery()),
o = (0, l.e7)([u.Z], () => u.Z.getSearchResult(a), [a]),
c = (0, l.e7)([u.Z], () => t && null != n ? u.Z.getSavedGuildsResult(n) : [], [
  t,
  n
]),
d = i.useMemo(() => {
  if ((0, h.Pw)(o)) {
    let t = o.items;
    return null != e ? t.slice(0, e) : t;
  }
  return [];
}, [
  e,
  o
]);
  return t ? {
loaded: s,
clans: c,
searchCriteria: a,
searchResult: {
  items: c,
  loadedAt: Date.now(),
  status: 'loaded'
}
  } : {
loaded: s,
clans: d,
searchCriteria: a,
searchResult: o
  };
}