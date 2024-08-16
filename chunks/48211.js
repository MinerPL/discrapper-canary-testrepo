i.r(n);
var l = i(735250);
i(470079);
var t = i(481060),
    s = i(239091),
    a = i(883385),
    o = i(108843),
    u = i(947440),
    d = i(100527),
    r = i(299206),
    c = i(976192),
    Z = i(276022),
    M = i(777658),
    E = i(858488),
    _ = i(185457),
    f = i(933409),
    N = i(389052),
    A = i(24311),
    I = i(710631),
    g = i(297047),
    v = i(88966),
    b = i(712301),
    m = i(991307),
    p = i(725119),
    D = i(931617),
    T = i(700994),
    x = i(332031),
    O = i(981631),
    C = i(689938);
n.default = (0, o.Z)(
    (0, a.Z)(
        function (e) {
            let { user: n, guildId: i, showModalItems: a = !0, showMediaItems: o = !1, showChatItems: d = !0, context: U, onSelect: L } = e,
                h = {
                    page: O.ZY5.GUILD_CHANNEL,
                    section: O.jXE.CHAT_USERNAME,
                    object: O.qAy.CONTEXT_MENU_ITEM
                },
                S = (0, p.Z)({
                    userId: n.id,
                    guildId: i
                }),
                R = (0, g.Z)(n, i, U),
                j = (0, v.Z)(n.id, U),
                G = (0, x.Z)(n.id),
                k = (0, A.Z)({
                    user: n,
                    context: U
                }),
                V = (0, _.Z)({
                    user: n,
                    guildId: i,
                    context: U
                }),
                P = (0, E.Z)({ user: n }),
                F = (0, T.Z)(n.id),
                y = (0, m.Z)(n.id),
                B = (0, c.Z)({
                    guildId: i,
                    userId: n.id,
                    analyticsLocation: h,
                    context: U
                }),
                w = (0, Z.Z)({
                    user: n,
                    guildId: i
                }),
                Y = (0, I.Z)({
                    user: n,
                    guildId: i
                }),
                z = (0, u.Z)(null, n),
                W = (0, M.Z)(n),
                H = (0, N.Z)({ user: n }),
                q = (0, f.Z)(n, i),
                X = (0, D.Z)(n.id, i),
                K = (0, b.Z)(n, i),
                J = (0, r.Z)({
                    id: n.id,
                    label: C.Z.Messages.COPY_ID_USER
                }),
                Q = n.isNonUserBot();
            return (0, l.jsxs)(t.Menu, {
                navId: 'user-context',
                onClose: s.Zy,
                'aria-label': C.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: L,
                children: [
                    !Q &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(t.MenuGroup, {
                                    children: [a && S, d && R, j, k, a && V, a && P, G]
                                }),
                                o && (0, l.jsx)(t.MenuGroup, { children: F }),
                                (0, l.jsx)(t.MenuGroup, { children: a && z }),
                                (0, l.jsxs)(t.MenuGroup, {
                                    children: [o && y, a && B, a && Y, W, w, a && H]
                                }),
                                (0, l.jsx)(t.MenuGroup, { children: q }),
                                (0, l.jsxs)(t.MenuGroup, {
                                    children: [X, K]
                                })
                            ]
                        }),
                    (0, l.jsx)(t.MenuGroup, { children: J })
                ]
            });
        },
        { object: O.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.GUILD_USER_MENU]
);
