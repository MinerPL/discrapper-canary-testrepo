n.d(t, {
    t: function () {
        return c;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(379357),
    s = n(442550),
    o = n(297781),
    l = n(443487),
    u = n(182022);
let c = [o.Yl, o.Rg];
t.Z = i.memo((e) => {
    let { entry: t, channel: n, selected: i } = e,
        { largeImage: d } = (0, a.rv)({ entry: t });
    return (0, r.jsxs)(l.Zb, {
        selected: i,
        children: [
            (0, r.jsxs)(l.e$, {
                children: [
                    (0, r.jsx)(l.F9, {
                        entry: t,
                        channelId: n.id,
                        guildId: n.guild_id
                    }),
                    (0, r.jsx)(l.ll, { children: t.extra.media_title }),
                    (0, r.jsx)(o.Gk, {
                        location: o.Gt.CARD,
                        children: c.map((e, n) => (0, r.jsx)(e, { entry: t }, n))
                    })
                ]
            }),
            (0, r.jsx)(s.f, {
                src: null == d ? void 0 : d.src,
                size: 48,
                className: u.thumbnail,
                alt: null == d ? void 0 : d.alt
            })
        ]
    });
});
