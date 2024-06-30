n.d(t, {
    l: function () {
        return h;
    }
});
var i = n(735250), s = n(470079), o = n(481060), a = n(100527), l = n(906732), r = n(484459), c = n(103575), u = n(592125), d = n(91047);
function h(e) {
    var t, n;
    let {
            user: h,
            channelId: m,
            guildId: p,
            messageId: g,
            stopPropagation: f = !1,
            ariaLabel: T
        } = e, {analyticsLocations: _} = (0, l.ZP)(a.Z.USERNAME);
    let v = (t = h, n = m, s.useCallback(e => {
        let i = u.Z.getChannel(n);
        null != i && null != t && (0, d.Pv)(e, t, i);
    }, [
        t,
        n
    ]));
    return s.useCallback(e => (t, n) => {
        let a = (n, i) => (0, s.createElement)(o.NameWithRoleAnchor, {
                ...null != n ? n : {},
                key: i,
                onContextMenu: v,
                name: t,
                color: null == e ? void 0 : e.colorString,
                roleName: null == e ? void 0 : e.colorRoleName,
                'aria-label': T
            }), u = e => t => {
                f && t.stopPropagation(), e(t);
            };
        return (0, i.jsx)(l.Gt, {
            value: _,
            children: null != h ? (0, i.jsx)(o.Popout, {
                position: 'right',
                preload: () => (0, r.W)(h.id, h.getAvatarURL(p, 80), {
                    guildId: p,
                    channelId: m
                }),
                renderPopout: t => (0, i.jsx)(c.Z, {
                    ...t,
                    location: 'useUsernameHook',
                    userId: h.id,
                    guildId: p,
                    channelId: m,
                    messageId: g,
                    roleId: null == e ? void 0 : e.colorRoleId
                }),
                children: e => {
                    let {
                        onClick: t,
                        ...n
                    } = e;
                    return a({
                        onClick: u(t),
                        ...n
                    });
                }
            }, n) : a(void 0, n)
        });
    }, [
        _,
        h,
        m,
        p,
        g,
        v,
        f,
        T
    ]);
}
