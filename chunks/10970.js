t.d(s, {
    Z: function () {
        return S;
    }
}),
    t(789020);
var n = t(735250);
t(470079);
var a = t(442837),
    i = t(481060),
    r = t(601911),
    o = t(824856),
    l = t(565138),
    c = t(430824),
    d = t(171246),
    _ = t(696906),
    u = t(981631),
    E = t(689938),
    T = t(438578);
function S(e) {
    var s;
    let { app: t, currentSubscription: _, currentListing: u, alternativeListings: S, bundleSku: N } = e,
        A = (0, r.y)(t, 100),
        C = (0, d.KK)(N.flags),
        m = C ? i.ServerIcon : i.UserIcon,
        g = C ? E.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SERVER_SUBSCRIPTIONS : E.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PERSONAL_SUBSCRIPTIONS,
        h = null === (s = _.metadata) || void 0 === s ? void 0 : s.application_subscription_guild_id,
        O = (0, a.e7)([c.Z], () => (C && null != h ? c.Z.getGuild(h) : void 0), [h, C]);
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsxs)('div', {
                className: T.header,
                children: [
                    null != A &&
                        (0, n.jsx)(i.Image, {
                            src: A.href,
                            imageClassName: T.appIcon,
                            width: 48,
                            height: 48
                        }),
                    (0, n.jsxs)('div', {
                        children: [
                            (0, n.jsx)(i.Heading, {
                                variant: 'heading-xl/semibold',
                                children: t.name
                            }),
                            (0, n.jsxs)('div', {
                                className: T.subInfo,
                                children: [
                                    (0, n.jsxs)(i.Heading, {
                                        variant: 'heading-md/normal',
                                        className: T.subInfoType,
                                        children: [
                                            (0, n.jsx)(m, {
                                                size: 'xs',
                                                color: 'currentColor'
                                            }),
                                            ' ',
                                            g
                                        ]
                                    }),
                                    null != O &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)(i.Text, {
                                                    variant: 'text-md/normal',
                                                    children: '\u2022'
                                                }),
                                                (0, n.jsxs)('span', {
                                                    className: T.guildSubscription,
                                                    children: [
                                                        (0, n.jsx)(l.Z, {
                                                            guild: O,
                                                            size: l.Z.Sizes.SMOL
                                                        }),
                                                        (0, n.jsx)(i.Heading, {
                                                            variant: 'heading-md/semibold',
                                                            color: 'text-muted',
                                                            children: E.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SUBSCRIPTION_USED_IN.format({ guildName: O.name })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsx)(i.Text, {
                variant: 'text-md/normal',
                children: E.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PLAN_SWITCH_NOTICE
            }),
            (0, n.jsxs)('div', {
                className: T.subscriptions,
                children: [
                    (0, n.jsx)(o.Z, {
                        storeListing: u,
                        className: T.activeSubscriptionCard,
                        cta: (0, n.jsx)(i.Text, {
                            variant: 'eyebrow',
                            color: 'text-brand',
                            children: E.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CURRENT_PLAN
                        })
                    }),
                    S.map((e) =>
                        (0, n.jsx)(
                            I,
                            {
                                storeListing: e,
                                bundleSkuId: N.id
                            },
                            e.id
                        )
                    )
                ]
            })
        ]
    });
}
function I(e) {
    let { storeListing: s } = e,
        { openModal: t } = (0, _.Z)({
            showBenefitsFirst: !1,
            analyticsLocation: u.Sbl.APP_SUBSCRIPTIONS_MANAGEMENT,
            skuId: s.skuId,
            guildId: null
        });
    return (0, n.jsx)(
        o.Z,
        {
            storeListing: s,
            cta: (0, n.jsx)(i.Button, {
                size: i.Button.Sizes.SMALL,
                onClick: t,
                children: E.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CHOOSE_PLAN
            })
        },
        s.id
    );
}
