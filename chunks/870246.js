r.d(t, {
    $: () => s,
    w: () => i
});
var n,
    o = r(192379),
    a = r(626135),
    l = r(981631),
    i = (((n = {}).DETAIL = 'Boost Perk Shop Details'), (n.DEACTIVATE = 'Boost Perk Shop Disable'), n);
function s(e, t, r) {
    o.useEffect(() => {
        a.default.track(l.rMx.OPEN_MODAL, {
            type: r,
            sku_id: t.skuId,
            guild_id: e
        });
    }, [r, e, t.skuId]);
}
