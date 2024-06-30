n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(481060), l = n(582112);
function u(e) {
    let {
            children: t,
            'aria-label': n,
            className: a,
            position: u,
            ...c
        } = e, d = i.useRef(null), _ = null != n ? n : 'string' == typeof t && t;
    return (0, r.jsx)(s.Tooltip, {
        ...c,
        position: null != u ? u : 'top',
        delay: 500,
        text: t,
        'aria-label': _,
        children: n => {
            let {
                onMouseEnter: i,
                onMouseLeave: s
            } = n;
            return (0, r.jsx)('div', {
                className: o()(a, l.overflow),
                ref: d,
                'aria-hidden': e['aria-hidden'],
                onMouseEnter: () => {
                    let {current: e} = d;
                    null != e && e.offsetWidth < e.scrollWidth && (null == i || i());
                },
                onMouseLeave: s,
                children: t
            });
        }
    });
}
