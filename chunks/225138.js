t.r(n),
    t.d(n, {
        default: function () {
            return w;
        },
        useMessageMenu: function () {
            return k;
        }
    });
var a = t(735250);
t(470079);
var i = t(374470),
    l = t(481060),
    r = t(239091),
    s = t(911969),
    o = t(299206),
    u = t(26737),
    d = t(29264),
    c = t(905041),
    E = t(89013),
    M = t(988500),
    I = t(570870),
    m = t(786095),
    g = t(268623),
    _ = t(667922),
    f = t(941389),
    Z = t(449751),
    S = t(749339),
    T = t(601184),
    v = t(6148),
    A = t(519110),
    R = t(759875),
    h = t(168405),
    O = t(536639),
    N = t(720904),
    p = t(88791),
    x = t(385302),
    j = t(873699),
    b = t(134323),
    C = t(429260),
    D = t(1626),
    L = t(279329),
    G = t(627938),
    P = t(512303),
    y = t(481300),
    U = t(689938);
function w(e) {
    var n, t;
    let a,
        l,
        s,
        o,
        { channel: u, message: d, target: c, mediaItem: E, shouldHideMediaOptions: M, onSelect: I, onHeightUpdate: m } = e,
        g = c,
        _ = c.getAttribute('data-type'),
        f = c.getAttribute('data-id'),
        Z = c.getAttribute('data-name');
    if (null != E) l = a = s = E.url;
    else for (; (0, i.k)(g); ) (0, i.k)(g, HTMLImageElement) && null != g.src && (l = g.src), (0, i.k)(g, HTMLAnchorElement) && null != g.href && ((a = g.href), (o = g.textContent), null == l && 'img' === g.getAttribute('data-role') && ((l = a), g.hasAttribute('data-safe-src') && '' !== g.getAttribute('data-safe-src') && (s = g.getAttribute('data-safe-src')))), (g = g.parentNode);
    return k({
        message: d,
        channel: u,
        mediaItem: E,
        textSelection: null !== (t = null === (n = document.getSelection()) || void 0 === n ? void 0 : n.toString()) && void 0 !== t ? t : '',
        favoriteableType: _,
        favoriteableId: f,
        favoriteableName: Z,
        itemHref: a,
        itemSrc: l,
        itemSafeSrc: s,
        itemTextContent: o,
        canReport: !0,
        onHeightUpdate: m,
        onSelect: I,
        onClose: r.Zy,
        navId: 'message',
        ariaLabel: U.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
        shouldHideMediaOptions: M
    });
}
function k(e) {
    let { message: n, channel: t, mediaItem: i, textSelection: r, favoriteableType: w, favoriteableId: k, favoriteableName: F, itemHref: V, itemSrc: z, itemSafeSrc: K, itemTextContent: X, canReport: H, onHeightUpdate: Y, onSelect: B, onClose: W, navId: q, ariaLabel: J, shouldHideMediaOptions: $ = !1 } = e,
        Q = (0, u.Z)(r),
        ee = (0, E.Z)(r),
        en = (0, N.Z)(n, t),
        et = (0, _.Z)(n, t),
        ea = (0, v.Z)(n, t),
        ei = (0, O.Z)(n, t),
        el = (0, A.Z)({
            type: w,
            id: k,
            name: F
        }),
        er = (0, D.Z)(n, t),
        es = (0, h.Z)(n, t),
        eo = (0, p.Z)(n),
        eu = (0, f.Z)(n, t),
        ed = (0, Z.Z)(n, t),
        ec = (0, x.Z)(n, t),
        eE = (0, j.Z)(n, t),
        eM = (0, T.Z)(n, t),
        eI = (0, C.Z)(n),
        em = (0, L.Z)(n, t),
        eg = (0, c.Z)(null != V ? V : z, X, n, { shouldHideMediaOptions: $ }),
        e_ = (0, d.Z)(K, n, { shouldHideMediaOptions: $ }),
        ef = (0, y.Z)(n, i),
        eZ = (0, o.Z)({
            id: n.id,
            label: U.Z.Messages.COPY_ID_MESSAGE,
            shiftId: ''.concat(n.channel_id, '-').concat(n.id)
        }),
        eS = (0, b.Z)(n, t),
        eT = (0, R.Z)(n, t),
        ev = (0, G.Z)(n, t),
        eA = (0, m.Z)(r, t.getGuildId()),
        eR = (0, g.Z)(n),
        eh = (0, S.Z)(n),
        eO = (0, I.Z)({
            commandType: s.yU.MESSAGE,
            commandTargetId: n.id,
            channel: t,
            guildId: void 0,
            onHeightUpdate: Y
        }),
        eN = (0, P.Z)(n),
        ep = (0, M.Z)(n);
    return (0, a.jsxs)(l.Menu, {
        navId: q,
        onClose: W,
        'aria-label': J,
        onSelect: B,
        children: [
            (0, a.jsx)(l.MenuGroup, { children: Q }),
            (0, a.jsx)(l.MenuGroup, { children: ee }),
            (0, a.jsxs)(l.MenuGroup, {
                children: ['' === r ? en : null, et, eo, ea, ei, eR, el, eS, eT, ev, eh, eO, er, es, eu, ed, em, ep, eE, ec, eN, eM, H && eI]
            }),
            null != eA && (0, a.jsx)(l.MenuGroup, { children: eA }),
            (0, a.jsxs)(l.MenuGroup, {
                children: [e_, ef]
            }),
            (0, a.jsx)(l.MenuGroup, { children: eg }),
            (0, a.jsx)(l.MenuGroup, { children: eZ })
        ]
    });
}
