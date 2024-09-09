s.d(n, {
    Z: function () {
        return L;
    }
}),
    s(47120);
var t = s(735250),
    i = s(470079),
    o = s(481060),
    l = s(727637),
    r = s(100527),
    a = s(906732),
    c = s(680295),
    d = s(5192),
    u = s(785717),
    I = s(687158),
    _ = s(899007),
    E = s(648052),
    f = s(867176),
    x = s(280885),
    m = s(900927),
    Z = s(678738),
    p = s(502762),
    h = s(530),
    S = s(679332),
    v = s(544989),
    T = s(228168),
    g = s(981631),
    A = s(689938),
    N = s(419758),
    j = s(642411),
    R = s(523438);
function L(e) {
    let { user: n, guildId: s, channelId: L, messageId: b, roleId: M, sessionId: O, transitionState: C, onClose: P, sourceAnalyticsLocations: y = [] } = e,
        U = s === g.ME ? void 0 : s,
        D = (0, I.ZP)(n.id, U),
        { analyticsLocations: F } = (0, a.ZP)([...y, r.Z.SIMPLIFIED_PROFILE_MODAL]),
        B = (0, u.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: O,
            guildId: U,
            channelId: L,
            messageId: b,
            roleId: M
        }),
        w = i.createRef(),
        G = (0, l.Z)(w);
    return (0, t.jsx)(a.Gt, {
        value: F,
        children: (0, t.jsx)(u.Mt, {
            value: B,
            children: (0, t.jsxs)(o.ModalRoot, {
                transitionState: C,
                className: N.root,
                hideShadow: !0,
                'aria-label': A.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, t.jsxs)(p.Z, {
                        user: n,
                        displayProfile: D,
                        profileType: T.y0.FULL_SIZE,
                        ref: w,
                        children: [
                            (0, t.jsx)(v.Z, {
                                profileType: T.y0.FULL_SIZE,
                                children: (0, t.jsx)(S.Z, { user: n })
                            }),
                            (0, t.jsxs)('header', {
                                children: [
                                    (0, t.jsx)(f.Z, {
                                        user: n,
                                        displayProfile: D,
                                        profileType: T.y0.FULL_SIZE
                                    }),
                                    (0, t.jsx)('div', {
                                        className: N.headerInner,
                                        children: (0, t.jsx)(_.Z, {
                                            user: n,
                                            displayProfile: D,
                                            guildId: U,
                                            channelId: L,
                                            profileType: T.y0.FULL_SIZE
                                        })
                                    })
                                ]
                            }),
                            (0, t.jsxs)('div', {
                                className: N.body,
                                children: [
                                    (0, t.jsx)(h.Z, {
                                        user: n,
                                        profileType: T.y0.FULL_SIZE,
                                        nickname: d.ZP.getName(U, L, n),
                                        pronouns: null == D ? void 0 : D.pronouns,
                                        nicknameVariant: 'heading-xl/bold',
                                        tags: (0, t.jsx)(E.Z, {
                                            displayProfile: D,
                                            profileType: T.y0.FULL_SIZE,
                                            onClose: P
                                        })
                                    }),
                                    (0, t.jsx)(p.Z.Overlay, {
                                        className: N.overlay,
                                        children: (0, t.jsxs)('div', {
                                            className: R.container,
                                            children: [
                                                (0, t.jsx)(o.TabBar, {
                                                    className: R.tabBar,
                                                    type: 'top',
                                                    selectedItem: T.oh.BOT_INFO,
                                                    onItemSelect: g.dG4,
                                                    children: (0, t.jsx)(
                                                        o.TabBar.Item,
                                                        {
                                                            className: R.tabBarItem,
                                                            id: T.oh.BOT_INFO,
                                                            'aria-label': A.Z.Messages.USER_PROFILE_ABOUT_ME,
                                                            children: (0, t.jsx)(o.Text, {
                                                                variant: 'text-sm/normal',
                                                                children: A.Z.Messages.USER_PROFILE_ABOUT_ME
                                                            })
                                                        },
                                                        T.oh.BOT_INFO
                                                    )
                                                }),
                                                (0, t.jsxs)(o.ScrollerThin, {
                                                    fade: !0,
                                                    className: j.scroller,
                                                    children: [
                                                        (0, t.jsx)(x.Z, {
                                                            userId: n.id,
                                                            userBio: null == D ? void 0 : D.bio,
                                                            setLineClamp: !1
                                                        }),
                                                        (0, t.jsx)(Z.Z, {
                                                            heading: A.Z.Messages.BOT_PROFILE_CREATED_ON,
                                                            children: (0, t.jsx)(m.Z, {
                                                                userId: n.id,
                                                                guildId: U,
                                                                tooltipDelay: T.vB
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (null == D ? void 0 : D.profileEffectId) != null &&
                        (0, t.jsx)(c.Z, {
                            profileEffectId: null == D ? void 0 : D.profileEffectId,
                            isHovering: G
                        })
                ]
            })
        })
    });
}
