"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
}), a("47120");
var s = a("470079"),
  r = a("399606"),
  l = a("634894"),
  i = a("335131"),
  n = a("597688"),
  o = a("337679"),
  u = a("1870");

function c(e) {
  var t;
  let a = "useFetchCollectiblesCategoriesAndPurchases";
  (0, l.useTriggerDebuggingAA)({
    location: a + " auto on",
    autoTrackExposure: !0
  }), (0, l.useTriggerDebuggingAA)({
    location: a + " auto off",
    autoTrackExposure: !1
  });
  let {
    isFetching: c,
    categories: d,
    error: f
  } = function(e) {
    let t = "useMaybeFetchCollectiblesCategories";
    (0, l.useTriggerDebuggingAA)({
      location: t + " auto on",
      autoTrackExposure: !0
    }), (0, l.useTriggerDebuggingAA)({
      location: t + " auto off",
      autoTrackExposure: !1
    });
    let [a, o, u, c] = (0, r.useStateFromStoresArray)([n.default], () => {
      var e;
      return [n.default.isFetching, n.default.error, null !== (e = n.default.lastFetched) && void 0 !== e ? e : 0, n.default.categories]
    });
    return (0, s.useEffect)(() => {
      !(a || o || Date.now() - u < 6e5) && (0, i.fetchCollectiblesCategories)(e)
    }, [a, u, o, e]), {
      isFetching: a,
      categories: c,
      error: o
    }
  }(e), {
    isClaiming: h,
    fetchError: m,
    claimError: g,
    isFetching: p,
    purchases: C
  } = function() {
    let e = "useFetchPurchases";
    (0, l.useTriggerDebuggingAA)({
      location: e + " auto on",
      autoTrackExposure: !0
    }), (0, l.useTriggerDebuggingAA)({
      location: e + " auto off",
      autoTrackExposure: !1
    });
    let [t, a, n, c, d] = (0, r.useStateFromStoresArray)([u.default], () => [u.default.isFetching, u.default.isClaiming, u.default.fetchError, u.default.claimError, u.default.purchases]), {
      shouldFakePurchaseSuccessFlowLocally: f
    } = (0, o.default)({
      location: "useFetchPurchases"
    });
    return (0, s.useEffect)(() => {
      (!f || !(d.size > 0)) && (0, i.fetchCollectiblesPurchases)()
    }, [f]), {
      isClaiming: a,
      fetchError: n,
      claimError: c,
      isFetching: t,
      purchases: d
    }
  }();
  return {
    isFetching: c || p,
    isFetchingCategories: c,
    isFetchingPurchases: p,
    isClaiming: h,
    categories: d,
    purchases: C,
    error: null !== (t = null != f ? f : m) && void 0 !== t ? t : g
  }
}