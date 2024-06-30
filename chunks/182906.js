n.d(t, {
    Z: function () {
        return r;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(558522), l = n(489391);
function r(e) {
    let {
            imageBackground: t,
            applicationName: n,
            imageClassName: r,
            imageNotFoundClassName: o
        } = e, [c, d] = a.useState(!1);
    return 'not-found' === t.state || c ? (0, i.jsx)('div', {
        className: o,
        children: (0, i.jsx)(s.Z, { className: l.brokenImageIcon })
    }) : 'loading' === t.state ? null : (0, i.jsx)('img', {
        alt: n,
        className: r,
        src: t.url,
        onError: () => d(!0)
    });
}
