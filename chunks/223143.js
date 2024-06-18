"use strict";
n.d(t, {
  Z: function() {
    return d
  },
  c: function() {
    return _
  }
}), n(47120);
var i = n(470079),
  r = n(399606),
  s = n(634894),
  o = n(335131),
  a = n(337679),
  l = n(1870),
  u = n(267097);

function _() {
  let e = "useFetchPurchases";
  (0, s.j)({
    location: e + " auto on",
    autoTrackExposure: !0
  }), (0, s.j)({
    location: e + " auto off",
    autoTrackExposure: !1
  });
  let [t, n, u, _, d] = (0, r.Wu)([l.Z], () => [l.Z.isFetching, l.Z.isClaiming, l.Z.fetchError, l.Z.claimError, l.Z.purchases]), {
    shouldFakePurchaseSuccessFlowLocally: c
  } = (0, a.Z)({
    location: "useFetchPurchases"
  });
  return (0, i.useEffect)(() => {
    if (!c || !(d.size > 0))(0, o.qg)()
  }, [c]), {
    isClaiming: n,
    fetchError: u,
    claimError: _,
    isFetching: t,
    purchases: d
  }
}

function d(e) {
  var t;
  let n = null == e ? void 0 : e.paymentGateway,
    i = "useFetchCollectiblesCategoriesAndPurchases";
  (0, s.j)({
    location: i + " auto on",
    autoTrackExposure: !0
  }), (0, s.j)({
    location: i + " auto off",
    autoTrackExposure: !1
  });
  let {
    isFetching: r,
    categories: o,
    error: a,
    refreshCategories: l
  } = (0, u.Z)({
    paymentGateway: n
  }), {
    isClaiming: d,
    fetchError: c,
    claimError: E,
    isFetching: I,
    purchases: T
  } = _();
  return {
    isFetching: r || I,
    isFetchingCategories: r,
    isFetchingPurchases: I,
    isClaiming: d,
    categories: o,
    purchases: T,
    error: null !== (t = null != a ? a : c) && void 0 !== t ? t : E,
    refreshCategories: l
  }
}