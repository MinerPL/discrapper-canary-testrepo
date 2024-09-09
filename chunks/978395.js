n.d(t, {
    Z: function () {
        return v;
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
    _ = n(648052),
    E = n(483424),
    f = n(681837),
    h = n(91433),
    p = n(502762),
    I = n(530),
    m = n(827313),
    T = n(420654),
    S = n(116854),
    g = n(166584),
    A = n(915014),
    N = n(228168),
    O = n(981631),
    R = n(115879);
function v(e) {
    let { user: t, currentUser: n, displayProfile: v, guild: C, isHovering: y, onOpenProfile: L, channelId: D, onClose: b } = e,
        M = d.ZP.getName(null == C ? void 0 : C.id, D, t),
        P = (0, a.e7)([u.Z], () => u.Z.getRelationshipType(t.id)),
        U = (0, a.e7)([c.Z], () => c.Z.hidePersonalInformation),
        w = (0, o.Z)('username'),
        x = i.useMemo(
            () => ({
                source: O.jXE.BITE_SIZE_PROFILE_POPOUT,
                tagUserId: t.id
            }),
            [t.id]
        );
    return (0, r.jsxs)(s.Scroller, {
        fade: !0,
        className: R.body,
        children: [
            (0, r.jsx)(I.Z, {
                user: t,
                profileType: N.y0.BITE_SIZE,
                onOpenProfile: L,
                usernameIcon:
                    t.hasAvatarForGuild(null == C ? void 0 : C.id) &&
                    (0, r.jsx)(S.Z, {
                        user: t,
                        nickname: M
                    }),
                nickname: M,
                pronouns: null == v ? void 0 : v.pronouns,
                tags: (0, r.jsx)(_.Z, {
                    displayProfile: v,
                    profileType: N.y0.BITE_SIZE,
                    onClose: b
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.Z, { userId: t.id }),
                        !U &&
                            (0, r.jsx)(m.Z, {
                                userId: t.id,
                                isHovering: y,
                                onOpenProfile: L
                            })
                    ]
                })
            }),
            P === O.OGo.PENDING_INCOMING &&
                (0, r.jsx)(p.Z.Overlay, {
                    children: (0, r.jsx)(h.Z, {
                        user: t,
                        guildId: null == C ? void 0 : C.id,
                        channelId: D
                    })
                }),
            t.id !== n.id &&
                (0, r.jsx)(A.Z, {
                    user: t,
                    onOpenProfile: (e) => (null == L ? void 0 : L({ section: e }))
                }),
            w &&
                (0, r.jsx)(l.ZP, {
                    userId: t.id,
                    inline: !1,
                    profileViewedAnalytics: x
                }),
            (0, r.jsx)(T.Z, {
                user: t,
                bio: null == v ? void 0 : v.bio,
                hidePersonalInformation: U,
                onClose: b
            }),
            (0, r.jsx)(E.Z, {
                user: t,
                currentUser: n,
                onClose: b,
                className: R.activity
            }),
            null != C &&
                (0, r.jsx)(g.Z, {
                    user: t,
                    currentUser: n,
                    guild: C
                })
        ]
    });
}
