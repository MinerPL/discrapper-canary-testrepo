i.d(n, {
    Z: function () {
        return N;
    }
});
var t = i(735250);
i(470079);
var o = i(442837), s = i(481060), l = i(666520), a = i(706454), r = i(430824), c = i(914010), d = i(785717), u = i(532776), I = i(648067), E = i(588822), _ = i(900927), f = i(678738), Z = i(652853), m = i(335191), S = i(351707), v = i(228168), x = i(689938), h = i(143599);
function N(e) {
    let {
            user: n,
            currentUser: i,
            displayProfile: N,
            subsection: g,
            onClose: C
        } = e, {theme: p} = (0, Z.z)(), {trackUserProfileAction: R} = (0, d.KZ)(), T = null == N ? void 0 : N.guildId, M = (0, o.e7)([r.Z], () => null != T ? r.Z.getGuild(T) : null), j = (0, o.e7)([c.Z], () => c.Z.getGuildId()), A = (0, o.e7)([a.default], () => a.default.locale), P = (0, I.Z)(n.id), U = (0, u.Z)(n.id);
    return (0, t.jsxs)(s.ScrollerThin, {
        fade: !0,
        className: h.scroller,
        children: [
            (null == N ? void 0 : N.bio) != null && (null == N ? void 0 : N.bio) !== '' && (0, t.jsx)(E.Z, {
                userBio: N.bio,
                setLineClamp: !1
            }),
            null != M && (0, t.jsx)(S.Z, {
                user: n,
                currentUser: i,
                guild: M,
                scrollIntoView: g === v.Tb.ROLES
            }),
            (0, t.jsx)(f.Z, {
                title: x.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, t.jsx)(_.Z, {
                    userId: n.id,
                    guildId: null == N ? void 0 : N.guildId,
                    tooltipDelay: v.vB
                })
            }),
            P.length > 0 && (0, t.jsx)(f.Z, {
                title: x.Z.Messages.CONNECTIONS,
                children: (0, t.jsx)(m.OA, {
                    connectedAccounts: P,
                    className: h.connections,
                    userId: n.id,
                    theme: p,
                    locale: A
                })
            }),
            U.length > 0 && (0, t.jsx)(f.Z, {
                title: x.Z.Messages.APPS,
                children: U.map(e => (0, t.jsx)(m.tH, {
                    className: h.appsConnections,
                    applicationRoleConnection: e,
                    locale: A,
                    onApplicationClicked: () => {
                        R({ action: 'PRESS_APP_CONNECTION' }), C();
                    },
                    selectedGuildId: null != j ? j : void 0
                }, e.application.id))
            }),
            (0, t.jsx)(f.Z, {
                title: x.Z.Messages.NOTE,
                scrollIntoView: g === v.Tb.NOTE,
                children: (0, t.jsx)(l.Z, {
                    userId: n.id,
                    className: h.note,
                    autoFocus: g === v.Tb.NOTE,
                    onUpdate: () => R({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
