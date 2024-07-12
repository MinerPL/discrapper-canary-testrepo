n.d(t, {
  Z: function() {
return d;
  },
  c: function() {
return c;
  }
}), n(47120);
var r = n(470079),
  i = n(399606),
  a = n(634894),
  o = n(335131),
  s = n(337679),
  l = n(1870),
  u = n(267097);

function c() {
  let e = 'useFetchPurchases';
  (0, a.j)({
location: e + ' auto on',
autoTrackExposure: !0
  }), (0, a.j)({
location: e + ' auto off',
autoTrackExposure: !1
  });
  let [t, n, u, c, d] = (0, i.Wu)([l.Z], () => [
l.Z.isFetching,
l.Z.isClaiming,
l.Z.fetchError,
l.Z.claimError,
l.Z.purchases
  ]), {
shouldFakePurchaseSuccessFlowLocally: _
  } = (0, s.Z)({
location: 'useFetchPurchases'
  });
  return (0, r.useEffect)(() => {
if (!_ || !(d.size > 0))
  (0, o.qg)();
  }, [_]), {
isClaiming: n,
fetchError: u,
claimError: c,
isFetching: t,
purchases: d
  };
}

function d(e) {
  var t;
  let n = null == e ? void 0 : e.paymentGateway,
r = 'useFetchCollectiblesCategoriesAndPurchases';
  (0, a.j)({
location: r + ' auto on',
autoTrackExposure: !0
  }), (0, a.j)({
location: r + ' auto off',
autoTrackExposure: !1
  });
  let {
isFetching: i,
categories: o,
error: s,
refreshCategories: l
  } = (0, u.Z)({
paymentGateway: n
  }), {
isClaiming: d,
fetchError: _,
claimError: E,
isFetching: f,
purchases: h
  } = c();
  return {
isFetching: i || f,
isFetchingCategories: i,
isFetchingPurchases: f,
isClaiming: d,
categories: o,
purchases: h,
error: null !== (t = null != s ? s : _) && void 0 !== t ? t : E,
refreshCategories: l
  };
}