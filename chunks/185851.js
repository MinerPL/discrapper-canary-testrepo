IntlMessageFormat.__addLocaleData({
	locale: 'uk',
	pluralRuleFunction: function (e, t) {
		var n = String(e).split('.'),
			r = n[0],
			i = !n[1],
			a = Number(n[0]) == e,
			s = a && n[0].slice(-1),
			o = a && n[0].slice(-2),
			l = r.slice(-1),
			u = r.slice(-2);
		return t
			? 3 == s && 13 != o
				? 'few'
				: 'other'
			: i && 1 == l && 11 != u
				? 'one'
				: i && l >= 2 && l <= 4 && (u < 12 || u > 14)
					? 'few'
					: (i && 0 == l) || (i && l >= 5 && l <= 9) || (i && u >= 11 && u <= 14)
						? 'many'
						: 'other';
	}
});
