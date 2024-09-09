s.d(n, {
    Z: function () {
        return v;
    }
});
var t = s(735250);
s(470079);
var i = s(442837),
    o = s(481060),
    l = s(666520),
    r = s(706454),
    a = s(430824),
    c = s(914010),
    d = s(785717),
    u = s(250822),
    I = s(771362),
    _ = s(280885),
    E = s(819602),
    f = s(900927),
    x = s(678738),
    m = s(652853),
    Z = s(179828),
    p = s(228168),
    h = s(689938),
    S = s(642411);
function v(e) {
    let { user: n, currentUser: s, displayProfile: v, subsection: T, onClose: g } = e,
        { theme: A } = (0, m.z)(),
        { trackUserProfileAction: N } = (0, d.KZ)(),
        j = null == v ? void 0 : v.guildId,
        R = (0, i.e7)([a.Z], () => (null != j ? a.Z.getGuild(j) : null)),
        L = (0, i.e7)([c.Z], () => c.Z.getGuildId()),
        b = (0, i.e7)([r.default], () => r.default.locale),
        M = (0, I.Z)(n.id),
        O = (0, u.Z)(n.id);
    return (0, t.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: S.scroller,
        children: [
            (null == v ? void 0 : v.bio) != null &&
                (null == v ? void 0 : v.bio) !== '' &&
                (0, t.jsx)(_.Z, {
                    userBio: v.bio,
                    setLineClamp: !1
                }),
            null != R &&
                (0, t.jsx)(Z.Z, {
                    user: n,
                    currentUser: s,
                    guild: R,
                    scrollIntoView: T === p.Tb.ROLES
                }),
            (0, t.jsx)(x.Z, {
                heading: h.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, t.jsx)(f.Z, {
                    userId: n.id,
                    guildId: null == v ? void 0 : v.guildId,
                    tooltipDelay: p.vB
                })
            }),
            M.length > 0 &&
                (0, t.jsx)(x.Z, {
                    heading: h.Z.Messages.CONNECTIONS,
                    scrollIntoView: T === p.Tb.CONNECTIONS,
                    children: (0, t.jsx)(E.OA, {
                        connectedAccounts: M,
                        className: S.connections,
                        userId: n.id,
                        theme: A,
                        locale: b
                    })
                }),
            O.length > 0 &&
                (0, t.jsx)(x.Z, {
                    heading: h.Z.Messages.APPS,
                    children: O.map((e) =>
                        (0, t.jsx)(
                            E.tH,
                            {
                                className: S.appsConnections,
                                applicationRoleConnection: e,
                                locale: b,
                                onApplicationClicked: () => {
                                    N({ action: 'PRESS_APP_CONNECTION' }), g();
                                },
                                selectedGuildId: null != L ? L : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, t.jsx)(x.Z, {
                heading: h.Z.Messages.NOTE,
                scrollIntoView: T === p.Tb.NOTE,
                children: (0, t.jsx)(l.Z, {
                    userId: n.id,
                    className: S.note,
                    autoFocus: T === p.Tb.NOTE,
                    onUpdate: () => N({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
