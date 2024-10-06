t.d(n, {
    Z: function () {
        return T;
    }
});
var s = t(735250);
t(470079);
var i = t(442837),
    o = t(481060),
    l = t(666520),
    r = t(189156),
    c = t(706454),
    a = t(430824),
    d = t(914010),
    u = t(785717),
    _ = t(250822),
    I = t(771362),
    E = t(280885),
    f = t(819602),
    m = t(900927),
    x = t(678738),
    Z = t(652853),
    p = t(179828),
    h = t(228168),
    v = t(689938),
    S = t(11633);
function T(e) {
    let { user: n, currentUser: t, displayProfile: T, subsection: g, onClose: A } = e,
        { theme: N } = (0, Z.z)(),
        { trackUserProfileAction: j } = (0, u.KZ)(),
        b = null == T ? void 0 : T.guildId,
        L = (0, i.e7)([a.Z], () => (null != b ? a.Z.getGuild(b) : null)),
        M = (0, i.e7)([d.Z], () => d.Z.getGuildId()),
        O = (0, i.e7)([c.default], () => c.default.locale),
        R = (0, I.Z)(n.id),
        C = (0, _.Z)(n.id);
    return (0, s.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: S.scroller,
        children: [
            (null == T ? void 0 : T.bio) != null &&
                (null == T ? void 0 : T.bio) !== '' &&
                (0, s.jsx)(E.Z, {
                    userBio: T.bio,
                    setLineClamp: !1
                }),
            null != L &&
                (0, s.jsx)(p.Z, {
                    user: n,
                    currentUser: t,
                    guild: L,
                    scrollIntoView: g === h.Tb.ROLES
                }),
            n.isProvisional && (0, s.jsx)(r.Z, { look: 'profile_modal' }),
            (0, s.jsx)(x.Z, {
                heading: v.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, s.jsx)(m.Z, {
                    userId: n.id,
                    guildId: null == T ? void 0 : T.guildId,
                    tooltipDelay: h.vB
                })
            }),
            R.length > 0 &&
                (0, s.jsx)(x.Z, {
                    heading: v.Z.Messages.CONNECTIONS,
                    scrollIntoView: g === h.Tb.CONNECTIONS,
                    children: (0, s.jsx)(f.OA, {
                        connectedAccounts: R,
                        className: S.connections,
                        userId: n.id,
                        theme: N,
                        locale: O
                    })
                }),
            C.length > 0 &&
                (0, s.jsx)(x.Z, {
                    heading: v.Z.Messages.APPS,
                    children: C.map((e) =>
                        (0, s.jsx)(
                            f.tH,
                            {
                                className: S.appsConnections,
                                applicationRoleConnection: e,
                                locale: O,
                                onApplicationClicked: () => {
                                    j({ action: 'PRESS_APP_CONNECTION' }), A();
                                },
                                selectedGuildId: null != M ? M : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, s.jsx)(x.Z, {
                heading: v.Z.Messages.NOTE,
                scrollIntoView: g === h.Tb.NOTE,
                children: (0, s.jsx)(l.Z, {
                    userId: n.id,
                    className: S.note,
                    autoFocus: g === h.Tb.NOTE,
                    onUpdate: () => j({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
