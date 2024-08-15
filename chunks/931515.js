n.d(t, {
  LE: function() {
return I;
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
  d = n(229893),
  u = n(229765),
  _ = n(207796),
  E = n(976757),
  h = n(308083);

function m() {
  return (0, _.GN)(_.t1, s());
}

function I() {
  let e = (0, _.GN)(e => e.setGame, r.Z),
t = (0, _.GN)(e => e.setSelectedGames, r.Z),
n = (0, _.GN)(e => e.selectedGames, r.Z),
a = m(),
s = (0, c.An)({
  location: 'clan_discovery'
}),
E = (0, c.iN)('clan_discovery'),
{
  defaultGameId: I
} = (0, c.nk)('clan_discovery'),
g = null != s ? s : I,
p = function() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = (0, l.e7)([d.Z], () => d.Z.hasLoadedStaticClanDiscovery());
  return i.useEffect(() => {
    e && !t && (0, u.XB)();
  }, [
    t,
    e
  ]), t;
}(!E),
T = (0, l.e7)([d.Z], () => d.Z.isLoading());
  return i.useEffect(() => {
!(n.length > 0) && !E && (g === h.nJ ? (e(_.hz.VALORANT), t([g])) : g === h.xn ? (e(_.hz.GENSHIN), t([g])) : null == g && (e(_.hz.NONE), t([])));
  }, [
e,
t,
g,
n,
E
  ]), i.useEffect(() => {
if (E)
  (0, u.Cg)(a);
else {
  if (!p)
    return;
  (0, u.jc)(a);
}
  }, [
a,
p,
E
  ]), i.useEffect(() => {
o.Z.getDetectableGames();
  }, []), {
loading: T
  };
}

function g() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
n = (0, _.GN)(e => e.savedGuildIds, r.Z),
a = m(),
s = (0, l.e7)([d.Z], () => d.Z.hasLoadedStaticClanDiscovery()),
o = (0, c.iN)('clan_discovery'),
u = (0, l.e7)([d.Z], () => d.Z.getSearchResult(a), [a]),
h = (0, l.Wu)([d.Z], () => t && null != n ? d.Z.getSavedGuildsResult(n) : [], [
  t,
  n
]),
I = i.useMemo(() => {
  if ((0, E.Pw)(u)) {
    let t = u.items;
    return null != e ? t.slice(0, e) : t;
  }
  return [];
}, [
  e,
  u
]);
  return t ? {
loaded: s || o,
clans: h,
searchCriteria: a,
searchResult: {
  items: h,
  loadedAt: Date.now(),
  status: 'loaded'
}
  } : {
loaded: s || o,
clans: I,
searchCriteria: a,
searchResult: u
  };
}