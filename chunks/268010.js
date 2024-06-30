n(627494), n(757143);
var i = n(735250), a = n(470079), l = n(442837), s = n(692547), r = n(481060), o = n(706454), c = n(5192), u = n(561308), d = n(644810), h = n(206295), p = n(335326), m = n(297781), _ = n(591853), f = n(689938);
let E = (e, t, n) => {
        let i = f.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA, a = c.ZP.getName(t.guild_id, t.id, n), l = e.extra.media_title;
        return i.plainFormat({
            mediaTitle: l,
            userName: a,
            episodeDescription: e.extra.media_subtitle
        }).replaceAll('*', '');
    }, C = (e, t) => f.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
        username: t.username,
        activity: e.extra.media_title
    });
t.Z = e => {
    let {
            channel: t,
            entry: n,
            requestId: c,
            closePopout: g
        } = e, {
            user: I,
            mediaImageSrc: x,
            episodeDescription: T
        } = (0, p.Bj)(n), {
            primaryColor: N,
            secondaryColor: v
        } = (0, h.Z)(x), S = (0, l.e7)([o.default], () => o.default.locale), Z = a.useCallback(e => {
            if (null != I && null != x)
                return (0, d.B)({
                    entry: n,
                    mediaImageSrc: x,
                    avatarSrc: I.getAvatarURL(t.guild_id, 128),
                    description: E(n, t, I),
                    timestamp: (0, u.yh)(n, S),
                    episodeDescription: T,
                    colors: [
                        N,
                        v
                    ],
                    channelId: e
                });
        }, [
            t,
            n,
            T,
            S,
            x,
            N,
            v,
            I
        ]);
    return null == I ? null : (0, i.jsxs)(_.yR, {
        children: [
            (0, i.jsx)(_.wG, {
                thumbnailSrc: x,
                channel: t,
                entry: n,
                userDescription: (0, u.kr)(n) ? f.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING : f.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED,
                title: n.extra.media_title,
                subtitle: n.extra.media_subtitle,
                headerIcons: (0, i.jsx)(r.CrunchyrollNeutralIcon, {
                    size: 'xs',
                    color: s.Z.colors.CONTENT_INVENTORY_OVERLAY_UI_MOD
                }),
                badges: (0, i.jsx)(m.Gk, {
                    location: m.Gt.POPOUT,
                    children: p.td.map((e, t) => (0, i.jsx)(e, { entry: n }, t))
                })
            }),
            (0, i.jsx)(_.St, {
                children: (0, i.jsx)(_.WT, {
                    closePopout: g,
                    user: I,
                    channel: t,
                    generateReactionImage: Z,
                    reactionImageAltText: C(n, I),
                    entry: n,
                    requestId: c
                })
            })
        ]
    });
};
