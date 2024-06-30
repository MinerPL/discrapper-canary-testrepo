n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(442837), i = n(509545), a = n(212895), o = n(474936), s = n(231338);
function l(e) {
    var t, n;
    let {
        activeSubscription: l,
        skuIDs: u,
        paymentSourceId: c,
        isGift: d
    } = e;
    u = u.filter(e => e !== o.Si.NONE);
    let _ = (0, r.e7)([i.Z], () => {
            let e = i.Z.getPlanIdsForSkus(u).filter(e => !d || o.dJ.has(e));
            return e.length > 0 ? i.Z.get(e[0]) : null;
        }), E = null == _ ? [] : (0, a.DE)(_.id, c, d), f = null !== (n = null !== (t = E.find(e => e === (null == l ? void 0 : l.currency))) && void 0 !== t ? t : E[0]) && void 0 !== n ? n : s.pK.USD;
    return {
        ...(0, a.gr)(f, null == _ ? void 0 : _.id, c, d, u),
        currencies: E
    };
}
