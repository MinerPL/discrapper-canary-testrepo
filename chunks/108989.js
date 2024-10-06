n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    i = n(887024);
let o = [n(123353)],
    l = ['#FFFFFF'],
    s = 1000 / 60,
    c = {
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
            value: {
                x: 0.05,
                y: 0.05
            }
        },
        opacity: {
            type: 'static',
            value: 0.3
        }
    };
function d(e) {
    let { className: t, firing: n = !0, wind: d = 2, sprites: u = o, spriteColors: f = l, confettiConfig: h } = e,
        [p, b] = a.useState(null),
        [m, g] = a.useState(null),
        _ = (0, i.uR)(m, p),
        x = a.useMemo(() => new i.qA({ wind: d }), [d]),
        v = a.useCallback(() => {
            let e = null == m ? void 0 : m.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            _.createConfetti({
                ...c,
                ...h,
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
        }, [_, m, h]);
    return (
        a.useEffect(() => {
            let e = n ? setInterval(v, s) : null;
            return () => clearInterval(e);
        }, [n, v]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(i.O_, {
                    ref: g,
                    className: t,
                    environment: x
                }),
                (0, r.jsx)(i.Ji, {
                    ref: b,
                    colors: f,
                    sprites: u,
                    spriteWidth: 6,
                    spriteHeight: 6
                })
            ]
        })
    );
}
