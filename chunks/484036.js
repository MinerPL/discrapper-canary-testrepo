r.d(t, {
    Z: function () {
        return d;
    }
}), r(47120);
var a = r(735250), n = r(470079), i = r(120356), o = r.n(i), l = r(347469), c = r(977372);
function s(e) {
    let {
            resizableNode: t,
            minHeight: r,
            onResize: n
        } = e, i = (0, l.Z)({
            minDimension: r,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: l.y.VERTICAL_TOP,
            usePointerEvents: !0
        });
    return (0, a.jsx)('div', {
        onPointerDown: i,
        className: c.resizeHandle
    });
}
function d(e) {
    let {
            children: t,
            className: r,
            initialHeight: i,
            minHeight: l
        } = e, d = n.useRef(null), [u, h] = n.useState(i);
    return (0, a.jsxs)('div', {
        ref: d,
        className: c.container,
        style: {
            minHeight: l,
            height: u
        },
        children: [
            (0, a.jsx)(s, {
                resizableNode: d,
                minHeight: l,
                onResize: h
            }),
            (0, a.jsx)('div', {
                className: o()(c.subPanelContent, r),
                children: t
            })
        ]
    });
}
