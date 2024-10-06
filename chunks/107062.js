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
    h = n(541716),
    m = n(706454),
    x = n(823379),
    E = n(5192),
    v = n(379357),
    _ = n(192918),
    C = n(561308),
    p = n(907152),
    f = n(206295),
    T = n(297781),
    g = n(591853),
    I = n(797342),
    N = n(981631),
    Z = n(689938);
let P = (e, t) =>
        Z.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: t.username,
            activity: e.extra.activity_name
        }),
    M = (e, t, n) => {
        let l = Z.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME,
            a = E.ZP.getName(t.guild_id, t.id, n),
            i = e.extra.activity_name;
        return l
            .plainFormat({
                gameName: i,
                userName: a
            })
            .replaceAll('*', '');
    },
    L = (e) => {
        let { entry: t, channel: n, users: l, countOthers: a } = e;
        return Z.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED.plainFormat({
            gameName: t.extra.activity_name,
            user1: E.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, l[0]),
            user2: E.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, l[1]),
            countOthers: a
        }).replaceAll('*', '');
    };
t.ZP = (e) => {
    let { channel: t, entry: n, onReaction: E, onVoiceChannelPreview: S } = e,
        { largeImage: A } = (0, v.rv)({ entry: n }),
        { user: R, details: y, activity: O, embeddedActivity: j } = (0, I.n)(n),
        { primaryColor: w, secondaryColor: b } = (0, f.Z)(null == A ? void 0 : A.src),
        D = (0, i.e7)([m.default], () => m.default.locale),
        { displayParticipants: U, participant1: H, participant2: B, numOtherParticipants: k } = (0, _.Z)(n, 3),
        V = () => {
            c.__(d._b.TEXT, h.I.NORMAL, { applicationId: n.extra.application_id });
        },
        G = a.useCallback(
            (e) => {
                if ((null == A ? void 0 : A.src) == null || null == t || null == R) return;
                let l =
                    k > 0
                        ? L({
                              entry: n,
                              channel: t,
                              users: [H, B],
                              countOthers: k
                          })
                        : M(n, t, R);
                return (0, p.C4)({
                    entry: n,
                    applicationImageSrc: null == A ? void 0 : A.src,
                    avatarSrcs: U.map((e) => e.getAvatarURL(t.guild_id, 128)),
                    description: l,
                    timestamp: (0, C.yh)(n, D),
                    colors: [w, b],
                    channelId: e
                });
            },
            [null == A ? void 0 : A.src, t, U, n, D, k, H, B, w, b, R]
        );
    if (null == R) return null;
    let F = (0, l.jsx)(T.PZ, {
            location: T.Gt.POPOUT,
            entry: n
        }),
        Y = (0, l.jsx)(g.wG, {
            channel: t,
            userDescription: (0, C.kr)(n) ? Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
            title: n.extra.activity_name,
            subtitle: y,
            badges: F,
            entry: n,
            onClickTitle: V,
            onClickSubtitle: V,
            onClickThumbnail: V
        }),
        z = (0, s.Z)(O, N.xjy.JOIN) || (0, o.Z)(O),
        W = z
            ? (0, l.jsx)(u.Z, {
                  isEmbedded: (0, o.Z)(O),
                  embeddedActivity: j,
                  activity: O,
                  user: R,
                  ButtonComponent: (e) =>
                      (0, l.jsx)(g.Ll, {
                          IconComponent: r.DoorEnterIcon,
                          ...e
                      })
              })
            : null,
        q = (0, l.jsx)(g.Ll, {
            onClick: V,
            IconComponent: r.AppsIcon,
            children: Z.Z.Messages.CONTENT_INVENTORY_VIEW_ACTIVITY
        }),
        J = [z ? W : q].filter(x.lm);
    return (0, l.jsxs)(g.yR, {
        children: [
            Y,
            (0, l.jsx)(g.St, {
                children: (0, l.jsx)(g.WT, {
                    onReaction: E,
                    onVoiceChannelPreview: S,
                    user: R,
                    channel: t,
                    generateReactionImage: G,
                    reactionImageAltText: P(n, R),
                    entry: n,
                    buttons: J
                })
            })
        ]
    });
};
