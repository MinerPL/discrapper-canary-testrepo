n.d(t, {
	Z: function () {
		return a;
	}
});
var r = n(470079),
	i = n(718922);
function a(e) {
	let { delay: t, disable: n = !1 } = e,
		a = (0, i.Z)();
	r.useEffect(() => {
		if (t <= 0 || n) return;
		let e = setTimeout(() => {
			a();
		}, t);
		return () => clearTimeout(e);
	}, [t, n, a]);
}
