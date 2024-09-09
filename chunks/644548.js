n(627494), n(757143);
var l = n(735250),
    a = n(470079),
    i = n(317261),
    r = n(70956),
    s = n(5192),
    o = n(379357),
    u = n(561308),
    c = n(919394),
    d = n(206295),
    h = n(227172),
    m = n(555672),
    x = n(297781),
    E = n(591853),
    _ = n(410441),
    p = n(797342),
    v = n(689938);
let T = (e, t, n, l) => {
        let a = (function (e) {
                if (e === i._.WEEK) return v.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT;
            })(l),
            r = s.ZP.getName(t.guild_id, t.id, n),
            o = e.extra.game_name;
        return a
            .plainFormat({
                gameName: o,
                userName: r
            })
            .replaceAll('*', '');
    },
    f = (e, t) =>
        v.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: t.username,
            activity: e.extra.game_name
        });
t.Z = (e) => {
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: s, onVoiceChannelPreview: g } = e,
        { largeImage: I } = (0, o.rv)({ entry: n }),
        { user: C, details: N, appName: P } = (0, p.n)(n),
        { primaryColor: Z, secondaryColor: S } = (0, d.Z)(null == I ? void 0 : I.src),
        M = (0, u.yA)(n),
        y = (0, u.Nq)(n),
        A = a.useCallback(
            (e) => {
                if (null != t && null != C && null != M && null != y && !!(0, m.qy)(y))
                    return (0, c.SO)({
                        entry: n,
                        applicationImageSrc: null == I ? void 0 : I.src,
                        avatarSrcs: [C.getAvatarURL(null == t ? void 0 : t.guild_id, 128)],
                        description: T(n, t, C, y),
                        timestamp: v.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({ hours: Math.round(M / r.Z.Seconds.HOUR) }),
                        colors: [Z, S],
                        channelId: e
                    });
            },
            [null == I ? void 0 : I.src, t, M, n, Z, y, S, C]
        );
    if (null == C || null == M || null == y || !(0, m.qy)(y)) return null;
    let O = null != n.extra.platform ? h.v[n.extra.platform] : null;
    return (0, l.jsxs)(E.yR, {
        children: [
            (0, l.jsx)(E.wG, {
                channel: t,
                headerIcons:
                    null == O
                        ? null
                        : (0, l.jsx)(_.Z, {
                              Icon: O,
                              'aria-label': v.Z.Messages.GAME_LIBRARY_LIST_HEADER_PLATFORM
                          }),
                entry: n,
                userDescription: v.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                title: P,
                subtitle: N,
                badges: (0, l.jsx)(x.Gk, {
                    location: x.Gt.POPOUT,
                    children: m.Hs.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
                }),
                disableGameProfileLinks: i
            }),
            (0, l.jsx)(E.St, {
                children: (0, l.jsx)(E.WT, {
                    onReaction: s,
                    onVoiceChannelPreview: g,
                    user: C,
                    channel: t,
                    generateReactionImage: A,
                    reactionImageAltText: f(n, C),
                    entry: n
                })
            })
        ]
    });
};
