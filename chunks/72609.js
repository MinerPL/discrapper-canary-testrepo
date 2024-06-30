function n(t) {
    return 'number' == typeof t && isFinite(t);
}
function _(t, {
    startTimestamp: e,
    ...r
}) {
    return e && t.startTimestamp > e && (t.startTimestamp = e), t.startChild({
        startTimestamp: e,
        ...r
    });
}
r.d(e, {
    H: function () {
        return _;
    },
    n: function () {
        return n;
    }
});
