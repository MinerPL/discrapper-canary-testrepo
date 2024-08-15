var r = n(258099),
	i = n(883830),
	a = n(14309);
t.Z = function (e, t, n) {
	if (r.Z.randomUUID && !t && !e) return r.Z.randomUUID();
	let s = (e = e || {}).random || (e.rng || i.Z)();
	if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), t)) {
		n = n || 0;
		for (let e = 0; e < 16; ++e) t[n + e] = s[e];
		return t;
	}
	return (0, a.S)(s);
};
