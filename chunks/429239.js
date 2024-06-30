var a = t(735250), n = t(470079), l = t(120356), s = t.n(l), r = t(974674), c = t(438784), d = t(481060), o = t(806519), u = t(525049), A = t(542398);
let I = {}, _ = 1 / 4;
function S(e) {
    let {
        height: i,
        fillColor: t
    } = e;
    return (0, a.jsx)('div', {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: i / 2,
            backgroundColor: t,
            height: i,
            width: i * u.jR
        },
        children: (0, a.jsx)(c.b, {
            className: A.dots,
            dotRadius: i * _
        })
    });
}
function E(e) {
    let {
            isTyping: i,
            statusCoords: t,
            status: n
        } = e, l = (0, d.useStatusFillColor)(d.StatusTypes.ONLINE);
    return i ? (0, a.jsx)('div', {
        style: {
            position: 'absolute',
            top: t.y,
            left: t.x
        },
        children: (0, a.jsx)(S, {
            height: t.height,
            fillColor: l
        })
    }) : null != n ? (0, a.jsx)(d.Status, {
        size: t.height,
        status: n,
        style: {
            position: 'absolute',
            top: t.y,
            left: t.x
        }
    }) : null;
}
function f(e) {
    let {
        src: i,
        size: t
    } = e;
    return (0, a.jsx)('img', {
        className: A.circularImage,
        src: i,
        alt: '',
        width: t,
        height: t
    });
}
let h = {
    [d.AvatarSizes.SIZE_16]: {
        default: o.QS.DIAGONAL_FACEPILE_16,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_16,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_16
    },
    [d.AvatarSizes.SIZE_20]: {
        default: o.QS.DIAGONAL_FACEPILE_20,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_20,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_20
    },
    [d.AvatarSizes.SIZE_24]: {
        default: o.QS.DIAGONAL_FACEPILE_24,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_24,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_24
    },
    [d.AvatarSizes.SIZE_32]: {
        default: o.QS.DIAGONAL_FACEPILE_32,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_32,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [d.AvatarSizes.SIZE_40]: {
        default: o.QS.DIAGONAL_FACEPILE_32,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_32,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [d.AvatarSizes.SIZE_48]: {
        default: o.QS.DIAGONAL_FACEPILE_40,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_40,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_40
    },
    [d.AvatarSizes.SIZE_56]: {
        default: o.QS.DIAGONAL_FACEPILE_56,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_56,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_56
    },
    [d.AvatarSizes.SIZE_80]: {
        default: o.QS.DIAGONAL_FACEPILE_80,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_80,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_80
    },
    [d.AvatarSizes.SIZE_120]: {
        default: o.QS.DIAGONAL_FACEPILE_120,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_120,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_120
    }
};
i.Z = function (e) {
    var i, t, l;
    let {
            backSrc: c,
            frontSrc: _,
            size: S,
            isTyping: g,
            status: p,
            style: L,
            className: b,
            ...N
        } = e, {size: x} = d.AvatarSizeSpecs[S], {
            statusCoords: T,
            frontAvatarOffsetPx: m,
            frontAvatarSizePx: C,
            backAvatarSizePx: G
        } = n.useMemo(() => {
            var e;
            let i = ''.concat(x, '-').concat(g);
            return null !== (e = I[i]) && void 0 !== e ? e : function (e, i, t) {
                let a = d.AvatarSizeSpecs[e], n = a.size / (u.z3 + u.o), l = n * u.z3, s = n * u.o, c = {
                        statusCoords: (0, r.Vq)(a, d.StatusTypes.ONLINE, !1, i),
                        frontAvatarSizePx: l,
                        backAvatarSizePx: n,
                        frontAvatarOffsetPx: s,
                        frontAvatarCenter: s + l / 2
                    };
                return I[t] = c, c;
            }(S, g, i);
        }, [
            x,
            g,
            S
        ]);
    let y = (i = null != p, t = g, l = S, t ? h[l].typing : i ? h[l].status : h[l].default);
    return (0, a.jsxs)('div', {
        style: {
            width: x,
            height: x,
            ...L
        },
        'aria-label': N['aria-label'],
        'aria-hidden': N['aria-hidden'],
        className: s()(A.container, b),
        children: [
            (0, a.jsxs)(o.ZP, {
                mask: y,
                height: x,
                width: x,
                children: [
                    (0, a.jsx)('img', {
                        src: c,
                        alt: '',
                        width: G,
                        height: G
                    }),
                    (0, a.jsx)('div', {
                        style: {
                            position: 'absolute',
                            top: m,
                            left: m
                        },
                        children: (0, a.jsx)(f, {
                            src: _,
                            size: C,
                            isTyping: g,
                            status: p
                        })
                    })
                ]
            }),
            (0, a.jsx)(E, {
                statusCoords: T,
                status: p,
                isTyping: g
            })
        ]
    });
};
