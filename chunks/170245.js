var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(442837),
    l = n(129861),
    o = n(700582),
    c = n(699516),
    d = n(54216);
t.Z = function (e) {
    let { user: t, hovered: n, subText: a, showAccountIdentifier: u, status: _, isMobile: E, className: h } = e,
        m = (0, r.e7)([c.Z], () => c.Z.getNickname(t.id));
    return (0, i.jsxs)('div', {
        className: s()(d.userInfo, h, { [d.hovered]: n }),
        children: [
            (0, i.jsx)(o.Z, {
                user: t,
                className: d.avatar,
                animate: n,
                status: _,
                isMobile: E
            }),
            (0, i.jsxs)('div', {
                className: d.text,
                children: [
                    (0, i.jsx)(l.Z, {
                        user: t,
                        nick: m,
                        botClass: d.botTag,
                        className: s()(d.discordTag, { [d.alignPomelo]: t.isPomelo() }),
                        usernameClass: d.username,
                        discriminatorClass: d.discriminator,
                        showAccountIdentifier: u
                    }),
                    (0, i.jsx)('div', {
                        className: d.subtext,
                        children: a
                    })
                ]
            })
        ]
    });
};
