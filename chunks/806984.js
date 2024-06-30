t.d(n, {
    Z: function () {
        return l;
    }
});
var o = t(470079), r = t(512722), a = t.n(r), i = t(598), c = t(390917), s = t(464797);
function l(e) {
    let {handleClose: n} = e, {
            guildProductListing: t,
            guildId: r
        } = (0, s._)(), {selectedSkuPricePreview: l} = (0, i.usePaymentContext)();
    return o.useEffect(() => {
        a()(null != l, 'selectedSkuPricePreview cannot be null'), (0, c.u)({
            guildId: r,
            guildProductListingId: t.id,
            skuPricePreview: l
        }), n();
    }, []), null;
}
