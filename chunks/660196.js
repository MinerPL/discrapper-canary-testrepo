"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("470079"),
  l = n("442837"),
  s = n("367907"),
  i = n("906732"),
  r = n("703656"),
  o = n("626135"),
  u = n("730647"),
  d = n("289393"),
  c = n("934826"),
  f = n("981631");

function h(e) {
  var t;
  let {
    guildId: n,
    groupListingId: h,
    location: m,
    relevantSubscriptionListingIds: p
  } = e, E = (0, u.useGroupListingsFetchContext)("useTrackRoleSubscriptionUpsellAnalytics"), {
    activeSubscription: C
  } = (0, c.default)(h), g = null != C, S = (0, l.useStateFromStoresArray)([d.default], () => (null != p ? p : []).filter(e => {
    var t;
    return (null === (t = d.default.getSubscriptionListing(e)) || void 0 === t ? void 0 : t.published) === !0
  }), [p]), {
    analyticsLocations: _
  } = (0, i.default)(null !== (t = (0, r.getLastRouteChangeSourceLocationStack)()) && void 0 !== t ? t : []), T = a.useRef(!1);
  a.useEffect(() => {
    E && null != h && null != S && !T.current && (T.current = !0, o.default.track(f.AnalyticEvents.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, {
      role_subscription_group_listing_id: h,
      role_subscription_listing_ids: S,
      is_premium_member: g,
      location_stack: _,
      location: m,
      ...(0, s.collectGuildAnalyticsMetadata)(n)
    }))
  }, [n, h, E, m, S, g, _])
}