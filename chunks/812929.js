n.d(t, {
    S: function () {
        return o;
    }
});
var r = n(278253),
    i = n(78385),
    a = n(926832),
    s = ['numeric', 'style'];
function o(e, t, n, o, l) {
    void 0 === l && (l = {}), !o && (o = 'second'), !Intl.RelativeTimeFormat && e.onError(new i.u_('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', i.jK.MISSING_INTL_API));
    try {
        var u, c, d, _, E, f, h, p;
        return ((u = e), (c = t), (d = l), (_ = u.locale), (E = u.formats), (f = u.onError), void 0 === d && (d = {}), (p = (!!(h = d.format) && (0, r.TB)(E, 'relative', h, f)) || {}), c(_, (0, r.L6)(d, s, p))).format(n, o);
    } catch (t) {
        e.onError(new a.Qe('Error formatting relative time.', e.locale, t));
    }
    return String(n);
}
