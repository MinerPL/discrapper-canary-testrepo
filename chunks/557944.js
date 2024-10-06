n.d(t, {
    R: function () {
        return o;
    }
});
var r = n(278253),
    i = n(926832),
    a = n(78385),
    s = ['type'];
function o(e, t, n, o) {
    var l = e.locale,
        u = e.onError;
    void 0 === o && (o = {}), !Intl.PluralRules && u(new a.u_('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', a.jK.MISSING_INTL_API));
    var c = (0, r.L6)(o, s);
    try {
        return t(l, c).select(n);
    } catch (e) {
        u(new i.Qe('Error formatting plural.', l, e));
    }
    return 'other';
}
