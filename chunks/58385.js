t.d(s, {
    X: function () {
        return r;
    }
});
var n = t(442837),
    a = t(821849),
    i = t(509545);
let r = (0, n.Kb)(i.Z, {
    queryId: (e) => (null != e ? ['subscription-plans', e] : null),
    get: (e) => (null != e ? i.Z.getForSKU(e) : []),
    load: (e, s) => (null != s ? (0, a.GZ)(s) : Promise.reject()),
    useStateHook: n.Wu
});
