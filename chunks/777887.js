n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(735250);
n(470079);
var i = n(442837), a = n(246946), o = n(5192), s = n(741308), l = n(681837), u = n(724593), c = n(530), d = n(580512), _ = n(67152), E = n(579285), f = n(287612), h = n(228168), p = n(472375);
function m(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: m,
            guild: I,
            isHovering: T,
            onOpenProfile: g,
            channelId: S,
            onClose: A
        } = e, N = o.ZP.getName(null == I ? void 0 : I.id, S, t), v = (0, i.e7)([a.Z], () => a.Z.hidePersonalInformation);
    return (0, r.jsxs)('div', {
        className: p.body,
        children: [
            (0, r.jsx)(c.Z, {
                user: t,
                profileType: h.y0.BITE_SIZE,
                onOpenProfile: g,
                nickname: N,
                pronouns: null == m ? void 0 : m.pronouns,
                tags: (0, r.jsx)(s.Z, {
                    displayProfile: m,
                    profileType: h.y0.BITE_SIZE,
                    onClose: A
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.Z, { userId: t.id }),
                        !v && (0, r.jsx)(u.Z, {
                            user: t,
                            isHovering: T,
                            onOpenProfile: () => null == g ? void 0 : g({ subsection: h.Tb.NOTE })
                        })
                    ]
                })
            }),
            (0, r.jsx)(f.Z, {
                user: t,
                onOpenProfile: e => null == g ? void 0 : g({ section: e })
            }),
            (0, r.jsx)(_.Z, {
                user: t,
                bio: null == m ? void 0 : m.bio,
                hidePersonalInformation: v,
                onClose: A
            }),
            (0, r.jsx)(d.Z, {
                user: t,
                guild: I,
                channelId: S,
                onClose: A
            }),
            null != I && (0, r.jsx)(E.Z, {
                user: t,
                currentUser: n,
                guild: I,
                onOpenProfile: () => null == g ? void 0 : g({ subsection: h.Tb.ROLES })
            })
        ]
    });
}
