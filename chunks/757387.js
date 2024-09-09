t.r(n);
var i = t(735250);
t(470079);
var r = t(442837),
    a = t(481060),
    o = t(239091),
    l = t(883385),
    u = t(108843),
    d = t(911969),
    s = t(947440),
    c = t(100527),
    E = t(441061),
    I = t(167675),
    _ = t(737013),
    T = t(607783),
    N = t(299206),
    S = t(976192),
    p = t(819403),
    A = t(286694),
    O = t(592125),
    Z = t(777658),
    M = t(858488),
    f = t(185457),
    h = t(933409),
    G = t(570870),
    C = t(389052),
    R = t(24311),
    m = t(332576),
    g = t(710631),
    y = t(297047),
    D = t(88966),
    v = t(712301),
    U = t(991307),
    b = t(725119),
    P = t(931617),
    L = t(700994),
    x = t(332031),
    H = t(981631),
    F = t(689938);
n.default = (0, u.Z)(
    (0, l.Z)(
        function (e) {
            let { user: n, guildId: t, channel: l, showMediaItems: u = !1, showChatItems: c = !0, showChannelCallItems: B = !1, showModalItems: j = !0, showStageChannelItems: k = !1, context: V, onSelect: W, onHeightUpdate: K, viewingChannelId: w } = e,
                Y = {
                    page: H.ZY5.GUILD_CHANNEL,
                    section: H.jXE.CHAT_USERNAME,
                    object: H.qAy.CONTEXT_MENU_ITEM
                },
                q = (0, b.Z)({
                    userId: n.id,
                    guildId: t,
                    channelId: l.id
                }),
                z = (0, y.Z)(n, t, V),
                X = (0, D.Z)(n.id, V),
                Q = (0, x.Z)(n.id),
                J = (0, R.Z)({
                    user: n,
                    context: V
                }),
                $ = (0, f.Z)({
                    user: n,
                    guildId: t,
                    channelId: l.id,
                    context: V
                }),
                ee = (0, M.Z)({ user: n }),
                en = (0, L.Z)(n.id),
                et = (0, U.Z)(n.id),
                ei = (0, T.B)({
                    userId: n.id,
                    channelId: l.id,
                    guildId: l.getGuildId(),
                    location: 'GuildChannelUserContextMenu'
                }),
                er = (0, S.Z)({
                    guildId: t,
                    userId: n.id,
                    analyticsLocation: Y,
                    context: V
                }),
                ea = (0, g.Z)({
                    user: n,
                    guildId: t
                }),
                eo = (0, s.Z)(null, n),
                el = (0, Z.Z)(n),
                eu = (0, C.Z)({ user: n }),
                ed = (0, h.Z)(n, t, l.id),
                es = (0, P.Z)(n.id, t),
                ec = (0, v.Z)(n, t),
                eE = (0, N.Z)({
                    id: n.id,
                    label: F.Z.Messages.COPY_ID_USER
                }),
                eI = (0, m.Z)(n.id, l.id),
                e_ = (0, I.Z)(n.id),
                eT = (0, E.Z)(l.id),
                eN = (0, p.Z)(n),
                eS = (0, A.Z)(n, t, l.id),
                ep = (0, r.e7)([O.Z], () => (null != w ? O.Z.getChannel(w) : null)),
                eA = (0, G.Z)({
                    commandType: d.yU.USER,
                    commandTargetId: n.id,
                    channel: null != ep ? ep : l,
                    guildId: t,
                    onHeightUpdate: K,
                    context: V
                }),
                eO = (0, _.Z)(n.id),
                eZ = n.isNonUserBot();
            return (0, i.jsxs)(a.Menu, {
                navId: 'user-context',
                onClose: o.Zy,
                'aria-label': F.Z.Messages.USER_ACTIONS_MENU_LABEL,
                onSelect: W,
                children: [
                    !eZ &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsxs)(a.MenuGroup, {
                                    children: [eN, k && eS]
                                }),
                                (0, i.jsxs)(a.MenuGroup, {
                                    children: [j && q, c && z, X, J, j && $, j && ee, Q]
                                }),
                                u && (0, i.jsx)(a.MenuGroup, { children: en }),
                                (0, i.jsx)(a.MenuGroup, { children: j && eo }),
                                (0, i.jsxs)(a.MenuGroup, {
                                    children: [u && et, u && ei, u && eI, j && er, eA, j && ea, el, j && eu, B && eO]
                                }),
                                (0, i.jsx)(a.MenuGroup, { children: ed }),
                                (0, i.jsxs)(a.MenuGroup, {
                                    children: [es, ec]
                                }),
                                B &&
                                    (0, i.jsxs)(a.MenuGroup, {
                                        children: [eT, e_]
                                    })
                            ]
                        }),
                    (0, i.jsx)(a.MenuGroup, { children: eE })
                ]
            });
        },
        { object: H.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU]
);
