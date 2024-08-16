t.d(n, {
    Z: function () {
        return c;
    }
}),
    t(47120);
var r = t(735250),
    i = t(470079),
    o = t(120356),
    l = t.n(o),
    u = t(481060),
    a = t(821260);
function s(e) {
    let { alt: n, ...t } = e,
        [o, l] = i.useState(!0);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o &&
                (0, r.jsx)(u.Spinner, {
                    type: u.Spinner.Type.LOW_MOTION,
                    className: a.loader
                }),
            (0, r.jsx)('img', {
                ...t,
                alt: n,
                onLoad: () => l(!1)
            })
        ]
    });
}
function c(e) {
    let { src: n, backgroundSrc: t, alt: i, aspectRatio: o, className: u, imageChildClassName: c, ...d } = e;
    return (0, r.jsxs)('div', {
        className: l()(a.container, u),
        children: [
            (0, r.jsx)('img', {
                src: t,
                alt: i,
                className: a.backgroundImage
            }),
            (0, r.jsx)('div', { className: a.backgroundImageFilter }),
            (0, r.jsx)('div', {
                style: { aspectRatio: o },
                className: a.imageContainer,
                children: (0, r.jsx)(s, {
                    src: n,
                    alt: i,
                    className: l()(a.image, c),
                    ...d
                })
            })
        ]
    });
}
