"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
}), a("222007");
var r = a("884691"),
  s = a("65597"),
  l = a("875212"),
  n = a("21526"),
  i = a("853987"),
  o = a("12480"),
  c = a("775416");

function u(e) {
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
    isFetching: u,
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
    let [a, o, c, u] = (0, s.useStateFromStoresArray)([i.default], () => {
      var e;
      return [i.default.isFetching, i.default.error, null !== (e = i.default.lastFetched) && void 0 !== e ? e : 0, i.default.categories]
    });
    return (0, r.useEffect)(() => {
      !(a || o || Date.now() - c < 6e5) && (0, n.fetchCollectiblesCategories)(e)
    }, [a, c, o, e]), {
      isFetching: a,
      categories: u,
      error: o
    }
  }(e), {
    isClaiming: m,
    fetchError: p,
    claimError: g,
    isFetching: C,
    purchases: h
  } = function() {
    let e = "useFetchPurchases";
    (0, l.useTriggerDebuggingAA)({
      location: e + " auto on",
      autoTrackExposure: !0
    }), (0, l.useTriggerDebuggingAA)({
      location: e + " auto off",
      autoTrackExposure: !1
    });
    let [t, a, i, u, d] = (0, s.useStateFromStoresArray)([c.default], () => [c.default.isFetching, c.default.isClaiming, c.default.fetchError, c.default.claimError, c.default.purchases]), {
      shouldFakePurchaseSuccessFlowLocally: f
    } = (0, o.default)({
      location: "useFetchPurchases"
    });
    return (0, r.useEffect)(() => {
      (!f || !(d.size > 0)) && (0, n.fetchCollectiblesPurchases)()
    }, [f]), {
      isClaiming: a,
      fetchError: i,
      claimError: u,
      isFetching: t,
      purchases: d
    }
  }(), E = null !== (t = null != f ? f : p) && void 0 !== t ? t : g;
  return {
    isFetching: u || C,
    isFetchingCategories: u,
    isFetchingPurchases: C,
    isClaiming: m,
    categories: d,
    purchases: h,
    error: E
  }
}