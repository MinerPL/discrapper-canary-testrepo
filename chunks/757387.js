t.r(n);
var i = t(735250);
t(470079);
var r = t(442837), u = t(481060), l = t(239091), a = t(883385), o = t(108843), d = t(911969), s = t(947440), c = t(100527), E = t(441061), _ = t(167675), I = t(737013), T = t(145474), N = t(299206), S = t(976192), A = t(819403), f = t(286694), p = t(592125), O = t(777658), M = t(858488), Z = t(185457), h = t(933409), R = t(570870), C = t(389052), g = t(24311), m = t(332576), G = t(710631), v = t(297047), y = t(88966), D = t(712301), U = t(991307), P = t(725119), b = t(931617), L = t(700994), H = t(332031), x = t(981631), F = t(689938);
n.default = (0, o.Z)((0, a.Z)(function (e) {
    let {
            user: n,
            guildId: t,
            channel: a,
            showMediaItems: o = !1,
            showChatItems: c = !0,
            showChannelCallItems: V = !1,
            showModalItems: k = !0,
            showStageChannelItems: B = !1,
            context: j,
            onSelect: w,
            onHeightUpdate: K,
            viewingChannelId: W
        } = e, Y = {
            page: x.ZY5.GUILD_CHANNEL,
            section: x.jXE.CHAT_USERNAME,
            object: x.qAy.CONTEXT_MENU_ITEM
        }, q = (0, P.Z)(n.id, t, a.id), z = (0, v.Z)(n, t, j), Q = (0, y.Z)(n.id, j), X = (0, H.Z)(n.id), $ = (0, g.Z)({
            user: n,
            context: j
        }), J = (0, Z.Z)({
            user: n,
            guildId: t,
            context: j
        }), ee = (0, M.Z)({ user: n }), en = (0, L.Z)(n.id), et = (0, U.Z)(n.id), ei = (0, T.P)({
            userId: n.id,
            channelId: a.id,
            location: 'GuildChannelUserContextMenu'
        }), er = (0, S.Z)({
            guildId: t,
            userId: n.id,
            analyticsLocation: Y,
            context: j
        }), eu = (0, G.Z)({
            user: n,
            guildId: t
        }), el = (0, s.Z)(null, n), ea = (0, O.Z)(n), eo = (0, C.Z)({ user: n }), ed = (0, h.Z)(n, t, a.id), es = (0, b.Z)(n.id, t), ec = (0, D.Z)(n, t), eE = (0, N.Z)({
            id: n.id,
            label: F.Z.Messages.COPY_ID_USER
        }), e_ = (0, m.Z)(n.id, a.id), eI = (0, _.Z)(n.id), eT = (0, E.Z)(a.id), eN = (0, A.Z)(n), eS = (0, f.Z)(n, t, a.id), eA = (0, r.e7)([p.Z], () => null != W ? p.Z.getChannel(W) : null), ef = (0, R.Z)({
            commandType: d.yU.USER,
            commandTargetId: n.id,
            channel: null != eA ? eA : a,
            guildId: t,
            onHeightUpdate: K,
            context: j
        }), ep = (0, I.Z)(n.id), eO = n.isNonUserBot();
    return (0, i.jsxs)(u.Menu, {
        navId: 'user-context',
        onClose: l.Zy,
        'aria-label': F.Z.Messages.USER_ACTIONS_MENU_LABEL,
        onSelect: w,
        children: [
            !eO && (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)(u.MenuGroup, {
                        children: [
                            eN,
                            B && eS
                        ]
                    }),
                    (0, i.jsxs)(u.MenuGroup, {
                        children: [
                            k && q,
                            c && z,
                            Q,
                            $,
                            k && J,
                            k && ee,
                            X
                        ]
                    }),
                    o && (0, i.jsx)(u.MenuGroup, { children: en }),
                    (0, i.jsx)(u.MenuGroup, { children: k && el }),
                    (0, i.jsxs)(u.MenuGroup, {
                        children: [
                            o && et,
                            o && ei,
                            o && e_,
                            k && er,
                            ef,
                            k && eu,
                            ea,
                            k && eo,
                            V && ep
                        ]
                    }),
                    (0, i.jsx)(u.MenuGroup, { children: ed }),
                    (0, i.jsxs)(u.MenuGroup, {
                        children: [
                            es,
                            ec
                        ]
                    }),
                    V && (0, i.jsxs)(u.MenuGroup, {
                        children: [
                            eT,
                            eI
                        ]
                    })
                ]
            }),
            (0, i.jsx)(u.MenuGroup, { children: eE })
        ]
    });
}, { object: x.qAy.CONTEXT_MENU }), [
    c.Z.CONTEXT_MENU,
    c.Z.GUILD_CHANNEL_USER_MENU
]);
