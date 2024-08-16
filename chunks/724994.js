n.d(t, {
    L: function () {
        return c;
    },
    U: function () {
        return o;
    }
});
var s = n(24217),
    r = n.n(s),
    a = n(442837),
    i = n(1870);
let o = (e, t) => {
        var n;
        let s = null != e.getPurchase(t.skuId),
            a = null !== (n = t.items) && void 0 !== n ? n : [],
            i = r()(a.map((t) => e.getPurchase(t.skuId)));
        return {
            isPurchased: s || (a.length > 0 && i.length === a.length),
            isPartiallyPurchased: i.length > 0 && i.length < a.length
        };
    },
    c = (e) => (0, a.cj)([i.Z], () => o(i.Z, e));
