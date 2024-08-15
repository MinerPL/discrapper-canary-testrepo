n.d(t, {
	PZ: function () {
		return r;
	},
	XX: function () {
		return o;
	}
}),
	n(47120);
var r,
	i,
	a = n(601964),
	s = n(981631);
function o(e) {
	let t = new Set(e.features),
		n = t.has(s.oNc.COMMUNITY) && t.has(s.oNc.DISCOVERABLE) ? 'PUBLIC' : 'INVITE_ONLY',
		r = (function (e) {
			return (
				null != e &&
				(e instanceof a.ZP
					? e.premiumSubscriberCount > 0 || e.premiumTier > s.Eu4.NONE
					: null != e.premiumSubscriptionCount && e.premiumSubscriptionCount > 0)
			);
		})(e),
		i = 0;
	if (r) {
		var o;
		i =
			null !== (o = e instanceof a.ZP ? e.premiumSubscriberCount : e.premiumSubscriptionCount) && void 0 !== o ? o : 0;
	}
	let l = e instanceof a.ZP ? e.premiumTier : s.Eu4.NONE;
	return {
		verified: t.has(s.oNc.VERIFIED),
		partnered: t.has(s.oNc.PARTNERED),
		community: t.has(s.oNc.COMMUNITY),
		staff: t.has(s.oNc.INTERNAL_EMPLOYEE_ONLY),
		clan: t.has(s.oNc.CLAN),
		visibility: n,
		premium: r,
		premiumSubscriberCount: i,
		premiumTier: l
	};
}
((i = r || (r = {})).PUBLIC = 'PUBLIC'), (i.INVITE_ONLY = 'INVITE_ONLY');
