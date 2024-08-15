n.d(t, {
	j0: function () {
		return f;
	},
	mY: function () {
		return E;
	},
	on: function () {
		return _;
	}
}),
	n(47120);
var r = n(442837),
	i = n(652515),
	a = n(200876),
	s = n(674180),
	o = n(160404),
	l = n(430824),
	u = n(772021),
	c = n(981631);
function d(e) {
	let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Z, o.Z],
		r = t.getGuild(e);
	if (null == r) return !1;
	let i = (0, a.l)(r),
		s = r.hasFeature(c.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
	return !!((i && s) || n.isViewingServerShop(e)) || !1;
}
function _(e, t) {
	return !!d(e) || (0, u.U)(e, t);
}
function E(e) {
	let t = (0, u.Z)(e),
		n = (0, r.e7)([l.Z, o.Z], () => d(e, [l.Z, o.Z]), [e]),
		{ shouldHideGuildPurchaseEntryPoints: i } = (0, s.uP)(e);
	return !i && (n || t);
}
function f(e) {
	let t = E(e),
		n = (0, i.RF)(e, 'useShowRoleSubscriptionsInChannelList');
	return t && !n;
}
