n.d(t, {
	Z: function () {
		return l;
	}
}),
	n(47120);
var r = n(470079),
	i = n(442837),
	a = n(232567),
	s = n(110924),
	o = n(314897);
function l() {
	let [e, t] = (0, i.Wu)([o.default], () => [o.default.isAuthenticated(), null != o.default.getAnalyticsToken()]),
		n = (0, s.Z)(e);
	r.useEffect(() => {
		!n && e && !t && a.k({ withAnalyticsToken: !0 });
	}, [n, e, t]);
}
