n.d(t, {
  Z: function() {
return p;
  }
});
var i = n(470079),
  a = n(442837),
  l = n(367907),
  s = n(906732),
  r = n(703656),
  o = n(626135),
  c = n(730647),
  d = n(289393),
  u = n(934826),
  h = n(981631);

function p(e) {
  var t;
  let {
guildId: n,
groupListingId: p,
location: m,
relevantSubscriptionListingIds: _
  } = e, f = (0, c.f)('useTrackRoleSubscriptionUpsellAnalytics'), {
activeSubscription: E
  } = (0, u.Z)(p), C = null != E, g = (0, a.Wu)([d.Z], () => (null != _ ? _ : []).filter(e => {
var t;
return (null === (t = d.Z.getSubscriptionListing(e)) || void 0 === t ? void 0 : t.published) === !0;
  }), [_]), {
analyticsLocations: I
  } = (0, s.ZP)(null !== (t = (0, r.DR)()) && void 0 !== t ? t : []), x = i.useRef(!1);
  i.useEffect(() => {
f && null != p && null != g && !x.current && (x.current = !0, o.default.track(h.rMx.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, {
  role_subscription_group_listing_id: p,
  role_subscription_listing_ids: g,
  is_premium_member: C,
  location_stack: I,
  location: m,
  ...(0, l.hH)(n)
}));
  }, [
n,
p,
f,
m,
g,
C,
I
  ]);
}