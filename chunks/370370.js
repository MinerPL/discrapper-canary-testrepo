var l = n(735250),
    a = n(470079),
    i = n(379357),
    r = n(442550),
    s = n(297781),
    o = n(443487),
    u = n(494399);
let c = [s.OV, s.EE, s.Af, s.U9, s.n8, s.pQ];
t.Z = a.memo((e) => {
    let { entry: t, channel: n, selected: a, hovered: d } = e,
        { largeImage: h } = (0, i.rv)({
            entry: t,
            showCoverImage: !1
        });
    return (0, l.jsxs)(o.Zb, {
        selected: a,
        children: [
            (0, l.jsxs)(o.e$, {
                children: [
                    (0, l.jsx)(o.F9, {
                        entry: t,
                        channelId: n.id,
                        guildId: n.guild_id
                    }),
                    (0, l.jsx)(o.ll, { children: t.extra.activity_name }),
                    (0, l.jsx)(s.Gk, {
                        location: s.Gt.CARD,
                        children: c.map((e, n) =>
                            (0, l.jsx)(
                                e,
                                {
                                    entry: t,
                                    hovered: d
                                },
                                n
                            )
                        )
                    })
                ]
            }),
            (0, l.jsx)(r.f, {
                alt: null == h ? void 0 : h.alt,
                src: null == h ? void 0 : h.src,
                size: 48,
                className: u.thumbnail
            })
        ]
    });
});
