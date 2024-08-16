var s = n(735250);
n(470079);
var a = n(120356),
    i = n.n(a),
    r = n(442837),
    l = n(481060),
    o = n(706454),
    c = n(594174),
    d = n(509545),
    u = n(78839),
    _ = n(930153),
    I = n(74538),
    E = n(937615),
    T = n(474936),
    m = n(689938),
    N = n(572780);
t.Z = (e) => {
    var t;
    let { className: n } = e,
        a = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
        S = (0, r.e7)([o.default], () => o.default.locale),
        h = (0, r.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
        g = (0, r.e7)([d.Z], () => (null != h ? d.Z.get(h.planId) : void 0)),
        C = null !== (t = (0, r.e7)([d.Z], () => (null != g ? d.Z.getForSkuAndInterval((0, I.Wz)(T.Si.GUILD), g.interval, g.intervalCount) : void 0))) && void 0 !== t ? t : T.GP[T.Xh.PREMIUM_MONTH_GUILD];
    return (0, s.jsxs)('div', {
        className: i()(N.wrapper, n),
        children: [
            (0, s.jsx)(l.Heading, {
                className: N.heading,
                variant: 'heading-xl/semibold',
                children: m.Z.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_HEADING_PRIMARY
            }),
            (0, s.jsx)(l.Text, {
                variant: 'text-md/normal',
                children: (function (e) {
                    let { currentUser: t, locale: n, guildBoostingPlanId: a, interval: i, intervalCount: r } = e,
                        l = I.ZP.getDefaultPrice(a, I.ZP.isPremium(t)),
                        o = I.ZP.getDefaultPrice(a, !1),
                        c = (0, E.og)((0, E.T4)(l.amount, l.currency), i, r),
                        d = (0, E.og)((0, E.T4)(o.amount, o.currency), i, r);
                    return I.ZP.isPremium(t, T.p9.TIER_2)
                        ? m.Z.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING_TIER_2.format({
                              price: c,
                              originalPrice: d,
                              originalPriceHook: (e, t) =>
                                  (0, s.jsx)(
                                      'span',
                                      {
                                          className: N.originalPrice,
                                          children: e
                                      },
                                      t
                                  ),
                              freeSubscriptionCount: T.cb,
                              discountPercent: (0, _.T3)(n, T.Rr / 100)
                          })
                        : I.ZP.isPremium(t, T.p9.TIER_1)
                          ? m.Z.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING_TIER_1.format({
                                price: c,
                                originalPrice: d,
                                originalPriceHook: (e, t) =>
                                    (0, s.jsx)(
                                        'span',
                                        {
                                            className: N.originalPrice,
                                            children: e
                                        },
                                        t
                                    ),
                                discountPercent: (0, _.T3)(n, T.Rr / 100)
                            })
                          : m.Z.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_SUBHEADING.format({ price: c });
                })({
                    currentUser: a,
                    locale: S,
                    guildBoostingPlanId: C.id,
                    interval: C.interval,
                    intervalCount: C.intervalCount
                })
            })
        ]
    });
};
