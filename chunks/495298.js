n.d(t, {
	Z: function () {
		return r;
	}
}),
	n(47120);
var s = n(470079),
	a = n(584825),
	i = n(14263);
function r(e) {
	let t = (0, a.qi)(e),
		n = (0, i.Z)(e);
	return s.useMemo(() => {
		let e = 0;
		for (let s of t) {
			let t = null == s ? void 0 : s.role_id;
			if (null != t) {
				let s = null == n ? void 0 : n[t];
				null != s && (e += s);
			}
		}
		return e;
	}, [t, n]);
}
