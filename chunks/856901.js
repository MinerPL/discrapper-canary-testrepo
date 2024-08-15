var t;
(n.stringSimilarity = void 0),
	(n.stringSimilarity = function (e, n, t, l) {
		if (
			(void 0 === t && (t = 2),
			void 0 === l && (l = !1),
			!l && ((e = e.toLowerCase()), (n = n.toLowerCase())),
			e.length < t || n.length < t)
		)
			return 0;
		for (var s = new Map(), a = 0; a < e.length - (t - 1); a++) {
			var r = e.substr(a, t);
			s.set(r, s.has(r) ? s.get(r) + 1 : 1);
		}
		for (var i = 0, o = 0; o < n.length - (t - 1); o++) {
			var c = n.substr(o, t),
				u = s.has(c) ? s.get(c) : 0;
			u > 0 && (s.set(c, u - 1), i++);
		}
		return (2 * i) / (e.length + n.length - (t - 1) * 2);
	}),
	n.stringSimilarity;
