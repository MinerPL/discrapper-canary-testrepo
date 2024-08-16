n.d(t, {
    Z: function () {
        return M;
    }
});
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(699516),
    l = n(246946),
    r = n(5192),
    o = n(621853),
    c = n(910128),
    u = n(27144),
    d = n(741308),
    h = n(588822),
    m = n(940730),
    p = n(483424),
    _ = n(681837),
    f = n(91433),
    E = n(900927),
    g = n(678738),
    C = n(502762),
    I = n(530),
    x = n(7242),
    T = n(827313),
    N = n(580512),
    v = n(228168),
    S = n(981631),
    Z = n(689938),
    A = n(27251);
function M(e) {
    let { user: t, currentUser: n, displayProfile: M, channel: b, isHovering: R, onOpenProfile: j } = e,
        { newActivityCardsEnabled: L } = (0, u.z)({ location: 'SimplifiedProfilePanelBody' }),
        { activeInviteToCallCtaEnabled: P } = (0, c.l)({ location: 'SimplifiedProfilePanelBody' }),
        O = (0, a.e7)([s.Z], () => s.Z.getRelationshipType(t.id)),
        y = (0, a.e7)([l.Z], () => l.Z.hidePersonalInformation),
        D = (0, a.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        });
    return (0, i.jsxs)('div', {
        className: A.body,
        children: [
            (0, i.jsx)(I.Z, {
                user: t,
                profileType: v.y0.PANEL,
                nickname: r.ZP.getName(null, b.id, t),
                pronouns: null == M ? void 0 : M.pronouns,
                onOpenProfile: j,
                tags: (0, i.jsx)(d.Z, {
                    displayProfile: M,
                    profileType: v.y0.PANEL
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(_.Z, { userId: t.id }),
                        !y &&
                            (0, i.jsx)(T.Z, {
                                userId: t.id,
                                isHovering: R,
                                onOpenProfile: j
                            })
                    ]
                })
            }),
            O === S.OGo.PENDING_INCOMING &&
                (0, i.jsx)(C.Z.Overlay, {
                    children: (0, i.jsx)(f.Z, {
                        user: t,
                        channelId: b.id
                    })
                }),
            P && (0, i.jsx)(x.Z, { user: t }),
            L
                ? (0, i.jsx)(p.Z, {
                      user: t,
                      currentUser: n,
                      className: A.activity
                  })
                : (0, i.jsx)(N.Z, {
                      user: t,
                      channelId: b.id,
                      className: A.activity
                  }),
            (0, i.jsxs)(C.Z.Overlay, {
                className: A.overlay,
                children: [
                    !y &&
                        (null == M ? void 0 : M.bio) != null &&
                        (null == M ? void 0 : M.bio) !== '' &&
                        (0, i.jsx)(g.Z, {
                            heading: Z.Z.Messages.USER_POPOUT_ABOUT_ME,
                            headingColor: 'header-primary',
                            children: (0, i.jsx)(h.Z, {
                                userBio: M.bio,
                                animateOnHover: !0,
                                isHovering: R,
                                userId: t.id
                            })
                        }),
                    (null == D ? void 0 : D.popularApplicationCommandIds) != null &&
                        (0, i.jsx)(m.Z, {
                            applicationId: D.id,
                            commandIds: D.popularApplicationCommandIds,
                            channel: b
                        }),
                    (0, i.jsx)(g.Z, {
                        heading: t.bot ? Z.Z.Messages.BOT_PROFILE_CREATED_ON : Z.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                        headingColor: 'header-primary',
                        children: (0, i.jsx)(E.Z, { userId: t.id })
                    })
                ]
            })
        ]
    });
}
