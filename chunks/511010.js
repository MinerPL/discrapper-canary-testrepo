var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(132338), o = n(105461);
let c = a.forwardRef(function (e, t) {
    let {
            className: n,
            isBeforeGroup: a = !1,
            ...l
        } = e, {children: c} = l;
    return (0, i.jsx)(r.Z, {
        ...l,
        ref: t,
        role: 'separator',
        'aria-label': 'string' == typeof c ? c : void 0,
        className: s()(n, {
            [o.divider]: !0,
            [o.hasContent]: null != c,
            [o.beforeGroup]: a
        })
    });
});
t.Z = a.memo(c);
