n.d(t, {
	e: function () {
		return i;
	}
}),
	n(47120);
let r = '_errors';
function i(e) {
	return (function e(t, n) {
		let i = t[r];
		if (null != i && Array.isArray(i)) return i[0];
		for (let [i, a] of Object.entries(t)) {
			if (i !== r && null != a) {
				if ('object' == typeof a) return e(a, null != n ? n : i);
			}
		}
		return null;
	})(e, void 0);
}
