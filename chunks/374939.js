n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(17845),
    r = n(89866);
function l(e) {
    let { title: t, description: n, onScroll: l, button: o, bannerClassName: c, bannerBackground: d, children: u } = e;
    return (0, i.jsxs)(a.AdvancedScroller, {
        onScroll: l,
        className: r.container,
        children: [
            (0, i.jsx)(s.Z, {
                title: t,
                description: n,
                button: o,
                className: c,
                background: d
            }),
            (0, i.jsx)('section', {
                className: r.contentContainer,
                children: (0, i.jsx)('div', {
                    className: r.content,
                    children: u
                })
            })
        ]
    });
}
