n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(505737), a = n(705556), o = n(901952), s = n(228168), l = n(472375);
function u(e) {
    let {
            user: t,
            guildId: n,
            channelId: u,
            onClose: c
        } = e, d = (0, i.Z)(t.id, n);
    return (0, r.jsxs)('footer', {
        className: l.footer,
        children: [
            d && (0, r.jsx)(o.Z, {
                user: t,
                guildId: n,
                channelId: u,
                onClose: c
            }),
            !d && (0, r.jsx)(a.Z, {
                user: t,
                guildId: n,
                onClose: c,
                profileType: s.y0.BITE_SIZE
            })
        ]
    });
}
