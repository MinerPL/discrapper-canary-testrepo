r.d(t, {
    QV: function () {
        return E;
    },
    XL: function () {
        return s;
    },
    Y: function () {
        return _;
    },
    nl: function () {
        return i;
    }
});
var n = r(696486),
    a = r(152228),
    o = r(395848);
function i(e) {
    return 'number' == typeof e && isFinite(e);
}
function _(e, t, r, { ...o }) {
    let i = (0, n.XU)(e).start_timestamp;
    return (
        i && i > t && 'function' == typeof e.updateStartTime && e.updateStartTime(t),
        (0, a._d)(e, () => {
            let e = (0, a.qp)({
                startTime: t,
                ...o
            });
            return e && e.end(r), e;
        })
    );
}
function E() {
    return o.m && o.m.addEventListener && o.m.performance;
}
function s(e) {
    return e / 1000;
}
