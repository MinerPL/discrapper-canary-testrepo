"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  },
  useFetchPurchases: function() {
    return c
  },
  useMaybeFetchCollectiblesCategories: function() {
    return _
  }
}), n("47120");
var i = n("470079"),
  r = n("399606"),
  a = n("634894"),
  s = n("335131"),
  o = n("597688"),
  l = n("337679"),
  u = n("1870"),
  d = n("617452");

function _(e) {
  let t = "useMaybeFetchCollectiblesCategories";
  (0, a.useTriggerDebuggingAA)({
    location: t + " auto on",
    autoTrackExposure: !0
  }), (0, a.useTriggerDebuggingAA)({
    location: t + " auto off",
    autoTrackExposure: !1
  });
  let n = (0, d.useShopBundleEnabled)("useMaybeFetchCollectiblesCategories"),
    [l, u, _, c] = (0, r.useStateFromStoresArray)([o.default], () => {
      var e;
      return [o.default.isFetchingCategories, o.default.error, null !== (e = o.default.lastFetched) && void 0 !== e ? e : 0, o.default.categories]
    });
  return (0, i.useEffect)(() => {
    !(l || u || Date.now() - _ < 6e5) && (0, s.fetchCollectiblesCategories)({
      ...e,
      includeBundles: n
    })
  }, [l, _, u, e, n]), {
    isFetching: l,
    categories: c,
    error: u
  }
}

function c() {
  let e = "useFetchPurchases";
  (0, a.useTriggerDebuggingAA)({
    location: e + " auto on",
    autoTrackExposure: !0
  }), (0, a.useTriggerDebuggingAA)({
    location: e + " auto off",
    autoTrackExposure: !1
  });
  let [t, n, o, d, _] = (0, r.useStateFromStoresArray)([u.default], () => [u.default.isFetching, u.default.isClaiming, u.default.fetchError, u.default.claimError, u.default.purchases]), {
    shouldFakePurchaseSuccessFlowLocally: c
  } = (0, l.default)({
    location: "useFetchPurchases"
  });
  return (0, i.useEffect)(() => {
    (!c || !(_.size > 0)) && (0, s.fetchCollectiblesPurchases)()
  }, [c]), {
    isClaiming: n,
    fetchError: o,
    claimError: d,
    isFetching: t,
    purchases: _
  }
}

function E(e) {
  var t;
  let n = "useFetchCollectiblesCategoriesAndPurchases";
  (0, a.useTriggerDebuggingAA)({
    location: n + " auto on",
    autoTrackExposure: !0
  }), (0, a.useTriggerDebuggingAA)({
    location: n + " auto off",
    autoTrackExposure: !1
  });
  let {
    isFetching: i,
    categories: r,
    error: s
  } = _(e), {
    isClaiming: o,
    fetchError: l,
    claimError: u,
    isFetching: d,
    purchases: E
  } = c();
  return {
    isFetching: i || d,
    isFetchingCategories: i,
    isFetchingPurchases: d,
    isClaiming: o,
    categories: r,
    purchases: E,
    error: null !== (t = null != s ? s : l) && void 0 !== t ? t : u
  }
}