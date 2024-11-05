n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(846337);
function o(e) {
    let { keybind: t, separator: n = '+', className: s } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, o) =>
            (0, i.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, i.jsx)('span', {
                            className: a()(l.key, s),
                            children: e
                        }),
                        o === t.length - 1 ? void 0 : n
                    ]
                },
                o
            )
        )
    });
}
