n.d(t, {
	Z: function () {
		return a;
	}
});
var r = n(470079),
	i = n(887490);
function a(e, t, n) {
	let a = r.useCallback(
			(e) => {
				if (t) return !0;
				if (!0 === e.defaultPrevented) return !1;
				let r = n(e);
				return r && (e.preventDefault(), e.stopPropagation()), r;
			},
			[t, n]
		),
		s = r.useCallback(
			(t) => {
				let { event: n } = t;
				!a(n) &&
					(n.preventDefault(),
					n.stopPropagation(),
					null != n.clipboardData && (e.insertData(n.clipboardData), i.bN.focus(e)));
			},
			[e, a]
		);
	return {
		handlePaste: a,
		handleGlobalPaste: s
	};
}
