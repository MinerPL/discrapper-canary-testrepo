n.d(t, {
	Z: function () {
		return m;
	}
});
var i = n(470079),
	a = n(442837),
	s = n(367907),
	l = n(906732),
	r = n(703656),
	o = n(626135),
	c = n(730647),
	u = n(289393),
	d = n(934826),
	h = n(981631);
function m(e) {
	var t;
	let { guildId: n, groupListingId: m, location: p, relevantSubscriptionListingIds: _ } = e,
		f = (0, c.f)('useTrackRoleSubscriptionUpsellAnalytics'),
		{ activeSubscription: E } = (0, d.Z)(m),
		C = null != E,
		g = (0, a.Wu)(
			[u.Z],
			() =>
				(null != _ ? _ : []).filter((e) => {
					var t;
					return (null === (t = u.Z.getSubscriptionListing(e)) || void 0 === t ? void 0 : t.published) === !0;
				}),
			[_]
		),
		{ analyticsLocations: I } = (0, l.ZP)(null !== (t = (0, r.DR)()) && void 0 !== t ? t : []),
		x = i.useRef(!1);
	i.useEffect(() => {
		f &&
			null != m &&
			null != g &&
			!x.current &&
			((x.current = !0),
			o.default.track(h.rMx.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, {
				role_subscription_group_listing_id: m,
				role_subscription_listing_ids: g,
				is_premium_member: C,
				location_stack: I,
				location: p,
				...(0, s.hH)(n)
			}));
	}, [n, m, f, p, g, C, I]);
}
