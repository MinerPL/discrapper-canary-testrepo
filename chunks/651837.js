n.d(t, {
    I: function () {
        return o;
    }
});
var r = n(543491),
    i = n(584811),
    a = n(958388),
    s = ['style', 'type', 'fallback', 'languageDisplay'];
function o(e, t, n, o) {
    var l = e.locale,
        u = e.onError;
    !Intl.DisplayNames && u(new i.u_('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', i.jK.MISSING_INTL_API));
    var c = (0, r.L6)(o, s);
    try {
        return t(l, c).of(n);
    } catch (e) {
        u(new a.Qe('Error formatting display name.', l, e));
    }
}
