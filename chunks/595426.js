"use strict";
s.r(t), s.d(t, {
  default: function() {
    return G
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  i = s("414456"),
  n = s.n(i),
  l = s("446674"),
  o = s("77078"),
  u = s("913144"),
  d = s("850068"),
  c = s("583367"),
  _ = s("775433"),
  E = s("642950"),
  T = s("812204"),
  I = s("685665"),
  f = s("619935"),
  S = s("308592"),
  R = s("245187"),
  m = s("102985"),
  A = s("697218"),
  N = s("521012"),
  p = s("599110"),
  C = s("764364"),
  g = s("446488"),
  O = s("456015"),
  P = s("982457"),
  M = s("959905"),
  h = s("154889"),
  L = s("917247"),
  x = s("157829"),
  v = s("254893"),
  D = s("840326"),
  b = s("646718"),
  U = s("49111"),
  j = s("666026"),
  G = function(e) {
    let {
      entrypoint: t = b.PremiumMarketingEntrypoints.UserSettings
    } = e, s = (0, f.useBlockedPaymentsConfig)(), {
      sourceAnalyticsLocations: i,
      analyticsLocations: G
    } = (0, I.default)(T.default.PREMIUM_MARKETING), y = (0, l.useStateFromStores)([N.default], () => N.default.hasFetchedSubscriptions()), B = (0, l.useStateFromStores)([A.default], () => A.default.getCurrentUser()), k = (0, L.usePremiumTrialOffer)(), H = (0, h.usePremiumDiscountOffer)(), F = (0, S.useSubscriptionPlansLoaded)(), [K, W] = r.useState(!0), w = r.useRef(0), V = (0, C.isPremiumExactly)(B, b.PremiumTypes.TIER_2), Y = (0, M.useLocalizedPromoQuery)(), z = null == Y ? void 0 : Y.countryCode, X = (0, l.useStateFromStores)([g.default], () => g.default.hasFetched);
    r.useEffect(() => {
      !X && d.getNitroAffinity()
    }, [X]), r.useEffect(() => {
      u.default.wait(async () => {
        let e = Date.now();
        await Promise.all([d.fetchSubscriptions(), (0, c.fetchGuildBoostSlots)(), d.fetchPaymentSources(), (0, _.fetchPremiumSubscriptionPlans)(z, null, U.RevenueSurfaces.DISCOVERY)]), w.current = Date.now() - e, W(!1)
      })
    }, [z]), r.useEffect(() => {
      if (s && (null != k || null != H)) {
        let e = (0, x.shouldHitUserOfferEndPoints)("PremiumMarketingPage");
        e ? (0, O.acknowledgeUserOffer)(k, H) : null != k && null == k.expires_at && P.default.acknowledgeUserTrialOffer(k)
      }
    }, [s, k, H]), r.useEffect(() => {
      !K && p.default.track(U.AnalyticEvents.PREMIUM_MARKETING_PAGE_VIEWED, {
        location_stack: i,
        load_duration_ms: w.current
      })
    }, [i, K]);
    let Q = (0, l.useStateFromStores)([m.default], () => m.default.enabled);
    if (Q) return (0, a.jsx)(E.default, {});
    if (s) return (0, a.jsx)(R.BlockedPaymentsContentSettings, {});
    let J = t === b.PremiumMarketingEntrypoints.ApplicationStoreHome;
    return J && V ? (0, a.jsx)(I.AnalyticsLocationProvider, {
      value: G,
      children: (0, a.jsx)(D.default, {})
    }) : y && F && !K ? (0, a.jsx)(I.AnalyticsLocationProvider, {
      value: G,
      children: (0, a.jsx)(v.default, {
        entrypoint: t
      })
    }) : (0, a.jsx)("div", {
      className: n(j.container, j.loading),
      children: (0, a.jsx)(o.Spinner, {})
    })
  }