n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(78675), a = n(438163), o = n(513099), s = n(228168), l = n(472375);
function u(e) {
    let {
        user: t,
        displayProfile: n,
        guildId: u,
        channelId: c,
        onOpenProfile: d,
        onClose: _
    } = e;
    return (0, r.jsxs)('header', {
        className: l.header,
        children: [
            (0, r.jsx)(i.Z, {
                user: t,
                displayProfile: n,
                guildId: u,
                profileType: s.y0.BITE_SIZE,
                hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
            }),
            (0, r.jsx)(o.Z, {
                user: t,
                displayProfile: n,
                guildId: u,
                channelId: c,
                onOpenProfile: d
            }),
            (0, r.jsx)(a.Z, {
                user: t,
                profileType: s.y0.BITE_SIZE,
                onClose: _
            })
        ]
    });
}
