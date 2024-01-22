"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
}), a("222007");
var l = a("884691"),
  s = a("65597"),
  r = a("875212"),
  n = a("21526"),
  i = a("853987"),
  o = a("775416");

function c() {
  var e;
  let t = "useFetchCollectiblesCategoriesAndPurchases";
  (0, r.useTriggerDebuggingAA)({
    location: t + " auto on",
    autoTrackExposure: !0
  }), (0, r.useTriggerDebuggingAA)({
    location: t + " auto off",
    autoTrackExposure: !1
  });
  let {
    isFetching: a,
    categories: c,
    error: u
  } = function() {
    let e = "useMaybeFetchCollectiblesCategories";
    (0, r.useTriggerDebuggingAA)({
      location: e + " auto on",
      autoTrackExposure: !0
    }), (0, r.useTriggerDebuggingAA)({
      location: e + " auto off",
      autoTrackExposure: !1
    });
    let [t, a, o, c] = (0, s.useStateFromStoresArray)([i.default], () => {
      var e;
      return [i.default.isFetching, i.default.error, null !== (e = i.default.lastFetched) && void 0 !== e ? e : 0, i.default.categories]
    });
    return (0, l.useEffect)(() => {
      !(t || a || Date.now() - o < 6e5) && (0, n.fetchCollectiblesCategories)()
    }, [t, o, a]), {
      isFetching: t,
      categories: c,
      error: a
    }
  }(), {
    isClaiming: d,
    fetchError: f,
    claimError: m,
    isFetching: C,
    purchases: p
  } = function() {
    let e = "useFetchPurchases";
    (0, r.useTriggerDebuggingAA)({
      location: e + " auto on",
      autoTrackExposure: !0
    }), (0, r.useTriggerDebuggingAA)({
      location: e + " auto off",
      autoTrackExposure: !1
    });
    let [t, a, i, c, u] = (0, s.useStateFromStoresArray)([o.default], () => [o.default.isFetching, o.default.isClaiming, o.default.fetchError, o.default.claimError, o.default.purchases]);
    return (0, l.useEffect)(() => {
      (0, n.fetchCollectiblesPurchases)()
    }, []), {
      isClaiming: a,
      fetchError: i,
      claimError: c,
      isFetching: t,
      purchases: u
    }
  }(), g = null !== (e = null != u ? u : f) && void 0 !== e ? e : m;
  return {
    isFetching: a || C,
    isFetchingCategories: a,
    isFetchingPurchases: C,
    isClaiming: d,
    categories: c,
    purchases: p,
    error: g
  }
}