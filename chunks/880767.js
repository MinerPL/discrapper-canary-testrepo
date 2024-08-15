var r = n(957578).Buffer;
t.encrypt = function (e, t, n) {
	for (var i = t.length, a = r.allocUnsafe(i), s = -1; ++s < i; )
		a[s] = (function (e, t, n) {
			for (var i, a, s, o = -1, l = 0; ++o < 8; )
				(i = e._cipher.encryptBlock(e._prev)),
					(a = t & (1 << (7 - o)) ? 128 : 0),
					(l += (128 & (s = i[0] ^ a)) >> o % 8),
					(e._prev = (function (e, t) {
						var n = e.length,
							i = -1,
							a = r.allocUnsafe(e.length);
						for (e = r.concat([e, r.from([t])]); ++i < n; ) a[i] = (e[i] << 1) | (e[i + 1] >> 7);
						return a;
					})(e._prev, n ? a : s));
			return l;
		})(e, t[s], n);
	return a;
};
