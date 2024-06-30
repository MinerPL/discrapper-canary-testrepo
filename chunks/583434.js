n.d(t, {
    T: function () {
        return u;
    }
}), n(47120);
var r = n(470079), i = n(399606), a = n(55563), o = n(335131), s = n(597688), l = n(981631);
function u(e) {
    let t = (0, i.e7)([a.Z], () => null != e ? a.Z.get(e) : null), n = null != t && t.productLine !== l.POd.COLLECTIBLES, [u, c] = (0, i.Wu)([s.Z], () => [
            s.Z.isFetchingProduct(e),
            s.Z.getProduct(e)
        ]);
    return (0, r.useEffect)(() => {
        if (null != e && null == c && !n && !u)
            (0, o.jr)(e);
    }, [
        e,
        c,
        n,
        u
    ]), {
        product: c,
        isFetching: u
    };
}
