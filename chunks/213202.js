t.r(e);
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    u = t(239091),
    o = t(883385),
    a = t(108843),
    c = t(947440),
    d = t(100527),
    s = t(299206),
    Z = t(916069),
    h = t(895563),
    x = t(212205),
    f = t(478035),
    g = t(62420),
    p = t(420529),
    M = t(554747),
    v = t(924952),
    C = t(423589),
    j = t(427679),
    m = t(398048),
    G = t(109764),
    E = t(3689),
    N = t(323597),
    _ = t(852245),
    L = t(493802),
    T = t(367722),
    I = t(461535),
    P = t(776568),
    b = t(218035),
    S = t(775666),
    A = t(442754),
    V = t(333805),
    y = t(567521),
    O = t(624514),
    U = t(917327),
    q = t(381924),
    X = t(601274),
    Y = t(981631),
    k = t(388032);
function D(n) {
    let { channel: e, guild: t, onSelect: o } = n,
        a = e.isGuildStageVoice(),
        d = (0, l.e7)([j.Z], () => (a ? j.Z.getStageInstanceByChannel(e.id) : void 0), [a, e.id]),
        Z = (0, G.Z)(e),
        p = (0, M.qY)(e.id),
        m = (0, v.Z)(null == p ? void 0 : p.id, t, e),
        E = (0, y.Z)(e, d),
        N = (0, h.l)(e),
        T = (0, h.P)(e),
        I = (0, x.Z)(e),
        P = (0, f.Z)(e),
        A = (0, g.Z)(e),
        U = (0, L.Z)(e),
        q = (0, b.Z)(e),
        Y = (0, _.Z)(e),
        D = (0, X.Z)(e, t),
        H = (0, s.Z)({
            id: e.id,
            label: k.intl.string(k.t.gFHI3t)
        }),
        W = (0, V.Z)(e),
        z = (0, c.Z)(e),
        w = (0, C.Mn)('ChannelListVoiceContextMenuFavorite'),
        F = (0, S.ZP)(e),
        K = (0, O.Z)();
    return (0, i.jsxs)(r.Menu, {
        navId: 'channel-context',
        onClose: u.Zy,
        'aria-label': k.intl.string(k.t.Xm41aW),
        onSelect: o,
        children: [
            (0, i.jsx)(r.MenuGroup, { children: null != p ? m : E }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [P, A, I, N]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [U, w ? F : q, Y]
            }),
            (0, i.jsx)(r.MenuGroup, { children: z }),
            (0, i.jsx)(r.MenuGroup, { children: T }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [D, Z]
            }),
            (0, i.jsx)(r.MenuGroup, { children: W }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [H, K]
            })
        ]
    });
}
function H(n) {
    let { channel: e, guild: t, onSelect: o } = n,
        a = e.isGuildStageVoice(),
        d = (0, l.e7)([j.Z], () => (a ? j.Z.getStageInstanceByChannel(e.id) : void 0), [a, e.id]),
        Z = (0, I.Z)(e),
        x = (0, G.Z)(e),
        f = (0, M.qY)(e.id),
        g = (0, v.Z)(null == f ? void 0 : f.id, t, e),
        Y = (0, y.Z)(e, d),
        D = (0, h.l)(e),
        H = (0, h.P)(e),
        W = (0, L.Z)(e),
        z = (0, b.Z)(e),
        w = (0, _.Z)(e),
        F = (0, T.Z)(e, t, d),
        K = (0, X.Z)(e, t),
        R = (0, U.Z)(e, t),
        B = (0, q.Z)(e, t.id),
        J = (0, m.Z)(e, t),
        Q = (0, E.Z)(e, t),
        $ = (0, N.Z)(e),
        nn = (0, s.Z)({
            id: e.id,
            label: k.intl.string(k.t.gFHI3t)
        }),
        ne = (0, V.Z)(e),
        nt = (0, c.Z)(e),
        ni = (0, A.Z)(e),
        nl = (0, p.Z)(e),
        nr = (0, P.ZP)(e),
        nu = (0, C.Mn)('ChannelListVoiceContextMenuNormal'),
        no = (0, S.ZP)(e),
        na = (0, O.Z)();
    return (0, i.jsxs)(r.Menu, {
        navId: 'channel-context',
        onClose: u.Zy,
        'aria-label': k.intl.string(k.t.Xm41aW),
        onSelect: o,
        children: [
            (0, i.jsx)(r.MenuGroup, { children: null != f ? g : Y }),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [Z, D]
                },
                'mark-as-read-or-favorite'
            ),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [F, nt, ni, x]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [B, K, R, W, nl, ne]
                },
                'voice-actions'
            ),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [nr, nu ? no : z]
                },
                'notifications'
            ),
            (0, i.jsx)(r.MenuGroup, { children: H }),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [w, J, Q, $]
                },
                'admin-actions'
            ),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [nn, na]
                },
                'developer-actions'
            )
        ]
    });
}
e.default = (0, a.Z)(
    (0, o.Z)(
        function (n) {
            return (0, Z.Z)() ? (0, i.jsx)(D, { ...n }) : (0, i.jsx)(H, { ...n });
        },
        { object: Y.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU]
);
