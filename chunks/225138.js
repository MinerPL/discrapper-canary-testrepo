t.r(n),
    t.d(n, {
        default: function () {
            return w;
        },
        useMessageMenu: function () {
            return F;
        }
    });
var i = t(735250);
t(470079);
var a = t(374470),
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
    _ = t(667922),
    g = t(235624),
    f = t(941389),
    Z = t(449751),
    S = t(749339),
    T = t(601184),
    v = t(6148),
    A = t(519110),
    R = t(759875),
    O = t(168405),
    h = t(536639),
    N = t(720904),
    p = t(88791),
    x = t(235047),
    j = t(385302),
    C = t(873699),
    b = t(134323),
    D = t(429260),
    G = t(1626),
    P = t(279329),
    L = t(627938),
    y = t(512303),
    U = t(481300),
    k = t(689938);
function w(e) {
    var n, t;
    let i,
        l,
        s,
        o,
        { channel: u, message: d, target: c, mediaItem: E, shouldHideMediaOptions: M, onSelect: I, onHeightUpdate: m } = e,
        _ = c,
        g = c.getAttribute('data-type'),
        f = c.getAttribute('data-id'),
        Z = c.getAttribute('data-name');
    if (null != E) l = i = s = E.url;
    else for (; (0, a.k)(_); ) (0, a.k)(_, HTMLImageElement) && null != _.src && (l = _.src), (0, a.k)(_, HTMLAnchorElement) && null != _.href && ((i = _.href), (o = _.textContent), null == l && 'img' === _.getAttribute('data-role') && ((l = i), _.hasAttribute('data-safe-src') && '' !== _.getAttribute('data-safe-src') && (s = _.getAttribute('data-safe-src')))), (_ = _.parentNode);
    return F({
        message: d,
        channel: u,
        mediaItem: E,
        textSelection: null !== (t = null === (n = document.getSelection()) || void 0 === n ? void 0 : n.toString()) && void 0 !== t ? t : '',
        favoriteableType: g,
        favoriteableId: f,
        favoriteableName: Z,
        itemHref: i,
        itemSrc: l,
        itemSafeSrc: s,
        itemTextContent: o,
        canReport: !0,
        onHeightUpdate: m,
        onSelect: I,
        onClose: r.Zy,
        navId: 'message',
        ariaLabel: k.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
        shouldHideMediaOptions: M
    });
}
function F(e) {
    let { message: n, channel: t, mediaItem: a, textSelection: r, favoriteableType: w, favoriteableId: F, favoriteableName: K, itemHref: V, itemSrc: z, itemSafeSrc: H, itemTextContent: X, canReport: Y, onHeightUpdate: B, onSelect: W, onClose: q, navId: J, ariaLabel: $, shouldHideMediaOptions: Q = !1 } = e,
        ee = (0, u.Z)(r),
        en = (0, E.Z)(r),
        et = (0, N.Z)(n, t),
        ei = (0, _.Z)(n, t),
        ea = (0, v.Z)(n, t),
        el = (0, h.Z)(n, t),
        er = (0, A.Z)({
            type: w,
            id: F,
            name: K
        }),
        es = (0, G.Z)(n, t),
        eo = (0, O.Z)(n, t),
        eu = (0, p.Z)(n),
        ed = (0, f.Z)(n, t),
        ec = (0, Z.Z)(n, t),
        eE = (0, j.Z)(n, t),
        eM = (0, C.Z)(n, t),
        eI = (0, T.Z)(n, t),
        em = (0, D.Z)(n),
        e_ = (0, P.Z)(n, t),
        eg = (0, c.Z)(null != V ? V : z, X, n, { shouldHideMediaOptions: Q }),
        ef = (0, d.Z)(H, n, { shouldHideMediaOptions: Q }),
        eZ = (0, U.Z)(n, a),
        eS = (0, o.Z)({
            id: n.id,
            label: k.Z.Messages.COPY_ID_MESSAGE,
            shiftId: ''.concat(n.channel_id, '-').concat(n.id)
        }),
        eT = (0, b.Z)(n, t),
        ev = (0, R.Z)(n, t),
        eA = (0, L.Z)(n, t),
        eR = (0, m.Z)(r, t.getGuildId()),
        eO = (0, x.Z)(n),
        eh = (0, g.Z)(n),
        eN = (0, S.Z)(n),
        ep = (0, I.Z)({
            commandType: s.yU.MESSAGE,
            commandTargetId: n.id,
            channel: t,
            guildId: void 0,
            onHeightUpdate: B
        }),
        ex = (0, y.Z)(n),
        ej = (0, M.Z)(n);
    return (0, i.jsxs)(l.Menu, {
        navId: J,
        onClose: q,
        'aria-label': $,
        onSelect: W,
        children: [
            (0, i.jsx)(l.MenuGroup, { children: ee }),
            (0, i.jsx)(l.MenuGroup, { children: en }),
            (0, i.jsxs)(l.MenuGroup, {
                children: ['' === r ? et : null, ei, eu, ea, el, eh, eO, er, eT, ev, eA, eN, ep, es, eo, ed, ec, e_, ej, eM, eE, ex, eI, Y && em]
            }),
            null != eR && (0, i.jsx)(l.MenuGroup, { children: eR }),
            (0, i.jsxs)(l.MenuGroup, {
                children: [ef, eZ]
            }),
            (0, i.jsx)(l.MenuGroup, { children: eg }),
            (0, i.jsx)(l.MenuGroup, { children: eS })
        ]
    });
}
