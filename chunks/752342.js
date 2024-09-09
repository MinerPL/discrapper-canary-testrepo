s.d(n, {
    Z: function () {
        return R;
    }
}),
    s(47120);
var t = s(735250);
s(470079);
var i = s(481060),
    o = s(100527),
    l = s(906732),
    r = s(5192),
    a = s(785717),
    c = s(687158),
    d = s(899007),
    u = s(648052),
    I = s(867176),
    _ = s(438163),
    E = s(681837),
    f = s(502762),
    x = s(530),
    m = s(303674),
    Z = s(952124),
    p = s(53558),
    h = s(544989),
    S = s(934861),
    v = s(740628),
    T = s(398145),
    g = s(228168),
    A = s(981631),
    N = s(689938),
    j = s(419758);
function R(e) {
    let { user: n, currentUser: s, guildId: R, channelId: L, messageId: b, roleId: M, sessionId: O, initialSection: C, initialSubsection: P, transitionState: y, onClose: U, sourceAnalyticsLocations: D = [] } = e,
        F = R === A.ME ? void 0 : R,
        B = (0, c.ZP)(n.id, F),
        { analyticsLocations: w } = (0, l.ZP)([...D, o.Z.SIMPLIFIED_PROFILE_MODAL]),
        G = (0, a.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: O,
            guildId: F,
            channelId: L,
            messageId: b,
            roleId: M
        }),
        V = (0, T.Z)(n);
    return (0, t.jsx)(l.Gt, {
        value: w,
        children: (0, t.jsx)(a.Mt, {
            value: G,
            children: (0, t.jsx)(i.ModalRoot, {
                transitionState: y,
                className: j.root,
                hideShadow: !0,
                'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
                children: (0, t.jsxs)(f.Z, {
                    user: n,
                    displayProfile: B,
                    profileType: g.y0.FULL_SIZE,
                    children: [
                        (0, t.jsx)(h.Z, {
                            profileType: g.y0.FULL_SIZE,
                            children: (0, t.jsx)(Z.Z, {
                                user: n,
                                guildId: F
                            })
                        }),
                        (0, t.jsxs)('header', {
                            children: [
                                (0, t.jsx)(I.Z, {
                                    user: n,
                                    displayProfile: B,
                                    profileType: g.y0.FULL_SIZE
                                }),
                                (0, t.jsxs)('div', {
                                    className: j.headerInner,
                                    children: [
                                        (0, t.jsx)(d.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: F,
                                            channelId: L,
                                            profileType: g.y0.FULL_SIZE
                                        }),
                                        (0, t.jsxs)('div', {
                                            className: j.headerButtons,
                                            children: [
                                                (0, t.jsx)(S.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: j.messageTextButton
                                                }),
                                                (0, t.jsx)(S.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: j.messageIconButton
                                                }),
                                                (0, t.jsx)(p.Z, {
                                                    user: n,
                                                    guildId: F
                                                }),
                                                (0, t.jsx)(m.Z, { user: n })
                                            ]
                                        }),
                                        (0, t.jsx)(_.Z, {
                                            user: n,
                                            profileType: g.y0.FULL_SIZE,
                                            hasEntered: y === i.ModalTransitionState.ENTERED,
                                            onClose: U
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, t.jsxs)('div', {
                            className: j.body,
                            children: [
                                (0, t.jsx)(x.Z, {
                                    user: n,
                                    profileType: g.y0.FULL_SIZE,
                                    nickname: r.ZP.getName(F, L, n),
                                    pronouns: null == B ? void 0 : B.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, t.jsx)(E.Z, { userId: n.id }),
                                    tags: (0, t.jsx)(u.Z, {
                                        displayProfile: B,
                                        profileType: g.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, t.jsx)(f.Z.Overlay, {
                                    className: j.overlay,
                                    children: (0, t.jsx)(v.Z, {
                                        user: n,
                                        currentUser: s,
                                        displayProfile: B,
                                        items: V,
                                        initialSection: null != C ? C : g.oh.BOT_INFO,
                                        initialSubsection: P,
                                        onClose: U
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
