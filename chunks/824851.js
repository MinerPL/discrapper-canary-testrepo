r.d(t, {
    V: function () {
        return i;
    }
});
var n = r(899517),
    a = r(578346);
let o = null;
function i(e) {
    let t = 'error';
    (0, a.Hj)(t, e), (0, a.D2)(t, _);
}
function _() {
    (o = n.n.onerror),
        (n.n.onerror = function (e, t, r, n, i) {
            return (
                (0, a.rK)('error', {
                    column: n,
                    error: i,
                    line: r,
                    msg: e,
                    url: t
                }),
                !!o && !o.__SENTRY_LOADER__ && o.apply(this, arguments)
            );
        }),
        (n.n.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
