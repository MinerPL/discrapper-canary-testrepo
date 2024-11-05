t.d(s, {
    Z: function () {
        return p;
    }
});
var n = t(200651),
    r = t(120356),
    o = t.n(r),
    a = t(927359),
    i = t(325767),
    c = t(823188),
    l = t(860553);
let u = 'premium_tier_gradient',
    d = 'smaller_sparkle_gradient';
function f(e) {
    let { width: s = 14, height: t = 15, color: r = 'white', foreground: o, ...a } = e;
    return (0, n.jsxs)('svg', {
        ...(0, i.Z)({ ...a }),
        preserveAspectRatio: 'none',
        width: s,
        height: t,
        viewBox: '0 0 14 15',
        className: o,
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
            (0, n.jsx)('defs', {
                children: (0, n.jsxs)('linearGradient', {
                    id: u,
                    x1: '0%',
                    y1: '0%',
                    x2: '100%',
                    y2: '0%',
                    children: [
                        (0, n.jsx)('stop', {
                            offset: '0%',
                            stopColor: '#8547C6'
                        }),
                        (0, n.jsx)('stop', {
                            offset: '50%',
                            stopColor: '#B845C1'
                        }),
                        (0, n.jsx)('stop', {
                            offset: '100%',
                            stopColor: '#AB5D8A'
                        })
                    ]
                })
            }),
            (0, n.jsxs)('linearGradient', {
                id: d,
                x1: '-4.95474',
                y1: '5.44067',
                x2: '11.2384',
                y2: '8.58386',
                gradientUnits: 'userSpaceOnUse',
                children: [
                    (0, n.jsx)('stop', { stopColor: '#8547C6' }),
                    (0, n.jsx)('stop', {
                        offset: '0.52899',
                        stopColor: '#B845C1'
                    }),
                    (0, n.jsx)('stop', {
                        offset: '1',
                        stopColor: '#AB5D8A'
                    })
                ]
            }),
            (0, n.jsx)('path', {
                d: 'M8.59403 1.52779C8.04647 0.0480288 5.95353 0.0480288 5.40597 1.52779L4.56476 3.8011C4.36219 4.34854 3.93057 4.78016 3.38313 4.98273L1.10982 5.82394C-0.36994 6.3715 -0.36994 8.46444 1.10982 9.012L3.38313 9.8532C3.93057 10.0558 4.36219 10.4874 4.56476 11.0348L5.40597 13.3081C5.95353 14.7879 8.04647 14.7879 8.59403 13.3081L9.43524 11.0348C9.63781 10.4874 10.0694 10.0558 10.6169 9.8532L12.8902 9.012C14.3699 8.46444 14.3699 6.3715 12.8902 5.82394L10.6169 4.98273C10.0694 4.78016 9.63781 4.34854 9.43524 3.8011L8.59403 1.52779Z',
                fill: r
            })
        ]
    });
}
function p(e) {
    let { className: s, endsAt: t, messageStyle: r, upperCase: i, showSparkles: p } = e,
        g = (0, a.Z)(t, r);
    return (
        i && g.toUpperCase(),
        (0, n.jsxs)('div', {
            className: o()(s, l.countDown),
            children: [
                p
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(f, {
                                  foreground: l.sparkleStar1,
                                  color: 'url(#'.concat(d, ')')
                              }),
                              (0, n.jsx)(f, {
                                  foreground: l.sparkleStar2,
                                  color: 'url(#'.concat(u, ')')
                              })
                          ]
                      })
                    : null,
                (0, n.jsx)(c.mn, {
                    text: g,
                    colorOptions: c.VE.PREMIUM_TIER_2_NEW_GRADIENT_FILL
                })
            ]
        })
    );
}
