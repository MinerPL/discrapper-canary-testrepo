var n = r(161581),
	o = r(824232),
	i = r(957833),
	c = r(996173),
	u = r(251069),
	a = r(641236),
	s = a('iterator'),
	f = a('toStringTag'),
	p = c.values,
	l = function (t, e) {
		if (t) {
			if (t[s] !== p)
				try {
					u(t, s, p);
				} catch (e) {
					t[s] = p;
				}
			if ((!t[f] && u(t, f, e), o[e])) {
				for (var r in c)
					if (t[r] !== c[r])
						try {
							u(t, r, c[r]);
						} catch (e) {
							t[r] = c[r];
						}
			}
		}
	};
for (var y in o) l(n[y] && n[y].prototype, y);
l(i, 'DOMTokenList');
