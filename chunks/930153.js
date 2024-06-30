n.d(t, {
    $U: function () {
        return i;
    },
    Bs: function () {
        return a;
    },
    Lk: function () {
        return o;
    },
    T3: function () {
        return s;
    }
});
var r = n(689938);
function i(e) {
    if (e < 1000000)
        return r.Z.Messages.NUMBER_ABBREVIATION_FULL.format({ value: e });
    let t = (e / 1000000).toFixed(1);
    return r.Z.Messages.NUMBER_ABBREVIATION_MILLIONS.format({ value: t });
}
function a(e, t) {
    if (e < 1000)
        return r.Z.Messages.NUMBER_ABBREVIATION_FULL.format({ value: Math.floor(e) });
    if (e < 1000000)
        return r.Z.Messages.NUMBER_ABBREVIATION_THOUSANDS.format({ value: Math.floor(e / 1000) });
    let n = Math.floor(10 * e / 1000000) / 10, i = new Intl.NumberFormat(t, { maximumFractionDigits: 1 }).format(n);
    return r.Z.Messages.NUMBER_ABBREVIATION_MILLIONS.format({ value: i });
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN;
    if (null == e)
        return t;
    let n = parseInt(e);
    return Number.isNaN(n) ? t : n;
}
function s(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return Intl.NumberFormat(e, {
        style: 'percent',
        minimumFractionDigits: 0,
        ...n
    }).format(t);
}
