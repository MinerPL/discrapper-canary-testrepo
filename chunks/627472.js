n.d(t, {
    z: function () {
        return u;
    }
}),
    n(411104);
var r = n(200651),
    i = n(192379),
    a = n(803997),
    s = n.n(a),
    o = n(489948),
    l = n(780900);
function u(e, t) {
    let n = (0, l.G6)(e);
    return i.forwardRef(function (a, u) {
        let { children: c, className: d, dir: f = 'ltr', orientation: _ = 'vertical', paddingFix: h = !0, fade: p = !1, onScroll: m, style: g, ...E } = a,
            v = i.useRef(null),
            I = (0, l.tT)({
                paddingFix: h,
                orientation: _,
                dir: f,
                className: d,
                scrollerRef: v,
                specs: n
            });
        return (0, r.jsx)('div', {
            ref: (e) => {
                'function' == typeof u ? u(e) : null != u && (u.current = e), (v.current = e);
            },
            className: s()(d, {
                [e]: !0,
                [t]: p
            }),
            style: (0, l.uT)(g, _),
            dir: f,
            ...E,
            children: (0, r.jsxs)(o.Jc, {
                containerRef: v,
                children: [c, I]
            })
        });
    });
}
