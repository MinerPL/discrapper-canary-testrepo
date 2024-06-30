n.d(t, {
    Pg: function () {
        return o;
    },
    Te: function () {
        return i;
    },
    kb: function () {
        return a;
    }
});
var r = n(570140);
function i() {
    r.Z.wait(() => r.Z.dispatch({ type: 'DOMAIN_MIGRATION_START' }));
}
function a() {
    r.Z.dispatch({ type: 'DOMAIN_MIGRATION_FAILURE' });
}
function o() {
    window.location.reload();
}
