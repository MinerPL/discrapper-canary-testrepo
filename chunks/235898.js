"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
}), a("222007");
var l = a("884691"),
  r = a("65597"),
  s = a("875212"),
  n = a("21526"),
  o = a("853987"),
  i = a("12480"),
  u = a("775416");

function c(e) {
  var t;
  let a = "useFetchCollectiblesCategoriesAndPurchases";
  (0, s.useTriggerDebuggingAA)({
    location: a + " auto on",
    autoTrackExposure: !0
  }), (0, s.useTriggerDebuggingAA)({
    location: a + " auto off",
    autoTrackExposure: !1
  });
  let {
    isFetching: c,
    categories: d,
    error: f
  } = function(e) {
    let t = "useMaybeFetchCollectiblesCategories";
    (0, s.useTriggerDebuggingAA)({
      location: t + " auto on",
      autoTrackExposure: !0
    }), (0, s.useTriggerDebuggingAA)({
      location: t + " auto off",
      autoTrackExposure: !1
    });
    let [a, i, u, c] = (0, r.useStateFromStoresArray)([o.default], () => {
      var e;
      return [o.default.isFetching, o.default.error, null !== (e = o.default.lastFetched) && void 0 !== e ? e : 0, o.default.categories]
    });
    return (0, l.useEffect)(() => {
      !(a || i || Date.now() - u < 6e5) && (0, n.fetchCollectiblesCategories)(e)
    }, [a, u, i, e]), {
      isFetching: a,
      categories: c,
      error: i
    }
  }(e), {
    isClaiming: m,
    fetchError: C,
    claimError: p,
    isFetching: g,
    purchases: h
  } = function() {
    let e = "useFetchPurchases";
    (0, s.useTriggerDebuggingAA)({
      location: e + " auto on",
      autoTrackExposure: !0
    }), (0, s.useTriggerDebuggingAA)({
      location: e + " auto off",
      autoTrackExposure: !1
    });
    let [t, a, o, c, d] = (0, r.useStateFromStoresArray)([u.default], () => [u.default.isFetching, u.default.isClaiming, u.default.fetchError, u.default.claimError, u.default.purchases]), {
      shouldFakePurchaseSuccessFlowLocally: f
    } = (0, i.default)({
      location: "useFetchPurchases"
    });
    return (0, l.useEffect)(() => {
      (!f || !(d.size > 0)) && (0, n.fetchCollectiblesPurchases)()
    }, [f]), {
      isClaiming: a,
      fetchError: o,
      claimError: c,
      isFetching: t,
      purchases: d
    }
  }(), E = null !== (t = null != f ? f : C) && void 0 !== t ? t : p;
  return {
    isFetching: c || g,
    isFetchingCategories: c,
    isFetchingPurchases: g,
    isClaiming: m,
    categories: d,
    purchases: h,
    error: E
  }
}