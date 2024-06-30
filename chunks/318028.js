n.d(t, {
    l: function () {
        return l;
    }
}), n(47120);
var a = n(399606), r = n(597688), o = n(267097);
function l(e) {
    (0, o.Z)();
    let [t, n] = (0, a.Wu)([r.Z], () => [
        r.Z.isFetchingCategories,
        r.Z.getCategoryForProduct(e)
    ]);
    return {
        isFetching: t,
        category: n
    };
}
