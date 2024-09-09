t.d(s, {
    Z: function () {
        return l;
    }
});
var n = t(735250);
t(470079);
var a = t(120356),
    r = t.n(a),
    o = t(481060),
    i = t(679768),
    c = t(447421);
function l(e) {
    let { copy: s, showStars: t = !0, className: a } = e;
    return (0, n.jsxs)('div', {
        className: r()(c.badgeContainer, a),
        children: [
            t &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)('span', {
                            className: r()(c.star, c.starLeft),
                            children: (0, n.jsx)(i.Z, {
                                width: '10',
                                height: '10'
                            })
                        }),
                        (0, n.jsx)('span', {
                            className: r()(c.star, c.starRight),
                            children: (0, n.jsx)(i.Z, {
                                width: '14',
                                height: '14'
                            })
                        })
                    ]
                }),
            (0, n.jsx)(o.Text, {
                variant: 'eyebrow',
                className: c.newBadge,
                children: s
            })
        ]
    });
}
