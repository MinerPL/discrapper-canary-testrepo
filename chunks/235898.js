"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
}), a("222007");
var s = a("884691"),
  l = a("65597"),
  r = a("875212"),
  n = a("21526"),
  o = a("853987"),
  i = a("12480"),
  u = a("775416");

function c(e) {
  var t;
  let a = "useFetchCollectiblesCategoriesAndPurchases";
  (0, r.useTriggerDebuggingAA)({
    location: a + " auto on",
    autoTrackExposure: !0
  }), (0, r.useTriggerDebuggingAA)({
    location: a + " auto off",
    autoTrackExposure: !1
  });
  let {
    isFetching: c,
    categories: d,
    error: f
  } = function(e) {
    let t = "useMaybeFetchCollectiblesCategories";
    (0, r.useTriggerDebuggingAA)({
      location: t + " auto on",
      autoTrackExposure: !0
    }), (0, r.useTriggerDebuggingAA)({
      location: t + " auto off",
      autoTrackExposure: !1
    });
    let [a, i, u, c] = (0, l.useStateFromStoresArray)([o.default], () => {
      var e;
      return [o.default.isFetching, o.default.error, null !== (e = o.default.lastFetched) && void 0 !== e ? e : 0, o.default.categories]
    });
    return (0, s.useEffect)(() => {
      !(a || i || Date.now() - u < 6e5) && (0, n.fetchCollectiblesCategories)(e)
    }, [a, u, i, e]), {
      isFetching: a,
      categories: c,
      error: i
    }
  }(e), {
    isClaiming: m,
    fetchError: p,
    claimError: g,
    isFetching: C,
    purchases: h
  } = function() {
    let e = "useFetchPurchases";
    (0, r.useTriggerDebuggingAA)({
      location: e + " auto on",
      autoTrackExposure: !0
    }), (0, r.useTriggerDebuggingAA)({
      location: e + " auto off",
      autoTrackExposure: !1
    });
    let [t, a, o, c, d] = (0, l.useStateFromStoresArray)([u.default], () => [u.default.isFetching, u.default.isClaiming, u.default.fetchError, u.default.claimError, u.default.purchases]), {
      shouldFakePurchaseSuccessFlowLocally: f
    } = (0, i.default)({
      location: "useFetchPurchases"
    });
    return (0, s.useEffect)(() => {
      (!f || !(d.size > 0)) && (0, n.fetchCollectiblesPurchases)()
    }, [f]), {
      isClaiming: a,
      fetchError: o,
      claimError: c,
      isFetching: t,
      purchases: d
    }
  }(), E = null !== (t = null != f ? f : p) && void 0 !== t ? t : g;
  return {
    isFetching: c || C,
    isFetchingCategories: c,
    isFetchingPurchases: C,
    isClaiming: m,
    categories: d,
    purchases: h,
    error: E
  }
}