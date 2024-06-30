n.d(t, {
    Z: function () {
        return _;
    },
    o: function () {
        return d;
    }
}), n(47120);
var r = n(392711), i = n.n(r), a = n(544891), o = n(570140), s = n(503013), l = n(283595), u = n(804739), c = n(981631);
async function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.Z.entitledBranchIds;
    if (!(0, u.Q)() || 0 === e.length)
        return [];
    let t = i().chunk(e, 50);
    try {
        let e = t.map(async e => (await a.tn.post({
                url: c.ANM.APPLICATION_BRANCHES,
                body: { branch_ids: e },
                oldFormErrors: !0
            })).body.map(s.Z.createFromServer)), n = await Promise.all(e), r = i().flatten(n);
        return o.Z.dispatch({
            type: 'APPLICATION_BRANCHES_FETCH_SUCCESS',
            branches: r
        }), r;
    } catch (t) {
        return o.Z.dispatch({
            type: 'APPLICATION_BRANCHES_FETCH_FAIL',
            branchIds: e
        }), [];
    }
}
async function _(e) {
    try {
        let t = await a.tn.get({
                url: c.ANM.OWNED_APPLICATION_BRANCHES(e),
                oldFormErrors: !0
            }), n = Array.isArray(t.body) ? t.body.map(s.Z.createFromServer) : [];
        return o.Z.dispatch({
            type: 'OWNED_APPLICATION_BRANCHES_FETCH_SUCCESS',
            applicationId: e,
            branches: n
        }), n;
    } catch (t) {
        return o.Z.dispatch({
            type: 'OWNED_APPLICATION_BRANCHES_FETCH_FAIL',
            applicationId: e
        }), [];
    }
}
