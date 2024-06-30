n.d(t, {
    Z: function () {
        return a;
    }
}), n(47120);
var r = n(470079), s = n(442837), i = n(365943), l = n(25251), o = n(223143);
function a() {
    let {
            isFetching: e,
            error: t,
            categories: n,
            purchases: a
        } = (0, o.Z)(), [c, d, u] = (0, s.Wu)([l.Z], () => [
            l.Z.isFetching,
            l.Z.fetchError,
            l.Z.profileEffects
        ]);
    return r.useEffect(() => {
        (0, i.z)(!0);
    }, []), {
        isFetching: e || c,
        error: null != t ? t : d,
        profileEffects: u,
        categories: n,
        purchases: a
    };
}
