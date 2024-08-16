n.d(t, {
    Z: function () {
        return y;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(954138),
    l = n(979264),
    u = n(699516),
    c = n(246946),
    d = n(5192),
    _ = n(27144),
    E = n(741308),
    f = n(483424),
    h = n(681837),
    p = n(91433),
    m = n(502762),
    I = n(530),
    T = n(827313),
    g = n(790711),
    S = n(580512),
    A = n(67152),
    N = n(579285),
    v = n(287612),
    O = n(228168),
    R = n(981631),
    C = n(122269);
function y(e) {
    let { user: t, currentUser: n, displayProfile: y, guild: D, isHovering: L, onOpenProfile: b, channelId: M, onClose: P } = e,
        U = d.ZP.getName(null == D ? void 0 : D.id, M, t),
        w = (0, a.e7)([u.Z], () => u.Z.getRelationshipType(t.id)),
        x = (0, a.e7)([c.Z], () => c.Z.hidePersonalInformation),
        G = (0, o.Z)('username'),
        k = i.useMemo(
            () => ({
                source: R.jXE.PROFILE_POPOUT,
                tagUserId: t.id
            }),
            [t.id]
        ),
        { newActivityCardsEnabled: B } = (0, _.z)({ location: 'BiteSizeProfileBody' });
    return (0, r.jsxs)(s.Scroller, {
        fade: !0,
        className: C.body,
        children: [
            (0, r.jsx)(I.Z, {
                user: t,
                profileType: O.y0.BITE_SIZE,
                onOpenProfile: b,
                usernameIcon:
                    t.hasAvatarForGuild(null == D ? void 0 : D.id) &&
                    (0, r.jsx)(g.Z, {
                        user: t,
                        nickname: U
                    }),
                nickname: U,
                pronouns: null == y ? void 0 : y.pronouns,
                tags: (0, r.jsx)(E.Z, {
                    displayProfile: y,
                    profileType: O.y0.BITE_SIZE,
                    onClose: P
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(h.Z, { userId: t.id }),
                        !x &&
                            (0, r.jsx)(T.Z, {
                                userId: t.id,
                                isHovering: L,
                                onOpenProfile: b
                            })
                    ]
                })
            }),
            w === R.OGo.PENDING_INCOMING &&
                (0, r.jsx)(m.Z.Overlay, {
                    children: (0, r.jsx)(p.Z, {
                        user: t,
                        guildId: null == D ? void 0 : D.id,
                        channelId: M
                    })
                }),
            t.id !== n.id &&
                (0, r.jsx)(v.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == b ? void 0 : b({ section: e }))
                }),
            G &&
                (0, r.jsx)(l.ZP, {
                    userId: t.id,
                    inline: !1,
                    profileViewedAnalytics: k
                }),
            (0, r.jsx)(A.Z, {
                user: t,
                bio: null == y ? void 0 : y.bio,
                hidePersonalInformation: x,
                onClose: P
            }),
            B
                ? (0, r.jsx)(f.Z, {
                      user: t,
                      currentUser: n,
                      onClose: P,
                      className: C.activity
                  })
                : (0, r.jsx)(S.Z, {
                      user: t,
                      guild: D,
                      channelId: M,
                      onClose: P
                  }),
            null != D &&
                (0, r.jsx)(N.Z, {
                    user: t,
                    currentUser: n,
                    guild: D
                })
        ]
    });
}
