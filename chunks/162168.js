n.d(t, {
    Z: function () {
        return r;
    }
});
var s = n(735250);
n(470079);
var a = n(325767);
function r(e) {
    let {
        width: t = 80,
        height: n = 20,
        color: r = 'currentColor',
        foreground: i,
        ...l
    } = e;
    return (0, s.jsxs)('svg', {
        ...(0, a.Z)(l),
        width: t,
        height: n,
        viewBox: '0 0 '.concat(t, ' ').concat(n),
        children: [
            (0, s.jsx)('pattern', {
                id: 'pill-frame-pattern',
                width: 8 / t,
                height: '1',
                children: (0, s.jsx)('path', {
                    d: 'm0 0h8v20h-8zm4 2c-1.1045695 0-2 .8954305-2 2v12c0 1.1045695.8954305 2 2 2s2-.8954305 2-2v-12c0-1.1045695-.8954305-2-2-2z',
                    fillRule: 'evenodd',
                    fill: r,
                    className: i
                })
            }),
            (0, s.jsx)('rect', {
                fill: 'url(#pill-frame-pattern)',
                height: '100%',
                width: '100%'
            })
        ]
    });
}
