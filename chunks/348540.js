n.d(t, {
    Z: function () {
        return A;
    }
});
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(699516),
    l = n(246946),
    r = n(5192),
    o = n(621853),
    c = n(910128),
    u = n(172351),
    d = n(648052),
    h = n(280885),
    m = n(483424),
    p = n(681837),
    _ = n(91433),
    f = n(900927),
    E = n(678738),
    g = n(502762),
    C = n(530),
    I = n(7242),
    x = n(827313),
    T = n(228168),
    v = n(981631),
    S = n(689938),
    N = n(836272);
function A(e) {
    let { user: t, currentUser: n, displayProfile: A, channel: Z, isHovering: M, onOpenProfile: b } = e,
        { activeInviteToCallCtaEnabled: R } = (0, c.l)({ location: 'UserProfilePanelBody' }),
        L = (0, s.e7)([a.Z], () => a.Z.getRelationshipType(t.id)),
        j = (0, s.e7)([l.Z], () => l.Z.hidePersonalInformation),
        P = (0, s.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        });
    return (0, i.jsxs)('div', {
        className: N.body,
        children: [
            (0, i.jsx)(C.Z, {
                user: t,
                profileType: T.y0.PANEL,
                nickname: r.ZP.getName(null, Z.id, t),
                pronouns: null == A ? void 0 : A.pronouns,
                onOpenProfile: b,
                tags: (0, i.jsx)(d.Z, {
                    displayProfile: A,
                    profileType: T.y0.PANEL
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(p.Z, { userId: t.id }),
                        !j &&
                            (0, i.jsx)(x.Z, {
                                userId: t.id,
                                isHovering: M,
                                onOpenProfile: b
                            })
                    ]
                })
            }),
            L === v.OGo.PENDING_INCOMING &&
                (0, i.jsx)(g.Z.Overlay, {
                    children: (0, i.jsx)(_.Z, {
                        user: t,
                        channelId: Z.id
                    })
                }),
            R && (0, i.jsx)(I.Z, { user: t }),
            (0, i.jsx)(m.Z, {
                user: t,
                currentUser: n,
                className: N.activity
            }),
            (0, i.jsxs)(g.Z.Overlay, {
                className: N.overlay,
                children: [
                    !j &&
                        (null == A ? void 0 : A.bio) != null &&
                        (null == A ? void 0 : A.bio) !== '' &&
                        (0, i.jsx)(E.Z, {
                            heading: S.Z.Messages.USER_POPOUT_ABOUT_ME,
                            headingColor: 'header-primary',
                            children: (0, i.jsx)(h.Z, {
                                userBio: A.bio,
                                animateOnHover: !0,
                                isHovering: M,
                                userId: t.id
                            })
                        }),
                    (null == P ? void 0 : P.popularApplicationCommandIds) != null &&
                        (0, i.jsx)(u.Z, {
                            applicationId: P.id,
                            commandIds: P.popularApplicationCommandIds,
                            channel: Z
                        }),
                    (0, i.jsx)(E.Z, {
                        heading: t.bot ? S.Z.Messages.BOT_PROFILE_CREATED_ON : S.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                        headingColor: 'header-primary',
                        children: (0, i.jsx)(f.Z, { userId: t.id })
                    })
                ]
            })
        ]
    });
}
