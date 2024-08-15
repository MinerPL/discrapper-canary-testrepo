function s(e) {
	let t;
	let n = !1;
	return function () {
		for (var s = arguments.length, a = Array(s), r = 0; r < s; r++) a[r] = arguments[r];
		return !n && ((n = !0), (t = e(...a))), t;
	};
}
n.d(t, {
	h: function () {
		return s;
	}
}),
	n(47120);
