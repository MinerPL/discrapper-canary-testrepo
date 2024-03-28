"use strict";
n.r(t), n.d(t, {
  useMonetizationSettings: function() {
    return a
  },
  usePriceTiers: function() {
    return u
  }
});
var r = n("470079"),
  i = n("442837"),
  l = n("584825"),
  s = n("17079"),
  o = n("281320");

function u(e, t) {
  let n = (0, i.useStateFromStores)([o.default], () => o.default.getPriceTiersForGuildAndType(e, t)),
    l = (0, i.useStateFromStores)([o.default], () => o.default.getPriceTiersFetchStateForGuildAndType(e, t));
  return r.useEffect(() => {
    l === o.FetchState.NOT_FETCHED && (0, s.fetchPriceTiers)(e, t)
  }, [e, l, t]), {
    loading: l === o.FetchState.FETCHING,
    priceTiers: n
  }
}

function a(e) {
  let {
    fetchSubscriptionsSettings: t,
    loading: n,
    error: i
  } = (0, l.useFetchSubscriptionsSettings)();
  r.useEffect(() => {
    t(e)
  }, [t, e]);
  let s = (0, l.useSubscriptionsSettings)(e);
  return {
    loaded: null != s && !n,
    subscriptionsSettings: s,
    loading: n,
    error: i
  }
}