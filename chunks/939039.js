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
            className: o,
            fill: a,
            width: '10',
            height: '1',
            x: '1',
            y: '6'
        })
    });
}
