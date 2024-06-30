n(627494), n(757143);
var i = n(735250), a = n(470079), l = n(317261), s = n(70956), r = n(5192), o = n(561308), c = n(919394), u = n(206295), d = n(555672), h = n(297781), p = n(591853), m = n(265048), _ = n(689938);
let f = (e, t, n, i) => {
        let a = function (e) {
                if (e === l._.WEEK)
                    return _.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT;
            }(i), s = r.ZP.getName(t.guild_id, t.id, n), o = e.extra.game_name;
        return a.plainFormat({
            gameName: o,
            userName: s
        }).replaceAll('*', '');
    }, E = (e, t) => _.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
        username: t.username,
        activity: e.extra.game_name
    });
t.Z = e => {
    let {
            channel: t,
            entry: n,
            requestId: l,
            closePopout: r
        } = e, {
            iconUrl: C,
            iconTitle: g,
            user: I,
            details: x,
            gameTitle: T
        } = (0, m.F)(n), {
            primaryColor: N,
            secondaryColor: v
        } = (0, u.Z)(C), S = (0, o.yA)(n), Z = (0, o.Nq)(n), A = a.useCallback(e => {
            if (null != I && null != S && null != Z && !!(0, d.qy)(Z))
                return (0, c.SO)({
                    entry: n,
                    applicationImageSrc: C,
                    avatarSrcs: [I.getAvatarURL(t.guild_id, 128)],
                    description: f(n, t, I, Z),
                    timestamp: _.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({ hours: Math.round(S / s.Z.Seconds.HOUR) }),
                    colors: [
                        N,
                        v
                    ],
                    channelId: e
                });
        }, [
            C,
            t,
            S,
            n,
            N,
            Z,
            v,
            I
        ]);
    return null != I && null != S && null != Z && (0, d.qy)(Z) ? (0, i.jsxs)(p.yR, {
        children: [
            (0, i.jsx)(p.wG, {
                thumbnailSrc: C,
                thumbnailTitle: g,
                channel: t,
                entry: n,
                userDescription: _.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
                title: T,
                subtitle: x,
                badges: (0, i.jsx)(h.Gk, {
                    location: h.Gt.POPOUT,
                    children: d.Hs.map((e, t) => (0, i.jsx)(e, { entry: n }, t))
                })
            }),
            (0, i.jsx)(p.St, {
                children: (0, i.jsx)(p.WT, {
                    closePopout: r,
                    user: I,
                    channel: t,
                    generateReactionImage: A,
                    reactionImageAltText: E(n, I),
                    entry: n,
                    requestId: l
                })
            })
        ]
    }) : null;
};
