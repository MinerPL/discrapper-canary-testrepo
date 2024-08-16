n(627494), n(757143);
var i = n(735250),
    a = n(470079),
    s = n(317261),
    l = n(70956),
    r = n(5192),
    o = n(561308),
    c = n(919394),
    u = n(206295),
    d = n(227172),
    h = n(555672),
    m = n(297781),
    p = n(591853),
    _ = n(410441),
    f = n(797342),
    E = n(689938);
let g = (e, t, n, i) => {
        let a = (function (e) {
                if (e === s._.WEEK) return E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT;
            })(i),
            l = r.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.game_name;
        return a
            .plainFormat({
                gameName: o,
                userName: l
            })
            .replaceAll('*', '');
    },
    C = (e, t) =>
        E.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: t.username,
            activity: e.extra.game_name
        });
t.Z = (e) => {
    let { channel: t, entry: n, requestId: s, closePopout: r } = e,
        { iconUrl: I, iconTitle: x, user: T, details: N, appName: v, coverImageUrl: S } = (0, f.n)(n),
        { primaryColor: Z, secondaryColor: A } = (0, u.Z)(I),
        M = (0, o.yA)(n),
        b = (0, o.Nq)(n),
        R = a.useCallback(
            (e) => {
                if (null != T && null != M && null != b && !!(0, h.qy)(b))
                    return (0, c.SO)({
                        entry: n,
                        applicationImageSrc: I,
                        avatarSrcs: [T.getAvatarURL(t.guild_id, 128)],
                        description: g(n, t, T, b),
                        timestamp: E.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({ hours: Math.round(M / l.Z.Seconds.HOUR) }),
                        colors: [Z, A],
                        channelId: e
                    });
            },
            [I, t, M, n, Z, b, A, T]
        );
    if (null == T || null == M || null == b || !(0, h.qy)(b)) return null;
    let j = null != n.extra.platform ? d.v[n.extra.platform] : null;
    return (0, i.jsxs)(p.yR, {
        children: [
            (0, i.jsx)(p.wG, {
                thumbnailSrc: null != S ? S : I,
                thumbnailTitle: x,
                channel: t,
                headerIcons:
                    null == j
                        ? null
                        : (0, i.jsx)(_.Z, {
                              Icon: j,
                              'aria-label': E.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
                          }),
                entry: n,
                userDescription: E.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
                title: v,
                subtitle: N,
                badges: (0, i.jsx)(m.Gk, {
                    location: m.Gt.POPOUT,
                    children: h.Hs.map((e, t) => (0, i.jsx)(e, { entry: n }, t))
                })
            }),
            (0, i.jsx)(p.St, {
                children: (0, i.jsx)(p.WT, {
                    closePopout: r,
                    user: T,
                    channel: t,
                    generateReactionImage: R,
                    reactionImageAltText: C(n, T),
                    entry: n,
                    requestId: s
                })
            })
        ]
    });
};
