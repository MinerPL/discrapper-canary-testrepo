n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(735250);
n(470079);
var i = n(325767);
function a(e) {
    let {
        width: t = 12,
        height: n = 12,
        color: a = 'currentColor',
        foreground: o,
        ...s
    } = e;
    return (0, r.jsx)('svg', {
        ...(0, i.Z)(s),
        width: t,
        height: n,
        viewBox: '0 0 12 12',
        children: (0, r.jsx)('rect', {
            width: '9',
            height: '9',
            x: '1.5',
            y: '1.5',
            fill: 'none',
            stroke: a,
            className: o
        })
    });
}
