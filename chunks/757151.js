t.d(s, {
    Z: function () {
        return V;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(409700),
    o = t(977059),
    l = t(518560),
    c = t(921801),
    d = t(398826),
    _ = t(526156),
    u = t(924356),
    E = t(24400),
    T = t(122897),
    S = t(623196),
    I = t(993315),
    N = t(883382),
    A = t(940021),
    C = t(402583),
    m = t(821035),
    g = t(694569),
    h = t(394655),
    O = t(230341),
    p = t(540204),
    R = t(546957),
    x = t(893996),
    M = t(864239),
    f = t(190014),
    D = t(301812),
    L = t(988043),
    P = t(919539),
    b = t(266132),
    Z = t(726985),
    v = t(981631),
    j = t(689938),
    B = t(129503);
let U = () =>
        (0, n.jsx)(x.Z, {
            title: j.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_SOCIAL_PERMISSIONS,
            webSetting: Z.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: (0, n.jsxs)(R.Z, {
                children: [
                    (0, n.jsx)(c.F, {
                        setting: Z.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                        children: (0, n.jsx)(p.Z, {})
                    }),
                    (0, n.jsx)(L.Z, {}),
                    (0, n.jsx)(P.Z, {}),
                    (0, n.jsx)(D.Z, {}),
                    (0, n.jsx)(f.Z, {})
                ]
            })
        }),
    G = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(x.Z, {
                    title: j.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT,
                    webSetting: Z.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                    children: [(0, n.jsx)(m.P, {}), (0, n.jsx)(T.Z, {}), (0, n.jsx)(h.Z, {}), (0, n.jsx)(E.Z, {}), (0, n.jsx)(u.Z, {}), (0, n.jsx)(M.Z, {})]
                }),
                (0, n.jsx)(U, {}),
                (0, n.jsx)(x.Z, {
                    title: j.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_FRIEND_REQUESTS,
                    webSetting: Z.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                    children: (0, n.jsx)(g.Z, {})
                })
            ]
        }),
    F = () => {
        let { enabled: e } = (0, o.S)({ location: 'PrivacySafetySettingsV2' });
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(x.Z, {
                    title: j.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_DISCORD_DATA_USAGE,
                    webSetting: Z.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                    children: [(0, n.jsx)(C.Z, {}), (0, n.jsx)(A.Z, {}), (0, n.jsx)(N.Z, {}), (0, n.jsx)(I.Z, {})]
                }),
                (0, n.jsx)(x.Z, {
                    title: j.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_REQUEST_DATA,
                    webSetting: Z.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
                    children: (0, n.jsx)(S.Z, {})
                }),
                e
                    ? (0, n.jsxs)(x.Z, {
                          title: j.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_VOICE_SECURITY,
                          webSetting: Z.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                          children: [(0, n.jsx)(O.Z, {}), (0, n.jsx)(b.Z, {})]
                      })
                    : null
            ]
        });
    },
    y = () => (0, n.jsx)(l.Z, {});
function V(e) {
    return (
        a.useEffect(() => {
            (0, r.I)(), (0, d.A)();
        }, []),
        (0, n.jsxs)('div', {
            className: B.settingsPage,
            children: [
                (0, n.jsx)(i.HeadingLevel, {
                    children: (0, n.jsx)(i.Heading, {
                        variant: 'heading-xl/semibold',
                        children: j.Z.Messages.PRIVACY_AND_SAFETY
                    })
                }),
                (0, n.jsx)(_.Z, {
                    parentSetting: Z.s6.PRIVACY_AND_SAFETY_V2,
                    settingsSection: v.oAB.PRIVACY_AND_SAFETY_V2,
                    panelClassName: B.tabPanel,
                    tabs: [
                        {
                            title: j.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL,
                            component: G,
                            setting: Z.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
                        },
                        {
                            title: j.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY,
                            component: F,
                            setting: Z.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
                        },
                        {
                            title: j.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                            component: y,
                            setting: Z.s6.PRIVACY_AND_SAFETY_STANDING
                        }
                    ]
                })
            ]
        })
    );
}
