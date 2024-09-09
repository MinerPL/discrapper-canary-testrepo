n.d(t, {
    Z: function () {
        return T;
    }
});
var s = n(735250);
n(470079);
var a = n(780384),
    r = n(481060),
    i = n(410030),
    l = n(44315),
    o = n(889901),
    c = n(955204),
    d = n(231338),
    _ = n(499872);
let u = {
        trophy: d.Il.PRIMARY_400,
        locked: d.Il.PRIMARY_400,
        unlocked: d.Il.GREEN_330
    },
    E = {
        trophy: d.Il.PRIMARY_400,
        locked: d.Il.PRIMARY_400,
        unlocked: d.Il.GREEN_330
    };
function T(e) {
    var t;
    let { achievementId: n, unlocked: d, size: T = r.AvatarSizes.SIZE_40 } = e,
        I = (0, i.ZP)(),
        R = (0, c.oX)(n);
    if (null == R) return null;
    let C = (0, r.getAvatarSpecs)(T),
        { name: g, rarity: p } = R,
        { color: N } = (0, c.F7)(p),
        A = (0, a.wj)(I) ? u : E,
        m = (C.size - C.offset - 2 * C.stroke) * 0.8,
        f = C.size - C.stroke,
        S = {
            width: 0.4 * m,
            height: 0.4 * m
        },
        h = {
            width: S.width + 1,
            height: S.height + 1,
            right: C.stroke + 1,
            bottom: C.stroke + 1,
            padding: 0
        };
    return (0, s.jsxs)('div', {
        className: _.container,
        style: {
            width: f,
            height: f,
            padding: C.stroke
        },
        'aria-label': ''.concat(null !== (t = g()) && void 0 !== t ? t : ''),
        children: [
            (0, s.jsx)('div', {
                className: _.trophyIconContainer,
                children: (0, s.jsx)(r.TrophyIcon, {
                    size: 'custom',
                    color: d ? N : (0, l.Lq)(A.trophy),
                    width: m,
                    height: m
                })
            }),
            !d &&
                (0, s.jsx)('div', {
                    className: _.lockContainer,
                    style: h,
                    children: (0, s.jsx)(r.LockIcon, {
                        size: 'custom',
                        color: (0, l.Lq)(A.locked),
                        ...S
                    })
                }),
            d &&
                p === c.EP.LEGENDARY &&
                (0, s.jsx)('div', {
                    className: _.lockContainer,
                    style: h,
                    children: (0, s.jsx)(o.Z, {
                        className: _.confettiIcon,
                        ...S
                    })
                })
        ]
    });
}
T.Sizes = r.AvatarSizes;
