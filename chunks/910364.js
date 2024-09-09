s.d(n, {
    Z: function () {
        return U;
    }
}),
    s(47120);
var t = s(735250),
    i = s(470079),
    o = s(442837),
    l = s(481060),
    r = s(727637),
    a = s(58540),
    c = s(100527),
    d = s(906732),
    u = s(680295),
    I = s(699516),
    _ = s(5192),
    E = s(785717),
    f = s(221292),
    x = s(910128),
    m = s(687158),
    Z = s(326094),
    p = s(113557),
    h = s(867176),
    S = s(169979),
    v = s(119096),
    T = s(502762),
    g = s(544989),
    A = s(705556),
    N = s(481932),
    j = s(195387),
    R = s(272510),
    L = s(171368),
    b = s(62154),
    M = s(412317),
    O = s(228168),
    C = s(981631),
    P = s(689938),
    y = s(419758);
function U(e) {
    let { user: n, currentUser: s, guildId: U, channelId: D, messageId: F, roleId: B, sessionId: w, friendToken: G, initialSection: V, initialSubsection: k, transitionState: W, onClose: Y, showGuildProfile: K = !0, sourceAnalyticsLocations: H = [] } = e,
        z = U === C.ME ? void 0 : U,
        { analyticsLocations: q } = (0, d.ZP)([...H, c.Z.SIMPLIFIED_PROFILE_MODAL]),
        Q = (0, Z.Z)({
            user: n,
            currentUser: s,
            location: C.Sbl.SIMPLIFIED_USER_PROFILE
        }),
        X = (0, E.ZB)({
            layout: Q ? 'SIMPLIFIED_MODAL' : 'SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE',
            userId: n.id,
            sourceSessionId: w,
            guildId: z,
            channelId: D,
            messageId: F,
            roleId: B,
            showGuildProfile: K
        }),
        { persistentCallCtaEnabled: J, activeInviteToCallCtaEnabled: $ } = (0, x.l)({ location: 'UserProfileModalHeader' }),
        [ee, en] = i.useState(),
        [es, et] = i.useState(),
        ei = (e) => {
            en(e.interactionType), et(e.interactionSourceType);
        },
        eo = (0, m.ZP)(n.id, K ? z : void 0),
        el = (0, m.ZP)(n.id, z),
        er = (0, o.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
        ea = i.useMemo(() => (null != z ? { [z]: [n.id] } : {}), [z, n.id]);
    (0, a.$)(ea);
    let ec = i.createRef(),
        ed = (0, r.Z)(ec),
        [eu, eI] = i.useState(!1),
        [e_, eE] = i.useState(!1),
        [ef, ex] = i.useState(!1),
        em = () =>
            (null == el ? void 0 : el.guildId) == null
                ? null
                : (null == eo ? void 0 : eo.guildId) != null
                  ? (0, t.jsx)(l.MenuItem, {
                        id: 'view-main-profile',
                        label: P.Z.Messages.VIEW_MAIN_PROFILE,
                        subtext: P.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: _.ZP.getName(void 0, void 0, n) }),
                        action: () => {
                            Y(),
                                (0, L.openUserProfileModal)({
                                    ...X,
                                    showGuildProfile: !1,
                                    friendToken: G,
                                    sourceAnalyticsLocations: H
                                }),
                                (0, f.pQ)({
                                    action: 'PRESS_VIEW_MAIN_PROFILE',
                                    analyticsLocations: q,
                                    ...X
                                });
                        }
                    })
                  : (0, t.jsx)(l.MenuItem, {
                        id: 'view-server-profile',
                        label: P.Z.Messages.VIEW_SERVER_PROFILE,
                        subtext: P.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: _.ZP.getName(z, D, n) }),
                        action: () => {
                            Y(),
                                (0, L.openUserProfileModal)({
                                    ...X,
                                    showGuildProfile: !0,
                                    friendToken: G,
                                    sourceAnalyticsLocations: H
                                }),
                                (0, f.pQ)({
                                    action: 'PRESS_VIEW_SERVER_PROFILE',
                                    analyticsLocations: q,
                                    ...X
                                });
                        }
                    });
    return (0, t.jsx)(d.Gt, {
        value: q,
        children: (0, t.jsx)(E.Mt, {
            value: X,
            children: (0, t.jsxs)(l.ModalRoot, {
                transitionState: W,
                className: y.root,
                hideShadow: !0,
                'aria-label': P.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, t.jsxs)(T.Z, {
                        user: n,
                        displayProfile: eo,
                        profileType: O.y0.FULL_SIZE,
                        ref: ec,
                        children: [
                            (0, t.jsxs)(g.Z, {
                                profileType: O.y0.FULL_SIZE,
                                children: [
                                    (0, t.jsx)(j.Z, {
                                        user: n,
                                        guildId: z,
                                        channelId: D,
                                        onClose: Y
                                    }),
                                    (0, t.jsx)(N.Z, {
                                        profileType: O.y0.FULL_SIZE,
                                        user: n,
                                        friendToken: G
                                    }),
                                    (0, t.jsx)(R.Z, {
                                        user: n,
                                        guildId: z,
                                        viewProfileItem: em()
                                    })
                                ]
                            }),
                            (0, t.jsxs)('header', {
                                children: [
                                    (0, t.jsx)(h.Z, {
                                        user: n,
                                        displayProfile: eo,
                                        profileType: O.y0.FULL_SIZE
                                    }),
                                    (0, t.jsx)(v.Z, {
                                        isReply: ef,
                                        sent: e_,
                                        shown: eu,
                                        userId: n.id,
                                        onClose: Y,
                                        className: y.toast
                                    }),
                                    null != ee && (0, t.jsx)('div', { className: y.backdrop }),
                                    (0, t.jsxs)('div', {
                                        className: y.headerInner,
                                        children: [
                                            (0, t.jsx)(p.Z, {
                                                location: 'UserProfileModal',
                                                user: n,
                                                displayProfile: eo,
                                                guildId: z,
                                                channelId: D,
                                                profileType: O.y0.FULL_SIZE,
                                                isInteractionSource: es === O.n_.AVATAR || es === O.n_.STATUS,
                                                onInteraction: ei,
                                                showReplyPopout: ee === O.P.REPLY && es === O.n_.AVATAR,
                                                setInteractionToastShown: eI,
                                                setInteractionSent: eE,
                                                setIsReplyInteraction: ex
                                            }),
                                            (0, t.jsxs)('div', {
                                                className: y.headerButtons,
                                                children: [
                                                    (0, t.jsx)(M.Z, {
                                                        user: n,
                                                        isCurrentUser: n.id === s.id,
                                                        relationshipType: er,
                                                        persistentCallCtaEnabled: J,
                                                        activeInviteToCallCtaEnabled: $,
                                                        friendToken: G,
                                                        onClose: Y
                                                    }),
                                                    (0, t.jsx)(A.Z, {
                                                        user: n,
                                                        guildId: z,
                                                        onClose: Y
                                                    })
                                                ]
                                            }),
                                            (0, t.jsx)(S.Z, {
                                                location: 'SimplifiedUserProfileModal',
                                                user: n,
                                                displayProfile: eo,
                                                guildId: z,
                                                channelId: D,
                                                profileType: O.y0.FULL_SIZE,
                                                hasEntered: W === l.ModalTransitionState.ENTERED,
                                                isInteractionSource: es === O.n_.STATUS,
                                                onInteraction: ei,
                                                showReplyPopout: ee === O.P.REPLY && es === O.n_.STATUS,
                                                onClose: Y,
                                                setInteractionToastShown: eI,
                                                setInteractionSent: eE,
                                                setIsReplyInteraction: ex
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, t.jsx)(b.Z, {
                                user: n,
                                currentUser: s,
                                channelId: D,
                                displayProfile: eo,
                                initialSection: V,
                                initialSubsection: k,
                                friendToken: G,
                                onClose: Y
                            })
                        ]
                    }),
                    (null == eo ? void 0 : eo.profileEffectId) != null &&
                        (0, t.jsx)(u.Z, {
                            profileEffectId: null == eo ? void 0 : eo.profileEffectId,
                            isHovering: ed
                        })
                ]
            })
        })
    });
}
