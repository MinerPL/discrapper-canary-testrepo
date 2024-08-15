n.d(t, {
	Z: function () {
		return o;
	}
}),
	n(47120);
var r = n(442837),
	i = n(176919),
	u = n(975060),
	l = n(505649);
function o() {
	let e = (0, r.e7)([u.Z], () => u.Z.error),
		[t, n] = (0, r.Wu)([l.Z], () => [l.Z.error, l.Z.isAwaitingAuthentication]);
	return {
		paymentError: null != t ? t : e,
		paymentAuthenticationState: n ? i.wr.PENDING : null != t ? i.wr.ERROR : i.wr.NONE
	};
}
