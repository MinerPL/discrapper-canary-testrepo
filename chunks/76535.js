t.d(n, {
    H: function () {
        return s;
    },
    R: function () {
        return a;
    }
});
var r = t(470079),
    i = t(442837),
    o = t(584825),
    l = t(17079),
    u = t(281320);
function a(e, n) {
    let t = (0, i.e7)([u.Z], () => u.Z.getPriceTiersForGuildAndType(e, n)),
        o = (0, i.e7)([u.Z], () => u.Z.getPriceTiersFetchStateForGuildAndType(e, n));
    return (
        r.useEffect(() => {
            o === u.M.NOT_FETCHED && (0, l.T)(e, n);
        }, [e, o, n]),
        {
            loading: o === u.M.FETCHING,
            priceTiers: t
        }
    );
}
function s(e) {
    let { fetchSubscriptionsSettings: n, loading: t, error: i } = (0, o.JH)();
    r.useEffect(() => {
        n(e);
    }, [n, e]);
    let l = (0, o.YB)(e);
    return {
        loaded: null != l && !t,
        subscriptionsSettings: l,
        loading: t,
        error: i
    };
}
