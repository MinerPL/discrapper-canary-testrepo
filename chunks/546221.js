n.d(t, {
    Z: function () {
        return p;
    }
});
var s = n(735250);
n(470079);
var a = n(481060), i = n(825055), r = n(937615), l = n(730647), o = n(584825), c = n(723047), d = n(997519), u = n(146710), _ = n(146610), E = n(8584), I = n(791382), T = n(277369), m = n(215124), N = n(981631), S = n(689938), h = n(243341);
function g(e) {
    let {
            payoutsByPeriod: t,
            team: n
        } = e, i = (0, c.mY)() ? null : S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EDIT_PAYMENT_METHOD_LINK.format({ url: null != n ? N.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(n.id) : null });
    return 0 === t.length ? (0, s.jsxs)(a.FormText, {
        type: a.FormText.Types.DESCRIPTION,
        children: [
            S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_EMPTY,
            ' ',
            i
        ]
    }) : (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(a.FormText, {
                type: a.FormText.Types.DESCRIPTION,
                children: [
                    S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_DESCRIPTION,
                    ' ',
                    i
                ]
            }),
            (0, s.jsx)(a.Spacer, { size: 16 }),
            (0, s.jsx)(E.ZP, { payoutsByPeriod: t })
        ]
    });
}
function C(e) {
    let {
            guildId: t,
            totalPayoutsForPeriod: n
        } = e, a = (0, o.qi)(t, { includeSoftDeleted: !0 });
    return null == n && 0 === a.length ? null : (0, s.jsx)(_.Z, {
        totalPayoutsForPeriod: n,
        guildId: t,
        className: h.currentMonthEarningsTable
    });
}
let x = e => {
    var t, n;
    let {
            guildId: l,
            application: o
        } = e, {
            loading: _,
            team: E,
            currentPeriod: x,
            allPeriods: p,
            metrics: R
        } = (0, d.Z)(l, o), f = (0, u.u)(l), L = (0, c.mY)();
    return _ ? (0, s.jsx)(a.Spinner, {}) : (0, s.jsxs)(s.Fragment, {
        children: [
            f && (0, s.jsxs)(s.Fragment, {
                children: [
                    (0, s.jsx)(i.Z, { children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_INSIGHTS_NOTICE_TEXT.format({ insightsURL: N.EYA.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(l) }) }),
                    (0, s.jsx)(a.Spacer, { size: 32 })
                ]
            }),
            (0, s.jsxs)(a.FormSection, {
                title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_HEADER,
                className: h.formSection,
                children: [
                    (0, s.jsx)(a.Spacer, { size: 8 }),
                    (0, s.jsxs)('div', {
                        className: h.metricsContainer,
                        children: [
                            (0, s.jsx)(I.Z, {
                                label: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_REVENUE,
                                value: (0, r.T4)(null !== (t = R.revenue) && void 0 !== t ? t : 0, N.pKx.USD),
                                additionalContent: (0, s.jsx)(I.H, {
                                    value: R.revenuePctChange,
                                    isPercent: !0
                                })
                            }),
                            (0, s.jsx)(I.Z, {
                                label: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_SUBSCRIBERS,
                                value: (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        null !== (n = R.subscribers) && void 0 !== n ? n : '-',
                                        ' ',
                                        (0, s.jsx)(a.UserIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: h.totalMembersIcon,
                                            'aria-hidden': !0
                                        })
                                    ]
                                }),
                                additionalContent: (0, s.jsx)(I.H, { value: R.subscriberChange })
                            })
                        ]
                    }),
                    (0, s.jsx)(C, {
                        guildId: l,
                        totalPayoutsForPeriod: x
                    })
                ]
            }),
            (0, s.jsx)(a.FormSection, {
                title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_HEADER,
                className: h.formSection,
                children: (0, s.jsx)(g, {
                    payoutsByPeriod: p,
                    team: E
                })
            }),
            (0, s.jsx)(a.FormSection, {
                title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TITLE,
                disabled: L,
                className: h.formSection,
                children: (0, s.jsx)(T.Z, {
                    guildId: l,
                    application: o
                })
            }),
            (0, s.jsx)(a.FormSection, {
                title: S.Z.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_TITLE,
                className: h.formSection,
                children: (0, s.jsx)(m.Z, {
                    guildId: l,
                    allPeriods: p
                })
            })
        ]
    });
};
function p(e) {
    return (0, s.jsx)(l.l, {
        guildId: e.guildId,
        children: (0, s.jsx)(x, { ...e })
    });
}
