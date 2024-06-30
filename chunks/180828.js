n.d(t, {
    J: function () {
        return s.Hb;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(467679), s = n(674563), l = n(818060);
t.Z = e => {
    let {
        name: t,
        discriminator: n,
        invertBotTagColor: i,
        nameColor: s,
        className: u,
        botType: c,
        usernameClass: d,
        discriminatorClass: _,
        botClass: E,
        botVerified: f = !1,
        style: h,
        useRemSizes: p = !1,
        usernameIcon: m
    } = e;
    return (0, r.jsxs)('div', {
        className: a()(u, l.nameTag),
        style: h,
        children: [
            (0, r.jsxs)('span', {
                className: a()(l.username, d),
                style: null != s ? { color: s } : void 0,
                children: [
                    m,
                    t
                ]
            }),
            null != n ? (0, r.jsxs)('span', {
                className: null != _ ? _ : void 0,
                children: [
                    '#',
                    n
                ]
            }) : null,
            null != c ? (0, r.jsx)(o.Z, {
                type: c,
                invertColor: i,
                className: a()(E, l.bot),
                verified: f,
                useRemSizes: p
            }) : null
        ]
    });
};
