n.d(t, {
  s: function() {
return h;
  }
}), n(47120);
var l = n(470079),
  a = n(442837),
  i = n(38618),
  s = n(51596),
  r = n(516373),
  o = n(314897),
  u = n(580005),
  c = n(987509),
  d = n(601565),
  _ = n(41837);

function h(e) {
  let {
searchText: t,
targetDestination: n,
selectedDestinations: h,
originDestination: f,
includeMissingDMs: E = !1
  } = e, g = (0, a.e7)([o.default], () => o.default.getId()), S = l.useMemo(() => ({
searchOptions: {
  blacklist: new Set(['user:'.concat(g)]),
  frecencyBoosters: !0,
  userFilters: null
}
  }), [g]), {
search: A,
query: I,
results: p
  } = (0, d.Z)(S), m = l.useMemo(() => function(e) {
let {
  query: t,
  queryMode: n
} = (0, s.F_)(e), l = _.M, a = null;
return null != n && _.M.includes(n) && (l = [n], a = n), {
  query: t,
  queryMode: a,
  resultTypes: l
};
  }(t), [t]), {
queryMode: C
  } = m, [N, L] = l.useState(null != h ? h : []);
  l.useLayoutEffect(() => {
let {
  query: e,
  resultTypes: t
} = m;
A({
  query: e,
  resultTypes: t
}), L(null != h ? h : []);
  }, [
A,
m
  ]), (0, r.D)();
  let b = (0, a.e7)([u.Z], () => u.Z.getFrequentlyWithoutFetchingLatest()),
T = (0, a.e7)([i.Z], () => i.Z.isConnected()),
Z = '' !== I;
  return l.useMemo(() => (0, c.ZP)({
results: p,
hasQuery: Z,
queryMode: C,
targetDestination: n,
frequentChannels: b,
selectedDestinations: h,
pinnedDestinations: N,
originDestination: f,
includeMissingDMs: E,
isConnected: T
  }), [
p,
Z,
C,
n,
b,
h,
N,
f,
E,
T
  ]);
}