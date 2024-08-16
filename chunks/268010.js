n(627494), n(757143);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(481060),
    r = n(706454),
    o = n(49012),
    c = n(5192),
    u = n(591759),
    d = n(561308),
    h = n(644810),
    m = n(206295),
    p = n(335326),
    _ = n(297781),
    f = n(591853),
    E = n(410441),
    g = n(689938);
let C = (e, t, n) => {
        let i = g.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
            a = c.ZP.getName(t.guild_id, t.id, n),
            s = e.extra.media_title;
        return i
            .plainFormat({
                mediaTitle: s,
                userName: a,
                episodeDescription: e.extra.media_subtitle
            })
            .replaceAll('*', '');
    },
    I = (e, t) =>
        g.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
            username: t.username,
            activity: e.extra.media_title
        });
t.Z = (e) => {
    let { channel: t, entry: n, requestId: c, closePopout: x } = e,
        { user: T, mediaImageSrc: N, episodeDescription: v } = (0, p.Bj)(n),
        { primaryColor: S, secondaryColor: Z } = (0, m.Z)(N),
        A = (0, s.e7)([r.default], () => r.default.locale),
        M = a.useCallback(
            (e) => {
                if (null != T && null != N)
                    return (0, h.B)({
                        entry: n,
                        mediaImageSrc: N,
                        avatarSrc: T.getAvatarURL(t.guild_id, 128),
                        description: C(n, t, T),
                        timestamp: (0, d.yh)(n, A),
                        episodeDescription: v,
                        colors: [S, Z],
                        channelId: e
                    });
            },
            [t, n, v, A, N, S, Z, T]
        ),
        b = () => {
            if (null == n.extra.url) return;
            let e = u.Z.safeParseWithQuery(n.extra.url);
            if (null != e && null != e.protocol && null != e.hostname)
                (0, o.q)({
                    href: u.Z.format(e),
                    trusted: !1
                });
        };
    return null == T
        ? null
        : (0, i.jsxs)(f.yR, {
              children: [
                  (0, i.jsx)(f.wG, {
                      thumbnailSrc: N,
                      channel: t,
                      entry: n,
                      userDescription: (0, d.kr)(n) ? g.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING : g.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED,
                      title: n.extra.media_title,
                      subtitle: n.extra.media_subtitle,
                      headerIcons: (0, i.jsx)(E.Z, {
                          Icon: l.CrunchyrollNeutralIcon,
                          'aria-label': g.Z.Messages.CRUNCHYROLL
                      }),
                      badges: (0, i.jsx)(_.Gk, {
                          location: _.Gt.POPOUT,
                          children: p.td.map((e, t) => (0, i.jsx)(e, { entry: n }, t))
                      }),
                      onClickTitle: b,
                      onClickThumbnail: b
                  }),
                  (0, i.jsx)(f.St, {
                      children: (0, i.jsx)(f.WT, {
                          closePopout: x,
                          user: T,
                          channel: t,
                          generateReactionImage: M,
                          reactionImageAltText: I(n, T),
                          entry: n,
                          requestId: c
                      })
                  })
              ]
          });
};
