n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(47120);
var a = n(735250),
    i = n(470079),
    l = n(558522),
    s = n(175778);
function r(e) {
    let { imageBackground: t, applicationName: n, imageClassName: r, imageNotFoundClassName: o } = e,
        [c, d] = i.useState(!1);
    return 'not-found' === t.state || c
        ? (0, a.jsx)('div', {
              className: o,
              children: (0, a.jsx)(l.Z, { className: s.brokenImageIcon })
          })
        : 'loading' === t.state
          ? null
          : (0, a.jsx)('img', {
                alt: n,
                className: r,
                src: t.url,
                onError: () => d(!0)
            });
}
