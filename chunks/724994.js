n.d(t, {
    L: function () {
        return l;
    },
    U: function () {
        return i;
    }
});
var s = n(24217), r = n.n(s), a = n(442837), o = n(1870);
let i = (e, t) => {
        var n;
        let s = null != e.getPurchase(t.skuId), a = null !== (n = t.items) && void 0 !== n ? n : [], o = r()(a.map(t => e.getPurchase(t.skuId)));
        return {
            isPurchased: s || a.length > 0 && o.length === a.length,
            isPartiallyPurchased: o.length > 0 && o.length < a.length
        };
    }, l = e => (0, a.cj)([o.Z], () => i(o.Z, e));
