n.d(t, {
    L6: function () {
        return o;
    },
    Sn: function () {
        return u;
    },
    TB: function () {
        return _;
    },
    Z0: function () {
        return l;
    },
    ax: function () {
        return d;
    }
});
var r = n(146150),
    i = n(670458),
    a = n(857840),
    s = n(926832);
function o(e, t, n) {
    return (
        void 0 === n && (n = {}),
        t.reduce(function (t, r) {
            return r in e ? (t[r] = e[r]) : r in n && (t[r] = n[r]), t;
        }, {})
    );
}
var l = {
    formats: {},
    messages: {},
    timeZone: void 0,
    defaultLocale: 'en',
    defaultFormats: {},
    fallbackOnEmptyString: !0,
    onError: function (e) {},
    onWarn: function (e) {}
};
function u() {
    return {
        dateTime: {},
        number: {},
        message: {},
        relativeTime: {},
        pluralRules: {},
        list: {},
        displayNames: {}
    };
}
function c(e) {
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
function d(e) {
    void 0 === e && (e = u());
    var t = Intl.RelativeTimeFormat,
        n = Intl.ListFormat,
        s = Intl.DisplayNames,
        o = (0, a.H)(
            function () {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, r.ev)([void 0], t, !1)))();
            },
            {
                cache: c(e.dateTime),
                strategy: a.A.variadic
            }
        ),
        l = (0, a.H)(
            function () {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new ((e = Intl.NumberFormat).bind.apply(e, (0, r.ev)([void 0], t, !1)))();
            },
            {
                cache: c(e.number),
                strategy: a.A.variadic
            }
        ),
        d = (0, a.H)(
            function () {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return new ((e = Intl.PluralRules).bind.apply(e, (0, r.ev)([void 0], t, !1)))();
            },
            {
                cache: c(e.pluralRules),
                strategy: a.A.variadic
            }
        );
    return {
        getDateTimeFormat: o,
        getNumberFormat: l,
        getMessageFormat: (0, a.H)(
            function (e, t, n, a) {
                return new i.C(
                    e,
                    t,
                    n,
                    (0, r.pi)(
                        {
                            formatters: {
                                getNumberFormat: l,
                                getDateTimeFormat: o,
                                getPluralRules: d
                            }
                        },
                        a || {}
                    )
                );
            },
            {
                cache: c(e.message),
                strategy: a.A.variadic
            }
        ),
        getRelativeTimeFormat: (0, a.H)(
            function () {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                return new (t.bind.apply(t, (0, r.ev)([void 0], e, !1)))();
            },
            {
                cache: c(e.relativeTime),
                strategy: a.A.variadic
            }
        ),
        getPluralRules: d,
        getListFormat: (0, a.H)(
            function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new (n.bind.apply(n, (0, r.ev)([void 0], e, !1)))();
            },
            {
                cache: c(e.list),
                strategy: a.A.variadic
            }
        ),
        getDisplayNames: (0, a.H)(
            function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return new (s.bind.apply(s, (0, r.ev)([void 0], e, !1)))();
            },
            {
                cache: c(e.displayNames),
                strategy: a.A.variadic
            }
        )
    };
}
function _(e, t, n, r) {
    var i,
        a = e && e[t];
    if ((a && (i = a[n]), i)) return i;
    r(new s.wI('No '.concat(t, ' format named: ').concat(n)));
}
