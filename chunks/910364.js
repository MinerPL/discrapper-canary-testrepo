t.d(n, {
    Z: function () {
        return G;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    o = t(100621),
    s = t(442837),
    r = t(481060),
    c = t(727637),
    a = t(616780),
    d = t(100527),
    u = t(906732),
    f = t(680295),
    m = t(699516),
    p = t(5192),
    x = t(785717),
    I = t(221292),
    h = t(816988),
    v = t(687158),
    g = t(326094),
    Z = t(510659),
    _ = t(113557),
    b = t(867176),
    j = t(169979),
    E = t(451834),
    T = t(502762),
    N = t(544989),
    S = t(705556),
    y = t(481932),
    P = t(195387),
    A = t(272510),
    C = t(748283),
    L = t(902423),
    M = t(171368),
    R = t(62154),
    O = t(412317),
    U = t(228168),
    B = t(981631),
    F = t(388032),
    D = t(272216);
function G(e) {
    let { user: n, currentUser: t, guildId: G, channelId: w, messageId: k, roleId: V, sessionId: W, friendToken: z, initialSection: K, initialSubsection: Y, transitionState: H, onClose: J, showGuildProfile: X = !0, sourceAnalyticsLocations: q = [] } = e,
        { analyticsLocations: Q } = (0, u.ZP)([...q, d.Z.SIMPLIFIED_PROFILE_MODAL]),
        $ = (0, g.Z)({
            user: n,
            currentUser: t,
            location: B.Sbl.SIMPLIFIED_USER_PROFILE
        }),
        ee = (0, x.ZB)({
            layout: $ ? 'SIMPLIFIED_MODAL' : 'SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE',
            userId: n.id,
            sourceSessionId: W,
            guildId: G,
            channelId: w,
            messageId: k,
            roleId: V,
            showGuildProfile: X
        }),
        en = (0, Z.$m)(),
        et = (0, r.useSpring)({
            opacity: null != en.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        ei = (0, v.ZP)(n.id, X ? G : void 0),
        el = (0, v.ZP)(n.id, G),
        eo = (0, s.e7)([m.Z], () => m.Z.getRelationshipType(n.id)),
        es = n.id === t.id,
        er = l.useMemo(() => (null != G ? { [G]: [n.id] } : {}), [G, n.id]);
    (0, a.$)(er);
    let ec = l.createRef(),
        ea = (0, c.Z)(ec),
        { permanentEntryPointsEnabled: ed } = (0, h.u)({ location: 'UserProfileModal' }),
        eu = () =>
            (null == el ? void 0 : el.guildId) == null
                ? null
                : (null == ei ? void 0 : ei.guildId) != null
                  ? (0, i.jsx)(r.MenuItem, {
                        id: 'view-main-profile',
                        label: F.intl.string(F.t.GISTtb),
                        subtext: F.intl.formatToPlainString(F.t['mn/nW1'], { displayName: p.ZP.getName(void 0, void 0, n) }),
                        action: () => {
                            J(),
                                (0, M.openUserProfileModal)({
                                    ...ee,
                                    showGuildProfile: !1,
                                    friendToken: z,
                                    sourceAnalyticsLocations: q
                                }),
                                (0, I.pQ)({
                                    action: 'PRESS_VIEW_MAIN_PROFILE',
                                    analyticsLocations: Q,
                                    ...ee
                                });
                        }
                    })
                  : (0, i.jsx)(r.MenuItem, {
                        id: 'view-server-profile',
                        label: F.intl.string(F.t.DisZzM),
                        subtext: F.intl.formatToPlainString(F.t['mn/nW1'], { displayName: p.ZP.getName(G, w, n) }),
                        action: () => {
                            J(),
                                (0, M.openUserProfileModal)({
                                    ...ee,
                                    showGuildProfile: !0,
                                    friendToken: z,
                                    sourceAnalyticsLocations: q
                                }),
                                (0, I.pQ)({
                                    action: 'PRESS_VIEW_SERVER_PROFILE',
                                    analyticsLocations: Q,
                                    ...ee
                                });
                        }
                    });
    return (0, i.jsx)(u.Gt, {
        value: Q,
        children: (0, i.jsx)(x.Mt, {
            value: ee,
            children: (0, i.jsx)(Z.NJ, {
                value: en,
                children: (0, i.jsxs)(r.ModalRoot, {
                    transitionState: H,
                    className: D.root,
                    hideShadow: !0,
                    'aria-label': F.intl.string(F.t['3N/J2t']),
                    children: [
                        (0, i.jsxs)(T.Z, {
                            user: n,
                            displayProfile: ei,
                            profileType: U.y0.FULL_SIZE,
                            ref: ec,
                            children: [
                                (0, i.jsxs)(N.Z, {
                                    profileType: U.y0.FULL_SIZE,
                                    children: [
                                        ed &&
                                            es &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(L.Z, { onClose: J }),
                                                    (0, i.jsx)(C.Z, {
                                                        currentUser: t,
                                                        onClose: J
                                                    })
                                                ]
                                            }),
                                        (0, i.jsx)(P.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            user: n,
                                            guildId: G,
                                            channelId: w,
                                            onClose: J
                                        }),
                                        (0, i.jsx)(y.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            profileType: U.y0.FULL_SIZE,
                                            user: n,
                                            friendToken: z
                                        }),
                                        (0, i.jsx)(A.Z, {
                                            user: n,
                                            guildId: G,
                                            viewProfileItem: eu()
                                        })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    children: [
                                        (0, i.jsx)(b.Z, {
                                            user: n,
                                            displayProfile: ei,
                                            profileType: U.y0.FULL_SIZE
                                        }),
                                        (0, i.jsx)(E.Z, {
                                            userId: n.id,
                                            onClose: J,
                                            className: D.toast
                                        }),
                                        null != en.interactionType &&
                                            (0, i.jsx)(o.animated.div, {
                                                style: et,
                                                className: D.backdrop
                                            }),
                                        (0, i.jsxs)('div', {
                                            className: D.headerInner,
                                            children: [
                                                (0, i.jsx)(_.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: ei,
                                                    guildId: G,
                                                    channelId: w,
                                                    profileType: U.y0.FULL_SIZE
                                                }),
                                                (0, i.jsx)(j.Z, {
                                                    location: 'SimplifiedUserProfileModal',
                                                    user: n,
                                                    displayProfile: ei,
                                                    guildId: G,
                                                    channelId: w,
                                                    profileType: U.y0.FULL_SIZE,
                                                    hasEntered: H === r.ModalTransitionState.ENTERED,
                                                    onCloseProfile: J
                                                }),
                                                (0, i.jsxs)('div', {
                                                    className: D.headerButtons,
                                                    children: [
                                                        (0, i.jsx)(O.Z, {
                                                            isCurrentUser: es,
                                                            user: n,
                                                            relationshipType: eo,
                                                            friendToken: z,
                                                            onClose: J
                                                        }),
                                                        (0, i.jsx)(S.Z, {
                                                            user: n,
                                                            guildId: G,
                                                            onClose: J
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(R.Z, {
                                    user: n,
                                    currentUser: t,
                                    channelId: w,
                                    displayProfile: ei,
                                    initialSection: K,
                                    initialSubsection: Y,
                                    friendToken: z,
                                    onClose: J
                                })
                            ]
                        }),
                        (null == ei ? void 0 : ei.profileEffectId) != null &&
                            (0, i.jsx)(f.Z, {
                                profileEffectId: null == ei ? void 0 : ei.profileEffectId,
                                isHovering: ea
                            })
                    ]
                })
            })
        })
    });
}
