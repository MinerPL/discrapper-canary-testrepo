n.d(t, {
    Ho: function () {
        return m;
    },
    y9: function () {
        return _;
    }
});
var i = n(735250), a = n(470079), l = n(317261), s = n(823379), r = n(162461), o = n(561308), c = n(297781), u = n(443487), d = n(43205), h = n(689938), p = n(41899);
let m = [c.An], _ = [l._.WEEK];
t.ZP = a.memo(e => {
    let {
        entry: t,
        channel: n,
        selected: a
    } = e;
    if (!(0, r.Rg)('MemberListTopArtistContent'))
        return null;
    let l = (0, o.Nq)(t);
    return null != l && (0, s.Hi)(l, _) ? (0, i.jsxs)(u.Zb, {
        selected: a,
        children: [
            (0, i.jsxs)(u.e$, {
                children: [
                    (0, i.jsx)(u.F9, {
                        entry: t,
                        channelId: n.id,
                        guildId: n.guild_id
                    }),
                    (0, i.jsx)(u.ll, { children: h.Z.Messages.MEMBER_LIST_CONTENT_FEED_LISTENED_TO_MEDIA.format({ media: t.extra.artist.name }) }),
                    (0, i.jsx)(c.Gk, {
                        location: c.Gt.CARD,
                        children: m.map((e, n) => (0, i.jsx)(e, { entry: t }, n))
                    })
                ]
            }),
            (0, i.jsx)(d.f, {
                src: t.extra.media.image_url,
                size: 48,
                className: p.thumbnail
            })
        ]
    }) : null;
});
