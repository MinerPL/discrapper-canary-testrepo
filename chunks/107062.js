n(627494), n(757143);
var l = n(735250),
    a = n(470079),
    i = n(442837),
    r = n(481060),
    s = n(620662),
    o = n(841784),
    u = n(429589),
    c = n(499254),
    d = n(827498),
    h = n(812236),
    m = n(541716),
    x = n(706454),
    E = n(823379),
    _ = n(5192),
    p = n(379357),
    v = n(192918),
    T = n(561308),
    f = n(907152),
    g = n(206295),
    I = n(297781),
    C = n(591853),
    N = n(797342),
    P = n(981631),
    Z = n(689938);
let S = (e, t) =>
        Z.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: t.username,
            activity: e.extra.activity_name
        }),
    M = (e, t, n) => {
        let l = Z.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME,
            a = _.ZP.getName(t.guild_id, t.id, n),
            i = e.extra.activity_name;
        return l
            .plainFormat({
                gameName: i,
                userName: a
            })
            .replaceAll('*', '');
    },
    y = (e) => {
        let { entry: t, channel: n, users: l, countOthers: a } = e;
        return Z.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED.plainFormat({
            gameName: t.extra.activity_name,
            user1: _.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, l[0]),
            user2: _.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, l[1]),
            countOthers: a
        }).replaceAll('*', '');
    },
    A = (e) => {
        let { channel: t, entry: n, onReaction: c, onVoiceChannelPreview: d, appLoading: h, handleViewActivityClick: m } = e,
            { largeImage: _ } = (0, p.rv)({ entry: n }),
            { user: A, details: O, activity: R, embeddedActivity: j } = (0, N.n)(n),
            { primaryColor: w, secondaryColor: L } = (0, g.Z)(null == _ ? void 0 : _.src),
            b = (0, i.e7)([x.default], () => x.default.locale),
            { displayParticipants: U, participant1: D, participant2: B, numOtherParticipants: k } = (0, v.Z)(n, 3),
            F = a.useCallback(
                (e) => {
                    if ((null == _ ? void 0 : _.src) == null || null == t || null == A) return;
                    let l =
                        k > 0
                            ? y({
                                  entry: n,
                                  channel: t,
                                  users: [D, B],
                                  countOthers: k
                              })
                            : M(n, t, A);
                    return (0, f.C4)({
                        entry: n,
                        applicationImageSrc: null == _ ? void 0 : _.src,
                        avatarSrcs: U.map((e) => e.getAvatarURL(t.guild_id, 128)),
                        description: l,
                        timestamp: (0, T.yh)(n, b),
                        colors: [w, L],
                        channelId: e
                    });
                },
                [null == _ ? void 0 : _.src, t, U, n, b, k, D, B, w, L, A]
            );
        if (null == A) return null;
        let G = (0, l.jsx)(I.PZ, {
                location: I.Gt.POPOUT,
                entry: n
            }),
            H = (0, l.jsx)(C.wG, {
                channel: t,
                userDescription: (0, T.kr)(n) ? Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
                title: n.extra.activity_name,
                subtitle: O,
                badges: G,
                entry: n,
                onClickTitle: m,
                onClickSubtitle: m,
                onClickThumbnail: m
            }),
            V = (0, s.Z)(R, P.xjy.JOIN) || (0, o.Z)(R),
            Y = V
                ? (0, l.jsx)(u.Z, {
                      isEmbedded: (0, o.Z)(R),
                      embeddedActivity: j,
                      activity: R,
                      user: A,
                      ButtonComponent: (e) =>
                          (0, l.jsx)(C.Ll, {
                              IconComponent: r.DoorEnterIcon,
                              ...e
                          })
                  })
                : null,
            z = (0, l.jsx)(C.Ll, {
                onClick: m,
                IconComponent: r.AppsIcon,
                disabled: h,
                children: h ? Z.Z.Messages.DEFAULT_INPUT_PLACEHOLDER : Z.Z.Messages.CONTENT_INVENTORY_VIEW_ACTIVITY
            }),
            W = [V ? Y : z].filter(E.lm);
        return (0, l.jsxs)(C.yR, {
            children: [
                H,
                (0, l.jsx)(C.St, {
                    children: (0, l.jsx)(C.WT, {
                        onReaction: c,
                        onVoiceChannelPreview: d,
                        user: A,
                        channel: t,
                        generateReactionImage: F,
                        reactionImageAltText: S(n, A),
                        entry: n,
                        buttons: W
                    })
                })
            ]
        });
    },
    O = (e) => (0, l.jsx)(A, { ...e }),
    R = (e) => {
        let { channel: t, entry: n } = e;
        a.useEffect(() => {
            (0, h.ZP)(t.id, n.extra.application_id);
        }, [n.extra.application_id, t]);
        let { loading: i } = (0, h.SY)(t, n.extra.application_id);
        return (0, l.jsx)(A, {
            ...e,
            appLoading: i,
            handleViewActivityClick: () => {
                if (!i) c._(d._b.TEXT, m.I.NORMAL, { applicationId: n.extra.application_id });
            }
        });
    };
t.ZP = function (e) {
    let { channel: t, ...n } = e;
    return null == t
        ? (0, l.jsx)(O, { ...n })
        : (0, l.jsx)(R, {
              channel: t,
              ...n
          });
};
