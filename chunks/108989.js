n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(703533);
let a = [n(123353)],
    o = ['#FFFFFF'],
    s = 1000 / 60,
    u = {
        velocity: {
            type: 'static-random',
            minValue: {
                x: 0,
                y: 1
            },
            maxValue: {
                x: 3,
                y: 3
            }
        },
        rotation: {
            type: 'linear-random',
            minValue: {
                x: 0,
                y: 0,
                z: 0
            },
            maxValue: {
                x: 0,
                y: 0,
                z: 360
            },
            minAddValue: {
                x: 0,
                y: 0,
                z: -5
            },
            maxAddValue: {
                x: 0,
                y: 0,
                z: 5
            }
        },
        size: {
            type: 'static-random',
            minValue: 2,
            maxValue: 6
        },
        dragCoefficient: {
            type: 'static',
            value: 830
        },
        opacity: {
            type: 'static',
            value: 0.3
        }
    };
function c(e) {
    let { className: t, firing: n = !0, wind: c = 2, sprites: d = a, spriteColors: f = o, confettiConfig: C } = e,
        [_, m] = l.useState(null),
        [L, S] = l.useState(null),
        p = (0, r.uR)(L, _),
        T = l.useMemo(() => new r.qA({ wind: c }), [c]),
        E = l.useCallback(() => {
            let e = null == L ? void 0 : L.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            p.createConfetti({
                ...u,
                ...C,
                position: {
                    type: 'static-random',
                    minValue: {
                        x: -t.width / 2,
                        y: -6
                    },
                    maxValue: {
                        x: t.width,
                        y: -6
                    }
                }
            });
        }, [p, L, C]);
    return (
        l.useEffect(() => {
            let e = n ? setInterval(E, s) : null;
            return () => clearInterval(e);
        }, [n, E]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.O_, {
                    ref: S,
                    className: t,
                    environment: T
                }),
                (0, i.jsx)(r.Ji, {
                    ref: m,
                    colors: f,
                    sprites: d,
                    spriteWidth: 6,
                    spriteHeight: 6
                })
            ]
        })
    );
}
