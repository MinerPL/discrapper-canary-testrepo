"use strict";
s.r(t), s.d(t, {
  default: function() {
    return B
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("414456"),
  i = s.n(n),
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
  R = s("308592"),
  S = s("245187"),
  m = s("102985"),
  N = s("697218"),
  A = s("521012"),
  p = s("599110"),
  C = s("764364"),
  g = s("446488"),
  O = s("456015"),
  P = s("982457"),
  M = s("959905"),
  h = s("154889"),
  L = s("917247"),
  x = s("157829"),
  D = s("254893"),
  v = s("840326"),
  U = s("646718"),
  b = s("49111"),
  j = s("666026"),
  B = function(e) {
    let {
      entrypoint: t = U.PremiumMarketingEntrypoints.UserSettings
    } = e, s = (0, f.useBlockedPaymentsConfig)(), {
      AnalyticsLocationProvider: n,
      sourceAnalyticsLocations: B
    } = (0, I.default)(T.default.PREMIUM_MARKETING), G = (0, l.useStateFromStores)([A.default], () => A.default.hasFetchedSubscriptions()), y = (0, l.useStateFromStores)([N.default], () => N.default.getCurrentUser()), k = (0, L.usePremiumTrialOffer)(), H = (0, h.usePremiumDiscountOffer)(), F = (0, R.useSubscriptionPlansLoaded)(), [w, K] = r.useState(!0), W = r.useRef(0), V = (0, C.isPremiumExactly)(y, U.PremiumTypes.TIER_2), Y = (0, M.useLocalizedPromoQuery)(), z = null == Y ? void 0 : Y.countryCode, X = (0, l.useStateFromStores)([g.default], () => g.default.hasFetched);
    r.useEffect(() => {
      !X && d.getNitroAffinity()
    }, [X]), r.useEffect(() => {
      u.default.wait(async () => {
        let e = Date.now();
        await Promise.all([d.fetchSubscriptions(), (0, c.fetchGuildBoostSlots)(), d.fetchPaymentSources(), (0, _.fetchPremiumSubscriptionPlans)(z, null, b.RevenueSurfaces.DISCOVERY)]), W.current = Date.now() - e, K(!1)
      })
    }, [z]), r.useEffect(() => {
      if (s && (null != k || null != H)) {
        let e = (0, x.shouldHitUserOfferEndPoints)("PremiumMarketingPage");
        e ? (0, O.acknowledgeUserOffer)(k, H) : null != k && null == k.expires_at && P.default.acknowledgeUserTrialOffer(k)
      }
    }, [s, k, H]), r.useEffect(() => {
      !w && p.default.track(b.AnalyticEvents.PREMIUM_MARKETING_PAGE_VIEWED, {
        location_stack: B,
        load_duration_ms: W.current
      })
    }, [B, w]);
    let Q = (0, l.useStateFromStores)([m.default], () => m.default.enabled);
    if (Q) return (0, a.jsx)(E.default, {});
    if (s) return (0, a.jsx)(S.BlockedPaymentsContentSettings, {});
    let Z = t === U.PremiumMarketingEntrypoints.ApplicationStoreHome;
    return Z && V ? (0, a.jsx)(n, {
      children: (0, a.jsx)(v.default, {})
    }) : G && F && !w ? (0, a.jsx)(n, {
      children: (0, a.jsx)(D.default, {
        entrypoint: t
      })
    }) : (0, a.jsx)("div", {
      className: i(j.container, j.loading),
      children: (0, a.jsx)(o.Spinner, {})
    })
  }