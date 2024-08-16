n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(434650),
    o = n(393903),
    c = n(353093),
    u = n(979264),
    d = n(792059);
t.Z = a.memo(function (e) {
    let { children: t, isOverlay: n, contextGuildId: s, ...h } = e,
        m = a.useRef(null),
        [p, _] = a.useState({ maskImage: 'none' }),
        f = a.useCallback(() => {
            var e, t;
            if (n) {
                _({ maskImage: 'none' });
                return;
            }
            let i = null === (e = E.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                a = null === (t = m.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
            if (null == i || null == a) {
                _({ maskImage: 'none' });
                return;
            }
            let s = a.right - i.right,
                l = a.width - s;
            if (l > a.width) {
                _({ maskImage: 'none' });
                return;
            }
            _({ maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) '.concat(l, 'px)') });
        }, []),
        E = (0, o.y)(f),
        g = (0, c.p0)(h.userId, s);
    a.useEffect(() => {
        if (null != E.current) f();
    }, [g]);
    let C = (0, r.O)(f);
    return (0, i.jsxs)('div', {
        className: l()(d.container, n && d.isOverlayContainer),
        ref: E,
        children: [
            (0, i.jsx)('div', {
                className: d.usernameContainer,
                children: t
            }),
            (0, i.jsx)('div', {
                className: d.chipletParent,
                ref: C,
                children: (0, i.jsx)('span', {
                    className: l()(d.chipletContainer, !g && n && d.noPadding),
                    ref: m,
                    style: p,
                    children: (0, i.jsx)(u.ZP, {
                        ...h,
                        contextGuildId: s,
                        className: l()(h.className, n && d.isOverlayTag)
                    })
                })
            })
        ]
    });
});
