n.d(t, {
    Z: function () {
        return g;
    }
});
var s = n(735250);
n(470079);
var r = n(120356), a = n.n(r), o = n(481060), i = n(884697), l = n(409116), c = n(200615), d = n(981631), u = n(689938), p = n(513793);
function g(e) {
    let {
            product: t,
            isPremiumUser: n,
            discount: r,
            className: g,
            nitroUpsell: f = !1
        } = e, C = (0, i.ql)(t, d.tuJ.DEFAULT);
    if (null == C)
        return null;
    if (C.amount <= 0)
        return (0, s.jsx)('div', {
            className: a()(p.priceTagsContainer, g),
            children: (0, s.jsx)(l.F, { price: C })
        });
    let m = (0, i.ql)(t, d.tuJ.PREMIUM_TIER_2), h = !n && !(0, i.x6)(t), _ = (0, i.x6)(t) && n ? {
            ...C,
            amount: r.original
        } : C;
    return (0, s.jsxs)('div', {
        className: a()(p.priceTagsContainer, g),
        children: [
            (0, s.jsx)(l.F, {
                price: _,
                discount: n ? i.f_ : r,
                className: a()(p.price, {
                    [p.striked]: n,
                    [p.dimmed]: n,
                    [p.fullPrice]: h
                })
            }),
            null != m && (0, s.jsx)(l.F, {
                price: m,
                discount: n ? r : i.f_,
                renderPrice: f ? e => (0, s.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    children: u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                        price: e,
                        subscribeNowHook: e => (0, s.jsx)(c.F, { text: e })
                    })
                }) : h ? e => u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({ price: e }) : void 0,
                className: a()(p.price, {
                    [p.dimmed]: !n,
                    [p.fullPrice]: h
                }),
                variant: n ? void 0 : 'text-xs/semibold',
                icon: (0, s.jsx)(o.Tooltip, {
                    text: u.Z.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                    'aria-label': u.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                    children: e => {
                        let {...t} = e;
                        return (0, s.jsx)(o.NitroWheelIcon, {
                            size: 'md',
                            color: 'currentColor',
                            ...t,
                            className: a()(p.premiumIcon, { [p.fullPrice]: h })
                        });
                    }
                })
            })
        ]
    });
}
