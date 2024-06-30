n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(735250), s = n(470079), a = n(481060), r = n(212093), l = n(703656), o = n(769654), c = n(430824), d = n(626135), u = n(768581), _ = n(125631), E = n(981631), h = n(689938), I = n(387259);
function m(e, t, n) {
    return (0, i.jsxs)('button', {
        className: I.container,
        onClick: n,
        children: [
            'function' == typeof e ? (0, i.jsx)('div', {
                className: I.icon,
                children: (0, i.jsx)(e, {
                    className: I.__invalid_iconInner,
                    color: a.tokens.colors.WHITE.css
                })
            }) : (0, i.jsx)('img', {
                className: I.icon,
                alt: '',
                src: e
            }),
            (0, i.jsx)(a.Text, {
                className: I.text,
                variant: 'text-md/medium',
                children: t
            }),
            (0, i.jsx)(_.Z, { className: I.arrow })
        ]
    }, t);
}
function p() {
    let e = Object.values(c.Z.getGuilds()).filter(e => e.hasFeature(E.oNc.HUB)), t = e => {
            d.default.track(E.rMx.ADD_FRIEND_OTHER_PLACES_HUB_CLICKED, { guild_id: e }), (0, o.X)(e);
        };
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)('header', {
                className: I.header,
                children: (0, i.jsx)(a.FormTitle, {
                    tag: 'h2',
                    className: I.title,
                    children: h.Z.Messages.ADD_FRIEND_MAKE_FRIENDS
                })
            }),
            (0, i.jsxs)('div', {
                className: I.grid,
                children: [
                    e.map(e => m(u.ZP.getGuildIconURL({
                        id: e.id,
                        icon: e.icon,
                        size: 240
                    }), e.name, () => {
                        t(e.id);
                    })),
                    m(a.CompassIcon, h.Z.Messages.ADD_FRIEND_EXPLORE_PUBLIC_SERVERS, () => {
                        (0, r.AQ)(), d.default.track(E.rMx.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED), (0, l.uL)(E.Z5c.GUILD_DISCOVERY);
                    })
                ]
            })
        ]
    });
}
