t.d(n, {
    Z: function () {
        return C;
    }
});
var a = t(735250);
t(470079);
var r = t(249849), i = t(907561), s = t(689938), o = t(408263);
let l = ['#00ff00'], c = [
        '#000000',
        '#ed1c24'
    ], d = [0.7], u = [{
            base: 1,
            tint: 2
        }], m = [
        0,
        0.2
    ], f = [
        {
            base: 1,
            tint: 0
        },
        {
            base: 1,
            tint: 4
        }
    ];
function C(e) {
    let {
            width: n,
            height: t,
            primaryTintColor: C,
            secondaryTintColor: _,
            ...h
        } = e, {
            primaryColorsTransformed: x,
            secondaryColorsTransformed: g
        } = (0, r.s)({
            primaryBaseColors: l,
            primaryTintColor: C,
            primaryTintLuminances: d,
            primaryLuminanceWeights: u,
            secondaryBaseColors: c,
            secondaryTintColor: _,
            secondaryTintLuminances: m,
            secondaryLuminanceWeights: f
        }), {
            styleContent: p,
            containerId: T
        } = (0, i.bC)(x, g);
    return (0, a.jsxs)('svg', {
        ...h,
        'aria-label': s.Z.Messages.CLAN_LOOK_BANNER,
        width: n,
        height: t,
        viewBox: '0 0 '.concat(i.Km, ' ').concat(i.md),
        children: [
            (0, a.jsxs)('defs', {
                children: [
                    (0, a.jsx)('defs', {
                        children: (0, a.jsxs)('linearGradient', {
                            id: 'line-gradient',
                            x1: '0',
                            x2: '1',
                            y1: '0',
                            y2: '1',
                            children: [
                                (0, a.jsx)('stop', {
                                    stopColor: g[1],
                                    offset: '0%'
                                }),
                                (0, a.jsx)('stop', {
                                    stopColor: x[0],
                                    offset: '50%'
                                }),
                                (0, a.jsx)('stop', {
                                    stopColor: x[0],
                                    offset: '80%'
                                }),
                                (0, a.jsx)('stop', {
                                    stopColor: g[1],
                                    offset: '100%'
                                })
                            ]
                        })
                    }),
                    (0, a.jsx)('style', { children: p })
                ]
            }),
            (0, a.jsx)('use', {
                href: ''.concat(o, '#wrapper-layer'),
                id: T
            }),
            (0, a.jsx)('use', {
                href: ''.concat(o, '#heightmap-lines-0'),
                style: { fill: 'url(#line-gradient)' }
            }),
            (0, a.jsx)('use', {
                href: ''.concat(o, '#heightmap-lines-1'),
                style: { fill: 'url(#line-gradient)' }
            }),
            (0, a.jsx)('use', {
                href: ''.concat(o, '#heightmap-lines-2'),
                style: { fill: 'url(#line-gradient)' }
            })
        ]
    });
}
