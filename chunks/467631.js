e.exports = function (e, t) {
	for (var r = -1, n = null == e ? 0 : e.length, a = Array(n); ++r < n; ) a[r] = t(e[r], r, e);
	return a;
};
