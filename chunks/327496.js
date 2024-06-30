n.d(t, {
    L: function () {
        return E;
    }
}), n(653041);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(266067), l = n(481060), u = n(624138), c = n(209091);
let d = [
    18,
    18,
    16,
    16,
    14,
    12,
    10
];
function _(e, t) {
    return o()({
        [c.childWrapper]: !0,
        [c.childWrapperNoHoverBg]: 'always' === e,
        [c.childWrapperHoverScale]: 'on-hover' === e && t
    });
}
let E = e => {
    let t, n, {
            backgroundStyle: a = 'always',
            children: E,
            icon: f,
            name: h,
            ariaLabel: p,
            className: m,
            style: I,
            to: T,
            onClick: g,
            selected: S = !1,
            ...A
        } = e, N = (0, s.k6)();
    if (null == f && null != h) {
        var v;
        n = null !== (v = d[(t = (0, u.Zg)(h)).length - 1]) && void 0 !== v ? v : d[d.length - 1];
    }
    let O = i.useCallback(e => {
        if (null == T);
        else if ('string' == typeof T)
            N.push(T);
        else {
            let {
                pathname: e = '',
                state: t
            } = T;
            N.push(e, t);
        }
        null != g && g(e);
    }, [
        N,
        T,
        g
    ]);
    return (0, r.jsxs)(l.Clickable, {
        ...A,
        onClick: O,
        className: o()(m, c.wrapper, { [c.selected]: S }),
        'aria-label': null != p && '' !== p ? p : null != h ? h : '',
        style: {
            ...I,
            fontSize: n
        },
        focusProps: { enabled: !1 },
        children: [
            null != t ? (0, r.jsx)('div', {
                className: o()(_(a, !1), c.acronym),
                'aria-hidden': !0,
                children: t
            }) : null,
            null != f ? (0, r.jsx)('img', {
                className: c.icon,
                src: f,
                alt: ' ',
                width: 48,
                height: 48,
                'aria-hidden': !0
            }) : null,
            null != E ? (0, r.jsx)('div', {
                className: _(a, !0),
                children: E
            }) : null
        ]
    });
};
