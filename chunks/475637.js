function r(e) {
	return function (t) {
		var n,
			r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			i = r.width,
			a = (i && e.matchPatterns[i]) || e.matchPatterns[e.defaultMatchWidth],
			s = t.match(a);
		if (!s) return null;
		var o = s[0],
			l = (i && e.parsePatterns[i]) || e.parsePatterns[e.defaultParseWidth],
			u = Array.isArray(l)
				? (function (e, t) {
						for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
					})(l, function (e) {
						return e.test(o);
					})
				: (function (e, t) {
						for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
					})(l, function (e) {
						return e.test(o);
					});
		return (
			(n = e.valueCallback ? e.valueCallback(u) : u),
			{
				value: (n = r.valueCallback ? r.valueCallback(n) : n),
				rest: t.slice(o.length)
			}
		);
	};
}
n.d(t, {
	Z: function () {
		return r;
	}
});
