n.d(t, {
    F: function () {
        return c;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(321494);
function u(e) {
    return '' === e || '-' === e;
}
let c = (e) => {
    let { value: t, onChange: n, className: a, minValue: c, maxValue: d } = e,
        [_, E] = i.useState(t),
        f = u(_) || (null != c && _ <= c),
        h = u(_) || (null != d && _ >= d),
        p = (e) => {
            n(u(e) ? (null != c ? c : 0) : e), E(e);
        };
    return (0, r.jsx)(o.FocusRing, {
        within: !0,
        children: (0, r.jsxs)('div', {
            className: s()(l.actions, a),
            children: [
                (0, r.jsx)(o.Clickable, {
                    onClick: (e) => {
                        if ((e.stopPropagation(), !f)) p(_ - 1);
                    },
                    tabIndex: -1,
                    className: s()(l.iconWrapper, l.__invalid_subtract, { [l.disabled]: f }),
                    children: (0, r.jsx)(o.MinusIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: s()(l.icon, { [l.disabled]: f })
                    })
                }),
                (0, r.jsx)(o.TextInput, {
                    value: ''.concat(_),
                    onChange: (e) => {
                        if (u(e)) return p(e);
                        let t = parseInt(e);
                        return isNaN(t) ? void 0 : null != d && t >= d ? p(d) : null != c && t <= c ? p(c) : p(t);
                    },
                    inputClassName: l.value
                }),
                (0, r.jsx)(o.Clickable, {
                    onClick: (e) => {
                        if ((e.stopPropagation(), !h)) p(_ + 1);
                    },
                    tabIndex: -1,
                    className: s()(l.iconWrapper, l.__invalid_add, { [l.disabled]: h }),
                    children: (0, r.jsx)(o.PlusSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: s()(l.icon, { [l.disabled]: h })
                    })
                })
            ]
        })
    });
};
