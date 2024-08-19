t.d(n, {
    Z: function () {
        return L;
    }
}),
    t(47120);
var s = t(735250);
t(470079);
var i = t(481060),
    o = t(100527),
    l = t(906732),
    r = t(5192),
    a = t(785717),
    c = t(318661),
    d = t(78675),
    u = t(741308),
    I = t(899007),
    _ = t(438163),
    f = t(681837),
    E = t(502762),
    m = t(530),
    p = t(645410),
    x = t(437758),
    Z = t(357836),
    v = t(544989),
    h = t(934861),
    S = t(616140),
    T = t(29530),
    A = t(228168),
    g = t(981631),
    N = t(689938),
    j = t(392214);
function L(e) {
    let { user: n, currentUser: t, guildId: L, channelId: R, messageId: b, roleId: C, sessionId: M, initialSection: O, initialSubsection: P, transitionState: y, onClose: U, sourceAnalyticsLocations: D = [] } = e,
        F = L === g.ME ? void 0 : L,
        B = (0, c.ZP)(n.id, F),
        { analyticsLocations: w } = (0, l.ZP)([...D, o.Z.SIMPLIFIED_PROFILE_MODAL]),
        G = (0, a.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: M,
            guildId: F,
            channelId: R,
            messageId: b,
            roleId: C
        }),
        V = (0, T.Z)(n);
    return (0, s.jsx)(l.Gt, {
        value: w,
        children: (0, s.jsx)(a.Mt, {
            value: G,
            children: (0, s.jsx)(i.ModalRoot, {
                transitionState: y,
                className: j.root,
                hideShadow: !0,
                'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
                children: (0, s.jsxs)(E.Z, {
                    user: n,
                    displayProfile: B,
                    profileType: A.y0.FULL_SIZE,
                    children: [
                        (0, s.jsx)(v.Z, {
                            profileType: A.y0.FULL_SIZE,
                            children: (0, s.jsx)(x.Z, {
                                user: n,
                                guildId: F
                            })
                        }),
                        (0, s.jsxs)('header', {
                            children: [
                                (0, s.jsx)(d.Z, {
                                    user: n,
                                    displayProfile: B,
                                    profileType: A.y0.FULL_SIZE,
                                    hasProfileEffect: (null == B ? void 0 : B.profileEffectId) != null
                                }),
                                (0, s.jsxs)('div', {
                                    className: j.headerInner,
                                    children: [
                                        (0, s.jsx)(I.Z, {
                                            user: n,
                                            displayProfile: B,
                                            guildId: F,
                                            channelId: R,
                                            profileType: A.y0.FULL_SIZE
                                        }),
                                        (0, s.jsxs)('div', {
                                            className: j.headerButtons,
                                            children: [
                                                (0, s.jsx)(h.c, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    className: j.messageTextButton
                                                }),
                                                (0, s.jsx)(h.v, {
                                                    userId: n.id,
                                                    onClose: U,
                                                    tooltipContainerClassName: j.messageIconButton
                                                }),
                                                (0, s.jsx)(Z.Z, {
                                                    user: n,
                                                    guildId: F
                                                }),
                                                (0, s.jsx)(p.Z, { user: n })
                                            ]
                                        }),
                                        (0, s.jsx)(_.Z, {
                                            user: n,
                                            profileType: A.y0.FULL_SIZE,
                                            hasEntered: y === i.ModalTransitionState.ENTERED,
                                            onClose: U
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: j.body,
                            children: [
                                (0, s.jsx)(m.Z, {
                                    user: n,
                                    profileType: A.y0.FULL_SIZE,
                                    nickname: r.ZP.getName(F, R, n),
                                    pronouns: null == B ? void 0 : B.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, s.jsx)(f.Z, { userId: n.id }),
                                    tags: (0, s.jsx)(u.Z, {
                                        displayProfile: B,
                                        profileType: A.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, s.jsx)(E.Z.Overlay, {
                                    className: j.overlay,
                                    children: (0, s.jsx)(S.Z, {
                                        user: n,
                                        currentUser: t,
                                        displayProfile: B,
                                        items: V,
                                        initialSection: null != O ? O : A.oh.BOT_INFO,
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
