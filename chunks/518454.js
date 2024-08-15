n.d(t, {
	Z: function () {
		return function e(t, n, i, a) {
			let { length: s } = i,
				o = a,
				l = n;
			if (0 === s) return 0;
			if (null == o) o = l;
			else if (o === l) return l;
			return (l += t === r.a8.UP ? -1 : 1) < 0 || l >= s
				? e(t, l < 0 ? s : -1, i, o)
				: i[l].type === r.h8.HEADER
					? e(t, l, i, o)
					: l;
		};
	}
});
var r = n(727785);
