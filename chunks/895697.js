n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(592125),
    o = n(944486),
    l = n(246946),
    u = n(5192),
    c = n(621853),
    d = n(172351),
    f = n(648052),
    _ = n(483424),
    h = n(681837),
    p = n(678738),
    m = n(530),
    g = n(871604),
    E = n(53558),
    v = n(827313),
    I = n(420654),
    S = n(166584),
    T = n(915014),
    b = n(228168),
    y = n(388032),
    A = n(800677),
    N = n(451563);
function C(e) {
    let { user: t, currentUser: n, displayProfile: C, guild: R, isHovering: O, onOpenProfile: D, channelId: L, onClose: x } = e,
        w = u.ZP.getName(null == R ? void 0 : R.id, L, t),
        M = (0, i.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        P = (0, i.e7)([s.Z, o.Z], () => s.Z.getChannel(o.Z.getChannelId())),
        k = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation);
    return (0, r.jsxs)(a.Scroller, {
        fade: !0,
        className: N.body,
        children: [
            (0, r.jsx)(m.Z, {
                user: t,
                profileType: b.y0.BITE_SIZE,
                onOpenProfile: D,
                nickname: w,
                pronouns: null == C ? void 0 : C.pronouns,
                tags: (0, r.jsx)(f.Z, {
                    displayProfile: C,
                    profileType: b.y0.BITE_SIZE,
                    onClose: x
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(h.Z, { userId: t.id }),
                        !k &&
                            (0, r.jsx)(v.Z, {
                                userId: t.id,
                                isHovering: O,
                                onOpenProfile: D
                            })
                    ]
                })
            }),
            (0, r.jsx)(T.Z, {
                user: t,
                onOpenProfile: (e) => (null == D ? void 0 : D({ section: e }))
            }),
            (0, r.jsxs)('div', {
                className: A.buttons,
                children: [
                    (0, r.jsx)(g.Z, {
                        user: t,
                        className: A.button,
                        closePopout: x
                    }),
                    (0, r.jsx)(E.Z, {
                        user: t,
                        guildId: null == R ? void 0 : R.id,
                        className: A.button
                    })
                ]
            }),
            (0, r.jsx)(I.Z, {
                user: t,
                bio: null == C ? void 0 : C.bio,
                hidePersonalInformation: k,
                onClose: x
            }),
            (0, r.jsx)(_.Z, {
                user: t,
                currentUser: n,
                onClose: x,
                className: N.activity
            }),
            (null == M ? void 0 : M.popularApplicationCommandIds) != null &&
                null != P &&
                (0, r.jsx)(d.Z, {
                    applicationId: M.id,
                    commandIds: M.popularApplicationCommandIds,
                    channel: P,
                    guildId: null == R ? void 0 : R.id,
                    onClick: x
                }),
            null != R &&
                (0, r.jsx)(p.Z, {
                    heading: y.intl.string(y.t.LPJmLy),
                    children: (0, r.jsx)(S.Z, {
                        user: t,
                        currentUser: n,
                        guild: R
                    })
                })
        ]
    });
}
