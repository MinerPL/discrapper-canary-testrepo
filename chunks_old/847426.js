"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("884691"),
  l = n("446674"),
  s = n("716241"),
  i = n("685665"),
  r = n("393414"),
  u = n("599110"),
  o = n("257869"),
  d = n("648825"),
  c = n("176687"),
  f = n("49111");

function h(e) {
  var t;
  let {
    guildId: n,
    groupListingId: h,
    location: m,
    relevantSubscriptionListingIds: p
  } = e, E = (0, o.useGroupListingsFetchContext)("useTrackRoleSubscriptionUpsellAnalytics"), {
    activeSubscription: g
  } = (0, c.default)(h), S = null != g, C = (0, l.useStateFromStoresArray)([d.default], () => (null != p ? p : []).filter(e => {
    var t;
    return (null === (t = d.default.getSubscriptionListing(e)) || void 0 === t ? void 0 : t.published) === !0
  }), [p]), {
    analyticsLocations: _
  } = (0, i.default)(null !== (t = (0, r.getLastRouteChangeSourceLocationStack)()) && void 0 !== t ? t : []), I = a.useRef(!1);
  a.useEffect(() => {
    E && null != h && null != C && !I.current && (I.current = !0, u.default.track(f.AnalyticEvents.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, {
      role_subscription_group_listing_id: h,
      role_subscription_listing_ids: C,
      is_premium_member: S,
      location_stack: _,
      location: m,
      ...(0, s.collectGuildAnalyticsMetadata)(n)
    }))
  }, [n, h, E, m, C, S, _])
}