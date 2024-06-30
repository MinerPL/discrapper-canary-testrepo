n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var s = n(120356), a = n.n(s), r = n(481060), l = n(909056);
function o(e) {
    let {
        padded: t = !0,
        inset: n = !1,
        active: s = !1,
        className: o,
        children: c,
        onClick: d,
        ...u
    } = e;
    return null != d ? (0, i.jsx)(r.Clickable, {
        onClick: d,
        tabIndex: null != d ? 0 : -1,
        className: a()(o, {
            [l.outer]: !n,
            [l.inset]: n,
            [l.padded]: t,
            [l.active]: s,
            [l.interactive]: null != d
        }),
        ...u,
        children: c
    }) : (0, i.jsx)('div', {
        className: a()(o, {
            [l.outer]: !n,
            [l.inset]: n,
            [l.padded]: t,
            [l.active]: s
        }),
        ...u,
        children: c
    });
}
