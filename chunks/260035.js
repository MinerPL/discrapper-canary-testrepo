n.d(t, {
    m: function () {
        return d;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(703533),
    s = n(442837),
    o = n(944486),
    l = n(745510),
    u = n(675654),
    c = n(688478);
function d(e) {
    let { children: t } = e,
        [n, d] = i.useState(null),
        [f, _] = i.useState(null),
        h = i.useRef(new Set()),
        [p, m] = i.useState(!1),
        g = (0, s.e7)([o.Z], () => o.Z.getCurrentlySelectedChannelId()),
        E = i.useCallback((e) => {
            h.current.delete(e), m(h.current.size > 0);
        }, []),
        v = i.useCallback((e) => (h.current.add(e), m(!0), () => E(e)), [E]),
        I = i.useCallback((e, t) => {
            for (let n of h.current) n(e, t);
        }, []);
    return (
        i.useEffect(() => {
            null == f || f.clearConfetti();
        }, [f, g]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.d, {
                    confettiCanvas: f,
                    spriteCanvas: n,
                    baseConfig: u.We,
                    addClickListener: v,
                    removeClickListener: E,
                    children: t
                }),
                (0, r.jsx)(a.O_, {
                    ref: _,
                    className: c.canvas,
                    environment: u.rq,
                    onClick: p ? I : void 0
                }),
                (0, r.jsx)(a.Ji, {
                    ref: d,
                    colors: u.Br,
                    sprites: u.CA,
                    spriteWidth: u.Ko,
                    spriteHeight: u.Ko
                })
            ]
        })
    );
}
