r.d(t, {
    G: function () {
        return g;
    }
});
var a = r(735250);
r(470079);
var n = r(120356),
    s = r.n(n),
    i = r(442837),
    o = r(481060),
    l = r(607070),
    c = r(564032),
    d = r(196798),
    u = r(660348),
    f = r(872044),
    p = r(671581),
    m = r(830487),
    C = r(602476);
function _() {
    return (0, a.jsxs)('div', {
        className: c.attributionLogos,
        'aria-label': 'Discord x Pocketpair',
        children: [
            (0, a.jsx)(o.ClydeIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 22,
                'aria-hidden': !0
            }),
            (0, a.jsx)(o.Text, {
                variant: 'heading-sm/extrabold',
                tag: 'div',
                children: '|'
            }),
            (0, a.jsx)('img', {
                src: u,
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
}
function g(e) {
    let { category: t } = e,
        r = (0, i.e7)([l.Z], () => l.Z.useReducedMotion);
    return (0, a.jsxs)('div', {
        className: c.banner,
        'aria-label': t.name,
        children: [
            (0, a.jsxs)('div', {
                className: c.mainContent,
                children: [
                    (0, a.jsx)('img', {
                        src: f,
                        className: c.bannerImage,
                        alt: t.name,
                        'aria-hidden': !0
                    }),
                    (0, a.jsx)(_, {}),
                    (0, a.jsx)('img', {
                        src: p,
                        className: c.categoryLogo,
                        alt: t.name,
                        'aria-hidden': !0
                    }),
                    !r &&
                        (0, a.jsx)('img', {
                            src: d,
                            className: c.animatedLayer,
                            alt: '',
                            'aria-hidden': !0
                        }),
                    (0, a.jsx)(o.Text, {
                        className: c.summary,
                        variant: 'text-md/normal',
                        children: t.summary
                    })
                ]
            }),
            (0, a.jsx)('img', {
                src: C,
                className: s()(c.overflowImage, c.overflowRight),
                alt: '',
                'aria-hidden': !0
            }),
            (0, a.jsx)('img', {
                src: m,
                className: s()(c.overflowImage, c.overflowLeft),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
}
