n.d(t, {
    GR: function () {
        return u;
    },
    b8: function () {
        return l;
    },
    ul: function () {
        return c;
    }
});
var r = n(544891), i = n(570140), a = n(85521), o = n(73346), s = n(981631);
async function l() {
    try {
        let e = await (0, o.Kb)({
            url: s.ANM.LIBRARY,
            oldFormErrors: !0
        }, !1);
        i.Z.dispatch({
            type: 'LIBRARY_FETCH_SUCCESS',
            libraryApplications: e.body
        });
    } catch (e) {
        i.Z.dispatch({
            type: 'LIBRARY_FETCH_FAIL',
            error: e
        });
    }
}
async function u(e) {
    let t = e.primarySkuId;
    if (null == t)
        return;
    let n = (await r.tn.get({
        url: s.ANM.APPLICATION_BRANCH_LIST(e.id),
        oldFormErrors: !0
    }).then(e => e.body)).map(n => a.Z.createForTestMode({
        id: e.id,
        skuId: t,
        branch: n
    }));
    i.Z.dispatch({
        type: 'LIBRARY_APPLICATIONS_TEST_MODE_ENABLED',
        libraryApplications: n
    });
}
function c(e, t, n) {
    i.Z.dispatch({
        type: 'LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE',
        applicationId: e,
        branchId: t,
        launchOptionId: n
    });
}
