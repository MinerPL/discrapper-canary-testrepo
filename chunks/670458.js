r.d(e, {
	C: function () {
		return u;
	}
});
var n = r(146150),
	i = r(859159),
	o = r(857840),
	a = r(589983);
function s(t) {
	return {
		create: function () {
			return {
				get: function (e) {
					return t[e];
				},
				set: function (e, r) {
					t[e] = r;
				}
			};
		}
	};
}
var u = (function () {
	function t(e, r, i, u) {
		var c,
			l,
			h,
			f = this;
		if (
			(void 0 === r && (r = t.defaultLocale),
			(this.formatterCache = {
				number: {},
				dateTime: {},
				pluralRules: {}
			}),
			(this.format = function (t) {
				var e = f.formatToParts(t);
				if (1 === e.length) return e[0].value;
				var r = e.reduce(function (t, e) {
					return t.length && e.type === a.du.literal && 'string' == typeof t[t.length - 1] ? (t[t.length - 1] += e.value) : t.push(e.value), t;
				}, []);
				return r.length <= 1 ? r[0] || '' : r;
			}),
			(this.formatToParts = function (t) {
				return (0, a.FK)(f.ast, f.locales, f.formatters, f.formats, t, void 0, f.message);
			}),
			(this.resolvedOptions = function () {
				var t;
				return { locale: (null === (t = f.resolvedLocale) || void 0 === t ? void 0 : t.toString()) || Intl.NumberFormat.supportedLocalesOf(f.locales)[0] };
			}),
			(this.getAst = function () {
				return f.ast;
			}),
			(this.locales = r),
			(this.resolvedLocale = t.resolveLocale(r)),
			'string' == typeof e)
		) {
			if (((this.message = e), !t.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
			var p = u || {},
				d = (p.formatters, (0, n._T)(p, ['formatters']));
			this.ast = t.__parse(e, (0, n.pi)((0, n.pi)({}, d), { locale: this.resolvedLocale }));
		} else this.ast = e;
		if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
		(this.formats =
			((c = t.formats),
			(l = i)
				? Object.keys(c).reduce(
						function (t, e) {
							var r, i;
							return (
								(t[e] =
									((r = c[e]),
									(i = l[e])
										? (0, n.pi)(
												(0, n.pi)((0, n.pi)({}, r || {}), i || {}),
												Object.keys(r).reduce(function (t, e) {
													return (t[e] = (0, n.pi)((0, n.pi)({}, r[e]), i[e] || {})), t;
												}, {})
											)
										: r)),
								t
							);
						},
						(0, n.pi)({}, c)
					)
				: c)),
			(this.formatters =
				(u && u.formatters) ||
				(void 0 === (h = this.formatterCache) &&
					(h = {
						number: {},
						dateTime: {},
						pluralRules: {}
					}),
				{
					getNumberFormat: (0, o.H)(
						function () {
							for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
							return new ((t = Intl.NumberFormat).bind.apply(t, (0, n.ev)([void 0], e, !1)))();
						},
						{
							cache: s(h.number),
							strategy: o.A.variadic
						}
					),
					getDateTimeFormat: (0, o.H)(
						function () {
							for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
							return new ((t = Intl.DateTimeFormat).bind.apply(t, (0, n.ev)([void 0], e, !1)))();
						},
						{
							cache: s(h.dateTime),
							strategy: o.A.variadic
						}
					),
					getPluralRules: (0, o.H)(
						function () {
							for (var t, e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
							return new ((t = Intl.PluralRules).bind.apply(t, (0, n.ev)([void 0], e, !1)))();
						},
						{
							cache: s(h.pluralRules),
							strategy: o.A.variadic
						}
					)
				}));
	}
	return (
		Object.defineProperty(t, 'defaultLocale', {
			get: function () {
				return !t.memoizedDefaultLocale && (t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), t.memoizedDefaultLocale;
			},
			enumerable: !1,
			configurable: !0
		}),
		(t.memoizedDefaultLocale = null),
		(t.resolveLocale = function (t) {
			if (void 0 !== Intl.Locale) {
				var e = Intl.NumberFormat.supportedLocalesOf(t);
				return e.length > 0 ? new Intl.Locale(e[0]) : new Intl.Locale('string' == typeof t ? t : t[0]);
			}
		}),
		(t.__parse = i.parse),
		(t.formats = {
			number: {
				integer: { maximumFractionDigits: 0 },
				currency: { style: 'currency' },
				percent: { style: 'percent' }
			},
			date: {
				short: {
					month: 'numeric',
					day: 'numeric',
					year: '2-digit'
				},
				medium: {
					month: 'short',
					day: 'numeric',
					year: 'numeric'
				},
				long: {
					month: 'long',
					day: 'numeric',
					year: 'numeric'
				},
				full: {
					weekday: 'long',
					month: 'long',
					day: 'numeric',
					year: 'numeric'
				}
			},
			time: {
				short: {
					hour: 'numeric',
					minute: 'numeric'
				},
				medium: {
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				},
				long: {
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric',
					timeZoneName: 'short'
				},
				full: {
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric',
					timeZoneName: 'short'
				}
			}
		}),
		t
	);
})();
