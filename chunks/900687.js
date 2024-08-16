t.d(n, {
    Z: function () {
        return r;
    }
});
var s = t(735250);
t(470079);
var i = t(705556),
    o = t(225714),
    l = t(612309);
function r(e) {
    let { user: n, isCurrentUser: t, guildId: r, friendToken: a, relationshipType: c, persistentCallCtaEnabled: d = !1, activeInviteToCallCtaEnabled: u = !1, onClose: I } = e;
    return (0, s.jsxs)('div', {
        className: l.buttons,
        children: [
            (0, s.jsx)(o.Z, {
                user: n,
                isCurrentUser: t,
                relationshipType: c,
                persistentCallCtaEnabled: d,
                activeInviteToCallCtaEnabled: u,
                friendToken: a,
                onClose: I
            }),
            (0, s.jsx)(i.Z, {
                user: n,
                guildId: r,
                onClose: I
            })
        ]
    });
}
