n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(627494),
    n(757143),
    n(653041);
var i = n(735250),
    a = n(470079),
    s = n(423875),
    l = n(442837),
    r = n(902704),
    o = n(481060),
    c = n(952164),
    u = n(768419),
    d = n(424678),
    h = n(239470),
    m = n(894344),
    p = n(314897),
    _ = n(908841),
    f = n(5192),
    E = n(561308),
    g = n(256726),
    C = n(206295),
    I = n(551228),
    x = n(591853),
    T = n(371991),
    N = n(410441),
    v = n(981631),
    S = n(616922),
    Z = n(689938),
    A = n(346292),
    M = n(164384);
let b = (e, t, n) => {
    let { artist: i, media: a } = e,
        s = Z.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST,
        l = f.ZP.getName(t.guild_id, t.id, n);
    return s
        .plainFormat({
            artist: i,
            userName: l,
            media: a
        })
        .replaceAll('*', '');
};
function R(e) {
    let { activity: t } = e,
        n = t.timestamps,
        s = (0, T.tS)(n),
        { durationTimestamp: l, seekBarStyles: r } = a.useMemo(() => {
            var e;
            let { start: n, end: i } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
            if (null == n || null == i) return {};
            let a = Math.min(i, s),
                l = i - n,
                r = Math.floor((Math.max(a - n, 0) / l) * 100);
            return {
                seekBarStyles: { width: ''.concat(r, '%') },
                durationTimestamp: (0, E.T_)({ start: 0 }, l)
            };
        }, [t, s]);
    return null == r
        ? null
        : (0, i.jsxs)('div', {
              className: A.listeningTimeline,
              children: [
                  (0, i.jsx)(T.x3, { entry: n }),
                  (0, i.jsx)('div', {
                      className: A.seekBarContainer,
                      children: (0, i.jsx)('div', {
                          className: A.seekBarFill,
                          style: r
                      })
                  }),
                  (0, i.jsx)(o.Text, {
                      className: A.timestamp,
                      variant: 'text-xs/normal',
                      tabularNumbers: !0,
                      color: void 0,
                      children: l
                  })
              ]
          });
}
function j(e) {
    var t, n, f;
    let T,
        A,
        j,
        { channel: L, entry: P, requestId: O, closePopout: y } = e,
        { activity: D, currentEntry: k, artist: U, imageUrl: w, title: B, user: H } = (0, I.pi)(P),
        { primaryColor: G, secondaryColor: V } = (0, C.Z)(w),
        F = (0, l.e7)([u.Z, p.default], () => ((null == D ? void 0 : D.type) === v.IIU.LISTENING && null != H ? (0, h.Z)(u.Z, p.default, H, D) : void 0), [D, H], r.Z),
        W = a.useCallback(() => {
            var e;
            if (null == L || null == H) return;
            let t = null === (e = D.timestamps) || void 0 === e ? void 0 : e.start,
                n = (0, E.T_)(null != t ? { start: t } : P, Date.now());
            return (0, g.CR)({
                user: H,
                channel: L,
                mediaImageSrc: w,
                artist: U,
                description: b(
                    {
                        artist: U,
                        media: B
                    },
                    L,
                    H
                ),
                colors: [G, V],
                badges: (0, g.jE)({ timestamp: n })
            });
        }, [D, U, L, P, w, G, V, B, H]);
    if (null == D || null == k) return null;
    let z = U,
        Y = [];
    if (k.media.provider === s.p.SPOTIFY) {
        (A = () => {
            (0, c.aG)(D);
        }),
            (j = () => {
                (0, c.Z5)(D, H.id);
            }),
            (T = () => {
                (0, c.aG)(D);
            });
        (z = (0, i.jsx)(d.Z, {
            artists: U,
            canOpen: null != D.sync_id,
            linkClassName: M.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
                (0, c.d$)(D, H.id, e);
            }
        })),
            (null == F ? void 0 : F.syncDisabled) === !1 &&
                Y.push(
                    (0, i.jsx)(
                        x.Ll,
                        {
                            onClick: () => {
                                (0, m.Z)(F, S.kG.USER_ACTIVITY_SYNC), y();
                            },
                            IconComponent: o.UserPlayIcon,
                            children: Z.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG
                        },
                        'listen-along'
                    )
                );
    }
    let K = (0, i.jsx)(x.wG, {
        thumbnailSrc: w,
        onClickThumbnail: j,
        channel: L,
        entry: P,
        headerIcons:
            k.media.provider === s.p.SPOTIFY
                ? (0, i.jsx)(N.Z, {
                      onClick: T,
                      'aria-label': Z.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
                      Icon: _.Z
                  })
                : null,
        userDescription: (0, E.kr)(P) ? Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING : Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
        title: B,
        onClickTitle: A,
        subtitle: z,
        badges: null,
        children: (null === (t = D.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, i.jsx)(R, { activity: D })
    });
    return (0, i.jsxs)(x.yR, {
        children: [
            K,
            (0, i.jsx)(x.St, {
                children: (0, i.jsx)(x.WT, {
                    closePopout: y,
                    user: H,
                    channel: L,
                    generateReactionImage: W,
                    reactionImageAltText:
                        ((n = U),
                        (f = H),
                        Z.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
                            username: f.username,
                            activity: n
                        })),
                    entry: P,
                    requestId: O,
                    buttons: Y
                })
            })
        ]
    });
}
