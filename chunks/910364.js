t.d(n, {
    Z: function () {
        return D;
    }
}),
    t(47120);
var s = t(735250),
    i = t(470079),
    o = t(212433),
    l = t(442837),
    r = t(481060),
    c = t(727637),
    a = t(58540),
    d = t(100527),
    u = t(906732),
    _ = t(680295),
    I = t(699516),
    E = t(5192),
    f = t(785717),
    m = t(221292),
    x = t(687158),
    Z = t(326094),
    p = t(510659),
    h = t(113557),
    v = t(867176),
    S = t(169979),
    T = t(119096),
    g = t(502762),
    A = t(544989),
    N = t(705556),
    j = t(481932),
    b = t(195387),
    L = t(272510),
    M = t(171368),
    O = t(62154),
    R = t(412317),
    C = t(228168),
    P = t(981631),
    y = t(689938),
    U = t(272216);
function D(e) {
    let { user: n, currentUser: t, guildId: D, channelId: B, messageId: F, roleId: G, sessionId: w, friendToken: k, initialSection: V, initialSubsection: W, transitionState: Y, onClose: K, showGuildProfile: z = !0, sourceAnalyticsLocations: H = [] } = e,
        q = D === P.ME ? void 0 : D,
        { analyticsLocations: Q } = (0, u.ZP)([...H, d.Z.SIMPLIFIED_PROFILE_MODAL]),
        X = (0, Z.Z)({
            user: n,
            currentUser: t,
            location: P.Sbl.SIMPLIFIED_USER_PROFILE
        }),
        J = (0, f.ZB)({
            layout: X ? 'SIMPLIFIED_MODAL' : 'SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE',
            userId: n.id,
            sourceSessionId: w,
            guildId: q,
            channelId: B,
            messageId: F,
            roleId: G,
            showGuildProfile: z
        }),
        $ = (0, p.$m)(),
        ee = (0, r.useSpring)({
            opacity: null != $.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        en = (0, x.ZP)(n.id, z ? q : void 0),
        et = (0, x.ZP)(n.id, q),
        es = (0, l.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
        ei = i.useMemo(() => (null != q ? { [q]: [n.id] } : {}), [q, n.id]);
    (0, a.$)(ei);
    let eo = i.createRef(),
        el = (0, c.Z)(eo),
        er = () =>
            (null == et ? void 0 : et.guildId) == null
                ? null
                : (null == en ? void 0 : en.guildId) != null
                  ? (0, s.jsx)(r.MenuItem, {
                        id: 'view-main-profile',
                        label: y.Z.Messages.VIEW_MAIN_PROFILE,
                        subtext: y.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: E.ZP.getName(void 0, void 0, n) }),
                        action: () => {
                            K(),
                                (0, M.openUserProfileModal)({
                                    ...J,
                                    showGuildProfile: !1,
                                    friendToken: k,
                                    sourceAnalyticsLocations: H
                                }),
                                (0, m.pQ)({
                                    action: 'PRESS_VIEW_MAIN_PROFILE',
                                    analyticsLocations: Q,
                                    ...J
                                });
                        }
                    })
                  : (0, s.jsx)(r.MenuItem, {
                        id: 'view-server-profile',
                        label: y.Z.Messages.VIEW_SERVER_PROFILE,
                        subtext: y.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: E.ZP.getName(q, B, n) }),
                        action: () => {
                            K(),
                                (0, M.openUserProfileModal)({
                                    ...J,
                                    showGuildProfile: !0,
                                    friendToken: k,
                                    sourceAnalyticsLocations: H
                                }),
                                (0, m.pQ)({
                                    action: 'PRESS_VIEW_SERVER_PROFILE',
                                    analyticsLocations: Q,
                                    ...J
                                });
                        }
                    });
    return (0, s.jsx)(u.Gt, {
        value: Q,
        children: (0, s.jsx)(f.Mt, {
            value: J,
            children: (0, s.jsx)(p.NJ, {
                value: $,
                children: (0, s.jsxs)(r.ModalRoot, {
                    transitionState: Y,
                    className: U.root,
                    hideShadow: !0,
                    'aria-label': y.Z.Messages.USER_PROFILE_MODAL,
                    children: [
                        (0, s.jsxs)(g.Z, {
                            user: n,
                            displayProfile: en,
                            profileType: C.y0.FULL_SIZE,
                            ref: eo,
                            children: [
                                (0, s.jsxs)(A.Z, {
                                    profileType: C.y0.FULL_SIZE,
                                    children: [
                                        (0, s.jsx)(b.Z, {
                                            shouldShowTooltip: null === $.interactionType,
                                            user: n,
                                            guildId: q,
                                            channelId: B,
                                            onClose: K
                                        }),
                                        (0, s.jsx)(j.Z, {
                                            shouldShowTooltip: null === $.interactionType,
                                            profileType: C.y0.FULL_SIZE,
                                            user: n,
                                            friendToken: k
                                        }),
                                        (0, s.jsx)(L.Z, {
                                            user: n,
                                            guildId: q,
                                            viewProfileItem: er()
                                        })
                                    ]
                                }),
                                (0, s.jsxs)('header', {
                                    children: [
                                        (0, s.jsx)(v.Z, {
                                            user: n,
                                            displayProfile: en,
                                            profileType: C.y0.FULL_SIZE
                                        }),
                                        (0, s.jsx)(T.Z, {
                                            userId: n.id,
                                            onClose: K,
                                            className: U.toast
                                        }),
                                        null != $.interactionType &&
                                            (0, s.jsx)(o.animated.div, {
                                                style: ee,
                                                className: U.backdrop
                                            }),
                                        (0, s.jsxs)('div', {
                                            className: U.headerInner,
                                            children: [
                                                (0, s.jsx)(h.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: en,
                                                    guildId: q,
                                                    channelId: B,
                                                    profileType: C.y0.FULL_SIZE
                                                }),
                                                (0, s.jsx)(S.Z, {
                                                    location: 'SimplifiedUserProfileModal',
                                                    user: n,
                                                    displayProfile: en,
                                                    guildId: q,
                                                    channelId: B,
                                                    profileType: C.y0.FULL_SIZE,
                                                    hasEntered: Y === r.ModalTransitionState.ENTERED,
                                                    onCloseProfile: K
                                                }),
                                                (0, s.jsxs)('div', {
                                                    className: U.headerButtons,
                                                    children: [
                                                        (0, s.jsx)(R.Z, {
                                                            user: n,
                                                            isCurrentUser: n.id === t.id,
                                                            relationshipType: es,
                                                            friendToken: k,
                                                            onClose: K
                                                        }),
                                                        (0, s.jsx)(N.Z, {
                                                            user: n,
                                                            guildId: q,
                                                            onClose: K
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, s.jsx)(O.Z, {
                                    user: n,
                                    currentUser: t,
                                    channelId: B,
                                    displayProfile: en,
                                    initialSection: V,
                                    initialSubsection: W,
                                    friendToken: k,
                                    onClose: K
                                })
                            ]
                        }),
                        (null == en ? void 0 : en.profileEffectId) != null &&
                            (0, s.jsx)(_.Z, {
                                profileEffectId: null == en ? void 0 : en.profileEffectId,
                                isHovering: el
                            })
                    ]
                })
            })
        })
    });
}
