n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(688953);
function u(e) {
    let { children: t, 'aria-label': n, className: a, position: u, ...c } = e,
        d = i.useRef(null),
        _ = null != n ? n : 'string' == typeof t && t;
    return (0, r.jsx)(o.Tooltip, {
        ...c,
        position: null != u ? u : 'top',
        delay: 500,
        text: t,
        'aria-label': _,
        children: (n) => {
            let { onMouseEnter: i, onMouseLeave: o } = n;
            return (0, r.jsx)('div', {
                className: s()(a, l.overflow),
                ref: d,
                'aria-hidden': e['aria-hidden'],
                onMouseEnter: () => {
                    let { current: e } = d;
                    null != e && e.offsetWidth < e.scrollWidth && (null == i || i());
                },
                onMouseLeave: o,
                children: t
            });
        }
    });
}
