l.d(n, {
    j: function () {
        return c;
    }
});
var t = l(200651),
    i = l(192379),
    r = l(379357),
    a = l(442550),
    d = l(297781),
    s = l(443487),
    u = l(494399);
let c = [d.OV, d.EE, d.Af, d.U9, d.n8, d.pQ];
n.Z = i.memo((e) => {
    let { entry: n, channel: l, selected: i, hovered: o } = e,
        { largeImage: h } = (0, r.rv)({
            entry: n,
            showCoverImage: !1
        });
    return (0, t.jsxs)(s.Zb, {
        selected: i,
        children: [
            (0, t.jsxs)(s.e$, {
                children: [
                    (0, t.jsx)(s.F9, {
                        entry: n,
                        channelId: l.id,
                        guildId: l.guild_id
                    }),
                    (0, t.jsx)(s.ll, { children: n.extra.activity_name }),
                    (0, t.jsx)(d.Gk, {
                        location: d.Gt.CARD,
                        children: c.map((e, l) =>
                            (0, t.jsx)(
                                e,
                                {
                                    entry: n,
                                    hovered: o
                                },
                                l
                            )
                        )
                    })
                ]
            }),
            (0, t.jsx)(a.f, {
                alt: null == h ? void 0 : h.alt,
                src: null == h ? void 0 : h.src,
                size: 48,
                className: u.thumbnail
            })
        ]
    });
});
