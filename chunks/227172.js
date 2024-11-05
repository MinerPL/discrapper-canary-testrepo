n.d(t, {
    v: function () {
        return A;
    }
});
var l = n(200651),
    a = n(192379),
    i = n(758713),
    r = n(442837),
    o = n(481060),
    s = n(620662),
    c = n(841784),
    u = n(420660),
    d = n(429589),
    m = n(757182),
    x = n(706454),
    h = n(374129),
    p = n(639351),
    C = n(823379),
    v = n(379357),
    g = n(192918),
    f = n(22211),
    I = n(561308),
    j = n(919394),
    Z = n(438226),
    P = n(206295),
    L = n(91140),
    T = n(297781),
    y = n(591853),
    N = n(410441),
    _ = n(797342),
    E = n(981631),
    S = n(388032);
let A = {
    [i.z.DESKTOP]: null,
    [i.z.LINUX]: null,
    [i.z.MACOS]: null,
    [i.z.NINTENDO]: null,
    [i.z.IOS]: null,
    [i.z.ANDROID]: null,
    [i.z.XBOX]: p.Z,
    [i.z.PLAYSTATION]: h.Z
};
t.Z = (e) => {
    let { channel: t, entry: n, disableGameProfileLinks: i, onReaction: h, onVoiceChannelPreview: p, onUserPopoutClosed: M, trackRankingItemInteraction: k } = e,
        { largeImage: w } = (0, v.rv)({ entry: n }),
        { user: R, details: b, appName: H, activity: O } = (0, _.n)(n),
        { primaryColor: V, secondaryColor: B } = (0, P.Z)(null == w ? void 0 : w.src),
        U = (0, r.e7)([x.default], () => x.default.locale),
        { streamPreviewUrl: D, stream: G } = (0, f.Z)(n),
        { displayParticipants: z, participant1: q, participant2: W, numOtherParticipants: Y } = (0, g.Z)(n, 3),
        F = a.useCallback(
            (e) => {
                if ((null == w ? void 0 : w.src) == null || null == t || null == R) return;
                let l =
                    Y > 0
                        ? (0, Z.VY)({
                              entry: n,
                              channel: t,
                              users: [q, W],
                              countOthers: Y
                          })
                        : (0, Z.HV)(n, t, R);
                return (0, j.SO)({
                    entry: n,
                    applicationImageSrc: null == w ? void 0 : w.src,
                    avatarSrcs: z.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: l,
                    timestamp: (0, I.yh)(n, U),
                    colors: [V, B],
                    channelId: e
                });
            },
            [null == w ? void 0 : w.src, t, z, n, U, Y, q, W, V, B, R]
        );
    if (null == R) return null;
    let J = null != n.extra.platform ? A[n.extra.platform] : null,
        K = (0, l.jsx)(T.Gk, {
            location: null == D ? T.Gt.POPOUT : T.Gt.STREAMING_POPOUT,
            children: L.W.map((e, t) => (0, l.jsx)(e, { entry: n }, t))
        }),
        X =
            null == D
                ? (0, l.jsx)(y.wG, {
                      channel: t,
                      headerIcons:
                          null == J
                              ? null
                              : (0, l.jsx)(N.Z, {
                                    Icon: J,
                                    'aria-label': S.intl.string(S.t.YR4cHB)
                                }),
                      userDescription: (0, I.kr)(n) ? S.t.vPg1JS : S.t.rPqqtr,
                      title: H,
                      subtitle: b,
                      badges: K,
                      entry: n,
                      disableGameProfileLinks: i,
                      onUserPopoutClosed: M,
                      trackRankingItemInteraction: k
                  })
                : (0, l.jsx)(y.jL, {
                      channel: t,
                      streamPreviewSrc: D,
                      title: n.extra.game_name,
                      subtitle: b,
                      badges: K,
                      userDescription: S.t['6oWFUF'],
                      entry: n,
                      stream: G,
                      onUserPopoutClosed: M,
                      trackRankingItemInteraction: k
                  }),
        $ =
            (0, s.Z)(O, E.xjy.JOIN) || (0, c.Z)(O)
                ? (0, l.jsx)(d.Z, {
                      activity: O,
                      user: R,
                      ButtonComponent: (e) =>
                          (0, l.jsx)(y.Ll, {
                              IconComponent: o.GameControllerIcon,
                              ...e
                          })
                  })
                : null,
        Q = [
            $,
            (0, u.Z)(O)
                ? (0, l.jsx)(m.Z, {
                      activity: O,
                      ButtonComponent: (e) =>
                          (0, l.jsx)(y.Ll, {
                              IconComponent: o.EyeIcon,
                              ...e
                          })
                  })
                : null
        ].filter(C.lm);
    return (0, l.jsxs)(y.yR, {
        children: [
            X,
            (0, l.jsx)(y.St, {
                children: (0, l.jsx)(y.WT, {
                    onReaction: h,
                    onVoiceChannelPreview: p,
                    user: R,
                    channel: t,
                    generateReactionImage: F,
                    reactionImageAltText: (0, Z.IS)(n, R),
                    entry: n,
                    buttons: Q
                })
            })
        ]
    });
};
