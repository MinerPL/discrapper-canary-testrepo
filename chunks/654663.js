l.r(n);
var t = l(735250);
l(470079);
var r = l(481060),
    i = l(239091),
    a = l(883385),
    s = l(108843),
    u = l(911969),
    d = l(947440),
    o = l(100527),
    c = l(299206),
    Z = l(976192),
    E = l(819403),
    M = l(777658),
    _ = l(858488),
    f = l(185457),
    g = l(570870),
    I = l(389052),
    m = l(24311),
    R = l(710631),
    N = l(297047),
    A = l(88966),
    C = l(712301),
    O = l(520063),
    T = l(725119),
    v = l(931617),
    x = l(332031),
    h = l(981631),
    S = l(689938);
n.default = (0, s.Z)(
    (0, a.Z)(
        function (e) {
            let { user: n, guildId: l, channel: a, context: s, onSelect: o, onHeightUpdate: b } = e,
                p = (0, T.Z)({
                    userId: n.id,
                    guildId: l,
                    channelId: a.id
                }),
                U = (0, N.Z)(n, l, s),
                P = (0, A.Z)(n.id, s),
                j = (0, x.Z)(n.id),
                D = (0, m.Z)({
                    user: n,
                    context: s
                }),
                L = (0, f.Z)({
                    user: n,
                    guildId: l,
                    channelId: a.id,
                    context: s
                }),
                G = (0, _.Z)({ user: n }),
                F = (0, Z.Z)({
                    guildId: l,
                    userId: n.id,
                    analyticsLocation: {
                        page: h.ZY5.GUILD_CHANNEL,
                        section: h.jXE.CHAT_USERNAME,
                        object: h.qAy.CONTEXT_MENU_ITEM
                    },
                    context: s
                }),
                y = (0, R.Z)({
                    user: n,
                    guildId: l
                }),
                k = (0, d.Z)(null, n),
                V = (0, M.Z)(n),
                K = (0, I.Z)({ user: n }),
                H = (0, O.Z)(n, l, a.id),
                B = (0, v.Z)(n.id, l),
                q = (0, C.Z)(n, l),
                w = (0, c.Z)({
                    id: n.id,
                    label: S.Z.Messages.COPY_ID_USER
                }),
                Y = (0, E.Z)(n),
                W = (0, g.Z)({
                    commandType: u.yU.USER,
                    commandTargetId: n.id,
                    channel: a,
                    guildId: l,
                    onHeightUpdate: b
                }),
                z = n.isNonUserBot();
            return (0, t.jsxs)(r.Menu, {
                navId: 'user-context',
                onClose: i.Zy,
                'aria-label': S.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: o,
                children: [
                    !z &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(r.MenuGroup, { children: Y }),
                                (0, t.jsxs)(r.MenuGroup, {
                                    children: [p, U, P, D, L, G, j]
                                }),
                                (0, t.jsx)(r.MenuGroup, { children: k }),
                                (0, t.jsxs)(r.MenuGroup, {
                                    children: [F, W, y, V, K]
                                }),
                                (0, t.jsx)(r.MenuGroup, { children: H }),
                                (0, t.jsxs)(r.MenuGroup, {
                                    children: [B, q]
                                })
                            ]
                        }),
                    (0, t.jsx)(r.MenuGroup, { children: w })
                ]
            });
        },
        { object: h.qAy.CONTEXT_MENU }
    ),
    [o.Z.CONTEXT_MENU, o.Z.THREAD_USER_MENU]
);
