i.r(n);
var t = i(735250);
i(470079);
var l = i(442837), s = i(481060), a = i(239091), u = i(883385), o = i(108843), r = i(947440), d = i(100527), c = i(299206), Z = i(916069), E = i(895563), M = i(212205), _ = i(478035), N = i(62420), C = i(420529), h = i(554747), T = i(924952), f = i(423589), x = i(427679), g = i(398048), p = i(109764), A = i(3689), L = i(323597), v = i(852245), G = i(493802), I = i(367722), j = i(461535), S = i(776568), O = i(218035), P = i(775666), m = i(442754), V = i(333805), D = i(567521), U = i(917327), b = i(381924), H = i(601274), y = i(981631), R = i(689938);
function X(e) {
    let {
            channel: n,
            guild: i,
            onSelect: u
        } = e, o = n.isGuildStageVoice(), d = (0, l.e7)([x.Z], () => o ? x.Z.getStageInstanceByChannel(n.id) : void 0, [
            o,
            n.id
        ]), Z = (0, p.Z)(n), C = (0, h.qY)(n.id), g = (0, T.Z)(null == C ? void 0 : C.id, i, n), A = (0, D.Z)(n, d), L = (0, E.l)(n), I = (0, E.P)(n), j = (0, M.Z)(n), S = (0, _.Z)(n), m = (0, N.Z)(n), U = (0, G.Z)(n), b = (0, O.Z)(n), y = (0, v.Z)(n), X = (0, H.Z)(n, i), k = (0, c.Z)({
            id: n.id,
            label: R.Z.Messages.COPY_ID_CHANNEL
        }), q = (0, V.Z)(n), Y = (0, r.Z)(n), B = (0, f.Mn)('ChannelListVoiceContextMenuFavorite'), w = (0, P.ZP)(n);
    return (0, t.jsxs)(s.Menu, {
        navId: 'channel-context',
        onClose: a.Zy,
        'aria-label': R.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
        onSelect: u,
        children: [
            (0, t.jsx)(s.MenuGroup, { children: null != C ? g : A }),
            (0, t.jsxs)(s.MenuGroup, {
                children: [
                    S,
                    m,
                    j,
                    L
                ]
            }),
            (0, t.jsxs)(s.MenuGroup, {
                children: [
                    U,
                    B ? w : b,
                    y
                ]
            }),
            (0, t.jsx)(s.MenuGroup, { children: Y }),
            (0, t.jsx)(s.MenuGroup, { children: I }),
            (0, t.jsxs)(s.MenuGroup, {
                children: [
                    X,
                    Z
                ]
            }),
            (0, t.jsx)(s.MenuGroup, { children: q }),
            (0, t.jsx)(s.MenuGroup, { children: k })
        ]
    });
}
function k(e) {
    let {
            channel: n,
            guild: i,
            onSelect: u
        } = e, o = n.isGuildStageVoice(), d = (0, l.e7)([x.Z], () => o ? x.Z.getStageInstanceByChannel(n.id) : void 0, [
            o,
            n.id
        ]), Z = (0, j.Z)(n), M = (0, p.Z)(n), _ = (0, h.qY)(n.id), N = (0, T.Z)(null == _ ? void 0 : _.id, i, n), y = (0, D.Z)(n, d), X = (0, E.l)(n), k = (0, E.P)(n), q = (0, G.Z)(n), Y = (0, O.Z)(n), B = (0, v.Z)(n), w = (0, I.Z)(n, i, d), F = (0, H.Z)(n, i), W = (0, U.Z)(n, i), J = (0, b.Z)(n, i.id), K = (0, g.Z)(n, i), z = (0, A.Z)(n, i), Q = (0, L.Z)(n), $ = (0, c.Z)({
            id: n.id,
            label: R.Z.Messages.COPY_ID_CHANNEL
        }), ee = (0, V.Z)(n), en = (0, r.Z)(n), ei = (0, m.Z)(n), et = (0, C.Z)(n), el = (0, S.ZP)(n), es = (0, f.Mn)('ChannelListVoiceContextMenuNormal'), ea = (0, P.ZP)(n);
    return (0, t.jsxs)(s.Menu, {
        navId: 'channel-context',
        onClose: a.Zy,
        'aria-label': R.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
        onSelect: u,
        children: [
            (0, t.jsx)(s.MenuGroup, { children: null != _ ? N : y }),
            (0, t.jsxs)(s.MenuGroup, {
                children: [
                    Z,
                    X
                ]
            }, 'mark-as-read-or-favorite'),
            (0, t.jsxs)(s.MenuGroup, {
                children: [
                    w,
                    en,
                    ei,
                    M
                ]
            }, 'channel-actions'),
            (0, t.jsxs)(s.MenuGroup, {
                children: [
                    J,
                    F,
                    W,
                    q,
                    et,
                    ee
                ]
            }, 'voice-actions'),
            (0, t.jsxs)(s.MenuGroup, {
                children: [
                    el,
                    es ? ea : Y
                ]
            }, 'notifications'),
            (0, t.jsx)(s.MenuGroup, { children: k }),
            (0, t.jsxs)(s.MenuGroup, {
                children: [
                    B,
                    K,
                    z,
                    Q
                ]
            }, 'admin-actions'),
            (0, t.jsx)(s.MenuGroup, { children: $ }, 'developer-actions')
        ]
    });
}
n.default = (0, o.Z)((0, u.Z)(function (e) {
    return (0, Z.Z)() ? (0, t.jsx)(X, { ...e }) : (0, t.jsx)(k, { ...e });
}, { object: y.qAy.CONTEXT_MENU }), [
    d.Z.CONTEXT_MENU,
    d.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU
]);
