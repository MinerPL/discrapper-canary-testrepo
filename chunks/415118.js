s.r(n);
var t = s(735250);
s(470079);
var l = s(481060),
    i = s(239091),
    a = s(883385),
    o = s(108843),
    d = s(947440),
    u = s(100527),
    r = s(299206),
    c = s(976192),
    Z = s(276022),
    M = s(777658),
    E = s(858488),
    _ = s(185457),
    f = s(933409),
    N = s(389052),
    g = s(24311),
    I = s(710631),
    m = s(297047),
    A = s(88966),
    C = s(712301),
    D = s(991307),
    U = s(725119),
    b = s(931617),
    x = s(700994),
    O = s(332031),
    T = s(981631),
    L = s(689938);
n.default = (0, o.Z)(
    (0, a.Z)(
        function (e) {
            let { user: n, guildId: s, showModalItems: a = !0, showMediaItems: o = !1, showChatItems: u = !0, context: h, onSelect: v } = e,
                S = {
                    page: T.ZY5.GUILD_CHANNEL,
                    section: T.jXE.CHAT_USERNAME,
                    object: T.qAy.CONTEXT_MENU_ITEM
                },
                j = (0, U.Z)({
                    userId: n.id,
                    guildId: s
                }),
                R = (0, m.Z)(n, s, h),
                p = (0, A.Z)(n.id, h),
                k = (0, O.Z)(n.id),
                V = (0, g.Z)({
                    user: n,
                    context: h
                }),
                F = (0, _.Z)({
                    user: n,
                    guildId: s,
                    context: h
                }),
                P = (0, E.Z)({ user: n }),
                B = (0, x.Z)(n.id),
                G = (0, D.Z)(n.id),
                y = (0, c.Z)({
                    guildId: s,
                    userId: n.id,
                    analyticsLocation: S,
                    context: h
                }),
                w = (0, Z.Z)({
                    user: n,
                    guildId: s
                }),
                Y = (0, I.Z)({
                    user: n,
                    guildId: s
                }),
                W = (0, d.Z)(null, n),
                H = (0, M.Z)(n),
                X = (0, N.Z)({ user: n }),
                q = (0, f.Z)(n, s),
                z = (0, b.Z)(n.id, s),
                K = (0, C.Z)(n, s),
                J = (0, r.Z)({
                    id: n.id,
                    label: L.Z.Messages.COPY_ID_USER
                }),
                Q = n.isNonUserBot();
            return (0, t.jsxs)(l.Menu, {
                navId: 'user-context',
                onClose: i.Zy,
                'aria-label': L.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: v,
                children: [
                    !Q &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsxs)(l.MenuGroup, {
                                    children: [a && j, u && R, p, V, a && F, a && P, k]
                                }),
                                o && (0, t.jsx)(l.MenuGroup, { children: B }),
                                (0, t.jsx)(l.MenuGroup, { children: a && W }),
                                (0, t.jsxs)(l.MenuGroup, {
                                    children: [o && G, a && y, a && Y, H, w, a && X]
                                }),
                                (0, t.jsx)(l.MenuGroup, { children: q }),
                                (0, t.jsxs)(l.MenuGroup, {
                                    children: [z, K]
                                })
                            ]
                        }),
                    (0, t.jsx)(l.MenuGroup, { children: J })
                ]
            });
        },
        { object: T.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.GUILD_USER_MENU]
);
