n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(81825);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class a extends r.Z {
    static fromServer(e) {
        let { sku_id: t, ...n } = e;
        return new a({
            ...n,
            skuId: t
        });
    }
    constructor(e) {
        super(), i(this, 'id', void 0), i(this, 'skuId', void 0), (this.id = e.id), (this.skuId = e.skuId);
    }
}
