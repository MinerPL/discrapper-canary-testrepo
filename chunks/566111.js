n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var i = n(192379),
    r = n(442837),
    l = n(365943),
    o = n(25251),
    s = n(223143);
function a() {
    var e;
    let { isFetching: t, fetchCategoriesError: n, fetchPurchasesError: a, categories: c, purchases: d } = (0, s.Z)(),
        [u, f, m] = (0, r.Wu)([o.Z], () => [o.Z.isFetching, o.Z.fetchError, o.Z.profileEffects]);
    return (
        i.useEffect(() => {
            (0, l.z)(!0);
        }, []),
        {
            isFetching: t || u,
            combinedError: null !== (e = null != n ? n : a) && void 0 !== e ? e : f,
            profileEffects: m,
            categories: c,
            purchases: d
        }
    );
}
