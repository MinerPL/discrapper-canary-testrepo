n.d(t, {
    W: function () {
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
let c = [o.OV, o.EE, o.Af, o.U9, o.wO, o.f, o.n8, o.v1, o.pQ];
t.Z = i.memo((e) => {
    var t;
    let { entry: n, channel: i, selected: d, hovered: _ } = e,
        { largeImage: E } = (0, a.rv)({
            entry: n,
            showCoverImage: !1
        });
    return (0, r.jsxs)(l.Zb, {
        selected: d,
        children: [
            (0, r.jsxs)(l.e$, {
                children: [
                    (0, r.jsx)(l.F9, {
                        entry: n,
                        channelId: i.id,
                        guildId: i.guild_id
                    }),
                    (0, r.jsx)(l.ll, { children: n.extra.game_name }),
                    (0, r.jsx)(o.Gk, {
                        location: o.Gt.CARD,
                        children: c.map((e, t) =>
                            (0, r.jsx)(
                                e,
                                {
                                    entry: n,
                                    hovered: _
                                },
                                t
                            )
                        )
                    })
                ]
            }),
            (0, r.jsx)(s.f, {
                alt: null !== (t = null == E ? void 0 : E.text) && void 0 !== t ? t : null == E ? void 0 : E.alt,
                src: null == E ? void 0 : E.src,
                size: 48,
                className: u.thumbnail,
                showTooltip: (null == E ? void 0 : E.text) != null
            })
        ]
    });
});
