n.d(t, {
    Y$: function () {
        return i;
    },
    a8: function () {
        return o;
    },
    jS: function () {
        return a;
    },
    tZ: function () {
        return s;
    }
});
var r = n(570140);
function i() {
    r.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE' });
}
function a(e) {
    r.Z.dispatch({
        type: 'DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE',
        activityUrlOverride: e
    });
}
function s(e) {
    r.Z.dispatch({
        type: 'DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED',
        applicationId: e,
        timestamp: new Date().getTime()
    });
}
function o(e) {
    r.Z.dispatch({
        type: 'DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER',
        filter: e
    });
}
