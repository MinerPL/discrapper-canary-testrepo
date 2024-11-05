n.d(t, {
    Z: function () {
        return y;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(189156),
    o = n(699516),
    l = n(246946),
    u = n(5192),
    c = n(648052),
    d = n(483424),
    f = n(681837),
    _ = n(91433),
    h = n(502762),
    p = n(530),
    m = n(827313),
    g = n(420654),
    E = n(116854),
    v = n(166584),
    I = n(915014),
    S = n(228168),
    T = n(981631),
    b = n(451563);
function y(e) {
    let { user: t, currentUser: n, displayProfile: y, guild: A, isHovering: N, onOpenProfile: C, channelId: R, onClose: O } = e,
        D = u.ZP.getName(null == A ? void 0 : A.id, R, t),
        L = (0, i.e7)([o.Z], () => o.Z.getRelationshipType(t.id)),
        x = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation);
    return (0, r.jsxs)(a.Scroller, {
        fade: !0,
        className: b.body,
        children: [
            (0, r.jsx)(p.Z, {
                user: t,
                profileType: S.y0.BITE_SIZE,
                onOpenProfile: C,
                usernameIcon:
                    t.hasAvatarForGuild(null == A ? void 0 : A.id) &&
                    (0, r.jsx)(E.Z, {
                        user: t,
                        nickname: D
                    }),
                nickname: D,
                pronouns: null == y ? void 0 : y.pronouns,
                tags: (0, r.jsx)(c.Z, {
                    displayProfile: y,
                    profileType: S.y0.BITE_SIZE,
                    onClose: O
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.Z, { userId: t.id }),
                        !x &&
                            (0, r.jsx)(m.Z, {
                                userId: t.id,
                                isHovering: N,
                                onOpenProfile: C
                            })
                    ]
                })
            }),
            L === T.OGo.PENDING_INCOMING &&
                (0, r.jsx)(h.Z.Overlay, {
                    children: (0, r.jsx)(_.Z, {
                        user: t,
                        guildId: null == A ? void 0 : A.id,
                        channelId: R
                    })
                }),
            t.id !== n.id &&
                (0, r.jsx)(I.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == C ? void 0 : C({ section: e }))
                }),
            t.isProvisional
                ? (0, r.jsx)(s.Z, { look: 'profile' })
                : (0, r.jsx)(g.Z, {
                      user: t,
                      bio: null == y ? void 0 : y.bio,
                      hidePersonalInformation: x,
                      onClose: O
                  }),
            (0, r.jsx)(d.Z, {
                user: t,
                currentUser: n,
                onClose: O,
                className: b.activity
            }),
            null != A &&
                (0, r.jsx)(v.Z, {
                    user: t,
                    currentUser: n,
                    guild: A
                })
        ]
    });
}
