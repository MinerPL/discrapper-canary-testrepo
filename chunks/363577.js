a.d(t, {
	M: function () {
		return d;
	}
});
var n = a(470079),
	s = a(392711),
	i = a(399606),
	r = a(986197),
	o = a(654344),
	l = a(135200),
	u = a(346585);
let d = function (e) {
	let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
		a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
		d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
		c = (0, i.e7)([l.Z], () => l.Z.validate(e), [e]),
		E = (0, i.e7)([l.Z], () => l.Z.isRateLimited()),
		_ = (0, o.c)(),
		m = n.useMemo(() => (0, s.debounce)((e) => r.Z.attemptPomelo(e, a ? 'registration' : 'modal', a, d), _), [_, a, d]);
	return (
		n.useEffect(() => {
			t && !E && null == c && '' !== e && m(e);
		}, [t, E, c, e, m]),
		n.useMemo(() => (null != c ? (0, u.ti)(c) : void 0), [c])
	);
};
