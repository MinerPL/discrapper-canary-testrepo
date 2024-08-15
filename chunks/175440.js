var e = n(980855),
	o = n(49693),
	i = n(182867),
	u = Array,
	f = Math.max;
t.exports = function (t, r, n) {
	for (var a = o(t), c = e(r, a), s = e(void 0 === n ? a : n, a), y = u(f(s - c, 0)), p = 0; c < s; c++, p++) i(y, p, t[c]);
	return (y.length = p), y;
};
