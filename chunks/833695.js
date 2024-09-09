n.d(t, {
    Z: function () {
        return g;
    }
});
var s = n(735250);
n(470079);
var a = n(399606),
    i = n(481060),
    r = n(395586),
    l = n(755930),
    o = n(909667),
    c = n(968820),
    d = n(200472),
    u = n(489028),
    _ = n(277369),
    I = n(215124),
    E = n(999382),
    T = n(267101),
    m = n(287576),
    N = n(894610),
    S = n(689938);
function h(e) {
    let { listingId: t } = e,
        n = (0, T.r)(t);
    return null == n ? null : (0, s.jsx)(l.bL, { children: n.name });
}
function g(e) {
    var t, n, l;
    let { guildId: T } = e,
        g = (0, m.Z)(T),
        C = (0, r.f3)(),
        x = (0, a.e7)([E.Z], () => E.Z.getGuild());
    return g.loading || null == x
        ? (0, s.jsx)(i.Spinner, {})
        : null == g.application
          ? (0, s.jsx)(u.Z, { guild: x })
          : (0, s.jsxs)(d.Z, {
                children: [
                    (0, s.jsx)(c.Z, {
                        revenue: g.metrics.revenue,
                        revenueTrend: g.metrics.revenuePctChange,
                        summaryMetricLabel: S.Z.Messages.GUILD_PRODUCT_PURCHASES_TITLE,
                        summaryMetricValue: null !== (n = g.metrics.paymentsCount) && void 0 !== n ? n : '-',
                        summaryMetricTrend: null !== (l = g.metrics.paymentsCountChange) && void 0 !== l ? l : 0,
                        summaryMetricTrendIsPercent: !1,
                        children: (0, s.jsx)(N.Z, {
                            guildId: T,
                            earningsData: g
                        })
                    }),
                    (0, s.jsx)(i.FormSection, {
                        title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_HEADER,
                        children: (0, s.jsx)(o.Z, {
                            ListingIdLabel: h,
                            payoutsByPeriod: g.payoutsByPeriod,
                            team: null === (t = g.application) || void 0 === t ? void 0 : t.team
                        })
                    }),
                    (0, s.jsx)(i.FormSection, {
                        title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TITLE,
                        disabled: C,
                        children: (0, s.jsx)(_.Z, {
                            guildId: T,
                            application: g.application
                        })
                    }),
                    (0, s.jsx)(i.FormSection, {
                        title: S.Z.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_TITLE,
                        children: (0, s.jsx)(I.Z, {
                            guildId: T,
                            allPeriods: g.payoutsByPeriod
                        })
                    })
                ]
            });
}
