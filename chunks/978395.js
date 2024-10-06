n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(954138),
    l = n(979264),
    u = n(189156),
    c = n(699516),
    d = n(246946),
    _ = n(5192),
    E = n(648052),
    f = n(483424),
    h = n(681837),
    p = n(91433),
    I = n(502762),
    m = n(530),
    T = n(827313),
    S = n(420654),
    g = n(116854),
    A = n(166584),
    N = n(915014),
    O = n(228168),
    R = n(981631),
    v = n(451563);
function C(e) {
    let { user: t, currentUser: n, displayProfile: C, guild: L, isHovering: y, onOpenProfile: D, channelId: b, onClose: M } = e,
        P = _.ZP.getName(null == L ? void 0 : L.id, b, t),
        U = (0, a.e7)([c.Z], () => c.Z.getRelationshipType(t.id)),
        w = (0, a.e7)([d.Z], () => d.Z.hidePersonalInformation),
        x = (0, o.Z)('username'),
        G = i.useMemo(
            () => ({
                source: R.jXE.BITE_SIZE_PROFILE_POPOUT,
                tagUserId: t.id
            }),
            [t.id]
        );
    return (0, r.jsxs)(s.Scroller, {
        fade: !0,
        className: v.body,
        children: [
            (0, r.jsx)(m.Z, {
                user: t,
                profileType: O.y0.BITE_SIZE,
                onOpenProfile: D,
                usernameIcon:
                    t.hasAvatarForGuild(null == L ? void 0 : L.id) &&
                    (0, r.jsx)(g.Z, {
                        user: t,
                        nickname: P
                    }),
                nickname: P,
                pronouns: null == C ? void 0 : C.pronouns,
                tags: (0, r.jsx)(E.Z, {
                    displayProfile: C,
                    profileType: O.y0.BITE_SIZE,
                    onClose: M
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(h.Z, { userId: t.id }),
                        !w &&
                            (0, r.jsx)(T.Z, {
                                userId: t.id,
                                isHovering: y,
                                onOpenProfile: D
                            })
                    ]
                })
            }),
            U === R.OGo.PENDING_INCOMING &&
                (0, r.jsx)(I.Z.Overlay, {
                    children: (0, r.jsx)(p.Z, {
                        user: t,
                        guildId: null == L ? void 0 : L.id,
                        channelId: b
                    })
                }),
            t.id !== n.id &&
                (0, r.jsx)(N.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == D ? void 0 : D({ section: e }))
                }),
            x &&
                (0, r.jsx)(l.ZP, {
                    userId: t.id,
                    inline: !1,
                    profileViewedAnalytics: G
                }),
            t.isProvisional
                ? (0, r.jsx)(u.Z, { look: 'profile' })
                : (0, r.jsx)(S.Z, {
                      user: t,
                      bio: null == C ? void 0 : C.bio,
                      hidePersonalInformation: w,
                      onClose: M
                  }),
            (0, r.jsx)(f.Z, {
                user: t,
                currentUser: n,
                onClose: M,
                className: v.activity
            }),
            null != L &&
                (0, r.jsx)(A.Z, {
                    user: t,
                    currentUser: n,
                    guild: L
                })
        ]
    });
}
