n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(819758),
    o = n(709401);
function l(e) {
    let { className: t, children: n, forceUseColor: i = !1, hideStars: l } = e;
    return (0, r.jsxs)('span', {
        className: a()(o.container, t, { [o.containerColored]: i }),
        children: [
            n,
            l
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [(0, r.jsx)(s.Z, { foreground: o.sparkleStarTopRight }), (0, r.jsx)(s.Z, { foreground: o.sparkleStarRight }), (0, r.jsx)(s.Z, { foreground: o.sparkleStarBottomLeft })]
                  })
        ]
    });
}
