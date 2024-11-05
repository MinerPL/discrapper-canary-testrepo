n.d(t, {
    kG: function () {
        return a;
    }
});
var r = n(259630),
    i = n(287378);
function a(e, t, n) {
    if ((void 0 === n && (n = Error), !e)) throw new n(t);
}
(0, i.H)(
    function () {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new ((e = Intl.NumberFormat).bind.apply(e, (0, r.ev)([void 0], t, !1)))();
    },
    { strategy: i.A.variadic }
),
    (0, i.H)(
        function () {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, r.ev)([void 0], t, !1)))();
        },
        { strategy: i.A.variadic }
    ),
    (0, i.H)(
        function () {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new ((e = Intl.PluralRules).bind.apply(e, (0, r.ev)([void 0], t, !1)))();
        },
        { strategy: i.A.variadic }
    ),
    (0, i.H)(
        function () {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new ((e = Intl.Locale).bind.apply(e, (0, r.ev)([void 0], t, !1)))();
        },
        { strategy: i.A.variadic }
    ),
    (0, i.H)(
        function () {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new ((e = Intl.ListFormat).bind.apply(e, (0, r.ev)([void 0], t, !1)))();
        },
        { strategy: i.A.variadic }
    );
