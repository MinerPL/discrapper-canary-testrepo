var e = n(796774),
	o = n(680625),
	i = Array,
	u = Math.abs,
	f = Math.pow,
	a = Math.floor,
	c = Math.log,
	s = Math.LN2,
	y = function (t) {
		var r = o(t),
			n = u(t - r);
		return n > 0.5 || (0.5 === n && r % 2 != 0) ? r + e(t) : r;
	};
t.exports = {
	pack: function (t, r, n) {
		var e,
			o,
			p,
			h = i(n),
			v = 8 * n - r - 1,
			d = (1 << v) - 1,
			g = d >> 1,
			l = 23 === r ? f(2, -24) - f(2, -77) : 0,
			A = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0,
			w = 0;
		for ((t = u(t)) != t || t === 1 / 0 ? ((o = t != t ? 1 : 0), (e = d)) : ((p = f(2, -(e = a(c(t) / s)))), t * p < 1 && (e--, (p *= 2)), e + g >= 1 ? (t += l / p) : (t += l * f(2, 1 - g)), t * p >= 2 && (e++, (p /= 2)), e + g >= d ? ((o = 0), (e = d)) : e + g >= 1 ? ((o = y((t * p - 1) * f(2, r))), (e += g)) : ((o = y(t * f(2, g - 1) * f(2, r))), (e = 0))); r >= 8; ) (h[w++] = 255 & o), (o /= 256), (r -= 8);
		for (e = (e << r) | o, v += r; v > 0; ) (h[w++] = 255 & e), (e /= 256), (v -= 8);
		return (h[--w] |= 128 * A), h;
	},
	unpack: function (t, r) {
		var n,
			e = t.length,
			o = 8 * e - r - 1,
			i = (1 << o) - 1,
			u = i >> 1,
			a = o - 7,
			c = e - 1,
			s = t[c--],
			y = 127 & s;
		for (s >>= 7; a > 0; ) (y = 256 * y + t[c--]), (a -= 8);
		for (n = y & ((1 << -a) - 1), y >>= -a, a += r; a > 0; ) (n = 256 * n + t[c--]), (a -= 8);
		if (0 === y) y = 1 - u;
		else {
			if (y === i) return n ? NaN : s ? -1 / 0 : 1 / 0;
			(n += f(2, r)), (y -= u);
		}
		return (s ? -1 : 1) * n * f(2, y - r);
	}
};
