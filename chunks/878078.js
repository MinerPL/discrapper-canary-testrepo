var t = Math.ceil,
	r = Math.max;
e.exports = function (e, n, i, o) {
	for (var s = -1, a = r(t((n - e) / (i || 1)), 0), u = Array(a); a--; ) (u[o ? a : ++s] = e), (e += i);
	return u;
};
