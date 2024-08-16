n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    i = n(481060),
    r = n(313201),
    l = n(723047),
    o = n(727843),
    c = n(290348),
    d = n(164000),
    u = n(783454),
    _ = n(862319),
    I = n(140285),
    E = n(390583),
    T = n(641249),
    m = n(574085),
    N = n(293810),
    S = n(689938),
    h = n(325850);
function g(e) {
    let { allSubscriptionListings: t } = e,
        { editStateId: n, guildId: g } = (0, o.N)(),
        [C, x] = c.UE(n),
        [p, R] = c.R7(n),
        f = a.useMemo(() => t.filter((e) => e.id !== n), [t, n]),
        { isFullServerGating: L } = (0, d.Z)(g),
        O = (0, r.Dt)(),
        A = (0, l.mY)();
    return (0, s.jsxs)(u.Z, {
        title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_BENEFITS_HEADER_TITLE,
        description: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_BENEFITS_HEADER_SUBTITLE,
        children: [
            (0, s.jsxs)(i.FormSection, {
                title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_HEADER_TITLE,
                disabled: A,
                children: [
                    (0, s.jsx)(i.FormText, {
                        type: i.FormText.Types.DESCRIPTION,
                        className: h.formDescription,
                        disabled: A,
                        children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_BENEFIT_IMPORT_HEADER_SUBTITLE
                    }),
                    (0, s.jsx)(_.Z, {
                        channelBenefits: C,
                        intangibleBenefits: p,
                        subscriptionListings: f,
                        onImport: function (e, t) {
                            x((t) => t.concat(e)), R((e) => e.concat(t));
                        }
                    }),
                    (0, s.jsx)(i.Spacer, { size: 8 }),
                    (0, s.jsx)(_.w, {
                        guildId: g,
                        onImport: function (e) {
                            x((t) => {
                                let n = new Set(
                                    t.map((e) => {
                                        let { ref_id: t } = e;
                                        return t;
                                    })
                                );
                                return [
                                    ...t,
                                    ...e
                                        .filter((e) => !n.has(e))
                                        .map((e) => ({
                                            ref_id: e,
                                            ref_type: N.Qs.CHANNEL
                                        }))
                                ];
                            });
                        },
                        disabled: A
                    })
                ]
            }),
            (0, s.jsx)(i.Spacer, { size: 24 }),
            (0, s.jsxs)(i.FormSection, {
                title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_CHANNELS_TITLE,
                titleId: O,
                disabled: A,
                children: [
                    (0, s.jsx)(i.FormText, {
                        type: i.FormText.Types.DESCRIPTION,
                        className: h.formDescription,
                        disabled: A,
                        children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_CHANNEL_BENEFITS_CHANNELS_DESCRIPTION
                    }),
                    L &&
                        (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsx)(I.Z, {
                                    'aria-labelledby': O,
                                    disabled: A
                                }),
                                (0, s.jsx)(i.Spacer, { size: 8 })
                            ]
                        }),
                    (0, s.jsx)(E.Z, {})
                ]
            }),
            (0, s.jsx)(i.Spacer, { size: 24 }),
            (0, s.jsxs)(i.FormSection, {
                title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_TITLE,
                disabled: A,
                children: [
                    (0, s.jsx)(i.FormText, {
                        type: i.FormText.Types.DESCRIPTION,
                        className: h.formDescription,
                        disabled: A,
                        children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_INTANGIBLE_BENEFITS_DESCRIPTION
                    }),
                    (0, s.jsx)(m.Z, {})
                ]
            }),
            (0, s.jsx)(i.Spacer, { size: 24 }),
            (0, s.jsx)(T.Z, {})
        ]
    });
}
