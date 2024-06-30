a(47120);
var n = a(735250), t = a(470079), s = a(120356), i = a.n(s), r = a(512722), o = a.n(r), c = a(442837), d = a(481060), u = a(493683), m = a(220779), h = a(142550), x = a(201133), g = a(693824), I = a(919394), E = a(91140), v = a(297781), p = a(359110), _ = a(592125), M = a(944486), A = a(594174), N = a(5192), f = a(810568), j = a(689938), O = a(777450), T = a(997844);
let L = e => {
    let {
            entry: l,
            setGeneratedImage: a,
            nickName: s
        } = e, [r, c] = t.useState();
    return t.useEffect(() => {
        (async () => {
            let e = await u.Z.getOrEnsurePrivateChannel(l.author_id), n = _.Z.getChannel(e);
            o()(null != n, 'DM channel cannot be null');
            let t = await (0, I.QC)(l, n, g.kH.Base64), s = await (0, I.QC)(l, n, g.kH.CloudUpload);
            c(t), a(s);
        })();
    }, [
        l,
        a
    ]), (0, n.jsxs)('div', {
        className: O.reactReplyPreviewWrapper,
        children: [
            (0, n.jsx)('div', { className: i()(O.placeholderImage, null != r && O.in) }),
            null != r && (0, n.jsx)('img', {
                className: O.reactReplyPreview,
                src: r,
                alt: j.Z.Messages.GAME_PROFILE_GAME_REACT_REPLY_ALT.format({
                    userName: s,
                    gameName: l.extra.game_name
                })
            })
        ]
    });
};
l.Z = e => {
    let {
            entry: l,
            viewId: a,
            style: s = {},
            onClose: r
        } = e, g = (0, c.e7)([
            M.Z,
            _.Z
        ], () => _.Z.getChannel(M.Z.getChannelId())), I = (0, c.e7)([A.default], () => A.default.getUser(l.author_id)), {
            nick: S,
            avatar: P
        } = t.useMemo(() => {
            let e = N.ZP.getName(null == g ? void 0 : g.guild_id, null == g ? void 0 : g.id, I);
            return {
                nick: e,
                avatar: null == I ? void 0 : I.getAvatarURL(null == g ? void 0 : g.guild_id, 48, !1)
            };
        }, [
            I,
            g
        ]), [R, G] = t.useState();
    return null == I ? null : (0, n.jsxs)('div', {
        className: O.profileEntryCard,
        style: s,
        children: [
            (0, n.jsxs)('div', {
                className: i()(T.row, T.gapSm),
                style: s,
                children: [
                    (0, n.jsx)('img', {
                        className: O.avatar,
                        src: P,
                        alt: j.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({ userName: S })
                    }),
                    (0, n.jsx)('div', {
                        className: i()(O.playerInfo),
                        children: (0, n.jsxs)('div', {
                            className: i()(T.column, T.gapNone),
                            children: [
                                (0, n.jsxs)(d.Text, {
                                    variant: 'text-sm/bold',
                                    color: 'text-normal',
                                    lineClamp: 1,
                                    children: [
                                        S.slice(0, 18),
                                        ' ',
                                        S.length > 18 ? '...' : ''
                                    ]
                                }),
                                (0, n.jsx)(v.Gk, {
                                    location: v.Gt.CARD,
                                    children: E.W.slice(0, 2).map((e, a) => (0, n.jsx)(e, { entry: l }, a))
                                })
                            ]
                        })
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: O.reactions,
                children: (0, n.jsx)(m.ZP, {
                    showReply: !0,
                    showReact: !1,
                    onInteraction: async e => {
                        let {
                            interactionType: n,
                            reply: t
                        } = e;
                        if (n === h.L.ReplyBegin && (0, f.UE)({
                                action: f.as.ClickMessageUser,
                                applicationId: l.extra.application_id,
                                gameName: l.extra.game_name,
                                recipientUserId: l.author_id,
                                viewId: a
                            }), n === h.L.ReplySubmit) {
                            (0, f.UE)({
                                action: f.as.SendMessageUser,
                                applicationId: l.extra.application_id,
                                gameName: l.extra.game_name,
                                recipientUserId: l.author_id,
                                viewId: a
                            });
                            let e = await u.Z.getOrEnsurePrivateChannel(l.author_id), n = _.Z.getChannel(e);
                            o()(null != n, 'GameProfile ReactReply - DM channel cannot be null'), o()(null != R, 'GameProfile ReactReply - Reaction Image cannot be null'), (0, x.B)({
                                file: R,
                                channel: n,
                                altText: '',
                                reply: null != t ? t : ''
                            }), r(), (0, p.Kh)(n.id);
                        }
                    },
                    popoutProps: {
                        popoutBody: (0, n.jsx)(L, {
                            entry: l,
                            setGeneratedImage: G,
                            nickName: S
                        }),
                        replyHeaderText: '',
                        replyPlaceholder: j.Z.Messages.QUICK_DM_USER.format({ name: S })
                    }
                })
            })
        ]
    });
};
