n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(189156),
    l = n(699516),
    r = n(246946),
    o = n(5192),
    c = n(621853),
    u = n(172351),
    d = n(648052),
    h = n(280885),
    p = n(483424),
    m = n(681837),
    _ = n(91433),
    f = n(900927),
    E = n(678738),
    g = n(502762),
    C = n(530),
    I = n(827313),
    T = n(228168),
    x = n(981631),
    S = n(689938),
    v = n(299336);
function N(e) {
    let { user: t, currentUser: n, displayProfile: N, channel: A, isHovering: Z, onOpenProfile: M } = e,
        b = (0, s.e7)([l.Z], () => l.Z.getRelationshipType(t.id)),
        R = (0, s.e7)([r.Z], () => r.Z.hidePersonalInformation),
        L = (0, s.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        });
    return (0, i.jsxs)('div', {
        className: v.body,
        children: [
            (0, i.jsx)(C.Z, {
                user: t,
                profileType: T.y0.PANEL,
                nickname: o.ZP.getName(null, A.id, t),
                pronouns: null == N ? void 0 : N.pronouns,
                onOpenProfile: M,
                tags: (0, i.jsx)(d.Z, {
                    displayProfile: N,
                    profileType: T.y0.PANEL
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(m.Z, { userId: t.id }),
                        !R &&
                            (0, i.jsx)(I.Z, {
                                userId: t.id,
                                isHovering: Z,
                                onOpenProfile: M
                            })
                    ]
                })
            }),
            b === x.OGo.PENDING_INCOMING &&
                (0, i.jsx)(g.Z.Overlay, {
                    children: (0, i.jsx)(_.Z, {
                        user: t,
                        channelId: A.id
                    })
                }),
            t.isProvisional && (0, i.jsx)(a.Z, { look: 'profile' }),
            (0, i.jsx)(p.Z, {
                user: t,
                currentUser: n,
                className: v.activity
            }),
            (0, i.jsxs)(g.Z.Overlay, {
                className: v.overlay,
                children: [
                    !R &&
                        (null == N ? void 0 : N.bio) != null &&
                        (null == N ? void 0 : N.bio) !== '' &&
                        (0, i.jsx)(E.Z, {
                            heading: S.Z.Messages.USER_POPOUT_ABOUT_ME,
                            headingColor: 'header-primary',
                            children: (0, i.jsx)(h.Z, {
                                userBio: N.bio,
                                animateOnHover: !0,
                                isHovering: Z,
                                userId: t.id
                            })
                        }),
                    (null == L ? void 0 : L.popularApplicationCommandIds) != null &&
                        (0, i.jsx)(u.Z, {
                            applicationId: L.id,
                            commandIds: L.popularApplicationCommandIds,
                            channel: A
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
