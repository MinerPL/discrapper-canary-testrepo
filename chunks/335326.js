n.d(t, {
    Bj: function () {
        return p;
    },
    td: function () {
        return h;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(835473),
    o = n(594174),
    l = n(81063),
    u = n(297781),
    c = n(443487),
    d = n(43205),
    _ = n(701488),
    E = n(689938),
    f = n(182022);
let h = [u.Yl, u.Rg],
    p = (e) => {
        var t;
        let n = (0, s.q)(e.extra.application_id),
            r = null == n ? void 0 : n.getIconURL(128),
            i = (0, a.e7)([o.default], () => o.default.getUser(e.author_id)),
            u = (0, l.getAssetImage)(e.extra.application_id, e.extra.media_assets_large_image, [_.Si.LARGE, _.Si.LARGE]),
            c = /\w+ (\d+), \w+ (\d+)/.exec(null !== (t = e.extra.media_assets_large_text) && void 0 !== t ? t : '');
        return {
            user: i,
            mediaImageSrc: null != u ? u : r,
            episodeDescription:
                null != c
                    ? E.Z.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
                          seasonNum: c[1],
                          episodeNum: c[2]
                      })
                    : null
        };
    };
t.ZP = i.memo((e) => {
    let { entry: t, channel: n, selected: i } = e,
        { mediaImageSrc: a } = p(t);
    return (0, r.jsxs)(c.Zb, {
        selected: i,
        children: [
            (0, r.jsxs)(c.e$, {
                children: [
                    (0, r.jsx)(c.F9, {
                        entry: t,
                        channelId: n.id,
                        guildId: n.guild_id
                    }),
                    (0, r.jsx)(c.ll, { children: t.extra.media_title }),
                    (0, r.jsx)(u.Gk, {
                        location: u.Gt.CARD,
                        children: h.map((e, n) => (0, r.jsx)(e, { entry: t }, n))
                    })
                ]
            }),
            (0, r.jsx)(d.f, {
                src: a,
                size: 48,
                className: f.thumbnail,
                alt: t.extra.media_title
            })
        ]
    });
});
