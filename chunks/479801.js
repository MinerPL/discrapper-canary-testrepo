"use strict";
n.d(t, {
  e: function() {
    return _
  }
}), n(47120);
var i = n(470079),
  r = n(442837),
  s = n(634894),
  o = n(353926),
  a = n(335131),
  l = n(597688),
  u = n(617452);

function _(e) {
  let t = "useMaybeFetchCollectiblesCategories";
  (0, s.j)({
    location: t + " auto on",
    autoTrackExposure: !0
  }), (0, s.j)({
    location: t + " auto off",
    autoTrackExposure: !1
  });
  let n = (0, r.e7)([o.Z], () => o.Z.hasLoadedExperiments),
    _ = (0, u.e)("useMaybeFetchCollectiblesCategories"),
    [d, c, E, I, T] = (0, r.Wu)([l.Z], () => {
      var e;
      return [l.Z.isFetchingCategories, l.Z.lastFetchOptions, l.Z.error, null !== (e = l.Z.lastSuccessfulFetch) && void 0 !== e ? e : 0, l.Z.categories]
    });
  return (0, i.useEffect)(() => {
    if (!n || d || E) return;
    let t = {
        ...e,
        includeBundles: _
      },
      i = !(0, a.oc)(c, t),
      r = Date.now() - I < 6e5;
    (i || !r) && (0, a.F$)(t)
  }, [n, d, c, I, e, E, _]), {
    isFetching: d,
    categories: T,
    error: E,
    refreshCategories: (0, i.useCallback)(() => {
      let t = {
        ...e,
        includeBundles: _
      };
      (0, a.F$)(t)
    }, [e, _])
  }
}