n.d(t, {
    e: function () {
        return u;
    }
}),
    n(47120);
var r = n(470079),
    i = n(442837),
    a = n(634894),
    s = n(353926),
    o = n(335131),
    l = n(597688);
function u(e) {
    let t = 'useMaybeFetchCollectiblesCategories';
    (0, a.j)({
        location: t + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: t + ' auto off',
            autoTrackExposure: !1
        });
    let n = (0, i.e7)([s.Z], () => s.Z.hasLoadedExperiments),
        u = null == e ? void 0 : e.includeBundles,
        [c, d, _, E, f] = (0, i.Wu)([l.Z], () => {
            var e;
            return [l.Z.isFetchingCategories, l.Z.lastFetchOptions, l.Z.error, null !== (e = l.Z.lastSuccessfulFetch) && void 0 !== e ? e : 0, l.Z.categories];
        });
    return (
        (0, r.useEffect)(() => {
            if (!n || c || _) return;
            let t = {
                    ...e,
                    includeBundles: u
                },
                r = !(0, o.oc)(d, t),
                i = Date.now() - E < 600000;
            (r || !i) && (0, o.F$)(t);
        }, [n, c, d, E, e, _, u]),
        {
            isFetching: c,
            categories: f,
            error: _,
            refreshCategories: (0, r.useCallback)(() => {
                let t = {
                    ...e,
                    includeBundles: u
                };
                (0, o.F$)(t);
            }, [e, u])
        }
    );
}
