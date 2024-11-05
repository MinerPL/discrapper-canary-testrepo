n.d(t, {
    Z: function () {
        return c;
    },
    c: function () {
        return u;
    }
}),
    n(47120);
var r = n(192379),
    i = n(399606),
    a = n(634894),
    s = n(335131),
    o = n(1870),
    l = n(267097);
function u() {
    let e = 'useFetchPurchases';
    (0, a.j)({
        location: e + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: e + ' auto off',
            autoTrackExposure: !1
        });
    let [t, n, l, u, c, d] = (0, i.Wu)([o.Z], () => [o.Z.isFetching, o.Z.isClaiming, o.Z.fetchError, o.Z.claimError, o.Z.purchases, o.Z.hasPreviouslyFetched]);
    return (
        (0, r.useEffect)(() => {
            (0, s.qg)();
        }, []),
        {
            isClaiming: n,
            fetchPurchasesError: l,
            claimError: u,
            isFetching: t,
            purchases: c,
            hasPreviouslyFetched: d
        }
    );
}
function c(e) {
    let t = null == e ? void 0 : e.paymentGateway,
        n = 'useFetchCollectiblesCategoriesAndPurchases';
    (0, a.j)({
        location: n + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: n + ' auto off',
            autoTrackExposure: !1
        });
    let { isFetching: r, categories: i, fetchCategoriesError: s, refreshCategories: o } = (0, l.Z)({ paymentGateway: t }),
        { isClaiming: c, fetchPurchasesError: d, claimError: f, isFetching: _, purchases: h, hasPreviouslyFetched: p } = u();
    return {
        isFetching: r || _,
        isFetchingCategories: r,
        isFetchingPurchases: _,
        isClaiming: c,
        categories: i,
        purchases: h,
        fetchCategoriesError: s,
        fetchPurchasesError: d,
        claimError: f,
        refreshCategories: o,
        hasPreviouslyFetched: p
    };
}
