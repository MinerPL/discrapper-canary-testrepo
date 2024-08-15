r.d(e, {
	FK: function () {
		return function t(e, r, n, u, c, l, h) {
			if (1 === e.length && (0, o.isLiteralElement)(e[0]))
				return [
					{
						type: i.literal,
						value: e[0].value
					}
				];
			for (var f, p = [], d = 0; d < e.length; d++) {
				var m = e[d];
				if ((0, o.isLiteralElement)(m)) {
					p.push({
						type: i.literal,
						value: m.value
					});
					continue;
				}
				if ((0, o.isPoundElement)(m)) {
					'number' == typeof l &&
						p.push({
							type: i.literal,
							value: n.getNumberFormat(r).format(l)
						});
					continue;
				}
				var v = m.value;
				if (!(c && v in c)) throw new a.HR(v, h);
				var g = c[v];
				if ((0, o.isArgumentElement)(m)) {
					(!g || 'string' == typeof g || 'number' == typeof g) && (g = 'string' == typeof g || 'number' == typeof g ? String(g) : ''),
						p.push({
							type: 'string' == typeof g ? i.literal : i.object,
							value: g
						});
					continue;
				}
				if ((0, o.isDateElement)(m)) {
					var y = 'string' == typeof m.style ? u.date[m.style] : (0, o.isDateTimeSkeleton)(m.style) ? m.style.parsedOptions : void 0;
					p.push({
						type: i.literal,
						value: n.getDateTimeFormat(r, y).format(g)
					});
					continue;
				}
				if ((0, o.isTimeElement)(m)) {
					var y = 'string' == typeof m.style ? u.time[m.style] : (0, o.isDateTimeSkeleton)(m.style) ? m.style.parsedOptions : u.time.medium;
					p.push({
						type: i.literal,
						value: n.getDateTimeFormat(r, y).format(g)
					});
					continue;
				}
				if ((0, o.isNumberElement)(m)) {
					var y = 'string' == typeof m.style ? u.number[m.style] : (0, o.isNumberSkeleton)(m.style) ? m.style.parsedOptions : void 0;
					y && y.scale && (g *= y.scale || 1),
						p.push({
							type: i.literal,
							value: n.getNumberFormat(r, y).format(g)
						});
					continue;
				}
				if ((0, o.isTagElement)(m)) {
					var b = m.children,
						E = m.value,
						T = c[E];
					if (!s(T)) throw new a.YR(E, 'function', h);
					var _ = T(
						t(b, r, n, u, c, l).map(function (t) {
							return t.value;
						})
					);
					!Array.isArray(_) && (_ = [_]),
						p.push.apply(
							p,
							_.map(function (t) {
								return {
									type: 'string' == typeof t ? i.literal : i.object,
									value: t
								};
							})
						);
				}
				if ((0, o.isSelectElement)(m)) {
					var A = m.options[g] || m.options.other;
					if (!A) throw new a.C8(m.value, g, Object.keys(m.options), h);
					p.push.apply(p, t(A.value, r, n, u, c));
					continue;
				}
				if ((0, o.isPluralElement)(m)) {
					var A = m.options['='.concat(g)];
					if (!A) {
						if (!Intl.PluralRules) throw new a.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', a.jK.MISSING_INTL_API, h);
						var I = n.getPluralRules(r, { type: m.pluralType }).select(g - (m.offset || 0));
						A = m.options[I] || m.options.other;
					}
					if (!A) throw new a.C8(m.value, g, Object.keys(m.options), h);
					p.push.apply(p, t(A.value, r, n, u, c, g - (m.offset || 0)));
					continue;
				}
			}
			return (f = p).length < 2
				? f
				: f.reduce(function (t, e) {
						var r = t[t.length - 1];
						return r && r.type === i.literal && e.type === i.literal ? (r.value += e.value) : t.push(e), t;
					}, []);
		};
	},
	Gt: function () {
		return s;
	},
	du: function () {
		return i;
	}
});
var n,
	i,
	o = r(859159),
	a = r(78385);
((n = i || (i = {}))[(n.literal = 0)] = 'literal'), (n[(n.object = 1)] = 'object');
function s(t) {
	return 'function' == typeof t;
}
