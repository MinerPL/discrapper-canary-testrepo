n.d(t, {
    pi: function () {
        return E;
    }
}), n(47120);
var i = n(735250), a = n(470079), l = n(512722), s = n.n(l), r = n(442837), o = n(276852), c = n(594174), u = n(719247), d = n(297781), h = n(443487), p = n(43205), m = n(689938), _ = n(41899);
let f = [d.XF];
function E(e) {
    var t, n, i, a, l, s, d;
    let h = (0, r.e7)([u.Z], () => u.Z.getMatchingActivity(e)), p = (0, r.e7)([c.default], () => c.default.getUser(e.author_id));
    if (null == h || null == p)
        return {};
    let m = e.extra.entries[0], _ = null !== (a = null !== (i = (0, o.Z)(h)) && void 0 !== i ? i : null === (t = h.assets) || void 0 === t ? void 0 : t.small_image) && void 0 !== a ? a : m.media.image_url, f = null !== (s = null !== (l = h.state) && void 0 !== l ? l : null === (n = m.media.artists[0]) || void 0 === n ? void 0 : n.name) && void 0 !== s ? s : m.media.title, E = null !== (d = h.details) && void 0 !== d ? d : m.media.title;
    return {
        activity: h,
        artist: f,
        currentEntry: m,
        imageUrl: _,
        title: E,
        user: p
    };
}
t.ZP = a.memo(function (e) {
    let {
            entry: t,
            channel: n,
            selected: a
        } = e, {
            activity: l,
            artist: r,
            imageUrl: o
        } = E(t);
    return s()(null != l, 'There must be a matching live Activity for LISTENED_SESSION'), (0, i.jsxs)(h.Zb, {
        selected: a,
        children: [
            (0, i.jsxs)(h.e$, {
                children: [
                    (0, i.jsx)(h.F9, {
                        entry: t,
                        channelId: n.id,
                        guildId: n.guild_id
                    }),
                    (0, i.jsx)(h.ll, {
                        children: function (e) {
                            return m.Z.Messages.MEMBER_LIST_CONTENT_FEED_LISTENING_TO_MEDIA.format({ media: e });
                        }(r)
                    }),
                    (0, i.jsx)(d.Gk, {
                        location: d.Gt.CARD,
                        children: f.map((e, n) => (0, i.jsx)(e, { entry: t }, n))
                    })
                ]
            }),
            (0, i.jsx)(p.f, {
                src: o,
                size: 48,
                className: _.thumbnail
            })
        ]
    });
});
