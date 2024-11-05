t.r(n),
    t.d(n, {
        default: function () {
            return U;
        },
        useMessageMenu: function () {
            return k;
        }
    });
var i = t(200651);
t(192379);
var l = t(374470),
    r = t(481060),
    a = t(239091),
    o = t(911969),
    s = t(299206),
    u = t(26737),
    d = t(29264),
    c = t(905041),
    g = t(89013),
    f = t(988500),
    m = t(570870),
    h = t(786095),
    v = t(268623),
    I = t(667922),
    E = t(941389),
    p = t(449751),
    M = t(749339),
    Z = t(601184),
    x = t(6148),
    S = t(519110),
    j = t(759875),
    b = t(168405),
    A = t(536639),
    _ = t(720904),
    P = t(88791),
    N = t(385302),
    T = t(873699),
    y = t(134323),
    C = t(429260),
    L = t(1626),
    D = t(279329),
    O = t(627938),
    G = t(512303),
    R = t(481300),
    w = t(388032);
function U(e) {
    var n, t;
    let i,
        r,
        o,
        s,
        { channel: u, message: d, target: c, mediaItem: g, shouldHideMediaOptions: f, onSelect: m, onHeightUpdate: h } = e,
        v = c,
        I = c.getAttribute('data-type'),
        E = c.getAttribute('data-id'),
        p = c.getAttribute('data-name');
    if (null != g) r = i = o = g.url;
    else for (; (0, l.k)(v); ) (0, l.k)(v, HTMLImageElement) && null != v.src && (r = v.src), (0, l.k)(v, HTMLAnchorElement) && null != v.href && ((i = v.href), (s = v.textContent), null == r && 'img' === v.getAttribute('data-role') && ((r = i), v.hasAttribute('data-safe-src') && '' !== v.getAttribute('data-safe-src') && (o = v.getAttribute('data-safe-src')))), (v = v.parentNode);
    return k({
        message: d,
        channel: u,
        mediaItem: g,
        textSelection: null !== (t = null === (n = document.getSelection()) || void 0 === n ? void 0 : n.toString()) && void 0 !== t ? t : '',
        favoriteableType: I,
        favoriteableId: E,
        favoriteableName: p,
        itemHref: i,
        itemSrc: r,
        itemSafeSrc: o,
        itemTextContent: s,
        canReport: !0,
        onHeightUpdate: h,
        onSelect: m,
        onClose: a.Zy,
        navId: 'message',
        ariaLabel: w.intl.string(w.t.ChPNkJ),
        shouldHideMediaOptions: f
    });
}
function k(e) {
    let { message: n, channel: t, mediaItem: l, textSelection: a, favoriteableType: U, favoriteableId: k, favoriteableName: z, itemHref: F, itemSrc: K, itemSafeSrc: H, itemTextContent: B, canReport: X, onHeightUpdate: q, onSelect: V, onClose: J, navId: W, ariaLabel: Y, shouldHideMediaOptions: $ = !1 } = e,
        Q = (0, u.Z)(a),
        ee = (0, g.Z)(a),
        en = (0, _.Z)(n, t),
        et = (0, I.Z)(n, t),
        ei = (0, x.Z)(n, t),
        el = (0, A.Z)(n, t),
        er = (0, S.Z)({
            type: U,
            id: k,
            name: z
        }),
        ea = (0, L.Z)(n, t),
        eo = (0, b.Z)(n, t),
        es = (0, P.Z)(n),
        eu = (0, E.Z)(n, t),
        ed = (0, p.Z)(n, t),
        ec = (0, N.Z)(n, t),
        eg = (0, T.Z)(n, t),
        ef = (0, Z.Z)(n, t),
        em = (0, C.Z)(n),
        eh = (0, C.e)(n),
        ev = (0, D.Z)(n, t),
        eI = (0, c.Z)(null != F ? F : K, B, n, { shouldHideMediaOptions: $ }),
        eE = (0, d.Z)(H, n, { shouldHideMediaOptions: $ }),
        ep = (0, R.Z)(n, l),
        eM = (0, s.Z)({
            id: n.id,
            label: w.intl.string(w.t.zBoHlZ),
            shiftId: ''.concat(n.channel_id, '-').concat(n.id)
        }),
        eZ = (0, y.Z)(n, t),
        ex = (0, j.Z)(n, t),
        eS = (0, O.Z)(n, t),
        ej = (0, h.Z)(a, t.getGuildId()),
        eb = (0, v.Z)(n),
        eA = (0, M.Z)(n),
        e_ = (0, m.Z)({
            commandType: o.yU.MESSAGE,
            commandTargetId: n.id,
            channel: t,
            guildId: void 0,
            onHeightUpdate: q
        }),
        eP = (0, G.Z)(n),
        eN = (0, f.Z)(n);
    return (0, i.jsxs)(r.Menu, {
        navId: W,
        onClose: J,
        'aria-label': Y,
        onSelect: V,
        children: [
            (0, i.jsx)(r.MenuGroup, { children: Q }),
            (0, i.jsx)(r.MenuGroup, { children: ee }),
            (0, i.jsxs)(r.MenuGroup, {
                children: ['' === a ? en : null, et, es]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [ei, eZ, ex, eS]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [eA, el, eb, e_, ea, eo, eu, ed, ev, eN, eP]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [eg, ec, ef, X && em, X && eh]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [er, ej, eE, ep]
            }),
            (0, i.jsx)(r.MenuGroup, { children: eI }),
            (0, i.jsx)(r.MenuGroup, { children: eM })
        ]
    });
}
