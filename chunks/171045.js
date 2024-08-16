r.d(e, {
    I: function () {
        return c;
    },
    T: function () {
        return l;
    }
});
var n = r(146150),
    i = r(789903),
    o = r(78385),
    a = r(973682),
    s = ['type', 'style'],
    u = Date.now();
function c(t, e, r, n) {
    void 0 === n && (n = {});
    var i = l(t, e, r, n).reduce(function (t, e) {
        var r = e.value;
        return 'string' != typeof r ? t.push(r) : 'string' == typeof t[t.length - 1] ? (t[t.length - 1] += r) : t.push(r), t;
    }, []);
    return 1 === i.length ? i[0] : 0 === i.length ? '' : i;
}
function l(t, e, r, c) {
    var l = t.locale,
        h = t.onError;
    void 0 === c && (c = {}), !Intl.ListFormat && h(new o.u_('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', o.jK.MISSING_INTL_API));
    var f = (0, i.L6)(c, s);
    try {
        var p = {},
            d = r.map(function (t, e) {
                if ('object' == typeof t) {
                    var r,
                        n = ((r = e), ''.concat(u, '_').concat(r, '_').concat(u));
                    return (p[n] = t), n;
                }
                return String(t);
            });
        return e(l, f)
            .formatToParts(d)
            .map(function (t) {
                return 'literal' === t.type ? t : (0, n.pi)((0, n.pi)({}, t), { value: p[t.value] || t.value });
            });
    } catch (t) {
        h(new a.Qe('Error formatting list.', l, t));
    }
    return r;
}
