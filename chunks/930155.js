t.d(e, {
    H: function () {
        return o;
    }
});
var i = t(442837),
    l = t(821849),
    r = t(509545);
let o = (0, i.Kb)(r.Z, {
    get: (n) => (null != n ? r.Z.getForSKU(n) : null),
    load: (n, e) => (null != e ? (0, l.GZ)(e) : Promise.resolve()),
    getIsLoading: (n) => null != n && r.Z.isFetchingForSKU(n)
});
