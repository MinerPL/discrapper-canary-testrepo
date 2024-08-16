n.d(t, {
    n: function () {
        return x;
    },
    t: function () {
        return p;
    }
}),
    n(47120);
var s = n(735250),
    o = n(470079),
    r = n(338545),
    a = n(442837),
    l = n(481060),
    i = n(393238),
    c = n(110924),
    d = n(607070);
let u = o.createContext({
    springConfig: {},
    isExpanded: !1
});
function p(e) {
    let t = o.useMemo(
        () => ({
            springConfig: e.springConfig,
            isExpanded: e.isExpanded
        }),
        [e.springConfig, e.isExpanded]
    );
    return (0, s.jsx)(u.Provider, {
        value: t,
        children: e.children
    });
}
function x(e) {
    var t;
    let { children: n } = e,
        { springConfig: p, isExpanded: x } = o.useContext(u),
        m = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        { ref: g, height: _ = null } = (0, i.Z)(),
        C = null !== (t = (0, c.Z)(_)) && void 0 !== t ? t : null,
        [{ height: f }, h] = (0, l.useSpring)(() => ({
            from: { height: 0 },
            config: p
        }));
    return (
        o.useLayoutEffect(() => {
            null !== _ &&
                h({
                    height: _,
                    immediate: !x || m || null === C
                });
        }, [_, h, x, m, C]),
        (0, s.jsx)(r.animated.div, {
            style: {
                height: null === C ? 'auto' : f,
                overflow: 'hidden'
            },
            children: (0, s.jsx)('div', {
                style: { overflow: 'hidden' },
                ref: g,
                children: n
            })
        })
    );
}
