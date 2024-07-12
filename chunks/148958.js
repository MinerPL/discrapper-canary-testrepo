t.d(n, {
  h: function() {
return c;
  }
}), t(47120), t(653041);
var i = t(470079),
  l = t(442837),
  a = t(581364),
  r = t(675478),
  s = t(709054),
  o = t(822245);

function c(e, n) {
  i.useEffect(() => {
r.DZ.loadIfNecessary();
  }, []);
  let t = (0, l.e7)([o.Z], () => o.Z.getApplicationFrecencyWithoutLoadingLatest()),
c = i.useMemo(() => null == n || 0 === n.length ? e : e.map(e => {
  var t;
  return {
    ...e,
    isUserApp: null !== (t = null == n ? void 0 : n.some(n => n.application.id === e.id)) && void 0 !== t && t
  };
}), [
  e,
  n
]),
u = i.useMemo(() => null == n ? void 0 : n.filter(n => !e.some(e => e.id === n.application.id)), [
  e,
  n
]),
d = i.useMemo(() => {
  var e;
  null == u || u.forEach(e => {
    let n = s.default.extractTimestamp(e.id);
    null == t.getEntry(e.application.id) && t.track(e.application.id, n);
  }), t.compute();
  let n = null !== (e = null == u ? void 0 : u.map(e => (0, a.X0)(e.application, !0))) && void 0 !== e ? e : [],
    i = [...c];
  return i.push(...n), i.sort((e, n) => {
    var i, l;
    let a = (null !== (i = t.getScore(n.id)) && void 0 !== i ? i : 0) - (null !== (l = t.getScore(e.id)) && void 0 !== l ? l : 0);
    return 0 !== a ? a : e.name.localeCompare(n.name);
  }), i;
}, [
  c,
  t,
  u
]);
  return i.useMemo(() => {
let e, i;
null == n || n.forEach(n => {
  let t = s.default.extractTimestamp(n.id);
  (null == i || t > i) && (e = n, i = t);
}), c.forEach(n => {
  var l, a;
  let r = Math.max(...null !== (a = null === (l = t.getEntry(n.id)) || void 0 === l ? void 0 : l.recentUses) && void 0 !== a ? a : []);
  (null == i || r > i) && (e = n, i = r);
});
let l = d.filter(n => {
  var t, i;
  return i = n.id === (null == e ? void 0 : null === (t = e.application) || void 0 === t ? void 0 : t.id), i;
});
return [
  ...l,
  ...d.filter(n => {
    var t, i;
    return i = n.id !== (null == e ? void 0 : null === (t = e.application) || void 0 === t ? void 0 : t.id), i;
  })
];
  }, [
d,
c,
t,
n
  ]);
}