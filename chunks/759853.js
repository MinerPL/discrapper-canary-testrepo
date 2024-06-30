n(47120);
var s = n(735250), o = n(470079), r = n(887024), a = n(920906), i = n(442837), l = n(110924), c = n(607070), d = n(819640), u = n(569379), p = n(675654), x = n(251217), m = n(197857);
let g = ['#51BC9D'];
t.Z = e => {
    var t;
    let {
            quest: n,
            progressBarRef: C,
            isExpanded: f
        } = e, {
            completionSpring: h,
            startCompletionAnimation: _
        } = (0, u.GX)(), E = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, S = o.useRef(!1), T = (0, i.e7)([c.Z], () => c.Z.useReducedMotion), N = o.useRef(null), v = (0, i.e7)([d.Z], () => d.Z.hasLayers()), j = (0, l.Z)(v), [A, B] = o.useState(null), [b, R] = o.useState(null), O = o.useRef(new r.qA({
            gravity: 0,
            wind: 0
        })), y = (0, r.uR)(A, b), I = o.useCallback(() => {
            if (T)
                return;
            let e = C.current, t = N.current;
            if (null != t && null != e && y.isReady) {
                var n, s, o, r;
                let {
                        x: a,
                        y: i
                    } = e.getBoundingClientRect(), {
                        x: l,
                        y: c
                    } = t.getBoundingClientRect();
                y.createMultipleConfetti((n = a - l, s = i - c, o = e.clientHeight, r = e.clientWidth, {
                    ...p.We,
                    position: {
                        type: 'static-random',
                        minValue: {
                            x: n,
                            y: s
                        },
                        maxValue: {
                            x: n + o,
                            y: s + r
                        }
                    },
                    velocity: {
                        type: 'static-random',
                        minValue: {
                            x: -20,
                            y: -20
                        },
                        maxValue: {
                            x: 20,
                            y: 20
                        }
                    },
                    opacity: {
                        type: 'linear',
                        value: 2,
                        addValue: -0.1
                    },
                    dragCoefficient: {
                        type: 'static',
                        value: 0.0001
                    },
                    size: {
                        type: 'static-random',
                        minValue: 2,
                        maxValue: 3
                    }
                }), 100);
            }
        }, [
            C,
            N,
            y,
            T
        ]), M = (0, l.Z)(f);
    return (o.useEffect(() => {
        E && f && !M && (_(), I());
    }, [
        f,
        E,
        _,
        I,
        M
    ]), o.useEffect(() => {
        E && !v && j && setTimeout(() => {
            _(), I();
        }, 200);
    }, [
        E,
        j,
        v,
        _,
        I
    ]), o.useEffect(() => {
        if (!!y.isReady)
            !S.current && E && (_(), I()), S.current = E;
    }, [
        E,
        S,
        I,
        _,
        y
    ]), T) ? null : (0, s.jsxs)('div', {
        className: x.wrapper,
        'aria-hidden': 'true',
        ref: N,
        children: [
            (0, s.jsx)(a.animated.div, {
                className: x.background,
                style: { opacity: h }
            }),
            (0, s.jsx)(r.O_, {
                ref: B,
                className: x.confetti,
                environment: O.current
            }),
            (0, s.jsx)(r.Ji, {
                ref: R,
                sprites: [m],
                colors: g,
                spriteWidth: p.Ko,
                spriteHeight: p.Ko
            })
        ]
    });
};
