n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250);
n(470079);
var a = n(657707),
    s = n(835473),
    l = n(925329),
    r = n(739566),
    o = n(944192),
    c = n(942951),
    d = n(834129),
    u = n(689938),
    _ = n(646768);
function E(e) {
    let { message: t, channel: n, author: E, compact: I } = e,
        { nick: m } = (0, r.Sw)(E, n),
        T = (0, c.l)({
            user: E,
            channelId: n.id,
            guildId: void 0,
            messageId: void 0
        })(),
        N = (0, s.q)(t.applicationId);
    if (null == N) return null;
    let h = u.Z.Messages.SYSTEM_MESSAGE_IN_GAME_MESSAGE_NUX.format({
        username: m,
        usernameHook: T,
        gameName: N.name,
        gameIconHook: (e) =>
            (0, i.jsx)(o.j, {
                application: N,
                timestamp: t.timestamp,
                children: (0, i.jsxs)('span', {
                    className: _.gameContainer,
                    children: [
                        (0, i.jsx)(l.Z, {
                            game: N,
                            size: l.Z.Sizes.XXSMALL,
                            className: _.inlineIcon
                        }),
                        ' ',
                        e
                    ]
                })
            }),
        helpdeskArticle: '#'
    });
    return (0, i.jsx)(d.Z, {
        iconNode: (0, i.jsx)(a.iWm, { size: 'sm' }),
        compact: I,
        contentClassName: _.content,
        children: (0, i.jsx)('div', { children: h })
    });
}
