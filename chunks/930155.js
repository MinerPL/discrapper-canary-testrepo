t.d(e, {
    H: function () {
        return a;
    }
});
var l = t(442837),
    i = t(821849),
    r = t(509545);
let a = (0, l.Kb)(r.Z, {
    queryId: (n) => (null != n ? ['subscription-plans', n] : null),
    get: (n) => (null != n ? r.Z.getForSKU(n) : []),
    load: (n, e) => (null != e ? (0, i.GZ)(e) : Promise.resolve()),
    useStateHook: l.Wu
});
