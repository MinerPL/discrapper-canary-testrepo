n.d(t, {
	V: function () {
		return c;
	},
	a: function () {
		return d;
	}
}),
	n(47120);
var r = n(442837),
	i = n(710845),
	a = n(853872),
	s = n(509545),
	o = n(78839),
	l = n(474936);
new i.Z('useSubscriptionPlansLoaded');
let u = (e) => {};
function c() {
	let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.YQ];
	return (0, r.e7)([a.Z, s.Z, o.ZP], () => d(e, [a.Z, s.Z, o.ZP]), [e]);
}
function d() {
	var e;
	let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.YQ],
		[n, r, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, s.Z, o.ZP],
		c = n.paymentSourceIds,
		d = n.defaultPaymentSourceId,
		_ = r.isLoadedForSKUs(t),
		E = null === (e = i.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.paymentSourceId;
	if (null != E && !r.hasPaymentSourceForSKUIds(E, t)) return u('subscription payment source '.concat(E, ' not loaded for ').concat(t)), !1;
	if (null != d && !r.hasPaymentSourceForSKUIds(d, t)) return u('default payment source '.concat(d, ' not loaded for ').concat(t)), !1;
	for (let e of c) if (!r.hasPaymentSourceForSKUIds(e, t)) return u('payment source '.concat(e, ' not loaded for ').concat(t)), !1;
	return u('isLoadedForSKUs '.concat(_)), _;
}
