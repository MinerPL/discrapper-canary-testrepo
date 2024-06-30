n.d(t, {
    Bj: function () {
        return f;
    },
    td: function () {
        return _;
    }
});
var i = n(735250), a = n(470079), l = n(442837), s = n(835473), r = n(594174), o = n(81063), c = n(297781), u = n(443487), d = n(43205), h = n(701488), p = n(689938), m = n(41899);
let _ = [
        c.Yl,
        c.Rg
    ], f = e => {
        var t;
        let n = (0, s.q)(e.extra.application_id), i = null == n ? void 0 : n.getIconURL(128), a = (0, l.e7)([r.default], () => r.default.getUser(e.author_id)), c = (0, o.getAssetImage)(e.extra.application_id, e.extra.media_assets_large_image, [
                h.Si.LARGE,
                h.Si.LARGE
            ]), u = /\w+ (\d+), \w+ (\d+)/.exec(null !== (t = e.extra.media_assets_large_text) && void 0 !== t ? t : '');
        return {
            user: a,
            mediaImageSrc: null != c ? c : i,
            episodeDescription: null != u ? p.Z.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
                seasonNum: u[1],
                episodeNum: u[2]
            }) : null
        };
    };
t.ZP = a.memo(e => {
    let {
            entry: t,
            channel: n,
            selected: a
        } = e, {mediaImageSrc: l} = f(t);
    return (0, i.jsxs)(u.Zb, {
        selected: a,
        children: [
            (0, i.jsxs)(u.e$, {
                children: [
                    (0, i.jsx)(u.F9, {
                        entry: t,
                        channelId: n.id,
                        guildId: n.guild_id
                    }),
                    (0, i.jsx)(u.ll, { children: p.Z.Messages.MEMBER_LIST_CONTENT_FEED_WATCHED_MEDIA.format({ mediaTitle: t.extra.media_title }) }),
                    (0, i.jsx)(c.Gk, {
                        location: c.Gt.CARD,
                        children: _.map((e, n) => (0, i.jsx)(e, { entry: t }, n))
                    })
                ]
            }),
            (0, i.jsx)(d.f, {
                src: l,
                size: 48,
                className: m.thumbnail,
                alt: t.extra.media_title
            })
        ]
    });
});
