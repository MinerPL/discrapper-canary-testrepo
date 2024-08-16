n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    s = n(891155);
function o(e) {
    let { total: t, users: n, videoLimit: l } = e;
    return (0, i.jsxs)('div', {
        className: s.wrapper,
        children: [
            (0, i.jsxs)('span', {
                className: r()(s.users, {
                    [s.video]: l,
                    [s.extraLong]: n >= 100
                }),
                children: [
                    l
                        ? (0, i.jsx)(a.VideoIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: s.videoIcon
                          })
                        : null,
                    n.toString().padStart(2, '0')
                ]
            }),
            (0, i.jsx)('span', {
                className: r()(s.total, { [s.extraLong]: t >= 100 }),
                children: t.toString().padStart(2, '0')
            })
        ]
    });
}
