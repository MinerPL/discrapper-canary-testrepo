var i = n(735250), a = n(470079), l = n(758713), s = n(442837), r = n(481060), o = n(620662), c = n(841784), u = n(420660), d = n(429589), h = n(757182), p = n(706454), m = n(374129), _ = n(639351), f = n(823379), E = n(192918), C = n(22211), g = n(561308), I = n(919394), x = n(438226), T = n(206295), N = n(91140), v = n(297781), S = n(591853), Z = n(265048), A = n(981631), M = n(689938);
let b = {
    [l.z.DESKTOP]: null,
    [l.z.LINUX]: null,
    [l.z.MACOS]: null,
    [l.z.NINTENDO]: null,
    [l.z.IOS]: null,
    [l.z.ANDROID]: null,
    [l.z.XBOX]: _.Z,
    [l.z.PLAYSTATION]: m.Z
};
t.Z = e => {
    let {
            channel: t,
            entry: n,
            requestId: l,
            closePopout: m
        } = e, {
            iconUrl: _,
            iconTitle: R,
            user: j,
            details: L,
            gameTitle: P,
            activity: O
        } = (0, Z.F)(n), {
            primaryColor: y,
            secondaryColor: D
        } = (0, T.Z)(_), k = (0, s.e7)([p.default], () => p.default.locale), {
            streamPreviewUrl: U,
            stream: w
        } = (0, C.Z)(n), {
            displayParticipants: B,
            participant1: H,
            participant2: G,
            numOtherParticipants: V
        } = (0, E.Z)(n, 3), F = (0, r.useToken)(r.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), W = a.useCallback(e => {
            if (null == _ || null == t || null == j)
                return;
            let i = V > 0 ? (0, x.VY)({
                entry: n,
                channel: t,
                users: [
                    H,
                    G
                ],
                countOthers: V
            }) : (0, x.HV)(n, t, j);
            return (0, I.SO)({
                entry: n,
                applicationImageSrc: _,
                avatarSrcs: B.map(e => e.getAvatarURL(t.guild_id, 128)),
                description: i,
                timestamp: (0, g.yh)(n, k),
                colors: [
                    y,
                    D
                ],
                channelId: e
            });
        }, [
            _,
            t,
            B,
            n,
            k,
            V,
            H,
            G,
            y,
            D,
            j
        ]);
    if (null == j)
        return null;
    let z = null != n.extra.platform ? b[n.extra.platform] : null, Y = (0, i.jsx)(v.Gk, {
            location: v.Gt.POPOUT,
            children: N.W.map((e, t) => (0, i.jsx)(e, { entry: n }, t))
        }), K = null == U ? (0, i.jsx)(S.wG, {
            thumbnailSrc: _,
            thumbnailTitle: R,
            channel: t,
            headerIcons: null != z ? (0, i.jsx)(z, {
                color: F.hex(),
                width: 16,
                height: 16
            }) : null,
            userDescription: (0, g.kr)(n) ? M.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : M.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
            title: P,
            subtitle: L,
            badges: Y,
            entry: n
        }) : (0, i.jsx)(S.jL, {
            channel: t,
            streamPreviewSrc: U,
            title: n.extra.game_name,
            badges: Y,
            userDescription: M.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_STREAMING,
            entry: n,
            stream: w
        }), q = (0, o.Z)(O, A.xjy.JOIN) || (0, c.Z)(O) ? (0, i.jsx)(d.Z, {
            activity: O,
            user: j,
            ButtonComponent: e => (0, i.jsx)(S.Ll, {
                IconComponent: r.GameControllerIcon,
                ...e
            })
        }) : null, X = [
            q,
            (0, u.Z)(O) ? (0, i.jsx)(h.Z, {
                activity: O,
                ButtonComponent: e => (0, i.jsx)(S.Ll, {
                    IconComponent: r.EyeIcon,
                    ...e
                })
            }) : null
        ].filter(f.lm);
    return (0, i.jsxs)(S.yR, {
        children: [
            K,
            (0, i.jsx)(S.St, {
                children: (0, i.jsx)(S.WT, {
                    closePopout: m,
                    user: j,
                    channel: t,
                    generateReactionImage: W,
                    reactionImageAltText: (0, x.IS)(n, j),
                    entry: n,
                    requestId: l,
                    buttons: X
                })
            })
        ]
    });
};
