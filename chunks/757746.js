t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(442837),
    l = t(558381),
    r = t(551428);
let s = (0, i.Kb)(r.Z, {
    get: (e) => (null != e ? r.Z.getForSKU(e) : null),
    load: (e, n) => (null != n ? (0, l.km)(n) : Promise.resolve()),
    getIsLoading: (e) => null != e && r.Z.isFetchingForSKU(e),
    useStateHook: i.e7
});
