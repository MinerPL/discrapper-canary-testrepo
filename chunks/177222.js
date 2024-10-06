n.d(t, {
    Z: function () {
        return y;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(212433),
    l = n(597312),
    r = n(481060),
    o = n(727637),
    c = n(410030),
    u = n(100527),
    d = n(906732),
    h = n(688465),
    p = n(680295),
    m = n(785717),
    _ = n(221292),
    f = n(687158),
    E = n(326094),
    g = n(510659),
    C = n(113557),
    I = n(867176),
    T = n(169979),
    x = n(119096),
    S = n(502762),
    v = n(952124),
    N = n(544989),
    A = n(481932),
    Z = n(272510),
    M = n(171368),
    b = n(348540),
    R = n(179142),
    L = n(228168),
    j = n(981631),
    P = n(689938),
    O = n(337319);
function y(e) {
    let { user: t, currentUser: n, channel: y } = e,
        D = __OVERLAY__,
        U = (0, f.ZP)(t.id),
        k = (0, c.ZP)(),
        w = (0, E.Z)({
            user: t,
            currentUser: n,
            location: j.Sbl.PROFILE_PANEL
        }),
        B = (0, m.ZB)({
            layout: w ? 'SIMPLIFIED_DM_PANEL' : 'SIMPLIFIED_DM_PANEL_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            channelId: y.id
        }),
        { analyticsLocations: H } = (0, d.ZP)(u.Z.PROFILE_PANEL),
        G = s.useRef(null),
        V = (0, o.Z)(G),
        F = (0, g.$m)(),
        W = (0, r.useSpring)({
            opacity: null != F.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        z = (e) => {
            (0, M.openUserProfileModal)({
                sourceAnalyticsLocations: H,
                ...B,
                ...e
            });
        };
    return (0, i.jsx)(d.Gt, {
        value: H,
        children: (0, i.jsx)(m.Mt, {
            value: B,
            children: (0, i.jsx)(g.NJ, {
                value: F,
                children: (0, i.jsxs)(S.Z, {
                    ref: G,
                    user: t,
                    displayProfile: U,
                    profileType: L.y0.PANEL,
                    themeOverride: k,
                    className: O.container,
                    children: [
                        null != F.interactionType &&
                            (0, i.jsx)(a.animated.div, {
                                style: W,
                                className: O.backdrop
                            }),
                        (0, i.jsxs)(l.u2, {
                            children: [
                                (0, i.jsxs)(N.Z, {
                                    profileType: L.y0.PANEL,
                                    children: [
                                        (0, i.jsx)(A.Z, {
                                            user: t,
                                            profileType: L.y0.PANEL
                                        }),
                                        t.bot ? (0, i.jsx)(v.Z, { user: t }) : (0, i.jsx)(Z.Z, { user: t })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    className: O.header,
                                    children: [
                                        (0, i.jsx)(I.Z, {
                                            user: t,
                                            displayProfile: U,
                                            profileType: L.y0.PANEL,
                                            animateOnHover: !V,
                                            className: O.banner
                                        }),
                                        (0, i.jsx)(x.Z, {
                                            userId: t.id,
                                            className: O.toast
                                        }),
                                        (0, i.jsx)(C.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            displayProfile: U,
                                            channelId: y.id,
                                            profileType: L.y0.PANEL,
                                            onOpenProfile: D ? void 0 : z
                                        }),
                                        (0, i.jsx)(T.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            channelId: y.id,
                                            profileType: L.y0.PANEL
                                        }),
                                        t.isClyde() && (0, i.jsx)(h.Z, { className: O.headerTag })
                                    ]
                                }),
                                (0, i.jsx)(b.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: U,
                                    channel: y,
                                    isHovering: null == F.interactionType && V,
                                    onOpenProfile: D ? void 0 : z
                                }),
                                (0, i.jsx)(R.Z, { user: t })
                            ]
                        }),
                        !D &&
                            (0, i.jsx)('footer', {
                                className: O.footer,
                                children: (0, i.jsx)(r.Button, {
                                    fullWidth: !0,
                                    size: r.Button.Sizes.LARGE,
                                    look: r.Button.Looks.BLANK,
                                    color: O.footerButtonColor,
                                    onClick: () => {
                                        z(),
                                            (0, _.pQ)({
                                                action: 'PRESS_VIEW_PROFILE',
                                                analyticsLocations: H,
                                                ...B
                                            });
                                    },
                                    children: P.Z.Messages.VIEW_FULL_PROFILE
                                })
                            }),
                        (null == U ? void 0 : U.profileEffectId) != null &&
                            (0, i.jsx)(p.Z, {
                                profileEffectId: null == U ? void 0 : U.profileEffectId,
                                isHovering: V
                            })
                    ]
                })
            })
        })
    });
}
