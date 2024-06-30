i.d(n, {
    k: function () {
        return o;
    }
});
var t = i(544891), a = i(570140), r = i(981631);
function o(e) {
    return a.Z.dispatch({
        type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING',
        applicationId: e
    }), t.tn.get({ url: r.ANM.STORE_LAYOUT(e) }).then(n => (a.Z.dispatch({
        type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS',
        applicationId: e,
        listings: n.body
    }), n.body)).catch(() => {
        a.Z.dispatch({
            type: 'APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED',
            applicationId: e
        });
    });
}
