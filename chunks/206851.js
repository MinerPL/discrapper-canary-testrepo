t.d(n, {
    Z: function () {
        return f;
    }
});
var a = t(735250);
t(470079);
var r = t(249849),
    i = t(907561),
    s = t(689938),
    o = t(924936);
let l = ['#1e349e', '#4d61de', '#7887e2', '#92a6e4'],
    c = ['#fc6e4e'],
    d = [0.05, 0.15, 0.26, 0.4],
    u = [
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        },
        {
            base: 8,
            tint: 1
        }
    ],
    m = [0.35],
    _ = [
        {
            base: 4,
            tint: 1
        }
    ];
function f(e) {
    let { width: n, height: t, primaryTintColor: f, secondaryTintColor: C, ...h } = e,
        { primaryColorsTransformed: x, secondaryColorsTransformed: p } = (0, r.s)({
            primaryBaseColors: l,
            primaryTintColor: f,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: C,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: _
        }),
        { styleContent: g, containerId: T } = (0, i.bC)(x, p);
    return (0, a.jsxs)('svg', {
        ...h,
        'aria-label': s.Z.Messages.CLAN_LOOK_BANNER,
        width: n,
        height: t,
        viewBox: '0 0 '.concat(i.Km, ' ').concat(i.md),
        children: [
            (0, a.jsx)('defs', { children: (0, a.jsx)('style', { children: g }) }),
            (0, a.jsx)('use', {
                href: ''.concat(o, '#wrapper-layer'),
                id: T
            })
        ]
    });
}
