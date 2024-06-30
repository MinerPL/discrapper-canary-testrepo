n.d(t, {
    M: function () {
        return r;
    }
}), n(47120);
var r, i, a, o, s, l, u = n(442837), c = n(570140), d = n(973616);
(a = r || (r = {}))[a.FETCHING = 0] = 'FETCHING', a[a.FETCHED = 1] = 'FETCHED', a[a.ERROR = 2] = 'ERROR';
let _ = {}, E = {}, f = new Set(), h = {};
class p extends (i = u.ZP.Store) {
    getApplication(e) {
        if (null != e)
            return _[e];
    }
    getApplicationRecord(e) {
        if (null == e)
            return;
        let t = _[e];
        if (null != t)
            return d.Z.createFromServer(t);
    }
    getApplications() {
        return _;
    }
    getApplicationFetchState(e) {
        if (null != e)
            return E[e];
    }
    getApplicationFetchStates() {
        return E;
    }
    isInvalidApplication(e) {
        return null != e && f.has(e);
    }
    getInvalidApplicationIds() {
        return f;
    }
    isFetching(e) {
        return 0 === this.getApplicationFetchState(e);
    }
    getApplicationLastFetchTime(e) {
        if (null != e)
            return h[e];
    }
}
l = 'ApplicationDirectoryApplicationsStore', (s = 'displayName') in (o = p) ? Object.defineProperty(o, s, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : o[s] = l, t.Z = new p(c.Z, {
    APPLICATION_DIRECTORY_FETCH_APPLICATION: function (e) {
        let {applicationId: t} = e;
        E = {
            ...E,
            [t]: 0
        };
    },
    APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function (e) {
        let {application: t} = e;
        _ = {
            ..._,
            [t.id]: t
        }, E = {
            ...E,
            [t.id]: 1
        };
        let n = Date.now();
        h = {
            ...h,
            [t.id]: n
        }, f.has(t.id) && (f.delete(t.id), f = new Set(f));
    },
    APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function (e) {
        let {
            applicationId: t,
            isInvalidApplication: n
        } = e;
        E = {
            ...E,
            [t]: 2
        }, n && (f.add(t), f = new Set(f));
    }
});
