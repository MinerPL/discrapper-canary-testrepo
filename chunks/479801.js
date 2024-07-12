n.d(t, {
  e: function() {
return c;
  }
}), n(47120);
var r = n(470079),
  i = n(442837),
  a = n(634894),
  o = n(353926),
  s = n(335131),
  l = n(597688),
  u = n(617452);

function c(e) {
  let t = 'useMaybeFetchCollectiblesCategories';
  (0, a.j)({
location: t + ' auto on',
autoTrackExposure: !0
  }), (0, a.j)({
location: t + ' auto off',
autoTrackExposure: !1
  });
  let n = (0, i.e7)([o.Z], () => o.Z.hasLoadedExperiments),
c = (0, u.e)('useMaybeFetchCollectiblesCategories'),
[d, _, E, f, h] = (0, i.Wu)([l.Z], () => {
  var e;
  return [
    l.Z.isFetchingCategories,
    l.Z.lastFetchOptions,
    l.Z.error,
    null !== (e = l.Z.lastSuccessfulFetch) && void 0 !== e ? e : 0,
    l.Z.categories
  ];
});
  return (0, r.useEffect)(() => {
if (!n || d || E)
  return;
let t = {
    ...e,
    includeBundles: c
  },
  r = !(0, s.oc)(_, t),
  i = Date.now() - f < 600000;
(r || !i) && (0, s.F$)(t);
  }, [
n,
d,
_,
f,
e,
E,
c
  ]), {
isFetching: d,
categories: h,
error: E,
refreshCategories: (0, r.useCallback)(() => {
  let t = {
    ...e,
    includeBundles: c
  };
  (0, s.F$)(t);
}, [
  e,
  c
])
  };
}