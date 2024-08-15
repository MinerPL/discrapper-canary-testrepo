t.d(n, {
	C: function () {
		return function e(n) {
			return null == n
				? n
				: Object.keys(n).reduce((t, i) => {
						let o = (0, r.camelCase)(i);
						return 'object' != typeof n[i] || Array.isArray(n[i]) ? (t[o] = n[i]) : (t[o] = e(n[i])), t;
					}, {});
		};
	},
	X: function () {
		return function e(n) {
			return null == n
				? n
				: Object.keys(n).reduce((t, i) => {
						let o = (0, r.snakeCase)(i);
						return 'object' != typeof n[i] || Array.isArray(n[i]) ? (t[o] = n[i]) : (t[o] = e(n[i])), (t[o] = n[i]), t;
					}, {});
		};
	}
}),
	t(724458);
var r = t(392711);
