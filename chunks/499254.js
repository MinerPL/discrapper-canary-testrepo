n.d(t, {
    _: function () {
        return a;
    },
    y: function () {
        return s;
    }
});
var i = n(570140);
function a(e) {
    i.Z.dispatch({
        type: 'APP_LAUNCHER_SHOW',
        entrypoint: e
    });
}
function s(e) {
    i.Z.dispatch({
        type: 'APP_LAUNCHER_DISMISS',
        closeReason: e
    });
}
