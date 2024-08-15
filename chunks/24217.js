e.exports = function (e) {
	for (var t = -1, n = null == e ? 0 : e.length, s = 0, r = []; ++t < n; ) {
		var a = e[t];
		a && (r[s++] = a);
	}
	return r;
};
