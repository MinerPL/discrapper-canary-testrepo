n(627494), n(757143);
var i = n(735250), a = n(470079), l = n(317261), s = n(442837), r = n(594174), o = n(823379), c = n(5192), u = n(561308), d = n(256726), h = n(206295), p = n(278399), m = n(297781), _ = n(591853), f = n(410441), E = n(689938);
let C = (e, t, n, i) => {
        let a = function (e) {
                if (e === l._.WEEK)
                    return E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_WEEK_POPOUT;
            }(i), s = c.ZP.getName(t.guild_id, t.id, n), r = e.extra.artist.name;
        return a.plainFormat({
            artist: r,
            userName: s
        }).replaceAll('*', '');
    }, g = (e, t) => E.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_TOP_ARTIST.format({
        username: t.username,
        artist: e.extra.artist.name
    });
t.Z = e => {
    let {
            channel: t,
            entry: n,
            requestId: l,
            closePopout: c
        } = e, {
            parent_title: I,
            provider: x,
            image_url: T
        } = n.extra.media, N = n.extra.artist.name, v = (0, s.e7)([r.default], () => r.default.getUser(n.author_id)), {
            primaryColor: S,
            secondaryColor: Z
        } = (0, h.Z)(T), A = (0, u.Nq)(n), M = a.useCallback(() => {
            if (null == v || !(0, o.Hi)(A, p.y9))
                return;
            let e = C(n, t, v, A);
            return (0, d.CR)({
                user: v,
                channel: t,
                mediaImageSrc: T,
                artist: N,
                description: e,
                colors: [
                    S,
                    Z
                ],
                badges: (0, d.UU)(n)
            });
        }, [
            T,
            N,
            t,
            n,
            S,
            A,
            Z,
            v
        ]);
    return null != v && (0, o.Hi)(A, p.y9) ? (0, i.jsxs)(_.yR, {
        children: [
            (0, i.jsx)(_.wG, {
                thumbnailSrc: T,
                channel: t,
                entry: n,
                headerIcons: (0, i.jsx)(f.Z, { provider: x }),
                userDescription: E.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
                title: I,
                subtitle: N,
                badges: (0, i.jsx)(m.Gk, {
                    location: m.Gt.POPOUT,
                    children: p.Ho.map((e, t) => (0, i.jsx)(e, { entry: n }, t))
                })
            }),
            (0, i.jsx)(_.St, {
                children: (0, i.jsx)(_.WT, {
                    closePopout: c,
                    user: v,
                    channel: t,
                    generateReactionImage: M,
                    reactionImageAltText: g(n, v),
                    entry: n,
                    requestId: l
                })
            })
        ]
    }) : null;
};
