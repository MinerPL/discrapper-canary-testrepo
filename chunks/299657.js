"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  n = s.n(r),
  l = s("442837"),
  o = s("481060"),
  u = s("570140"),
  d = s("355467"),
  c = s("179360"),
  _ = s("821849"),
  E = s("497321"),
  T = s("100527"),
  I = s("906732"),
  R = s("211242"),
  S = s("15640"),
  f = s("89057"),
  m = s("246946"),
  N = s("594174"),
  A = s("78839"),
  p = s("626135"),
  C = s("111361"),
  g = s("357355"),
  O = s("937579"),
  P = s("316941"),
  M = s("91802"),
  h = s("104494"),
  L = s("639119"),
  x = s("633361"),
  v = s("2359"),
  D = s("132547"),
  b = s("474936"),
  U = s("981631"),
  j = s("684993");
t.default = function(e) {
  let {
    entrypoint: t = b.PremiumMarketingEntrypoints.UserSettings
  } = e, s = (0, R.useBlockedPaymentsConfig)(), {
    sourceAnalyticsLocations: r,
    analyticsLocations: y
  } = (0, I.default)(T.default.PREMIUM_MARKETING), B = (0, l.useStateFromStores)([A.default], () => A.default.hasFetchedSubscriptions()), G = (0, l.useStateFromStores)([N.default], () => N.default.getCurrentUser()), k = (0, L.usePremiumTrialOffer)(), H = (0, h.usePremiumDiscountOffer)(), F = (0, S.useSubscriptionPlansLoaded)(), [w, W] = i.useState(!0), K = i.useRef(0), V = (0, C.isPremiumExactly)(G, b.PremiumTypes.TIER_2), Y = (0, M.useLocalizedPromoQuery)(), z = null == Y ? void 0 : Y.countryCode, X = (0, l.useStateFromStores)([g.default], () => g.default.hasFetched);
  return (i.useEffect(() => {
    !X && d.getNitroAffinity()
  }, [X]), i.useEffect(() => {
    u.default.wait(async () => {
      let e = Date.now();
      await Promise.all([d.fetchSubscriptions(), (0, c.fetchGuildBoostSlots)(), d.fetchPaymentSources(), (0, _.fetchPremiumSubscriptionPlans)(z, null, U.RevenueSurfaces.DISCOVERY)]), K.current = Date.now() - e, W(!1)
    })
  }, [z]), i.useEffect(() => {
    s && (null != k || null != H) && ((0, x.shouldHitUserOfferEndPoints)("PremiumMarketingPage") ? (0, O.acknowledgeUserOffer)(k, H) : null != k && null == k.expires_at && P.default.acknowledgeUserTrialOffer(k))
  }, [s, k, H]), i.useEffect(() => {
    !w && p.default.track(U.AnalyticEvents.PREMIUM_MARKETING_PAGE_VIEWED, {
      location_stack: r,
      load_duration_ms: K.current
    })
  }, [r, w]), (0, l.useStateFromStores)([m.default], () => m.default.enabled)) ? (0, a.jsx)(E.default, {}) : s ? (0, a.jsx)(f.BlockedPaymentsContentSettings, {}) : t === b.PremiumMarketingEntrypoints.ApplicationStoreHome && V ? (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: y,
    children: (0, a.jsx)(D.default, {})
  }) : B && F && !w ? (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: y,
    children: (0, a.jsx)(v.default, {
      entrypoint: t
    })
  }) : (0, a.jsx)("div", {
    className: n()(j.container, j.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}