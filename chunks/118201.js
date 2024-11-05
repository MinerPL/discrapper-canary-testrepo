n.d(t, {
    C: function () {
        return l;
    }
});
var r = n(259630),
    i = n(287378),
    a = n(322182),
    s = n(588688);
function o(e) {
    return {
        create: function () {
            return {
                get: function (t) {
                    return e[t];
                },
                set: function (t, n) {
                    e[t] = n;
                }
            };
        }
    };
}
var l = (function () {
    function e(t, n, a, l) {
        void 0 === n && (n = e.defaultLocale);
        var u,
            c,
            d,
            f = this;
        if (
            ((this.formatterCache = {
                number: {},
                dateTime: {},
                pluralRules: {}
            }),
            (this.format = function (e) {
                var t = f.formatToParts(e);
                if (1 === t.length) return t[0].value;
                var n = t.reduce(function (e, t) {
                    return e.length && t.type === s.du.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e;
                }, []);
                return n.length <= 1 ? n[0] || '' : n;
            }),
            (this.formatToParts = function (e) {
                return (0, s.FK)(f.ast, f.locales, f.formatters, f.formats, e, void 0, f.message);
            }),
            (this.resolvedOptions = function () {
                var e;
                return { locale: (null === (e = f.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(f.locales)[0] };
            }),
            (this.getAst = function () {
                return f.ast;
            }),
            (this.locales = n),
            (this.resolvedLocale = e.resolveLocale(n)),
            'string' == typeof t)
        ) {
            if (((this.message = t), !e.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
            var _ = l || {},
                h = (_.formatters, (0, r._T)(_, ['formatters']));
            this.ast = e.__parse(t, (0, r.pi)((0, r.pi)({}, h), { locale: this.resolvedLocale }));
        } else this.ast = t;
        if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
        (this.formats =
            ((u = e.formats),
            (c = a)
                ? Object.keys(u).reduce(
                      function (e, t) {
                          var n, i;
                          return (
                              (e[t] =
                                  ((n = u[t]),
                                  (i = c[t])
                                      ? (0, r.pi)(
                                            (0, r.pi)((0, r.pi)({}, n || {}), i || {}),
                                            Object.keys(n).reduce(function (e, t) {
                                                return (e[t] = (0, r.pi)((0, r.pi)({}, n[t]), i[t] || {})), e;
                                            }, {})
                                        )
                                      : n)),
                              e
                          );
                      },
                      (0, r.pi)({}, u)
                  )
                : u)),
            (this.formatters =
                (l && l.formatters) ||
                (void 0 === (d = this.formatterCache) &&
                    (d = {
                        number: {},
                        dateTime: {},
                        pluralRules: {}
                    }),
                {
                    getNumberFormat: (0, i.H)(
                        function () {
                            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            return new ((e = Intl.NumberFormat).bind.apply(e, (0, r.ev)([void 0], t, !1)))();
                        },
                        {
                            cache: o(d.number),
                            strategy: i.A.variadic
                        }
                    ),
                    getDateTimeFormat: (0, i.H)(
                        function () {
                            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, r.ev)([void 0], t, !1)))();
                        },
                        {
                            cache: o(d.dateTime),
                            strategy: i.A.variadic
                        }
                    ),
                    getPluralRules: (0, i.H)(
                        function () {
                            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            return new ((e = Intl.PluralRules).bind.apply(e, (0, r.ev)([void 0], t, !1)))();
                        },
                        {
                            cache: o(d.pluralRules),
                            strategy: i.A.variadic
                        }
                    )
                }));
    }
    return (
        Object.defineProperty(e, 'defaultLocale', {
            get: function () {
                return !e.memoizedDefaultLocale && (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
            },
            enumerable: !1,
            configurable: !0
        }),
        (e.memoizedDefaultLocale = null),
        (e.resolveLocale = function (e) {
            if (void 0 !== Intl.Locale) {
                var t = Intl.NumberFormat.supportedLocalesOf(e);
                return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale('string' == typeof e ? e : e[0]);
            }
        }),
        (e.__parse = a.Qc),
        (e.formats = {
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
        e
    );
})();
