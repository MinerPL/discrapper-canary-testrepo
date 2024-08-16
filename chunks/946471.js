function n(e, t) {
    let r = t && t.getDsn(),
        n = t && t.getOptions().tunnel;
    return (
        (function (e, t) {
            return !!t && e.includes(t.host);
        })(e, r) ||
        (function (e, t) {
            return !!t && a(e) === a(t);
        })(e, n)
    );
}
r.d(t, {
    W: function () {
        return n;
    }
});
function a(e) {
    return '/' === e[e.length - 1] ? e.slice(0, -1) : e;
}
