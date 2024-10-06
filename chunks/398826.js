t.d(s, {
    A: function () {
        return o;
    },
    h: function () {
        return l;
    }
});
var n = t(544891),
    a = t(570140),
    i = t(809206),
    r = t(981631);
function o() {
    return (
        a.Z.dispatch({ type: 'LOAD_DATA_HARVEST_TYPE_START' }),
        n.tn
            .get({
                url: r.ANM.USER_HARVEST,
                oldFormErrors: !0
            })
            .then((e) => {
                a.Z.dispatch({
                    type: 'UPDATE_DATA_HARVEST_TYPE',
                    harvestType: e.body
                });
            })
            .catch((e) => {
                a.Z.dispatch({
                    type: 'LOAD_DATA_HARVEST_TYPE_FAILURE',
                    error: e
                });
            })
    );
}
function l(e) {
    return (0, i.V3)(e).then(
        (e) => (
            null != e &&
                null != e.body &&
                a.Z.dispatch({
                    type: 'UPDATE_DATA_HARVEST_TYPE',
                    harvestType: e.body
                }),
            e
        )
    );
}
