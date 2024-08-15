var n = r(413135).Buffer,
	i = [
		255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
		12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
		10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255
	];
(e.encode = function (t) {
	!n.isBuffer(t) && (t = new n(t));
	var e,
		r,
		i = 0,
		o = 0,
		a = 0,
		s = 0;
	for (var u = new n(8 * ((r = Math.floor((e = t).length / 5)), e.length % 5 == 0 ? r : r + 1)); i < t.length; ) {
		var c = t[i];
		a > 3
			? ((s = ((s = c & (255 >> a)) << (a = (a + 5) % 8)) | ((i + 1 < t.length ? t[i + 1] : 0) >> (8 - a))), i++)
			: ((s = (c >> (8 - (a + 5))) & 31), 0 == (a = (a + 5) % 8) && i++),
			(u[o] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.charCodeAt(s)),
			o++;
	}
	for (i = o; i < u.length; i++) u[i] = 61;
	return u;
}),
	(e.decode = function (t) {
		var e,
			r = 0,
			o = 0,
			a = 0;
		!n.isBuffer(t) && (t = new n(t));
		for (var s = new n(Math.ceil((5 * t.length) / 8)), u = 0; u < t.length && 61 != t[u]; u++) {
			var c = t[u] - 48;
			if (c < i.length)
				(o = i[c]),
					r <= 3
						? 0 == (r = (r + 5) % 8)
							? ((e |= o), (s[a] = e), a++, (e = 0))
							: (e |= 255 & (o << (8 - r)))
						: ((e |= 255 & (o >>> (r = (r + 5) % 8))), (s[a] = e), a++, (e = 255 & (o << (8 - r))));
			else throw Error('Invalid input - it is not base32 encoded string');
		}
		return s.slice(0, a);
	});
