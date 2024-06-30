t.r(n);
var l = t(735250);
t(470079);
var i = t(481060), a = t(239091), r = t(883385), u = t(108843), s = t(911969), d = t(947440), o = t(100527), c = t(299206), Z = t(976192), E = t(819403), M = t(777658), f = t(858488), _ = t(185457), g = t(570870), I = t(389052), m = t(24311), R = t(710631), N = t(297047), C = t(88966), T = t(712301), A = t(520063), v = t(725119), O = t(931617), x = t(332031), h = t(981631), S = t(689938);
n.default = (0, u.Z)((0, r.Z)(function (e) {
    let {
            user: n,
            guildId: t,
            channel: r,
            context: u,
            onSelect: o,
            onHeightUpdate: b
        } = e, P = (0, v.Z)(n.id, t), p = (0, N.Z)(n, t, u), U = (0, C.Z)(n.id, u), j = (0, x.Z)(n.id), L = (0, m.Z)({
            user: n,
            context: u
        }), D = (0, _.Z)({
            user: n,
            guildId: t,
            context: u
        }), G = (0, f.Z)({ user: n }), F = (0, Z.Z)({
            guildId: t,
            userId: n.id,
            analyticsLocation: {
                page: h.ZY5.GUILD_CHANNEL,
                section: h.jXE.CHAT_USERNAME,
                object: h.qAy.CONTEXT_MENU_ITEM
            },
            context: u
        }), y = (0, R.Z)({
            user: n,
            guildId: t
        }), V = (0, d.Z)(null, n), k = (0, M.Z)(n), q = (0, I.Z)({ user: n }), K = (0, A.Z)(n, t, r.id), B = (0, O.Z)(n.id, t), H = (0, T.Z)(n, t), w = (0, c.Z)({
            id: n.id,
            label: S.Z.Messages.COPY_ID_USER
        }), Y = (0, E.Z)(n), W = (0, g.Z)({
            commandType: s.yU.USER,
            commandTargetId: n.id,
            channel: r,
            guildId: t,
            onHeightUpdate: b
        }), z = n.isNonUserBot();
    return (0, l.jsxs)(i.Menu, {
        navId: 'user-context',
        onClose: a.Zy,
        'aria-label': S.Z.Messages.USER_ACTIONS_MENU_LABEL,
        onSelect: o,
        children: [
            !z && (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i.MenuGroup, { children: Y }),
                    (0, l.jsxs)(i.MenuGroup, {
                        children: [
                            P,
                            p,
                            U,
                            L,
                            D,
                            G,
                            j
                        ]
                    }),
                    (0, l.jsx)(i.MenuGroup, { children: V }),
                    (0, l.jsxs)(i.MenuGroup, {
                        children: [
                            F,
                            W,
                            y,
                            k,
                            q
                        ]
                    }),
                    (0, l.jsx)(i.MenuGroup, { children: K }),
                    (0, l.jsxs)(i.MenuGroup, {
                        children: [
                            B,
                            H
                        ]
                    })
                ]
            }),
            (0, l.jsx)(i.MenuGroup, { children: w })
        ]
    });
}, { object: h.qAy.CONTEXT_MENU }), [
    o.Z.CONTEXT_MENU,
    o.Z.THREAD_USER_MENU
]);
