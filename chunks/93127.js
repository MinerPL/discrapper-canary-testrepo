t.d(n, {
    W: function () {
        return i;
    }
});
var o = t(544891), a = t(570140), d = t(814443), c = t(981631);
function i() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return d.Z.needsRefresh() ? (a.Z.dispatch({ type: 'LOAD_USER_AFFINITIES' }), o.tn.get({
        url: c.ANM.USER_AFFINITIES,
        retries: e ? 3 : 0,
        oldFormErrors: !0
    }).then(e => {
        let {body: n} = e;
        a.Z.dispatch({
            type: 'LOAD_USER_AFFINITIES_SUCCESS',
            affinities: n
        });
    }, () => {
        a.Z.dispatch({ type: 'LOAD_USER_AFFINITIES_FAILURE' });
    })) : Promise.resolve();
}
