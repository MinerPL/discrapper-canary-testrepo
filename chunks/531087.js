t.d(n, {
    Z: function () {
        return r;
    }
});
var i = t(735250);
t(470079);
var a = t(120356), s = t.n(a), l = t(325767), o = t(338681);
function r(e) {
    let {
        width: n = 16,
        height: t = 16,
        color: a = 'currentColor',
        foreground: r,
        className: c,
        ...d
    } = e;
    return (0, i.jsx)('svg', {
        className: s()(o.updateAvailable, c),
        ...(0, l.Z)(d),
        width: n,
        height: t,
        viewBox: '0 0 24 24',
        children: (0, i.jsxs)('g', {
            fill: 'none',
            fillRule: 'evenodd',
            children: [
                (0, i.jsx)('path', {
                    fill: a,
                    className: r,
                    fillRule: 'nonzero',
                    d: 'M5,8 L9,12 L6,12 C6,15.31 8.69,18 12,18 C13.01,18 13.97,17.75 14.8,17.3 L16.26,18.76 C15.03,19.54 13.57,20 12,20 C7.58,20 4,16.42 4,12 L1,12 L5,8 Z M18,12 C18,8.69 15.31,6 12,6 C10.99,6 10.03,6.25 9.2,6.7 L7.74,5.24 C8.97,4.46 10.43,4 12,4 C16.42,4 20,7.58 20,12 L23,12 L19,16 L15,12 L18,12 Z'
                }),
                (0, i.jsx)('polygon', { points: '24 0 0 0 0 24 24 24' })
            ]
        })
    });
}
