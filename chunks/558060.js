n.d(t, {
    Z: function () {
        return p;
    }
});
var s = n(735250);
n(470079);
var r = n(120356),
    a = n.n(r),
    i = n(481060),
    o = n(884697),
    c = n(409116),
    l = n(200615),
    d = n(981631),
    u = n(689938),
    f = n(889540);
function p(e) {
    let { product: t, isPremiumUser: n, discount: r, className: p, nitroUpsell: g = !1 } = e,
        C = (0, o.ql)(t, d.tuJ.DEFAULT);
    if (null == C) return null;
    if (C.amount <= 0)
        return (0, s.jsx)('div', {
            className: a()(f.priceTagsContainer, p),
            children: (0, s.jsx)(c.F, { price: C })
        });
    let _ = (0, o.ql)(t, d.tuJ.PREMIUM_TIER_2),
        m = !n && !(0, o.x6)(t),
        h =
            (0, o.x6)(t) && n
                ? {
                      ...C,
                      amount: r.original
                  }
                : C;
    return (0, s.jsxs)('div', {
        className: a()(f.priceTagsContainer, p),
        children: [
            (0, s.jsx)(c.F, {
                price: h,
                discount: n ? o.f_ : r,
                className: a()(f.price, {
                    [f.striked]: n,
                    [f.dimmed]: n,
                    [f.fullPrice]: m
                })
            }),
            null != _ &&
                (0, s.jsx)(c.F, {
                    price: _,
                    discount: n ? r : o.f_,
                    renderPrice: g
                        ? (e) =>
                              (0, s.jsx)(i.Text, {
                                  variant: 'text-xs/medium',
                                  children: u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                                      price: e,
                                      subscribeNowHook: (e) => (0, s.jsx)(l.F, { text: e })
                                  })
                              })
                        : m
                          ? (e) => u.Z.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({ price: e })
                          : void 0,
                    className: a()(f.price, {
                        [f.dimmed]: !n,
                        [f.fullPrice]: m
                    }),
                    variant: n ? void 0 : 'text-xs/semibold',
                    icon: (0, s.jsx)(i.Tooltip, {
                        text: u.Z.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                        'aria-label': u.Z.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                        children: (e) => {
                            let { ...t } = e;
                            return (0, s.jsx)(i.NitroWheelIcon, {
                                size: 'md',
                                color: 'currentColor',
                                ...t,
                                className: a()(f.premiumIcon, { [f.fullPrice]: m })
                            });
                        }
                    })
                })
        ]
    });
}
