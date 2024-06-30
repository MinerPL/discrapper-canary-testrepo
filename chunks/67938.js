n.d(t, {
    G: function () {
        return h;
    }
});
var s = n(735250);
n(470079);
var r = n(120356), a = n.n(r), o = n(442837), i = n(481060), l = n(607070), c = n(873268), d = n(196798), u = n(660348), p = n(872044), g = n(671581), f = n(830487), C = n(602476);
function m() {
    return (0, s.jsxs)('div', {
        className: c.attributionLogos,
        'aria-label': 'Discord x Pocketpair',
        children: [
            (0, s.jsx)(i.ClydeIcon, {
                size: 'custom',
                color: 'currentColor',
                height: 22,
                'aria-hidden': !0
            }),
            (0, s.jsx)(i.Text, {
                variant: 'heading-sm/extrabold',
                tag: 'div',
                children: '|'
            }),
            (0, s.jsx)('img', {
                src: u,
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
}
function h(e) {
    let {category: t} = e, n = (0, o.e7)([l.Z], () => l.Z.useReducedMotion);
    return (0, s.jsxs)('div', {
        className: a()(c.banner),
        'aria-label': t.name,
        children: [
            (0, s.jsxs)('div', {
                className: c.mainContent,
                children: [
                    (0, s.jsx)('img', {
                        src: p,
                        className: c.bannerImage,
                        alt: t.name,
                        'aria-hidden': !0
                    }),
                    (0, s.jsx)(m, {}),
                    (0, s.jsx)('img', {
                        src: g,
                        className: c.categoryLogo,
                        alt: t.name,
                        'aria-hidden': !0
                    }),
                    !n && (0, s.jsx)('img', {
                        src: d,
                        className: c.animatedLayer,
                        alt: '',
                        'aria-hidden': !0
                    }),
                    (0, s.jsx)(i.Text, {
                        className: c.summary,
                        variant: 'text-md/normal',
                        children: t.summary
                    })
                ]
            }),
            (0, s.jsx)('img', {
                src: C,
                className: a()(c.overflowImage, c.overflowRight),
                alt: '',
                'aria-hidden': !0
            }),
            (0, s.jsx)('img', {
                src: f,
                className: a()(c.overflowImage, c.overflowLeft),
                alt: '',
                'aria-hidden': !0
            })
        ]
    });
}
