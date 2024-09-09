l.d(n, {
    Z: function () {
        return a;
    }
}),
    l(47120);
var o = l(735250),
    t = l(470079),
    i = l(225433),
    s = l(599399);
function a(e) {
    let { hasSetEmoji: n, onClick: l, children: a } = e,
        [r, d] = t.useState(!1);
    return (0, o.jsxs)('div', {
        className: s.container,
        onMouseEnter: () => {
            if (n) {
                d(!0);
                return;
            }
            d(!1);
        },
        onMouseLeave: () => {
            d(!1);
        },
        children: [
            a,
            n &&
                r &&
                (0, o.jsx)(i.Z, {
                    onClick: l,
                    className: s.removeButton
                })
        ]
    });
}
