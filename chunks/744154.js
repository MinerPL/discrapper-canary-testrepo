n.d(t, {
    T: function () {
        return l;
    },
    uf: function () {
        return o;
    }
});
var r = n(958388),
    i = n(543491),
    a = ['style', 'currency', 'unit', 'unitDisplay', 'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'compactDisplay', 'currencyDisplay', 'currencySign', 'notation', 'signDisplay', 'unit', 'unitDisplay', 'numberingSystem', 'trailingZeroDisplay', 'roundingPriority', 'roundingIncrement', 'roundingMode'];
function s(e, t, n) {
    var r = e.locale,
        s = e.formats,
        o = e.onError;
    void 0 === n && (n = {});
    var l = n.format,
        u = (l && (0, i.TB)(s, 'number', l, o)) || {};
    return t(r, (0, i.L6)(n, a, u));
}
function o(e, t, n, i) {
    void 0 === i && (i = {});
    try {
        return s(e, t, i).format(n);
    } catch (t) {
        e.onError(new r.Qe('Error formatting number.', e.locale, t));
    }
    return String(n);
}
function l(e, t, n, i) {
    void 0 === i && (i = {});
    try {
        return s(e, t, i).formatToParts(n);
    } catch (t) {
        e.onError(new r.Qe('Error formatting number.', e.locale, t));
    }
    return [];
}
