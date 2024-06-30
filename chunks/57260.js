n.d(t, {
    z: function () {
        return _;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(920906), l = n(442837), u = n(393238), c = n(607070), d = n(517236);
function _(e) {
    let {
            children: t,
            className: n,
            collapsibleContent: a,
            isExpanded: _
        } = e, [E, f] = i.useState(!1), h = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), [p, m] = i.useState(!0), [I, T] = i.useState(!1), g = null != _ ? _ : E, {
            ref: S,
            height: A = 0
        } = (0, u.Z)(), {
            ref: N,
            height: v = 0
        } = (0, u.Z)(), O = (0, s.useSpring)({
            height: g ? A + v : v,
            immediate: p || h,
            config: s.config.stiff,
            onRest: () => T(!0)
        }), R = i.useCallback(() => {
            f(!E);
        }, [
            E,
            f
        ]);
    return i.useLayoutEffect(() => {
        let e = setTimeout(() => {
            m(!1);
        }, 100);
        return () => clearTimeout(e);
    }, []), (0, r.jsx)('div', {
        className: o()(d.collapseable, { [d.toggled]: g }, n),
        children: (0, r.jsxs)(s.animated.div, {
            className: o()(d.contentExpandContainer, { [d.showOverflow]: g && I }),
            style: O,
            children: [
                (0, r.jsx)('div', {
                    ref: N,
                    className: o()(d.header, { [d.toggled]: g }),
                    children: t({ onClick: R })
                }),
                (0, r.jsx)('div', {
                    ref: S,
                    children: a
                })
            ]
        })
    });
}
