n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    s = n(592125),
    o = n(944486),
    l = n(246946),
    u = n(5192),
    c = n(621853),
    d = n(172351),
    _ = n(648052),
    E = n(483424),
    f = n(681837),
    h = n(678738),
    p = n(530),
    I = n(303674),
    m = n(53558),
    T = n(827313),
    S = n(420654),
    g = n(166584),
    A = n(915014),
    N = n(228168),
    O = n(689938),
    R = n(84040),
    v = n(115879);
function C(e) {
    let { user: t, currentUser: n, displayProfile: C, guild: y, isHovering: L, onOpenProfile: D, channelId: b, onClose: M } = e,
        P = u.ZP.getName(null == y ? void 0 : y.id, b, t),
        U = (0, i.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        w = (0, i.e7)([s.Z, o.Z], () => s.Z.getChannel(o.Z.getChannelId())),
        x = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation);
    return (0, r.jsxs)(a.Scroller, {
        fade: !0,
        className: v.body,
        children: [
            (0, r.jsx)(p.Z, {
                user: t,
                profileType: N.y0.BITE_SIZE,
                onOpenProfile: D,
                nickname: P,
                pronouns: null == C ? void 0 : C.pronouns,
                tags: (0, r.jsx)(_.Z, {
                    displayProfile: C,
                    profileType: N.y0.BITE_SIZE,
                    onClose: M
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(f.Z, { userId: t.id }),
                        !x &&
                            (0, r.jsx)(T.Z, {
                                userId: t.id,
                                isHovering: L,
                                onOpenProfile: D
                            })
                    ]
                })
            }),
            (0, r.jsx)(A.Z, {
                user: t,
                onOpenProfile: (e) => (null == D ? void 0 : D({ section: e }))
            }),
            (0, r.jsxs)('div', {
                className: R.buttons,
                children: [
                    (0, r.jsx)(I.Z, {
                        user: t,
                        className: R.button
                    }),
                    (0, r.jsx)(m.Z, {
                        user: t,
                        guildId: null == y ? void 0 : y.id,
                        className: R.button
                    })
                ]
            }),
            (0, r.jsx)(S.Z, {
                user: t,
                bio: null == C ? void 0 : C.bio,
                hidePersonalInformation: x,
                onClose: M
            }),
            (0, r.jsx)(E.Z, {
                user: t,
                currentUser: n,
                onClose: M,
                className: v.activity
            }),
            (null == U ? void 0 : U.popularApplicationCommandIds) != null &&
                null != w &&
                (0, r.jsx)(d.Z, {
                    applicationId: U.id,
                    commandIds: U.popularApplicationCommandIds,
                    channel: w,
                    guildId: null == y ? void 0 : y.id,
                    onClick: M
                }),
            null != y &&
                (0, r.jsx)(h.Z, {
                    heading: O.Z.Messages.ROLES,
                    children: (0, r.jsx)(g.Z, {
                        user: t,
                        currentUser: n,
                        guild: y
                    })
                })
        ]
    });
}
