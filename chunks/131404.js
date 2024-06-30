t.r(n);
var i = t(735250);
t(470079);
var a = t(481060), r = t(239091), l = t(883385), u = t(108843), s = t(911969), o = t(947440), d = t(100527), c = t(441061), _ = t(167675), M = t(737013), I = t(145474), f = t(702321), E = t(461535), N = t(776568), T = t(299206), Z = t(895563), A = t(212205), C = t(62420), S = t(455395), g = t(581052), h = t(875252), m = t(122074), x = t(819403), O = t(777658), R = t(858488), U = t(185457), p = t(570870), v = t(389052), j = t(24311), P = t(794973), G = t(332576), y = t(710631), b = t(558924), L = t(991307), F = t(725119), D = t(700994), V = t(332031), k = t(981631), Y = t(689938);
n.default = (0, u.Z)((0, l.Z)(function (e) {
    let {
            user: n,
            channel: t,
            channelSelected: l = !1,
            showMute: u = !0,
            showMediaItems: d = !1,
            showChannelCallItems: w = !1,
            showModalItems: z = !0,
            targetIsUser: K = !1,
            context: B,
            onSelect: W,
            onHeightUpdate: H
        } = e, X = (0, F.Z)(n.id, null), q = (0, j.Z)({
            user: n,
            context: B
        }), Q = (0, U.Z)({
            user: n,
            context: B
        }), J = (0, R.Z)({ user: n }), $ = (0, V.Z)(n.id), ee = (0, P.Z)(t.id, l), en = (0, y.Z)({ user: n }), et = (0, o.Z)(null, n), ei = (0, D.Z)(n.id), ea = (0, b.Z)(n.id, t.id), er = (0, O.Z)(n), el = (0, L.Z)(n.id), eu = (0, I.P)({
            userId: n.id,
            channelId: t.id,
            location: 'DMUserContextMenu'
        }), es = (0, G.Z)(n.id, t.id), eo = (0, v.Z)({ user: n }), ed = (0, N.ZP)(t), ec = (0, m.Uf)(k.aIL, t.id, 'trailing'), e_ = (0, T.Z)({
            id: n.id,
            label: Y.Z.Messages.COPY_ID_USER
        }), eM = (0, T.Z)({
            id: t.id,
            label: Y.Z.Messages.COPY_ID_CHANNEL
        }), eI = (0, E.Z)(t), ef = (0, _.Z)(n.id), eE = (0, c.Z)(t.id), eN = (0, x.Z)(n), eT = (0, M.Z)(n.id), eZ = (0, p.Z)({
            commandType: s.yU.USER,
            commandTargetId: n.id,
            channel: t,
            guildId: void 0,
            onHeightUpdate: H
        }), eA = (0, Z.l)(t), eC = (0, Z.P)(t), eS = (0, A.Z)(t), eg = (0, C.Z)(t), eh = (0, g.V)(t), em = (0, S.i)(t), ex = (0, h.H)(t), eO = t.isManaged(), eR = n.isNonUserBot();
    return (0, i.jsxs)(a.Menu, {
        navId: 'user-context',
        onClose: r.Zy,
        'aria-label': Y.Z.Messages.USER_ACTIONS_MENU_LABEL,
        onSelect: W,
        children: [
            (0, i.jsx)(a.MenuGroup, { children: !(eR && !(0, f.Z)(t.id)) && eI }),
            (0, i.jsx)(a.MenuGroup, { children: eh }),
            (0, i.jsx)(a.MenuGroup, { children: ex }),
            (0, i.jsx)(a.MenuGroup, { children: em }),
            (0, i.jsxs)(a.MenuGroup, {
                children: [
                    eA,
                    eS,
                    eg
                ]
            }),
            (0, i.jsx)(a.MenuGroup, { children: !eR && eN }),
            (0, i.jsxs)(a.MenuGroup, {
                children: [
                    !eR && (0, i.jsxs)(i.Fragment, {
                        children: [
                            z && X,
                            q,
                            !eO && ea,
                            z && Q,
                            z && J,
                            $
                        ]
                    }),
                    (0, f.Z)(t.id) && X,
                    ee
                ]
            }),
            !eR && (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a.MenuGroup, { children: d && ei }),
                    (0, i.jsx)(a.MenuGroup, { children: z && et }),
                    (0, i.jsxs)(a.MenuGroup, {
                        children: [
                            d && el,
                            z && eu,
                            d && es,
                            eZ,
                            z && en,
                            er,
                            z && eo,
                            d && eT
                        ]
                    }),
                    (0, i.jsxs)(a.MenuGroup, {
                        children: [
                            u && ed,
                            ec
                        ]
                    }),
                    w && (0, i.jsxs)(a.MenuGroup, {
                        children: [
                            eE,
                            ef
                        ]
                    })
                ]
            }),
            (0, f.Z)(t.id) && (0, i.jsxs)(a.MenuGroup, {
                children: [
                    u && ed,
                    ec
                ]
            }),
            (0, i.jsx)(a.MenuGroup, { children: eC }),
            (0, i.jsxs)(a.MenuGroup, {
                children: [
                    e_,
                    !K && eM
                ]
            })
        ]
    });
}, { object: k.qAy.CONTEXT_MENU }), [
    d.Z.CONTEXT_MENU,
    d.Z.DM_USER_MENU
]);
