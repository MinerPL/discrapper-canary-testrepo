n.d(t, {
    Z: function () {
        return N;
    },
    b: function () {
        return A;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(866442),
    l = n(442837),
    u = n(692547),
    c = n(481060),
    d = n(220082),
    _ = n(583405),
    E = n(313201),
    f = n(279745),
    h = n(695346),
    p = n(451478),
    I = n(768581),
    m = n(28660),
    T = n(462997),
    S = n(679168);
let g = (e) => {
    let { size: t, stroke: n } = (0, c.getAvatarSpecs)(e);
    return t / 2 + n;
};
function A(e) {
    var t;
    let { user: n, displayProfile: a, guildId: T, pendingBanner: A, children: N, className: O, avatarSize: R, avatarOffsetX: v, avatarOffsetY: C, bannerWidth: y, bannerHeight: L, themePadding: D, animateOnHover: b = !1 } = e,
        M = (0, E.Dt)(),
        [P, U] = i.useState(!1),
        w = (0, l.e7)([p.Z], () => p.Z.isFocused()),
        x = h.QK.getSetting(),
        { bannerSrc: G, status: k } = (0, m.Z)({
            displayProfile: a,
            pendingBanner: A,
            size: y,
            canAnimate: b || !x ? P : w
        }),
        B = (0, c.useToken)(u.Z.unsafe_rawColors.PRIMARY_800).hex(),
        F = n.getAvatarURL(T, (0, c.getAvatarSize)(R)),
        V = (0, o._i)((0, d.ZP)(F, B, !1)),
        H = (0, _.Z)(null !== (t = null == a ? void 0 : a.primaryColor) && void 0 !== t ? t : V).hsl,
        Z = g(R),
        Y = L - C - D;
    return (0, r.jsxs)('svg', {
        className: S.mask,
        viewBox: '0 0 '.concat(y, ' ').concat(L),
        style: {
            minWidth: y,
            minHeight: L
        },
        children: [
            (0, r.jsxs)('mask', {
                id: M,
                children: [
                    (0, r.jsx)('rect', {
                        fill: 'white',
                        x: '0',
                        y: '0',
                        width: '100%',
                        height: '100%'
                    }),
                    (0, r.jsx)('circle', {
                        fill: 'black',
                        cx: Z + v - D,
                        cy: Y,
                        r: Z
                    })
                ]
            }),
            (0, r.jsxs)('foreignObject', {
                x: '0',
                y: '0',
                width: '100%',
                height: '100%',
                overflow: 'visible',
                mask: 'url(#'.concat(M, ')'),
                children: [
                    N,
                    (0, r.jsxs)('div', {
                        className: s()(S.banner, O),
                        onMouseMove: () => U(!0),
                        onMouseLeave: () => U(!1),
                        style: {
                            height: L,
                            minHeight: L,
                            backgroundImage: null != G ? 'url('.concat(G, ')') : void 0,
                            backgroundColor: 'COMPLETE' !== k ? u.Z.unsafe_rawColors.PRIMARY_800.css : H
                        },
                        children: [!x && (0, I.F8)(G) && (0, r.jsx)(f.Z, { className: S.gifTag }), N]
                    })
                ]
            })
        ]
    });
}
function N(e) {
    let { profileType: t, displayProfile: n, canUsePremiumProfileCustomization: i = !1, ...a } = e,
        s = T.q[t],
        o = i || (null == n ? void 0 : n.canUsePremiumProfileCustomization) || !1;
    return (0, r.jsx)(A, {
        ...a,
        ...s,
        displayProfile: n,
        themePadding: o ? s.themePadding : 0
    });
}
