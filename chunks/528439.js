n.d(t, {
    $0: function () {
        return r;
    },
    Tm: function () {
        return E;
    },
    oT: function () {
        return p;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var r,
    s,
    i = n(470079),
    l = n(392711),
    a = n(399606),
    o = n(597688),
    c = n(1870),
    d = n(884697),
    u = n(594174),
    f = n(74538),
    m = n(689938);
((s = r || (r = {})).PURCHASE = 'purchase'), (s.PREMIUM_PURCHASE = 'premium_purchase'), (s.PREVIEW = 'preview');
let E = { id: 'None' },
    p = { id: 'Shop' };
t.ZP = () => {
    let e = (0, a.e7)([u.default], () => u.default.getCurrentUser()),
        t = f.ZP.canUseCollectibles(e),
        n = (0, a.e7)([c.Z], () => c.Z.purchases),
        [r, s] = (0, a.Wu)([o.Z], () => [o.Z.categories, o.Z.products]);
    return (0, i.useMemo)(() => {
        let e = (0, l.uniqBy)([...(0, d.aj)(n), ...(0, d.XS)(r)], 'id').reduce(
            (e, r) => {
                let i = n.get(r.skuId);
                return (0, d.qS)(i) ? (e.premium_purchase.push(r), e) : null != i ? (e.purchase.push(r), e) : !t && (0, d.G1)(s.get(r.skuId)) ? (e.premium_purchase.push(r), e) : (e.preview.push(r), e);
            },
            {
                purchase: [],
                premium_purchase: [],
                preview: []
            }
        );
        return [
            {
                section: 'purchase',
                items: [E, p, ...e.purchase],
                height: 12,
                header: m.Z.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
            },
            {
                section: 'premium_purchase',
                items: e.premium_purchase,
                height: 12,
                header: m.Z.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
            },
            {
                section: 'preview',
                items: e.preview,
                height: 12,
                header: m.Z.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
            }
        ].filter((e) => {
            let { items: t } = e;
            return t.length > 0;
        });
    }, [r, s, n, t]);
};
