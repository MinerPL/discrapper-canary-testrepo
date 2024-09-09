n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(607070),
    c = n(971865);
function d(e) {
    let { children: t, heading: n, subheading: a, className: d, scrollIntoView: _ = !1, headingColor: E = 'header-secondary' } = e,
        f = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        h = i.useRef(null);
    return (
        i.useEffect(() => {
            let e = h.current;
            if (null == e) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: f ? 'auto' : 'smooth' });
            });
            return () => cancelAnimationFrame(t);
        }, [f]),
        (0, r.jsxs)('section', {
            ref: _ ? h : void 0,
            className: s()(c.section, d),
            children: [
                null != n &&
                    (0, r.jsxs)('div', {
                        className: c.headings,
                        children: [
                            (0, r.jsx)(l.Heading, {
                                variant: 'text-xs/semibold',
                                color: E,
                                children: n
                            }),
                            null != a &&
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    children: a
                                })
                        ]
                    }),
                t
            ]
        })
    );
}
