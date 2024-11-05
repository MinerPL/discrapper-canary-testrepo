n.d(t, {
    Hk: function () {
        return c;
    },
    OI: function () {
        return d;
    },
    mr: function () {
        return u;
    },
    p6: function () {
        return l;
    },
    uE: function () {
        return f;
    }
});
var r = n(259630),
    i = n(543491),
    a = n(958388),
    s = ['formatMatcher', 'timeZone', 'hour12', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName', 'hourCycle', 'dateStyle', 'timeStyle', 'calendar', 'numberingSystem', 'fractionalSecondDigits'];
function o(e, t, n, a) {
    var o = e.locale,
        l = e.formats,
        u = e.onError,
        c = e.timeZone;
    void 0 === a && (a = {});
    var d = a.format,
        f = (0, r.pi)((0, r.pi)({}, c && { timeZone: c }), d && (0, i.TB)(l, t, d, u)),
        _ = (0, i.L6)(a, s, f);
    return (
        'time' === t &&
            !_.hour &&
            !_.minute &&
            !_.second &&
            !_.timeStyle &&
            !_.dateStyle &&
            (_ = (0, r.pi)((0, r.pi)({}, _), {
                hour: 'numeric',
                minute: 'numeric'
            })),
        n(o, _)
    );
}
function l(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    var i = n[0],
        s = n[1],
        l = 'string' == typeof i ? new Date(i || 0) : i;
    try {
        return o(e, 'date', t, void 0 === s ? {} : s).format(l);
    } catch (t) {
        e.onError(new a.Qe('Error formatting date.', e.locale, t));
    }
    return String(l);
}
function u(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    var i = n[0],
        s = n[1],
        l = 'string' == typeof i ? new Date(i || 0) : i;
    try {
        return o(e, 'time', t, void 0 === s ? {} : s).format(l);
    } catch (t) {
        e.onError(new a.Qe('Error formatting time.', e.locale, t));
    }
    return String(l);
}
function c(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    var o = n[0],
        l = n[1],
        u = n[2],
        c = e.timeZone,
        d = e.locale,
        f = e.onError,
        _ = (0, i.L6)(void 0 === u ? {} : u, s, c ? { timeZone: c } : {});
    try {
        return t(d, _).formatRange(o, l);
    } catch (t) {
        f(new a.Qe('Error formatting date time range.', e.locale, t));
    }
    return String(o);
}
function d(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    var i = n[0],
        s = n[1],
        l = 'string' == typeof i ? new Date(i || 0) : i;
    try {
        return o(e, 'date', t, void 0 === s ? {} : s).formatToParts(l);
    } catch (t) {
        e.onError(new a.Qe('Error formatting date.', e.locale, t));
    }
    return [];
}
function f(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    var i = n[0],
        s = n[1],
        l = 'string' == typeof i ? new Date(i || 0) : i;
    try {
        return o(e, 'time', t, void 0 === s ? {} : s).formatToParts(l);
    } catch (t) {
        e.onError(new a.Qe('Error formatting time.', e.locale, t));
    }
    return [];
}
