n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(887024);
let r = [n(123353)],
    l = ['#FFFFFF'],
    o = 1000 / 60,
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
function u(e) {
    let { className: t, firing: n = !0, wind: u = 2 } = e,
        [d, _] = a.useState(null),
        [E, I] = a.useState(null),
        m = (0, s.uR)(E, d),
        T = a.useMemo(() => new s.qA({ wind: u }), [u]),
        h = a.useCallback(() => {
            let e = null == E ? void 0 : E.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            m.createConfetti({
                ...c,
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
        }, [m, E]);
    return (
        a.useEffect(() => {
            let e = n ? setInterval(h, o) : null;
            return () => clearInterval(e);
        }, [n, h]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.O_, {
                    ref: I,
                    className: t,
                    environment: T
                }),
                (0, i.jsx)(s.Ji, {
                    ref: _,
                    colors: l,
                    sprites: r,
                    spriteWidth: 6,
                    spriteHeight: 6
                })
            ]
        })
    );
}
