t.d(n, {
	U: function () {
		return u;
	}
});
var r = t(470079),
	i = t(695346),
	o = t(73346),
	l = t(834431);
function u(e, n) {
	let { shouldAnimate: t = !0 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
		u = i.QK.useSetting(),
		a = (0, l.n)(),
		s = t && a && u;
	return r.useMemo(() => {
		if ((null == e ? void 0 : e.image_asset) != null)
			return (0, o._W)(e.application_id, e.image_asset, n, s ? void 0 : 'webp');
	}, [n, e, s]);
}
