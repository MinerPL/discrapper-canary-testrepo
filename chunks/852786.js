n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(800385);
function l(e) {
    let { className: t, width: n, height: a, delayMs: l } = e,
        u = i.useMemo(() => {
            let e = {};
            return null != n && (e.width = n), null != a && (e.height = a), null != l && (e.animationDelay = ''.concat(l, 'ms')), e;
        }, [n, a, l]);
    return (0, r.jsx)('div', {
        className: s()(o.placeholderSkeleton, t),
        style: u
    });
}
