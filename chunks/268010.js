n(627494), n(757143);
var l = n(735250),
    a = n(470079),
    i = n(442837),
    r = n(481060),
    s = n(706454),
    o = n(594174),
    u = n(49012),
    c = n(5192),
    d = n(591759),
    h = n(379357),
    m = n(561308),
    x = n(644810),
    E = n(206295),
    _ = n(335326),
    p = n(297781),
    v = n(591853),
    T = n(410441),
    f = n(689938);
let g = (e, t, n) => {
        let l = f.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
            a = c.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            i = e.extra.media_title;
        return l
            .plainFormat({
                mediaTitle: i,
                userName: a,
                episodeDescription: e.extra.media_subtitle
            })
            .replaceAll('*', '');
    },
    I = (e, t) =>
        f.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
            username: t.username,
            activity: e.extra.media_title
        });
t.Z = (e) => {
    let { channel: t, entry: n, onReaction: c, onVoiceChannelPreview: C } = e,
        N = (0, i.e7)([o.default], () => o.default.getUser(n.author_id)),
        { largeImage: P } = (0, h.rv)({ entry: n }),
        { primaryColor: Z, secondaryColor: S } = (0, E.Z)(null == P ? void 0 : P.src),
        M = (0, i.e7)([s.default], () => s.default.locale),
        y = (0, m.ap)(n.extra.media_assets_large_text),
        A = a.useCallback(
            (e) => {
                if (null != N && (null == P ? void 0 : P.src) != null)
                    return (0, x.B)({
                        entry: n,
                        mediaImageSrc: null == P ? void 0 : P.src,
                        avatarSrc: N.getAvatarURL(null == t ? void 0 : t.guild_id, 128),
                        description: g(n, t, N),
                        timestamp: (0, m.yh)(n, M),
                        episodeDescription: y,
                        colors: [Z, S],
                        channelId: e
                    });
            },
            [t, n, y, M, null == P ? void 0 : P.src, Z, S, N]
        ),
        O = () => {
            if (null == n.extra.url) return;
            let e = d.Z.safeParseWithQuery(n.extra.url);
            if (null != e && null != e.protocol && null != e.hostname)
                (0, u.q)({
                    href: d.Z.format(e),
                    trusted: !1
                });
        };
    return null == N
        ? null
        : (0, l.jsxs)(v.yR, {
              children: [
                  (0, l.jsx)(v.wG, {
                      channel: t,
                      entry: n,
                      userDescription: (0, m.kr)(n) ? f.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING_V2 : f.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED_V2,
                      title: n.extra.media_title,
                      subtitle: n.extra.media_subtitle,
                      headerIcons: (0, l.jsx)(T.Z, {
                          Icon: r.CrunchyrollNeutralIcon,
                          'aria-label': f.Z.Messages.CRUNCHYROLL
                      }),
                      badges: (0, l.jsx)(p.Gk, {
                          location: p.Gt.POPOUT,
                          children: _.t.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
                      }),
                      onClickTitle: O,
                      onClickThumbnail: O
                  }),
                  (0, l.jsx)(v.St, {
                      children: (0, l.jsx)(v.WT, {
                          onReaction: c,
                          onVoiceChannelPreview: C,
                          user: N,
                          channel: t,
                          generateReactionImage: A,
                          reactionImageAltText: I(n, N),
                          entry: n
                      })
                  })
              ]
          });
};
