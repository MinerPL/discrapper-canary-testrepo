n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(392711),
    o = n.n(s),
    c = n(100621),
    d = n(442837),
    u = n(481060),
    h = n(607070),
    m = n(317539);
let p = {
    mass: 10,
    tension: 550,
    friction: 140
};
function g(e) {
    let { className: t, pageMultiplier: n } = e,
        a = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        [s, g] = r.useState({
            x: 0,
            y: 0
        }),
        f = r.useMemo(
            () =>
                o().throttle((e) => {
                    if (a) return;
                    let t = (window.innerWidth - e.pageX * n) / 90;
                    g({
                        x: t,
                        y: (window.innerHeight - e.pageY * n) / 90
                    });
                }, 20),
            [n, a]
        );
    r.useEffect(() => (window.addEventListener('mousemove', f), () => window.removeEventListener('mousemove', f)), [f]);
    let [_, E] = (0, u.useSpring)(() => ({
        x: 0,
        y: 0,
        config: p
    }));
    return (
        r.useEffect(() => {
            E({
                x: s.x,
                y: s.y
            });
        }, [s.x, s.y, E]),
        (0, i.jsx)(c.animated.div, {
            style: {
                transform: (0, c.to)([_.x, _.y], (e, t) => 'translate3d('.concat(e, 'px, ').concat(t, 'px, 0)'))
            },
            className: l()(m.background, t)
        })
    );
}
