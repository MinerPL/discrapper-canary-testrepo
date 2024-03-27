"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("913144"),
  u = s("850068"),
  c = s("583367"),
  S = s("775433"),
  E = s("308592"),
  T = s("359499"),
  f = s("357957"),
  _ = s("521012"),
  m = s("889285"),
  g = s("49111"),
  h = s("263689");

function N() {
  n.useEffect(() => {
    d.default.wait(() => {
      u.fetchSubscriptions(), u.fetchPaymentSources(), (0, c.fetchGuildBoostSlots)(), (0, S.fetchPremiumSubscriptionPlans)(null, null, g.RevenueSurfaces.DISCOVERY)
    })
  }, []);
  let {
    hasFetchedSubscriptions: e,
    premiumSubscription: t
  } = (0, r.useStateFromStoresObject)([_.default], () => ({
    hasFetchedSubscriptions: _.default.hasFetchedSubscriptions(),
    premiumSubscription: _.default.getPremiumTypeSubscription()
  })), s = (0, E.useSubscriptionPlansLoaded)(), l = (0, r.useStateFromStores)([f.default], () => f.default.hasFetchedPaymentSources);
  return ((0, T.useFetchEntitlementsForTenureReward)(), e && s && l) ? (0, a.jsxs)("div", {
    className: h.container,
    children: [(0, a.jsx)("div", {
      className: h.background
    }), (0, a.jsx)("div", {
      className: h.content,
      children: (0, a.jsx)(m.default, {
        premiumSubscription: t
      })
    })]
  }) : (0, a.jsx)("div", {
    className: i(h.container, h.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}