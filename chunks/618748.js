n.d(t, {
    Z: function () {
        return P;
    }
});
var s = n(735250);
n(470079);
var a = n(442837), i = n(481060), r = n(204875), l = n(715796), o = n(434404), c = n(999382), d = n(962086), u = n(225675), _ = n(703656), E = n(577275), I = n(430824), T = n(594174), m = n(823379), N = n(730647), S = n(584825), h = n(723047), g = n(303737), C = n(568074), x = n(411667), p = n(903773), R = n(822531), f = n(909656), L = n(210591), O = n(927731), A = n(798680), M = n(509026), v = n(981631), D = n(176505), j = n(829857), Z = n(689938), b = n(515852);
function U(e) {
    let {
            application: t,
            guild: n
        } = e, i = (0, S.YB)(n.id), r = (0, S.qi)(n.id), l = r.some(e => null != e.name && null != e.subscription_plans[0] && null != e.description && null != e.image_asset), o = (0, a.e7)([I.Z], () => I.Z.getRoles(n.id)), c = r.map(e => o[e.role_id]).some(e => null != e && 0 !== e.color), d = r.some(e => e.role_benefits.benefits.length > 0), u = null != t && n.hasFeature(v.oNc.ROLE_SUBSCRIPTIONS_ENABLED), _ = [
            {
                title: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PAYMENT,
                items: [{
                        description: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_PAYMENT_ENABLE,
                        completed: u
                    }]
            },
            {
                title: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO,
                items: [
                    {
                        description: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_FORMAT,
                        completed: !0
                    },
                    {
                        description: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_DESCRIPTION,
                        completed: (null == i ? void 0 : i.description) != null && '' !== i.description
                    },
                    {
                        description: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_INFO_COVER_IMAGE,
                        completed: (null == i ? void 0 : i.cover_image_asset) != null
                    }
                ]
            },
            {
                title: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_TIERS,
                items: [
                    {
                        description: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_BASICS,
                        completed: l
                    },
                    {
                        description: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_FLAIR,
                        completed: c
                    },
                    {
                        description: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_CHECKLIST_TIER_PERKS,
                        completed: d
                    }
                ]
            }
        ];
    return (0, s.jsx)(L.Z, { children: _ });
}
function G(e) {
    let {application: t} = e, {teams: n} = (0, E.Z)({ refreshOnDepChange: !1 }), a = n.find(e => {
            var n;
            return e.id === (null == t ? void 0 : null === (n = t.team) || void 0 === n ? void 0 : n.id);
        }), r = [
            j.C.ACTION_REQUIRED,
            j.C.BLOCKED,
            j.C.SUSPENDED
        ];
    return (null == a ? void 0 : a.payout_account_status) != null && r.includes(null == a ? void 0 : a.payout_account_status) ? (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(i.Spacer, { size: 16 }),
            (0, s.jsx)(p.Z, { children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYOUTS_PROBLEM_WARNING.format({ url: v.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(a.id) }) }),
            (0, s.jsx)(i.Spacer, { size: 16 })
        ]
    }) : null;
}
function P(e) {
    let t, {
            guild: n,
            application: i
        } = e, r = (0, a.e7)([c.Z], () => c.Z.getProps().subsection), o = null != i && n.hasFeature(v.oNc.ROLE_SUBSCRIPTIONS_ENABLED);
    return (0, l.P)(n), t = o ? function (e) {
        if (e === v.KsC.ROLE_SUBSCRIPTION_EMOJI)
            return A.ue.EMOJIS;
        return A.ue.TIERS;
    }(r) : A.ue.PAYMENT, (0, s.jsx)(N.l, {
        guildId: n.id,
        refetchOnMount: !0,
        children: (0, s.jsx)(h.in, {
            guildId: n.id,
            children: (0, s.jsx)(A.M7, {
                initialTab: t,
                children: (0, s.jsx)(B, {
                    guild: n,
                    application: i
                })
            })
        })
    });
}
function B(e) {
    let t, {
            guild: n,
            application: l
        } = e, c = null != l && n.hasFeature(v.oNc.ROLE_SUBSCRIPTIONS_ENABLED), {
            currentTab: E,
            setCurrentTab: S
        } = (0, A.dw)(), h = (0, N.f)(), p = (0, a.e7)([T.default], () => T.default.getCurrentUser()), L = (0, C.Z)(n.id), j = n.isOwner(p), P = () => {
            let e = I.Z.getRole(n.id, n.getEveryoneRoleId());
            if (null == e)
                return;
            o.Z.close();
            let t = { [e.id]: e };
            (0, d.iD)(n.id, {
                type: u.z.SERVER_SHOP,
                roles: t,
                initialTab: 'role_subscriptions',
                returnToSection: v.pNK.ROLE_SUBSCRIPTIONS
            }), (0, g.be)(n.id), (0, _.uL)(v.Z5c.CHANNEL(n.id, D.oC.ROLE_SUBSCRIPTIONS));
        };
    if (!h)
        return (0, s.jsx)(i.Spinner, {});
    switch (E) {
    case A.ue.BASIC_INFO:
        t = (0, s.jsx)(f.Z, { guild: n });
        break;
    case A.ue.TIERS:
        t = (0, s.jsx)(O.Z, { guildId: n.id });
        break;
    case A.ue.PAYMENT:
        t = (0, s.jsx)(R.Z, { guild: n });
        break;
    case A.ue.EMOJIS:
        t = (0, s.jsx)(M.Z, { guild: n });
        break;
    default:
        (0, m.vE)(E);
    }
    return (0, s.jsxs)('div', {
        className: b.container,
        children: [
            (0, s.jsxs)('div', {
                className: b.mainContent,
                children: [
                    (0, s.jsx)(i.FormTitle, {
                        tag: 'h1',
                        children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
                    }),
                    (0, s.jsx)(i.FormText, {
                        type: i.FormText.Types.DESCRIPTION,
                        children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_DESCRIPTION
                    }),
                    (0, s.jsx)(x.Z, { guild: n }),
                    c && (0, s.jsx)(G, { application: l }),
                    (0, s.jsxs)('div', {
                        className: b.tabBarContainer,
                        children: [
                            (0, s.jsxs)(i.TabBar, {
                                className: b.tabBar,
                                'aria-label': Z.Z.Messages.OPTIONS,
                                selectedItem: E,
                                type: 'top',
                                look: 'brand',
                                onItemSelect: S,
                                children: [
                                    (0, s.jsx)(r.Z, {
                                        id: A.ue.BASIC_INFO,
                                        disabledTooltip: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
                                        disabled: !c,
                                        children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO
                                    }),
                                    (0, s.jsx)(r.Z, {
                                        id: A.ue.TIERS,
                                        disabledTooltip: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
                                        disabled: !c,
                                        children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_TIERS
                                    }),
                                    (0, s.jsx)(r.Z, {
                                        id: A.ue.EMOJIS,
                                        disabledTooltip: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
                                        disabled: !c,
                                        children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_EMOJI
                                    }),
                                    j ? (0, s.jsx)(i.TabBar.Item, {
                                        className: b.__invalid_tabBarItem,
                                        id: A.ue.PAYMENT,
                                        children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PAYMENT
                                    }) : null
                                ]
                            }),
                            c && (0, s.jsx)('div', {
                                className: b.previewButton,
                                children: (0, s.jsx)(i.Tooltip, {
                                    text: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PREVIEW_DISABLED,
                                    children: e => {
                                        let {
                                            onMouseEnter: t,
                                            onMouseLeave: n
                                        } = e;
                                        return (0, s.jsx)(i.Button, {
                                            disabled: L,
                                            onMouseEnter: L ? t : void 0,
                                            onMouseLeave: L ? n : void 0,
                                            onClick: P,
                                            color: i.Button.Colors.PRIMARY,
                                            size: i.Button.Sizes.SMALL,
                                            grow: !L,
                                            look: i.Button.Looks.OUTLINED,
                                            className: b.previewButton,
                                            children: Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PREVIEW
                                        });
                                    }
                                })
                            })
                        ]
                    }),
                    t
                ]
            }),
            (0, s.jsx)(U, {
                application: l,
                guild: n
            })
        ]
    });
}
