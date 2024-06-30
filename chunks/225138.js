t.r(n), t.d(n, {
    default: function () {
        return k;
    },
    useMessageMenu: function () {
        return K;
    }
});
var i = t(735250);
t(470079);
var a = t(374470), r = t(481060), l = t(239091), o = t(911969), s = t(299206), u = t(26737), c = t(29264), d = t(905041), E = t(89013), f = t(988500), M = t(570870), I = t(786095), g = t(667922), m = t(235624), _ = t(941389), Z = t(449751), S = t(749339), v = t(601184), A = t(6148), O = t(519110), T = t(759875), h = t(168405), R = t(536639), p = t(720904), N = t(88791), x = t(235047), b = t(385302), C = t(873699), j = t(134323), P = t(429260), L = t(1626), D = t(279329), G = t(627938), y = t(512303), U = t(481300), w = t(689938);
function k(e) {
    var n, t;
    let i, r, o, s, {
            channel: u,
            message: c,
            target: d,
            mediaItem: E,
            shouldHideMediaOptions: f,
            onSelect: M,
            onHeightUpdate: I
        } = e, g = d, m = d.getAttribute('data-type'), _ = d.getAttribute('data-id'), Z = d.getAttribute('data-name');
    if (null != E)
        r = i = o = E.url;
    else
        for (; (0, a.k)(g);)
            (0, a.k)(g, HTMLImageElement) && null != g.src && (r = g.src), (0, a.k)(g, HTMLAnchorElement) && null != g.href && (i = g.href, s = g.textContent, null == r && 'img' === g.getAttribute('data-role') && (r = i, g.hasAttribute('data-safe-src') && '' !== g.getAttribute('data-safe-src') && (o = g.getAttribute('data-safe-src')))), g = g.parentNode;
    return K({
        message: c,
        channel: u,
        mediaItem: E,
        textSelection: null !== (t = null === (n = document.getSelection()) || void 0 === n ? void 0 : n.toString()) && void 0 !== t ? t : '',
        favoriteableType: m,
        favoriteableId: _,
        favoriteableName: Z,
        itemHref: i,
        itemSrc: r,
        itemSafeSrc: o,
        itemTextContent: s,
        canReport: !0,
        onHeightUpdate: I,
        onSelect: M,
        onClose: l.Zy,
        navId: 'message',
        ariaLabel: w.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
        shouldHideMediaOptions: f
    });
}
function K(e) {
    let {
            message: n,
            channel: t,
            mediaItem: a,
            textSelection: l,
            favoriteableType: k,
            favoriteableId: K,
            favoriteableName: F,
            itemHref: V,
            itemSrc: H,
            itemSafeSrc: B,
            itemTextContent: X,
            canReport: Y,
            onHeightUpdate: z,
            onSelect: W,
            onClose: q,
            navId: J,
            ariaLabel: $,
            shouldHideMediaOptions: Q = !1
        } = e, ee = (0, u.Z)(l), en = (0, E.Z)(l), et = (0, p.Z)(n, t), ei = (0, g.Z)(n, t), ea = (0, A.Z)(n, t), er = (0, R.Z)(n, t), el = (0, O.Z)({
            type: k,
            id: K,
            name: F
        }), eo = (0, L.Z)(n, t), es = (0, h.Z)(n, t), eu = (0, N.Z)(n), ec = (0, _.Z)(n, t), ed = (0, Z.Z)(n, t), eE = (0, b.Z)(n, t), ef = (0, C.Z)(n, t), eM = (0, v.Z)(n, t), eI = (0, P.Z)(n), eg = (0, D.Z)(n, t), em = (0, d.Z)(null != V ? V : H, X, n, { shouldHideMediaOptions: Q }), e_ = (0, c.Z)(B, n, { shouldHideMediaOptions: Q }), eZ = (0, U.Z)(n, a), eS = (0, s.Z)({
            id: n.id,
            label: w.Z.Messages.COPY_ID_MESSAGE,
            shiftId: ''.concat(n.channel_id, '-').concat(n.id)
        }), ev = (0, j.Z)(n, t), eA = (0, T.Z)(n, t), eO = (0, G.Z)(n, t), eT = (0, I.Z)(l, t.getGuildId()), eh = (0, x.Z)(n), eR = (0, m.Z)(n), ep = (0, S.Z)(n), eN = (0, M.Z)({
            commandType: o.yU.MESSAGE,
            commandTargetId: n.id,
            channel: t,
            guildId: void 0,
            onHeightUpdate: z
        }), ex = (0, y.Z)(n), eb = (0, f.Z)(n);
    return (0, i.jsxs)(r.Menu, {
        navId: J,
        onClose: q,
        'aria-label': $,
        onSelect: W,
        children: [
            (0, i.jsx)(r.MenuGroup, { children: ee }),
            (0, i.jsx)(r.MenuGroup, { children: en }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [
                    '' === l ? et : null,
                    ei,
                    eu,
                    ea,
                    er,
                    el,
                    ev,
                    eA,
                    eO,
                    ep,
                    eN,
                    eo,
                    es,
                    eR,
                    eh,
                    ec,
                    ed,
                    eg,
                    eb,
                    ef,
                    eE,
                    ex,
                    eM,
                    Y && eI
                ]
            }),
            null != eT && (0, i.jsx)(r.MenuGroup, { children: eT }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [
                    e_,
                    eZ
                ]
            }),
            (0, i.jsx)(r.MenuGroup, { children: em }),
            (0, i.jsx)(r.MenuGroup, { children: eS })
        ]
    });
}
