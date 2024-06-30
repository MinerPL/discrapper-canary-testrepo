n.d(t, {
    Z: function () {
        return j;
    }
}), n(627494), n(757143), n(653041);
var i = n(735250), a = n(470079), l = n(423875), s = n(442837), r = n(902704), o = n(481060), c = n(952164), u = n(768419), d = n(456190), h = n(239470), p = n(894344), m = n(314897), _ = n(936195), f = n(5192), E = n(561308), C = n(256726), g = n(206295), I = n(551228), x = n(591853), T = n(371991), N = n(410441), v = n(981631), S = n(616922), Z = n(689938), A = n(861666), M = n(208899);
let b = (e, t, n) => {
    let {
            artist: i,
            media: a
        } = e, l = Z.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST, s = f.ZP.getName(t.guild_id, t.id, n);
    return l.plainFormat({
        artist: i,
        userName: s,
        media: a
    }).replaceAll('*', '');
};
function R(e) {
    let {activity: t} = e, n = t.timestamps, l = (0, T.tS)(n), {
            durationTimestamp: s,
            seekBarStyles: r
        } = a.useMemo(() => {
            var e;
            let {
                start: n,
                end: i
            } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
            if (null == n || null == i)
                return {};
            let a = Math.min(i, l), s = i - n, r = Math.floor((a - n) / s * 100);
            return {
                seekBarStyles: { width: ''.concat(r, '%') },
                durationTimestamp: (0, E.T_)({ start: i }, n)
            };
        }, [
            t,
            l
        ]);
    return null == r ? null : (0, i.jsxs)('div', {
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
                variant: 'text-xs/normal',
                tabularNumbers: !0,
                color: void 0,
                children: s
            })
        ]
    });
}
function j(e) {
    var t, n, T;
    let A, j, L, P, {
            channel: O,
            entry: y,
            requestId: D,
            closePopout: k
        } = e, {
            activity: U,
            currentEntry: w,
            artist: B,
            imageUrl: H,
            title: G,
            user: V
        } = (0, I.pi)(y), {
            primaryColor: F,
            secondaryColor: W
        } = (0, g.Z)(H), z = (0, s.e7)([
            u.Z,
            m.default
        ], () => (null == U ? void 0 : U.type) === v.IIU.LISTENING && null != V ? (0, h.Z)(u.Z, m.default, V, U) : void 0, [
            U,
            V
        ], r.Z), Y = a.useCallback(() => {
            var e;
            if (null == O || null == V)
                return;
            let t = null === (e = U.timestamps) || void 0 === e ? void 0 : e.start, n = (0, E.T_)(null != t ? { start: t } : y, Date.now());
            return (0, C.CR)({
                user: V,
                channel: O,
                mediaImageSrc: H,
                artist: B,
                description: b({
                    artist: B,
                    media: G
                }, O, V),
                colors: [
                    F,
                    W
                ],
                badges: (0, C.jE)({ timestamp: n })
            });
        }, [
            U,
            B,
            O,
            y,
            H,
            F,
            W,
            G,
            V
        ]);
    if (null == U || null == w)
        return null;
    let K = B, q = [];
    if (w.media.provider === l.p.SPOTIFY && (null == z ? void 0 : z.syncDisabled) === !1) {
        A = () => {
            (0, p.Z)(z, S.kG.USER_ACTIVITY_SYNC), k();
        }, q.push((0, i.jsx)(x.Ll, {
            onClick: A,
            IconComponent: o.UserPlayIcon,
            children: Z.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG
        }, 'listen-along'));
        K = (0, i.jsx)(_.Z, {
            artists: B,
            canOpen: null != U.sync_id,
            linkClassName: M.popoutTextSecondary,
            onOpenSpotifyArtist: e => {
                (0, c.d$)(U, V.id, e);
            }
        }), j = () => {
            (0, c.aG)(U);
        }, P = (0, d.Z)(z, S.kG.USER_ACTIVITY_SYNC, null != O ? f.ZP.getNickname(O.guild_id, O.id, V) : void 0), L = () => {
            (0, c.Z5)(U, V.id);
        };
    }
    let X = (0, i.jsx)(x.wG, {
        thumbnailSrc: H,
        onClickThumbnail: L,
        channel: O,
        entry: y,
        headerIcons: (0, i.jsx)(N.Z, {
            onClick: A,
            'aria-label': P,
            provider: w.media.provider
        }),
        userDescription: (0, E.kr)(y) ? Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING : Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
        title: G,
        onClickTitle: j,
        subtitle: K,
        badges: null,
        children: (null === (t = U.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, i.jsx)(R, { activity: U })
    });
    return (0, i.jsxs)(x.yR, {
        children: [
            X,
            (0, i.jsx)(x.St, {
                children: (0, i.jsx)(x.WT, {
                    closePopout: k,
                    user: V,
                    channel: O,
                    generateReactionImage: Y,
                    reactionImageAltText: (n = B, T = V, Z.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
                        username: T.username,
                        activity: n
                    })),
                    entry: y,
                    requestId: D,
                    buttons: q
                })
            })
        ]
    });
}
