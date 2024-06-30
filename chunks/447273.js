s.d(t, {
    B: function () {
        return n;
    },
    D: function () {
        return l;
    }
});
var a = s(570140);
function n() {
    a.Z.dispatch({ type: 'APPLICATION_STORE_ACCEPT_STORE_TERMS' });
}
function l(e) {
    a.Z.dispatch({
        type: 'APPLICATION_STORE_ACCEPT_EULA',
        eulaId: e
    });
}
