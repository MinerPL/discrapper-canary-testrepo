n.d(t, {
    Z: function () {
        return P;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(597312),
    l = n(481060),
    r = n(727637),
    o = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(580552),
    h = n(680295),
    m = n(5192),
    p = n(785717),
    _ = n(221292),
    f = n(318661),
    E = n(78675),
    g = n(741308),
    C = n(588822),
    I = n(899007),
    x = n(900927),
    T = n(678738),
    N = n(502762),
    v = n(530),
    S = n(256059),
    Z = n(679332),
    A = n(544989),
    M = n(171368),
    b = n(228168),
    R = n(689938),
    j = n(317986),
    L = n(27251);
function P(e) {
    let { user: t, channel: n } = e,
        P = __OVERLAY__ || !(0, d.Z)(t.id),
        O = (0, f.ZP)(t.id),
        y = (0, o.ZP)(),
        { analyticsLocations: D } = (0, u.ZP)(c.Z.PROFILE_PANEL),
        k = (0, p.ZB)({
            layout: 'SIMPLIFIED_DM_PANEL',
            userId: t.id,
            channelId: n.id
        }),
        U = a.useRef(null),
        w = (0, r.Z)(U),
        B = (e) => {
            (0, M.openUserProfileModal)({
                sourceAnalyticsLocations: D,
                ...k,
                ...e
            });
        };
    return (0, i.jsx)(u.Gt, {
        value: D,
        children: (0, i.jsx)(p.Mt, {
            value: k,
            children: (0, i.jsxs)(N.Z, {
                ref: U,
                user: t,
                displayProfile: O,
                profileType: b.y0.PANEL,
                themeOverride: y,
                className: j.container,
                children: [
                    (0, i.jsxs)(s.u2, {
                        children: [
                            (0, i.jsx)(A.Z, {
                                profileType: b.y0.PANEL,
                                children: (0, i.jsx)(Z.Z, { user: t })
                            }),
                            (0, i.jsxs)('header', {
                                className: j.header,
                                children: [
                                    (0, i.jsx)(E.Z, {
                                        user: t,
                                        displayProfile: O,
                                        profileType: b.y0.PANEL,
                                        animateOnHover: !w
                                    }),
                                    (0, i.jsx)(I.Z, {
                                        user: t,
                                        displayProfile: O,
                                        channelId: n.id,
                                        profileType: b.y0.PANEL,
                                        onOpenProfile: P ? void 0 : B
                                    }),
                                    (0, i.jsx)(S.Z, { user: t })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: L.body,
                                children: [
                                    (0, i.jsx)(v.Z, {
                                        user: t,
                                        profileType: b.y0.PANEL,
                                        nickname: m.ZP.getName(null, n.id, t),
                                        pronouns: null == O ? void 0 : O.pronouns,
                                        onOpenProfile: P ? void 0 : B,
                                        tags: (0, i.jsx)(g.Z, {
                                            displayProfile: O,
                                            profileType: b.y0.PANEL
                                        })
                                    }),
                                    (0, i.jsxs)(N.Z.Overlay, {
                                        className: L.overlay,
                                        children: [
                                            (0, i.jsx)(T.Z, {
                                                heading: R.Z.Messages.USER_POPOUT_ABOUT_ME,
                                                headingColor: 'header-primary',
                                                children: (0, i.jsx)(C.Z, {
                                                    userBio: null == O ? void 0 : O.bio,
                                                    userId: t.id,
                                                    animateOnHover: !0,
                                                    isHovering: w
                                                })
                                            }),
                                            (0, i.jsx)(T.Z, {
                                                heading: R.Z.Messages.BOT_PROFILE_CREATED_ON,
                                                headingColor: 'header-primary',
                                                children: (0, i.jsx)(x.Z, { userId: t.id })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    !P &&
                        (0, i.jsx)('footer', {
                            className: j.footer,
                            children: (0, i.jsx)(l.Button, {
                                fullWidth: !0,
                                size: l.Button.Sizes.LARGE,
                                look: l.Button.Looks.BLANK,
                                color: j.footerButtonColor,
                                onClick: () => {
                                    B(),
                                        (0, _.pQ)({
                                            action: 'PRESS_VIEW_PROFILE',
                                            analyticsLocations: D,
                                            ...k
                                        });
                                },
                                children: R.Z.Messages.VIEW_FULL_PROFILE
                            })
                        }),
                    (null == O ? void 0 : O.profileEffectId) != null &&
                        (0, i.jsx)(h.Z, {
                            profileEffectId: null == O ? void 0 : O.profileEffectId,
                            isHovering: w
                        })
                ]
            })
        })
    });
}
