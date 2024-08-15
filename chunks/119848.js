a.d(t, {
	Z: function () {
		return u;
	}
}),
	a(627341);
var n = a(735250);
a(470079);
var s = a(278074),
	i = a(219496),
	r = a(346585),
	o = a(363577),
	l = a(81259);
function u(e) {
	let { username: t, oneClickFlow: a = !1 } = e,
		u = (0, o.M)((0, r.R_)(t), !0, !1, a);
	if (null == u) return null;
	let d = (0, s.EQ)(u.type)
		.with(i.K.RATE_LIMIT, () => 'info')
		.with(i.K.ERROR, () => 'error')
		.with(i.K.AVAILABLE, () => 'success')
		.with(i.K.INTERNAL_ERROR, () => null)
		.exhaustive();
	return null == d
		? null
		: (0, n.jsx)(l.Z, {
				type: d,
				children: u.message
			});
}
