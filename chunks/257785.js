r.d(t, {
    E: function () {
        return c;
    },
    Z9: function () {
        return s;
    },
    wl: function () {
        return d;
    }
});
var a = r(735250);
r(470079);
var n = r(120356), i = r.n(n), o = r(481060), l = r(719556);
function c(e) {
    let {
        className: t,
        children: r
    } = e;
    return (0, a.jsx)('dl', {
        className: i()(l.properties, t),
        children: r
    });
}
function s(e) {
    let {
        name: t,
        children: r
    } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('dt', {
                className: l.propertyName,
                children: t
            }),
            (0, a.jsx)('dd', { children: r })
        ]
    });
}
function d(e) {
    let {value: t} = e;
    return (0, a.jsx)(o.Checkbox, {
        size: 16,
        value: t,
        shape: o.Checkbox.Shapes.SMALL_BOX,
        displayOnly: !0
    });
}
