n.d(t, {
    S: function () {
        return o;
    }
});
var r = n(543491),
    i = n(584811),
    a = n(958388),
    s = ['numeric', 'style'];
function o(e, t, n, o, l) {
    void 0 === l && (l = {}), !o && (o = 'second'), !Intl.RelativeTimeFormat && e.onError(new i.u_('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', i.jK.MISSING_INTL_API));
    try {
        var u, c, d, f, _, h, p, m;
        return ((u = e), (c = t), (d = l), (f = u.locale), (_ = u.formats), (h = u.onError), void 0 === d && (d = {}), (m = (!!(p = d.format) && (0, r.TB)(_, 'relative', p, h)) || {}), c(f, (0, r.L6)(d, s, m))).format(n, o);
    } catch (t) {
        e.onError(new a.Qe('Error formatting relative time.', e.locale, t));
    }
    return String(n);
}
