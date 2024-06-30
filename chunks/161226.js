n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(778787);
function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class a extends r.Z {
    static fromServer(e) {
        let {
            purchased_at: t,
            purchase_type: n,
            ...r
        } = e;
        return new a({
            ...super.fromServer(r),
            purchaseType: n,
            purchasedAt: null != t ? new Date(t) : t
        });
    }
    constructor(e) {
        super(e), i(this, 'purchaseType', void 0), i(this, 'purchasedAt', void 0), this.purchasedAt = e.purchasedAt, this.purchaseType = e.purchaseType;
    }
}
