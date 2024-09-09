t.d(s, {
    Z: function () {
        return k;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(409700),
    l = t(977059),
    c = t(518560),
    d = t(921801),
    _ = t(430824),
    u = t(358085),
    E = t(526156),
    T = t(924356),
    S = t(24400),
    I = t(122897),
    N = t(623196),
    m = t(993315),
    C = t(883382),
    A = t(940021),
    g = t(402583),
    h = t(821035),
    O = t(694569),
    p = t(394655),
    R = t(230341),
    x = t(540204),
    f = t(893996),
    M = t(190014),
    D = t(301812),
    P = t(988043),
    L = t(919539),
    b = t(266132),
    Z = t(726985),
    v = t(736530),
    j = t(981631),
    B = t(689938),
    U = t(202490);
let G = () => {
        var e;
        let [s, t] = a.useState(v.T),
            r = (0, i.e7)([_.Z], () => _.Z.getGuild(s)),
            o = null !== (e = null == r ? void 0 : r.hasFeature(j.oNc.HUB)) && void 0 !== e && e;
        return (0, n.jsxs)(f.Z, {
            title: B.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_SOCIAL_PERMISSIONS,
            webSetting: Z.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: [
                (0, n.jsx)(d.F, {
                    setting: Z.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                    children: (0, n.jsx)(x.Z, {
                        guildId: s,
                        onChange: t
                    })
                }),
                (0, n.jsx)(P.Z, {
                    guildId: s,
                    isHubGuild: o
                }),
                (0, n.jsx)(L.Z, {
                    guildId: s,
                    isHubGuild: o
                }),
                (0, n.jsx)(D.Z, { guildId: s }),
                (0, n.jsx)(M.Z, { guildId: s })
            ]
        });
    },
    F = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(f.Z, {
                    title: B.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT,
                    webSetting: Z.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                    children: [(0, n.jsx)(h.P, {}), (0, n.jsx)(I.Z, {}), (0, n.jsx)(p.Z, {}), (0, n.jsx)(S.Z, {}), (0, n.jsx)(T.Z, {})]
                }),
                (0, n.jsx)(G, {}),
                (0, n.jsx)(f.Z, {
                    title: B.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_FRIEND_REQUESTS,
                    webSetting: Z.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                    children: (0, n.jsx)(O.Z, {})
                })
            ]
        }),
    y = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(f.Z, {
                    title: B.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_DISCORD_DATA_USAGE,
                    webSetting: Z.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                    children: [(0, n.jsx)(g.Z, {}), (0, n.jsx)(A.Z, {}), (0, n.jsx)(C.Z, {}), (0, n.jsx)(m.Z, {})]
                }),
                (0, n.jsx)(f.Z, {
                    title: B.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_REQUEST_DATA,
                    webSetting: Z.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
                    children: (0, n.jsx)(N.Z, {})
                })
            ]
        }),
    V = () =>
        (0, n.jsx)(f.Z, {
            title: B.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
            webSetting: Z.s6.PRIVACY_AND_SAFETY_STANDING_CATEGORY,
            children: (0, n.jsx)(c.Z, {})
        }),
    Y = () =>
        (0, n.jsxs)(f.Z, {
            title: B.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_VOICE_SECURITY,
            webSetting: Z.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            children: [(0, n.jsx)(R.Z, {}), (0, n.jsx)(b.Z, {})]
        }),
    w = (e) => {
        let { children: s } = e;
        return (0, n.jsx)('div', {
            className: U.settingsSection,
            children: s
        });
    };
function k(e) {
    let { enabled: s } = (0, l.S)({ location: 'PrivacySafetySettingsV2' });
    return (
        a.useEffect(() => {
            (0, o.I)();
        }, []),
        (0, n.jsxs)(w, {
            children: [
                (0, n.jsx)(r.HeadingLevel, {
                    children: (0, n.jsx)(r.Heading, {
                        variant: 'heading-xl/semibold',
                        children: B.Z.Messages.PRIVACY_AND_SAFETY
                    })
                }),
                (0, n.jsx)(E.Z, {
                    parentSetting: Z.s6.PRIVACY_AND_SAFETY_V2,
                    settingsSection: j.oAB.PRIVACY_AND_SAFETY_V2,
                    panelClassName: U.tabPanel,
                    tabs: [
                        {
                            title: B.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL,
                            component: F,
                            setting: Z.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
                        },
                        {
                            title: B.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY,
                            component: y,
                            setting: Z.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
                        },
                        {
                            title: B.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                            component: V,
                            setting: Z.s6.PRIVACY_AND_SAFETY_STANDING
                        },
                        {
                            title: B.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_ENCRYPTION,
                            component: Y,
                            setting: Z.s6.PRIVACY_AND_SAFETY_ENCRYPTION,
                            predicate: () => s && (0, u.isDesktop)()
                        }
                    ]
                })
            ]
        })
    );
}
