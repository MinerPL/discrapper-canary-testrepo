"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("570140"),
  u = s("355467"),
  c = s("179360"),
  S = s("821849"),
  E = s("15640"),
  T = s("314684"),
  f = s("899667"),
  m = s("853872"),
  _ = s("78839"),
  g = s("783739"),
  h = s("981631"),
  I = s("269779");

function N() {
  n.useEffect(() => {
    d.default.wait(() => {
      u.fetchSubscriptions(), u.fetchPaymentSources(), (0, c.fetchGuildBoostSlots)(), (0, S.fetchPremiumSubscriptionPlans)(null, null, h.RevenueSurfaces.DISCOVERY), (0, c.fetchAppliedGuildBoostsForUser)(!0)
    })
  }, []);
  let {
    hasFetchedSubscriptions: e,
    premiumSubscription: t
  } = (0, r.useStateFromStoresObject)([_.default], () => ({
    hasFetchedSubscriptions: _.default.hasFetchedSubscriptions(),
    premiumSubscription: _.default.getPremiumTypeSubscription()
  })), s = (0, E.useSubscriptionPlansLoaded)(), l = (0, r.useStateFromStores)([m.default], () => m.default.hasFetchedPaymentSources), N = (0, r.useStateFromStores)([f.default], () => f.default.isFetchingCurrentUserAppliedBoosts);
  return ((0, T.useFetchEntitlementsForTenureReward)(), e && s && l && !N) ? (0, a.jsxs)("div", {
    className: I.container,
    children: [(0, a.jsx)("div", {
      className: I.background
    }), (0, a.jsx)("div", {
      className: I.content,
      children: (0, a.jsx)(g.default, {
        premiumSubscription: t
      })
    })]
  }) : (0, a.jsx)("div", {
    className: i()(I.container, I.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}