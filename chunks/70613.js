n.d(t, {
    Z: function () {
        return u;
    }
}), n(47120);
var a = n(735250), r = n(470079), i = n(887024);
let l = [n(992134)], s = ['#FFFFFF'], d = 1000 / 60, o = {
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
    let {
            className: t,
            firing: n = !0,
            wind: u = 2
        } = e, [c, f] = r.useState(null), [h, m] = r.useState(null), _ = (0, i.uR)(h, c), b = r.useMemo(() => new i.qA({ wind: u }), [u]), g = r.useCallback(() => {
            let e = null == h ? void 0 : h.getCanvas();
            if (null == e)
                return;
            let t = e.getBoundingClientRect();
            _.createConfetti({
                ...o,
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
        }, [
            _,
            h
        ]);
    return r.useEffect(() => {
        let e = n ? setInterval(g, d) : null;
        return () => clearInterval(e);
    }, [
        n,
        g
    ]), (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(i.O_, {
                ref: m,
                className: t,
                environment: b
            }),
            (0, a.jsx)(i.Ji, {
                ref: f,
                colors: s,
                sprites: l,
                spriteWidth: 6,
                spriteHeight: 6
            })
        ]
    });
}
