n.d(t, {
	U: function () {
		return s;
	}
});
var l = n(626135),
	i = n(91641),
	u = n(959784),
	o = n(987338),
	r = n(981631);
let a = new i.E([u.NR, u.ZI, u.Ob, u.uc, u.m1], o.$P.PAYMENT_FLOW_STARTED, { location: 'payment flow started' });
function s(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
	l.default.track(r.rMx.PAYMENT_FLOW_STARTED, e, t), a.trigger();
}
