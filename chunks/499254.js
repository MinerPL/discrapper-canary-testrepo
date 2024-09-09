t.d(n, {
    _: function () {
        return r;
    },
    y: function () {
        return s;
    }
});
var a = t(570140);
function r(e, n, t) {
    a.Z.dispatch({
        type: 'APP_LAUNCHER_SHOW',
        entrypoint: e,
        activeViewType: n,
        initialState: t
    });
}
function s(e) {
    a.Z.dispatch({
        type: 'APP_LAUNCHER_DISMISS',
        closeReason: e
    });
}
