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
			for (var f, p = [], m = 0; m < e.length; m++) {
				var d = e[m];
				if ((0, o.isLiteralElement)(d)) {
					p.push({
						type: i.literal,
						value: d.value
					});
					continue;
				}
				if ((0, o.isPoundElement)(d)) {
					'number' == typeof l &&
						p.push({
							type: i.literal,
							value: n.getNumberFormat(r).format(l)
						});
					continue;
				}
				var v = d.value;
				if (!(c && v in c)) throw new a.HR(v, h);
				var g = c[v];
				if ((0, o.isArgumentElement)(d)) {
					(!g || 'string' == typeof g || 'number' == typeof g) &&
						(g = 'string' == typeof g || 'number' == typeof g ? String(g) : ''),
						p.push({
							type: 'string' == typeof g ? i.literal : i.object,
							value: g
						});
					continue;
				}
				if ((0, o.isDateElement)(d)) {
					var y =
						'string' == typeof d.style
							? u.date[d.style]
							: (0, o.isDateTimeSkeleton)(d.style)
								? d.style.parsedOptions
								: void 0;
					p.push({
						type: i.literal,
						value: n.getDateTimeFormat(r, y).format(g)
					});
					continue;
				}
				if ((0, o.isTimeElement)(d)) {
					var y =
						'string' == typeof d.style
							? u.time[d.style]
							: (0, o.isDateTimeSkeleton)(d.style)
								? d.style.parsedOptions
								: u.time.medium;
					p.push({
						type: i.literal,
						value: n.getDateTimeFormat(r, y).format(g)
					});
					continue;
				}
				if ((0, o.isNumberElement)(d)) {
					var y =
						'string' == typeof d.style
							? u.number[d.style]
							: (0, o.isNumberSkeleton)(d.style)
								? d.style.parsedOptions
								: void 0;
					y && y.scale && (g *= y.scale || 1),
						p.push({
							type: i.literal,
							value: n.getNumberFormat(r, y).format(g)
						});
					continue;
				}
				if ((0, o.isTagElement)(d)) {
					var b = d.children,
						E = d.value,
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
				if ((0, o.isSelectElement)(d)) {
					var A = d.options[g] || d.options.other;
					if (!A) throw new a.C8(d.value, g, Object.keys(d.options), h);
					p.push.apply(p, t(A.value, r, n, u, c));
					continue;
				}
				if ((0, o.isPluralElement)(d)) {
					var A = d.options['='.concat(g)];
					if (!A) {
						if (!Intl.PluralRules)
							throw new a.u_(
								'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
								a.jK.MISSING_INTL_API,
								h
							);
						var I = n.getPluralRules(r, { type: d.pluralType }).select(g - (d.offset || 0));
						A = d.options[I] || d.options.other;
					}
					if (!A) throw new a.C8(d.value, g, Object.keys(d.options), h);
					p.push.apply(p, t(A.value, r, n, u, c, g - (d.offset || 0)));
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
