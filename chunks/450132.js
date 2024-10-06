n.d(t, {
    I: function () {
        return u;
    },
    T: function () {
        return c;
    }
});
var r = n(146150),
    i = n(278253),
    a = n(78385),
    s = n(926832),
    o = ['type', 'style'],
    l = Date.now();
function u(e, t, n, r) {
    void 0 === r && (r = {});
    var i = c(e, t, n, r).reduce(function (e, t) {
        var n = t.value;
        return 'string' != typeof n ? e.push(n) : 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += n) : e.push(n), e;
    }, []);
    return 1 === i.length ? i[0] : 0 === i.length ? '' : i;
}
function c(e, t, n, u) {
    var c = e.locale,
        d = e.onError;
    void 0 === u && (u = {}), !Intl.ListFormat && d(new a.u_('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', a.jK.MISSING_INTL_API));
    var _ = (0, i.L6)(u, o);
    try {
        var E = {},
            f = n.map(function (e, t) {
                if ('object' == typeof e) {
                    var n,
                        r = ((n = t), ''.concat(l, '_').concat(n, '_').concat(l));
                    return (E[r] = e), r;
                }
                return String(e);
            });
        return t(c, _)
            .formatToParts(f)
            .map(function (e) {
                return 'literal' === e.type ? e : (0, r.pi)((0, r.pi)({}, e), { value: E[e.value] || e.value });
            });
    } catch (e) {
        d(new s.Qe('Error formatting list.', c, e));
    }
    return n;
}
