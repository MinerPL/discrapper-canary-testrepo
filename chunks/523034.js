n.d(t, {
	Z: function () {
		return l;
	}
});
var r = n(442837),
	i = n(270144),
	a = n(171246),
	s = n(621853),
	o = n(981631);
function l(e) {
	var t;
	let { user: n, guildId: l } = e,
		u = (0, r.e7)(
			[s.Z],
			() => {
				var e;
				return null === (e = s.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
			},
			[n]
		),
		{ applicationSubscriptionListingsShown: c } = (0, i.ZP)({
			applicationId: null == u ? void 0 : u.id,
			groupListingId: null == u ? void 0 : u.primarySkuId,
			guildId: l
		}),
		{ activeSubscriptionListing: d, activeEntitlement: _, subscriptionGroupListing: E } = (0, i.F5)(null == u ? void 0 : u.id, l),
		f = null !== (t = null == E ? void 0 : E.sku_flags) && void 0 !== t ? t : 0,
		h = (0, a.KW)(f) || (null != l && l !== o.ME && (0, a.KK)(f)),
		p = null != _;
	return c
		? {
				botUpgraded: p,
				botUpgradeable: !p && c && h,
				activeSubscriptionListing: d,
				subscriptionGroupListing: E
			}
		: {
				botUpgraded: !1,
				botUpgradeable: !1,
				activeSubscriptionListing: null,
				subscriptionGroupListing: null
			};
}
