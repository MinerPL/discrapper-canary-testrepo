n.d(t, {
    Z: function () {
        return d;
    }
}), n(47120);
var a = n(735250), r = n(470079), i = n(120356), o = n.n(i), s = n(481060), l = n(455225);
function c(e) {
    let {
            alt: t,
            ...n
        } = e, [i, o] = r.useState(!0);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            i && (0, a.jsx)(s.Spinner, {
                type: s.Spinner.Type.LOW_MOTION,
                className: l.loader
            }),
            (0, a.jsx)('img', {
                ...n,
                alt: t,
                onLoad: () => o(!1)
            })
        ]
    });
}
function d(e) {
    let {
        src: t,
        backgroundSrc: n,
        alt: r,
        aspectRatio: i,
        className: s,
        imageChildClassName: d,
        ...u
    } = e;
    return (0, a.jsxs)('div', {
        className: o()(l.container, s),
        children: [
            (0, a.jsx)('img', {
                src: n,
                alt: r,
                className: l.backgroundImage
            }),
            (0, a.jsx)('div', { className: l.backgroundImageFilter }),
            (0, a.jsx)('div', {
                style: { aspectRatio: i },
                className: l.imageContainer,
                children: (0, a.jsx)(c, {
                    src: t,
                    alt: r,
                    className: o()(l.image, d),
                    ...u
                })
            })
        ]
    });
}
