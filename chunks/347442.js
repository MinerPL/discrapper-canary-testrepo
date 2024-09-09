r.d(e, {
    T: function () {
        return u;
    },
    uf: function () {
        return s;
    }
});
var n = r(973682),
    i = r(789903),
    o = ['style', 'currency', 'unit', 'unitDisplay', 'useGrouping', 'minimumIntegerDigits', 'minimumFractionDigits', 'maximumFractionDigits', 'minimumSignificantDigits', 'maximumSignificantDigits', 'compactDisplay', 'currencyDisplay', 'currencySign', 'notation', 'signDisplay', 'unit', 'unitDisplay', 'numberingSystem', 'trailingZeroDisplay', 'roundingPriority', 'roundingIncrement', 'roundingMode'];
function a(t, e, r) {
    var n = t.locale,
        a = t.formats,
        s = t.onError;
    void 0 === r && (r = {});
    var u = r.format,
        c = (u && (0, i.TB)(a, 'number', u, s)) || {};
    return e(n, (0, i.L6)(r, o, c));
}
function s(t, e, r, i) {
    void 0 === i && (i = {});
    try {
        return a(t, e, i).format(r);
    } catch (e) {
        t.onError(new n.Qe('Error formatting number.', t.locale, e));
    }
    return String(r);
}
function u(t, e, r, i) {
    void 0 === i && (i = {});
    try {
        return a(t, e, i).formatToParts(r);
    } catch (e) {
        t.onError(new n.Qe('Error formatting number.', t.locale, e));
    }
    return [];
}
